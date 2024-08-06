"use client"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
   Sheet,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FiMoreVertical } from "react-icons/fi";
export function Drawer() {
   return (
      <Sheet>
         <SheetTrigger asChild>
            <FiMoreVertical className="cursor-pointer" />
         </SheetTrigger>
         <SheetContent>
            <SheetHeader className={" border rounded"}>
               <div className="flex items-center ">
                  <img
                     className="h-20 w-fit"
                     src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
                     alt=""
                  />
                  <Link href={"/signin"} className="text-xl font-bold">Log-in / Sign-up</Link>
               </div>
            </SheetHeader>
            <div className="grid gap-1 py-2 text-black font-light my-4">
               <Link href={"/user-profile"} className="border px-4 p-1 rounded ">User Profile</Link>
               <Link href={"#"} className="border px-4 p-1 rounded ">Your Notes</Link>
               <Link href={"#"} className="border px-4 p-1 rounded ">Save Articles</Link>
               <Link href={"#"} className="border px-4 p-1 rounded ">About</Link>
               <Link href={"#"} className="border px-4 p-1 rounded ">Feedback</Link>
            </div>
            <SheetFooter>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
}
