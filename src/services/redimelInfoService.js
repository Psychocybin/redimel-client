export async function getOne(infoId) {
    const res = await fetch(`https://localhost:7260/api/RedimelInfos/${infoId}`)
    return await res.json()
}

export async function getAll() {
    const res = await fetch(`https://localhost:7260/api/RedimelInfos`)
        return await res.json();
}