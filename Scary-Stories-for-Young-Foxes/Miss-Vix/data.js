/* =============================================================
   단어장 데이터 파일 (data.js)
   -------------------------------------------------------------
   ★ 이 파일 하나만 고치면 낱말카드/퀴즈가 함께 바뀝니다.
   ★ 새 단원을 만들 때는 이 파일을 복사해 words 내용만 교체하세요.
   ============================================================= */

window.VOCAB_DATA = {

  /* ---------- 화면에 표시할 제목/브랜드 ---------- */
  title:    "Scary Stories for Young Foxes",
  subtitle: "Miss Vix",
  brand:    "SueSooEnglish",

  /* ---------- 테마 색상 (Orange & Charcoal) ---------- */
  theme: {
    primary:     "#36454F",  // 메인 차콜
    bg:          "#232D34",  // 배경 그라데이션 끝색
    accent:      "#FF7F00",  // 뜻/강조 색 (오렌지)
    button:      "#FFE9D1",  // 버튼 배경
    buttonHover: "#FFD6AE"   // 버튼 hover
  },

  /* ---------- 단어 목록 ----------
     word     : 표제어(원형)          (필수)
     part     : 품사                  (필수)
     meaning  : 한글 뜻               (필수)
     example  : 영어 예문             (필수, 빈칸 문제에 사용)
     inflected: 예문 속 불규칙 활용형  (선택)
  */
  words: [
    { word: "coil",             part: "v.",     meaning: "또아리를 틀다, 휘감기다",                        example: "The sky grayed, the leaves blushed red, and mist coiled through the trees like something alive." },
    { word: "snarl",            part: "v.",     meaning: "(이빨을 드러내며) 으르렁거리다",                 example: "“Yeah!” said the third, snarling. “So scary our eyes fall out of our heads.”" },
    { word: "raise the hackles",part: "idiom",  meaning: "털을 곤두세우게 하다, 소름 돋게 하다, 화를 돋우다", example: "“That story wouldn't raise the hackles on a field mouse!” said the fourth." },
    { word: "perk",             part: "v.",     meaning: "(귀 등이) 쫑긋 서다, 활기를 띠다",              example: "The kits' ears perked." },
    { word: "save",             part: "prep.",  meaning: "~을 제외하고, ~ 외에는",                         example: "And so they waited till all was quiet, save their mother's snoozing." },
    { word: "ooze",             part: "v.",     meaning: "(걸쭉한 액체가) 스며 나오다, 천천히 흐르다",     example: "Roots dripped over its mouth. Fog oozed from its throat." },
    { word: "abruptly",         part: "adv.",   meaning: "갑작스럽게, 돌연히",                             example: "The bones stirred, then jerked up so abruptly every one of the kits' paws left the ground." },
    { word: "scurry",           part: "v.",     meaning: "종종걸음으로 달리다, 급히 가다",                 example: "The little one scurried behind her beta sister." },
    { word: "silhouette",       part: "n.",     meaning: "실루엣, 검은 윤곽",                              example: "The bones sat themselves upright, forming a sort of fox silhouette." },
    { word: "budge",            part: "v.",     meaning: "조금도 움직이지 않다 (주로 부정문), 의견을 바꾸다", example: "She hoped this was enough to get her siblings to scurry home, but no one budged." },
    { word: "waste away",       part: "idiom",  meaning: "쇠약해지다, (시간 등을) 허송세월하다",           example: "You'll waste away the days with your mother, forever smelling like her milk." },
    { word: "dappled",          part: "adj.",   meaning: "얼룩덜룩한, (그늘과 빛이) 번갈아 드는",          example: "Roa, Marley, and Mia trotted toward the dappled shade of the Eavey Wood, tongues lolling." },
    { word: "hysterics",        part: "n.",     meaning: "발작적 웃음, 히스테리 상태",                     example: "This sent Mia into hysterics." },
    { word: "brittle",          part: "adj.",   meaning: "잘 부러지는, 바삭바삭한",                        example: "The grass was growing brittle, and baby bunnies were no longer as easy to pluck as blackberries." },
    { word: "roil",             part: "v.",     meaning: "(마음이나 위 속을) 요동치게 하다, 뒤틀리게 하다", example: "The yellow stench crept up his nostrils and roiled his stomach." },
    { word: "runt",             part: "n.",     meaning: "(한 배에서 태어난 새끼들 중) 가장 작고 약한 녀석", example: "Alfie may have been the runt of the litter, but he was the most adventurous." },
    { word: "gnaw",             part: "v.",     meaning: "갉아먹다, 물어뜯다",                             example: "His legs were gnawed pink." },
    { word: "coax",             part: "v.",     meaning: "구슬리다, 달래다, 유도하다",                     example: "He wanted to sniff out the butterfly dust and coax her back to the surface." },
    { word: "second-guess",     part: "v.",     meaning: "의심하다, 사후에 번복하다, 추측하다",            example: "In the warm light of morning, he second-guessed himself and gazed back toward the hawthorn bush.", inflected: "second-guessed" },
    { word: "swivel",           part: "v.",     meaning: "(축을 중심으로) 돌다, 회전하다",                 example: "When he sensed her shadow in his left whiskers, his legs swiveled and shot him to the right." },
    { word: "crevice",          part: "n.",     meaning: "(바위, 벽 등의) 좁은 틈, 갈라진 곳",            example: "He wriggled into a whisker-wide crevice and crawled to the heart of the thorny shadows." },
    { word: "quiver",           part: "v.",     meaning: "떨다, 진동하다",                                example: "Quivering, he slunk out of the mud and pressed into the shadow of the crumbling bank." },
    { word: "slink",            part: "v.",     meaning: "살금살금 움직이다, 숨어들다",                    example: "Quivering, he slunk out of the mud and pressed into the shadow of the crumbling bank.", inflected: "slunk" },
    { word: "seize",            part: "v.",     meaning: "와락 붙잡다; (몸이) 발작을 일으키다, 경직되다",   example: "The moment her paw touched the water, her body seized and arched backward." },
    { word: "ravage",          part: "v.",     meaning: "황폐하게 만들다, 피폐하게 하다",                 example: "Alfie wheezed and wriggled his small, ravaged body into the burrow." },
    { word: "rabid",            part: "adj.",   meaning: "광견병에 걸린, 과격한, 맹렬한",                  example: "“What's more frightening than a rabid teacher?” the storyteller asked." }
  ]
};
