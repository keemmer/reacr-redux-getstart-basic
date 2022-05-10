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


export function SignIn(email, password) {
    return new Promise((resolve, reject) => {
        const foundUser = users.find((user) =>
            user.email === email && user.password === password
        )
        setTimeout(() => {
            if (foundUser) {
                resolve(foundUser)
            } else {
                reject('Email or password is invalid')
            }
        }, 2000)
    })

}