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

export function ChangePassword() {
  return (
    <Dialog>
      <DialogTrigger asChild >
        <Button  className="bg-white border block text-black hover:bg-gray-200">Change Password</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Make changes to your password here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="current" className="text-right">
              Current
            </Label>
            <Input id="current" placeholder="Current Password" type="password" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="new" className="text-right">
              New
            </Label>
            <Input id="new" type="password" placeholder="New Password"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirm" className="text-right">
              Confirm
            </Label>
            <Input id="confirm" type="password" placeholder="Confirm Password" className="col-span-3" />
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
