import React, { useState } from 'react'

const SignInPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='form'>
            <h1 style={{textAlign: 'center', color: 'grey'}}>Login</h1>
            <input type="text" name='username' value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
            <button>Login</button>
        </div>
    )
}

export default SignInPage