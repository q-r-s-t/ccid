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

  // const [membersInfo, setMembersInfo] = useState({
  //   labHead: [],
  //   visitingResearcher: [],
  //   studentResearcher: [],
  // });

  // useEffect(() => {
  //   const fetchMembersData = async () => {
  //     try {
  //       const res = await fetch(`${process.env.NODE_ENV === 'production' ? 'https://qrstlab.vercel.app' : ''}/api/sheets`);

  //       const data = await res.json();
        
  //       console.log(data);

  //       const labHead = data.members.filter(member => member[0] === 'Lab Head');
  //       const visitingResearcher = data.members.filter(member => member[0] === 'Visiting Researcher');
  //       const studentResearcher = data.members.filter(member => member[0] === 'Student Researcher');

  //       setMembersInfo({
  //         labHead,
  //         visitingResearcher,
  //         studentResearcher,
  //       });
  //     } catch (error) {
  //       console.error('Error fetching members data:', error);
  //     }
  //   };

  //   fetchMembersData();
  // }, []);

  const categories = Object.entries(membersInfo);
  const firstCategory = categories[0]; // 첫 번째 키
  const otherCategories = categories.slice(1); // 나머지 키들

  return (
    <div className="pt-16 xl:pt-0">
      {firstCategory && (
      <div className='mb-20 4xl:mb-28'>
        <h1 className="text-xl md:pt-0 md:text-2xl pb-8 md:pb-12 4xl:text-[2rem]">{firstCategory[0]}</h1>
        {firstCategory[1].map((member, index) => (
          <div key={index} className="md:flex gap-8">
            <img
              src={member[2]}
              alt={`${member[1]} profile`}
              className="w-[150px] h-[150px] md:w-[190px] md:h-[190px] xl:w-[200px] xl:h-[200px] 4xl:h-[230px] 4xl:w-[230px] rounded-full object-cover object-top md:mr-10 mb-4"
            />
            <div className="text-sm md:flex-1 md:text-lg">
              <h2 className="text-xl md:text-3xl md:font-semibold 4xl:text-[2rem] 4xl:leading-relaxed">{member[1]}</h2>
              <p className="text-md font-semibold lg:text-xl mb-8 lg:mb-6 4xl:text-[1.6rem] 4xl:leading-tight">{member[3]}</p>
              <div className="border-l pl-3">
                <h3 className="pb-3 leading-none text-md lg:text-lg lg:leading-none">Career</h3>
                <div className="text-sm+ lg:text-md">
                  <pre className="whitespace-pre-wrap leading-[1.5] font-medium font-pretendard">{member[4]}</pre>
                </div>
              </div>
            </div>
          </div>
          ))}
      </div>
      )}

      {otherCategories.map(([category, members]) => (
        <div key={category} className="mb-12 md:mb-20">
          <h1 className="text-xl mb-4 md:text-2xl 4xl:text-[2rem] 4xl:mb-8">{category}</h1>
          <ul className="text-sm md:flex flex-wrap">
            {members.map((member, index) => (
              <li
                key={index}
                className="md:w-1/2 xl:w-1/3 mb-4 flex gap-2 3xl:gap-4 items-center xl:mb-2"
              >
                <img
                  src={member[2]}
                  alt={`${member[1]} profile`}
                  className="flex-shrink-0 mr-2 w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] 3xl:h-[100px] 3xl:w-[100px] 4xl:w-[120px] 4xl:h-[120px] rounded-full object-cover object-top"
                />
                <div className="flex flex-col justify-center pt-2 pr-4 lg:pt-0 lg:pl-2">
                  <h3 className="text-sm md:text-md lg:text-base+ lg:leading-relaxed xl:text-[1rem] 3xl:text-[1.1rem] 4xl:text-[1.6rem]">{member[1]}</h3>
                  <h2 className='text-xs mb-2 md:mb-2 lg:text-[0.85rem] lg:font-medium lg:leading-tight xl:text-[0.9rem] 3xl:text-[1rem] xl:leading-none leading-none 4xl:text-[1.4rem]'>{member[3]}</h2>
                  <pre className="whitespace-pre-wrap font-medium
 text-xs- leading-tight xl:text-md xl:leading-snug font-pretendard 4xl:text-[1rem]">{member[4]}</pre>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  // return (
  //   <div className="pt-10">
  //     {/* Lab Head */}
  //     <ul>
  //       <h1 className="text-xl md:text-2xl pb-8 md:pb-12">LAB Leader</h1>
  //       {membersInfo.labHead.map((member, index) => (
  //         <li key={index} className="md:flex gap-8 xl:mb-40 mb-24">
  //           <img
  //             src={member[2]}
  //             alt={`${member[1]} profile`}
  //             className="w-[150px] h-[150px] xl:w-[300px] xl:h-[300px] rounded-full object-cover object-top md:mr-10 mb-4"
  //           />
  //           <div className="text-sm md:flex-1 md:text-lg">
  //             <h2 className="text-xl md:text-3xl">{member[1]}</h2>
  //             <a
  //               href={`mailto:${member[3]}`}
  //               className="z-[100] text-xs md:text-base relative group md:pb-1"
  //             >
  //               {member[3]}
  //               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  //             </a>
  //             <p className="text-lg md:text-xl xl:2xl py-5">{member[4]}</p>
  //             <div className="border-l pl-4 mt-4">
  //               <h3 className="md:pb-4 leading-none">Career</h3>
  //               <ol className="text-sm+ leading-relaxed">
  //                 <li>영국왕립예술대학 RCA Royal College of Art 시각커뮤니케이션전공 | 박사수료</li>
  //                 <li>로드아일랜드디자인대학 RISD Rhode Island School of Design 디지털+미디어 | 석사졸업</li>
  //                 <li>홍익대학교 조형대학 디지털미디어디자인전공 | 학사졸업</li>
  //               </ol>
  //             </div>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>

  //     <ul className="mb-12 md:mb-20 xl:mb-32">
  //       <h1 className="text-xl md:text-2xl md:pb-4">Visiting Researcher</h1>
  //       <ul className="text-sm md:flex flex-wrap">
  //         {membersInfo.visitingResearcher.map((member, index) => (
  //           <li key={index} className="md:w-1/2 lg:w-1/3 my-2 flex gap-4 items-center xl:mb-2">
  //             <img
  //               src={member[2]}
  //               alt={`${member[1]} profile`}
  //               className="flex-shrink-0 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded-full object-cover object-top"
  //             />
  //             <div className="flex flex-col justify-center pr-4">
  //               <h3 className="pt-5 md:pt-3 md:text-lg xl:text-xl">{member[1]}</h3>
  //               <a
  //                 href={`mailto:${member[3]}`}
  //                 className="break-all leading-none mb-1 text-xs xl:mb-2"
  //               >
  //                 {member[3]}
  //               </a>
  //               <p className="pb-5 xl:text-lg">{member[4]}</p>
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     </ul>

  //     <ul>
  //       <h1 className="text-xl md:text-2xl md:pb-5">Student Researcher</h1>
  //       <ul className="text-sm md:flex flex-wrap">
  //         {membersInfo.studentResearcher.map((member, index) => (
  //           <li key={index} className="md:w-1/2 lg:w-1/3 my-2 flex gap-4 items-center xl:mb-2">
  //             <img
  //               src={member[2]}
  //               alt={`${member[1]} profile`}
  //               className="flex-shrink-0 w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded-full object-cover object-top"
  //             />
  //             <div className="flex flex-col justify-center pr-4">
  //               <h3 className="pt-5 md:pt-3 md:text-lg xl:text-xl">{member[1]}</h3>
  //               <a
  //                 href={`mailto:${member[3]}`}
  //                 className="break-all leading-none mb-1 text-xs xl:mb-2"
  //               >
  //                 {member[3]}
  //               </a>
  //               <p className="pb-5 xl:text-lg">{member[4]}</p>
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     </ul>
  //   </div>
  // );
  
}
