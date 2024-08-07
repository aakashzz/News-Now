"use client";
import authService from "@/appwrite/appwrite.auth";
import { ChangePassword } from "@/components/mini-component/ChangePassword";
import { EditProfile } from "@/components/mini-component/Edit";
import Loader from "@/components/mini-component/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

function page() {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState();

   useEffect(() => {
      if (loading) {
         authService
            .getCurrentUser()
            .then((data) => {
               console.log(data);
               setUser(data);
            })
            .finally(() => setLoading(false));
      }
   }, [loading]);
   return (
      <>
         {loading ? (
            <>
               <Loader />
            </>
         ) : (
            <>
               <main className="h-full w-full">
                  {/* DP Section */}
                  <div className="h-80 w-full ">
                     <div className="flex justify-center py-4">
                        <div className="h-[200px] w-[200px] rounded-full ">
                           <img
                              src="https://avatars.githubusercontent.com/u/133687137?v=4"
                              className="rounded-full "
                              alt=""
                           />
                           <div className="py-2">
                              <Input
                              type="file"
                              className="w-[200px] text-xs"
                              />
                           </div>
                           <div className="py-2 disabled:">
                              <Input
                                 type="text"
                                 value={user?.name}
                                 id="username"
                                 className={`text-lg font-medium text-center text-black `}
                                 readOnly
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Input Section */}
                  <div className="h-full w-full py-5">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="px-14 ">
                           <Label htmlFor="email" className="text-lg">
                              Email
                           </Label>
                           <Input
                              type="email"
                              id="email"
                              placeholder="Email"
                              value={user?.email}
                              readOnly
                           />
                        </div>
                        <div className="px-14">
                           <Label className=" text-lg text-black">
                              Phone number
                           </Label>
                           <div class="relative max-w-xs text-gray-500">
                              <div class="absolute inset-y-0 left-3 my-auto h-4 flex items-center border-r pr-2">
                                 <select class="text-sm outline-none rounded-lg h-full">
                                    <option>IN</option>
                                    <option>ES</option>
                                    <option>MR</option>
                                 </select>
                              </div>
                              <input
                                 type="text"
                                 value="empty"
                                 class="w-full pl-[4.5rem] pr-3 py-1.5 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                              />
                           </div>
                        </div>
                        <div className="px-14">
                           <Label htmlFor="password" className="text-lg">
                              Password
                           </Label>
                           <ChangePassword />
                        </div>
                        <div className="px-14">
                           <Label htmlFor="profile" className="text-lg">
                              Profile
                           </Label>
                           <Input
                              type="text"
                              id="profile"
                              value="Student"
                              readOnly
                              className="w-fit"
                           />
                        </div>
                     </div>
                  </div>
                  {/* Normal Button */}
                  <div className="h-full w-full py-4">
                     <div className="flex justify-center gap-x-4">
                        {/* <Button onClick={upDateDetails} className="bg-white border text-black hover:bg-gray-200"> */}
                        <EditProfile />
                        {/* </Button> */}
                        <Button className="bg-white border text-black hover:bg-gray-200">
                           Go Back Home
                        </Button>
                     </div>
                  </div>
               </main>
            </>
         )}
      </>
   );
}

export default page;
