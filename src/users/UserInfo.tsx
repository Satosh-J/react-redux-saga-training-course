import { useState } from 'react'
import { NewUserData, UserData } from './types';

type Props = {
    onUpdate: (userId: number, newUser: NewUserData) => void;
    onDelete: (userId: number) => void;
    user: UserData
    loading: boolean
};

export function UserInfo({ user, onUpdate, onDelete, loading }: Props) {

    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [zipCode, setZipCode] = useState(user.zipcode)
    const [state, setState] = useState(user.state)
    const [address, setAddress] = useState(user.address)

    const [isEdit, setIsEdit] = useState(false)

    const handleUpdateClick = (userId: number, user: NewUserData) => {


        // e.preventDefault()
        onUpdate(
            userId,
            {
                ...user,
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                zipcode: zipCode,
                address,
                state
            }
        )

        if (!loading) setIsEdit(false)
    }


    return (
        <div>
            {
                isEdit ?
                    <>
                        <div >
                            <label>First Name: </label>
                            <input
                                type="text"
                                id="title"
                                value={firstName ?? ''}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div >
                            <label htmlFor="title">Last Name: </label>
                            <input
                                type="text"
                                id="title"
                                value={lastName ?? ''}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div >
                            <label htmlFor="title">Email: </label>
                            <input
                                type="text"
                                id="title"
                                value={email ?? ''}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div >
                            <label htmlFor="title">Phone: </label>
                            <input
                                type="text"
                                id="title"
                                value={phone ?? ''}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div >
                            <label htmlFor="title">Zip Code: </label>
                            <input
                                type="text"
                                id="title"
                                value={zipCode ?? ''}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                        </div>
                        <div >
                            <label htmlFor="title">Address: </label>
                            <input
                                value={address ?? ''}
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                id="title"
                            />
                        </div>
                        <div >
                            <label htmlFor="title">State: </label>
                            <input
                                value={state ?? ''}
                                onChange={(e) => setState(e.target.value)}
                                type="text"
                                id="title"
                            />
                        </div>
                        <button onClick={() => handleUpdateClick(user.id, user)}>Update</button>
                        <button onClick={() => setIsEdit(false)}>Cancel</button>
                    </> :
                    
                    <li key={user.id} >
                        <h3 >
                            {user.first_name}&nbsp;
                            {user.last_name}
                        </h3>
                        <p >{user.email}</p>
                        <p >{user.phone}</p>
                        <p >{user.zipcode}</p>
                        <p >{user.state}</p>
                        <p >{user.address}</p>
                        <button onClick={() => setIsEdit(true)}>Edit</button>
                        <button onClick={() => onDelete(user.id)}>Delete</button>
                    </li>
            }
            <hr />
        </div>
    );
}