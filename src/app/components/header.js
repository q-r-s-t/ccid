import Image from "next/image";

export default function Header() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector("html").scrollIntoView({ behavior: "smooth" });
      }}
      className="logo-container p-6 fixed sm:hidden block"
    >
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
