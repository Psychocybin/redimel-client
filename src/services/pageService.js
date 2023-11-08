export function getAll(){
    return fetch('https://localhost:7260/api/Pages')
        .then(res => res.json())
}
