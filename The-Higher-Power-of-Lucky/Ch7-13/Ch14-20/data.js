/* =============================================================
   단어장 데이터 파일 (data.js)
   -------------------------------------------------------------
   ★ 이 파일 하나만 고치면 낱말카드/퀴즈가 함께 바뀝니다.
   ★ 새 단원을 만들 때는 이 파일을 복사해 words 내용만 교체하세요.
   ============================================================= */

window.VOCAB_DATA = {

  /* ---------- 화면에 표시할 제목/브랜드 ---------- */
  title:    "The Higher Power of Lucky",
  subtitle: "Ch.14 ~ Ch.20",
  brand:    "SueSooEnglish",

  /* ---------- 테마 색상 (Dark Orange — Ch.7~13과 동일) ---------- */
  theme: {
    primary:     "#C1440E",  // 메인 다크 오렌지
    bg:          "#2B1200",  // 배경 그라데이션 끝색
    accent:      "#8B2E00",  // 뜻/강조 색
    button:      "#FFDAB3",  // 버튼 배경
    buttonHover: "#FFC080"   // 버튼 hover
  },

  /* ---------- 단어 목록 ----------
     word     : 표제어(원형)          (필수)
     part     : 품사                  (필수)
     meaning  : 한글 뜻               (필수)
     example  : 영어 예문             (필수, 빈칸 문제에 사용)
     inflected: 예문 속 불규칙 활용형  (선택)
  */
  words: [
    { word: "glower",        part: "v.",   meaning: "노려보다",                        example: "Sandi glowered at Lucky." },
    { word: "exhaust",       part: "n.",   meaning: "배기가스",                        example: "The exhaust from the bus drowned out the fresh smell of the new morning." },
    { word: "litter",        part: "n.",   meaning: "쓰레기",                          example: "You take care of this stretch of road by picking up all the litter every week." },
    { word: "capture",       part: "v.",   meaning: "붙잡다, 포획하다",                example: "To capture them, all he had was his hands." },
    { word: "blend in",      part: "phr.", meaning: "뒤섞이다, 눈에 안 띄게 어울리다", example: "She blended in too.", inflected: "blended in" },
    { word: "outlying",      part: "adj.", meaning: "외곽의, 변두리의",                example: "We're sending the children from outlying areas home early." },
    { word: "belongings",    part: "n.",   meaning: "소지품",                          example: "I want those of you who ride the school bus to take all your belongings home." },
    { word: "cram",          part: "v.",   meaning: "(억지로) 채워 넣다",              example: "Crammed inside were empty mint boxes.", inflected: "crammed" },
    { word: "scrounge",      part: "v.",   meaning: "(여기저기서) 긁어모으다",          example: "She had empty mint boxes for collecting specimens, scrounged from trash left by ex-smokers." },
    { word: "exquisite",     part: "adj.", meaning: "매우 아름다운, 정교한",            example: "“To lose heart” was Lucky's favorite sad but exquisite phrase." },
    { word: "sophisticated", part: "adj.", meaning: "세련된",                          example: "It turned her into someone else, someone beautiful and sophisticated." },
    { word: "rummage",       part: "v.",   meaning: "뒤지다",                          example: "Lucky rummaged through the kitchen tool carton until she found a dust mask." },
    { word: "crevice",       part: "n.",   meaning: "틈, 균열",                        example: "A bossier, louder crevice of Lucky's brain argued the opposite." },
    { word: "awning",        part: "n.",   meaning: "차양, 천막 지붕",                 example: "The canvas awning strained and flapped as the wind roared." },
    { word: "boundary",      part: "n.",   meaning: "경계",                            example: "They crossed the invisible boundary of the edge of Hard Pan." },
    { word: "rutted",        part: "adj.", meaning: "바퀴 자국이 난",                  example: "Lucky knew it was important to stay on the rutted road." },
    { word: "grimly",        part: "adv.", meaning: "단호하게, 엄하게",                example: "Lucky grimly turned away and went on." },
    { word: "hurtle",        part: "v.",   meaning: "돌진하다, 세차게 나아가다",        example: "A huge thing that turned out to be most of a washing machine hurtled past her." },
    { word: "dislodge",      part: "v.",   meaning: "빼내다, 제거하다",                example: "She'd seen Short Sammy dislodge a burr stuck in a boot." },
    { word: "puncture",      part: "n.",   meaning: "구멍",                            example: "She made a small puncture." },
    { word: "dollop",        part: "n.",   meaning: "(음식 등의) 한 덩이",             example: "Miles squeezed a large dollop of ketchup on his hand." },
    { word: "horrendous",    part: "adj.", meaning: "끔찍한",                          example: "There was the horrendous windstorm, and the bother and trouble of Miles showing up." },
    { word: "gouge",         part: "v.",   meaning: "후벼 파다",                       example: "She tried to gouge it out with her finger but couldn't reach it." },
    { word: "thicket",       part: "n.",   meaning: "덤불, 수풀",                      example: "It was too hard to go through that thicket of hair." },
    { word: "soothe",        part: "v.",   meaning: "달래다, 진정시키다",              example: "Lucky tried to soothe herself out of the panicky feeling." }
  ]
};
