import React from "react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "../Asset/Icons";

export default function Search() {
  return (
    <div className="w-full h-fit px-2 pb-5  mt-5 rounded-lg flex justify-center items-center bg-gradient-to-tr text-white">
      <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
}
