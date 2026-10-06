/* VOICE CONTROL — lenses-s7.js · Stage 07 lesson lenses */
Object.assign(LENSES, {
  't7l1s1': {
    thai: 'เมื่อมีคนอื่นทำงานให้เรา เช่น ช่างตัดผม ช่างซ่อมโทรศัพท์ หรือร้านตัดเสื้อ ภาษาอังกฤษใช้โครงสร้าง have + สิ่งของ + V3 เช่น I had my phone repaired. หมายความว่า ฉันเอาโทรศัพท์ไปให้ช่างซ่อม ช่างเป็นคนซ่อม ไม่ใช่ฉัน ประธานคือ "ลูกค้า" ส่วนสิ่งของเป็นฝ่ายที่ถูกทำ จึงต้องใช้ V3 เสมอ ห้ามใช้ V1 และห้ามใส่ to เช่น have it fix หรือ have it to fix ผิดทั้งคู่ ภาษาไทยมักพูดว่า "ให้ช่างซ่อม" และบอกว่าใครเป็นคนทำ แต่ภาษาอังกฤษไม่จำเป็นต้องบอก เพราะคนทำไม่ใช่ประเด็น ใช้ get แทน have ได้ ความหมายเหมือนกัน แค่เป็นกันเองกว่า เช่น I got my hair cut. วิธีเช็กง่าย ๆ คือถามตัวเองว่า "เราทำเองหรือเปล่า" ถ้าไม่ได้ทำเอง ให้วางสิ่งของไว้หลัง have แล้วตามด้วย V3',
    analogy: { title: 'The Grab order', text: 'You order lunch on Grab: you choose and you pay, but someone else cooks and someone else rides. You say <em>I <b>had</b> lunch <b>delivered</b></em>. You are the customer at every step, and the rider\'s name never appears. That is <em>have something done</em>: you stay at the top, and the job happens below you.' },
    trap: 'A test puts <em>had serviced it</em> next to <em>had it serviced</em>. Same words, opposite meaning: the first is the past perfect (you did it), the second is the causative (someone did it for you). Dodge: find the object — if it sits between <em>have</em> and the V3, someone else did the job.',
    map: { center: 'have it done', branches: [
      { label: 'Form', leaves: ['have + thing + V3', 'no to, no base form'] },
      { label: 'Meaning', leaves: ['someone else does it', 'you arrange or pay'] },
      { label: 'Services', leaves: ['had my hair cut', 'have the AC cleaned'] },
      { label: 'Get twin', leaves: ['got my bike fixed', 'same meaning, informal'] },
      { label: 'Self-check', leaves: ['Did I do it myself?', 'No: have it done'] }
    ] },
    story: { title: 'Nong Bot Goes to the Barber', panels: [
      { who: 'Ploy', text: 'Bot, your head is so shiny! Did you go to the barber?' },
      { who: 'Nong Bot', text: 'Yes! I cut my hair at the barber\'s. Beep!' },
      { who: 'Fah', text: 'You cut it? So the barber just watched you?' },
      { who: 'Nong Bot', text: 'No, he held the scissors. But I paid, so I cut it. Logic!' },
      { who: 'T.Chris', text: 'Paying doesn\'t make you the barber, Bot. Say <em>I <b>had</b> my hair <b>cut</b></em>: the thing in the middle, the V3 at the end.' }
    ], moral: 'If someone else does the job, put the thing after <em>have</em> and finish with a past participle.' },
    chant: { title: 'Have It Done', beat: 'kick-kick-clap (4/4)', lines: [
      'I don\'t fix it — I <b>have it fixed</b>!',
      'I don\'t cut it — I <b>have it cut</b>!',
      'Thing in the middle, V3 at the end,',
      'No <em>to</em>, no base form — that\'s the trend!',
      'Phone or hair or bike or car,',
      '<b>Have it done</b> — the customer\'s the star!'
    ] },
    moves: [
      { move: 'Point to yourself', says: 'I\'m the customer.' },
      { move: 'Hand an imaginary phone to a partner', says: 'I <b>have</b> my phone…' },
      { move: 'Partner mimes fixing it with a screwdriver', says: '…<b>repaired</b>!' },
      { move: 'Wag a finger', says: 'No <em>to</em>! Not <s>have it to repair</s>!' }
    ]
  },

  't7l1s2': {
    thai: 'โครงสร้าง have + สิ่งของ + V3 ไม่ได้ใช้แค่กับบริการที่เราจ้าง แต่ยังใช้เล่าเรื่องร้าย ๆ ที่เกิดขึ้นกับเราหรือกับของของเรา โดยที่เราไม่ได้ต้องการ เช่น She had her bag stolen. หมายความว่า เธอโดนขโมยกระเป๋า ไม่ได้แปลว่าเธอจ้างขโมย รูปประโยคเหมือนเดิมทุกอย่าง บริบทเป็นตัวบอกความหมาย กริยาที่เจอบ่อยคือ stolen, broken, damaged, cancelled เช่น We had our flight cancelled. ถ้าสาเหตุสำคัญ ใส่ by ได้ เช่น had their homes damaged by the flood ระวังสองประโยคนี้ She stole her bag. และ She had stolen her bag. ทั้งสองประโยคทำให้เธอกลายเป็นขโมยเสียเอง ภาษาไทยอาจใช้คำว่า "โดน" แต่ภาษาอังกฤษไม่มีคำแปลของ "โดน" ในประโยคนี้เลย แค่วางสิ่งของไว้หลัง have แล้วตามด้วย V3',
    analogy: { title: 'One stage, two shows', text: 'Picture one stage set used for two plays. In the morning it is a salon: <em>I <b>had</b> my nails <b>done</b></em>. In the evening it is a crime drama: <em>I <b>had</b> my phone <b>stolen</b></em>. The furniture never moves — <em>have</em>, thing, V3 — only the story changes.' },
    trap: 'A test may offer <em>had stolen her phone</em> beside <em>had her phone stolen</em>. The first turns the victim into the thief. Dodge: ask "Who suffered?" The person who suffered is the subject, the thing comes next, and the V3 comes last.',
    map: { center: 'Bad experience', branches: [
      { label: 'Form', leaves: ['have + thing + V3', 'same as the service form'] },
      { label: 'Meaning', leaves: ['something bad happened', 'not planned, not wanted'] },
      { label: 'Common V3', leaves: ['stolen, broken', 'damaged, cancelled'] },
      { label: 'by-phrase', leaves: ['fine if the cause matters', '...damaged by the flood'] },
      { label: 'Trap', leaves: ['had stolen her bag', '= she was the thief!'] }
    ] },
    story: { title: 'Nong Bot Reports a Crime', panels: [
      { who: 'Mai', text: 'Bot, are you OK? You look sad.' },
      { who: 'Nong Bot', text: 'I stole my battery at the night market. Beep… boop.' },
      { who: 'Pim', text: 'You stole your own battery? Should we call the police on you?' },
      { who: 'Nong Bot', text: 'No! Someone took it while I was buying mango sticky rice.' },
      { who: 'T.Chris', text: 'Then you <em><b>had</b> your battery <b>stolen</b></em>, Bot. You stay the subject, and the thief stays out of the sentence.' }
    ], moral: 'When something bad happens to you, use <em>have</em> + thing + V3 — and never turn yourself into the thief.' },
    chant: { title: 'Bad Day Chant', beat: 'kick-kick-clap (4/4)', lines: [
      'Bag on the BTS — <b>had it stolen</b>!',
      'Screen on the floor — <b>had it broken</b>!',
      'Flight to Phuket — <b>had it cancelled</b>!',
      'Didn\'t want it, didn\'t plan it,',
      '<em>Have</em>, then the thing, then V3 — I can stand it!',
      'Who suffered? Me! Who did it? Not me!'
    ] },
    moves: [
      { move: 'Hug an imaginary bag', says: 'My bag…' },
      { move: 'Look around in shock', says: 'I <b>had</b> my bag…' },
      { move: 'Mime someone running away', says: '…<b>stolen</b>!' },
      { move: 'Point at yourself and shake your head', says: 'Not <s>I stole my bag</s>!' }
    ]
  },

  't7l1s3': {
    thai: 'ในโครงสร้าง have something done คำว่า have เป็นกริยาแท้ ไม่ใช่กริยาช่วย ดังนั้นเวลาเปลี่ยนกาล ให้เปลี่ยนแค่ have ส่วน V3 อยู่เหมือนเดิม เช่น I have it cut, I\'m having it cut, I had it cut, I\'ve had it cut เวลาทำประโยคคำถามและปฏิเสธต้องใช้ do/does/did เช่น Did you have your phone fixed? และ I didn\'t have it fixed. ห้ามพูดว่า Had you your phone fixed? ถ้าเป็น present perfect จะมี have สองตัว เช่น Have you had your eyes tested? อีกเรื่องที่สำคัญมากคือตำแหน่งของกรรม I had my hair cut แปลว่าให้ช่างตัดผมให้ แต่ I had cut my hair เป็น past perfect แปลว่าฉันตัดผมเองก่อนเหตุการณ์อื่นในอดีต และหลัง need หรือ want ต้องมี to ก่อน have เช่น I need to have my bike repaired.',
    analogy: { title: 'Engine and carriages', text: 'Think of the sentence as a BTS train. <em>Have</em> is the engine: it changes the tense, and it calls <em>do/did</em> for questions and negatives. The carriages — the thing and the V3 — never change. <em><b>Did</b> you <b>have</b> it fixed? <b>Has</b> she <b>had</b> it fixed?</em> The engine changes; the carriages ride along exactly the same.' },
    trap: 'Tests offer <em>Had you…?</em> as a question because it looks like the past perfect. Dodge: in this pattern <em>have</em> is a main verb, so ask <em>Did you have…?</em> or <em>Have you had…?</em> — and check where the object sits before you decide who did the job.',
    map: { center: 'Have-it-done forms', branches: [
      { label: 'Tense on have', leaves: ['have / am having / had', 'have had / will have'] },
      { label: 'Questions', leaves: ['Did you have it fixed?', 'Have you had it fixed?'] },
      { label: 'Negatives', leaves: ['I didn\'t have it fixed', 'I haven\'t had it fixed'] },
      { label: 'Word order', leaves: ['had my hair cut = salon', 'had cut my hair = me'] },
      { label: 'After need', leaves: ['need to have it done', 'not: need have it done'] }
    ] },
    story: { title: 'Nong Bot Asks a Question', panels: [
      { who: 'Nan', text: 'Bot, your screen looks brand new!' },
      { who: 'Nong Bot', text: 'Thank you. Had you your screen replaced too, Nan? Beep!' },
      { who: 'Nan', text: 'Huh? That sounds like a robot from the year 1850.' },
      { who: 'Nong Bot', text: '<em>Have</em> is a helper verb. Helpers jump to the front. Rule 42!' },
      { who: 'T.Chris', text: 'Not in this pattern, Bot. Here <em>have</em> is a main verb, so ask <em><b>Did</b> you <b>have</b> your screen replaced?</em>' }
    ], moral: 'In <em>have it done</em>, questions and negatives use <em>do/does/did</em>, and only <em>have</em> changes for tense.' },
    chant: { title: 'Did You Have It?', beat: 'kick-kick-clap (4/4)', lines: [
      '<b>Did</b> you <b>have</b> it fixed? Yes, I did!',
      'I <b>didn\'t have</b> it fixed — no, I didn\'t, kid!',
      '<b>Have</b> you <b>had</b> it cut? Two haves, that\'s fine!',
      '<em>Had</em> it <em>cut</em> — that\'s the barber\'s line,',
      '<em>Had cut</em> it — that one\'s mine!',
      'Only <em>have</em> moves; the V3 stays in line!'
    ] },
    moves: [
      { move: 'Hold an invisible microphone out to a partner', says: '<b>Did</b> you <b>have</b> it fixed?' },
      { move: 'Shake your head and cross your arms', says: 'I <b>didn\'t have</b> it fixed.' },
      { move: 'Mime cutting your own hair', says: 'I <em>had cut</em> my hair — me!' },
      { move: 'Lean back in an imaginary salon chair', says: 'I <em>had</em> my hair <em>cut</em> — the barber!' }
    ]
  },

  't7l2s1': {
    thai: 'ถ้าเราอยากบอกชื่อคนที่ลงมือทำงานด้วย ให้ใช้โครงสร้าง have + คน + V1 (กริยาช่องหนึ่งไม่มี to) เช่น T.Chris had the class leaders collect the worksheets. หมายความว่า ครูสั่งให้หัวหน้าห้องเก็บใบงาน และหัวหน้าห้องก็ทำ โครงสร้างนี้ฟังดูเป็นการสั่งงานหรือการจัดการของคนที่มีอำนาจ เช่น ครู ผู้จัดการ หรือลูกค้า และค่อนข้างเป็นทางการ จุดที่คนไทยพลาดบ่อยคือใส่ to เพราะติดมาจาก ask someone to หรือ tell someone to แต่หลัง have + คน ห้ามมี to เด็ดขาด เช่น had him to check ผิด ต้องเป็น had him check วิธีเลือกให้ดูคำที่อยู่หลัง have ถ้าเป็นคนที่ลงมือทำ ใช้ V1 ถ้าเป็นสิ่งของที่ถูกทำ ใช้ V3 เช่น had the email sent กับ had her assistant send the email',
    analogy: { title: 'The class captain\'s clipboard', text: 'The class captain holds the clipboard and gives out jobs: <em>She <b>had</b> Mai <b>clean</b> the board and <b>had</b> Ton <b>carry</b> the chairs.</em> Every name on the clipboard is followed by a job in its plain base form. Nobody on the list gets a <em>to</em> — the captain\'s voice is enough.' },
    trap: 'The exam slips in <em>had the finalists to practise</em>, which feels right because <em>tell them to</em> and <em>ask them to</em> take <em>to</em>. Dodge: after <em>have</em> + person, the verb follows directly, with no <em>to</em> in between.',
    map: { center: 'have someone do', branches: [
      { label: 'Form', leaves: ['have + person + base verb', 'no to!'] },
      { label: 'Meaning', leaves: ['an instruction', 'from someone in charge'] },
      { label: 'Examples', leaves: ['had us rewrite it', 'have a driver meet us'] },
      { label: 'Compare', leaves: ['have it sent = thing + V3', 'have her send it'] },
      { label: 'Trap', leaves: ['had him to check', 'tell/ask take to; have no'] }
    ] },
    story: { title: 'Nong Bot the Manager', panels: [
      { who: 'Pim', text: 'Bot, you were café manager for the school fair. How did it go?' },
      { who: 'Nong Bot', text: 'Excellent. I had Mint to make the coffee and had Earth to wash the cups. Beep!' },
      { who: 'Mint', text: 'You did. But why do you say it like a bad translation?' },
      { who: 'Nong Bot', text: 'Tell someone <em>to</em>, ask someone <em>to</em>… so have someone <em>to</em>!' },
      { who: 'T.Chris', text: 'Good management, bad grammar, Bot. <em>Have</em> + person takes the base form: <em>I <b>had</b> Mint <b>make</b> the coffee.</em>' }
    ], moral: 'After <em>have</em> + a person, the verb comes straight away, with no <em>to</em>.' },
    chant: { title: 'No To for Have', beat: 'kick-kick-clap (4/4)', lines: [
      'I <b>had</b> him <b>check</b> it, I <b>had</b> her <b>call</b>,',
      'I <b>had</b> them <b>clean</b> the classroom hall!',
      'Person after <em>have</em>, verb comes next,',
      'Drop the <em>to</em> from the text!',
      '<em>Tell</em> takes <em>to</em>, and <em>ask</em> does too,',
      'But <em>have</em> + person? No <em>to</em> for you!'
    ] },
    moves: [
      { move: 'Hold an imaginary clipboard', says: 'I\'m in charge.' },
      { move: 'Point at a classmate', says: 'I <b>had</b> Mai…' },
      { move: 'Mime wiping a whiteboard', says: '…<b>clean</b> the board.' },
      { move: 'Make a big X with your arms', says: 'No <em>to</em>!' }
    ]
  },

  't7l2s2': {
    thai: 'get + คน + to + V1 ใช้เมื่อเราโน้มน้าวหรือชักชวนให้ใครทำอะไรสักอย่าง และมักต้องใช้ความพยายาม เช่น I finally got my brother to lend me his camera. หมายความว่า ในที่สุดฉันก็กล่อมน้องชายจนเขายอมให้ยืมกล้อง ความหมายนี้เป็นกันเองและใช้บ่อยในชีวิตประจำวัน ข้อสำคัญคือ get ต่างจาก have, make และ let ตรงที่ต้องมี to ทุกครั้ง เช่น got him to help ถูก แต่ got him help ผิด ลองเทียบระดับความแรง have someone do คือสั่งแล้วคาดว่าเขาจะทำ get someone to do คือต้องโน้มน้าว ask someone to do คือขอร้อง ซึ่งเขาอาจปฏิเสธก็ได้ อย่าสับสนกับ get + สิ่งของ + V3 เช่น got it checked ซึ่งไม่ได้บอกว่าใครทำ',
    analogy: { title: 'The persuasion bridge', text: 'Picture a small bridge between you and the other person. Persuading them means walking across it — and the bridge is called <em>to</em>. <em>I <b>got</b> my mum <b>to</b> let me go.</em> Without the bridge, the persuasion never reaches her: <s>I got my mum let me go</s>.' },
    trap: 'Because <em>have</em>, <em>make</em> and <em>let</em> all drop <em>to</em>, tests offer <em>got him do it</em> as a near miss. Dodge: <em>get</em> + person is the one family member that always keeps <em>to</em>.',
    map: { center: 'get someone to do', branches: [
      { label: 'Form', leaves: ['get + person + to + verb', 'always to'] },
      { label: 'Meaning', leaves: ['persuade someone', 'it took some effort'] },
      { label: 'Strength', leaves: ['have sb do: instruct', 'ask sb to do: request'] },
      { label: 'Examples', leaves: ['got Dad to drive me', 'got the printer to work'] },
      { label: 'Do not mix', leaves: ['get it done: thing + V3', 'get him to do: person'] }
    ] },
    story: { title: 'Nong Bot Tries to Persuade', panels: [
      { who: 'Fah', text: 'Bot, did you persuade T.Chris to move the test?' },
      { who: 'Nong Bot', text: 'Yes! I got him move it to Friday. Beep!' },
      { who: 'Ploy', text: 'Wow! How did you get him… wait, what did you just say?' },
      { who: 'Nong Bot', text: 'Have, make, let: no <em>to</em>. So get: no <em>to</em>. Pattern complete!' },
      { who: 'T.Chris', text: 'Pattern broken, Bot. <em>Get</em> always keeps it: <em>you <b>got</b> me <b>to move</b> it</em>. And it\'s still on Thursday.' }
    ], moral: 'With <em>get</em> + person, always keep <em>to</em> before the next verb.' },
    chant: { title: 'Get Them To', beat: 'kick-kick-clap (4/4)', lines: [
      'I <b>got</b> my friend <b>to help</b> me out,',
      'I <b>got</b> my dad <b>to drive</b> — no doubt!',
      '<em>Have</em> drops <em>to</em>, and <em>make</em> does too,',
      '<em>Let</em> drops <em>to</em> — but <em>get</em>? Not you!',
      'Persuade, persuade, it\'s hard to do,',
      '<b>Get</b> them <b>to</b>, <b>get</b> them <b>to</b>!'
    ] },
    moves: [
      { move: 'Put your hands together and beg', says: 'Please, please…' },
      { move: 'Point at a partner', says: 'I <b>got</b> her…' },
      { move: 'Draw a bridge in the air with one hand', says: '…<b>to</b>…' },
      { move: 'Partner gives a thumbs up', says: '…<b>help</b> me!' }
    ]
  },

  't7l2s3': {
    thai: 'have something done กับ get something done มีความหมายเหมือนกัน คือมีคนอื่นทำให้ ต่างกันแค่ get เป็นกันเองกว่าเล็กน้อย ทั้งสองแบบถูก จึงไม่ต้องเสียเวลาเลือกระหว่าง have กับ get สิ่งที่ต้องตัดสินใจจริง ๆ คือคำที่ตามหลังกริยา ถ้าเป็นสิ่งของที่ถูกทำ ใช้ V3 เช่น have the window cleaned หรือ get the window cleaned ถ้าเป็นคนที่ลงมือทำ หลัง have ใช้ V1 เช่น have the cleaner clean it แต่หลัง get ต้องมี to เช่น get the cleaner to clean it สรุปมีสี่รูปที่ถูก have it done, get it done, have him do it, get him to do it ส่วนรูปที่ผิดเกิดจากการผสมกันมั่ว เช่น have it to do, get him do it, have him to do it ในงานเขียนทางการ have something done ปลอดภัยกว่า',
    analogy: { title: 'The four-cell grid', text: 'Draw a 2 × 2 grid. Across the top: <em>have</em> and <em>get</em>. Down the side: <em>thing</em> and <em>person</em>. Fill it with one job: <em>have it fixed · get it fixed · have him fix it · get him to fix it</em>. Only one cell has <em>to</em> — the bottom-right corner. Every mistake is a word from the wrong cell.' },
    trap: 'A test will not make <em>have it done</em> and <em>get it done</em> fight each other, because both are right. It tests the verb form after the object: <em>got it check</em>, <em>got a photographer take</em>, <em>had the artist to paint</em>. Dodge: thing → V3; person → base after <em>have</em>, <em>to</em> after <em>get</em>.',
    map: { center: 'Four shapes', branches: [
      { label: 'Thing + V3', leaves: ['have it fixed', 'get it fixed'] },
      { label: 'Person + verb', leaves: ['have him fix it', 'get him to fix it'] },
      { label: 'have vs get', leaves: ['same meaning', 'get = more informal'] },
      { label: 'Only one to', leaves: ['get + person + to', 'nowhere else'] },
      { label: 'Broken mixes', leaves: ['have it to fix', 'get him fix it'] }
    ] },
    story: { title: 'Nong Bot Picks a Fight', panels: [
      { who: 'Mint', text: 'I got my bike fixed yesterday.' },
      { who: 'Nong Bot', text: 'ERROR! The correct form is <em>had</em> my bike fixed. Get is banned. Beep!' },
      { who: 'Mint', text: 'Banned? My mum says it every day.' },
      { who: 'Nong Bot', text: 'Then she also had my bike to fix. And got the mechanic fix it. Beep beep!' },
      { who: 'T.Chris', text: 'Backwards, Bot. <em>Got it fixed</em> is fine — <em>have</em> and <em>get</em> mean the same. Your two sentences are the broken ones: <em>had it <b>fixed</b></em>, <em>got the mechanic <b>to fix</b> it</em>.' }
    ], moral: 'Don\'t fight over <em>have</em> or <em>get</em>; check the verb form after the thing or the person.' },
    chant: { title: 'Four Ways', beat: 'kick-kick-clap (4/4)', lines: [
      '<b>Have it fixed</b>, <b>get it fixed</b>,',
      'Same idea, so don\'t get mixed!',
      '<b>Have him fix it</b>, base form, clean,',
      '<b>Get him to fix it</b> — <em>to</em> in between!',
      'Thing takes V3, person takes a verb,',
      'Only <em>get</em> + person takes <em>to</em> — that\'s the word!'
    ] },
    moves: [
      { move: 'Draw a square in the air and cut it into four', says: 'Four shapes!' },
      { move: 'Hold up an imaginary phone', says: 'Thing: <b>get it fixed</b>.' },
      { move: 'Point at a partner', says: 'Person: <b>have him fix it</b>.' },
      { move: 'Point again and hold up a finger', says: 'Get + person: <b>to</b>!' }
    ]
  },

  't7l3s1': {
    thai: 'ประโยค active ของ make ใช้ make + คน + V1 โดยไม่มี to เช่น The coach made us run ten laps. (โค้ชบังคับให้เราวิ่งสิบรอบ) แต่เมื่อเปลี่ยนเป็น passive คำว่า to จะกลับมา เป็น be made to + V1 เช่น We were made to run ten laps. ตรงนี้เป็นจุดพิเศษ เพราะปกติ active กับ passive ต่างกันแค่ be + V3 แต่ make ต้องเพิ่ม to ด้วย ข้อผิดที่เจอบ่อยมีสองแบบ คือ We were made run (ลืม to ใน passive) และ The coach made us to run (ใส่ to ใน active) ใช้ passive เมื่อคนที่ถูกบังคับเป็นหัวข้อของประโยค และไม่จำเป็นต้องบอกว่าใครบังคับ กาลเปลี่ยนที่ be เช่น is made to, was made to, has been made to ส่วนกริยาหลัง to เป็น V1 เสมอ และอย่าลืมว่าสิ่งของก็เป็นผู้กระทำได้ เช่น The storm made everyone run. ใช้ active',
    analogy: { title: 'The to-switch', text: 'Imagine a light switch labelled <em>to</em>. In the active it is OFF: <em>They <b>made</b> us <b>wait</b>.</em> Flip into the passive and it clicks ON: <em>We <b>were made to wait</b>.</em> Same verb, same meaning — but the switch moves every time the voice changes.' },
    trap: 'Tests offer <em>was made sweep</em> beside <em>was made to sweep</em>, and <em>made everyone to run</em> beside <em>made everyone run</em>. Dodge: decide the voice first (forced, or forcing?), then flip the <em>to</em>-switch: passive ON, active OFF.',
    map: { center: 'make → be made to', branches: [
      { label: 'Active', leaves: ['make + person + base', 'made us run'] },
      { label: 'Passive', leaves: ['be made + to + base', 'we were made to run'] },
      { label: 'Tense on be', leaves: ['is / was made to', 'has been made to'] },
      { label: 'Meaning', leaves: ['someone forced you', 'doer often obvious'] },
      { label: 'Traps', leaves: ['were made run', 'made us to run'] }
    ] },
    story: { title: 'Nong Bot at Scout Camp', panels: [
      { who: 'Pim', text: 'Bot, how was scout camp?' },
      { who: 'Nong Bot', text: 'Hard. We were made get up at five and made to cook our own rice. Beep.' },
      { who: 'Earth', text: 'Same here, but your sentence sounds a bit broken.' },
      { who: 'Nong Bot', text: 'Active <em>make</em> has no <em>to</em>. Passive is just active plus <em>be</em>. Easy!' },
      { who: 'T.Chris', text: 'Not with <em>make</em>, Bot. In the passive the <em>to</em> comes back: <em>We <b>were made to get up</b> at five and <b>were made to cook</b> our own rice.</em>' }
    ], moral: 'Active <em>make</em> drops <em>to</em>; passive <em>be made</em> brings it back.' },
    chant: { title: 'The To-Switch', beat: 'kick-kick-clap (4/4)', lines: [
      'Coach <b>made</b> us <b>run</b> — switch is OFF!',
      'We <b>were made to run</b> — switch is ON!',
      'Teacher <b>made</b> us <b>stay</b> — no <em>to</em> today,',
      'We <b>were made to stay</b> — <em>to</em> is back to play!',
      'Active: off, passive: on,',
      '<em>Made to</em>, <em>made to</em>, all day long!'
    ] },
    moves: [
      { move: 'Point firmly at a partner', says: 'Coach <b>made</b> us <b>run</b>.' },
      { move: 'Flick an imaginary switch down', says: 'Active: <em>to</em> OFF.' },
      { move: 'Jog on the spot looking tired', says: 'We <b>were made to run</b>.' },
      { move: 'Flick the switch up', says: 'Passive: <em>to</em> ON!' }
    ]
  },

  't7l3s2': {
    thai: 'let แปลว่า อนุญาตให้ ใช้แบบ active ได้ตามปกติ คือ let + คน + V1 เช่น The teacher let us leave early. แต่ let ไม่มีรูป passive เลย จะพูดว่า We were let leave early. หรือ We were let to leave early. ไม่ได้ ถ้าต้องการให้คนที่ได้รับอนุญาตเป็นประธาน ต้องเปลี่ยนไปใช้กริยา allow แทน เป็น be allowed to + V1 เช่น We were allowed to leave early. รูปนี้ใช้บ่อยมากเวลาพูดถึงกฎ เช่น Students are not allowed to use phones in the exam room. ข้อสอบ A-Level 2568 ก็เคยใช้ประโยคแบบนี้ (students are not allowed to dye their hair) ระวังอีกสองจุด คือหลัง to ต้องเป็น V1 ไม่ใช่ V-ing และ allow แบบ active ก็ต้องมี to เช่น They allowed us to leave. ไม่ใช่ allowed us leave',
    analogy: { title: 'The missing lift button', text: 'In a building, most verbs have a lift that goes down to the passive floor. <em>Let</em>\'s lift has no button for that floor — it simply does not stop there. So you walk next door and take <em>allow</em>\'s lift: <em>We <b>were allowed to</b> leave.</em> Same destination, different lift.' },
    trap: 'Tests copy the <em>be made to</em> shape and offer <em>were let to enter</em>. It looks perfect, but <em>let</em> has no passive at all. Dodge: when the person who gets permission is the subject, switch to <em>be allowed to</em> + base verb.',
    map: { center: 'let → be allowed to', branches: [
      { label: 'Active let', leaves: ['let + person + base', 'Mum let me stay up'] },
      { label: 'No passive', leaves: ['were let leave', 'were let to leave'] },
      { label: 'Use allow', leaves: ['be allowed to + base', 'we were allowed to go'] },
      { label: 'Rules', leaves: ['are not allowed to', 'A-Level 2568 frame'] },
      { label: 'Small traps', leaves: ['not allowed to using', 'allowed us leave'] }
    ] },
    story: { title: 'Nong Bot Writes the Rules', panels: [
      { who: 'Nan', text: 'Bot, you\'re writing the rules for the class trip?' },
      { who: 'Nong Bot', text: 'Yes. Rule 1: Students are let to buy snacks. Rule 2: Students are not let swim after dark. Beep!' },
      { who: 'Ploy', text: 'Good rules. Strange English.' },
      { who: 'Nong Bot', text: 'Make has a passive. So let has a passive. Same family, same rules!' },
      { who: 'T.Chris', text: 'Same family, different habits, Bot. <em>Let</em> has no passive: <em>Students <b>are allowed to</b> buy snacks. They <b>are not allowed to</b> swim after dark.</em>' }
    ], moral: '<em>Let</em> never goes passive; use <em>be allowed to</em> + base verb.' },
    chant: { title: 'Let Can\'t Go Passive', beat: 'kick-kick-clap (4/4)', lines: [
      'Mum <b>let</b> me <b>go</b> — active, fine!',
      '<s>I was let to go</s>? Not this time!',
      '<em>Let</em> can\'t go passive, can\'t, can\'t, can\'t,',
      'Call on <em>allow</em> — it says it can!',
      'We <b>were allowed to</b> stay up late,',
      '<b>Allowed to</b> + base verb — great!'
    ] },
    moves: [
      { move: 'Open a gate with both arms', says: 'Mum <b>let</b> me <b>go</b>.' },
      { move: 'Press a lift button that does not work', says: '<em>Let</em>: no passive!' },
      { move: 'Walk one step sideways', says: 'Switch to <em>allow</em>…' },
      { move: 'Give a big thumbs up', says: 'We <b>were allowed to</b> go!' }
    ]
  },

  't7l3s3': {
    thai: 'เมื่อประธานเป็นสิ่งของที่ต้องถูกทำอะไรสักอย่าง ใช้ need + V-ing หรือ need to be + V3 ได้ ทั้งสองแบบมีความหมายเป็น passive เหมือนกัน เช่น The car needs washing. = The car needs to be washed. (รถต้องได้รับการล้าง) รถไม่ได้ล้างอะไรเอง แต่ถ้าประธานเป็นคนที่ลงมือทำ ให้ใช้ need to + V1 ตามด้วยกรรม เช่น I need to wash the car. วิธีเลือกคือถามว่าประธานทำเอง หรือเป็นฝ่ายรับการกระทำ แล้วดูว่ามีกรรมตามหลังช่องว่างไหม ข้อผิดที่เจอบ่อยคือ The car needs to wash (ทำให้รถกลายเป็นคนล้าง) และ The car needs washed ซึ่งเป็นภาษาถิ่นบางแห่ง แต่ถือว่าผิดในข้อสอบ ประโยคปฏิเสธใช้ doesn\'t need เช่น My hair doesn\'t need cutting yet. ห้ามใช้ needn\'t cutting',
    analogy: { title: 'The to-do sticker', text: 'Stick a note on your bike: <em>needs <b>repairing</b></em>. The bike is not going to pick up a spanner — the sticker just says the job must be done to it. Stick a note on yourself and it changes: <em>I need <b>to repair</b> the bike.</em> Who wears the sticker decides the form.' },
    trap: 'Tests put <em>need revising</em> where the subject is a person with an object after the gap — <em>we ___ the vocabulary list</em> — and <em>needs to repair</em> where the subject is a thing. Dodge: doer + object → <em>need to do</em>; receiver → <em>needs doing</em> or <em>needs to be done</em>.',
    map: { center: 'needs doing', branches: [
      { label: 'Thing receives', leaves: ['needs repairing', 'needs to be repaired'] },
      { label: 'Person does', leaves: ['I need to repair it', 'object follows'] },
      { label: 'Negative', leaves: ['doesn\'t need cutting', 'doesn\'t need to be cut'] },
      { label: 'Wrong', leaves: ['the bike needs to repair', 'needs repaired'] },
      { label: 'Test', leaves: ['Who does the work?', 'What follows the gap?'] }
    ] },
    story: { title: 'Nong Bot Checks the Classroom', panels: [
      { who: 'Mai', text: 'Bot, can you make a list of things to fix in our classroom?' },
      { who: 'Nong Bot', text: 'Done! The fan needs to repair. The walls need to paint. The plants need to water. Beep!' },
      { who: 'Fah', text: 'So the fan is going to repair something? Busy fan.' },
      { who: 'Nong Bot', text: 'Things need jobs. <em>Need to</em> + job. Logical!' },
      { who: 'T.Chris', text: 'The fan doesn\'t do the job, Bot — it receives it. <em>The fan <b>needs repairing</b>, the walls <b>need painting</b>, the plants <b>need to be watered</b>.</em>' }
    ], moral: 'When a thing receives the work, use <em>needs doing</em> or <em>needs to be done</em>.' },
    chant: { title: 'Needs Doing', beat: 'kick-kick-clap (4/4)', lines: [
      'The fan <b>needs fixing</b>, the floor <b>needs cleaning</b>,',
      'The walls <b>need painting</b> — that\'s the meaning!',
      'Or <b>needs to be fixed</b>, <b>needs to be cleaned</b>,',
      'Thing gets the job — that\'s the scene!',
      'But <em>I</em> need <em>to fix</em> it — I do the work,',
      'Who wears the sticker? Check it first!'
    ] },
    moves: [
      { move: 'Slap an imaginary sticker on a desk', says: 'The desk <b>needs cleaning</b>.' },
      { move: 'Slap the same sticker on your chest', says: 'I <b>need to clean</b> the desk.' },
      { move: 'Shake your head at the desk', says: 'Not <s>the desk needs to clean</s>!' },
      { move: 'Mime wiping the desk', says: '= <b>needs to be cleaned</b>!' }
    ]
  }
});
