import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Option({ label, option = [], ref, className }) {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder={label}/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

export default Option;
