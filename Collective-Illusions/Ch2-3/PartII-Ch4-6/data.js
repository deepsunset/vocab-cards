/* =============================================================
   단어장 데이터 파일 (data.js)
   -------------------------------------------------------------
   ★ 이 파일 하나만 고치면 낱말카드/퀴즈가 함께 바뀝니다.
   ★ 새 단원을 만들 때는 이 파일을 복사해 words 내용만 교체하세요.
   ============================================================= */

window.VOCAB_DATA = {

  /* ---------- 화면에 표시할 제목/브랜드 ---------- */
  title:    "Collective Illusions",
  subtitle: "Part II Ch.4 ~ Ch.6",
  brand:    "SueSooEnglish",

  /* ---------- 테마 색상 (Dark Grey, 지난 CI 단원과 동일) ---------- */
  theme: {
    primary:     "#33383D",  // 메인 다크 그레이
    bg:          "#15181B",  // 배경 그라데이션 끝색
    accent:      "#7FA8C9",  // 뜻/강조 색 (스틸 블루)
    button:      "#E2E5E8",  // 버튼 배경
    buttonHover: "#C9CED3"   // 버튼 hover
  },

  /* ---------- 단어 목록 ----------
     word     : 표제어(원형)          (필수)
     part     : 품사                  (필수)
     meaning  : 한글 뜻               (필수)
     example  : 영어 예문             (필수, 빈칸 문제에 사용)
     inflected: 예문 속 불규칙 활용형  (선택)
  */
  words: [
    { word: "conformity",     part: "n.",      meaning: "순응, 동조",                      example: "we are being unwittingly corralled into conformity and self-censorship." },
    { word: "confederate",    part: "n.",      meaning: "(실험 등의) 공모자, 바람잡이",     example: "each of the clubs secretly contained three confederates who were paid to play a specific role." },
    { word: "mimicry",        part: "n.",      meaning: "흉내, 모방",                      example: "This instinctive mimicry isn't something we outgrow." },
    { word: "reinforcement",  part: "n.",      meaning: "강화",                            example: "part of the brain responsible for feelings of reinforcement and reward lit up" },
    { word: "scrutinize",     part: "v.",      meaning: "면밀히 살피다, 조사하다",          example: "The most erroneous stories are those we think we know best—and therefore never scrutinize or question" },
    { word: "covet",          part: "v.",      meaning: "몹시 탐내다",                      example: "Thou shalt not covet" },
    { word: "rivalry",        part: "n.",      meaning: "경쟁, 대립",                       example: "But her actions indicate a rivalry to Victor" },
    { word: "scarcity",       part: "n.",      meaning: "부족, 결핍",                       example: "And the notion of false scarcity these conflicts feed only intensifies the competitive impulse." },
    { word: "pulverize",      part: "v.",      meaning: "산산이 부수다",                    example: "I left the class and walked home in tears, my self-esteem pulverized." },
    { word: "redeem",         part: "v.",      meaning: "(명예 등을) 회복하다, 만회하다",    example: "I was an irredeemable \"taker.\"", inflected: "irredeemable" },
    { word: "coalesce",       part: "v.",      meaning: "하나로 합쳐지다, 응집하다",         example: "we tend to coalesce not around our own personal standard but around the most popular view." },
    { word: "allegiance",     part: "n.",      meaning: "충성심, 소속감",                    example: "These so-called allegiance norms can involve rules for everything" },
    { word: "reciprocity",    part: "n.",      meaning: "상호성, 호혜",                      example: "They not only signal that one personally holds pro-social values like fairness and reciprocity" },
    { word: "indoctrinate",   part: "v.",      meaning: "(사상을) 주입하다",                 example: "Dr. Pangloss indoctrinates the naive youth Candide in the philosophy that extant reality is the “best of all possible worlds.”" },
    { word: "taboo",          part: "n.",      meaning: "금기",                             example: "Such desires have been taboo across the history of Western civilization" },
    { word: "queue",          part: "n./v.",   meaning: "줄; 줄을 서다",                    example: "Later, during World War II, the queue became associated with doing one's duty and taking one's turn." },
    { word: "revulsion",      part: "n.",      meaning: "혐오감, 역겨움",                    example: "Revulsion is a natural reflex; it's our brains telling us to protect ourselves from harm." },
    { word: "ubiquitous",     part: "adj.",    meaning: "어디에나 있는, 아주 흔한",          example: "And eventually this system of denial becomes so ubiquitous that it becomes normalized." },
    { word: "egregious",      part: "adj.",    meaning: "터무니없는, 지독한",                example: "When we think about social influence, our minds usually gravitate toward its most egregious forms." },
    { word: "arbitrary",      part: "adj.",    meaning: "임의적인, 자의적인",                example: "But in reality, norms are almost always arbitrary" },
    { word: "corrupt",        part: "v./adj.", meaning: "타락시키다; 타락한",               example: "And when social norms are corrupted in this way" },
    { word: "bigotry",        part: "n.",      meaning: "편견, 편협함",                      example: "racism, sexism, and other forms of bigotry." },
    { word: "vigilant",       part: "adj.",    meaning: "경계하는, 방심하지 않는",           example: "not to ignore them but instead to be vigilant about them" },
    { word: "insidious",      part: "adj.",    meaning: "서서히 퍼지는, 은근히 해로운",      example: "One of their most insidious skills was to pile support behind a few human outliers." },
    { word: "phantom",        part: "n.",      meaning: "환영, 허상",                        example: "we can all end up chasing the phantoms of collective illusions." },
    { word: "complicit",      part: "adj.",    meaning: "공모한, 연루된",                    example: "In our unthinking complicity with norms, we tend to make a fundamental mistake" },
    { word: "proclivity",     part: "n.",      meaning: "성향, 기질",                        example: "social norms can aggravate this proclivity to misread others." },
    { word: "polarization",   part: "n.",      meaning: "양극화",                            example: "on a broader level it actually fosters polarization because nobody ever hears opinions that differ from their own." },
    { word: "nebulous",       part: "adj.",    meaning: "모호한, 흐릿한",                     example: "So how are we supposed to guess the opinions of large, nebulous, and almost entirely anonymous groups of others?" },
    { word: "hearsay",        part: "n.",      meaning: "소문, 전문(傳聞)",                   example: "most hearsay, or information heard from someone else who is not a witness, is not acceptable as evidence" },
    { word: "distort",        part: "v.",      meaning: "왜곡하다",                          example: "people distort their behavior due to social influence" },
    { word: "propaganda",     part: "n.",      meaning: "선전",                              example: "Hitler's Mein Kampf identifies a number of core principles for successful propaganda" },
    { word: "foment",         part: "v.",      meaning: "(갈등 등을) 조장하다, 부추기다",     example: "foment distrust in government institutions" },
    { word: "fringe",         part: "adj./n.", meaning: "주변부의; 비주류",                   example: "allowing fringe actors to manufacture illusions by creating the impression of majorities that don't exist in reality." },
    { word: "deluge",         part: "n.",      meaning: "홍수처럼 쏟아짐, 쇄도",              example: "online hecklers deluged the author and her publisher with demands to cancel the book's publication" }
  ]
};
