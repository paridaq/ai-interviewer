

function About(){

    return(
        <>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(to right, offwhite, white)',
                marginTop: '200px',
                width: '100%',
                marginRight: '50px'
            }}
        >
            <div
                style={{
                    width: '90%',
                    maxWidth: '800px',
                    padding: '30px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                }}
            >
                <h1>About Us</h1>
                <p>
                    Welcome to our application! We aim to provide the best experience for our
                    users. Stay tuned for more updates.
                </p>
            </div>
        </div>    
        </>
    )
}
export default About;