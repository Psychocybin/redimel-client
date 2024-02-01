export async function getAll(jwtToken){
    const res = await fetch('https://localhost:7260/api/Pages', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        }
    });

    return await res.json();
}
