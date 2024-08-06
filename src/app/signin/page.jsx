"use client";
import authService from "@/appwrite/appwrite.auth";
import Notify from "@/components/mini-component/Notify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";


function page() {
   const { handleSubmit, register } = useForm();
   const router = useRouter();
   async function loginUser(data) {
      try {
         const login = await authService.login(data);
         if (login) {
            const getUser = await authService.getCurrentUser();
            if (getUser) {
            }
            router.push("/");
            console.log(login);
            return (
               <>
                  <Notify desc={getUser?.name} />
               </>
            );
         }
      } catch (error) {
         console.error(error);
         throw error;
      }
   }
   async function loginUserOAuth() {
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
   }

   
   return (
      <section>
         <div className="flex items-center justify-center mb-7 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-12">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
               <h2 className="text-center text-2xl font-bold leading-tight text-black">
                  Sign in to your account
               </h2>
               <p className="mt-2 text-center text-sm text-gray-600 ">
                  Don&apos;t have an account?{" "}
                  <Link
                     href="/signup"
                     title=""
                     className="font-semibold text-black transition-all duration-200 hover:underline"
                  >
                     Create a free account
                  </Link>
               </p>
               <form onSubmit={handleSubmit(loginUser)} className="mt-5">
                  <div className="space-y-5">
                     <div>
                        <label
                           htmlFor=""
                           className="text-base font-medium text-gray-900"
                        >
                           {" "}
                           Email address{" "}
                        </label>
                        <div className="mt-2">
                           <Input
                              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              type="email"
                              placeholder="Email"
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
                           <label
                              htmlFor=""
                              className="text-base font-medium text-gray-900"
                           >
                              {" "}
                              Password{" "}
                           </label>
                           <a
                              href="#"
                              title=""
                              className="text-sm font-semibold text-black hover:underline"
                           >
                              {" "}
                              Forgot password?{" "}
                           </a>
                        </div>
                        <div className="mt-2">
                           <Input
                              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              type="password"
                              placeholder="Password"
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
                           Get started
                        </Button>
                     </div>
                  </div>
               </form>
               <div className="mt-3 space-y-3">
                  <Button
                     type="button"
                     className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                     onClick={loginUserOAuth}
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
                     Sign in with Google
                  </Button>
               </div>
            </div>
            {/* <Notification  /> */}
         </div>
      </section>
   );
}

export default page;
