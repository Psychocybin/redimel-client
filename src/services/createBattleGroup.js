export async function createBattleGroup(jwtToken, warrior, fighter, defender, helper, mystic) {
    const res = await fetch('https://localhost:7260/api/StartGame', {
        method:'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        },
        body: JSON.stringify({ warrior, fighter, defender, helper, mystic })
    });

    let jsonResult = await res.text();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}