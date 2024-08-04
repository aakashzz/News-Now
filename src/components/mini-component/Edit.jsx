import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Option from "./Option"

export function EditProfile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button  className="bg-white border  text-black hover:bg-gray-200">Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" placeholder="Type Username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Type Email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="number" className="text-right">
              Phone No.
            </Label>
            <Input id="number" type="number" placeholder="Phone Number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Profile
            </Label>
            <Option label={"Select Profile"} option={["Student","Other"]}/>
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
          <Button type="submit">Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
