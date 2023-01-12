const API = 'http://192.168.18.47:3002'

export const addLocation = async (location) => {
    const res = await fetch(`${API}/addLocation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(location)
    })
    return await res.json()
}