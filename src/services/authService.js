export const login = async (username, password) => {
    let res = await fetch('https://localhost:7260/api/Auth/Login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}

export const logout = () => {
    localStorage.removeItem('username');
}

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}