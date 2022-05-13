

function Loginform()
{
    return (
        <div className='leftcolumn'>
             <div >
                <p className='process' >
                    Step 1 of 3
                </p>
                
               
            </div> 
            <div  className='formCard'>
                <h1>
                Let's set up your account
                </h1>
                <p>
                Already have an account?  
                <a> Sign In</a>
                </p>
                <div>
                    <form>
                        <input type="text" name="username" className='formElements' placeholder='Your name' />

                        <input type="email" name="email" className='formElements' placeholder='Email address' />

                         <select className='selectElements'>
                            <option selected value="I would describe my user type a">I would describe my user type a</option>
                            <option value="Option1">Option1</option>
                            <option value="Option2">Option2</option>
                            <option value="Option3">Option3</option>
                        </select>
        
                        <input type="password" name="password" className='formElements' placeholder='Password' />
                
                         <p>
                            Minimum 8 characters
                        </p>
                        <button >Next</button>
                    </form>

                </div>
            
                <p>
                By clicking the "NEXT" button, you agree to creating a free account, and to <a>
                    Terms of Service</a> and <a>Privacy Policy</a>       </p>
            </div>
     </div>
    );

}
export default Loginform;