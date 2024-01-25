import { useRef, useState } from "react"; 

export default function StateLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

//   let password =  passwordRef.current.value
    // emailRef <---> input --> email
    //input -- type krte hai --> onchange --> event --> target.value
  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.type;

    const emailIsValid = enteredEmail.includes('@');

    if(!emailIsValid){
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);
    
    console.log('Sending http request..');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            ref={emailRef}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter valid email!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button"> Login </button>
      </p>
    </form>
  );
}

// ref