import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fethAuthAsync } from '../actions/authActions.js'


const SignInPage = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { loading, error } = useSelector(state => state.status)

    return (
        <div className='form'>
            <h1 style={{ textAlign: 'center', color: 'grey' }}>Login</h1>
            <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={() => { dispatch(fethAuthAsync(email, password)) }}>Login</button>
            {loading && <p>Loading</p>}
            {error && <p style={{ color: 'red', fontSize: '14px', textAlign: 'center' }}>{error}</p>}



        </div>
    )
}

export default SignInPage