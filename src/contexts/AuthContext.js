import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useLocalStorage, { getTokenDuration, removeTokenAndTokenDuration, setTokenDuration } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {
	jwtToken: '',
};

export function AuthProvider({
    children
}) {
	const [user, setUser] = useLocalStorage('user', initialAuthState);
	const [additionalMessage, setAdditionalMessage] = useState(null);
    const navigate = useNavigate();

	useEffect(() => {
		if (!user.jwtToken) {
			return;
		}

		const tokenDuration = getTokenDuration();

		setTimeout(() => {
			navigate('/logout');
		}, tokenDuration);
	}, [user.jwtToken, navigate]);

	useEffect(() => {
		setTimeout(() => {
			setAdditionalMessage(null);
		}, 10000);
	}, [additionalMessage]);

	function login(authData) {
		setUser(authData);
		setTokenDuration();
	}

	function logout() {
		setUser(initialAuthState);
		removeTokenAndTokenDuration();
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