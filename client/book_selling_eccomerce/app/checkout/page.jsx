'use client'
import { useState } from "react";
import Order from "../order/page";
import CheckoutItem from "./CheckoutItem";
import { useSelector } from "react-redux";
import { useOrderMutation } from "../services/bookApi";
import { toast } from "react-toastify";

const Checkout1 = () => {


    const [order, { isLoading, error }] = useOrderMutation();

    const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");
    const data = useSelector((state) => state.order);
    // console.log("data",data)
    let total = 0
    data.map((data) => total += data.subtotal)
    let arr = []
    for (let x in order) {
        console.log('xxxxxxxxxxxxxxxx',x)
        let temp = {
            "bookId": x.id,
            "quantity": x.quantity,
            "subtotal": x.subtotal
          }
          arr.push(temp)
      }



    const handleSubmit = async (e) => {
        console.log(' orddddr',arr)
        e.preventDefault();
        console.log('hit submit');
        console.log('data:', data)
        // for (const key in data) {
        //     console.log(key)
        // }
        const res ={
            "userId": 5,
            "orderQuantities": arr
          }
      
        try {
            const result = await order(res).unwrap();
            console.log('login', result)
            // console.log('vale', values)
            toast.success("Welcome " + result.user.name);
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
    }

    return (
        <div className="flex justify-center items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col items-start space-y-2">
                        {/* <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Back</p>
                        </button> */}
                        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Checkout</p>
                        {/* <p className="text-base leading-normal sm:leading-4 text-gray-600">
                            Home {">"} Electronics {">"} Headphones {">"} Cart {">"} Checkout
                        </p> */}
                    </div>

                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                            {/* <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">Logitech K251</p>
                                <p className="text-base font-semibold leading-none text-gray-600">$520.00</p>
                            </div>
                            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src="https://i.ibb.co/0GFzTP4/Rectangle-131.png" alt="headphones" />
                            </div> */}
                            <CheckoutItem />
                        </div>

                        <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">


                            <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                <div>
                                    <p className="text-base leading-4" onClick={handleSubmit}>Pay ${total}</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout1;
