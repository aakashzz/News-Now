"use client"

import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"

export function Notify() {
  return (
    <>
    <Toaster />
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
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