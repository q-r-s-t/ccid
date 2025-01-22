import Image from "next/image";

export default function Header() {
  return (
    <div className="logo-container p-6 fixed sm:hidden">
      <Image
        src="/img/cidc_logo.svg"
        alt="CIDC Logo"
        width={40}
        height={40}
        priority
      />
    </div>
  );
}
