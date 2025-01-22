export default function Works() {
  const works = [
    {
      title: "주요 국내 R&D 프로젝트",
      items: [
        "현대엔지비, 2030 E-MPV를 위한 선행 AI UX 컨셉 연구과제, 2024.",
        "삼성전자 MX, 차세대 대화면 에디터 컨셉 발굴 디자인과제, 2024.",
        "삼성전자 VD, 스크린 인터랙션 감성 고도화 및 감성·경험 조사 연구과제, 2024.",
        "한국콘텐츠진흥원, 생성형 감정인식형 AI기반 증가상현실(XR) 콘텐츠 기술 전문 인력양성 사업, 2024~2026.",
        "삼성전자 VD, 스마트TV UX 감성어휘 정립 및 감성정량화평가 연구과제, 2023.",
        "서울디자인재단, DDP 45133 디지털트윈 사업 기획 및 디자인, 2023."
      ]
    },
    {
      title: "주요 해외 R&D 프로젝트",
      items: [
        "미국 인구조사국 US Census Bureau, 데이터 기반 커뮤니티 혁신 프로젝트, 2021.",
        "미국 연방예술기금 NEA, 알고리즘 기반 에디토리얼 디자인, 2020.",
        "미국 국립과학재단 NSF EPSCoR, 진화적 해양 데이터 네트워크 분석 및 시각화연구, 2012."
      ]
    },
    {
      title: "주요 논문 및 발표",
      items: [
        "｢Thoughts on Designing with AI｣, ELIA Biennial Conference. NABA, 밀라노. November 20–23, 2024.",
        "｢Navigating Computational Technologies in Visual Design｣, International Conference of Art, Design, and Technology. HKMU, 홍콩. July 23–26, 2024.",
        "｢Investigating the Emotional Responses to Generative Art｣, 『Archives of Design Research』37-3호, 2024.",
        "｢Computational Graphic Design｣, 한국디자인학회 추계 국제 학술대회. 고려대학교, 서울, 대한민국. 2022.",
        "｢Designing Interventions for Multi-modal Classrooms: Using Machine Learning",
        "｢To Advance Human-Centered Design Education｣, 『AIGA Dialogue』, 2022."
      ]
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center pt-20 z-[1000]">
      <ul>
        {works.map((work, index) => (
          <li key={index}>
            <div className="lg:flex mb-9 md:mb-12 lg:mb-16">
              <h1 className="md:w-[18rem] lg:w-[10rem] xl:w-[18rem] md:text-xl xl:text-2xl mb-2">{work.title}</h1>
              <ol className="flex-1 leading-snug text-xs md:text-sm xl:text-lg font-semibold list-disc lg:list-none ml-4 lg:ml-0">
                {work.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
