/**
 * Wedding Invitation Configuration
 */
const CONFIG = {
  useCurtain: false,

  groom: {
    name: "백성열",
    nameEn: "Baek Seong-yeol",
    father: "백종신",
    mother: "이윤정",
    fatherDeceased: false,
    motherDeceased: false
  },
  bride: {
    name: "김은정",
    nameEn: "Kim Eun-jeong",
    father: "김중희",
    mother: "윤미건",
    fatherDeceased: false,
    motherDeceased: false
  },
  wedding: {
    date: "2026-08-30",
    time: "11:00",
    venue: "아이벡스컨벤션",
    hall: "아이벡스홀(단독홀)",
    address: "경기도 광명시 양지로 17 AK플라자 광명 5층",
    tel: "02-897-1002",
    mapLinks: {
      kakao: "https://kko.to/7wkvy4EdhS",
      naver: "https://naver.me/GkURxNA2"
    }
  },
  greeting: {
    title: "135km, 분당 직장인과 대전 박사생",
    content: "대부분 멀리 떨어져 있던 시간 속에서\n서로를 향한 마음은 늘 같은 곳에 머물렀습니다.\n이제 그 거리를 함께 살아갈 시간으로 채우려 합니다.\n\n8월 30일\n저희의 앞날을 함께 축복해주시면 감사하겠습니다."
  },
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },
  accounts: {
    groom: [
      { role: "신랑", name: "백성열", bank: "카카오뱅크", number: "3333-192-245240" },
      { role: "아버지", name: "백종신", bank: "카카오뱅크", number: "3333-376-479733" }
    ],
    bride: [
      { role: "신부", name: "김은정", bank: "신한은행", number: "110-454-866737" },
      { role: "아버지", name: "김중희", bank: "농협은행", number: "356-0974-2961-53" }
    ]
  },
  meta: {
    title: "백성열 ♥ 김은정 결혼합니다",
    description: "2026년 8월 30일, 소중한 분들을 초대합니다."
  }
};
