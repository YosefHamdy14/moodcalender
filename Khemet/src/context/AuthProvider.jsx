import {useState,useEffect } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
}); 
    useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
        }
    }, []);
    
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };


    const logout = () => {
        setUser(null);
         localStorage.removeItem("user");
    }

    const updateUser = (newData) => {
    const updated = { ...user, ...newData };
    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));
};

    return (
        <AuthContext.Provider value={{ user, login, logout,updateUser }}>
        {children}
        </AuthContext.Provider>
    );
}
