export async function removeBattleGroup(jwtToken) {
    const res = await fetch('https://localhost:7260/api/StartGame/RemoveBattleGroup', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        }
    });

    return await res.text();
}