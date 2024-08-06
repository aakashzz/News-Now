"use client"
import { Input } from "@/components/ui/input";
import authService from "@/appwrite/appwrite.auth";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Notify from "@/components/mini-component/Notify";
import { Label } from "@/components/ui/label";
function page() {
   const { register, handleSubmit } = useForm();
   const [error, setError] = useState();
   
   // debugger;
   
   const createUserAccount = async (data) => {
      setError("");
      try {
         const createdUser = await authService.createAccount(data);

         if (createdUser) {
            const existedUser = await authService.getCurrentAccount(createdUser);
            console.log(existedUser);
            
         //   return <Notify desc={existedUser.name} />;
         } else {
            console.log("Create account failed !");
         }
      } catch (error) {
         setError(error);
      }
   };

   const createUserAccountWithOauth = async () => {
      try {
         const OAuthCreatedAccount = await authService.OAuthCreateAccount();
         if (OAuthCreatedAccount) {
            console.log("OAuth User Created");
         } else {
            console.log("Error OAuth");
         }
      } catch (error) {
         setError(error);
      }
   };

   return (
      <section>
         <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-12">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
               <h2 className="text-center text-2xl font-bold leading-tight text-black">
                  Sign up to create account
               </h2>
               <p className="mt-2 text-center text-base text-gray-600">
                  Already have an account?{" "}
                  <Link
                     href="/signin"
                     title=""
                     className="font-medium text-black transition-all duration-200 hover:underline"
                  >
                     Sign In
                  </Link>
               </p>
               <p className="text-sm text-red-600 py-1">{error?.message}</p>
               <form onSubmit={handleSubmit(createUserAccount)} className="mt-5">
                  <div className="space-y-5">
                     <div>
                        <Label
                           htmlFor="name"
                           className="text-base font-medium text-gray-900"
                        >
                           Full Name
                        </Label>
                        <Input
                           className="flex mt-2 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                           type="text"
                           placeholder="Full Name"
                           id="name"
                           {...register("name", {
                              required: true,
                           })}
                        />
                     </div>
                     <div>
                        <Label
                           htmlFor="email"
                           className="text-base font-medium text-gray-900"
                        >
                           Email address
                        </Label>
                        <div className="mt-2">
                           <Input
                              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              type="email"
                              placeholder="Email"
                              id="email"
                              {...register("email", {
                                 required: true,
                                 validate: {
                                    matchPatern: (value) =>
                                       /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                          value
                                       ) ||
                                       "Email address must be a valid address",
                                 },
                              })}
                           />
                        </div>
                     </div>
                     <div>
                        <div className="flex items-center justify-between">
                           <Label
                              htmlFor="password"
                              className="text-base font-medium text-gray-900"
                           >
                              Password
                           </Label>
                        </div>
                        <div className="mt-2">
                           <Input
                              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              type="password"
                              placeholder="Password"
                              id="password"
                              {...register("password", {
                                 required: true,
                              })}
                           />
                        </div>
                     </div>
                     <div>
                        <Button
                           type="submit"
                           className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
                           Create Account
                        </Button>
                     </div>
                  </div>
               </form>
               <div className="mt-3 space-y-3">
                  <Button
                     type="button"
                     onClick={createUserAccountWithOauth}
                     className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                     <span className="mr-2 inline-block">
                        <svg
                           className="h-6 w-6 text-rose-500"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                        >
                           <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                        </svg>
                     </span>
                     Sign up with Google
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default page;
