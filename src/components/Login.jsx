const Login = () =>{
    return(
        <div>
            <h1>Login Page</h1>
            <form>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='email' />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='email' />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;