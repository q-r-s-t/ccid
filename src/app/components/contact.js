export default function Contact() {
  const email = "qrstlab@gmail.com";

  return (
    <div className="w-full h-full flex flex-col justify-center text-sm font-medium lg:text-2xl lg:font-normal text-center">
      <p className="leading-snug">For business inquiries please contact:</p>

<div>
      <a
        href={`mailto:${email}`}
        className="leading-snug pb-1 relative hover:text-white group"
      >
        {email}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full inline-block"></span>
        </a>
        </div>
    </div>
  );
}
