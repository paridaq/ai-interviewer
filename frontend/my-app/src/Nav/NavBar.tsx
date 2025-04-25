import { useNavigate } from "react-router-dom"

function NavBar(){
    const navigate = useNavigate();

    return (
        <>
        <div className="nav" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px 20px', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            width: '100%', 
            backgroundColor: '#000', 
            color: '#fff', 
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
        }}>
            <div className="appname" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                <h3>Interview Copilot</h3>
            </div>
            <div className="links" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <a href="" style={{ textDecoration: 'none', color: '#fff' }}>Ai application</a>
                <a href="" style={{ textDecoration: 'none', color: '#fff' }} onClick={() => navigate('/interviewsection')}>Ai mock Interview</a>
                <a href="" style={{ textDecoration: 'none', color: '#fff' }} onClick={()=>navigate('/pricing')} >Pricing</a>
                <a href="" style={{ textDecoration: 'none', color: '#fff' }}>Resources</a>
                <a href="" style={{ textDecoration: 'none', color: '#fff' }}>Question bank</a>
                <button style={{ padding: '5px 10px', border: 'none', backgroundColor: '#007BFF', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Sign In</button>
                <button style={{ padding: '5px 10px', border: 'none', backgroundColor: '#28A745', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
            </div>
        </div>    </>
    )
}
export default NavBar