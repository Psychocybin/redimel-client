export async function removeBattleGroup(jwtToken) {
    const res = await fetch('http://georgitsekov-001-site2.atempurl.com/api/StartGame/RemoveBattleGroup', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        }
    });

    return await res.text();
}