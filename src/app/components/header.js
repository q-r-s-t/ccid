import Image from "next/image";

export default function Header({ width = 30, height = 30, className }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector("html").scrollIntoView({ behavior: "smooth" });
      }}
      className={`fixed logo-container top-6 left-10 m:hidden block ${className}`} // 부모에서 전달받은 className 추가

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
