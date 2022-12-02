import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password} = formData;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }))
  };

  const passwordVisibleHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section>
      <h1
      className='text-3xl
      text-center
      mt-6
      font-bold'
      >
        Sign Up
      </h1>
      <div
        className='flex
        justify-center
        flex-wrap
        items-center
        px-6
        py-12
        max-w-6xl
        mx-auto'
      >
        <div 
          className='md:w-[67%]
          lg:w-[50%]
          mb-12
          md:mb-6'
        >
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div  
          className='w-full 
          md:w-[67%]
          lg:w-[40%]
          lg:ml-20'
        >
          <form 
            action=""
          >
            <input
              type='text'
              id='name'
              value={name}
              onChange={(event) => onChange(event)}
              placeholder='Full name'
              className='w-full
              px-4 
              py-2 
              text-xl
              text-gray-700
              bg-white
              border-gray-300
              rounded
              transition ease-in-out
              mb-6'
            />
            <input
              type='email'
              id='email'
              value={email}
              onChange={(event) => onChange(event)}
              placeholder='Email Address'
              className='w-full
              px-4 
              py-2 
              text-xl
              text-gray-700
              bg-white
              border-gray-300
              rounded
              transition ease-in-out
              mb-6'
            />
            <div className='relative mb-6'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={(event) => onChange(event)}
                placeholder='Password'
                className='w-full
                px-4 
                py-2 
                text-xl
                text-gray-700
                bg-white
                border-gray-300
                rounded
                transition ease-in-out'
              />
              {showPassword ? (
                <AiFillEyeInvisible 
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => passwordVisibleHandler()} 
                />
                ) : (
                <AiFillEye 
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => passwordVisibleHandler()}
                />
              )}
            </div>
            <div className='flex 
              justify-between
              whitespace-nowrap
              text-sm
              sm:text-lg'
            >
              <p className='mb-6'>
                Have an account?
                <Link 
                  to='/sign-in'
                  className='text-red-600
                    hover:text-red-700
                    transition duration-200
                    ease-in-out
                    ml-1
                    cursor-pointer'
                >
                  Sign in
                </Link>
              </p>
              <p>
                <Link
                  to='/forgot-password'
                  className='text-blue-600
                  hover:text-blue-800
                  transition duration-200
                  ease-in-out
                  ml-1
                  cursor-pointer'
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              type='submit'
              className='w-full
              bg-blue-600
              text-white px-7
              py-3
              text-sm
              font-medium
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700
              transition duration-150
              ease-in-out
              hover:shadow-lg
              active:bg-blue-800'
            >
              Sign up
            </button>
            <div className='my-4
              flex
              items-center
              before:border-t
              before:flex-1 
              before:border-grey-300
              after:border-t
              after:flex-1 
              after:border-grey-300'
            >
              <p className='text-center
                font-semibold
                mx-4
                uppercase'
              >
                or
              </p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}
