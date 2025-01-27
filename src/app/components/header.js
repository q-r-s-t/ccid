import Image from "next/image";

export default function Header() {
  return (
    <a href="#"
    onClick={(e) => {
      e.preventDefault(); // 기본 동작 차단
      window.scrollTo({ top: 0, behavior: "smooth" }); // 상단으로 이동
    }} className="logo-container p-6 fixed sm:hidden block">
        <Image
          src="/img/cidc_logo.svg"
          alt="CIDC Logo"
          width={30}
          height={30}
          priority
        />
    </a>
  );
}
