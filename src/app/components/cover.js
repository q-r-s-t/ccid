import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cover() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되면 애니메이션 트리거
    setIsVisible(true);
  }, []);

  return (
    
    <div className="flex flex-col h-full w-full px-6 md:px-10 justify-center">
      
      {/* 첫 번째 이미지 */}
      <div
        className={`flex justify-start mb-2 md:mb-6 lg:mb-10 transform transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/img/homeType1.svg"
          alt="Design Convergence"
          width={961}
          height={230}
          sizes="100vw"
          className="h-[8vh] md:h-[17.5vh] lg:h-[25vh] w-auto"
        />
      </div>
      {/* 두 번째 이미지 */}
      <div
        className={`flex justify-end transform transition-opacity duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/img/homeType2.svg"
          alt="Collective QrST"
          width={758}
          height={230}
          sizes="100vw"
          className="h-[8vh] md:h-[17.5vh] lg:h-[25vh] w-auto"
        />
      </div>
    </div>
  );
}
