'use client'
import React, { useState } from 'react'
import { useLoginMutation } from '../services/authApi';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas';
import { toast } from 'react-toastify';



const Login = () => {
    const [login, { isLoading, error }] = useLoginMutation();
    const router = useRouter()
    // const [credentials, setCredentials] = useState({
    //     email: '',
    //     password: '',
    // })
    const [credentials, setCredentials] = useState({
        email: "prakadsh@prakash.com",
        password: "prakash123"
    })
    const onSubmit = async (values, actions) => {
        try {
            const result = await login(values).unwrap();
            console.log('login', result)
            // console.log('vale', values)
            toast.success("Welcome " +result.user.name);
            // Save the token as a cookie
            document.cookie = `token=${JSON.stringify(result)}; path=/`;
            // console.log('jwt result: ' , result);
            // const user_id = result.user.user_id
            // toast("Welcome " + values.username);
            // // console.log('disptach')
            // dispatch(setUser({ "username": values.username, "user_id": user_id }))
            // localStorage.setItem('token', JSON.stringify({ ...result.token, "user": values.username, "user_id": user_id }));

            // redirect to dashboard or do something else
            router.push('/');
        } catch (error) {
            // toast.error('error: ' + error.data.non_field_errors);
            toast.error("Error " + 'password or email does not match');

            console.error(error);
        }
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues:credentials,
        validationSchema: loginSchema,
        onSubmit,
    });
    
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    /> */}
                    <p className='text-2xl text-center font-bold'>Logo</p>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6"  onSubmit={handleSubmit} method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    // type=    "email"
                                    // value={credentials.email}
                                    value={values.email}
                                    onChange={handleChange}
                                    // onChange={(e) => {
                                    //     setCredentials({ ...credentials, email: e.target.value });
                                    // }} 
                                    autoComplete="email"
                                    required
                                    className={errors.email && touched.email ?"block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6":
                                    "block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"}
                                />
                                {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}

                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="password"
                                    autoComplete="current-password"
                                    // value={credentials.password}
                                    // onChange={(e) => {
                                    //     setCredentials({ ...credentials, password: e.target.value });
                                    // }}
                                    required
                                    className={!errors.password && !touched.password ?"block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6":
                                    "block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"}                                />
                                                        {errors.password && touched.password && (
                            <p className="text-red-500">{errors.password}</p>
                        )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    {/* <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default Login