import * as React from "react"
import { Link } from "react-router-dom"

const LoginComponent = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = () => {
        event.preventDefault();
        console.log(`LOGIN ${username} ${password}`)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'username') {
            setUsername(event.target.value)
            console.log(event.target.value)
        } else {
            setPassword(event.target.value)
            console.log(event.target.value)
        }
    }

    return (
        <div className="section login">
            <h2>Sign In</h2>
            <form className="form" id="loginForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    id="login_username"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className="input"
                    id="login_password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default LoginComponent