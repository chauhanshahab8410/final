// import React from 'react';
// import "./login.css"

// export default function Home() {
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault(); // Prevent form submission

        
//         // const usernameInput = event.currentTarget.elements.namedItem('username') as HTMLInputElement;
//         // const passwordInput = event.currentTarget.elements.namedItem('password') as HTMLInputElement;
        
//         // const username = usernameInput ? usernameInput.value : '';
//         // const password = passwordInput ? passwordInput.value : '';
        
//         // // Now you can use username and password for further processing
//         // console.log('Username:', username);
//         // console.log('Password:', password);
//         window.location.href = '/dashboard';
        
//         // You can also submit the form programmatically if needed
//         // event.currentTarget.submit();
//     };

//     return (
//         <div>
//             <section>
//                 <div className="color"></div>
//                 <div className="color"></div>
//                 <div className="color"></div>
//                 <div className="box">
//                     <div className="square" style={{ "--i": 0 }}></div>
//                     <div className="square" style={{ "--i": 1 }}></div>
//                     <div className="square" style={{ "--i": 2 }}></div>
//                     <div className="square" style={{ "--i": 3 }}></div>
//                     <div className="square" style={{ "--i": 4 }}></div>
//                     <div className="container">
//                         <div className="form">
//                             <h2>Login Form</h2>
//                             <form id="form" onSubmit={handleSubmit}>
//                                 <div className="inputBox">
//                                     <input type="text" name="username" placeholder="Username" required />
//                                 </div>
//                                 <div className="inputBox">
//                                     <input type="password" name="password" placeholder="Password" required />
//                                 </div>
//                                 <div className="inputBox">
//                                     <input type="submit" value="Login" href="/"/>
//                                 </div>
//                                 <p className="forget">
//                                     Forget Password ? <a href="#">Click Here</a>
//                                 </p>
//                                 <p className="forget">
//                                     Don't have an account ? <a href="#">Sign up</a>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }






import React from "react";
import "./login.css"
export default function Home() {
  return (
    <div>
    <section>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
          <div className="square" style={{ "--i": 0 }}></div>
          <div className="square" style={{ "--i": 1 }}></div>
          <div className="square" style={{ "--i": 2 }}></div>
          <div className="square" style={{ "--i": 3 }}></div>
          <div className="square" style={{ "--i": 4 }}></div>
          <div className="container">
            <div className="form">
              <h2>Login Form</h2>
              <form id="form"action = "./validation ">
                <div className="inputBox">
                  <input type="text" placeholder="username" required />
                </div>
                <div className="inputBox">
                  <input type="password" name="username" placeholder="password" required/>
                </div>
                <div className="inputBox">
                  <input type="submit" name="password"value="Login" />
                </div>
                <p className="forget">
                  Forget Password ? <a href="#">Click Here</a>
                </p>
                <p className="forget">
                  Don't have an account ? <a href="#">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    

  );
 
};



    