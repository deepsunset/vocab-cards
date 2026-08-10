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
    { word: "charismatic",              part: "adj.", meaning: "카리스마 있는, 사람을 사로잡는",                    example: "They were led by a charismatic leader named Jim Jones." },
    { word: "paranoid",                 part: "adj.", meaning: "편집증적인, 피해망상에 빠진",                       example: "Jones, a paranoid “prophet,” told his followers a lie." },
    { word: "imminent",                 part: "adj.", meaning: "임박한, 곧 닥칠",                                   example: "He warned of an imminent backlash." },
    { word: "succumb",                  part: "v.",   meaning: "(유혹·압력 등에) 굴복하다",                        example: "She succumbed to two fundamental characteristics of human nature." },
    { word: "ostracize",                part: "v.",   meaning: "(집단에서) 배척하다, 따돌리다",                     example: "It is the profound fear of being ostracized from it." },
    { word: "compliant",                part: "adj.", meaning: "(순순히) 따르는, 순응적인",                         example: "The same fear also makes us frighteningly compliant." },
    { word: "tenuous",                  part: "adj.", meaning: "미약한, 근거가 빈약한",                             example: "This happens even when the basis for doing so is tenuous or trivial." },
    { word: "sinister",                 part: "adj.", meaning: "불길한, 해로운",                                    example: "One potentially sinister side-effect of belonging to an in-group is exclusion." },
    { word: "banish",                   part: "v.",   meaning: "추방하다, 쫓아내다",                                example: "They voted in order to banish the unwanted from their midst." },
    { word: "illiterate",               part: "adj.", meaning: "글을 모르는, 문맹인",                               example: "An illiterate man asked a favor of Aristides." },
    { word: "mundane",                  part: "adj.", meaning: "평범한, 일상적인",                                  example: "Some of the acts they recorded were mundane." },
    { word: "propensity",               part: "n.",   meaning: "(~하는) 성향, 경향",                               example: "Consider our technological propensity for connection." },
    { word: "cohesive",                 part: "adj.", meaning: "결속력 있는, 응집력 있는",                          example: "The most cohesive groups were the most likely to reject and ostracize the deviate." },
    { word: "rosy",                     part: "adj.", meaning: "지나치게 낙관적인, 장밋빛으로 그린",                example: "They produce a rosy white paper about the practice and process of fracking." },
    { word: "hypocrisy",                part: "n.",   meaning: "위선",                                             example: "I had to expose the hypocrisy." },
    { word: "bandwagon",                part: "n.",   meaning: "(우세해 보이는 쪽에) 편승, 대세 편승 효과",         example: "The bandwagon effect makes us less willing to voice unpopular opinions." },
    { word: "spiral of silence",        part: "phr.", meaning: "침묵의 나선 (소수 의견이 점점 침묵하게 되는 현상)", example: "It can trigger a “spiral of silence,” a term first used by Noelle-Neumann." },
    { word: "self-censorship",          part: "n.",   meaning: "자기 검열",                                        example: "You become stifled by your own self-censorship." },
    { word: "retaliation",              part: "n.",   meaning: "보복, 앙갚음",                                     example: "They had concerns about confidentiality and the likelihood of retaliation by their employers." },
    { word: "discriminate",             part: "v.",   meaning: "차별하다",                                         example: "Employers can easily find other reasons to discriminate against someone." },
    { word: "perfidious",               part: "adj.", meaning: "배신적인, 신의 없는",                              example: "It is one that is often more perfidious and certainly more widespread." },
    { word: "perpetuate",               part: "v.",   meaning: "(안 좋은 것을) 지속시키다, 영속시키다",            example: "We become more likely to perpetuate the very views we and others do not hold." },
    { word: "pernicious",               part: "adj.", meaning: "해로운, 유해한",                                   example: "Silent consensus is extremely pernicious." },
    { word: "dismantle",                part: "v.",   meaning: "해체하다, 무너뜨리다",                             example: "It becomes all but impossible to dismantle the illusion." },
    { word: "self-fulfilling prophecy", part: "phr.", meaning: "자기충족적 예언",                                  example: "The result is a pernicious, self-fulfilling prophecy." },
    { word: "ambivalence",              part: "n.",   meaning: "양면적 감정, 갈등하는 마음",                       example: "It only takes a single spark of ambivalence or mixed opinion." },
    { word: "plausible deniability",    part: "phr.", meaning: "(책임을 피할 수 있는) 그럴듯한 부인 가능성",       example: "This gives you plausible deniability while retaining your sense of control." },
    { word: "equivocate",               part: "v.",   meaning: "모호하게 말하다, 말을 흐리다",                     example: "More and more people start equivocating and making excuses." },
    { word: "undue",                    part: "adj.", meaning: "지나친, 부당한",                                   example: "This gives both the polls and the media an enormous, undue influence." },
    { word: "vehemence",                part: "n.",   meaning: "격렬함, 맹렬함",                                   example: "They scare all dissenters into silence with their unfiltered vehemence." }
  ]
};
