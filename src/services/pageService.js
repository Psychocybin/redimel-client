export async function getCurrentPage(jwtToken, choice){
    const res = await fetch('https://localhost:7260/api/StartGame/BoardBookGame', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        },
        body: JSON.stringify( choice )
    });

    return await res.json();
}

// export async function getAll(jwtToken){
//     const res = await fetch('https://localhost:7260/api/Pages', {
//         method: 'GET',
//         headers: {
//             'content-type': 'application/json',
//             'Authorization': 'Bearer ' + jwtToken
//         }
//     });

//     return await res.json();
// }
