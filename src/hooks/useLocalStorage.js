import { useState } from "react";

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}

export function setTokenDuration() {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());
}

export function removeTokenAndTokenDuration() {
    localStorage.removeItem('user');
	localStorage.removeItem('expiration');
}

export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);

            return item
                ? JSON.parse(item)
                : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));

            setState(value);
        } catch (error) {
            console.log('RED ALERT!!!')
        }
    };

    return [
        state,
        setItem
    ];
}