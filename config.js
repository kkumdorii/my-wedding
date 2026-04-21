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
    title: "소중한 분들을 초대합니다",
    content: "저희 두 사람, 드디어 하나가 됩니다.\n\n사랑하는 사람과 함께하는 이 자리에\n소중한 분들을 초대하고 싶었습니다.\n\n부디 오셔서 축복해 주시면\n더없이 기쁘겠습니다."
  },
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },
  accounts: {
    groom: [
      { role: "신랑", name: "백성열", bank: "은행명", number: "000-000-000000" },
      { role: "아버지", name: "백종신", bank: "은행명", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김은정", bank: "은행명", number: "000-000-000000" },
      { role: "아버지", name: "김중희", bank: "은행명", number: "000-000-000000" }
    ]
  },
  meta: {
    title: "백성열 ♥ 김은정 결혼합니다",
    description: "2026년 8월 30일, 소중한 분들을 초대합니다."
  }
};