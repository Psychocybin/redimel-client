export async function getOne(infoId) {
    const res = await fetch(`http://georgitsekov-001-site2.atempurl.com/api/RedimelInfos/${infoId}`)
    return await res.json()
}

export async function getAll() {
    const res = await fetch(`http://georgitsekov-001-site2.atempurl.com/api/RedimelInfos`)
        return await res.json();
}