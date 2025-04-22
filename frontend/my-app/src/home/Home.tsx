import Craps from "../Nav/craps/Craps";



function Home(){


    return(
        <>


        <style>
            {`
            .texts {
                text-align: center;
                margin-bottom: 20px;
            }

            .texts h1, .texts h2, .texts h3 {
                margin: 10px 0;
                color: black;
            }

            .buttons {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-bottom: 30px;
            }

            .buttons button {
                background-color: blue;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 40px;
                cursor: pointer;
            }

            .buttons button:hover {
                opacity: 0.9;
            }

            .subjects {
                display: flex;
                justify-content: center;
                gap: 10px;
            }

            .subjects button {
                background-color: lightgreen;
                color: black;
                border: none;
                padding: 10px 15px;
                border-radius: 40px;
                cursor: pointer;
            }

            .subjects button:hover {
                opacity: 0.9;
            }

            body {
                background-color: white;
                color: black;
            }
            `}
        </style>
        <div className="texts">
            <h1>Intervieww copilot</h1>
            <h2>your ultimate Ai interview assistant</h2>
            <h3>Get Ai powered response that keep you calm and 
            cool and collected even when the pressure is on</h3>
        </div>
        <div className="buttons">
            <button>get started free</button>
            <button>see demo how this app works</button>
        </div>
        <div className="subjects">
            <button>software devlopment</button>
            <button>Project management</button>
            <button>Consulting</button>
            <button>marketing</button>
            <button>finance</button>
        </div>
   


        </>
    )
}
export default Home;