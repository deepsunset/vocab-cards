/* =============================================================
   단어장 데이터 파일 (data.js)
   -------------------------------------------------------------
   ★ 이 파일 하나만 고치면 낱말카드/퀴즈가 함께 바뀝니다.
   ★ 새 단원을 만들 때는 이 파일을 복사해 words 내용만 교체하세요.
   ============================================================= */

window.VOCAB_DATA = {

  /* ---------- 화면에 표시할 제목/브랜드 ---------- */
  title:    "Inside Out & Back Again",
  subtitle: "'Third Rule' ~ 'Most Relieved Day'",
  brand:    "SueSooEnglish",

  /* ---------- 테마 색상 (단원마다 자유롭게 변경) ---------- */
  theme: {
    primary:     "#360F5A",  // 메인 딥 퍼플
    bg:          "#11041D",  // 배경 그라데이션 끝색
    accent:      "#A64B3D",  // 뜻/강조 색
    button:      "#EBD8F7",  // 버튼 배경
    buttonHover: "#D4B6E6"   // 버튼 hover
  },

  /* ---------- 인증 규칙 ----------
     학습 완료 인증(스크린샷) 화면은 '전체 단어장을 처음부터 끝까지 만점'일 때만 표시됩니다.
     '틀린 것만 다시 풀기'로 만점을 받아도 인증되지 않습니다. */

  /* ---------- 단어 목록 ----------
     word     : 표제어(원형)          (필수)
     part     : 품사                  (필수)
     meaning  : 한글 뜻               (필수)
     example  : 영어 예문             (필수, 빈칸 문제에 사용)
     inflected: 예문 속 불규칙 활용형  (선택)
                └ 예문에서 자동 추출이 안 되는 불규칙만 적으면 됩니다.
                  (go→went, buy→bought 처럼. 규칙 변화는 자동 처리)
  */
  words: [
    { word: "exception",       part: "n.",   meaning: "예외",                        example: "Always an exception. Do not add an s to certain nouns." },
    { word: "pity",            part: "n.",   meaning: "동정, 불쌍히 여김",            example: "I step back, hating pity..." },
    { word: "logical",         part: "adj.", meaning: "논리적인",                     example: "Would be simpler if English and life were logical." },
    { word: "illogical",       part: "adj.", meaning: "비논리적인",                   example: "...every language has annoyances and illogical rules..." },
    { word: "horizon",         part: "n.",   meaning: "지평선, 수평선",               example: "We walk and walk on a road where the horizon keeps extending." },
    { word: "extend",          part: "v.",   meaning: "뻗다, 길어지다",               example: "...where the horizon keeps extending." },
    { word: "gallop",          part: "v.",   meaning: "(말이) 전속력으로 달리다",     example: "I repeat myself and gallop." },
    { word: "agreeable",       part: "adj.", meaning: "선선히 동의하는, 다정한",       example: "Be agreeable. Not without knowing what I’m agreeing to." },
    { word: "diacritical mark",part: "n.",   meaning: "(베트남어의) 발음 구별 기호",   example: "...listen for the diacritical mark, this one directing the tone downward." },
    { word: "barrette",        part: "n.",   meaning: "머리핀",                       example: "Hair with barrettes in all colors on bronze bread." },
    { word: "snuggle",         part: "v.",   meaning: "파묻히다, 포근히 안기다",       example: "...pink sausage snuggled inside bread..." },
    { word: "smear",           part: "v.",   meaning: "문질러 바르다, 칠하다",         example: "...smeared with sauces yellow and red." },
    { word: "defense",         part: "n.",   meaning: "방어, 호신술",                 example: "I’ll teach you defense." },
    { word: "purify",          part: "v.",   meaning: "정화하다, 깨끗이 하다",         example: "I already learned fractions and how to purify river water." },
    { word: "furious",         part: "adj.", meaning: "몹시 화가 난",                 example: "I’m furious, unable to explain..." },
    { word: "squat",           part: "v.",   meaning: "쪼그려 앉다",                  example: "I squat in nới tấn, weight on legs, backs straight..." },
    { word: "shatter",         part: "v.",   meaning: "산산조각 나다",                example: "A brick shatters the front window..." },
    { word: "hogwash",         part: "n.",   meaning: "터무니없는 소리, 허튼소리",     example: "Hogwash, our cowboy says..." },
    { word: "pucker",          part: "v.",   meaning: "(입술을) 오므리다",            example: "...puckering for the ending of ssssshhhhhh." },
    { word: "retired",         part: "adj.", meaning: "은퇴한, 퇴직한",               example: "MiSSSisss WaSShington is a widow and retired teacher." },
    { word: "megaphone",       part: "n.",   meaning: "확성기",                       example: "...which act as little megaphones to tell the world..." },
    { word: "solitude",        part: "n.",   meaning: "고독, 혼자 있음",              example: "...her signal for solitude to chant." },
    { word: "somersault",      part: "n.",   meaning: "공중제비, 회전",               example: "How can I explain dragonflies do somersaults in my stomach..." },
    { word: "relieved",        part: "adj.", meaning: "안도하는, 다행으로 여기는",     example: "October 14 is Most Relieved Day..." },
    { word: "wrinkle",         part: "v.",   meaning: "주름지다, 구겨지다",           example: "...a white white shirt that wouldn’t wrinkle even if he rolled down a hill." }
  ]
};
