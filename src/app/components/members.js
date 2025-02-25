// const members = {
//   labHead: [
//     {
//       role: "Lab Head",
//       name: "Q Shim",
//       imageUrl:
//         "https://www.karts.ac.kr/cmm/fms/getImage.do?atchFileId=FILE_000000000146962&width=300&height=410",
//       email: "shim.kyuha@gmail.com",
//       description:
//         "디자인 컨버전스 콜렉티브 큐알에스티의 대표로서 다양한 분야의 융합을 통해 새로운 가치를 발굴하는 컴퓨테이셔널 디자이너이자 크리에이터, 심규하입니다.",
//     },
//   ],
//   visitingResearcher: [
//     {
//       role: "Visiting Researcher",
//       name: "R Shim",
//       imageUrl:
//       "https://www.karts.ac.kr/cmm/fms/getImage.do?atchFileId=FILE_000000000146962&width=300&height=410",
//       email: "shim.r@gmail.com",
//       description: "UX/UI디자인 데이터 시각화",
//     },
//     {
//       role: "Visiting Researcher",
//       name: "R Shim",
//       imageUrl:
//       "https://www.karts.ac.kr/cmm/fms/getImage.do?atchFileId=FILE_000000000146962&width=300&height=410",
//       email: "shim.r@gmail.com",
//       description: "UX/UI디자인 데이터 시각화",
//     },
//     {
//       role: "Visiting Researcher",
//       name: "R Shim",
//       imageUrl:
//       "https://www.karts.ac.kr/cmm/fms/getImage.do?atchFileId=FILE_000000000146962&width=300&height=410",
//       email: "shim.r@gmail.com",
//       description: "UX/UI디자인 데이터 시각화",
//     },
//   ],
//   studentResearcher: [
//     {
//       role: "Student Researcher",
//       name: "R Shim",
//       imageUrl:
//       "https://www.karts.ac.kr/cmm/fms/getImage.do?atchFileId=FILE_000000000146962&width=300&height=410",
//       email: "shim.r@gmail.com",
//       description: "UX/UI디자인 데이터 시각화",
//     },
//     {
//       role: "Student Researcher",
//       name: "R Shim",
//       imageUrl:
//       "https://www.karts.ac.kr/cmm/fms/getImage.do?atchFileId=FILE_000000000146962&width=300&height=410",
//       email: "shim.r@gmail.com",
//       description: "UX/UI디자인 데이터 시각화",
//     },
//     {
//       role: "Student Researcher",
//       name: "R Shim",
//       imageUrl:
//       "https://www.karts.ac.kr/cmm/fms/getImage.do?atchFileId=FILE_000000000146962&width=300&height=410",
//       email: "shim.r@gmail.com",
//       description: "UX/UI디자인 데이터 시각화",
//     },
//     {
//       role: "Student Researcher",
//       name: "R Shim",
//       imageUrl:
//       "https://www.karts.ac.kr/cmm/fms/getImage.do?atchFileId=FILE_000000000146962&width=300&height=410",
//       email: "shim.r@gmail.com",
//       description: "UX/UI디자인 데이터 시각화",
//     },
//     {
//       role: "Student Researcher",
//       name: "R Shim",
//       imageUrl:
//       "https://www.karts.ac.kr/cmm/fms/getImage.do?atchFileId=FILE_000000000146962&width=300&height=410",
//       email: "shim.r@gmail.com",
//       description: "UX/UI디자인 데이터 시각화",
//     },
//   ],
// };
"use client"

import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import { pxGrotesk, pretendardB } from '@/fonts/fonts';

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function Members() {
  const [membersInfo, setMembersInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const fetchMembersData = async () => {
      try {
        const res = await fetch(
          `${process.env.NODE_ENV === "production" ? "https://qrstlab.vercel.app" : ""}/api/sheets`
        );

        const data = await res.json();
        // console.log(data);

        // 동적으로 분류
        const categorizedMembers = data.members.reduce((acc, member) => {
          const category = member[0]; // 첫 번째 항목을 키로 사용
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(member);
          return acc;
        }, {});

        setMembersInfo(categorizedMembers);
      } catch (error) {
        console.error("Error fetching members data:", error);
      } finally {
        setIsLoading(false); // 로딩 완료
      }
    };

    fetchMembersData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg md:text-xl">Loading members...</p>
      </div>
    );
  }

  const categories = Object.entries(membersInfo);
  const firstCategory = categories[0]; // 첫 번째 키
  const otherCategories = categories.slice(1); // 나머지 키들

  return (
    <div className='py-[10dvh] text-primaryC'>
      {firstCategory && (
      <div className='mb-20 lg:mb-[7vh]'>
        <h1 className="leading-[1.8] text-[3.3vw] lg:text-[1.05vw] mb-[1.5vh]">{firstCategory[0]}</h1>
        {firstCategory[1].map((member, index) => (
          <div key={index} className="md:flex gap-8 lg:gap-6 xl:gap-[3vw]">
            <img
              src={member[2]}
              alt={`${member[1]} profile`}
              className="w-[150px] h-[150px] md:w-[190px] md:h-[190px] lg:w-[10vw] lg:h-[10vw] rounded-full object-cover object-top"
            />
            <div className="md:flex-1 ">
              <h2 className="leading-[1.5] text-[5vw] md:text-[3.3vw] lg:text-[1.4vw]">{member[1]}</h2>
              <p className="leading-[1.5] text-[3.2vw] md:text-[2.1vw] lg:text-[1vw]">{member[3]}</p>
              <div className="border-l border-current mt-6 md:mt-4 pl-3 lg:pl-[0.5vw]">
                <h3 className="pb-3 md:pb-2 leading-[1.3] text-[3vw] md:text-[1.9vw] lg:text-[0.8vw]">Career</h3>
                <div className="leading-[1.3] text-[3vw] md:text-[1.7vw] lg:text-[0.7vw]">
                  <pre className={`whitespace-pre-wrap ${pxGrotesk.className}`}>{member[4]}</pre>
                </div>
              </div>
            </div>
          </div>
          ))}
      </div>
      )}

      {otherCategories.map(([category, members]) => (
        <div key={category} className="mb-12 md:mb-20 lg:mb-[5vh]">
          <h1 className="leading-[1.8] text-[3.3vw] lg:text-[1.05vw] mb-[2vh]">{category}</h1>
          <ul className="md:flex flex-wrap">
            {members.map((member, index) => (
              <li
                key={index}
                className="pb-[1.5vh] lg:pb-[2vh] md:w-1/2 lg:w-1/4 flex items-center"
              >
                <img
                  src={member[2]}
                  alt={`${member[1]} profile`}
                  className="filter grayscale flex-shrink-0 mr-4 lg:mr-[0.7vw] w-[70px] h-[70px] lg:w-[6vw] lg:h-[6vw] 2xl:w-[5vw] 2xl:h-[5vw] rounded-full object-cover object-top"
                />
                <div className="flex flex-col justify-center pr-4 lg:pt-0 lg:pl-2">
                  <h3 className={`${pretendardB.className} leading-relaxed lg:leading-none text-[3vw] md:text-[1.9vw] lg:text-[0.9vw] xl:mb-[0.4vh] `}>{member[1]}</h3>
                  <h2 className="leading-none text-[2.6vw] md:text-[1.6vw] lg:text-[0.75vw]">{member[3]}</h2>
                  <pre className={` pt-[0.6vh] xl:pt-0 whitespace-pre-wrap leading-tight text-[2.4vw] md:text-[1.3vw] lg:text-[0.65vw] xl:mt-[0.5vh] ${pxGrotesk.className}`}>{member[4]}</pre>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  
}
