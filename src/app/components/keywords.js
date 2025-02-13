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
    <li className="flex group overflow-hidden transition-all duration-400 border-t-[1px]">
      <span className="pr-4 lg:pr-12 lg:text-[2.5rem] lg:text-[2.5rem] lg:py-4 group-hover:text-[#90ff4b] 2xl:text-[4rem] 2xl:font-[300] 4xl:text-[7rem] 2xl:leading-none text-2xl py-1 font-normal">
        {id}
      </span>
      <div className="lg:flex">
        <h3 className="inline-block 2xl:w-1/2 lg:flex-[1.5] lg:text-[2.5rem] lg:py-4 group-hover:text-[#90ff4b] 2xl:text-[4rem] 2xl:font-[300] 2xl:leading-none 4xl:text-[7rem] text-2xl py-1 font-normal">
          {title}
        </h3>
        <p className="4xl:text-[2rem] lg:flex-1 lg:text-xl lg:group-hover:pb-4 lg:leading-[1.5] xl:text-2xl xl:leading-[1.6] xl:group-hover:pb-52 group-hover:pt-4 group-hover:pb-2 max-h-0 opacity-0 group-hover:max-h-[50rem] group-hover:opacity-100 transition-all duration-700 font-medium text-sm leading-[1.6]">
          {description}
        </p>
      </div>
    </li>
  );
}

export default function Keywords() {
  return (
    <ul className="w-full h-full border-b-[1px]">
      {keywords.map((keyword) => (
        <KeywordItem key={keyword.id} {...keyword} />
      ))}
    </ul>
  );
}
