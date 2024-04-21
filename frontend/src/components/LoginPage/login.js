// // LoginForm.js

// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

// //   const history = useHistory();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/users/login', formData);
//       console.log(response.data); // Log the response from the server
//       // Redirect user to home page or perform other actions after successful login
//       if(response.ok){
//         // history.pushState('/')
//         <Redirect to="/" />
//       }
//     } catch (error) {
//       console.error(error.response.data); // Log any errors
//       // You can display error messages to the user here
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Log In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
