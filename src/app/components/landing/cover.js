import { programme } from "@/fonts/fonts";
export default function Cover() {
  return (
    <div
      className={`${programme.className} leading-[0.9] text-[9vw] flex flex-col justify-center items-center h-full w-full px-6 lg:px-10`}
    >
      <div className="animate-fadeIn z-10 w-full text-left">DESIGN</div>
      <div className="animate-fadeIn z-10 w-full text-left delay-[300ms]">CONVERGENCE</div>
      <div className="animate-fadeIn z-10 w-full text-right delay-[600ms]">COLLECTIVE</div>
      <div className="animate-fadeIn z-10 w-full text-right delay-[900ms]">QrST</div>
    </div>
  );
}
