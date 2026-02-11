// Multi-language translations
const translations = {
    en: {
        // Navigation
        navConcepts: 'Core Concepts',
        navTools: 'Tools',
        navQuotes: 'Quotes',
        navCases: 'Case Studies',
        navAction: 'Action Items',

        // Hero Section
        heroLogoText: 'AI Efficiency',
        heroLogoBadge: 'BNI Chars',
        heroBadge: 'Exclusive for BNI Malaysia Chars Region',
        heroTitle: 'AI Efficiency Workshop',
        heroTitleHighlight: 'Course Review',
        heroSubtitle: 'Thank you for joining our 3.5-hour AI Workshop<br>Here are your exclusive post-course resources',
        heroStat1: 'Core Concepts',
        heroStat2: 'AI Tools',
        heroStat3: 'Key Quotes',
        heroDate: 'February 2026 (Before Chinese New Year)',
        heroOrganizer: 'Organized by: Ken (Chars ED) & Aki',

        // Core Concepts
        conceptsTag: 'Core Concepts',
        conceptsTitle: '5 Key Takeaways from This Course',
        concept1Title: 'The Pilot Mindset',
        concept1Desc: "You are the pilot, AI is your crew. The pilot is important and earns good money, but the pilot doesn't serve meals or clean toilets. AI is your team - you need to understand what AI can help you solve.",
        concept2Title: 'Use the Right Tool',
        concept2Desc: "You can't ask ChatGPT to make slides, just like you can't use Excel for presentations. It's not the tool's fault - you chose the wrong tool. Each AI tool has its specialty.",
        concept3Title: 'Free Tools Are Enough',
        concept3Desc: "Most people's AI skills are like your grandmother using an iPhone. Is there a difference between iPhone 17 Pro Max and a 2000 MYR Oppo for her? No.",
        concept4Title: 'Essential Skills for AI Era',
        concept4Desc: "AI will become like mobile internet - you can't possibly not know how to use it. It's not about knowing vs not knowing, but knowing vs being an expert. Become an expert!",
        concept5Title: 'Websites for AI',
        concept5Desc: "Future websites aren't for humans to browse - they're for AI. Your website needs more text; beautiful images mean nothing if AI can't read the text. 20% of US Black Friday traffic already comes from AI.",

        // Tools
        toolsTag: 'Tools',
        toolsTitle: '5 AI Tools from This Course',
        toolsDesc: 'All these tools are FREE to use!',
        tool1Name: 'Manus',
        tool1Desc: 'AI automatically creates beautiful slides, page by page. Just paste an article, click "Slides" button, wait 20 minutes and done.',
        tool1Use: 'Presentation',
        tool1Link: 'Try it →',
        tool2Name: 'NotebookLM',
        tool2Desc: "Google's AI Notebook. Upload materials for auto-analysis, generates slides, podcasts, videos, quizzes. Click all 9 buttons on the right!",
        tool2Use: 'Knowledge Management',
        tool2Link: 'Try it →',
        tool3Name: 'Gemini Nano Banana',
        tool3Desc: 'Google\'s image generation model. Create from scratch or modify existing. Use Pro mode for Chinese text. Look for the "banana" icon!',
        tool3Use: 'Image Generation',
        tool3Link: 'Try it →',
        tool4Name: 'Grok',
        tool4Desc: 'Elon Musk\'s AI. Turn images into 8-second videos. Click Image, upload photo, add Prompt to specify actions.',
        tool4Use: 'Image to Video',
        tool4Link: 'Try it →',
        tool5Name: 'Line Sticker Tool',
        tool5Desc: 'Teacher Feng\'s custom tool. Upload photos to create cute cartoon stickers with various poses (good morning, meeting, exercise...)',
        tool5Use: 'Cartoon Stickers',
        tool5Link: 'Ask teacher for link →',

        // Quotes
        quotesTag: 'Quotes',
        quotesTitle: 'Teacher Feng\'s Golden Words',
        quote1: 'You are the pilot, AI is your crew',
        quote2: 'QHPT - Quite Honestly Pretending to be True',
        quote3: 'Say important things many times - humans get angry, AI just notes "User is angry"',
        quote4: 'Whoever\'s not here becomes the product',
        quote5: 'Normally I charge, but for you - I won\'t charge',
        quote6: 'Used to envy others, now make others envy you',
        quote7: 'Give it one chance, it should get it done',
        quote8: '3 MYR for a presentation - expensive? Then don\'t learn!',

        // Cases
        casesTag: 'Case Studies',
        casesTitle: 'Examples Demonstrated in Class',
        case1Title: 'FamilyMart Presentation',
        case1Scenario: 'Scenario:',
        case1ScenarioText: 'Creating a proposal for Taiwan FamilyMart',
        case1Method: 'Method:',
        case1MethodText: 'Paste article to Manus → Click "Slides" → Wait 20 mins',
        case1Result: 'Result:',
        case1ResultText: 'Only 3 MYR, barely needs editing, ready to use',
        case2Title: 'Herbalife Product Comic',
        case2ScenarioText: 'Fun way to explain nutrition shake preparation',
        case2MethodText: 'Gemini research → Make 4-panel comic → Dragon Ball style',
        case2ResultText: 'Cute comic with Goku holding shake',
        case3Title: 'CNY Greeting Card',
        case3ScenarioText: 'Chinese New Year card for clients',
        case3MethodText: 'Gemini Nano Banana → "Make a 16:9 CNY card with English greeting"',
        case3ResultText: 'Beautiful CNY card, can add company name',
        case4Title: 'Product Lifestyle Photos',
        case4ScenarioText: 'Commercial-style photos for shampoo product',
        case4MethodText: 'Upload product → "Place in commercial studio, minimalist modern"',
        case4ResultText: 'Natural organic, luxurious elegant styles generated instantly',
        case5Title: 'TSMC Shareholder Meeting',
        case5ScenarioText: '90-min all-English meeting video hard to understand',
        case5MethodText: 'Upload to NotebookLM → Generate Podcast + Slides + Video',
        case5ResultText: 'Chinese podcast with emotion + complete analysis',

        // Tips
        tipsTag: 'Tips & Tricks',
        tipsTitle: 'Secrets to Make AI Listen Better',
        tip1Title: 'Manus Slides',
        tip1Item1: '✅ Must click "Slides" button to start',
        tip1Item2: '✅ Can provide website URL, AI fetches data',
        tip1Item3: '✅ Do other things while waiting',
        tip2Title: 'Gemini Nano Banana',
        tip2Item1: '✅ Find the "banana" icon in tools',
        tip2Item2: '✅ Use Pro mode for Chinese text',
        tip2Item3: '✅ When it fails, copy-paste "Give me image" multiple times',
        tip2Item4: '⚠️ Use teacher\'s link, don\'t search',
        tip3Title: 'NotebookLM',
        tip3Item1: '✅ Max 50 sources per Notebook',
        tip3Item2: '✅ Can\'t upload Excel/PPT (convert to PDF)',
        tip3Item3: '✅ Websites grab single pages, not entire sites',
        tip3Item4: '✅ Click all 9 buttons on right - FREE!',
        tip4Title: 'Grok Video',
        tip4Item1: '✅ Click Image tab to upload photo',
        tip4Item2: '✅ Add Prompt for actions/speech',
        tip4Item3: '✅ Faces may distort - use cartoon/Q-style',
        tip4Item4: '⚠️ Can\'t use others\' voices (copyright)',

        // Action
        actionTag: 'Action Items',
        actionTitle: '5 Things You Can Do Next',
        action1Title: 'Register for All Tools',
        action1Desc: 'Sign up for Manus, NotebookLM, Gemini, Grok - they\'re FREE, don\'t waste them!',
        action2Title: 'Create an AI Presentation with Your Company Data',
        action2Desc: 'Give your service intro or product description to Manus or NotebookLM, see how AI presents it',
        action3Title: 'Create Personal Q-style Stickers for Clients',
        action3Desc: 'Use Line Sticker tool for unique stickers - super memorable for CNY greetings!',
        action4Title: 'Upload Product PDF to NotebookLM for Podcast',
        action4Desc: 'Let AI turn your product materials into emotional podcasts - clients can listen while driving!',
        action5Title: 'Think: How to Add More Value for Clients?',
        action5Desc: '"Normally I charge, but for you - I won\'t" - Use AI to do more, show clients you care',

        // Instructor
        instructorTag: 'Instructor',
        instructorTitle: 'Huang Jing-Feng (Teacher Feng)',
        instructorSubtitle: 'Corporate AI Training Expert',
        instructorBio: 'Taiwan\'s leading corporate AI training expert, BNI senior member (13 years), Training Director of BNI West B District in New Taipei City. Core philosophy: "Know it, understand it, use it well, use it daily."',
        instructorStat1: '400+',
        instructorStat1Label: 'Corporate Clients',
        instructorStat2: '160',
        instructorStat2Label: 'Sessions in 2025',
        instructorStat3: '1000+',
        instructorStat3Label: 'Teaching Hours/Year',
        instructorClientsTitle: 'Clients (Partial List)',
        instructorClients: 'RICOH, ASUS, Nanshan Life, Shopee, NISSAN, TOYOTA, Mitsubishi, Digital Ministry, Workforce Development Agency...',

        // Referral
        referralTag: 'Referral Request',
        referralTitle: 'Referrals Teacher Feng is Looking For',
        referralDesc: 'If you know anyone in these categories, please help connect us!',
        referral1Title: 'HRD Companies',
        referral1Desc: 'Human Resource Development companies providing corporate training',
        referral1Value: 'Help HRD companies introduce AI training to their corporate clients, adding new services and revenue streams',
        referral2Title: 'Law Firms',
        referral2Desc: 'Law firms serving corporate clients',
        referral2Value: 'Help law firms\' corporate clients adopt AI to improve efficiency - becoming a value-added service for the firm',
        referral3Title: 'Accounting Firms',
        referral3Desc: 'Accounting firms serving corporate clients',
        referral3Value: 'Help accounting firms\' corporate clients with AI transformation - becoming a professional consulting partner',
        referralValueLabel: 'Value I Can Provide:',
        referralCtaText: 'If you know anyone matching these criteria, feel free to contact me via WhatsApp or Line!',

        // Footer
        footerAbout: 'About Instructor',
        footerName: 'Huang Jing-Feng (Teacher Feng)',
        footerTitle: 'Corporate AI Training Expert',
        footerCompany: 'Autolab Cloud Co., Ltd.',
        footerQuote: '"Know it, understand it, use it well, use it daily"',
        footerResources: 'Resources',
        footerWebsite: 'Official Website',
        footerBlog: 'Blog Articles',
        footerYoutube: 'YouTube Channel',
        footerCommunity: 'AI Student Community',
        footerLineCommunity: 'Line Community (Chinese)',
        footerWhatsAppCommunity: 'WhatsApp Community (English)',
        footerCopyright: 'AI Efficiency Workshop | BNI Malaysia Chars Region',
        footerRights: '© 2026 Autolab Cloud Co., Ltd. All Rights Reserved.'
    },
    'zh-tw': {
        // Navigation
        navConcepts: '核心觀念',
        navTools: '工具介紹',
        navQuotes: '金句摘錄',
        navCases: '實戰案例',
        navAction: '課後行動',

        // Hero Section
        heroLogoText: 'AI 效率實戰',
        heroLogoBadge: 'BNI Chars',
        heroBadge: '馬來西亞 BNI Chars 區域專屬',
        heroTitle: 'AI 效率實戰',
        heroTitleHighlight: '課後複習',
        heroSubtitle: '感謝參與 3.5 小時的 AI 工作坊<br>這是你的專屬課後複習資源',
        heroStat1: '核心觀念',
        heroStat2: 'AI 工具',
        heroStat3: '金句摘錄',
        heroDate: '2026 年 2 月（農曆新年前）',
        heroOrganizer: '主辦：Ken（Chars ED）& Aki',

        // Core Concepts
        conceptsTag: '核心觀念',
        conceptsTitle: '這堂課最重要的 5 個觀念',
        concept1Title: '機長心態',
        concept1Desc: '你是機長，AI 是機組人員。機長很重要、也賺很多錢，但機長不會去端餐點、不會去清廁所。AI 就是你的團隊，你要了解什麼 AI 能夠幫你解決問題。',
        concept2Title: '工具要用對',
        concept2Desc: '你不能叫 ChatGPT 做簡報，就像你不能用 Excel 做 Presentation 一樣。不是工具的錯，是你選錯工具。每個 AI 工具都有它最擅長的事情。',
        concept3Title: '免費工具就很夠用',
        concept3Desc: '大部分人使用 AI 的能力，就跟你 grandmother 使用 iPhone 一樣。用 iPhone 17 Pro Max 跟用 Oppo 2000 馬幣的，對她來說有差別嗎？沒有。',
        concept4Title: 'AI 時代的必備技能',
        concept4Desc: '以後 AI 就變成手機上網一樣，你不會用是不可能的。沒有分會用跟不會用，只分會用跟超級會用的差別。你要成為超級會用的人！',
        concept5Title: '網站給 AI 看',
        concept5Desc: '以後的網站不是給人類逛，是給 AI 逛。你的網站文字要多，圖片再漂亮，AI 看不懂文字就死定了。美國 Black Friday 已有 20% 流量來自 AI。',

        // Tools
        toolsTag: '工具介紹',
        toolsTitle: '課程教的 5 個 AI 工具',
        toolsDesc: '這些工具都不用付費就能使用！',
        tool1Name: 'Manus',
        tool1Desc: 'AI 自動做簡報，一頁一頁做得很漂亮。只要貼上文章，點「簡報」按鈕，等 20 分鐘就完成。',
        tool1Use: '簡報製作',
        tool1Link: '前往使用 →',
        tool2Name: 'NotebookLM',
        tool2Desc: 'Google AI 筆記本。上傳資料自動分析，可產出簡報、Podcast、影片、測驗題庫。右邊 9 個按鈕全部按一次！',
        tool2Use: '知識整理、內容生成',
        tool2Link: '前往使用 →',
        tool3Name: 'Gemini Nano Banana',
        tool3Desc: 'Google 圖像生成模型。可以無中生有，也可以改造合成。中文字要用 Pro 模式。找工具裡的「香蕉」圖示！',
        tool3Use: '圖片生成、產品圖',
        tool3Link: '前往使用 →',
        tool4Name: 'Grok',
        tool4Desc: 'Elon Musk 的 AI。可以把圖片變成 8 秒動態影片。點 Image 上傳照片，可加 Prompt 指定動作。',
        tool4Use: '圖片轉影片',
        tool4Link: '前往使用 →',
        tool5Name: 'Line Sticker 工具',
        tool5Desc: '阿峰老師自製工具。上傳照片自動變成 Q 版貼圖，有各種動作可以選（早安、晚安、開會中、運動...）',
        tool5Use: 'Q 版貼圖生成',
        tool5Link: '詢問老師取得連結 →',

        // Quotes
        quotesTag: '金句摘錄',
        quotesTitle: '阿峰老師的經典語錄',
        quote1: '你是機長，AI 是機組人員',
        quote2: 'QHPT 一本正經的胡說八道',
        quote3: '重要的事情講很多遍，你跟人這樣講話會生氣，你跟 AI 這樣講，他只會說 User is angry',
        quote4: '誰不在誰就當產品',
        quote5: '平常我都要收錢，但因為是你，我不收錢',
        quote6: '以前羨慕別人，現在你要讓別人來羨慕你',
        quote7: '給他一次機會，他應該就做出來了',
        quote8: '3 塊馬幣做一份簡報，貴不貴？貴喔！那你不要學好了',

        // Cases
        casesTag: '實戰案例',
        casesTitle: '課堂上示範的案例',
        case1Title: '全家便利商店簡報',
        case1Scenario: '情境：',
        case1ScenarioText: '要做給臺灣全家便利商店的提案簡報',
        case1Method: '做法：',
        case1MethodText: '把文章貼到 Manus → 點「簡報」按鈕 → 等 20 分鐘',
        case1Result: '成果：',
        case1ResultText: '花 3 馬幣，幾乎不用改，直接可用',
        case2Title: '賀寶芙產品漫畫',
        case2ScenarioText: '想用有趣方式介紹營養奶昔沖泡方式',
        case2MethodText: 'Gemini 搜尋資料 → 請做成四格漫畫 → 七龍珠風格繪製',
        case2ResultText: '孫悟空拿著奶昔的可愛漫畫',
        case3Title: '新年賀卡製作',
        case3ScenarioText: '想做華人新年賀卡給客戶',
        case3MethodText: 'Gemini Nano Banana → 「做一張 16:9 新年賀卡用英文祝福」',
        case3ResultText: '漂亮的新年賀卡，可加上自己公司名字',
        case4Title: '產品情境圖',
        case4ScenarioText: '洗髮精產品需要商業攝影風格照片',
        case4MethodText: '上傳產品照 → 「放在商業攝影棚簡約現代風格」',
        case4ResultText: '自然有機風、奢華高雅風等多種風格一秒生成',
        case5Title: 'TSMC 股東會分析',
        case5ScenarioText: '90 分鐘全英文股東會影片看不懂',
        case5MethodText: '上傳到 NotebookLM → 生成 Podcast + 簡報 + 影片',
        case5ResultText: '中文有情緒的 Podcast 解說 + 完整分析報告',

        // Tips
        tipsTag: '使用技巧',
        tipsTitle: '讓 AI 更聽話的秘訣',
        tip1Title: 'Manus 簡報',
        tip1Item1: '✅ 一定要點「簡報」按鈕才會開始製作',
        tip1Item2: '✅ 可以給網站 URL，AI 會自己抓資料',
        tip1Item3: '✅ 等待時可以做別的事',
        tip2Title: 'Gemini Nano Banana',
        tip2Item1: '✅ 找工具裡的「香蕉」圖示',
        tip2Item2: '✅ 中文字需要用 Pro 模式',
        tip2Item3: '✅ 失敗時複製貼上「給我圖片」多次',
        tip2Item4: '⚠️ 不要用搜尋找，用老師提供的連結',
        tip3Title: 'NotebookLM',
        tip3Item1: '✅ 一個 Notebook 最多 50 個資料',
        tip3Item2: '✅ 不能上傳 Excel/PPT（可轉 PDF）',
        tip3Item3: '✅ 網站是抓「單頁」不是整站',
        tip3Item4: '✅ 右邊 9 個按鈕全部按一次！不用錢！',
        tip4Title: 'Grok 影片',
        tip4Item1: '✅ 點 Image 標籤上傳照片',
        tip4Item2: '✅ 可加 Prompt 指定動作/說話內容',
        tip4Item3: '✅ 臉部可能會變形，建議用卡通/Q版',
        tip4Item4: '⚠️ 不能用別人的聲線（版權問題）',

        // Action
        actionTag: '課後行動',
        actionTitle: '接下來你可以做的 5 件事',
        action1Title: '註冊所有工具帳號',
        action1Desc: 'Manus、NotebookLM、Gemini、Grok 都註冊起來，免費的不用白不用！',
        action2Title: '用自己公司資料做一份 AI 簡報',
        action2Desc: '把你的服務介紹、產品說明丟給 Manus 或 NotebookLM，看看 AI 怎麼呈現',
        action3Title: '製作個人 Q 版貼圖發給客戶',
        action3Desc: '用 Line Sticker 工具做一套專屬貼圖，新年期間發給客戶超有記憶點！',
        action4Title: '把產品 PDF 上傳 NotebookLM 做 Podcast',
        action4Desc: '讓 AI 把你的產品資料變成有情緒的 Podcast，客戶邊開車邊聽！',
        action5Title: '思考：如何增加客戶服務價值？',
        action5Desc: '「平常我都要收錢，但因為是你，我不收錢」- 用 AI 做更多，讓客戶感受到你的用心',

        // Instructor
        instructorTag: '講師介紹',
        instructorTitle: '黃敬峰（AI 峰哥）',
        instructorSubtitle: '企業 AI 實戰培訓專家',
        instructorBio: '臺灣領先的企業 AI 實戰培訓專家，BNI 資深會員（13 年），臺灣新北市西 B 區培訓董事。核心理念：「會用、懂用、好用、每天用」。',
        instructorStat1: '400+',
        instructorStat1Label: '企業與機關合作',
        instructorStat2: '160',
        instructorStat2Label: '2025 年授課堂數',
        instructorStat3: '1000+',
        instructorStat3Label: '年授課時數',
        instructorClientsTitle: '服務客戶（部分）',
        instructorClients: 'RICOH、ASUS、南山人壽、Shopee、NISSAN、TOYOTA、Mitsubishi、行政院數位發展部、勞動力發展署...',

        // Referral
        referralTag: '引薦需求',
        referralTitle: '阿峰老師想要的引薦',
        referralDesc: '如果您認識以下類型的朋友，歡迎幫忙引薦！',
        referral1Title: 'HRD 人力資源發展公司',
        referral1Desc: '為企業客戶提供培訓服務的 HRD 公司',
        referral1Value: '協助 HRD 公司為其企業客戶導入 AI 培訓，增加服務項目與營收',
        referral2Title: '律師樓 / 法律事務所',
        referral2Desc: '服務企業客戶的律師事務所',
        referral2Value: '幫助律師樓的企業客戶導入 AI，提升客戶工作效率，成為律師樓的加值服務',
        referral3Title: '會計師事務所',
        referral3Desc: '服務企業客戶的會計師事務所',
        referral3Value: '協助會計師事務所的企業客戶進行 AI 轉型，成為事務所的專業顧問夥伴',
        referralValueLabel: '我能提供的價值：',
        referralCtaText: '如果您有認識的朋友符合以上條件，歡迎透過 WhatsApp 或 Line 聯繫我！',

        // Footer
        footerAbout: '講師介紹',
        footerName: '黃敬峰（AI 峰哥）',
        footerTitle: '企業 AI 實戰培訓專家',
        footerCompany: '交點文化股份有限公司',
        footerQuote: '「會用、懂用、好用、每天用」',
        footerResources: '相關資源',
        footerWebsite: '官方網站',
        footerBlog: '部落格文章',
        footerYoutube: 'YouTube 頻道',
        footerCommunity: 'AI 學員社群',
        footerLineCommunity: 'Line 社群（中文）',
        footerWhatsAppCommunity: 'WhatsApp 社群（英文）',
        footerCopyright: 'AI 效率實戰工作坊 | 馬來西亞 BNI Chars 區域',
        footerRights: '© 2026 交點文化股份有限公司. All Rights Reserved.'
    },
    'zh-cn': {
        // Navigation
        navConcepts: '核心观念',
        navTools: '工具介绍',
        navQuotes: '金句摘录',
        navCases: '实战案例',
        navAction: '课后行动',

        // Hero Section
        heroLogoText: 'AI 效率实战',
        heroLogoBadge: 'BNI Chars',
        heroBadge: '马来西亚 BNI Chars 区域专属',
        heroTitle: 'AI 效率实战',
        heroTitleHighlight: '课后复习',
        heroSubtitle: '感谢参与 3.5 小时的 AI 工作坊<br>这是你的专属课后复习资源',
        heroStat1: '核心观念',
        heroStat2: 'AI 工具',
        heroStat3: '金句摘录',
        heroDate: '2026 年 2 月（农历新年前）',
        heroOrganizer: '主办：Ken（Chars ED）& Aki',

        // Core Concepts
        conceptsTag: '核心观念',
        conceptsTitle: '这堂课最重要的 5 个观念',
        concept1Title: '机长心态',
        concept1Desc: '你是机长，AI 是机组人员。机长很重要、也赚很多钱，但机长不会去端餐点、不会去清厕所。AI 就是你的团队，你要了解什么 AI 能够帮你解决问题。',
        concept2Title: '工具要用对',
        concept2Desc: '你不能叫 ChatGPT 做简报，就像你不能用 Excel 做 Presentation 一样。不是工具的错，是你选错工具。每个 AI 工具都有它最擅长的事情。',
        concept3Title: '免费工具就很够用',
        concept3Desc: '大部分人使用 AI 的能力，就跟你 grandmother 使用 iPhone 一样。用 iPhone 17 Pro Max 跟用 Oppo 2000 马币的，对她来说有差别吗？没有。',
        concept4Title: 'AI 时代的必备技能',
        concept4Desc: '以后 AI 就变成手机上网一样，你不会用是不可能的。没有分会用跟不会用，只分会用跟超级会用的差别。你要成为超级会用的人！',
        concept5Title: '网站给 AI 看',
        concept5Desc: '以后的网站不是给人类逛，是给 AI 逛。你的网站文字要多，图片再漂亮，AI 看不懂文字就死定了。美国 Black Friday 已有 20% 流量来自 AI。',

        // Tools
        toolsTag: '工具介绍',
        toolsTitle: '课程教的 5 个 AI 工具',
        toolsDesc: '这些工具都不用付费就能使用！',
        tool1Name: 'Manus',
        tool1Desc: 'AI 自动做简报，一页一页做得很漂亮。只要贴上文章，点「简报」按钮，等 20 分钟就完成。',
        tool1Use: '简报制作',
        tool1Link: '前往使用 →',
        tool2Name: 'NotebookLM',
        tool2Desc: 'Google AI 笔记本。上传资料自动分析，可产出简报、Podcast、视频、测验题库。右边 9 个按钮全部按一次！',
        tool2Use: '知识整理、内容生成',
        tool2Link: '前往使用 →',
        tool3Name: 'Gemini Nano Banana',
        tool3Desc: 'Google 图像生成模型。可以无中生有，也可以改造合成。中文字要用 Pro 模式。找工具里的「香蕉」图示！',
        tool3Use: '图片生成、产品图',
        tool3Link: '前往使用 →',
        tool4Name: 'Grok',
        tool4Desc: 'Elon Musk 的 AI。可以把图片变成 8 秒动态视频。点 Image 上传照片，可加 Prompt 指定动作。',
        tool4Use: '图片转视频',
        tool4Link: '前往使用 →',
        tool5Name: 'Line Sticker 工具',
        tool5Desc: '阿峰老师自制工具。上传照片自动变成 Q 版贴图，有各种动作可以选（早安、晚安、开会中、运动...）',
        tool5Use: 'Q 版贴图生成',
        tool5Link: '询问老师取得链接 →',

        // Quotes
        quotesTag: '金句摘录',
        quotesTitle: '阿峰老师的经典语录',
        quote1: '你是机长，AI 是机组人员',
        quote2: 'QHPT 一本正经的胡说八道',
        quote3: '重要的事情讲很多遍，你跟人这样讲话会生气，你跟 AI 这样讲，他只会说 User is angry',
        quote4: '谁不在谁就当产品',
        quote5: '平常我都要收钱，但因为是你，我不收钱',
        quote6: '以前羡慕别人，现在你要让别人来羡慕你',
        quote7: '给他一次机会，他应该就做出来了',
        quote8: '3 块马币做一份简报，贵不贵？贵喔！那你不要学好了',

        // Cases
        casesTag: '实战案例',
        casesTitle: '课堂上示范的案例',
        case1Title: '全家便利商店简报',
        case1Scenario: '情境：',
        case1ScenarioText: '要做给台湾全家便利商店的提案简报',
        case1Method: '做法：',
        case1MethodText: '把文章贴到 Manus → 点「简报」按钮 → 等 20 分钟',
        case1Result: '成果：',
        case1ResultText: '花 3 马币，几乎不用改，直接可用',
        case2Title: '贺宝芙产品漫画',
        case2ScenarioText: '想用有趣方式介绍营养奶昔冲泡方式',
        case2MethodText: 'Gemini 搜索资料 → 请做成四格漫画 → 七龙珠风格绘制',
        case2ResultText: '孙悟空拿着奶昔的可爱漫画',
        case3Title: '新年贺卡制作',
        case3ScenarioText: '想做华人新年贺卡给客户',
        case3MethodText: 'Gemini Nano Banana → 「做一张 16:9 新年贺卡用英文祝福」',
        case3ResultText: '漂亮的新年贺卡，可加上自己公司名字',
        case4Title: '产品情境图',
        case4ScenarioText: '洗发精产品需要商业摄影风格照片',
        case4MethodText: '上传产品照 → 「放在商业摄影棚简约现代风格」',
        case4ResultText: '自然有机风、奢华高雅风等多种风格一秒生成',
        case5Title: 'TSMC 股东会分析',
        case5ScenarioText: '90 分钟全英文股东会视频看不懂',
        case5MethodText: '上传到 NotebookLM → 生成 Podcast + 简报 + 视频',
        case5ResultText: '中文有情绪的 Podcast 解说 + 完整分析报告',

        // Tips
        tipsTag: '使用技巧',
        tipsTitle: '让 AI 更听话的秘诀',
        tip1Title: 'Manus 简报',
        tip1Item1: '✅ 一定要点「简报」按钮才会开始制作',
        tip1Item2: '✅ 可以给网站 URL，AI 会自己抓资料',
        tip1Item3: '✅ 等待时可以做别的事',
        tip2Title: 'Gemini Nano Banana',
        tip2Item1: '✅ 找工具里的「香蕉」图示',
        tip2Item2: '✅ 中文字需要用 Pro 模式',
        tip2Item3: '✅ 失败时复制粘贴「给我图片」多次',
        tip2Item4: '⚠️ 不要用搜索找，用老师提供的链接',
        tip3Title: 'NotebookLM',
        tip3Item1: '✅ 一个 Notebook 最多 50 个资料',
        tip3Item2: '✅ 不能上传 Excel/PPT（可转 PDF）',
        tip3Item3: '✅ 网站是抓「单页」不是整站',
        tip3Item4: '✅ 右边 9 个按钮全部按一次！不用钱！',
        tip4Title: 'Grok 视频',
        tip4Item1: '✅ 点 Image 标签上传照片',
        tip4Item2: '✅ 可加 Prompt 指定动作/说话内容',
        tip4Item3: '✅ 脸部可能会变形，建议用卡通/Q版',
        tip4Item4: '⚠️ 不能用别人的声线（版权问题）',

        // Action
        actionTag: '课后行动',
        actionTitle: '接下来你可以做的 5 件事',
        action1Title: '注册所有工具账号',
        action1Desc: 'Manus、NotebookLM、Gemini、Grok 都注册起来，免费的不用白不用！',
        action2Title: '用自己公司资料做一份 AI 简报',
        action2Desc: '把你的服务介绍、产品说明丢给 Manus 或 NotebookLM，看看 AI 怎么呈现',
        action3Title: '制作个人 Q 版贴图发给客户',
        action3Desc: '用 Line Sticker 工具做一套专属贴图，新年期间发给客户超有记忆点！',
        action4Title: '把产品 PDF 上传 NotebookLM 做 Podcast',
        action4Desc: '让 AI 把你的产品资料变成有情绪的 Podcast，客户边开车边听！',
        action5Title: '思考：如何增加客户服务价值？',
        action5Desc: '「平常我都要收钱，但因为是你，我不收钱」- 用 AI 做更多，让客户感受到你的用心',

        // Instructor
        instructorTag: '讲师介绍',
        instructorTitle: '黄敬峰（AI 峰哥）',
        instructorSubtitle: '企业 AI 实战培训专家',
        instructorBio: '台湾领先的企业 AI 实战培训专家，BNI 资深会员（13 年），台湾新北市西 B 区培训董事。核心理念：「会用、懂用、好用、每天用」。',
        instructorStat1: '400+',
        instructorStat1Label: '企业与机关合作',
        instructorStat2: '160',
        instructorStat2Label: '2025 年授课堂数',
        instructorStat3: '1000+',
        instructorStat3Label: '年授课时数',
        instructorClientsTitle: '服务客户（部分）',
        instructorClients: 'RICOH、ASUS、南山人寿、Shopee、NISSAN、TOYOTA、Mitsubishi、行政院数位发展部、劳动力发展署...',

        // Referral
        referralTag: '引荐需求',
        referralTitle: '阿峰老师想要的引荐',
        referralDesc: '如果您认识以下类型的朋友，欢迎帮忙引荐！',
        referral1Title: 'HRD 人力资源发展公司',
        referral1Desc: '为企业客户提供培训服务的 HRD 公司',
        referral1Value: '协助 HRD 公司为其企业客户导入 AI 培训，增加服务项目与营收',
        referral2Title: '律师楼 / 法律事务所',
        referral2Desc: '服务企业客户的律师事务所',
        referral2Value: '帮助律师楼的企业客户导入 AI，提升客户工作效率，成为律师楼的加值服务',
        referral3Title: '会计师事务所',
        referral3Desc: '服务企业客户的会计师事务所',
        referral3Value: '协助会计师事务所的企业客户进行 AI 转型，成为事务所的专业顾问伙伴',
        referralValueLabel: '我能提供的价值：',
        referralCtaText: '如果您有认识的朋友符合以上条件，欢迎通过 WhatsApp 或 Line 联系我！',

        // Footer
        footerAbout: '讲师介绍',
        footerName: '黄敬峰（AI 峰哥）',
        footerTitle: '企业 AI 实战培训专家',
        footerCompany: '交点文化股份有限公司',
        footerQuote: '「会用、懂用、好用、每天用」',
        footerResources: '相关资源',
        footerWebsite: '官方网站',
        footerBlog: '博客文章',
        footerYoutube: 'YouTube 频道',
        footerCommunity: 'AI 学员社群',
        footerLineCommunity: 'Line 社群（中文）',
        footerWhatsAppCommunity: 'WhatsApp 社群（英文）',
        footerCopyright: 'AI 效率实战工作坊 | 马来西亚 BNI Chars 区域',
        footerRights: '© 2026 交点文化股份有限公司. All Rights Reserved.'
    }
};

// Function to update page language
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;

    // Update body class for font family
    document.body.className = 'lang-' + lang;

    // Update all translatable elements
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang-switch') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang-switch');
            setLanguage(lang);
        });
    });
});
