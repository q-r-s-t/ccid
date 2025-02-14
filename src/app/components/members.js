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
        console.log(data);

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
        <p className="text-lg md:text-xl font-semibold">Loading members...</p>
      </div>
    );
  }

  const categories = Object.entries(membersInfo);
  const firstCategory = categories[0]; // 첫 번째 키
  const otherCategories = categories.slice(1); // 나머지 키들

  return (
    <div>
      {firstCategory && (
      <div className='mb-20 4xl:mb-28'>
        <h1 className="font-[600] leading-[1.8] text-[3.3vw] lg:text-[1.05vw] mb-[1vh]">{firstCategory[0]}</h1>
        {firstCategory[1].map((member, index) => (
          <div key={index} className="md:flex gap-8">
            <img
              src={member[2]}
              alt={`${member[1]} profile`}
              className="w-[150px] h-[150px] md:w-[190px] md:h-[190px] lg:w-[10vw] lg:h-[10vw] rounded-full object-cover object-top md:mr-10 mb-4"
            />
            <div className="text-sm md:flex-1 md:text-lg">
              <h2 className="font-[500] leading-[1.5] text-[5vw] lg:text-[1.4vw]">{member[1]}</h2>
              <p className="font-[500] leading-[1.5] text-[3.2vw] lg:text-[0.9vw]">{member[3]}</p>
              <div className="border-l mt-6 lg:mt-4 pl-3">
                <h3 className="pb-3 font-[700] leading-[1.3] text-[3vw] lg:text-[0.8vw]">Career</h3>
                <div className="font-[500] leading-[1.5] text-[3vw] lg:text-[0.7vw]">
                  <pre className={`whitespace-pre-wrap ${inter.className}`}>{member[4]}</pre>
                </div>
              </div>
            </div>
          </div>
          ))}
      </div>
      )}

      {otherCategories.map(([category, members]) => (
        <div key={category} className="mb-12 md:mb-20">
          <h1 className="font-[600] leading-[1.8] text-[3.3vw] lg:text-[1.05vw] mb-[1vh]">{category}</h1>
          <ul className="text-sm md:flex flex-wrap">
            {members.map((member, index) => (
              <li
                key={index}
                className="pb-[1.5vh] md:w-1/2 xl:w-1/3 flex gap-2 3xl:gap-4 items-center"
              >
                <img
                  src={member[2]}
                  alt={`${member[1]} profile`}
                  className="flex-shrink-0 mr-2 w-[70px] h-[70px] lg:w-[4vw] lg:h-[4vw] rounded-full object-cover object-top"
                />
                <div className="flex flex-col justify-center pr-4 lg:pt-0 lg:pl-2">
                  <h3 className="font-[600] leading-none text-[2.8vw] lg:text-[0.8vw]">{member[1]}</h3>
                  <h2 className="font-[600] leading-[1.5] text-[2.6vw] lg:text-[0.7vw] mb-1">{member[3]}</h2>
                  <pre className={`whitespace-pre-wrap font-[400] leading-tight text-[1.8vw] lg:text-[0.5vw] ${inter.className}`}>{member[4]}</pre>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  
}
