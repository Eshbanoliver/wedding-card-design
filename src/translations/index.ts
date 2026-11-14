// ============================================================
// CENTRALIZED TRANSLATION DICTIONARY
// Royal Jain Wedding Invitation – Akshay & Vibhuti
// ============================================================
// Two language modes: 'hi' (Hindi/Default) and 'en' (English)
// Names (अक्षय, विभूति, etc.) are NEVER translated incorrectly.
// Jain shlokas / mantras are preserved in both modes.
// ============================================================

export type Lang = 'hi' | 'en';

export const translations = {
  hi: {
    // ─── GLOBAL ────────────────────────────────────────────
    langLabel: 'हिंदी',
    langSwitch: 'EN',

    // ─── HERO OPENING ──────────────────────────────────────
    invocation: '॥ श्री ऋषभदेवाय नमः ॥',
    royalWeddingLabel: 'राजसी विवाह आमंत्रण',
    shubhVivah: 'शुभ विवाह',
    groomName: 'अक्षय',
    brideName: 'विभूति',
    groomNameEn: 'Akshay',
    brideNameEn: 'Vibhuti',
    coupleAmpersand: '&',
    date1: 'मंगलवार, 24 नवंबर 2026',
    date2: 'बुधवार, 25 नवंबर 2026',
    venueCity: 'उदयपुर, राजस्थान',
    openBtn: 'आमंत्रण देखें',
    openBtnSub: 'Open Invitation',
    scrollHint: '↓ नीचे स्क्रॉल करें अथवा बटन दबाएं',

    // ─── MANGALACHARAN ────────────────────────────────────
    sacredInscription: 'पावन लेख',
    mangalacharanTitle: '॥ श्री जैन मंगलाचरण ॥',
    mangalacharan1: 'मंगलम् भगवान वीरो मंगलम् गौतमो गणः।',
    mangalacharan2: 'मंगलम् कुन्दकुन्दाद्यो जैन धर्मस्तु मंगलम् ॥',
    mangalacharanMeaning:
      '"मंगल हैं भगवान महावीर, मंगल हैं गणधर गौतम स्वामी; मंगल हैं आचार्य कुंदकुंद, और परम मंगलमय है शाश्वत जैन धर्म।"',
    invitationMsg:
      'परम तत्व श्री भगवान की अनंत कृपा से हमारे परिवार में शुभ विवाह संस्कार का मंगल अवसर आ रहा है जिसमें आप सादर आमंत्रित हैं।',
    invitationMsgEn:
      'By the supreme grace of the Divine, an auspicious marriage celebration is gracing our family, and we cordially invite your gracious presence to bless the couple.',
    jainValues: 'सत्य • अहिंसा • अपरिग्रह',

    // ─── COUPLE SECTION ──────────────────────────────────
    theAuspiciousUnion: 'पावन मिलन',
    varEvamVadhu: 'वर एवं वधु',
    coupleTagline: 'श्रद्धा, परंपरा और प्रेम से बंधे दो जीव',
    couplePortraitTag: '॥ राजसी युगल दर्शन ॥',
    coupleNamesFull: 'विभूति एवं अक्षय',
    varLabel: '॥ राजसी वर ॥',
    vadhuLabel: '॥ रूपवती वधु ॥',
    gathbandhanText: 'पवित्र गठबंधन',
    gathbandhanSub: 'जन्म जन्मांतर का अटूट साथ',
    suputraOf: 'सुपुत्र:',
    suputriOf: 'सुपुत्री:',
    groomParentsHi: 'श्री दिनेश जैन एवं श्रीमती करुणा जैन',
    groomParentsEn: 'S/o Dinesh Jain & Karuna Jain',
    brideParentsHi: 'श्री हेमंत जैन एवं श्रीमती अर्चना जैन',
    brideParentsEn: 'D/o Hemant Jain & Archana Jain',
    nivasiLabel: 'निवासी:',
    groomResidenceHi: 'उदयपुर, राजस्थान',
    groomResidenceEn: 'Udaipur, Rajasthan',
    brideResidenceHi: 'फिरोजाबाद, उत्तर प्रदेश',
    brideResidenceEn: 'Firozabad, Uttar Pradesh',
    groomHeritage: 'पावन मेवाड़ भूमि, राजस्थान',
    brideHeritage: 'पारंपरिक भारतीय सांस्कृतिक संस्कार',
    shubhParinay: 'शुभ परिणय',

    // ─── CELEBRATIONS TIMELINE ───────────────────────────
    weddingFestivities: 'विवाह उत्सव',
    shubhKaryakram: 'शुभ कार्यक्रम',
    ceremoniesTagline: 'मांगलिक कार्यक्रमों का शुभ क्रम',
    countdownTitle: '॥ पावन लग्न मुहूर्त की उल्टी गिनती ॥',
    days: 'दिवस',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',
    weddingOnDate: 'शुभ विवाह: बुधवार, 25 नवंबर 2026 • प्रातः 9:00 बजे',
    karyakram: 'कार्यक्रम',
    addToCalendar: 'कैलेंडर में जोड़ें (Add to Calendar)',
    haldi: {
      nameHi: 'हल्दी समारोह',
      nameEn: 'Haldi Ceremony',
      dayHi: 'मंगलवार, 24 नवंबर 2026',
      dayEn: 'Tuesday, 24 November 2026',
      timeHi: 'अपराह्न 3:00 बजे से',
      timeEn: '03:00 PM Onwards',
      tagline: 'हल्दी की पीली आभा और उबटन से सजेगा मंगल रूप',
    },
    mehndi: {
      nameHi: 'मेहंदी समारोह',
      nameEn: 'Mehndi Ceremony',
      dayHi: 'मंगलवार, 24 नवंबर 2026',
      dayEn: 'Tuesday, 24 November 2026',
      timeHi: 'सायं 6:00 बजे से',
      timeEn: '06:00 PM Onwards',
      tagline: 'हाथों में रचेगी सतरंगी मेहंदी, गूंजेगी खुशियों की धुन',
    },
    wedding: {
      nameHi: 'शुभ विवाह',
      nameEn: 'Royal Wedding & Pheras',
      dayHi: 'बुधवार, 25 नवंबर 2026',
      dayEn: 'Wednesday, 25 November 2026',
      timeHi: 'प्रातः 9:00 बजे से',
      timeEn: '09:00 AM Onwards',
      tagline: 'अग्नि की पावन साक्षी में सात फेरे एवं जीवन का मंगल बंधन',
    },
    dateLabel: 'दिनांक / Date',
    timeLabel: 'समय / Timings',

    // ─── VENUE SECTION ───────────────────────────────────
    weddingDestination: 'विवाह गंतव्य',
    vivahSthal: 'विवाह स्थल',
    venueTagline: 'राजसी वेदी एवं मार्गदर्शन',
    vivahVedi: '॥ शुभ विवाह वेदी ॥',
    venueNameHi: 'होटल मदुरै, उदयपुर',
    fullAddressLabel: 'पूर्ण पता / Complete Address',
    fullAddressHi:
      '118 होटल स्ट्रीट, उदयपोल रोड, HDFC बैंक के पीछे, उदयपोल, श्रीनाथ मार्केट, उदयपुर, राजस्थान 313001',
    copyAddressBtn: 'पता कॉपी करें (Copy Address)',
    copiedMsg: 'पता कॉपी हो गया! (Address Copied)',
    getDirectionsBtn: 'विवाह स्थल देखें',
    getDirectionsSub: 'GET DIRECTIONS',
    udaipoleCity: 'उदयपोल, उदयपुर',

    // ─── FAMILY WELCOME ──────────────────────────────────
    withWarmestRegards: 'सस्नेह अभिनंदन',
    sadarSwagat: 'सादर स्वागत एवं अभिनंदन',
    familyTagline: 'खुले हृदय से सादर स्वागत',
    swagatakanshi: '॥ स्वागताकांक्षी ॥',
    welcomeMsg:
      'हमारे परिवार के इस मांगलिक अवसर पर आपका शुभागमन ही हमारे उत्सव की शोभा बढ़ाएगा। हम सहृदय आपका स्वागत एवं सत्कार करने को आतुर हैं।',
    snehaSwagat: 'स्नेही स्वागतकर्ता',
    host1Hi: 'आस्था एवं निहाल जी',
    host1En: 'Astha & Nihal Ji',
    host2Hi: "प्रणय 'जी' एवं अनंत",
    host2En: "Pranay 'Ji' & Anant",
    closingNote: 'समस्त परिवारजन आपके स्नेहपूर्ण शुभाशीर्वाद के अभिलाषी हैं।',

    // ─── GRAND CLOSING ───────────────────────────────────
    grandClosingLabel: 'पावन निमंत्रण',
    yourPresenceMeans: 'आपकी उपस्थिति हमारे लिए परम सौभाग्य',
    closingInvite:
      'ईश्वर की असीम कृपा और बड़ों के शुभ आशीर्वाद से विभूति और अक्षय के विवाह बंधन में आप और आपका पूरा परिवार सादर आमंत्रित है।',
    rsvpLabel: 'आप अवश्य पधारें',
    withBlessings: 'सादर, शुभाकांक्षी परिवार',

    // ─── FOOTER ──────────────────────────────────────────
    footerShubhVivah: 'शुभ विवाह',
    footerSubtitle: 'राजसी जैन विवाह आमंत्रण',
    footerQuote: '"आपकी गरिमामयी उपस्थिति हमारे लिए सौभाग्य एवं हर्ष का विषय होगी।"',
    footerInvited: 'सादर आमंत्रित',
    footerLocations: 'उदयपुर • फिरोजाबाद',
    footerDates: '24 & 25 नवंबर 2026',
    footerMantra: '卐 अर्हम् नमः 卐',

    // ─── MUSIC PLAYER ────────────────────────────────────
    musicPlayingLabel: 'नवकार मंत्र',
    musicPlayingSub: 'Namokar Mantra',
    musicStoppedLabel: 'संगीत चालू करें',
    musicStoppedSub: 'Play Music',
    musicPlayBtn: 'नवकार मंत्र सुनें',
    musicStopBtn: 'संगीत बंद करें',

    // ─── SHARE CONTROLS ──────────────────────────────────
    shareWhatsApp: 'WhatsApp पर भेजें',
    copyLink: 'लिंक कॉपी करें',
    linkCopied: 'कॉपी हो गया!',
    petalShower: 'पुष्पवर्षा',
  },

  en: {
    // ─── GLOBAL ────────────────────────────────────────────
    langLabel: 'ENG',
    langSwitch: 'हिं',

    // ─── HERO OPENING ──────────────────────────────────────
    invocation: '॥ Śrī Ṛṣabhadevāya Namaḥ ॥',
    royalWeddingLabel: 'Royal Wedding Invitation',
    shubhVivah: 'Shubh Vivah',
    groomName: 'Akshay',
    brideName: 'Vibhuti',
    groomNameEn: 'Akshay',
    brideNameEn: 'Vibhuti',
    coupleAmpersand: '&',
    date1: 'Tuesday, 24 November 2026',
    date2: 'Wednesday, 25 November 2026',
    venueCity: 'Udaipur, Rajasthan',
    openBtn: 'Open Invitation',
    openBtnSub: 'आमंत्रण देखें',
    scrollHint: '↓ Scroll down or press the button',

    // ─── MANGALACHARAN ────────────────────────────────────
    sacredInscription: 'Sacred Inscription',
    mangalacharanTitle: '॥ Shri Jain Mangalacharan ॥',
    mangalacharan1: 'Mangalam Bhagavān Vīro Mangalam Gautamo Gaṇaḥ.',
    mangalacharan2: 'Mangalam Kundakundādyo Jain Dharmāstu Mangalam ॥',
    mangalacharanMeaning:
      '"Auspicious is Bhagwan Mahavira, auspicious is Ganadhara Gautama Swami; auspicious is Acharya Kundakunda, and supreme and auspicious is the eternal Jain Dharma."',
    invitationMsg:
      'By the supreme grace of the Divine, an auspicious marriage celebration is gracing our family, and we cordially invite your gracious presence to bless the couple.',
    invitationMsgEn:
      'With great joy and reverence, we request the honour of your presence at the auspicious wedding ceremony.',
    jainValues: 'Satya • Ahimsā • Aparigraha',

    // ─── COUPLE SECTION ──────────────────────────────────
    theAuspiciousUnion: 'The Auspicious Union',
    varEvamVadhu: 'The Bride & Groom',
    coupleTagline: 'Two Souls Bound by Faith, Tradition & Love',
    couplePortraitTag: '॥ The Royal Couple ॥',
    coupleNamesFull: 'Vibhuti & Akshay',
    varLabel: '॥ The Royal Groom ॥',
    vadhuLabel: '॥ The Gracious Bride ॥',
    gathbandhanText: 'Sacred Knot',
    gathbandhanSub: 'An Eternal Bond of Love & Faith',
    suputraOf: 'Son of:',
    suputriOf: 'Daughter of:',
    groomParentsHi: 'Dinesh Jain & Karuna Jain',
    groomParentsEn: 'S/o Dinesh Jain & Karuna Jain',
    brideParentsHi: 'Hemant Jain & Archana Jain',
    brideParentsEn: 'D/o Hemant Jain & Archana Jain',
    nivasiLabel: 'Residence:',
    groomResidenceHi: 'Udaipur, Rajasthan',
    groomResidenceEn: 'Udaipur, Rajasthan',
    brideResidenceHi: 'Firozabad, Uttar Pradesh',
    brideResidenceEn: 'Firozabad, Uttar Pradesh',
    groomHeritage: 'Sacred Land of Mewar, Rajasthan',
    brideHeritage: 'Traditional Indian Cultural Heritage',
    shubhParinay: 'Sacred Union',

    // ─── CELEBRATIONS TIMELINE ───────────────────────────
    weddingFestivities: 'Wedding Festivities',
    shubhKaryakram: 'Auspicious Schedule',
    ceremoniesTagline: 'Auspicious Schedule of Ceremonies',
    countdownTitle: '॥ Countdown to the Sacred Wedding Muhurat ॥',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Mins',
    seconds: 'Secs',
    weddingOnDate: 'Royal Wedding: Wednesday, 25 November 2026 • 9:00 AM',
    karyakram: 'Event',
    addToCalendar: 'Add to Calendar',
    haldi: {
      nameHi: 'Haldi Ceremony',
      nameEn: 'Haldi Ceremony',
      dayHi: 'Tuesday, 24 November 2026',
      dayEn: 'Tuesday, 24 November 2026',
      timeHi: '03:00 PM Onwards',
      timeEn: '03:00 PM Onwards',
      tagline: 'Adorned with the golden glow of turmeric & sacred ubtan',
    },
    mehndi: {
      nameHi: 'Mehndi Ceremony',
      nameEn: 'Mehndi Ceremony',
      dayHi: 'Tuesday, 24 November 2026',
      dayEn: 'Tuesday, 24 November 2026',
      timeHi: '06:00 PM Onwards',
      timeEn: '06:00 PM Onwards',
      tagline: 'Intricate henna artistry and joyful celebration of tradition',
    },
    wedding: {
      nameHi: 'Royal Wedding',
      nameEn: 'Royal Wedding & Pheras',
      dayHi: 'Wednesday, 25 November 2026',
      dayEn: 'Wednesday, 25 November 2026',
      timeHi: '09:00 AM Onwards',
      timeEn: '09:00 AM Onwards',
      tagline: 'Seven sacred pheras around the holy fire — an eternal bond of love',
    },
    dateLabel: 'Date',
    timeLabel: 'Timings',

    // ─── VENUE SECTION ───────────────────────────────────
    weddingDestination: 'Wedding Destination',
    vivahSthal: 'Wedding Venue',
    venueTagline: 'Royal Venue & Directions',
    vivahVedi: '॥ Sacred Wedding Altar ॥',
    venueNameHi: 'Hotel Madurai, Udaipur',
    fullAddressLabel: 'Complete Address',
    fullAddressHi:
      '118 Hotel Street, Udaipole Road Behind HDFC Bank, Udaipole, Shrinath Market, Udaipur, Rajasthan 313001',
    copyAddressBtn: 'Copy Address',
    copiedMsg: 'Address Copied!',
    getDirectionsBtn: 'Get Directions',
    getDirectionsSub: 'NAVIGATE',
    udaipoleCity: 'Udaipole, Udaipur',

    // ─── FAMILY WELCOME ──────────────────────────────────
    withWarmestRegards: 'With Warmest Regards',
    sadarSwagat: 'A Grand Welcome & Invitation',
    familyTagline: 'Cordially Welcoming You with Open Hearts',
    swagatakanshi: '॥ Warmly Welcoming You ॥',
    welcomeMsg:
      'Your gracious presence at this auspicious celebration of our family will be the greatest honour and joy. We warmly await your arrival with love and reverence.',
    snehaSwagat: 'Cordial Hosts',
    host1Hi: 'Astha & Nihal Ji',
    host1En: 'Astha & Nihal Ji',
    host2Hi: "Pranay 'Ji' & Anant",
    host2En: "Pranay 'Ji' & Anant",
    closingNote: 'All family members seek your loving blessings and presence.',

    // ─── GRAND CLOSING ───────────────────────────────────
    grandClosingLabel: 'Sacred Invitation',
    yourPresenceMeans: 'Your Presence Is Our Greatest Blessing',
    closingInvite:
      'With the infinite grace of the Divine and the blessings of our elders, you and your entire family are cordially invited to the auspicious wedding of Vibhuti and Akshay.',
    rsvpLabel: 'Please do honour us with your presence',
    withBlessings: 'Yours sincerely, the families',

    // ─── FOOTER ──────────────────────────────────────────
    footerShubhVivah: 'Shubh Vivah',
    footerSubtitle: 'Royal Jain Wedding Invitation',
    footerQuote:
      '"Your gracious presence shall be the greatest honour and joy of this celebration."',
    footerInvited: 'Cordially Invited',
    footerLocations: 'Udaipur • Firozabad',
    footerDates: '24 & 25 November 2026',
    footerMantra: '卐 Arhaṃ Namaḥ 卐',

    // ─── MUSIC PLAYER ────────────────────────────────────
    musicPlayingLabel: 'Namokar Mantra',
    musicPlayingSub: 'Now Playing',
    musicStoppedLabel: 'Play Music',
    musicStoppedSub: 'Sacred Mantra',
    musicPlayBtn: 'Play Namokar Mantra',
    musicStopBtn: 'Mute Music',

    // ─── SHARE CONTROLS ──────────────────────────────────
    shareWhatsApp: 'Share on WhatsApp',
    copyLink: 'Copy Link',
    linkCopied: 'Copied!',
    petalShower: 'Petal Shower',
  },
} as const;

export type TranslationKey = keyof typeof translations.hi;

