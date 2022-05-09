export const users = [
    {
        id: 'a',
        username: 'keemmer',
        email: 'keemmer@test.com',
        password: 'abc123',
    },
    {
        id: 'b',
        username: 'Wanchai',
        email: 'wanchai@test.com',
        password: '123abc',
    },
]


export function SignIn(username, password) {
    return new Promise((resolve, reject) => {
        const foundUser = user.find((user) =>
            user.email === username && user.password === password
        )
        setTimeout(() => {
            if (foundUser) {
                resolve(foundUser)
            } else {
                reject('Username of Email is invalid')
            }
        }, 3000)
    })

}