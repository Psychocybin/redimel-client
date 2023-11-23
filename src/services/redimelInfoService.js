export function getOne(infoId) {
    return fetch(`https://localhost:7260/api/RedimelInfos/${infoId}`)
        .then(res => res.json())
}

export function getAll() {
    return fetch(`https://localhost:7260/api/RedimelInfos`)
        .then(res => res.json())
}