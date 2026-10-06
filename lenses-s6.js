/* VOICE CONTROL — lenses-s6.js · Stage 06 lesson lenses */
Object.assign(LENSES, {

  't6l1s1': {
    thai: 'Relative clause ที่ขึ้นต้นด้วย which, that หรือ who คือประโยคเล็กที่ซ้อนอยู่ในประโยคใหญ่ คำว่า that ทำหน้าที่เป็นประธานของประโยคเล็กนั้น จึงต้องมีกริยาแท้ (finite verb) ของตัวเองเสมอ ถ้าคำนามข้างหน้าเป็นผู้ "รับ" การกระทำ ให้ใช้ be + V3 เช่น a cleaning system that is activated after each use ห้ามเขียนแค่ that activated เพราะจะอ่านเป็นกริยาอดีตแบบ active ทันที แปลว่าระบบไปเปิดอะไรบางอย่างเอง ภาษาไทยใช้คำว่า "ที่" นำหน้าโดยไม่บอก voice เลย นักเรียนจึงชอบลอก V3 มาตรง ๆ วิธีเช็กคือแทน that ด้วยคำนามแล้วอ่านเป็นประโยคเต็ม เช่น the system is activated จากนั้นทำให้ be สอดคล้องกับคำนามที่ that แทน (panels → were) และเลือก tense จากคำบอกเวลา',
    analogy: {
      title: 'A room inside the house',
      text: 'A relative clause is like a bedroom inside a house. The house has its own front door (the main verb), but the bedroom needs <strong>its own door</strong> too: <em>that</em> + a finite verb. If the bedroom has a door frame but no door (<em>that activated</em>), anyone can walk in and the meaning escapes. Fit the full door: <em>that <strong>is</strong> activated</em>.'
    },
    trap: 'A-Level 2568 put <em>activated</em>, <em>activating</em>, <em>is activated</em> and <em>be activated</em> after <em>that</em>. The bare V3 looks passive, so students grab it. Dodge: after <em>which/that/who</em>, the clause must have a verb with tense; if the noun receives the action, that means <em>is/are/was/were</em> + V3.',
    map: {
      center: 'that + be + V3',
      branches: [
        { label: 'Own subject', leaves: ['which / that / who', 'stands for the noun'] },
        { label: 'Own verb', leaves: ['needs a finite verb', 'is / was / are / were'] },
        { label: 'Receiver?', leaves: ['noun receives it', 'be + V3 = passive'] },
        { label: 'Agreement', leaves: ['be agrees with the noun', 'panels that were…'] },
        { label: 'The trap', leaves: ['that activated ✗', 'looks like active past'] }
      ]
    },
    story: {
      title: 'Nong Bot Cuts the Door',
      panels: [
        { who: 'Fah', text: 'Bot, write a sign for the new toilet: it has a floor that is cleaned after every visitor.' },
        { who: 'Nong Bot', text: 'Done! "A floor that cleaned after every visitor." I deleted <em>is</em>. Shorter is better. Beep!' },
        { who: 'Mai', text: 'So the floor cleaned something? What did it clean? The visitors?' },
        { who: 'Nong Bot', text: 'ERROR. Floor cleaning visitors. Visitors running away. Beep beep!' },
        { who: 'T.Chris', text: 'Put <em>is</em> back, Bot. <em>That</em> is the subject of its own little clause, so it needs its own verb: <em>a floor that <strong>is cleaned</strong></em>.' }
      ],
      moral: 'After <em>which/that/who</em>, a receiver needs <em>be</em> + V3, never a V3 on its own.'
    },
    chant: {
      title: 'That Needs a Verb',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Which and that and who, they start a clause!',
        'Every clause needs a verb, that\'s the laws!',
        'Does the noun receive it? Then I know,',
        '<em>that is cleaned</em>, <em>that was built</em>, there we go!',
        'Bare V3 after <em>that</em>? No way!',
        'Put the <em>be</em> back in and it\'s OK!'
      ]
    },
    moves: [
      { move: 'Make a doorway with both arms above your head', says: '<em>That</em> opens a new room.' },
      { move: 'Stamp once', says: 'The room needs its own verb!' },
      { move: 'Hug yourself like a parcel', says: 'The noun receives it: <em>be</em> + V3.' },
      { move: 'Point both hands back at the noun', says: '<em>Be</em> agrees with the noun before <em>that</em>.' }
    ]
  },

  't6l1s2': {
    thai: 'ไม่ใช่ทุก relative clause จะเป็น passive ถ้าคำนามข้างหน้าเป็นผู้ "ทำ" การกระทำ ให้ใช้ active แม้ว่าคำนามนั้นจะเป็นสิ่งของก็ตาม เช่น the cultural threads that connect generations (สายใยทางวัฒนธรรมที่เชื่อมคนรุ่นต่าง ๆ) สายใยเป็นผู้เชื่อม และ generations คือกรรม ข้อสอบ A-Level 2569 ให้คำตอบเป็น active ตรงนี้ นักเรียนไทยหลายคนจำกฎผิดว่า "ประธานเป็นสิ่งของต้องเป็น passive" ซึ่งไม่จริง สิ่งของทำกริยาได้เสมอ เช่น an app that checks your heart rate วิธีที่เร็วที่สุดคือดูคำที่ตามหลังช่องว่าง ถ้ามีคำนามตามมาเป็นกรรมทันที ต้องเป็น active เพราะถ้าเลือก passive คำนามนั้นจะไม่มีหน้าที่ในประโยค และอย่าลืมใส่ that หรือ who ไม่อย่างนั้นจะกลายเป็นกริยาแท้ตัวที่สองที่ไม่มีประธาน',
    analogy: {
      title: 'The vending machine',
      text: 'A vending machine is a thing, but it still <strong>does</strong> things: it takes your coins and gives you a drink. You would say <em>a machine that <strong>sells</strong> drinks</em>, not <em>a machine that is sold drinks</em>. Things can be workers. Look for the object (<em>drinks</em>) and the active verb is obvious.'
    },
    trap: 'In A-Level 2569 the gap <em>the cultural threads ___ generations</em> offered <em>are connected</em> and <em>that are connected</em>, which feel "safe" because threads are things. Dodge: underline the noun after the gap. If it is an object, the relative clause is active.',
    map: {
      center: 'that + active verb',
      branches: [
        { label: 'Noun does it', leaves: ['active relative clause', 'threads that connect…'] },
        { label: 'Things act too', leaves: ['an app that checks…', 'a road that leads…'] },
        { label: 'Object clue', leaves: ['noun after the gap', 'object = active'] },
        { label: 'Wrong rule', leaves: ['thing ≠ passive', 'ask: does or receives?'] },
        { label: 'Keep the that', leaves: ['no that = 2 main verbs', 'that link young Thais'] }
      ]
    },
    story: {
      title: 'Nong Bot and the Robot Cleaners',
      panels: [
        { who: 'Pim', text: 'Look, Bot! Robots clean the platforms at Siam station every night.' },
        { who: 'Nong Bot', text: 'Robots are things. Things are always passive. So: "robots that are cleaned the platforms". Beep!' },
        { who: 'Pim', text: 'Who cleans the robots, then? And what happened to the platforms?' },
        { who: 'Nong Bot', text: 'The platforms are… floating in my sentence with no job. Beep… sad beep.' },
        { who: 'T.Chris', text: 'Bot, you are a thing, and you talk all day! Things can be doers: <em>robots that <strong>clean</strong> the platforms</em>. <em>The platforms</em> is the object, so the clause is active.' }
      ],
      moral: 'A thing can do the action; if an object follows, the relative clause is active.'
    },
    chant: {
      title: 'Things Can Do',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'An app that <em>checks</em>, a road that <em>leads</em>,',
        'A bus that <em>takes</em> us where we need!',
        'Things can work, so don\'t forget,',
        'thing does not mean passive yet!',
        'Find the object after the gap,',
        'object there? Then active, snap!'
      ]
    },
    moves: [
      { move: 'Move your arms like a robot', says: 'Things can be doers too.' },
      { move: 'Point at the floor in front of you', says: 'Look at the word after the gap.' },
      { move: 'Grab the air and pull it in', says: 'Is it an object? Then active.' },
      { move: 'Hold up one finger and nod', says: 'Keep <em>that</em> or <em>who</em> in front of the verb.' }
    ]
  },

  't6l1s3': {
    thai: 'กฎสำคัญคือ หนึ่งประธานต่อหนึ่งกริยาแท้ ประโยคหลักมีกริยาแท้ของมันแล้ว ถ้าอยากเพิ่มกริยาแท้อีกตัวระหว่างเครื่องหมายจุลภาค ต้องมี which หรือ who เป็นประธานให้มันด้วย เช่น Soft power, which is often described as the ability to influence others, has become important. กริยาหลักคือ has become ส่วน is described เป็นกริยาของ relative clause ถ้าตัด which ออกจะกลายเป็นกริยาแท้สองตัวที่แย่งประธานเดียวกัน ซึ่งผิด หลังจากใส่ which แล้ว ยังต้องเลือก voice ให้ถูกด้วย soft power ไม่ได้บรรยายอะไร คนต่างหากที่บรรยายมัน จึงต้องเป็น passive แต่ถ้าคำนามเป็นผู้ทำและมีกรรมตามมา เช่น The storm, which brought heavy rain, ... ต้องใช้ active ข้อสอบมักให้ตัวเลือกสี่แบบ คือมีหรือไม่มี which กับ active หรือ passive มีเพียงแบบเดียวที่มีทั้งประธานและ voice ที่ถูกต้อง',
    analogy: {
      title: 'One driver per car',
      text: 'Every car needs exactly one driver. The main clause is the big bus, and its driver is the main verb. If you want a second car in the convoy, you must give it <strong>its own driver</strong> (<em>which</em> + verb). Two steering wheels in one bus (<em>Soft power, is described…, has become…</em>) means a crash.'
    },
    trap: 'Gaps between commas tempt you to pick the option that "means the right thing": <em>is often described</em>. But the sentence already has its main verb further on. Dodge: find the main verb first, then choose the option that has <em>which/who</em> AND the right voice.',
    map: {
      center: 'One verb per clause',
      branches: [
        { label: 'Main verb', leaves: ['find it first', 'has become, receives…'] },
        { label: 'Extra verb', leaves: ['needs which / who', 'its own subject'] },
        { label: 'Then voice', leaves: ['does it? active', 'receives it? passive'] },
        { label: 'Four options', leaves: ['± which', '± passive'] },
        { label: 'Crash', leaves: ['Thai food, is loved…, is', 'two verbs, one subject'] }
      ]
    },
    story: {
      title: 'Nong Bot\'s Double Verb',
      panels: [
        { who: 'Nan', text: 'Bot, describe Muay Thai for our school website.' },
        { who: 'Nong Bot', text: '"Muay Thai, is often called the art of eight limbs, is popular worldwide." Two verbs! Double power! Beep!' },
        { who: 'Nan', text: 'Who is doing the second "is"? Muay Thai is already busy with the first one.' },
        { who: 'Nong Bot', text: 'Then I will add "which often calls". Problem solved. Beep?' },
        { who: 'T.Chris', text: 'Half solved, Bot. Muay Thai doesn\'t call anything; people call it that. You need a subject AND the passive: <em>Muay Thai, <strong>which is often called</strong> the art of eight limbs, is popular worldwide.</em>' }
      ],
      moral: 'A second finite verb needs its own subject (<em>which/who</em>), and then the right voice.'
    },
    chant: {
      title: 'One Driver',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Find the main verb, find it first,',
        'two in one clause is the worst!',
        'Want another? Bring a <em>which</em>,',
        'give that verb a subject, switch!',
        'Does it do it? Active, go!',
        'Does it get it? Passive, so!'
      ]
    },
    moves: [
      { move: 'Hold an imaginary steering wheel', says: 'One driver: the main verb.' },
      { move: 'Hold a second wheel with the other hand and shake your head', says: 'Two verbs, one subject: crash!' },
      { move: 'Wave someone in from the side', says: 'Bring in <em>which</em> as a new driver.' },
      { move: 'Flip your palm up, then down', says: 'Then choose: active or passive?' }
    ]
  },

  't6l2s1': {
    thai: 'Reduced passive clause คือการย่อ relative clause แบบ passive โดยตัด which/that และ be ออก เหลือแค่ V3 กับคำที่ตามมา เช่น the photos which were taken on the trip ย่อเป็น the photos taken on the trip กลุ่มคำ V3 นี้ทำหน้าที่เหมือนคำคุณศัพท์ยาว ๆ ที่ขยายคำนามข้างหน้า มันไม่ใช่กริยาแท้ของประโยค ประโยคยังต้องมีกริยาหลักของตัวเองอยู่ที่อื่น เช่น The photos taken on the trip have been posted. ถ้าใส่ were กลับเข้าไปโดยไม่มี which จะมีกริยาแท้สองตัว ซึ่งผิด ใช้รูปนี้ได้เฉพาะเมื่อคำนามเป็นผู้รับการกระทำ ข้อสอบ A-Level 2569 ออกรูปนี้ เช่น a trend known as the "Flynn Effect" และในบทอ่านจะเจอบ่อยมาก ระวังคำที่หน้าตาคล้ายกัน เช่น raise (มีกรรม) กับ rise (ไม่มีกรรม) ด้วย',
    analogy: {
      title: 'The folding umbrella',
      text: 'A full relative clause is an open umbrella: <em>the photos which were taken on the trip</em>. A reduced clause is the same umbrella <strong>folded</strong>: <em>the photos taken on the trip</em>. It still keeps you dry (the meaning is the same), but you can\'t fold it if you leave half the frame sticking out (<em>the photos were taken… have been posted</em>).'
    },
    trap: 'In a reading passage, students often read the V3 after a noun as the main past verb: <em>The money raised at the run will be spent…</em> looks like "the money raised (something)". In gaps, they add the <em>be</em> they think is missing. Dodge: find the real main verb first; if it is already there, the V3 phrase needs no <em>be</em>.',
    map: {
      center: 'noun + V3 phrase',
      branches: [
        { label: 'Fold it', leaves: ['drop which/that + be', 'keep V3 + the rest'] },
        { label: 'Meaning', leaves: ['noun receives it', 'rice grown in Isan'] },
        { label: 'Main verb', leaves: ['still needed elsewhere', 'photos taken… have been'] },
        { label: 'Don\'t add be', leaves: ['were taken… have ✗', 'two finite verbs'] },
        { label: 'Look-alikes', leaves: ['raise (object)', 'rise (no object)'] }
      ]
    },
    story: {
      title: 'Nong Bot Folds Too Much',
      panels: [
        { who: 'Ploy', text: 'Bot, shorten this: "The cake which was made by Fah was delicious."' },
        { who: 'Nong Bot', text: 'Folding! "The cake made by Fah delicious." Beep! Very short!' },
        { who: 'Ploy', text: 'Bot, you folded away the main verb too. Was the cake delicious or not?' },
        { who: 'Nong Bot', text: 'Unknown. The sentence has no verb. Cake status: missing. Beep!' },
        { who: 'T.Chris', text: 'Only fold <em>which was</em>, Bot. Keep the main verb: <em>The cake <strong>made</strong> by Fah <strong>was</strong> delicious.</em>' }
      ],
      moral: 'Fold away <em>which/that + be</em>, keep the V3, and never fold away the main verb.'
    },
    chant: {
      title: 'Fold It Up',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>Which was</em>, <em>that were</em>, fold them away,',
        'keep the V3, it can stay!',
        'Photos <em>taken</em>, rice <em>grown</em>,',
        'cakes <em>made</em> by Fah, now you\'ve shown!',
        'But the main verb stays in place,',
        'don\'t fold that, or lose the race!'
      ]
    },
    moves: [
      { move: 'Open your arms wide, then fold them in', says: '<em>Which was taken</em> becomes <em>taken</em>.' },
      { move: 'Hold a fist close to your chest', says: 'The V3 stays next to the noun.' },
      { move: 'Point far ahead', says: 'The main verb is somewhere else.' },
      { move: 'Cross your arms in an X', says: 'No extra <em>be</em> without <em>which</em>!' }
    ]
  },

  't6l2s2': {
    thai: 'หลังคำนาม เราใช้ได้ทั้ง V-ing และ V3 เพื่อย่อ relative clause แต่ความหมายต่างกัน V-ing หมายถึงคำนามเป็นผู้ทำ (active) เช่น the boy standing at the gate (เด็กผู้ชายที่ยืนอยู่ที่ประตู) ส่วน V3 หมายถึงคำนามเป็นผู้ถูกกระทำ (passive) เช่น the clothes donated to the shelter (เสื้อผ้าที่ได้รับการบริจาค) วิธีเลือกให้ถามสองข้อ ข้อแรก คำนามเป็นผู้ทำหรือผู้รับ ข้อสอง หลังช่องว่างมีกรรมไหม ถ้ามีกรรม เช่น ___ long hours ต้องใช้ V-ing นักเรียนไทยมักเลือกตามเวลา คิดว่าเกิดในอดีตแล้วต้องใช้ V3 ซึ่งผิด เพราะ V-ing และ V3 ไม่มี tense ในตัวเอง เวลาของประโยคมาจากกริยาหลัก เช่น the teams chosen last year กับ the teams chosen next week ถูกทั้งคู่',
    analogy: {
      title: 'Chef or dish?',
      text: 'In a restaurant, the chef is <em>cooking</em> and the dish is <em>cooked</em>. <em>The chef cooking pad thai</em> = the chef does it. <em>The pad thai cooked by the chef</em> = the dish receives it. Ask "chef or dish?" about every noun: chef → V-ing, dish → V3. Time doesn\'t matter; a chef cooking yesterday is still the chef.'
    },
    trap: 'Students choose V3 because the event "already happened": <em>tourists visited Phuket last year</em> as a noun phrase. Dodge: ignore the time. Ask who does the action and look for an object after the gap. An object means V-ing.',
    map: {
      center: 'V-ing or V3?',
      branches: [
        { label: 'V-ing', leaves: ['noun does it', 'a boy wearing glasses'] },
        { label: 'V3', leaves: ['noun receives it', 'a phone made in Korea'] },
        { label: 'Object after?', leaves: ['yes → V-ing', 'by / place → often V3'] },
        { label: 'Not about time', leaves: ['no tense in either', 'time from main verb'] },
        { label: 'Still one verb', leaves: ['no are/were added', 'main verb elsewhere'] }
      ]
    },
    story: {
      title: 'Nong Bot Mixes Up the Chef',
      panels: [
        { who: 'Mint', text: 'Bot, write a caption for this photo: the woman is making som tam at the market.' },
        { who: 'Nong Bot', text: '"The woman made som tam." She did it in the past, so V3. Beep!' },
        { who: 'Mint', text: 'That\'s a full sentence, not a caption. And as a noun phrase, "the woman made" sounds like someone made the woman!' },
        { who: 'Nong Bot', text: 'A woman made in a factory? Like me? Beep… we are family?' },
        { who: 'T.Chris', text: 'No, Bot. She does the making, and <em>som tam</em> is the object: <em>the woman <strong>making</strong> som tam</em>. The som tam is the one that gets made: <em>som tam <strong>made</strong> by a street vendor</em>.' }
      ],
      moral: 'V-ing after a noun means it does the action; V3 means it receives it, whatever the time.'
    },
    chant: {
      title: 'Chef or Dish',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Chef or dish? Ask it every time!',
        'Chef is <em>cooking</em>, that\'s the line!',
        'Dish is <em>cooked</em>, it can\'t do a thing,',
        'V3 for the dish, for the chef V-<em>ing</em>!',
        'Object after? Chef again!',
        'Time\'s not the question, now you\'re ten!'
      ]
    },
    moves: [
      { move: 'Stir a big pot', says: 'Chef: V-ing, the noun does it.' },
      { move: 'Hold out a plate with both hands', says: 'Dish: V3, the noun receives it.' },
      { move: 'Look down at your feet', says: 'Object after the gap? V-ing.' },
      { move: 'Wave away an imaginary clock', says: 'Don\'t choose by time!' }
    ]
  },

  't6l2s3': {
    thai: 'กับดักกริยาแท้ (finite trap) คือการเลือกตัวเลือกที่มี is/are เพราะดู "ครบ" กว่า ทั้งที่ประโยคมีกริยาหลักแล้ว เช่นข้อสอบ A-Level 2569 IQ scores rose steadily, a trend known as the "Flynn Effect" ประโยคมีกริยาหลักคือ rose แล้ว ส่วน a trend ... เป็นกลุ่มคำนามที่สรุปความข้างหน้า กลุ่มคำนามใส่กริยาแท้ไม่ได้ จึงต้องเป็น known ไม่ใช่ is known และไม่ใส่จุลภาคคั่นระหว่างคำนามกับวลีที่ระบุว่าหมายถึงสิ่งไหน กับดักนี้ทำงานได้สองทาง ถ้าประโยคยังไม่มีกริยาหลักเลย การใช้แค่ V3 ก็ผิด เช่น The stadium designed by a Thai architect. ยังไม่เป็นประโยค ต้องเป็น was designed ขั้นตอนคือ หาประธานหลัก หากริยาแท้ของมัน ถ้ามีแล้ว ช่องว่างต้องเป็น non-finite ถ้ายังไม่มี ช่องว่างต้องเติมกริยาแท้ให้',
    analogy: {
      title: 'The one-ticket concert',
      text: 'Every sentence gets exactly <strong>one ticket</strong> for its main verb. If the ticket is already used (<em>rose</em>, <em>found</em>, <em>bans</em>), the next verb can\'t get in as a finite verb; it has to come in as a participle. But if nobody has used the ticket yet, a bare V3 at the gate is turned away: the sentence still needs its finite verb.'
    },
    trap: 'A-Level 2569 offered <em>a trend is known</em> and <em>a trend, is known</em> next to the correct reduced phrase, because a full verb "looks more complete". Dodge: find the subject and its finite verb before you read the options; if the verb is already there, cross out every option with <em>is/are</em>.',
    map: {
      center: 'Count finite verbs',
      branches: [
        { label: 'Step 1', leaves: ['find the main subject'] },
        { label: 'Step 2', leaves: ['find its finite verb'] },
        { label: 'Verb there', leaves: ['gap = participle', 'no is / are'] },
        { label: 'Verb missing', leaves: ['gap = is / was + V3', 'bare V3 ✗'] },
        { label: 'Comma', leaves: ['defining phrase', 'no comma before it'] }
      ]
    },
    story: {
      title: 'Nong Bot Buys Two Tickets',
      panels: [
        { who: 'Beam', text: 'Bot, finish this: "The study, ___ in March, found that teens sleep too little."' },
        { who: 'Nong Bot', text: '"The study, was published in March, found…" A full verb is safer. Beep!' },
        { who: 'Beam', text: 'But <em>found</em> already has the ticket. Who is <em>was published</em> for?' },
        { who: 'Nong Bot', text: 'Then I remove all verbs! "The stadium designed by a Thai architect." Beep! Wait… where is the sentence?' },
        { who: 'T.Chris', text: 'Count first, Bot. <em>The study, <strong>published</strong> in March, found…</em> already has its verb. <em>The stadium <strong>was designed</strong>…</em> has none, so it needs one.' }
      ],
      moral: 'Count the finite verbs first: one already there means a participle; none there means the gap must supply it.'
    },
    chant: {
      title: 'One Ticket',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Find the subject, find the verb,',
        'count them first, that\'s the word!',
        'Verb already there? Then hold the <em>is</em>,',
        '<em>a trend known as</em>, that\'s the biz!',
        'No verb yet? Then fill the space,',
        '<em>was</em> + V3 in its place!'
      ]
    },
    moves: [
      { move: 'Hold up one ticket between two fingers', says: 'One finite verb per sentence.' },
      { move: 'Tap your head', says: 'Find the subject and its verb first.' },
      { move: 'Hand the ticket away and shake your head', says: 'Verb there? No extra <em>is</em>.' },
      { move: 'Catch the ticket back', says: 'No verb yet? The gap needs one.' }
    ]
  },

  't6l3s1': {
    thai: 'หลัง if, when, unless, once และ although เราตัดประธานกับ be ออกได้ เหลือแค่ V3 เช่น If it is not prepared correctly, the fish can make you ill. ย่อเป็น If not prepared correctly, the fish can make you ill. รูปนี้ออกในข้อสอบ A-Level 2568 ประธานที่หายไปต้องเป็นตัวเดียวกับประธานของประโยคหลักเสมอ วิธีเช็กคือเติมประธานกับ be กลับเข้าไปแล้วอ่าน เช่น Once printed, the tickets cannot be changed. = once the tickets are printed ถ้าประธานหลักเป็นผู้ทำและมีกรรมตามหลังช่องว่าง ให้ใช้ V-ing แทน เช่น When crossing the road, look both ways. (คุณเป็นคนข้ามถนน) อย่าลืมดูรูปคำด้วย คำที่ขยายกริยาต้องเป็น adverb เช่น prepared correctly ไม่ใช่ correct และ stored properly ไม่ใช่ proper',
    analogy: {
      title: 'The medicine label',
      text: 'Medicine labels love short clauses: <em>Once opened, keep in the fridge.</em> The label has no space for <em>once the bottle is opened</em>, so it <strong>hides</strong> the subject and <em>be</em>. But the hidden words are still there, like invisible ink. Shine a light on them (<em>once [the bottle is] opened</em>) and check that they make sense.'
    },
    trap: 'A-Level 2568 offered <em>if not correct prepared</em>, <em>if not correct preparing</em> and <em>if not preparing correctly</em> next to the right answer: two decisions in one gap. Dodge: restore the hidden subject and <em>be</em> to choose V3 or V-ing, then check that the describing word is an adverb.',
    map: {
      center: 'if not + V3',
      branches: [
        { label: 'Conjunctions', leaves: ['if, when, unless', 'once, although'] },
        { label: 'Hidden words', leaves: ['subject + be dropped', 'if [it is] not stored'] },
        { label: 'Same subject', leaves: ['= main subject', 'once printed, tickets'] },
        { label: 'Doer?', leaves: ['use V-ing', 'when crossing the road'] },
        { label: 'Word form', leaves: ['adverb after V3', 'correctly, properly'] }
      ]
    },
    story: {
      title: 'Nong Bot Reads the Label',
      panels: [
        { who: 'Earth', text: 'Bot, the milk label says "Once opened, use within three days."' },
        { who: 'Nong Bot', text: 'Once opened… who opened? I opened? You opened? The cow opened? Beep! Beep!' },
        { who: 'Earth', text: 'Relax, Bot. The subject is hiding.' },
        { who: 'Nong Bot', text: 'Then I will write it my way: "Once opening, the milk…" The milk opens itself. Beep!' },
        { who: 'T.Chris', text: 'The hidden subject is the main subject, Bot: <em>once [the milk is] <strong>opened</strong></em>. The milk receives the action, so V3. Use V-ing only when the subject does it: <em>When <strong>pouring</strong> the milk, hold the carton with two hands.</em>' }
      ],
      moral: 'Put the hidden subject and <em>be</em> back; receiver means V3, doer means V-ing.'
    },
    chant: {
      title: 'Hidden Words',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>If</em> and <em>when</em> and <em>once</em> and <em>unless</em>,',
        'drop the subject, drop the <em>be</em>, no stress!',
        'Put them back to check the clause,',
        'same as the main subject, that\'s the cause!',
        'Receiver? V3, <em>if not stored right</em>!',
        'Doer? V-ing, <em>when crossing</em>, all right!'
      ]
    },
    moves: [
      { move: 'Cover your mouth with one hand', says: 'The subject and <em>be</em> are hidden.' },
      { move: 'Take your hand away and open your mouth', says: 'Put them back to check.' },
      { move: 'Point to the person next to you, then to yourself', says: 'Same subject as the main clause.' },
      { move: 'Smooth the air flat with one hand', says: 'Finish with an adverb: <em>properly</em>.' }
    ]
  },

  't6l3s2': {
    thai: 'ใน passive คำ adverb ที่บอกว่าการกระทำเกิดขึ้นอย่างไร มักวางไว้ระหว่าง be กับ V3 เช่น is well prepared, are conveniently scheduled, was carefully checked และต้องเป็นรูป adverb เท่านั้น ห้ามใช้ adjective เพราะ V3 เป็นส่วนหนึ่งของกริยา adjective อย่าง good, careful, clear ใช้ขยายคำนาม ไม่ใช่กริยา จึงต้องเป็น well, carefully, clearly ภาษาไทยใช้คำว่า "ดี" ได้ทั้งสองแบบ นักเรียนจึงมักเขียน is good prepared ซึ่งผิด อีกเรื่องที่ต้องระวังคือ adverb ไม่ได้บอกว่าต้องเป็น passive ให้ตัดสิน voice ก่อนเสมอ เช่น Thai dramas regularly top the charts. เป็น active เพราะละครเป็นผู้ทำ และมี the charts เป็นกรรม จากนั้นค่อยวาง adverb ในตำแหน่งที่ถูกต้อง',
    analogy: {
      title: 'The sandwich filling',
      text: 'Think of a passive as a sandwich: <em>be</em> is the top slice, the V3 is the bottom slice, and the adverb is the <strong>filling</strong> in the middle: <em>is <strong>well</strong> prepared</em>. You can\'t put a whole fried egg (an adjective like <em>good</em>) where the thin filling goes; it doesn\'t fit. And the filling doesn\'t decide whether it\'s a sandwich at all; check the bread first.'
    },
    trap: 'Old entrance exams put <em>well prepared</em> next to <em>is preparing well</em> and <em>has well prepared</em>, and adjective forms next to adverbs. Dodge: decide the voice first, then make sure the middle word is an adverb (<em>-ly</em> or <em>well</em>).',
    map: {
      center: 'be + adverb + V3',
      branches: [
        { label: 'Position', leaves: ['between be and V3', 'is well prepared'] },
        { label: 'Adverb form', leaves: ['well, carefully', 'not good, careful'] },
        { label: 'Voice first', leaves: ['adverb ≠ passive', 'Thai dramas regularly top'] },
        { label: 'Common pairs', leaves: ['widely used', 'clearly written'] },
        { label: 'Traps', leaves: ['is good prepared ✗', 'were careful checked ✗'] }
      ]
    },
    story: {
      title: 'Nong Bot Makes a Bad Sandwich',
      panels: [
        { who: 'Ploy', text: 'Bot, write a review of our science fair. Everything was planned well.' },
        { who: 'Nong Bot', text: '"The fair was good planned and careful organised." Beep! Five stars!' },
        { who: 'Ploy', text: 'Hmm. "Good planned" sounds like a robot wrote it.' },
        { who: 'Nong Bot', text: 'A robot DID write it. Beep. Also: "The visitors were greatly enjoyed the projects."' },
        { who: 'T.Chris', text: 'Two fixes, Bot. Adverbs go inside the passive: <em>was <strong>well</strong> planned and <strong>carefully</strong> organised</em>. And the visitors did the enjoying, so it\'s active: <em>the visitors <strong>greatly enjoyed</strong> the projects</em>.' }
      ],
      moral: 'Choose the voice first, then put an adverb, not an adjective, between <em>be</em> and the V3.'
    },
    chant: {
      title: 'Sandwich Rule',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>Be</em> on top and V3 below,',
        'adverb in the middle, there you go!',
        '<em>Well</em> prepared and <em>clearly</em> shown,',
        '<em>good</em> and <em>clear</em>? Leave them alone!',
        'But an adverb doesn\'t make it passive,',
        'check the voice first, don\'t be massive!'
      ]
    },
    moves: [
      { move: 'Hold one hand flat above the other', says: '<em>Be</em> on top, V3 below.' },
      { move: 'Slide a finger between your hands', says: 'The adverb goes in the middle.' },
      { move: 'Make an L-shape and add a wiggle', says: '-<em>ly</em> or <em>well</em>, never <em>good</em>.' },
      { move: 'Put your hands on your hips', says: 'Voice first, adverb second.' }
    ]
  },

  't6l3s3': {
    thai: 'ประโยคภาษาอังกฤษมักเปิดด้วยกลุ่มคำ V3 เช่น Built in 1782, the Grand Palace was home to the kings of Siam. ซึ่งย่อมาจาก The Grand Palace was built in 1782 กลุ่มคำที่เปิดประโยคไม่มีประธานของตัวเอง มันยืมประธานที่อยู่หลังจุลภาค ดังนั้นคำนามหลังจุลภาคต้องเป็นสิ่งที่ถูกสร้างจริง ๆ ถ้าเขียน Built in 1782, millions of tourists visit the palace. จะกลายเป็นว่านักท่องเที่ยวถูกสร้างในปี 1782 เรียกว่า dangling participle ในภาษาไทยเราขึ้นต้นด้วยหัวเรื่องแล้วพูดถึงอะไรต่อก็ได้ แต่ภาษาอังกฤษไม่ได้ วิธีแก้คือให้คำนามที่ถูกต้องเป็นประธาน ซึ่งมักต้องใช้ passive ในประโยคหลัก ถ้าประธานเป็นผู้ทำและมีกรรมตามหลังช่องว่าง ให้เปิดด้วย V-ing เช่น Looking at the map, Mint ... และห้ามเติมประธานกับ be หน้าจุลภาค',
    analogy: {
      title: 'The name tag',
      text: 'An opening V3 clause is a <strong>name tag</strong> that says "Built in 1782". It sticks to the first person or thing after the comma. If that is <em>millions of tourists</em>, every tourist is now wearing a tag saying they are 240 years old. Make sure the tag lands on the palace.'
    },
    trap: 'Exams put a natural-sounding main clause after the opening (<em>Located on a hill, visitors get a great view</em>) because the meaning is clear to a human reader. Grammar is not about guessing. Dodge: read the first noun after the comma and ask, "Was THIS located, built, decorated?"',
    map: {
      center: 'V3, + subject',
      branches: [
        { label: 'Opening V3', leaves: ['Built in 1782,', 'Surrounded by fields,'] },
        { label: 'Borrowed subject', leaves: ['first noun after comma', 'must match the V3'] },
        { label: 'Dangling ✗', leaves: ['Built…, tourists love…', 'tourists were built?'] },
        { label: 'Doer?', leaves: ['open with V-ing', 'Looking at the map, Mint'] },
        { label: 'No full clause', leaves: ['It was built…, ✗', 'comma splice'] }
      ]
    },
    story: {
      title: 'Nong Bot the Tour Guide',
      panels: [
        { who: 'Fah', text: 'Bot, you\'re our tour guide at Wat Arun today. Say something smart!' },
        { who: 'Nong Bot', text: '"Decorated with Chinese porcelain, you will love this temple!" Beep!' },
        { who: 'Fah', text: 'Bot, I\'m not decorated with porcelain. I\'m wearing a T-shirt.' },
        { who: 'Nong Bot', text: 'Correction: "Decorating with porcelain, the temple…" The temple is decorating. Busy temple. Beep!' },
        { who: 'T.Chris', text: 'Close, Bot. The temple received the porcelain, and it must come straight after the comma: <em><strong>Decorated</strong> with Chinese porcelain, <strong>the temple</strong> sparkles in the evening sun.</em>' }
      ],
      moral: 'An opening V3 clause describes the first noun after the comma, so put the right noun there.'
    },
    chant: {
      title: 'Name Tag',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>Built</em> in the past, <em>located</em> on a hill,',
        'who wears the tag? Check it still!',
        'First noun after the comma, that\'s the one,',
        'make it the palace, not the sun!',
        'Doer at the front? V-<em>ing</em>, okay,',
        '<em>Looking at the map</em>, Mint finds the way!'
      ]
    },
    moves: [
      { move: 'Peel an imaginary sticker off your hand', says: 'The opening clause is a name tag.' },
      { move: 'Stick it on the person beside you', says: 'It sticks to the first noun after the comma.' },
      { move: 'Check the label and nod or shake your head', says: 'Was THIS built? Then it fits.' },
      { move: 'Mime reading a map', says: 'Doer? Open with V-ing.' }
    ]
  }
});
