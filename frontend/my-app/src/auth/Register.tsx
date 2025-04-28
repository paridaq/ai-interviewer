function Register(){

    return(
        <>
        <style>{`
        body {
          background: #f0f2f5;
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
        }
        .register-container {
          height: 500px;
          width: 400px;
          background-color: white;
          color: black;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          padding: 30px;
          margin: 50px auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .register-form {
          width: 100%;
        }
        .register-form h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }
        .form-group label {
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: 500;
        }
        .form-group input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }
        .form-group input:focus {
          border-color: #007bff;
          outline: none;
        }
        .submit-button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          border: none;
          color: white;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }
        .submit-button:hover {
          background-color: #0056b3;
        }
        .google-login-button {
          width: 100%;
          padding: 12px;
          background-color: #db4437;
          border: none;
          color: white;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 20px;
        }
        .google-login-button:hover {
          background-color: #c23321;
        }
      `}</style>

      <div className="register-container">
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