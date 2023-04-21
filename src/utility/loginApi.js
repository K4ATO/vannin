/* eslint-disable no-throw-literal */
export async function loginUser(creds) {
    const res = await fetch('/api/login', {
        method: 'post',
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
        };
    }

    return data;
}
