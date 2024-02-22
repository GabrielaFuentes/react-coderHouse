import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";


export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })

    console.log(user)

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                    background: "#202020",
                    color: "#FFFFFF",
                })
            })
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                    background: "#202020",
                    color: "#FFFFFF",
                })
            })
    }

    const logout = () => {
        signOut(auth)
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                    background: "#202020",
                    color: "#FFFFFF",
                })
            })
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                    background: "#202020",
                    color: "#FFFFFF",
                })
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("User:", user)
            if (user) {
                setUser({
                    email: user.email,
                    uid: user.uid,
                    logged: true
                })
            } else {
                setUser({
                    email: null,
                    uid: null,
                    logged: false
                })
            }
        })
    }, [])

    return (
        <UserContext.Provider value={{ user, googleLogin, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}