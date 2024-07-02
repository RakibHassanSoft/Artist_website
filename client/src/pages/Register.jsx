import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {


  const authInfo = useContext(AuthContext)
  const { createUser, user } = authInfo;

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const Repassword = form.rePassword.value;
    // Password validation
    if (password !== Repassword) {
      swal({
        title: "Worning",
        text: "Passwords do not match",
        button: "Done",
      });
      return; // Stop further execution
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      // alert("Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long");
      swal({
        title: "Worning",
        text: "Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long",
        button: "Done",
      });
      return; // Stop further execution
    }
    const user = {
      name,
      email,
      password,
      Repassword
    }
    // Assuming you're within a React component or functional component
    const createUsers = async (email, password) => {
      try {
        const response = await fetch('https://galary-backend-1.onrender.com/createUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ User_email: email, password: password, name: name }),
        });

        if (!response.ok) {
          throw new Error('Failed to create user');
        }

        navigate('/');

        // Optionally, you can handle success here (e.g., show a success message, redirect the user, etc.)
      } catch (error) {
        console.error('Error creating user:', error.message);
        // Handle error (e.g., show an error message to the user)
      }
    };



    // console.log(user)
    createUser(email, password)
      .then(result => {
        const name = result.user;
        // console.log(name)
        createUsers(email, password)
        swal({
          title: "Congratulation",
          text: "Account creation successfully done",
          icon: "success",
          button: "Done",
        });
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      {/* source:https://codepen.io/owaiswiz/pen/jOPvEPB */}
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-5xl text-orange-600 font-extrabold">Register</h1>
              <div className="w-full flex-1 mt-8">

                <form className="mx-auto max-w-xs" onSubmit={handleSubmit}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="password" // Corrected name attribute
                    placeholder="Password"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="rePassword" // Corrected name attribute
                    placeholder="Re password"
                  />
                  <div className='flex justify-centerw-full'>
                    <button className='btn mt-4 text-center w-1/4 m-auto text-orange-600'>Sign in</button>
                  </div>
                  <p className="mt-6 text-xs text-gray-600 text-center  mb-4">
                    I agree to abide by templatana's
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>
                    and its
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                  <Link className='text-orange-400 ' to='/login'>Hove not an accout ?</Link>
                </form>

              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")'
              }}
            ></div>
          </div>
        </div>
      </div>
    </>


  );
};

export default Register;