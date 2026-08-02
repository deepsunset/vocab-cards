/* =============================================================
   단어장 데이터 파일 (data.js)
   -------------------------------------------------------------
   ★ 이 파일 하나만 고치면 낱말카드/퀴즈가 함께 바뀝니다.
   ★ 새 단원을 만들 때는 이 파일을 복사해 words 내용만 교체하세요.
   ============================================================= */

window.VOCAB_DATA = {

  /* ---------- 화면에 표시할 제목/브랜드 ---------- */
  title:    "Freewater",
  subtitle: "Ch.71 ~ Ch.91",
  brand:    "SueSooEnglish",

  /* ---------- 테마 색상 (Aqua Blue) ---------- */
  theme: {
    primary:     "#0B6E82",  // 메인 딥 아쿠아
    bg:          "#052029",  // 배경 그라데이션 끝색
    accent:      "#38D6E0",  // 뜻/강조 색
    button:      "#D6F4F8",  // 버튼 배경
    buttonHover: "#B3E7EE"   // 버튼 hover
  },

  /* ---------- 단어 목록 ----------
     word     : 표제어(원형)          (필수)
     part     : 품사                  (필수)
     meaning  : 한글 뜻               (필수)
     example  : 영어 예문             (필수, 빈칸 문제에 사용)
     inflected: 예문 속 불규칙 활용형  (선택)
  */
  words: [
    { word: "verdant",       part: "adj.", meaning: "푸르른, 초록빛이 무성한",              example: "Soon they couldn't see her in the verdant foliage." },
    { word: "gnarl",         part: "v.",   meaning: "으르렁거리다",                        example: "From the trees came panting and gnarling noises." },
    { word: "vitriol",       part: "n.",   meaning: "신랄함, 악의에 찬 태도",              example: "Their anger, barking, and vitriol was directed at her." },
    { word: "scrutinize",    part: "v.",   meaning: "자세히 살펴보다, 유심히 뜯어보다",     example: "He read it, scrutinized Ferdinand, then read it again." },
    { word: "dispassionate", part: "adj.", meaning: "감정에 치우치지 않는, 냉정한",         example: "In the middle of it all was Rose, calm, dispassionate, and focused." },
    { word: "feign",         part: "v.",   meaning: "~인 척하다, 가장하다",                example: "“I have no idea,” said Ferdinand, feigning ignorance." },
    { word: "protégé", part: "n.", meaning: "제자, 후계자",                      example: "She was no longer her mother's protégé." },
    { word: "rafters",       part: "n.",   meaning: "(지붕을 받치는) 서까래",              example: "She peeked up at the rafters of the tent." },
    { word: "thunderclap",   part: "n.",   meaning: "천둥소리, 벼락 치는 소리",            example: "The loudest sound Sanzi had ever heard was a thunderclap in a great storm." },
    { word: "course",        part: "v.",   meaning: "(감정·피 등이) 세차게 흐르다",         example: "A thunderclap of fear coursed through her veins and turned them ice cold." },
    { word: "mesmerize",     part: "v.",   meaning: "넋을 잃게 하다, 매혹하다",            example: "She stared mesmerized at the ghostlike shirts." },
    { word: "entrance",      part: "v.",   meaning: "넋을 잃게 만들다, 황홀하게 하다",      example: "She backed away, entranced at the sight of him." },
    { word: "cauldron",      part: "n.",   meaning: "(크고 우묵한) 가마솥",                example: "Her voice echoed in the cauldron." },
    { word: "dubious",       part: "adj.", meaning: "의심스러운, 확신이 안 서는",           example: "Sanzi shook her head, dubious about the idea." },
    { word: "oblivious",     part: "adj.", meaning: "눈치채지 못하는, 알아차리지 못하는",   example: "It made him run even faster, oblivious that he'd left his partner behind." },
    { word: "writhe",        part: "v.",   meaning: "(고통으로) 몸부림치다",               example: "He fell to the ground writhing in pain." },
    { word: "shriek",        part: "v.",   meaning: "비명을 지르다, 날카롭게 소리치다",     example: "“Get after them!” the militiaman shrieked." },
    { word: "sprint",        part: "v.",   meaning: "전력 질주하다",                       example: "Ferdinand and Sanzi sprinted across the grass lawn." },
    { word: "fathom",        part: "v.",   meaning: "이해하다, 헤아리다",                   example: "She was unable to fathom the possibility of danger." },
    { word: "pockmark",      part: "v.",   meaning: "곳곳에 구멍/자국을 내다",             example: "Plate-sized fire holes pockmarked the entire tent." },
    { word: "ignite",        part: "v.",   meaning: "불이 붙다, 점화되다",                 example: "Tablecloths ignited, and flowers and dresses were set aflame." },
    { word: "stampede",      part: "v.",   meaning: "(무리가) 우르르 몰려가다, 쇄도하다",   example: "Starched suits were stampeding to the tent flaps." },
    { word: "dazed",         part: "adj.", meaning: "멍한, 얼떨떨한",                      example: "She stopped and stood dazed, watching her wedding reception burn to the ground." },
    { word: "sober",         part: "v.",   meaning: "정신 차리게 하다, (술이) 깨게 하다",   example: "The fire had sobered Crumb up." },
    { word: "fruition",      part: "n.",   meaning: "(계획·소망의) 실현, 결실",            example: "The fruition of this made her certain that even more precious dreams could be fulfilled." },
    { word: "succumb",       part: "v.",   meaning: "(유혹·욕구 등에) 굴복하다, 못 이기다", example: "Few made it home before they succumbed to the need to stop and slumber." },
    { word: "smolder",       part: "v.",   meaning: "연기를 내며 타다",                    example: "The fire began to smolder, leaving only ash behind." },
    { word: "laden",         part: "adj.", meaning: "(짐 등을) 잔뜩 실은, 짊어진",         example: "His back was laden with a tablecloth full of plates." },
    { word: "accustomed",    part: "adj.", meaning: "익숙한, 습관이 된",                   example: "He was accustomed to being alone when he worked." },
    { word: "hesitate",      part: "v.",   meaning: "망설이다, 주저하다",                  example: "Homer didn't hesitate when he led them zigzagging through the field of wooden stakes." }
  ]
};
