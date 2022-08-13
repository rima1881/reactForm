import { useState } from "react"

export default function App() {
    
    const [loginData , setLoginData] = useState(
      {
        email : '',
        password : '',
        conPassword : '',
        isOk : true
    })
 
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    function handleChange(event){
      const {name , value , type , checked} = event.target
      setLoginData(prevState =>
          {
            return {
              ...prevState,
              [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email address"
                    className="form--input"
                    value={loginData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    className="form--input"
                    value={loginData.password}
                    onChange={handleChange}

                />
                <input 
                    type="password"
                    name="conPassword"
                    placeholder="Confirm password"
                    className="form--input"
                    value={loginData.conPassword}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        name="isOk"
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        checked={loginData.isOk}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
