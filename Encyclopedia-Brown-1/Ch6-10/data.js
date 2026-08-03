/* =============================================================
   단어장 데이터 파일 (data.js)
   -------------------------------------------------------------
   ★ 이 파일 하나만 고치면 낱말카드/퀴즈가 함께 바뀝니다.
   ★ 새 단원을 만들 때는 이 파일을 복사해 words 내용만 교체하세요.
   ============================================================= */

window.VOCAB_DATA = {

  /* ---------- 화면에 표시할 제목/브랜드 ---------- */
  title:    "Encyclopedia Brown #1",
  subtitle: "Ch.6 ~ Ch.10",
  brand:    "SueSooEnglish",

  /* ---------- 테마 색상 (Dark Brown) ---------- */
  theme: {
    primary:     "#5D4037",  // 메인 다크 브라운
    bg:          "#2B1A14",  // 배경 그라데이션 끝색 (에스프레소)
    accent:      "#D2A679",  // 뜻/강조 색 (캐러멜)
    button:      "#EFE1D2",  // 버튼 배경
    buttonHover: "#E2CDB8"   // 버튼 hover
  },

  /* ---------- 단어 목록 ----------
     word     : 표제어(원형)          (필수)
     part     : 품사                  (필수)
     meaning  : 한글 뜻               (필수)
     example  : 영어 예문             (필수, 빈칸 문제에 사용)
     inflected: 예문 속 불규칙 활용형  (선택)
  */
  words: [
    { word: "eyewitness",     part: "n.",   meaning: "목격자",                     example: "“We have an eyewitness,” answered his father." },
    { word: "worriedly",      part: "adv.", meaning: "걱정스럽게",                 example: "“It must be important,” said Mrs. Brown worriedly." },
    { word: "alibi",          part: "n.",   meaning: "알리바이(현장부재 증명)",     example: "“I hope he has a good alibi.”" },
    { word: "shrugged",       part: "v.",   meaning: "어깨를 으쓱했다",            example: "Chief Brown shrugged." },
    { word: "distinguishing", part: "adj.", meaning: "뚜렷이 구별되는",            example: "“Does the man you picked up have any distinguishing features?”" },
    { word: "suspect",        part: "n.",   meaning: "용의자",                     example: "Billy Haggerty became suspect number one!" },
    { word: "confessed",      part: "v.",   meaning: "자백했다",                   example: "Blind Tom and the man the police were holding in jail confessed they had robbed the bank." },
    { word: "plunged",        part: "v.",   meaning: "푹 박혔다",                  example: "His knife plunged into this watermelon." },
    { word: "tripped",        part: "v.",   meaning: "발이 걸려 넘어졌다",         example: "When he started to run, he tripped and fell." },
    { word: "storeroom",      part: "n.",   meaning: "창고",                       example: "“It started in the window of my storeroom.”" },
    { word: "sneered",        part: "v.",   meaning: "비웃으며 말했다",            example: "“Did you expect it to look new and shiny?” sneered Bugs." },
    { word: "retorted",       part: "v.",   meaning: "맞받아쳤다",                 example: "“A lot of fellows own knives with carved handles,” retorted Frank." },
    { word: "triumph",        part: "n.",   meaning: "승리감, 의기양양함",         example: "Sally wore a smile of triumph as she looked at Encyclopedia." },
    { word: "mysteriously",   part: "adv.", meaning: "알쏭달쏭하게, 신비롭게",     example: "“The case of the champion egg spinner is cracked,” Encyclopedia said mysteriously." },
    { word: "unsigned",       part: "adj.", meaning: "서명이 없는, 익명의",        example: "She received an unsigned letter last week." },
    { word: "businesslike",   part: "adj.", meaning: "사무적인, 진지한",           example: "He looked up, very businesslike." }
  ]
};
