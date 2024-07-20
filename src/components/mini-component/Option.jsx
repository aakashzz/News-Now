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
          {
            option.map((lang)=>{
              return <SelectItem key={lang} value={lang}>{lang}</SelectItem>
            })
          }
        </SelectContent>
      </Select>
    </>
  );
}

export default Option;
