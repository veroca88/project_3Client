// import React from 'react';

// import { Redirect } from 'react-router-dom';

// import { AuthContext } from '../context/Authentication'

// function LogIn() {
//     return (
//       <AuthContext.Consumer>
//         {context => {
//           const {
//             formLogIn: { username, password },
//             message,
//             isLoggedIn
//           } = context.state;
  
//           const { handleLogInInput, handleLogInSubmit } = context;
//           return (
//             <>
//               {isLoggedIn ? (
//                 <Redirect to='/' />
//               ) : (
//                 <>
//                   <h2>LogIn form</h2>
//                   <form onSubmit={handleLogInSubmit}>
//                     <label htmlFor='username'>
//                       Username:
//                       <input
//                         id='username'
//                         name='username'
//                         type='text'
//                         value={username}
//                         onChange={handleLogInInput}
//                       />
//                     </label>
//                     <label htmlFor='password'>
//                       Password:
//                       <input
//                         id='password'
//                         name='password'
//                         type='password'
//                         value={password}
//                         onChange={handleLogInInput}
//                       />
//                     </label>
//                     <button>LogIn</button>
//                   </form>
//                   {/* {message ? <div>{message}</div> : ''} */}
//                   {message && <div>{message}</div>}
//                 </>
//               )}
//             </>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
  
//   export default LogIn;
