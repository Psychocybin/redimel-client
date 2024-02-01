export const login = async (username, password) => {
    let res = await fetch('https://localhost:7260/api/Auth/Login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (res.ok) {
        let jsonResult = await res.json();

        return jsonResult;
    } else {
        let jsonResult = await res.text();

        throw jsonResult;
    }
}

export const logout = (jwtToken) => {
    // TO DO - send request to server
}

export const register = async (username, password) => {
    const roles = ["READER"];

    let res = await fetch('https://localhost:7260/api/Auth/Register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password, roles })
    });

    let jsonResult = await res.text();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}
