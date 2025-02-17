"use client";
import { useEffect, useState } from "react";

export default function Aboutkeywords() {
  const [aboutInfo, setAboutInfo] = useState([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NODE_ENV === "production"
              ? "https://qrstlab.vercel.app"
              : ""
          }/api/sheets`
        );
        const data = await res.json();
        setAboutInfo(data.about); // about 시트 데이터
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="flex gap-[4vw] items-start justify-start w-full h-[50dvh] py-[6vh] lg:py-[14vh] font-[300] leading-[1.1] text-[6vw] lg:text-[3.5vw]">
      <h1 className="flex-1 leading-none text-[6vw] mt-[-0.5vh] lg:mt-[-3vh]">Who We Are</h1>
      <ul className="flex-1 leading-[1.4] text-[3.3vw] lg:text-[1.3vw] ">
        {aboutInfo.length > 0 ? (
          aboutInfo.map((item, index) => <li key={index} className="mb-[4vh]">{item[0]}</li>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

// const aboutInfo = [
//   {
//     title:"Founded in 2015 at Carnegie Mellon University, QrST is a global design convergence collective",
//     description: "QrST는 카네기멜론대학교 Computational Creativity Lab에 이어 한국예술종합학교에 설립된 디자인 콜렉티브 이니셔티브입니다. 우리는 컴퓨테이셔널 디자인 프로세스와 방법론을 통해 첨단기술과 창의성 사이에서 의미있고 실현가능한 새로운 가능성을 발굴합니다."
//   },
//   {
//     title: "Collaborating with international partners, we push the boundaries of innovation and creativity",
//     description: "QrST는 국제적인 협력 관계를 가지며 스튜디오, 리서치, 랩으로 나뉩니다. 스튜디오 팀은 다양한 뉴미디어 에이전시, 디자인 스튜디오와 협업하며 트랜스미디어 브랜딩, 미디어 아트 등 커머셜 프로젝트를 진행합니다. 리서치 팀은 인공지능 상호작용 기반의 선행적인 컨셉 디자인과 사용자 경험 디자인 및 연구, 특히 정량, 정성 데이터 수집, 분석 및 시각화에 전문성을 가지고 있습니다. 랩 팀은 디자인 이외 공학, 의학 등 연구중심대학 및 연구소와 협력을 통해 다가올 미래의 새로운 가치를 탐색합니다."
//   }
// ];
