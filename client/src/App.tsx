import React, {useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import UserService from "./services/UserService";
import {IUser} from "./models/IUser";

function App() {
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    const getUsers = async () => {
        try {
            const response = await UserService.fetchUsers()
            setUsers(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    if (store.isLoading) {
        return (<>Loading...</>)
    }

    if (!store.isAuth) {
        return (<LoginForm/>)
    }
    return (
        <div>
            <h1>{
                store.isAuth
                    ? `User ${store.user.email} authorized`
                    : 'You must log in'
            }</h1>
            <h2>{
                store.user.isActivated
                    ? `User ${store.user.email} is activated`
                    : 'Email NOT activated'
            }</h2>
            <button onClick={() => store.logout()}>logout</button>

            <div>
                <button onClick={getUsers}>Get all users</button>
            </div>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
        </div>
    );
}

export default observer(App);
