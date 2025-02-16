const keywords = [
  {
    id: "01",
    title: "Service Design",
    description:
      "사용자가 서비스 전체를 경험하는 과정에서의 문제를 해결하고 더 나은 경험을 제공하기 위해 전략을 수립합니다. 고객 여정(Customer Journey), 터치포인트(Touchpoint), 백스테이지 프로세스(Backstage Process) 등을 고려하여 사용자와 기업 간의 상호작용을 최적화합니다.",
  },
  {
    id: "02",
    title: "Design Strategy",
    description:
      "기업이나 브랜드가 목표를 달성하기 위해 디자인을 활용하는 장기적 계획으로, 브랜딩, UX, 제품 디자인 등 다양한 분야에서 디자인적 사고(Design Thinking)와 비즈니스 전략을 결합하여 실행합니다.",
  },
  {
    id: "03",
    title: "UX & UI Design",
    description:
      "사용자의 경험을 최적화하는 디자인으로, 제품 및 서비스를 이용할 때의 편의성과 만족도를 높이며, 인터페이스를 설계하고, 리서치, 정보 설계(IA), 사용자 흐름(User Flow), 프로토타이핑 등을 포함합니다.",
  },
  {
    id: "04",
    title: "Interaction Design",
    description:
      "사용자가 디지털 제품과 상호작용하는 방식을 설계하여 사용자와 인터페이스 간의 인터랙션을 원활하게 합니다.",
  },
  {
    id: "05",
    title: "Conversational Design",
    description:
      "챗봇, 음성 인식 AI, 가상 비서 등 사용자와의 자연스러운 대화를 위한 UX 라이팅, 플로우 설계, 자연어 처리(NLP) 등을 포함합니다.",
  },
  {
    id: "06",
    title: "GUI Design",
    description:
      "웹사이트, 앱, 소프트웨어 등에서 버튼, 아이콘, 메뉴, 애니메이션 등의 시각적 요소를 제작합니다.",
  },
  {
    id: "07",
    title: "Data Visualization",
    description:
      "복잡한 데이터를 시각화하여 정보 전달을 효과적으로 만들고, 정보를 직관적으로 이해할 수 있도록 UI/UX 및 인터랙티브 요소와 결합합니다.",
  },
  {
    id: "08",
    title: "AI Design",
    description:
      "AI 기술을 기반으로 한 제품 및 서비스의 UX/UI를 설계하여, AI 추천 시스템, 자동화된 UI, 사용자 맞춤형 인터페이스 등을 디자인합니다.",
  },
  {
    id: "09",
    title: "AR/VR Design",
    description:
      "증강현실(AR)과 가상현실(VR) 환경에서의 사용자 경험을 설계하고, 3D 모델링, 몰입형 UI, 제스처 기반 인터랙션 등을 포함합니다.",
  },
  {
    id: "10",
    title: "Prototyping",
    description:
      "디자인이 실제로 구현되기 전에 사용자 테스트를 할 수 있도록 시뮬레이션하는 과정으로, Figma, Adobe XD, ProtoPie, Framer 등 다양한 도구를 활용하여 프로토타입을 제작합니다.",
  },
];

function KeywordItem({ id, title, description }) {
  return (
    <li className="hover:bg-[linear-gradient(to_top,#27512e,#0CB30000_35%)] flex group overflow-hidden transition-all duration-700 border-b-[1px] lg:border-b-[2px] hover:border-b-0 py-2 lg:py-[0.9vh]">
      <div className="w-[50%] group-hover:w-[15%] group-hover:text-[#90ff4b] font-[300] leading-none text-[6vw] lg:text-[2.5vw]">
        {id}
      </div>
      <h3 className="w-[50%] group-hover:w-[35%] group-hover:mb-[2vh] group-hover:text-[#90ff4b] font-[300] leading-none text-[6vw] lg:text-[2.5vw]">
        {title}
      </h3>
      <div className="w-0 group-hover:w-[50%] font-[500] leading-[1.8] text-[3.3vw] lg:text-[1.15vw] lg:group-hover:h-[25vh] h-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        {description}
      </div>
    </li>
  );
}

export default function Keywords() {
  return (
    <ul className="w-full h-full border-t-[1px] lg:border-t-[2px] pb-[20%] flex flex-col">
      {keywords.map((keyword) => (
        <KeywordItem key={keyword.id} {...keyword} />
      ))}
    </ul>
  );
}
