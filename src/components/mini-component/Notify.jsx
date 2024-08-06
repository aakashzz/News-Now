"use client"

import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"

export function Notify({desc}) {
  return (
    <>
    <Toaster />
    <Button
      variant="outline"
      onClick={() =>
        toast("User Has Logged in", {
          description: "Roshan singh Login",
          action: {
            label: "Done",
            onClick: () => console.log("Done"),
          },
        })
      }
    >
      Show Toast
    </Button>
    </>
  )
}

export default Notify