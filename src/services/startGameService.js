export async function getUserAndPage(jwtToken) {
    const res = await fetch('https://localhost:7260/api/StartGame/StartGame', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        }
    });

    return await res.json();
}