import { useNavigate } from "react-router-dom"
import '../index.css'
import { useState } from "react";

function NavBar(){
    const navigate = useNavigate();
    const[hoverindex,setHoverindex] = useState<number | null>(null)
    const linkStyle = (isHovered:boolean)=>({
         textDecoration:'none',
         color:isHovered ? 'black':"#fff",
         transition:'color 0.3s ease'
    })

    return (
        <>
        <div className="nav" >
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