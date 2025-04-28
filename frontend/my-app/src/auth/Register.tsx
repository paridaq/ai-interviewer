function Register(){

    return(
        <>
        <div className="register-container" style={{height:'400px',width:'800px', backgroundColor:'white',color:'black'}}>
            <form className="register-form" action="">
            <h2>Register</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="submit-button">Register</button>
            </form>
            <button className="google-login-button">Login via Google</button>
        </div>
        </>
    )
}
export default Register;