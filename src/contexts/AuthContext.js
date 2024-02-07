import { createContext, useContext, useState, useEffect } from "react";

import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {
	jwtToken: '',
};

export function AuthProvider({
    children
}) {
	const [user, setUser] = useLocalStorage('user', initialAuthState);
	const [additionalMessage, setAdditionalMessage] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			setAdditionalMessage(null);
		}, 10000);
	}, [additionalMessage])

	function login(authData) {
		setUser(authData);
	}

	function logout() {
		setUser(initialAuthState);
	}

	function changeMessage(message) {
		setAdditionalMessage(message);
	}

    return (
        <AuthContext.Provider value={{...user, additionalMessage, login, logout, changeMessage, isAuthenticated: Boolean(user.jwtToken)}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const authState = useContext(AuthContext);

    return authState;
}