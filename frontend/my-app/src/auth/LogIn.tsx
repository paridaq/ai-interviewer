


function LogIn(){


    return(

        <>
          <style>{`
      
        .signin-container {
          background: white;
          padding: 40px 30px;
          border-radius: 10px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          width: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .signin-container form {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .signin-container form label {
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }
        .signin-container form input {
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
        }
        .signin-container form input:focus {
          outline: none;
          border-color: #007bff;
        }
        .google-login-button {
          margin-top: 15px;
          width: 100%;
          padding: 12px;
          background-color: #db4437;
          border: none;
          color: white;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .google-login-button:hover {
          background-color: #c23321;
        }
      `}</style>

      <div className="signin-container">
        <form action="">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Type Email..." />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Type Password..." />
        </form>
        <button className="google-login-button">Login through Google</button>
      </div>
        
        </>
           )
}
export default LogIn