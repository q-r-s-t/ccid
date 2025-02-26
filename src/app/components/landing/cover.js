import { programme } from "@/fonts/fonts";
import { useEffect, useState } from "react";

export default function Cover() {

  return (
    <div
      className={`${programme.className} leading-[0.9] text-[9vw] flex justify-center items-center h-full w-full px-6 lg:px-10`}
    >
      
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="z-10 w-full text-left">DESIGN</div>
        <div className="z-10 w-full text-left">CONVERGENCE</div>
        <div className="z-10 w-full text-right">COLLECTIVE</div>
        <div className="z-10 w-full text-right">QrST</div>
      </div>
    </div>
  );
}
