import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) localStorage.setItem("token", token);
        else localStorage.removeItem("token");
    }, [token]);

    const login = (token) => setToken(token);
    const signup = (token) => setToken(token);
    const logout = () => setToken(null);

    return (
        <AuthContext.Provider value={{token, login, signup, logout}}>
            {children}
        </AuthContext.Provider>
    )
}