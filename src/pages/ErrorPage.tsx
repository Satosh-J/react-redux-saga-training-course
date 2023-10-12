import { useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();

    function isError(error: any): error is { statusText: string } {
        return "statusText" in error;
    }

    return (
        <>
            <h1>
                Sorry, an error has occurred
            </h1>
            {isError(error) && (
                <p>
                    {error.statusText}
                </p>
            )}
        </>
    );
}