const Signup = () =>{
    return(
        <div>
            <h1>Signup Page</h1>
            <form>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='username' />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='email' />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='password' />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" placeholder='confirm password' />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Signup;