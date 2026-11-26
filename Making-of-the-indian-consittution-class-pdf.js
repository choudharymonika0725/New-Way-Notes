// ============================================================================
// NEW WAY GK CLASSES • CHAPTER 01: MAKING OF THE INDIAN CONSTITUTION
// Pure-Code Smart Presentation Notes (~23 KB • 49 Pages • Zero Subtitles • 100% Bright)
// Compatible with window.__NW_NOTES / window.__NW_NOTES_HTML Smart Viewer
// ============================================================================
(function () {
  var W = "https://commons.wikimedia.org/wiki/Special:FilePath/";
  var P = function (f, w) { return W + encodeURIComponent(f) + "?width=" + (w || 720); };

  var IMG = {
    asm:       P("Indian_Constituent_Assembly.JPG", 800),
    book:      P("Constitution_of_India.jpg", 720),
    us_const:  P("Constitution_of_the_United_States_of_America_(3679492168).jpg", 760),
    china:     P("Great_Hall_of_the_People_with_flags.jpg", 640),
    russia:    P("Iconic_view_of_Moscow_Kremlin,_Moscow,_Russia.jpg", 640),
    crown:     P("St_Edward's_Crown.jpg", 640),
    nk:        P("Kim_Il_Sung_Square,_Pyongyang,_North_Korea.jpg", 640),
    nehru_asm: P("Jawaharlal_Nehru_addressing_the_constituent_assembly_in_1946.jpg", 800),
    motilal:   P("Jawaharlal_Nehru_and_Motilal_Nehru_in_1929.jpg", 700),
    mn_roy:    P("MN_Roy_1987_stamp_of_India.jpg", 640),
    nehru:     P("Jawaharlal_Nehru_1946.jpg", 640),
    cripps:    P("Stafford_Cripps_and_Mahatma_Gandhi_in_1942.jpg", 720),
    cabinet:   P("Cabinet_mission_to_india1946.jpg", 760),
    interim:   P("Members_of_the_Interim_Government_of_India.jpg", 760),
    wavell:    P("Archibald_Wavell2.jpg", 600),
    mount:     P("Gandhi_with_Lord_and_Lady_Mountbatten_1947.jpg", 600),
    auch:      P("Claude_Auchinleck_(1940_portrait).jpg", 600),
    prasad:    P("Rajendra_Prasad_1947.jpg", 600),
    sinha:     P("Dr._Sachidanada_Sinha_in_his_library.jpg", 640),
    mav:       P("G._V._Mavalankar.jpg", 540),
    patel:     P("Sardar_patel_(cropped).jpg", 600),
    amb:       P("Dr._Bhimrao_Ambedkar.jpg", 600),
    bn_rau:    P("Sir_B._N._Rao.jpg", 600),
    draft_grp: P("Dr._Babasaheb_Ambedkar_Chairman,_Drafting_Committee_of_the_Indian_Constitution_with_other_members_on_Aug._29,_1947.jpg", 820),
    draft_fin: P("Dr._Babasaheb_Ambedkar,_chairman_of_the_Drafting_Committee,_presenting_the_final_draft_of_the_Indian_Constitution_to_Dr._Rajendra_Prasad_on_25_November,_1949.jpg", 760),
    flag:      P("Flag_of_India.svg", 640),
    tagore:    P("BankimRabindranath.jpg", 640),
    radha:     P("Portrait_DR._Sarvepalli_Radhakrishnan.jpg", 600),
    pingali:   P("Pingali_Venkayya_2009_stamp_of_India.jpg", 600),
    nandalal:  P("Cropped_Nandalal_Bose_1967_stamp_of_India.jpg", 560),
    gandhi:    P("Gandhi_1945_(cropped).jpg", 560),
    amrit:     P("Rajkumari_Amrit_Kaur.jpg", 560),
    sucheta:   P("Sucheta_Kripalani_(cropped).jpg", 560),
    naidu:     P("Sarojini_Naidu_1964_stamp_of_India.jpg", 560),
    earth:     "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r168/examples/textures/planets/earth_atmos_2048.jpg"
  };

  var C = { a: "#f59e0b", c: "#38bdf8", g: "#10b981", r: "#f43f5e", v: "#a855f7" };

  function pg(num, part, title, accent, body) {
    return '<section class="nw-slide" style="--ac:' + accent + '">' +
      '<div class="nw-bar"></div>' +
      '<div class="nw-top"><span class="nw-pill">' + part + ' • ' + title + '</span>' +
      '<span class="nw-pgnum">PAGE ' + (num < 10 ? "0" + num : num) + ' / 49</span></div>' +
      '<div class="nw-in">' + body + '</div></section>';
  }
  function card(accent, body, cls) {
    return '<div class="nw-card ' + (cls || "") + '" style="--ac:' + accent + '">' + body + '</div>';
  }
  function pic(key, cap, cls, gray) {
    return '<div class="nw-pic ' + (cls || "") + '">' +
      '<img src="' + IMG[key] + '" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" draggable="false" class="' + (gray ? "nw-gray" : "") + '" />' +
      (cap ? '<div class="nw-cap">' + cap + '</div>' : '') + '</div>';
  }
  function row(num, col, leftEn, leftHi, rightEn, rightHi, badge) {
    return '<div class="nw-row" style="--ac:' + col + '">' +
      '<div class="nw-num">' + num + '</div>' +
      '<div class="nw-rl"><div class="nw-en">' + leftEn + '</div><div class="nw-hi">' + leftHi + '</div></div>' +
      '<div class="nw-rr"><div class="nw-ren">' + rightEn + '</div>' +
      (rightHi ? '<div class="nw-rhi">' + rightHi + '</div>' : '') +
      (badge ? '<span class="nw-tag">' + badge + '</span>' : '') + '</div></div>';
  }
  function tri() { return '<div class="nw-tri"><span></span><span></span><span></span></div>'; }

  var SVG_INDIA = '<svg viewBox="-1.1 -1.5 2.6 3.0" class="nw-svgbox"><path d="M-0.22,-1.28 L-0.04,-1.38 L0.14,-1.24 L0.20,-1.06 L0.14,-0.94 L0.22,-0.80 L0.38,-0.66 L0.58,-0.54 L0.72,-0.52 L0.78,-0.62 L0.90,-0.60 L1.06,-0.68 L1.24,-0.72 L1.32,-0.58 L1.16,-0.44 L1.12,-0.24 L1.02,-0.14 L0.94,-0.28 L0.86,-0.34 L0.72,-0.34 L0.76,-0.14 L0.62,-0.04 L0.50,0.10 L0.36,0.26 L0.22,0.44 L0.16,0.68 L0.06,0.92 L-0.04,1.14 L-0.14,1.26 L-0.24,1.08 L-0.32,0.84 L-0.42,0.56 L-0.48,0.28 L-0.52,0.02 L-0.66,-0.02 L-0.86,-0.14 L-0.94,-0.26 L-0.78,-0.34 L-0.90,-0.42 L-0.74,-0.54 L-0.58,-0.68 L-0.46,-0.84 L-0.42,-1.00 L-0.36,-1.16 Z" fill="#0c3459" stroke="#7dd3fc" stroke-width="0.045"/></svg>';
  var SVG_GLOBE = '<svg viewBox="0 0 420 210" class="nw-svgbox" style="background:#060c1a;border-radius:10px;border:1px solid rgba(56,189,248,.35)">' +
    '<image href="' + IMG.earth + '" x="0" y="0" width="420" height="210" opacity="0.88"/>' +
    '<path d="M 302 80 Q 198 15 95 62" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6 4"/>' +
    '<circle cx="302" cy="80" r="5" fill="#38bdf8" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="302" y="99" fill="#bae6fd" font-size="11" font-weight="800" text-anchor="middle">INDIA</text>' +
    '<circle cx="95" cy="62" r="7" fill="#f59e0b" stroke="#fff" stroke-width="2"/>' +
    '<circle cx="95" cy="62" r="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>' +
    '<text x="95" y="45" fill="#fef08a" font-size="13" font-weight="800" text-anchor="middle">★ USA</text></svg>';
  var SVG_CIT = '<svg viewBox="0 0 90 64" width="64"><circle cx="22" cy="24" r="8" fill="#fbbf24"/><path d="M9 52 a13 13 0 0 1 26 0z" fill="#fbbf24"/><circle cx="68" cy="24" r="8" fill="#38bdf8"/><path d="M55 52 a13 13 0 0 1 26 0z" fill="#38bdf8"/><circle cx="45" cy="18" r="10" fill="#f59e0b"/><path d="M29 54 a16 16 0 0 1 32 0z" fill="#f59e0b" stroke="#0d1424" stroke-width="2"/></svg>';
  var SVG_BAL = '<svg viewBox="0 0 80 68" width="58"><rect x="28" y="4" width="24" height="22" rx="3" fill="#f8fafc" stroke="#38bdf8" stroke-width="2"/><path d="M35 15 l4 4 l7-8" fill="none" stroke="#10b981" stroke-width="3"/><rect x="14" y="26" width="52" height="36" rx="6" fill="#162848" stroke="#38bdf8" stroke-width="2.5"/><rect x="10" y="22" width="60" height="8" rx="3" fill="#38bdf8"/><text x="40" y="50" fill="#bae6fd" font-size="11" font-weight="800" text-anchor="middle">VOTE</text></svg>';
  var SVG_SCL = '<svg viewBox="0 0 84 68" width="60"><rect x="24" y="56" width="36" height="7" rx="3" fill="#10b981"/><rect x="39" y="14" width="6" height="44" fill="#10b981"/><line x1="14" y1="20" x2="70" y2="20" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/><path d="M14 20 l-9 20 h18z M70 20 l-9 20 h18z" fill="none" stroke="#fbbf24" stroke-width="1.5"/><path d="M5 40 a9 9 0 0 0 18 0z M61 40 a9 9 0 0 0 18 0z" fill="#34d399"/></svg>';
  var SVG_ELEPHANT = '<svg viewBox="0 0 120 120" width="94"><circle cx="60" cy="60" r="56" fill="rgba(245,158,11,0.16)" stroke="#fbbf24" stroke-width="3.5"/><circle cx="60" cy="60" r="47" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M32 76 V52 Q34 33 58 32 Q76 32 82 44 Q92 47 93 64 Q94 74 87 76 Q83 76 83 68 Q83 60 77 60 L75 79 H65 V65 H53 V79 H43 L42 63 L37 76 Z" fill="#fef08a"/><ellipse cx="63" cy="50" rx="8" ry="12" fill="#f59e0b"/><path d="M80 60 Q88 64 91 58" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>';

  var S = [];

  // --- PART 01: FOUNDATION, FORMS, TIMELINE & OFFERS ---
  S.push(pg(1, "PART 01", "MASTERCLASS HOOK", C.a,
    '<div class="nw-g2">' +
      pic("asm", "Constituent Assembly of India • Historic Session (1946)", "nw-tall", true) +
      '<div class="nw-stack">' +
        '<div class="nw-bigmono" style="color:' + C.a + '">1947</div>' +
        '<div class="nw-sub">India Becomes Independent • भारत आज़ाद हुआ</div>' +
        '<div class="nw-g3">' +
          card(C.c, '<div class="nw-stat">02</div><div class="nw-sl">YEARS • साल</div>', "nw-tbar nw-tc") +
          card(C.a, '<div class="nw-stat">11</div><div class="nw-sl">MONTHS • महीने</div>', "nw-tbar nw-tc") +
          card(C.g, '<div class="nw-stat">18</div><div class="nw-sl">DAYS • दिन</div>', "nw-tbar nw-tc") +
        '</div>' +
        card(C.a, '<div class="nw-h3" style="color:#fef08a">WORLD’S LARGEST WRITTEN CONSTITUTION</div><div class="nw-hi">दुनिया का सबसे बड़ा लिखित संविधान आखिर बना कैसे?</div>', "nw-lbar nw-soft-a") +
      '</div></div>'));

  S.push(pg(2, "PART 01", "CHAPTER TITLE & ROADMAP", C.a,
    '<div class="nw-g2">' +
      pic("book", "Original Illuminated Constitution of India", "nw-tall", false) +
      '<div class="nw-stack">' +
        '<div class="nw-h1">MAKING OF THE INDIAN CONSTITUTION</div>' + tri() +
        '<div class="nw-hi1">भारतीय संविधान का निर्माण</div>' +
        card(C.c, '<div class="nw-en">✓ Every Historical Date & Milestone (सभी तारीखें)</div>', "nw-lbar") +
        card(C.g, '<div class="nw-en">✓ All 21 Committees & Heads (सभी समितियाँ)</div>', "nw-lbar") +
        card(C.a, '<div class="nw-en">✓ High-Yield Exam Tricks & Traps (एग्जाम ट्रिक्स)</div>', "nw-lbar") +
      '</div></div>'));

  S.push(pg(3, "PART 01", "WHAT IS A CONSTITUTION?", C.c,
    '<div class="nw-g2">' +
      card(C.c, '<div class="nw-tc">' + SVG_INDIA + '</div><div class="nw-tc nw-en" style="color:#7dd3fc;margin-top:8px">NATION’S BLUEPRINT • देश की रूपरेखा</div>', "nw-tbar nw-center") +
      '<div class="nw-stack">' +
        '<div class="nw-h2">What is a Constitution? (संविधान क्या है?)</div>' +
        card(C.c, '<div class="nw-en">01. Lays Out Fundamental Ideals</div><div class="nw-hi">यह देश के मूल आदर्श (Ideals) तय करता है।</div>', "nw-lbar") +
        card(C.a, '<div class="nw-en">02. Basis of National Identity</div><div class="nw-hi">जिसके आधार पर देश अपनी पहचान बनाता है।</div>', "nw-lbar") +
        card(C.g, '<div class="nw-en" style="color:#6ee7b7">“Blueprint of the country a nation aspires to be.”</div><div class="nw-hi">यह उस देश की पूरी रूपरेखा देता है, जैसा एक राष्ट्र बनना चाहता है।</div>', "nw-lbar nw-soft-g") +
      '</div></div>'));

  S.push(pg(4, "PART 01", "USA: TWO IMPORTANT DATES (1776 ≠ 1787)", C.a,
    '<div class="nw-g2" style="margin-bottom:10px">' +
      '<div>' + SVG_GLOBE + '</div>' +
      pic("us_const", "Original US Constitution Parchment (1787)", "nw-h180", false) +
    '</div>' +
    card(C.c,
      '<div class="nw-g3">' +
        '<div class="nw-tc"><div class="nw-mono" style="color:' + C.c + '">4 JULY 1776</div><div class="nw-en">USA INDEPENDENCE</div><div class="nw-hi">अमेरिका को आज़ादी मिली</div></div>' +
        '<div class="nw-tc nw-center"><div class="nw-pill" style="border-color:' + C.a + ';color:' + C.a + '">+11 YEARS • 1776 ≠ 1787</div><div class="nw-hi" style="margin-top:6px;color:#fef08a">दोनों को कभी MIX मत कीजिए!</div></div>' +
        '<div class="nw-tc"><div class="nw-mono" style="color:' + C.g + '">1787</div><div class="nw-en">CONSTITUTION TRADITION</div><div class="nw-hi">संविधान की परंपरा की शुरुआत</div></div>' +
      '</div>', "nw-tbar")));

  S.push(pg(5, "PART 01", "CONSTITUTION VS. DEMOCRACY", C.g,
    '<div class="nw-g2">' +
      card(C.c,
        '<div class="nw-tc nw-en" style="color:#7dd3fc">COUNTRIES WITH A CONSTITUTION</div><div class="nw-tc nw-hi" style="margin-bottom:8px">संविधान वाले सभी देश (बड़ा दायरा)</div>' +
        card(C.r, '<div class="nw-tc nw-mono" style="font-size:12px;color:#fda4af">HAS CONSTITUTION ✔ • NOT DEMOCRATIC ✖</div><div class="nw-tc" style="margin-top:6px"><span class="nw-badge-r">CHINA ✖</span> <span class="nw-badge-r">RUSSIA ✖</span></div>', "nw-soft-r") +
        card(C.g, '<div class="nw-tc"><div class="nw-h3" style="color:#fff">DEMOCRATIC COUNTRIES</div><div class="nw-hi" style="color:#6ee7b7">लोकतांत्रिक देश (Subset)</div><div class="nw-en" style="font-size:13px;margin-top:4px">Usually Have a Constitution ✔</div></div>', "nw-soft-g"),
      "nw-tbar") +
      '<div class="nw-stack">' +
        card(C.g, '<div class="nw-mono" style="color:' + C.g + '">RULE 01 • DEMOCRATIC COUNTRIES</div><div class="nw-h3">Usually Have a Constitution</div><div class="nw-hi">हर लोकतांत्रिक देश के पास आम तौर पर एक संविधान होता है।</div>', "nw-lbar") +
        card(C.r, '<div class="nw-mono" style="color:' + C.r + '">CRITICAL DISTINCTION • उल्टा सच नहीं!</div><div class="nw-h2" style="color:#fff">CONSTITUTION <span class="nw-circ">≠</span> DEMOCRACY</div><div class="nw-hi" style="color:#fecdd3">सिर्फ संविधान होने से कोई देश लोकतांत्रिक नहीं बन जाता!</div><div class="nw-box-a">E.g. CHINA & RUSSIA — Have Constitution, NOT True Democracies</div>', "nw-lbar nw-soft-r") +
      '</div></div>'));

  S.push(pg(6, "PART 01", "DEMOCRATIC GOVERNMENT FLOWCHART", C.g,
    '<div class="nw-flow">' +
      card(C.a, '<div class="nw-tc">' + SVG_CIT + '<div class="nw-mono" style="color:' + C.a + '">STEP 01</div><div class="nw-h3">PEOPLE</div><div class="nw-hi" style="color:#fde68a">जनता</div><div class="nw-desc">सत्ता की असली शक्ति लोगों के पास होती है।</div></div>', "nw-tbar") +
      '<div class="nw-arr">➔<span>ELECT / चुनते हैं</span></div>' +
      card(C.c, '<div class="nw-tc">' + SVG_BAL + '<div class="nw-mono" style="color:' + C.c + '">STEP 02</div><div class="nw-h3">ELECTED REPRESENTATIVES</div><div class="nw-hi" style="color:#bae6fd">निर्वाचित प्रतिनिधि</div><div class="nw-desc">जनता वोट देकर अपने प्रतिनिधि चुनती है।</div></div>', "nw-tbar") +
      '<div class="nw-arr">➔<span>ON BEHALF / उनकी ओर से</span></div>' +
      card(C.g, '<div class="nw-tc">' + SVG_SCL + '<div class="nw-mono" style="color:' + C.g + '">STEP 03</div><div class="nw-h3">EXERCISE OF POWER</div><div class="nw-hi" style="color:#6ee7b7">सत्ता का प्रयोग</div><div class="nw-desc">प्रतिनिधि जनता की ओर से शासन चलाते हैं।</div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(7, "PART 01", "4 FORMS OF GOVERNMENT", C.a,
    '<div class="nw-g4">' +
      card(C.r, '<div class="nw-tc nw-en" style="color:' + C.r + '">COMMUNIST</div><div class="nw-tc nw-hi">साम्यवादी</div>' + pic("china", "", "nw-h110") + '<div class="nw-desc">Means of production controlled by Govt.<br><span class="nw-hi">उत्पादन के साधन सरकार के नियंत्रण में।</span></div><div class="nw-ex" style="--ac:' + C.r + '">China • USSR (Hist.)</div>', "nw-tbar") +
      card(C.c, '<div class="nw-tc nw-en" style="color:' + C.c + '">OLIGARCHIC</div><div class="nw-tc nw-hi">अल्पतंत्र</div>' + pic("russia", "", "nw-h110") + '<div class="nw-desc">A government ruled by a powerful few.<br><span class="nw-hi">कुछ गिने-चुने ताकतवर लोगों का शासन।</span></div><div class="nw-ex" style="--ac:' + C.c + '">China • Russia</div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc nw-en" style="color:' + C.a + '">MONARCHIC</div><div class="nw-tc nw-hi">राजशाही</div>' + pic("crown", "", "nw-h110") + '<div class="nw-desc">Ruled by a single King or Monarch.<br><span class="nw-hi">एक राजा या सम्राट द्वारा संचालित शासन।</span></div><div class="nw-ex" style="--ac:' + C.a + '">Saudi Arabia • UK*</div>', "nw-tbar") +
      card(C.v, '<div class="nw-tc nw-en" style="color:' + C.v + '">TOTALITARIAN</div><div class="nw-tc nw-hi">सर्वसत्तावादी</div>' + pic("nk", "", "nw-h110") + '<div class="nw-desc">Total control over citizens’ lives.<br><span class="nw-hi">नागरिकों के पूरे जीवन पर पूर्ण नियंत्रण।</span></div><div class="nw-ex" style="--ac:' + C.v + '">North Korea</div>', "nw-tbar") +
    '</div>'));

  S.push(pg(8, "PART 01", "CONSTITUENT ASSEMBLY (1928–1938)", C.c,
    '<div class="nw-g2">' +
      pic("nehru_asm", "Jawaharlal Nehru Addressing Constituent Assembly", "nw-tall", true) +
      '<div class="nw-stack">' +
        '<div class="nw-h1">CONSTITUENT ASSEMBLY</div>' + tri() +
        '<div class="nw-hi1">भारत की संविधान सभा — ऐतिहासिक कालानुक्रम</div>' +
        card(C.c, '<div class="nw-en">1928 (Nehru Report) ➔ 1929 (Purna Swaraj) ➔ 1931 (Rights) ➔ 1934 (M. N. Roy) ➔ 1935 (INC) ➔ 1938 (Nehru)</div>', "nw-lbar") +
      '</div></div>'));

  S.push(pg(9, "PART 01", "TIMELINE: 1928, 1929 & 1931", C.r,
    '<div class="nw-g2">' +
      pic("motilal", "Motilal Nehru & Jawaharlal Nehru (1929)", "nw-tall", true) +
      '<div class="nw-stack">' +
        card(C.r, '<div class="nw-mono" style="color:' + C.r + '">1928 • NEHRU REPORT (LUCKNOW)</div><div class="nw-en">All Parties Conference chaired by Motilal Nehru</div><div class="nw-hi">मोतीलाल नेहरू की अध्यक्षता में भारतीय संविधान का पहला प्रारंभिक प्रारूप पेश।</div>', "nw-lbar") +
        card(C.a, '<div class="nw-mono" style="color:' + C.a + '">1929 • PURNA SWARAJ DEMAND</div><div class="nw-hi">लाहौर अधिवेशन में कांग्रेस ने पूर्ण स्वराज (Complete Independence) की मांग रखी।</div>', "nw-lbar") +
        card(C.c, '<div class="nw-mono" style="color:' + C.c + '">1931 • FUNDAMENTAL RIGHTS PUSH</div><div class="nw-hi">कराची अधिवेशन (1931) में मौलिक अधिकारों की बात आगे बढ़ी।</div>', "nw-lbar") +
      '</div></div>'));

  S.push(pg(10, "PART 01", "TIMELINE: 1934 (M. N. ROY) & 1935 (INC)", C.c,
    '<div class="nw-g2">' +
      card(C.c,
        '<div class="nw-pill" style="border-color:' + C.c + ';color:' + C.c + ';margin-bottom:8px">★ HIGH-YIELD EXAM FACT • 1934</div>' +
        pic("mn_roy", "M. N. Roy (1987 Stamp)", "nw-h160", false) +
        '<div class="nw-h3" style="margin-top:8px">M. N. ROY PROPOSED THE IDEA</div>' +
        '<div class="nw-hi">एम. एन. रॉय वे पहले व्यक्ति थे, जिन्होंने 1934 में पहली बार भारत के लिए संविधान सभा का विचार रखा।</div>',
      "nw-tbar") +
      card(C.a,
        '<div class="nw-pill" style="border-color:' + C.a + ';color:' + C.a + ';margin-bottom:8px">OFFICIAL DEMAND • 1935</div>' +
        pic("asm", "Indian National Congress", "nw-h160", true) +
        '<div class="nw-h3" style="margin-top:8px">INDIAN NATIONAL CONGRESS (INC)</div>' +
        '<div class="nw-hi">1935 में भारतीय राष्ट्रीय कांग्रेस ने आधिकारिक तौर पर (Officially) एक संविधान सभा की मांग की।</div>',
      "nw-tbar") +
    '</div>'));

  S.push(pg(11, "PART 01", "TIMELINE: 1938 (NEHRU DECLARATION)", C.g,
    '<div class="nw-g2">' +
      pic("nehru", "Jawaharlal Nehru (1946)", "nw-tall", true) +
      card(C.g,
        '<div class="nw-mono" style="color:' + C.g + '">1938 • HISTORIC DECLARATION ON BEHALF OF INC</div>' +
        '<div class="nw-h2">Jawaharlal Nehru’s Declaration</div>' +
        '<div class="nw-en" style="margin:10px 0">Constitution of free India must be framed <b>WITHOUT outside interference</b>, by a Constituent Assembly elected on the basis of <b>ADULT FRANCHISE</b>.</div>' +
        '<div class="nw-hi">आज़ाद भारत का संविधान बिना किसी बाहरी दखल के, वयस्क मताधिकार (Adult Franchise) से चुनी संविधान सभा बनाएगी।</div>' +
        '<div class="nw-box-g" style="margin-top:12px">KEY TERMS: WITHOUT OUTSIDE INTERFERENCE • ADULT FRANCHISE</div>',
      "nw-tbar") +
    '</div>'));

  S.push(pg(12, "PART 01", "WWII BRITISH OFFERS & WHY THEY FAILED", C.r,
    '<div class="nw-box-r" style="margin-bottom:10px">REASON: ONGOING WORLD WAR II (1939 – 1945) — ब्रिटेन को युद्ध में भारत का साथ चाहिए था</div>' +
    '<div class="nw-g3" style="margin-bottom:10px">' +
      card(C.a, '<div class="nw-mono" style="color:' + C.a + '">1940</div><div class="nw-en">AUGUST OFFER</div><div class="nw-hi">अगस्त प्रस्ताव</div><div class="nw-stamp">FAILED ✖</div>', "nw-tbar") +
      card(C.c, '<div class="nw-mono" style="color:' + C.c + '">1942</div><div class="nw-en">CRIPPS PROPOSAL</div><div class="nw-hi">क्रिप्स प्रस्ताव</div><div class="nw-stamp">FAILED ✖</div>', "nw-tbar") +
      card(C.v, '<div class="nw-mono" style="color:' + C.v + '">1945</div><div class="nw-en">WAVELL PLAN</div><div class="nw-hi">वेवेल योजना</div><div class="nw-stamp">FAILED ✖</div>', "nw-tbar") +
    '</div>' +
    '<div class="nw-g2">' +
      pic("cripps", "Gandhiji & Cripps (1942): “A Post-Dated Cheque”", "nw-h160", true) +
      card(C.r, '<div class="nw-mono" style="color:#fda4af">WHY ALL 3 FAILED? • अस्वीकृति का कारण</div><div class="nw-h3"><span style="color:#6ee7b7">PURNA SWARAJ</span>  ⚡ VS ⚡  <span style="color:#fda4af">DOMINION STATUS</span></div><div class="nw-hi">कांग्रेस ने पूर्ण स्वराज मांगा, जबकि अंग्रेज सिर्फ अधिराज्य (Dominion Status) दे रहे थे।</div>', "nw-lbar") +
    '</div>'));

  S.push(pg(13, "PART 01", "CABINET MISSION PLAN 1946 (TRICK: P-C-A)", C.g,
    '<div class="nw-g2" style="margin-bottom:10px">' +
      pic("cabinet", "British Cabinet Mission to India (1946)", "nw-h160", true) +
      card(C.g, '<div class="nw-h2">CABINET MISSION PLAN (1946)</div><div class="nw-hi">कैबिनेट मिशन योजना</div><div class="nw-box-a" style="margin-top:8px">MEMORY TRICK:  P — C — A (3 British Cabinet Members)</div>', "nw-tbar") +
    '</div>' +
    '<div class="nw-g3" style="margin-bottom:10px">' +
      card(C.a, '<div class="nw-tc"><div class="nw-ltr" style="color:' + C.a + '">P</div><div class="nw-en">Lord Pethick-Lawrence</div><div class="nw-hi">★ CHAIRMAN / अध्यक्ष</div></div>', "nw-tbar") +
      card(C.c, '<div class="nw-tc"><div class="nw-ltr" style="color:' + C.c + '">C</div><div class="nw-en">Sir Stafford Cripps</div><div class="nw-hi">Cabinet Member</div></div>', "nw-tbar") +
      card(C.g, '<div class="nw-tc"><div class="nw-ltr" style="color:' + C.g + '">A</div><div class="nw-en">A. V. Alexander</div><div class="nw-hi">Cabinet Member</div></div>', "nw-tbar") +
    '</div>' +
    card(C.g, '<div class="nw-tc nw-en" style="color:#6ee7b7">✓ ACCEPTED BY BOTH CONGRESS (INC) + MUSLIM LEAGUE ➔ CONSTITUENT ASSEMBLY FORMED!</div>', "nw-lbar nw-soft-g")));

  // --- PART 02: SEATS (389), ELECTIONS & INTERIM GOVT ---
  S.push(pg(14, "PART 02", "CABINET MISSION 389 SEAT BREAKDOWN", C.a,
    card(C.a, '<div class="nw-tc"><div class="nw-h2" style="color:#fef08a">TOTAL SEATS: 389</div><div class="nw-hi">संविधान सभा की कुल सीटें = 389</div></div>', "nw-tbar nw-soft-a") +
    '<div class="nw-g2" style="margin-top:10px">' +
      card(C.c,
        '<div class="nw-tc"><div class="nw-h3" style="color:' + C.c + '">296 ELECTED (British India)</div><div class="nw-hi">ब्रिटिश भारत से निर्वाचित</div></div>' +
        '<div class="nw-g2" style="margin-top:10px">' +
          card(C.g, '<div class="nw-tc"><div class="nw-stat">292</div><div class="nw-en">Governor’s Provinces</div><div class="nw-hi">11 प्रांत</div></div>', "nw-tbar") +
          card(C.v, '<div class="nw-tc"><div class="nw-stat">04</div><div class="nw-en">Chief Comm. Provinces</div><div class="nw-hi">4 प्रांत</div></div>', "nw-tbar") +
        '</div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-stat" style="color:' + C.a + '">93</div><div class="nw-h3">NOMINATED (Princely States)</div><div class="nw-hi">देशी रियासतों से मनोनीत</div><div class="nw-desc" style="margin-top:10px">Nominated directly by the Rulers of Princely States (राजाओं द्वारा मनोनीत)।</div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(15, "PART 02", "565 PRINCELY STATES INTEGRATION", C.a,
    card(C.a, '<div class="nw-tc"><div class="nw-h3" style="color:#fef08a">TOTAL PRINCELY STATES AT INDEPENDENCE: 565</div><div class="nw-hi">562 आसानी से भारत में मिल गईं • बाकी 3 के विशेष विलय:</div></div>', "nw-lbar") +
    '<div class="nw-g3" style="margin-top:10px">' +
      card(C.c, '<div class="nw-tc"><div class="nw-h3">HYDERABAD</div><div class="nw-hi">हैदराबाद</div><div class="nw-box-c" style="margin-top:8px">OPERATION POLO<br><span class="nw-hi">पुलिस कार्रवाई</span></div></div>', "nw-tbar") +
      card(C.g, '<div class="nw-tc"><div class="nw-h3">JUNAGADH</div><div class="nw-hi">जूनागढ़</div><div class="nw-box-g" style="margin-top:8px">PLEBISCITE<br><span class="nw-hi">जनमत संग्रह</span></div></div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-h3">JAMMU & KASHMIR</div><div class="nw-hi">जम्मू-कश्मीर</div><div class="nw-box-a" style="margin-top:8px">INSTRUMENT OF ACCESSION<br><span class="nw-hi">विलय पत्र</span></div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(16, "PART 02", "SEAT ALLOCATION & 3 COMMUNITIES", C.c,
    '<div class="nw-box-a" style="margin-bottom:10px">1 SEAT ALLOTTED PER 1 MILLION (10 LAKH) POPULATION — प्रति 10 लाख जनसंख्या पर 1 सीट</div>' +
    '<div class="nw-g3" style="margin-bottom:10px">' +
      card(C.g, '<div class="nw-tc"><div class="nw-h3" style="color:' + C.g + '">MUSLIMS • मुस्लिम</div><div class="nw-stat">78</div><div class="nw-desc">Seats Allocated</div></div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-h3" style="color:' + C.a + '">SIKHS • सिख</div><div class="nw-stat">04</div><div class="nw-desc">Seats Allocated</div></div>', "nw-tbar") +
      card(C.c, '<div class="nw-tc"><div class="nw-h3" style="color:' + C.c + '">GENERAL • सामान्य</div><div class="nw-desc">Parsi: <b>H. P. Modi</b><br>Anglo-Indian: <b>Frank Anthony</b></div></div>', "nw-tbar") +
    '</div>' +
    card(C.g, '<div class="nw-tc nw-en" style="color:#6ee7b7">NATURE OF ASSEMBLY: PARTLY ELECTED + PARTLY NOMINATED (आंशिक निर्वाचित व मनोनीत)</div>', "nw-lbar nw-soft-g")));

  S.push(pg(17, "PART 02", "METHOD OF ELECTION (INDIRECT)", C.c,
    card(C.c, '<div class="nw-g2"><div>' + SVG_BAL + '<div class="nw-h2" style="color:' + C.c + '">INDIRECT ELECTIONS</div><div class="nw-hi">अप्रत्यक्ष चुनाव</div></div><div><div class="nw-en">Voted by members of Provincial Legislative Assemblies (प्रांतीय विधानसभाओं के सदस्यों द्वारा वोट)।</div><div class="nw-box-a" style="margin-top:8px">★ ANALOGY: Just like RAJYA SABHA Elections today!</div></div></div>', "nw-tbar") +
    '<div style="margin-top:10px">' +
      card(C.g, '<div class="nw-tc"><div class="nw-h3" style="color:#6ee7b7">PROPORTIONAL REPRESENTATION + SINGLE TRANSFERABLE VOTE</div><div class="nw-hi">आनुपातिक प्रतिनिधित्व + एकल संक्रमणीय मत (STV)</div></div>', "nw-tbar nw-soft-g") +
    '</div>'));

  S.push(pg(18, "PART 02", "ELECTION RESULTS (JULY–AUG 1946) & PARTITION", C.a,
    card(C.c,
      '<div class="nw-bar-row"><span>CONGRESS (INC) • बहुमत</span><div class="nw-track"><div class="nw-fill" style="width:94%;background:' + C.c + '"></div></div><b>208</b></div>' +
      '<div class="nw-bar-row"><span>MUSLIM LEAGUE • मुस्लिम लीग</span><div class="nw-track"><div class="nw-fill" style="width:33%;background:' + C.g + '"></div></div><b>73</b></div>' +
      '<div class="nw-bar-row"><span>INDEPENDENTS • निर्दलीय</span><div class="nw-track"><div class="nw-fill" style="width:8%;background:' + C.a + '"></div></div><b>15</b></div>' +
      '<div class="nw-hi" style="margin-top:6px;color:#fde68a">Note: Princely States stayed away initially (Praja Mandal Movements active).</div>', "nw-tbar") +
    '<div style="margin-top:10px">' +
      card(C.r, '<div class="nw-tc"><div class="nw-mono" style="color:#fda4af">AFTER MUSLIM LEAGUE BOYCOTT & PARTITION</div><div class="nw-h2">389 ➔ 299 REMAINING SEATS</div><div class="nw-en">229 Elected (निर्वाचित)  •  70 Nominated (मनोनीत)</div></div>', "nw-lbar nw-soft-r") +
    '</div>'));

  S.push(pg(19, "PART 02", "INTERIM GOVERNMENT OF INDIA (1946)", C.a,
    '<div class="nw-g2">' +
      pic("interim", "Members of the Interim Government (Sep 1946)", "nw-tall", true) +
      '<div class="nw-stack">' +
        '<div class="nw-h2">INTERIM GOVERNMENT (TEMPORARY)</div><div class="nw-hi">भारत की अंतरिम सरकार</div>' +
        card(C.c, '<div class="nw-mono" style="color:' + C.c + '">24 AUGUST 1946</div><div class="nw-en">1st Interim National Govt Announced</div><div class="nw-hi">प्रथम अंतरिम राष्ट्रीय सरकार की घोषणा हुई</div>', "nw-lbar") +
        card(C.g, '<div class="nw-mono" style="color:' + C.g + '">2 SEPTEMBER 1946</div><div class="nw-en">Interim Government Formed</div><div class="nw-hi">अंतरिम सरकार का औपचारिक गठन हुआ</div>', "nw-lbar") +
        card(C.a, '<div class="nw-mono" style="color:' + C.a + '">15 AUGUST 1947</div><div class="nw-en">Lasted till Independence & Partition</div><div class="nw-hi">आज़ादी और भारत-पाक विभाजन तक चली</div>', "nw-lbar") +
      '</div></div>'));

  S.push(pg(20, "PART 02", "INTERIM GOVT: BRITISH LEADERSHIP", C.c,
    '<div class="nw-g3">' +
      card(C.c, pic("wavell", "", "nw-h160", true) + '<div class="nw-tc"><div class="nw-mono" style="color:' + C.c + '">PRESIDENT (VICEROY)</div><div class="nw-h3">Viscount Wavell</div><div class="nw-hi">फरवरी 1947 तक</div></div>', "nw-tbar") +
      card(C.a, pic("mount", "", "nw-h160", true) + '<div class="nw-tc"><div class="nw-mono" style="color:' + C.a + '">PRESIDENT (VICEROY)</div><div class="nw-h3">Lord Mountbatten</div><div class="nw-hi">फरवरी 1947 से</div></div>', "nw-tbar") +
      card(C.g, pic("auch", "", "nw-h160", true) + '<div class="nw-tc"><div class="nw-mono" style="color:' + C.g + '">COMMANDER-IN-CHIEF</div><div class="nw-h3">Sir Claude Auchinleck</div><div class="nw-hi">सेनाध्यक्ष</div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(21, "PART 02", "INTERIM PORTFOLIOS (01 – 06)", C.c,
    row("01", C.c, "VP, External Affairs & Commonwealth", "उपाध्यक्ष, विदेश व राष्ट्रमंडल मामले", "Jawaharlal Nehru", "जवाहरलाल नेहरू", "INC") +
    row("02", C.c, "Home Affairs, Info & Broadcasting", "गृह, सूचना एवं प्रसारण मंत्रालय", "Sardar Vallabhbhai Patel", "सरदार वल्लभभाई पटेल", "INC") +
    row("03", C.c, "Agriculture and Food", "कृषि और खाद्य", "Dr. Rajendra Prasad", "डॉ. राजेंद्र प्रसाद", "INC") +
    row("04", C.g, "Commerce", "वाणिज्य", "Ibrahim Ismail Chundrigar", "इब्राहिम इस्माइल चुंदरीगर", "ML") +
    row("05", C.c, "Defence", "रक्षा मंत्रालय", "Baldev Singh", "बलदेव सिंह", "INC") +
    row("06", C.g, "Finance", "वित्त मंत्रालय", "Liaquat Ali Khan (1st PM Pak)", "लियाकत अली खान", "ML")));

  S.push(pg(22, "PART 02", "INTERIM PORTFOLIOS (07 – 12)", C.g,
    row("07", C.g, "Health", "स्वास्थ्य मंत्रालय", "Ghazanfar Ali Khan", "ग़ज़नफ़र अली ख़ान", "ML") +
    row("08", C.c, "Labour", "श्रम मंत्रालय", "Jagjivan Ram", "जगजीवन राम", "INC") +
    row("09", C.g, "Law", "कानून मंत्रालय", "Jogendra Nath Mandal", "जोगेंद्र नाथ मंडल", "ML") +
    row("10", C.c, "Education and Arts", "शिक्षा और कला", "C. Rajagopalachari", "सी. राजगोपालाचारी", "INC") +
    row("11", C.g, "Railways, Comm., Post & Air", "रेलवे, संचार, डाक और हवाई", "Abdur Rab Nishtar", "अब्दुर रब निश्तर", "ML") +
    row("12", C.c, "Industries and Supplies", "उद्योग और आपूर्ति", "John Mathai", "जॉन मथाई", "INC")));

  S.push(pg(23, "PART 02", "★ EXAM TIP: 5 MUSLIM LEAGUE MINISTERS", C.g,
    card(C.g,
      row("01", C.g, "Commerce (वाणिज्य)", "", "Ibrahim Ismail Chundrigar", "", "ML") +
      row("02", C.g, "Finance (वित्त)", "", "Liaquat Ali Khan (1st PM of Pakistan)", "", "ML") +
      row("03", C.g, "Health (स्वास्थ्य)", "", "Ghazanfar Ali Khan", "", "ML") +
      row("04", C.g, "Law (कानून)", "", "Jogendra Nath Mandal", "", "ML") +
      row("05", C.g, "Railways, Post & Air (रेलवे)", "", "Abdur Rab Nishtar", "", "ML"),
    "nw-tbar")));

  // --- PART 03: WORKING, OBJECTIVE RESOLUTION & 8 MAJOR COMMITTEES ---
  S.push(pg(24, "PART 03", "1ST MEETING (9 DEC 1946) & OFFICE-HOLDERS", C.a,
    '<div class="nw-box-a" style="margin-bottom:10px">1ST MEETING: 9 DECEMBER 1946 • Attendance: 207–211 Members (Muslim League Boycotted)</div>' +
    '<div class="nw-g3">' +
      card(C.c, pic("sinha", "", "nw-h150", true) + '<div class="nw-tc"><div class="nw-mono" style="color:' + C.c + '">TEMP PRESIDENT (अस्थाई)</div><div class="nw-h3">Dr. Sachchidananda Sinha</div><div class="nw-desc">Senior-most member</div></div>', "nw-tbar") +
      card(C.g, pic("prasad", "", "nw-h150", true) + '<div class="nw-tc"><div class="nw-mono" style="color:' + C.g + '">PERMANENT PRESIDENT</div><div class="nw-h3">Dr. Rajendra Prasad</div><div class="nw-desc">स्थाई अध्यक्ष (11 Dec 1946)</div></div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.a + '">★ TWO VICE PRESIDENTS</div><div class="nw-box-c" style="margin:12px 0">01. H. C. Mukherjee<br><span class="nw-hi">एच. सी. मुखर्जी</span></div><div class="nw-box-g">02. V. T. Krishnamachari<br><span class="nw-hi">वी. टी. कृष्णमाचारी</span></div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(25, "PART 03", "DUAL ROLE OF CONSTITUENT ASSEMBLY", C.g,
    '<div class="nw-g2">' +
      card(C.g, pic("prasad", "", "nw-h170", true) + '<div class="nw-tc"><div class="nw-mono" style="color:' + C.g + '">ROLE 01 • CONSTITUENT BODY</div><div class="nw-h3">Dr. Rajendra Prasad</div><div class="nw-hi">संविधान बनाते समय अध्यक्षता</div></div>', "nw-tbar") +
      card(C.c, pic("mav", "", "nw-h170", true) + '<div class="nw-tc"><div class="nw-mono" style="color:' + C.c + '">ROLE 02 • LEGISLATIVE BODY (संसद)</div><div class="nw-h3">G. V. Mavalankar</div><div class="nw-hi">आम कानून बनाते समय अध्यक्षता</div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(26, "PART 03", "OBJECTIVE RESOLUTION ➔ PREAMBLE", C.a,
    '<div class="nw-g2">' +
      pic("nehru_asm", "Moved by Jawaharlal Nehru (13 Dec 1946)", "nw-tall", true) +
      '<div class="nw-stack">' +
        '<div class="nw-h2">OBJECTIVE RESOLUTION (उद्देश्य प्रस्ताव)</div>' +
        card(C.c, '<div class="nw-en">01. Independent Sovereign Republic</div><div class="nw-hi">भारत एक स्वतंत्र संप्रभु गणराज्य होगा</div>', "nw-lbar") +
        card(C.g, '<div class="nw-en">02. Union of British India & Willing States</div><div class="nw-hi">ब्रिटिश भारत व रियासतें मिलकर Union बनाएंगी</div>', "nw-lbar") +
        card(C.a, '<div class="nw-en">03. All Power Derived from the People</div><div class="nw-hi">सरकार की सारी शक्ति सीधे जनता से मिलेगी</div>', "nw-lbar") +
        '<div class="nw-box-g">✓ ADOPTED: 22 JAN 1947 ➔ BECAME OUR PREAMBLE (प्रस्तावना)!</div>' +
      '</div></div>'));

  S.push(pg(27, "PART 03", "COMMITTEES OVERVIEW (8 MAJOR + 13 MINOR)", C.c,
    '<div class="nw-g2" style="margin-bottom:10px">' +
      card(C.a, '<div class="nw-tc"><div class="nw-bigmono" style="color:' + C.a + '">08</div><div class="nw-h3">MAJOR COMMITTEES</div><div class="nw-hi">प्रमुख समितियाँ</div></div>', "nw-tbar nw-soft-a") +
      card(C.c, '<div class="nw-tc"><div class="nw-bigmono" style="color:' + C.c + '">13</div><div class="nw-h3">MINOR COMMITTEES</div><div class="nw-hi">लघु समितियाँ</div></div>', "nw-tbar") +
    '</div>' +
    card(C.g, '<div class="nw-tc"><div class="nw-mono" style="color:#6ee7b7">★ MASTER FORMULA FOR 8 MAJOR COMMITTEES:</div><div class="nw-h2" style="color:#fff">NEHRU (3) + PATEL (2) + AMBEDKAR (1) + PRASAD (2) = 8</div></div>', "nw-lbar nw-soft-g")));

  S.push(pg(28, "PART 03", "MAJOR GROUP 1: JAWAHARLAL NEHRU (3)", C.c,
    '<div class="nw-g2">' +
      card(C.c, pic("nehru", "", "nw-h180", true) + '<div class="nw-tc"><div class="nw-h3">JAWAHARLAL NEHRU</div><div class="nw-box-a" style="margin-top:8px">★ KEYWORD: UNION / STATES ➔ NEHRU</div></div>', "nw-tbar") +
      '<div class="nw-stack">' +
        card(C.c, '<div class="nw-en">01. UNION Powers Committee</div><div class="nw-hi">संघ शक्ति समिति</div>', "nw-lbar") +
        card(C.c, '<div class="nw-en">02. UNION Constitution Committee</div><div class="nw-hi">संघीय संविधान समिति</div>', "nw-lbar") +
        card(C.c, '<div class="nw-en">03. STATES Committee</div><div class="nw-hi">राज्य समिति (राज्यों से वार्ता)</div>', "nw-lbar") +
      '</div></div>'));

  S.push(pg(29, "PART 03", "MAJOR GROUP 2: SARDAR PATEL (2)", C.a,
    '<div class="nw-g2">' +
      card(C.a, pic("patel", "", "nw-h180", true) + '<div class="nw-tc"><div class="nw-h3">SARDAR VALLABHBHAI PATEL</div><div class="nw-box-g" style="margin-top:8px">★ TITLE: “BISMARCK OF INDIA”</div></div>', "nw-tbar") +
      '<div class="nw-stack">' +
        card(C.a, '<div class="nw-mono" style="color:' + C.a + '">MAJOR COMMITTEE 04</div><div class="nw-h3">Provincial Constitution Committee</div><div class="nw-hi">प्रांतीय संविधान समिति</div>', "nw-lbar") +
        card(C.g, '<div class="nw-mono" style="color:' + C.g + '">MAJOR COMMITTEE 05 (HAS 5 SUB-COMMITTEES!)</div><div class="nw-en">Advisory Committee on Fundamental Rights, Minorities, Tribal & Excluded Areas</div><div class="nw-hi">मौलिक अधिकार, अल्पसंख्यक व जनजातीय सलाहकार समिति</div>', "nw-lbar") +
      '</div></div>'));

  S.push(pg(30, "PART 03", "5 SUB-COMMITTEES UNDER SARDAR PATEL", C.g,
    row("01", C.c, "Fundamental Rights Sub-Committee", "मौलिक अधिकार उप-समिति", "J. B. Kripalani", "जे. बी. कृपलानी") +
    row("02", C.g, "Minorities Sub-Committee", "अल्पसंख्यक उप-समिति", "H. C. Mukherjee", "एच. सी. मुखर्जी") +
    row("03", C.a, "Tribal & Excluded Areas Sub-Committee", "जनजातीय व बहिष्कृत क्षेत्र उप-समिति", "A. V. Thakkar", "ए. वी. ठक्कर") +
    row("04", C.v, "NE Frontier Tribal & Assam Excluded", "उत्तर-पूर्वी सीमांत व असम बहिष्कृत क्षेत्र", "Gopinath Bardoloi", "गोपीनाथ बारदोलोई") +
    row("05", "#94a3b8", "NW Frontier Tribal Areas Sub-Committee", "उत्तर-पश्चिम सीमांत जनजातीय क्षेत्र", "NWFP Region", "(विभाजन बाद पाक)")));

  S.push(pg(31, "PART 03", "GROUPS 3 & 4 + 8 MAJOR RECAP (3+2+1+2)", C.g,
    '<div class="nw-g2" style="margin-bottom:10px">' +
      card(C.a, pic("amb", "", "nw-h130", true) + '<div class="nw-tc"><div class="nw-mono" style="color:' + C.a + '">GROUP 3 (1)</div><div class="nw-h3">06. Drafting Committee</div><div class="nw-hi">Dr. B. R. Ambedkar</div></div>', "nw-tbar") +
      card(C.c, pic("prasad", "", "nw-h130", true) + '<div class="nw-tc"><div class="nw-mono" style="color:' + C.c + '">GROUP 4 (2) • Dr. Rajendra Prasad</div><div class="nw-en">07. Rules of Procedure (प्रक्रिया नियम)</div><div class="nw-en">08. Steering Committee (संचालन समिति)</div></div>', "nw-tbar") +
    '</div>' +
    card(C.g, '<div class="nw-tc nw-h3" style="color:#fef08a">RECAP: NEHRU (3) + PATEL (2) + AMBEDKAR (1) + PRASAD (2) = 8 MAJOR COMMITTEES</div>', "nw-lbar nw-soft-g")));

  // --- PART 04: 13 MINOR COMMITTEES, DRAFTING COMMITTEE, READINGS & SESSIONS ---
  S.push(pg(32, "PART 04", "13 MINOR COMMITTEES (01 – 05 PAIRED)", C.c,
    row("01–02", C.c, "Finance & Staff  +  Ad-hoc National Flag", "वित्त एवं कर्मचारी + राष्ट्रीय ध्वज पर तदर्थ", "Dr. Rajendra Prasad", "डॉ. राजेंद्र प्रसाद", "PAIR 01") +
    row("03", C.a, "Credentials Committee", "प्रत्यय-पत्र समिति", "Alladi Krishnaswami Ayyar", "अल्लादी कृष्णास्वामी अय्यर") +
    row("04–05", C.g, "House Committee  +  Chief Commissioners’ Provinces", "सदन समिति + मुख्य आयुक्तों के प्रांत", "B. Pattabhi Sitaramayya", "बी. पट्टाभि सीतारमैया", "PAIR 02")));

  S.push(pg(33, "PART 04", "13 MINOR COMMITTEES (06 – 09 PAIRED)", C.g,
    row("06", C.a, "Order of Business Committee", "कार्य-संचालन समिति", "Dr. K. M. Munshi", "डॉ. के. एम. मुंशी") +
    row("07", C.c, "Functions of Constituent Assembly", "संविधान सभा के कार्यों पर समिति", "G. V. Mavalankar", "जी. वी. मावलंकर") +
    row("08–09", C.g, "Ad-hoc Supreme Court  +  Ad-hoc Citizenship", "सर्वोच्च न्यायालय + नागरिकता पर तदर्थ", "S. Varadachariar", "एस. वरदाचारी", "PAIR 03")));

  S.push(pg(34, "PART 04", "13 MINOR COMMITTEES (10 – 13)", C.a,
    row("10", C.c, "Expert Comm. on Financial Provisions", "वित्तीय प्रावधान विशेषज्ञ समिति", "Nalini Ranjan Sarkar", "नलिनी रंजन सरकार") +
    row("11", C.a, "Linguistic Provinces Commission", "भाषाई प्रांत आयोग", "S. K. Dhar", "एस. के. धर", "★ SSC FAV") +
    row("12", C.g, "Special Committee to Examine Draft", "प्रारूप जांच विशेष समिति", "Jawaharlal Nehru", "जवाहरलाल नेहरू") +
    row("13", C.v, "Press Gallery Committee", "प्रेस दीर्घा समिति", "Usha Nath Sen", "उषा नाथ सेन")));

  S.push(pg(35, "PART 04", "SIR B. N. RAU — CONSTITUTIONAL ADVISOR", C.a,
    '<div class="nw-g2">' +
      pic("bn_rau", "Sir B. N. Rau • Constitutional & Legal Advisor", "nw-tall", true) +
      '<div class="nw-stack">' +
        '<div class="nw-h1">SIR B. N. RAU</div>' + tri() +
        '<div class="nw-hi1">सर बी. एन. राव</div>' +
        card(C.c, '<div class="nw-en">ROLE: Constitutional & Legal Advisor</div><div class="nw-hi">संविधान सभा के संवैधानिक व विधिक सलाहकार</div>', "nw-lbar") +
        card(C.g, '<div class="nw-en" style="color:#fef08a">Prepared the FIRST RAW DRAFT</div><div class="nw-hi">संविधान का पहला कच्चा प्रारूप तैयार किया, जिस पर Drafting Committee ने काम किया!</div>', "nw-lbar nw-soft-g") +
      '</div></div>'));

  S.push(pg(36, "PART 04", "DRAFTING COMMITTEE OVERVIEW (1947)", C.a,
    '<div class="nw-g2" style="margin-bottom:10px">' +
      pic("draft_grp", "Dr. Ambedkar with Drafting Committee (29 Aug 1947)", "nw-h180", true) +
      card(C.a, '<div class="nw-h2">DRAFTING COMMITTEE</div><div class="nw-hi">प्रारूप समिति (1947)</div><div class="nw-desc">Based on Sir B. N. Rau’s raw draft</div>', "nw-tbar") +
    '</div>' +
    '<div class="nw-g4">' +
      card(C.c, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.c + '">SET UP ON</div><div class="nw-h3">29 AUG 1947</div></div>', "nw-tbar") +
      card(C.g, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.g + '">1ST MEETING</div><div class="nw-h3">30 AUG 1947</div></div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.a + '">MEMBERS</div><div class="nw-h3">07 TOTAL</div></div>', "nw-tbar") +
      card(C.v, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.v + '">SAT FOR</div><div class="nw-h3">141 DAYS</div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(37, "PART 04", "ALL 7 MEMBERS OF DRAFTING COMMITTEE", C.a,
    card(C.a, '<div class="nw-en" style="color:#fef08a">01. DR. B. R. AMBEDKAR (डॉ. बी. आर. अंबेडकर) — ★ CHAIRMAN / अध्यक्ष</div>', "nw-lbar nw-soft-a") +
    '<div class="nw-g2" style="margin-top:8px">' +
      card(C.c, '<div class="nw-en">02. K. M. Munshi</div><div class="nw-hi">के. एम. मुंशी</div>', "nw-lbar") +
      card(C.g, '<div class="nw-en">03. Syed Muhammad Saadullah</div><div class="nw-hi">सैयद मुहम्मद सादुल्लाह</div>', "nw-lbar") +
      card(C.c, '<div class="nw-en">04. Alladi Krishnaswami Ayyar</div><div class="nw-hi">अल्लादी कृष्णास्वामी अय्यर</div>', "nw-lbar") +
      card(C.a, '<div class="nw-en">05. N. Gopalaswami Ayyangar</div><div class="nw-box-a">★ Linked to Article 370 draft</div>', "nw-lbar") +
      card(C.r, '<div class="nw-en">06. N. Madhava Rao</div><div class="nw-box-r">★ Replaced B. L. Mitter (Resigned)</div>', "nw-lbar") +
      card(C.v, '<div class="nw-en">07. T. T. Krishnamachari</div><div class="nw-box-a">★ Replaced D. P. Khaitan (Died 1948)</div>', "nw-lbar") +
    '</div>'));

  S.push(pg(38, "PART 04", "3 DRAFTS OF THE CONSTITUTION", C.c,
    '<div class="nw-g2">' +
      '<div class="nw-stack">' +
        card(C.c, '<div class="nw-mono" style="color:' + C.c + '">DRAFT 01 • 21 FEB 1948</div><div class="nw-en">8 Months given to People of India to discuss</div><div class="nw-hi">जनता को चर्चा के लिए 8 महीने दिए गए।</div>', "nw-lbar") +
        card(C.a, '<div class="nw-mono" style="color:' + C.a + '">DRAFT 02 • 21 OCT 1948</div><div class="nw-en">Second Draft Published</div><div class="nw-hi">दूसरा प्रारूप प्रकाशित।</div>', "nw-lbar") +
        card(C.g, '<div class="nw-mono" style="color:' + C.g + '">FINAL DRAFT • 4 NOV 1948</div><div class="nw-en">Introduced by Dr. B. R. Ambedkar</div><div class="nw-hi">डॉ. अंबेडकर द्वारा अंतिम प्रारूप पेश।</div>', "nw-lbar") +
      '</div>' +
      pic("draft_fin", "Dr. Ambedkar Presenting Final Draft to Dr. Prasad (1949)", "nw-tall", true) +
    '</div>'));

  S.push(pg(39, "PART 04", "3 READINGS & CONSTITUTION DAY", C.a,
    '<div class="nw-g3" style="margin-bottom:10px">' +
      card(C.c, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.c + '">1ST READING • पहला वाचन</div><div class="nw-h3">5 DAYS</div><div class="nw-desc">4 Nov 1948 – 9 Nov 1948</div></div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.a + '">2ND READING • दूसरा वाचन</div><div class="nw-h3">10M, 3D</div><div class="nw-desc">15 Nov 1948 – 17 Oct 1949<br><b>★ LONGEST READING</b></div></div>', "nw-tbar") +
      card(C.g, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.g + '">3RD READING • तीसरा वाचन</div><div class="nw-h3">COMPLETED</div><div class="nw-desc">14 Nov 1949 – 26 Nov 1949</div></div>', "nw-tbar") +
    '</div>' +
    card(C.g, '<div class="nw-tc"><div class="nw-h2" style="color:#fef08a">★ 26 NOVEMBER 1949 — CONSTITUTION ADOPTED!</div><div class="nw-hi">हर साल CONSTITUTION DAY (संविधान दिवस) के रूप में मनाया जाता है</div>' + tri() + '</div>', "nw-lbar nw-soft-g")));

  S.push(pg(40, "PART 04", "IMPORTANT SESSIONS & KEY STATS", C.a,
    '<div class="nw-g4" style="margin-bottom:10px">' +
      card(C.c, '<div class="nw-tc"><div class="nw-h3" style="color:' + C.c + '">11 SESSIONS</div><div class="nw-desc">165 Days (165 दिन)</div></div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-h3" style="color:' + C.a + '">2Y 11M 18D</div><div class="nw-desc">कुल समय लगा</div></div>', "nw-tbar") +
      card(C.g, '<div class="nw-tc"><div class="nw-h3" style="color:' + C.g + '">₹64 LAKHS</div><div class="nw-desc">कुल बजट खर्च</div></div>', "nw-tbar") +
      card(C.v, '<div class="nw-tc"><div class="nw-h3" style="color:' + C.v + '">284 SIGNED</div><div class="nw-desc">15 Women (24 Jan 1950)</div></div>', "nw-tbar") +
    '</div>' +
    card(C.c,
      row("1", C.c, "1st Session (पहला सत्र)", "", "9 – 23 December 1946", "") +
      row("10", C.a, "10th Session (दसवां सत्र)", "", "6 – 17 October 1949", "") +
      row("11", C.g, "11th / Last Session (अंतिम सत्र)", "", "14 – 26 November 1949", "") +
      row("✍", C.v, "Final Signing Day (284 Signatories • 15 Women)", "", "24 January 1950", ""), "nw-tbar")));

  // --- PART 05: ENFORCEMENT, FUNCTIONS, CALLIGRAPHERS, TRAPS & WOMEN ---
  S.push(pg(41, "PART 05", "WHY 26 JANUARY 1950 (REPUBLIC DAY)?", C.a,
    '<div class="nw-g3">' +
      card(C.c, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.c + '">DEC 1929</div><div class="nw-h3">LAHORE SESSION</div><div class="nw-hi">कांग्रेस का लाहौर अधिवेशन</div><div class="nw-desc">Purna Swaraj Resolution passed.</div></div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.a + '">26 JAN 1930</div><div class="nw-h3">PURNA SWARAJ DAY</div><div class="nw-hi">प्रथम पूर्ण स्वराज दिवस</div><div class="nw-desc">First celebrated across India!</div></div>', "nw-tbar") +
      card(C.g, '<div class="nw-tc"><div class="nw-mono" style="color:' + C.g + '">26 JAN 1950</div><div class="nw-h3">REPUBLIC DAY</div><div class="nw-hi">संविधान पूरी तरह लागू</div><div class="nw-desc">Chosen to honour 26 January!</div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(42, "PART 05", "EARLY PROVISIONS (26 NOV 1949) & STRUCTURE", C.c,
    '<div class="nw-g3" style="margin-bottom:10px">' +
      card(C.c, '<div class="nw-tc"><div class="nw-h3">CITIZENSHIP</div><div class="nw-hi">नागरिकता</div><div class="nw-box-c">Articles 5 – 9</div></div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-h3">ELECTIONS</div><div class="nw-hi">चुनाव</div><div class="nw-box-a">Articles 324 – 329</div></div>', "nw-tbar") +
      card(C.g, '<div class="nw-tc"><div class="nw-h3">PROVISIONAL PARLIAMENT</div><div class="nw-hi">अंतरिम संसद</div><div class="nw-box-g">Interim Legislature</div></div>', "nw-tbar") +
    '</div>' +
    '<div class="nw-g4">' +
      card(C.c, '<div class="nw-tc"><div class="nw-stat">395</div><div class="nw-sl">ARTICLES</div></div>', "nw-tbar") +
      card(C.g, '<div class="nw-tc"><div class="nw-stat">08</div><div class="nw-sl">SCHEDULES</div></div>', "nw-tbar") +
      card(C.a, '<div class="nw-tc"><div class="nw-stat">22</div><div class="nw-sl">PARTS</div></div>', "nw-tbar") +
      card(C.v, '<div class="nw-tc"><div class="nw-stat">01</div><div class="nw-sl">PREAMBLE</div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(43, "PART 05", "5 OTHER FUNCTIONS OF CONSTITUENT ASSEMBLY", C.g,
    '<div class="nw-g2">' +
      '<div class="nw-stack">' +
        row("01", C.c, "First Parliament of India", "भारत की पहली संसद के रूप में कार्य", "1947–52", "") +
        row("02", C.a, "Adopted National Flag", "राष्ट्रीय ध्वज अपनाया", "22 Jul 1947", "") +
        row("03", C.g, "Anthem (Tagore) & Song (Bankim)", "जन गण मन व वंदे मातरम", "24 Jan 1950", "") +
        row("04", C.v, "Ratified Commonwealth Membership", "राष्ट्रमंडल सदस्यता की पुष्टि", "May 1949", "") +
        row("05", C.r, "1st President: Dr. Rajendra Prasad", "प्रथम राष्ट्रपति चुने गए", "26 Jan 1950", "") +
      '</div>' +
      '<div class="nw-stack">' +
        pic("tagore", "Bankim Chandra & Rabindranath Tagore", "nw-h180", false) +
        pic("prasad", "Dr. Rajendra Prasad — 1st President", "nw-h160", true) +
      '</div></div>'));

  S.push(pg(44, "PART 05", "SIGNIFICANT FACTS & AMBEDKAR QUOTE", C.a,
    '<div class="nw-g2">' +
      card(C.c, pic("radha", "", "nw-h140", true) + '<div class="nw-mono" style="color:' + C.c + '">MIDNIGHT OF 15 AUG 1947</div><div class="nw-h3">Dr. S. Radhakrishnan</div><div class="nw-hi">नेहरू जी के बाद संसद को संबोधित करने वाले प्रमुख वक्ता।</div><div class="nw-box-a" style="margin-top:8px"><b>Socialist Party (1934 — A. N. Dev & J. P. Narayan):</b> Demanded dissolution & re-election by adult suffrage.</div>', "nw-tbar") +
      card(C.a, '<div class="nw-mono" style="color:' + C.a + '">★ DR. B. R. AMBEDKAR QUOTE</div><div class="nw-en" style="color:#fef08a;margin:8px 0">“On the 26th Jan 1950, we are going to enter a life of contradictions. In politics we will have equality, and in social & economic life we will have inequality.”</div><div class="nw-hi">“राजनीति में हमारे पास समानता होगी, लेकिन सामाजिक और आर्थिक जीवन में असमानता होगी।”</div>', "nw-tbar") +
    '</div>'));

  S.push(pg(45, "PART 05", "NATIONAL FLAG & LITERARY RECORDS", C.a,
    '<div class="nw-g2">' +
      card(C.a, pic("flag", "Length : Width Ratio = 3 : 2", "nw-h130", false) + '<div class="nw-h3">Designer: Pingali Venkayya</div><div class="nw-hi">पिंगली वेंकैया (Approved by Gandhiji at Vijayawada, 1921)</div><div class="nw-box-g" style="margin-top:6px">STANDARD RATIO (L : W) = 3 : 2</div>', "nw-tbar") +
      '<div class="nw-stack">' +
        card(C.r, '<div class="nw-en">Somnath Lahiri (सोमनाथ लहिड़ी)</div><div class="nw-desc">Called Assembly a “Conspiracy of Britishers” • Book: <i>Samyobad</i> • Paper: <i>Swadhinata</i></div>', "nw-lbar") +
        card(C.c, '<div class="nw-en">H. M. Seervai (एच. एम. सीरवाई)</div><div class="nw-desc">Authored <i>“Constitutional Law of India”</i></div>', "nw-lbar") +
        card(C.g, '<div class="nw-en">12 Volumes of Assembly Debates</div><div class="nw-hi">सभी चर्चाओं का रिकॉर्ड 12 खंडों में संकलित।</div>', "nw-lbar") +
      '</div></div>'));

  S.push(pg(46, "PART 05", "CALLIGRAPHERS, DECORATORS, OFFICIALS & SEAL", C.a,
    '<div class="nw-g2">' +
      '<div class="nw-stack">' +
        card(C.c, '<div class="nw-mono" style="color:' + C.c + '">CALLIGRAPHERS • सुलेखनकर्ता</div><div class="nw-en">English: Prem Bihari Narain Raizada</div><div class="nw-en" style="color:#fef08a">Hindi: Vasant Krishan Vaidya</div>', "nw-lbar") +
        card(C.a, '<div class="nw-g2">' + pic("nandalal", "Nand Lal Bose", "nw-h110", false) + '<div><div class="nw-mono" style="color:' + C.a + '">DECORATORS (SHANTINIKETAN)</div><div class="nw-en">Nand Lal Bose & Beohar Rammanohar Sinha</div></div></div>', "nw-lbar") +
      '</div>' +
      '<div class="nw-stack">' +
        card(C.g, '<div class="nw-mono" style="color:' + C.g + '">KEY OFFICIALS • प्रमुख अधिकारी</div><div class="nw-en">Secretary: H. V. R. Iyengar</div><div class="nw-en">Chief Draftsman: S. N. Mukherjee</div>', "nw-lbar") +
        card(C.a, '<div class="nw-g2" style="align-items:center"><div class="nw-tc">' + SVG_ELEPHANT + '</div><div><div class="nw-en">Largest Written Constitution</div><div class="nw-en" style="color:#bae6fd">Original Language: ENGLISH</div><div class="nw-h3" style="color:#fef08a">SYMBOL: ELEPHANT (हाथी)</div></div></div>', "nw-tbar nw-soft-a") +
      '</div></div>'));

  S.push(pg(47, "PART 05", "★ RED-ALERT EXAM TRAPS & CONSTITUENCIES", C.r,
    card(C.r,
      '<div class="nw-g2">' +
        '<div class="nw-g2">' + pic("gandhi", "Mahatma Gandhi", "nw-h150", true) + pic("bn_rau", "Sir B. N. Rau", "nw-h150", true) + '</div>' +
        '<div><div class="nw-h3" style="color:#fb7185">✖ NOT MEMBERS OF CONSTITUENT ASSEMBLY!</div><div class="nw-en">1. Mahatma Gandhi (महात्मा गांधी)</div><div class="nw-en" style="color:#fef08a">2. Sir B. N. Rau (Only Legal Advisor)</div><div class="nw-hi" style="margin-top:6px">दोनों ही संविधान सभा के सदस्य नहीं थे!</div></div>' +
      '</div>', "nw-lbar nw-soft-r") +
    '<div class="nw-g3" style="margin-top:10px">' +
      card(C.a, '<div class="nw-tc"><div class="nw-en">Dr. B. R. Ambedkar</div><div class="nw-box-a">BENGAL ➔ BOMBAY</div><div class="nw-hi">पहले बंगाल, विभाजन बाद बॉम्बे</div></div>', "nw-tbar") +
      card(C.c, '<div class="nw-tc"><div class="nw-en">Jawaharlal Nehru</div><div class="nw-box-c">UNITED PROVINCES (UP)</div><div class="nw-hi">उत्तर प्रदेश से चुने गए</div></div>', "nw-tbar") +
      card(C.g, '<div class="nw-tc"><div class="nw-en">Sardar Patel</div><div class="nw-box-g">BOMBAY</div><div class="nw-hi">बॉम्बे से चुने गए</div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(48, "PART 05", "15 FEMALE MEMBERS — 3 ICONIC PIONEERS", C.g,
    '<div class="nw-g3">' +
      card(C.a, pic("amrit", "", "nw-h170", true) + '<div class="nw-tc"><div class="nw-h3">Rajkumari Amrit Kaur</div><div class="nw-hi">राजकुमारी अमृत कौर</div><div class="nw-box-a" style="margin-top:6px">1st Health Minister of India<br>प्रथम स्वास्थ्य मंत्री</div></div>', "nw-tbar") +
      card(C.c, pic("sucheta", "", "nw-h170", true) + '<div class="nw-tc"><div class="nw-h3">Sucheta Kripalani</div><div class="nw-hi">सुचेता कृपलानी</div><div class="nw-box-c" style="margin-top:6px">1st Female CM of UP & India<br>प्रथम महिला मुख्यमंत्री</div></div>', "nw-tbar") +
      card(C.g, pic("naidu", "", "nw-h170", true) + '<div class="nw-tc"><div class="nw-h3">Sarojini Naidu</div><div class="nw-hi">सरोजिनी नायडू</div><div class="nw-box-g" style="margin-top:6px">1st Female Governor of UP & India<br>प्रथम महिला राज्यपाल</div></div>', "nw-tbar") +
    '</div>'));

  S.push(pg(49, "SUMMARY", "✓ CHAPTER 01 COMPLETE!", C.g,
    card(C.g,
      '<div class="nw-tc" style="padding:18px 8px">' +
        '<div class="nw-pill" style="border-color:' + C.g + ';color:' + C.g + '">100% CHAPTER 01 COMPLETE!</div>' +
        '<div class="nw-h1" style="margin-top:12px">MAKING OF THE INDIAN CONSTITUTION</div>' + tri() +
        '<div class="nw-hi1" style="margin-top:8px">हर तारीख, हर कमेटी और हर Exam Trap — Complete Revision Done!</div>' +
      '</div>', "nw-tbar nw-soft-g")));

  var CSS = '<style>' +
    '@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600;800&family=Noto+Sans+Devanagari:wght@500;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap");' +
    '.nw-deck{font-family:"Plus Jakarta Sans","Noto Sans Devanagari",sans-serif;color:#f8fafc;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}' +
    '.nw-deck img{pointer-events:none;user-select:none;-webkit-user-drag:none}' +
    '.nw-slide{position:relative;background:linear-gradient(180deg,#080d1a,#0f172a);border:1px solid rgba(148,163,184,.26);border-radius:14px;overflow:hidden;margin-bottom:18px;box-shadow:0 12px 32px rgba(0,0,0,.45)}' +
    '.nw-bar{height:5px;background:var(--ac,#f59e0b);width:100%}' +
    '.nw-top{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:10px 16px;border-bottom:1px solid rgba(148,163,184,.14);background:rgba(13,21,38,.7)}' +
    '.nw-pill{display:inline-block;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:800;border:1.5px solid var(--ac,#f59e0b);color:var(--ac,#f59e0b);background:rgba(13,21,38,.9)}' +
    '.nw-pgnum{font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:800;color:#94a3b8}' +
    '.nw-in{padding:16px}' +
    '.nw-g2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}' +
    '.nw-g3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}' +
    '.nw-g4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}' +
    '.nw-stack{display:flex;flex-direction:column;gap:10px}' +
    '.nw-card{background:rgba(13,21,38,.95);border:1.5px solid rgba(148,163,184,.24);border-radius:12px;padding:12px 14px;position:relative}' +
    '.nw-tbar{border-top:4px solid var(--ac,#38bdf8)}' +
    '.nw-lbar{border-left:5px solid var(--ac,#38bdf8)}' +
    '.nw-soft-a{background:rgba(245,158,11,.13);border-color:rgba(245,158,11,.55)}' +
    '.nw-soft-g{background:rgba(16,185,129,.13);border-color:rgba(16,185,129,.55)}' +
    '.nw-soft-r{background:rgba(244,63,94,.13);border-color:rgba(244,63,94,.55)}' +
    '.nw-pic{position:relative;border-radius:12px;overflow:hidden;border:1.5px solid rgba(245,158,11,.45);background:#090e1a}' +
    '.nw-pic img{width:100%;height:100%;object-fit:cover;object-position:50% 22%;display:block}' +
    '.nw-gray{filter:grayscale(28%) sepia(12%) contrast(1.06)}' +
    '.nw-tall{min-height:260px;height:100%}.nw-h180{height:185px}.nw-h170{height:170px}.nw-h160{height:160px}.nw-h150{height:150px}.nw-h140{height:140px}.nw-h130{height:130px}.nw-h110{height:112px}' +
    '.nw-cap{position:absolute;left:0;right:0;bottom:0;padding:18px 10px 7px;background:linear-gradient(transparent,rgba(5,9,18,.95));font-size:12px;font-weight:700;color:#f8fafc}' +
    '.nw-h1{font-size:26px;font-weight:800;line-height:1.18;color:#fff}.nw-h2{font-size:21px;font-weight:800;line-height:1.22;color:#fff}.nw-h3{font-size:17px;font-weight:800;line-height:1.25;color:#fff}' +
    '.nw-hi1{font-size:22px;font-weight:700;color:#fbbf24}.nw-en{font-size:15px;font-weight:800;color:#fff;line-height:1.35}.nw-hi{font-size:14px;font-weight:600;color:#cbd5e1;line-height:1.4;margin-top:2px}' +
    '.nw-desc{font-size:13px;color:#e2e8f0;line-height:1.4;margin-top:6px}.nw-sub{font-size:15px;font-weight:700;color:#e2e8f0;margin-bottom:4px}' +
    '.nw-mono{font-family:"JetBrains Mono",monospace;font-size:13px;font-weight:800}.nw-bigmono{font-family:"JetBrains Mono",monospace;font-size:48px;font-weight:800;line-height:1}' +
    '.nw-stat{font-family:"JetBrains Mono",monospace;font-size:36px;font-weight:800;color:var(--ac,#38bdf8);line-height:1.05}' +
    '.nw-sl{font-size:12px;font-weight:800;color:#f8fafc;margin-top:4px}.nw-tc{text-align:center}.nw-center{display:flex;flex-direction:column;justify-content:center;align-items:center}' +
    '.nw-tri{display:flex;width:240px;max-width:100%;height:4px;margin:6px 0;border-radius:3px;overflow:hidden}' +
    '.nw-tri span:nth-child(1){flex:1;background:#f97316}.nw-tri span:nth-child(2){flex:1;background:#fff}.nw-tri span:nth-child(3){flex:1;background:#10b981}' +
    '.nw-box-a,.nw-box-c,.nw-box-g,.nw-box-r{padding:8px 10px;border-radius:8px;font-size:13px;font-weight:800;margin-top:6px}' +
    '.nw-box-a{background:rgba(245,158,11,.18);border:1px solid #f59e0b;color:#fef08a}' +
    '.nw-box-c{background:rgba(56,189,248,.16);border:1px solid #38bdf8;color:#bae6fd}' +
    '.nw-box-g{background:rgba(16,185,129,.16);border:1px solid #10b981;color:#6ee7b7}' +
    '.nw-box-r{background:rgba(244,63,94,.16);border:1px solid #f43f5e;color:#fecdd3}' +
    '.nw-badge-r{display:inline-block;padding:4px 12px;border-radius:999px;border:1.5px solid #fb7185;color:#fb7185;font-size:13px;font-weight:800;margin:0 4px}' +
    '.nw-circ{display:inline-block;padding:1px 9px;border:2.5px solid #fb7185;border-radius:50%;color:#fb7185}' +
    '.nw-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:8px;align-items:center}' +
    '.nw-arr{text-align:center;font-size:22px;font-weight:800;color:#fbbf24}.nw-arr span{display:block;font-size:10px;color:#e2e8f0}' +
    '.nw-ex{margin-top:8px;padding:6px;border-radius:8px;text-align:center;font-size:13px;font-weight:800;background:rgba(255,255,255,.06);border:1px solid var(--ac);color:#fff}' +
    '.nw-stamp{display:inline-block;margin-top:6px;padding:3px 9px;border:2px solid #f43f5e;color:#f43f5e;font-family:"JetBrains Mono",monospace;font-size:12px;font-weight:800;border-radius:6px;transform:rotate(-5deg)}' +
    '.nw-ltr{width:46px;height:46px;line-height:46px;border-radius:50%;margin:0 auto 6px;border:2px solid var(--ac);font-family:"JetBrains Mono",monospace;font-size:22px;font-weight:800}' +
    '.nw-row{display:flex;align-items:center;gap:10px;padding:9px 12px;margin-bottom:7px;border-radius:10px;background:rgba(13,21,38,.96);border:1px solid rgba(148,163,184,.2);border-left:4px solid var(--ac)}' +
    '.nw-num{min-width:44px;text-align:center;padding:5px 4px;border-radius:8px;font-family:"JetBrains Mono",monospace;font-size:13px;font-weight:800;color:var(--ac);background:rgba(255,255,255,.06);border:1px solid var(--ac)}' +
    '.nw-rl{flex:1.25;min-width:0}.nw-rr{flex:1;min-width:0;border-left:1px solid rgba(148,163,184,.2);padding-left:10px}' +
    '.nw-ren{font-size:15px;font-weight:800;color:var(--ac)}.nw-rhi{font-size:13px;color:#f1f5f9}' +
    '.nw-tag{display:inline-block;margin-top:3px;padding:2px 8px;border-radius:999px;font-size:10px;font-weight:800;border:1px solid var(--ac);color:var(--ac)}' +
    '.nw-bar-row{display:grid;grid-template-columns:190px 1fr 48px;align-items:center;gap:10px;margin:8px 0;font-size:13px;font-weight:800}' +
    '.nw-track{height:16px;border-radius:8px;background:rgba(148,163,184,.16);overflow:hidden}.nw-fill{height:100%;border-radius:8px}' +
    '.nw-svgbox{width:100%;max-height:220px;display:block;margin:0 auto}' +
    '@media(max-width:720px){.nw-g2,.nw-g3,.nw-g4,.nw-flow{grid-template-columns:1fr}.nw-arr{transform:rotate(90deg);margin:4px 0}.nw-row{flex-direction:column;align-items:stretch}.nw-rr{border-left:0;border-top:1px solid rgba(148,163,184,.2);padding-left:0;padding-top:6px}.nw-bar-row{grid-template-columns:1fr}.nw-h1{font-size:21px}}' +
    '</style>';

  var outHtml = CSS + '<div class="nw-deck">' + S.join("") + '</div>';

  window.__NW_NOTES = {
    accentColor: "#f59e0b",
    html: outHtml
  };
  window.__NW_NOTES_HTML = outHtml;
})();