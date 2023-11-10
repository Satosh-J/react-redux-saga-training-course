
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource, } from 'axios';
import { actionChannel, take, fork, call, put, delay } from 'redux-saga/effects';

const API_INVOCATION = 'API_INVOCATION';
const ALREADY_EXISTS = 'ALREADY_EXISTS';

const apiType = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

interface CreateAxiosDefaults extends AxiosRequestConfig {
    headers: {
        Accept: string;
        'Content-Type': string;
        'Access-Control-Allow-Methods': string;
        'Access-Control-Allow-Headers': string[];
    };
}

const configuration: CreateAxiosDefaults = {
    baseURL: '/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': [
            'Origin',
            'Accept',
            'X-Requested-With',
            'X-B3-TraceId',
            'Content-Type',
            'X-B3-ParentSpanId',
            'X-B3-SpanId',
            'X-B3-Sampled',
            'Authorization',
        ],
    },
    timeout: 5000,
};

const api: AxiosInstance = axios.create(configuration);

interface Error {
    cause: string;
}

interface Action {
    payload: {
        action: string;
        method: 'POST' | 'GET' | 'PUT' | 'DELETE';
        url: string;
        data?: any;
    };
}


const pendingRequests: Record<string, any> = {
};

const similarPendingRequestExist = (actionType: string, url: string): boolean =>
    !!pendingRequests[actionType]?.config.url && pendingRequests[actionType]?.config.url === url;


function* dispatchPending(actionType: string, action: Action, payload: any): any {
    yield put({ type: `${actionType}_PENDING`, actualAction: action, payload });
}

function* dispatchFulfilled(action: Action, response: any): any {
    yield put({ type: `${action.payload.action}_FULFILLED`, actualAction: action, payload: { data: response.data } });
}

function* dispatchRejected(actionType: string, action: Action, error: Error): any {
    yield put({ type: `${actionType}_REJECTED`, actualAction: action, payload: { response: error } });
}

function* invokeAPI(action: Action): any {
    const { payload } = action;
    const { method, url, data, action: actionType } = payload;

    try {
        yield* dispatchPending(payload.action, action, payload);

        let response: AxiosResponse;

        switch (method) {
            case apiType.GET: {

                if (similarPendingRequestExist(actionType, url)) {
                    throw new Error(
                        'Similar axios request detected!'
                        // , { cause: ALREADY_EXISTS }
                    );
                } else {

                    const source: CancelTokenSource = axios.CancelToken.source();
                    pendingRequests[actionType] = { config: { url, api, source } };

                    response = yield call([api, api.get], url, { cancelToken: source.token });
                }
                break;
            }

            case apiType.POST:
                response = yield call([api, api.post], url, data,);
                break;

            case apiType.DELETE:

                // response = yield call(axios.delete, url, data, {...apiConfig} );
                response = yield call([api, api.delete], url,);
                break;
            case apiType.PUT:
                response = yield call([api, api.put], url, data,);
                break;


            default:
                throw new Error(`API method ${method} is not supported!`);
        }

        yield* dispatchFulfilled(action, response);
        delete pendingRequests[actionType];
        // if (apiConfig && apiConfig.resolve) {
        //     apiConfig.resolve(response.data);
        // }
    } catch (error: any) {
        if (error.cause !== ALREADY_EXISTS) {
            delete pendingRequests[actionType];
        }
        yield* dispatchRejected(payload.action, action, error);
        // if (apiConfig && apiConfig.reject) {
        //     apiConfig.reject(error);
        // }
    }
}


function* apiSaga(): any {
    const actionQueue = yield actionChannel(API_INVOCATION);
    const keepWatching = true;

    while (keepWatching) {
        const action: Action = yield take(actionQueue);
        yield fork(invokeAPI, action);
    }
}

export { invokeAPI };
export default apiSaga;
