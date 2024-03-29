export async function createBattleGroup(jwtToken, warrior, fighter, defender, helper, mystic) {
    const res = await fetch('http://georgitsekov-001-site2.atempurl.com/api/StartGame', {
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