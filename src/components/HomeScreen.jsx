import React from 'react'
import { logout } from '../firebase'

const HomeScreen = () => {

    const handleLogout = async () => {
        await logout()
    }

    return (
        <>
            <div>HI frans</div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}

export default HomeScreen