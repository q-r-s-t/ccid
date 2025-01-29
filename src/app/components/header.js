import Image from "next/image";

export default function Header({width = 40, height = 40, className }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector("html").scrollIntoView({ behavior: "smooth" });
      }}
      className={`z-[700] fixed logo-container top-6 left-6 md:left-10 m:hidden block ${className || ""}`} // 부모에서 전달받은 className 추가
    >
       <Image
        src="/img/cidc_logo.svg"
        alt="CIDC Logo"
        width={width}
        height={height}
        priority
        style={{ objectFit: "contain" }}
      />
    </a>
  );
}
