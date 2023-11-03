import { MouseEvent, useState } from 'react'
import { NewUserData } from './types';

type Props = {
    onSave: (newUser: NewUserData) => void;
};

export function NewUser({ onSave }: Props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [state, setState] = useState('')
    const [address, setAddress] = useState('')

    const handleAddClick = (e: MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()
        onSave({
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            zipcode: zipCode,
            address,
            state
        })
    }

    return (
        <div>
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
            <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleAddClick(e)}>Add</button>
        </div>
    );
}