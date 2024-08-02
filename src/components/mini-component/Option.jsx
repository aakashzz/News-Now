import * as React from "react";
import { useDispatch } from "react-redux";
import {selectCountry} from '@/lib/features/country'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

function Option({ label, option = [], ref, className }) {
  const dispatch = useDispatch();
  function clickedOption (e) {
      dispatch(selectCountry(e))
  }
  return (
    <>
      <Select onValueChange={clickedOption} defaultValue="in">
        <SelectTrigger className="w-[150px]">
          <SelectValue  ref={ref} placeholder={label} defaultValue={'in'}/>
        </SelectTrigger>
        <SelectContent >
          <SelectGroup >
            {
              option.map((lang)=>{
                return <SelectItem key={lang} value={lang}>{lang}</SelectItem>
              })
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default Option;
