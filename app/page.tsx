// import React from "react";
// import "./login.css"
// export default function Home() {
//   return (
//     <div>
//     <section>
//         <div className="color"></div>
//         <div className="color"></div>
//         <div className="color"></div>
//         <div className="box">
//           <div className="square" style={{ "--i": 0 }}></div>
//           <div className="square" style={{ "--i": 1 }}></div>
//           <div className="square" style={{ "--i": 2 }}></div>
//           <div className="square" style={{ "--i": 3 }}></div>
//           <div className="square" style={{ "--i": 4 }}></div>
//           <div className="container">
//             <div className="form">
//               <h2>Login Form</h2>
//               <form id="form"action = "api/val">
//                 <div className="inputBox">
//                   <input type="email" name="email" placeholder="Username" required />
//                 </div>
//                 <div className="inputBox">
//                   <input type="password" name="password" placeholder="password" required/>
//                 </div>
//                 <div className="inputBox">
//                   <input type="submit" name="submit"value="Login" />
                  
//                 </div>
//                 <p className="forget">
//                   Forget Password ? <a href="#">Click Here</a>
//                 </p>
//                 <p className="forget">
//                   Don't have an account ? <a href="#">Sign up</a>
//                 </p>
//               </form>
//             </div>
            
//           </div>
//         </div>
//       </section>
//     </div>
    

//   );


 
// };



// page.tsx
'use client'
import React, { useEffect } from 'react';
import { validateFormData } from './api/val/validation';
import CryptoJS from 'crypto-js';


const Page = () => {
    const handleClick = () => {
      const form = document.getElementById('form') as HTMLFormElement;
      const formData = new FormData(form);
      const email = formData.get('email') as string;
      let password = formData.get('password') as string;
      let encryptedPassword = CryptoJS.AES.encrypt(password, 'secret key');
      password = encryptedPassword.toString();
  
      // Call the validation function with email and password
      validateFormData();
      
    };

  return (
    <div>
      <section>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
        <div className="square" style={{ "--i" : 0 } as React.CSSProperties}></div>
        <div className="square" style={{ "--i" : 1 } as React.CSSProperties}></div>
        <div className="square" style={{ "--i" : 2 } as React.CSSProperties}></div>
        <div className="square" style={{ "--i" : 3 } as React.CSSProperties}></div>
        <div className="square" style={{ "--i" : 4 } as React.CSSProperties}></div>
        <div className="container">
            <div className="form">
              <h2>Login Form</h2>
              <form id="form" action="/dashboard">
                <div className="inputBox">
                  <input type="email" name="email" placeholder="Username" required />
                </div>
                <div className="inputBox">
                  <input type="password" name="password" placeholder="password" required />
                </div>
                <div className="inputBox">
                  <input type="submit" value="Login" onClick={handleClick} />
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

export default Page;
