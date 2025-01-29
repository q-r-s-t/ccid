export default function Contact() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-xl font-normal text-center">
            <p className="leading-snug">For business inquiries please contact:</p>
            <a className="leading-snug relative inline-block hover:text-white">
  qrstlab@gmail.com
  <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 ease-in-out hover:w-full"></span>
</a>
        </div>
    );
}
