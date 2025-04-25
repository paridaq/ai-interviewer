

function Pricing(){


    return(

        <>
        
        <div className="pricing-container" style={{display:'flex'}}>
            <div
                    className="pricing-table"
                    style={{
                            
                            backgroundColor: 'white',
                            border: '1px solid black',
                                padding: '30px',
                                margin: '15px',
                                boxSizing: 'border-box',
                                height: '500px',
                                color: 'black',
                                width:'260px',
                                borderRadius:'30px'
                                
                                
                            }}
                        >
                            <h2>Free Plan</h2>
                            <p>₹0 / month</p>
                            <ul>
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                           <button style={{marginTop: '200px',
                                            width:'200px',
                                            borderRadius:'20px'
                           }} >Subscribe</button>   
                            </div> 
                        
                           <div className="pricing-table"  style={{
                            
                            backgroundColor: 'white',
                            border: '1px solid black',
                                padding: '30px',
                                margin: '15px',
                                boxSizing: 'border-box',
                                height: '500px',
                                color: 'black',
                                width:'260px',
                                borderRadius:'30px'
                                
                                
                            }}>
                <h2>Basic Plan</h2>
                <p>₹50 / month</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                    <li>Feature 4</li>
                    <li>Feature 4</li>
                    <li>Feature 4</li>
                    <li>Feature 4</li>
                </ul>
                <button style={{marginTop: '80px',
                                            width:'200px',
                                            borderRadius:'20px'
                           }} >Subscribe</button> 
            </div>
            <div className="pricing-table"  style={{
                            
                            backgroundColor: 'white',
                            border: '1px solid black',
                                padding: '30px',
                                margin: '15px',
                                boxSizing: 'border-box',
                                height: '500px',
                                color: 'black',
                                width:'260px',
                                borderRadius:'30px'
                                
                                
                            }}>
                <h2>Premium Plan</h2>
                <p>₹200 / month</p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                    <li>Feature 5</li>
                    <li>Feature 5</li>
                    <li>Feature 5</li>
                    <li>Feature 5</li>
                    <li>Feature 5</li>
                    <li>Feature 5</li>
                   
                </ul>
                <button style={{marginTop: '35px',
                                            width:'200px',
                                            borderRadius:'20px'
                           }} >Subscribe</button> 
            </div>
        </div>
          
        </>
    )
}
export default Pricing