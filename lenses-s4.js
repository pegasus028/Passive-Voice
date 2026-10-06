/* VOICE CONTROL — lenses-s4.js · Stage 04 lesson lenses */
Object.assign(LENSES, {
  't4l1s1': {
    thai: 'หลัง need, want, have (ต้อง) และ be going to เราใช้ to + กริยา เสมอ แต่ต้องถามก่อนว่า ประธานเป็นคนทำกริยาตัวที่สอง หรือเป็นผู้ถูกกระทำ ถ้าประธานทำเอง ใช้ to + V1 เช่น I need to clean my room. ถ้าประธานเป็นผู้รับการกระทำ ใช้ to be + V3 เช่น The room needs to be cleaned. (ห้องต้องถูกทำความสะอาด) ภาษาไทยมักไม่มีคำบอกเลย แต่ภาษาอังกฤษต้องมีครบสามส่วน คือ to + be + V3 ห้ามขาดตัวใดตัวหนึ่ง ข้อผิดที่เจอบ่อยคือ needs be replaced (ไม่มี to) needs to replaced (ไม่มี be) และ needs to replace (กลายเป็นว่าตู้เย็นไปเปลี่ยนของอื่นเอง) อย่าดูแค่ว่าประธานเป็นสิ่งของ ให้ดูว่าใครทำ',
    analogy: { title: 'The three-piece charger', text: 'A phone charger only works with all three pieces: plug, cable and head. The passive infinitive is the same: <strong>to</strong> + <strong>be</strong> + <strong>V3</strong>. Lose the plug (<s>needs be fixed</s>) or the cable (<s>needs to fixed</s>) and nothing charges.' },
    trap: 'The exam puts <em>to + V1</em> next to <em>to be + V3</em> and hopes you choose by feel. Dodge it: ask whether the subject can do the action. <em>The fridge needs to replace</em> means the fridge does the replacing, which is nonsense.',
    map: { center: 'to be + V3', branches: [
      { label: 'Verbs before', leaves: ['need, want', 'have to, be going to'] },
      { label: 'Three parts', leaves: ['to + be + V3', 'none can be missing'] },
      { label: 'Receiver', leaves: ['needs to be cleaned', 'wants to be left alone'] },
      { label: 'Doer', leaves: ['I need to clean it', 'Ton has to fix it'] },
      { label: 'Errors', leaves: ['needs be fixed', 'needs to fixed'] }
    ] },
    story: { title: 'The Fridge That Must Work', panels: [
      { who: 'Mai', text: 'Bot, the staffroom fridge is broken again.' },
      { who: 'Nong Bot', text: 'BEEP! The fridge <em>needs to replace</em>! Fridge, please replace yourself!' },
      { who: 'Fah', text: 'Bot, it is not moving. I don\'t think it can replace anything.' },
      { who: 'Nong Bot', text: 'Then the fridge <em>needs be replaced</em>? Two words saved! Beep!' },
      { who: 'T.Chris', text: 'Close, Bot. Somebody replaces the fridge, and you need all three parts: <em>It needs <strong>to be replaced</strong>.</em>' }
    ], moral: 'When the subject receives the action, the infinitive needs all three parts: <em>to + be + V3</em>.' },
    chant: { title: 'Three Parts', beat: 'kick-kick-clap (4/4)', lines: [
      'Need to, want to, have to, going to!',
      'Who does the job? Ask it, it\'s true!',
      'If I do it: <em>to clean</em>, <em>to fix</em>!',
      'If it\'s done to me: <em>to be</em> plus V3, mix!',
      '<em>To</em>, then <em>be</em>, then V3, all three!',
      '<em>The room needs to be cleaned</em> — not by me!'
    ] },
    moves: [
      { move: 'Hold up one finger', says: '<em>to</em>' },
      { move: 'Hold up two fingers', says: '<em>be</em>' },
      { move: 'Hold up three fingers and push them forward', says: 'V3: <em>to be replaced</em>!' },
      { move: 'Point at yourself, then point away', says: 'I do it: <em>to fix</em>. It is done: <em>to be fixed</em>.' }
    ]
  },

  't4l1s2': {
    thai: 'กริยาบางตัวต้องตามด้วย to + กริยาเสมอ เช่น expect, hope, deserve, refuse, agree, would like และวลีสำเร็จรูป เช่น be supposed to, be expected to, be asked to ขั้นแรกจำรูปแบบ verb + to ให้ได้ก่อน ขั้นที่สองถามว่าใครทำกริยาตัวหลัง ถ้าประธานทำเอง ใช้ to + V1 เช่น Visitors are expected to wear safety glasses. (ผู้เข้าชมเป็นคนใส่แว่นเอง) ถ้าประธานถูกกระทำ ใช้ to be + V3 เช่น Ploy hopes to be selected. (พลอยหวังว่าจะได้รับเลือก) ระวังประโยคที่มี passive สองชั้น เช่น The projects are supposed to be submitted by Friday. ชั้นแรกเป็นวลีสำเร็จรูป ชั้นที่สองบอกว่างานเป็นสิ่งที่ถูกส่ง ห้ามใช้ -ing หลังกริยากลุ่มนี้ เช่น expect being chosen ผิด',
    analogy: { title: 'The train and its carriage', text: 'The first verb is the <strong>engine</strong>: <em>expect</em>, <em>hope</em>, <em>deserve</em>. It always pulls a <em>to</em>-carriage. Who sits in the carriage? If the subject does the action, an active verb rides inside (<em>to win</em>). If the subject receives it, the passive rides inside (<em>to be selected</em>). The engine never changes.' },
    trap: 'Tests mix a chunk that is already passive (<em>is expected</em>) with an infinitive that should be <strong>active</strong> (<em>to wear safety glasses</em>). Do not copy the passive across. Check the second action on its own: who wears the glasses?',
    map: { center: 'verb + to', branches: [
      { label: 'Verbs', leaves: ['expect, hope, deserve', 'refuse, would like'] },
      { label: 'Chunks', leaves: ['be supposed to', 'be expected to'] },
      { label: 'Receiver', leaves: ['hope to be selected', 'deserve to be praised'] },
      { label: 'Doer', leaves: ['expected to wear', 'hope to win'] },
      { label: 'Not after these', leaves: ['expect being chosen', 'to be wear'] }
    ] },
    story: { title: 'Bot Hopes to Elect', panels: [
      { who: 'Pim', text: 'The class vote is today. Who do you think will win, Bot?' },
      { who: 'Nong Bot', text: 'Me! I hope <em>to elect</em> as class captain! Beep!' },
      { who: 'Nan', text: 'So you want to do the voting? We all do the voting, Bot.' },
      { who: 'Nong Bot', text: 'Error! Then I expect <em>being elected</em>. That sounds passive!' },
      { who: 'T.Chris', text: 'Passive, yes, but <em>expect</em> pulls a <em>to</em>: <em>I expect <strong>to be elected</strong>.</em> Though I wouldn\'t count on it, Bot.' }
    ], moral: 'After <em>expect, hope, deserve</em>, keep the <em>to</em> and add <em>be + V3</em> when the subject receives the action.' },
    chant: { title: 'Engine and Carriage', beat: 'kick-kick-clap (4/4)', lines: [
      'Expect to, hope to, deserve to, too!',
      'Supposed to, expected to, asked to — woo!',
      'I do it? <em>To win</em>, <em>to wear</em>, <em>to go</em>!',
      'It\'s done to me? <em>To be chosen</em>, so!',
      'No <em>-ing</em> after <em>expect</em>, my friend,',
      '<em>To be</em> plus V3 right to the end!'
    ] },
    moves: [
      { move: 'Pump your arm like a train engine', says: '<em>Expect</em>, <em>hope</em>, <em>deserve</em>!' },
      { move: 'Hook two fingers together', says: '...always pull a <em>to</em>!' },
      { move: 'Raise both hands to cheer', says: 'I do it: <em>hope to win</em>!' },
      { move: 'Point at yourself and bow as if receiving a medal', says: 'Done to me: <em>hope to be selected</em>!' }
    ]
  },

  't4l1s3': {
    thai: 'หลังคำบอกลำดับ เช่น the first, the last, the next, the only + คำนาม เราใช้ to + กริยา ไม่ใช้ -ing เช่น Fah was the first student to finish the test. (ฟ้าทำเสร็จเอง) ถ้าคำนามนั้นเป็นผู้ถูกกระทำ ใช้ to be + V3 เช่น Mai was the first student to be chosen. (ใหม่เป็นคนแรกที่ได้รับเลือก) รูปแบบนี้เคยออกในข้อสอบ A-Level 2569 คือ the next foundation to be questioned คำคุณศัพท์บางตัว เช่น likely, due, certain ก็ตามด้วย to + กริยาเหมือนกัน เช่น Sports day is likely to be cancelled. (กีฬาสีน่าจะถูกยกเลิก) คำว่า first หรือ last ไม่ได้บอกว่าเป็น passive ต้องดูว่าคำนามนั้นทำเองหรือถูกกระทำ',
    analogy: { title: 'The queue at the canteen', text: 'Think of a queue for khao man gai. <em>Ploy was the first to <strong>order</strong></em> — she spoke to the cook. <em>Ploy was the first to <strong>be served</strong></em> — the cook handed her the plate. Same place in the queue, different action: the ordinal never decides the voice; the doer does.' },
    trap: 'After <em>the first</em> + noun, the exam offers <em>being chosen</em> as a near miss. It sounds passive and correct, but ordinals take <em>to</em>. Also watch for <em>the line is due to complete</em> — the line cannot complete anything.',
    map: { center: 'noun + to be V3', branches: [
      { label: 'Ordinals', leaves: ['the first / the last', 'the next / the only'] },
      { label: 'Adjectives', leaves: ['likely, due', 'certain, sure'] },
      { label: 'Receiver', leaves: ['the first to be chosen', 'due to be completed'] },
      { label: 'Doer', leaves: ['the first to finish', 'the last to leave'] },
      { label: 'Exam 2569', leaves: ['the next foundation', 'to be questioned'] }
    ] },
    story: { title: 'Bot Is First in Line', panels: [
      { who: 'Mint', text: 'Bot, were you picked for the robotics team?' },
      { who: 'Nong Bot', text: 'Yes! I was the first robot <em>being picked</em>! Beep beep!' },
      { who: 'Ploy', text: 'Hmm. And who was the last person to leave the lab yesterday?' },
      { who: 'Nong Bot', text: 'Me again! I was the last robot <em>to be left</em> the lab! Champion of firsts and lasts!' },
      { who: 'T.Chris', text: 'Ordinals take <em>to</em>: <em>the first robot <strong>to be picked</strong></em>. And you left by yourself, Bot: <em>the last <strong>to leave</strong></em>.' }
    ], moral: 'After <em>the first / the last</em> + noun, use <em>to</em>; then ask whether the noun does it or receives it.' },
    chant: { title: 'First and Last', beat: 'kick-kick-clap (4/4)', lines: [
      'The first, the last, the next, the only,',
      'Take a <em>to</em> — not <em>-ing</em>, not lonely!',
      'I did it first? <em>The first to finish</em>!',
      'Picked by the team? <em>The first to be picked</em>, yes!',
      'Likely, due, certain — <em>to</em> comes too,',
      '<em>Due to be completed</em> — the builders do!'
    ] },
    moves: [
      { move: 'Hold up one finger high', says: '<em>The first</em>...' },
      { move: 'Make a "to" arrow with your hand', says: '...takes a <em>to</em>!' },
      { move: 'Sprint on the spot', says: 'I did it: <em>the first to finish</em>!' },
      { move: 'Step forward as if your name was called', says: 'Done to me: <em>the first to be chosen</em>!' }
    ]
  },

  't4l2s1': {
    thai: 'กริยาบางตัวต้องตามด้วย -ing ไม่ใช่ to เช่น avoid, enjoy, mind, risk, resent, appreciate ถ้าประธานทำเอง ใช้ V-ing เช่น Pim enjoys singing. ถ้าประธานถูกกระทำ ใช้ being + V3 เช่น Pim enjoys being praised. (พิมชอบได้รับคำชม) หรือ Drivers risk being fined. (คนขับเสี่ยงที่จะถูกปรับ) คำว่า remember + -ing ใช้กับความทรงจำในอดีต เช่น Nan remembers being taken to the market. (น่านจำได้ว่าเคยถูกพาไปตลาด) ข้อผิดที่พบบ่อยคือ being + V1 เช่น being photograph และใช้ to be หลัง avoid เช่น avoid to be asked ซึ่งผิด ภาษาไทยไม่มีคำบอกรูปเลย จึงต้องจำกลุ่มกริยาให้ได้',
    analogy: { title: 'The -ing club door', text: 'Verbs like <em>avoid</em>, <em>enjoy</em> and <em>mind</em> run a club with one rule: <strong>only -ing forms may enter</strong>. An active verb walks in as <em>-ing</em> (<em>enjoy singing</em>). A passive verb must wear the club badge too: <strong>being</strong> + V3 (<em>enjoy being praised</em>). <em>To be</em> is turned away at the door.' },
    trap: 'The near miss is almost always <em>to be</em> + V3 after an <em>-ing</em> verb: <em>avoid to be asked</em>. It has the right passive meaning and the wrong shape. Learn the <em>-ing</em> verbs as a group, then check the shape before the voice.',
    map: { center: 'being + V3', branches: [
      { label: '-ing verbs', leaves: ['avoid, enjoy, mind', 'risk, resent'] },
      { label: 'Receiver', leaves: ['avoid being asked', 'risk being fined'] },
      { label: 'Doer', leaves: ['enjoy singing', 'don\'t mind waiting'] },
      { label: 'Memory', leaves: ['remember being taken', 'a past event'] },
      { label: 'Errors', leaves: ['avoid to be asked', 'being photograph'] }
    ] },
    story: { title: 'Bot and the Selfie', panels: [
      { who: 'Fah', text: 'Bot, smile! I\'m taking your photo for the school page.' },
      { who: 'Nong Bot', text: 'BEEP! I enjoy <em>photographing</em>!' },
      { who: 'Fah', text: 'But Bot, you\'re not holding the camera. I am.' },
      { who: 'Nong Bot', text: 'Correction: I enjoy <em>to be photograph</em>! Click click!' },
      { who: 'T.Chris', text: '<em>Enjoy</em> takes <em>-ing</em>, and Fah takes the photo, so: <em>I enjoy <strong>being photographed</strong>.</em> Now say cheese, Bot.' }
    ], moral: 'After <em>enjoy, avoid, mind, risk</em>, the passive is <em>being + V3</em>.' },
    chant: { title: 'The -ing Club', beat: 'kick-kick-clap (4/4)', lines: [
      'Avoid, enjoy, mind and risk,',
      'Only <em>-ing</em> on the guest list!',
      'I do it? <em>Singing</em>, <em>waiting</em>, fine!',
      'Done to me? <em>Being</em> plus V3 on the line!',
      '<em>Avoid being asked</em>, <em>risk being fined</em>,',
      'Leave <em>to be</em> outside, never mind!'
    ] },
    moves: [
      { move: 'Make a stop sign with your palm', says: 'No <em>to</em> after <em>avoid</em>!' },
      { move: 'Wave someone in', says: '<em>-ing</em> may enter!' },
      { move: 'Cover your face as if hiding from a camera', says: '<em>avoid being seen</em>' },
      { move: 'Look over your shoulder, remembering', says: '<em>I remember being taken</em> there.' }
    ]
  },

  't4l2s2': {
    thai: 'หลังคำบุพบท (preposition) เช่น without, after, before, instead of, of, about กริยาต้องเป็น -ing เสมอ ห้ามใช้ to + กริยา ถ้าประธานถูกกระทำ ใช้ being + V3 เช่น The cat got in without being noticed. (แมวเข้ามาโดยไม่มีใครเห็น) After being rescued, the families were taken to a school. (หลังจากได้รับการช่วยเหลือ) ระวังคำว่า to ที่เป็นบุพบท เช่น look forward to, be used to ซึ่งต้องตามด้วย -ing เหมือนกัน เช่น I am looking forward to being selected. แต่ถ้าประธานทำเอง ให้ใช้ V-ing ธรรมดา เช่น Mint is tired of wearing her sister\'s clothes. (มิ้นท์เป็นคนใส่เอง)',
    analogy: { title: 'The BTS gate', text: 'A preposition is like a BTS ticket gate: only one kind of card opens it, and that card is <strong>-ing</strong>. Doer? Tap <em>wearing</em>. Receiver? Tap <em>being worn</em>. A <em>to</em>-infinitive is the wrong card, every time.' },
    trap: 'The sneakiest preposition is the <em>to</em> in <em>look forward to</em> and <em>be used to</em>. It looks like part of an infinitive, so the exam offers <em>to be selected</em>. Dodge: if you can put a noun after that <em>to</em> (<em>look forward to the holiday</em>), it is a preposition, and <em>-ing</em> follows.',
    map: { center: 'prep + being V3', branches: [
      { label: 'Prepositions', leaves: ['without, after, before', 'instead of, of, about'] },
      { label: 'Hidden to', leaves: ['look forward to', 'be used to'] },
      { label: 'Receiver', leaves: ['without being seen', 'after being rescued'] },
      { label: 'Doer', leaves: ['tired of wearing', 'without asking'] },
      { label: 'Errors', leaves: ['without to be seen', 'tired of be told'] }
    ] },
    story: { title: 'Bot the Spy', panels: [
      { who: 'Ton', text: 'Bot, how did you get into the teachers\' room?' },
      { who: 'Nong Bot', text: 'Secret mission! I went in without <em>to be seen</em>. Beep!' },
      { who: 'Beam', text: 'And now you\'re hiding behind the plant?' },
      { who: 'Nong Bot', text: 'I am looking forward to <em>be rewarded</em> for my stealth!' },
      { who: 'T.Chris', text: 'After a preposition, <em>-ing</em>: <em>without <strong>being seen</strong></em>, <em>looking forward to <strong>being rewarded</strong></em>. Though I can see you very well, Bot.' }
    ], moral: 'After any preposition, including the <em>to</em> in <em>look forward to</em>, the passive is <em>being + V3</em>.' },
    chant: { title: 'Ticket Gate', beat: 'kick-kick-clap (4/4)', lines: [
      'Without, after, before, instead of —',
      'Only <em>-ing</em> gets through, that\'s the stuff!',
      'Nobody saw me? <em>Without being seen</em>!',
      'Saved by the boat? <em>After being rescued</em>, clean!',
      'Look forward to, used to — that <em>to</em> is a trick,',
      'It\'s a preposition: <em>-ing</em>, quick!'
    ] },
    moves: [
      { move: 'Tap an imaginary card on a gate', says: 'Preposition gate: <em>-ing</em> only!' },
      { move: 'Tiptoe on the spot', says: '<em>without being noticed</em>' },
      { move: 'Pretend to be pulled out of water', says: '<em>after being rescued</em>' },
      { move: 'Rub your hands together eagerly', says: '<em>looking forward to being chosen</em>' }
    ]
  },

  't4l2s3': {
    thai: 'passive ที่ไม่มี tense มีสองแบบ คือ to be + V3 และ being + V3 ความหมาย passive เหมือนกัน แต่กริยาข้างหน้าเป็นตัวเลือกรูป กลุ่มที่ตามด้วย to เช่น expect, hope, want, agree, refuse, deserve จะใช้ to be + V3 เช่น Earth agreed to be interviewed. กลุ่มที่ตามด้วย -ing เช่น avoid, enjoy, mind, risk และคำบุพบททุกตัว จะใช้ being + V3 เช่น Earth avoided being interviewed. คำว่า remember ใช้ได้ทั้งสองแบบแต่ความหมายต่างกัน remember being told คือจำได้ว่าเคยมีคนบอก (เรื่องในอดีต) ส่วน remember to คือ อย่าลืมทำหน้าที่ (เรื่องในอนาคต) วิธีทำข้อสอบ ถามสองข้อ หนึ่ง ใครทำ เพื่อเลือก active หรือ passive สอง กริยาข้างหน้าคือตัวไหน เพื่อเลือก to หรือ -ing',
    analogy: { title: 'Two plug shapes', text: 'Thai sockets and UK sockets give the same electricity, but the plug must fit the wall. The passive meaning is the electricity. The first verb is the wall: <em>expect</em> takes the <strong>to be</strong> plug, <em>avoid</em> takes the <strong>being</strong> plug. Force the wrong plug in and nothing works.' },
    trap: 'Almost every item here offers both <em>to be</em> + V3 and <em>being</em> + V3, and both look passive. The voice is not the question — the first verb is. Also, never use <em>remember to be</em> for a childhood memory.',
    map: { center: 'to be or being?', branches: [
      { label: 'to be + V3', leaves: ['expect, hope, agree', 'refuse, deserve'] },
      { label: 'being + V3', leaves: ['avoid, enjoy, mind', 'risk + prepositions'] },
      { label: 'Remember', leaves: ['being told = memory', 'to = a duty'] },
      { label: 'Step 1', leaves: ['who does it?', 'active or passive'] },
      { label: 'Step 2', leaves: ['look at the first verb', 'to or -ing'] }
    ] },
    story: { title: 'Bot Mixes the Plugs', panels: [
      { who: 'Earth', text: 'The school magazine wants to interview me!' },
      { who: 'Nong Bot', text: 'BEEP! Earth agreed <em>being interviewed</em> and avoided <em>to be photographed</em>!' },
      { who: 'Nan', text: 'Bot, that sounds... upside down.' },
      { who: 'Nong Bot', text: 'Both are passive! Passive is passive! Why does the shape matter?' },
      { who: 'T.Chris', text: 'The first verb chooses, Bot. <em>Agree</em> takes <em>to</em>: <em><strong>agreed to be interviewed</strong></em>. <em>Avoid</em> takes <em>-ing</em>: <em><strong>avoided being photographed</strong></em>.' }
    ], moral: 'The passive meaning is the same; the first verb decides between <em>to be + V3</em> and <em>being + V3</em>.' },
    chant: { title: 'Which Plug?', beat: 'kick-kick-clap (4/4)', lines: [
      'Expect, hope, agree — <em>to be</em> plus V3!',
      'Avoid, enjoy, mind — <em>being</em>, you see!',
      'Same passive meaning, different door,',
      'The first verb chooses, that\'s the law!',
      '<em>Remember being told</em> — that\'s the past,',
      '<em>Remember to</em> — a job, so do it fast!'
    ] },
    moves: [
      { move: 'Hold your left hand out flat', says: 'Left hand: <em>to be</em> + V3 — <em>expect, hope, agree</em>.' },
      { move: 'Hold your right hand out flat', says: 'Right hand: <em>being</em> + V3 — <em>avoid, enjoy, mind</em>.' },
      { move: 'Tap your temple and look back', says: '<em>remember being told</em> — a memory' },
      { move: 'Point forward as if to a to-do list', says: '<em>remember to</em> — a duty' }
    ]
  },

  't4l3s1': {
    thai: 'กริยา seem, appear, claim, pretend ตามด้วย to + กริยา ถ้าพูดถึงตอนนี้ ใช้ to be เช่น The door seems to be locked. (ประตูดูเหมือนจะล็อกอยู่) ถ้าพูดถึงสิ่งที่เกิดขึ้นก่อนหน้า ใช้ to have + V3 และถ้าประธานเป็นผู้ถูกกระทำในเหตุการณ์นั้น ใช้ to have been + V3 เช่น The door seems to have been forced open last night. (ดูเหมือนประตูถูกงัดเมื่อคืน) ให้อ่านเป็นสองชั้น seems คือตอนนี้ที่เราเห็น ส่วน to have been forced คือเรื่องที่เกิดก่อน คำบอกเวลาในอดีต เช่น last night หรือ in the 1500s เป็นสัญญาณสำคัญว่าต้องใช้รูป perfect ข้อผิดที่พบบ่อยคือ ลืม been เช่น seems to have built ซึ่งแปลว่าวัดสร้างอะไรบางอย่างเอง',
    analogy: { title: 'The detective\'s photo', text: 'A detective looks at a broken lock <strong>now</strong> and works out what happened <strong>earlier</strong>. <em>Seems</em> is the photo in her hand today; <em>to have been forced</em> is the story of last night. Two times, one sentence — and the door is the victim, so it needs <strong>been</strong>.' },
    trap: 'With a past time marker like <em>last night</em>, the near miss is the present form <em>to be forced open</em>: passive, but stuck in the present. With a receiver subject, the other near miss is <em>to have painted</em>: past, but active. You need both: perfect <strong>and</strong> passive.',
    map: { center: 'to have been V3', branches: [
      { label: 'Verbs', leaves: ['seem, appear', 'claim, pretend'] },
      { label: 'Now', leaves: ['seems to be locked', 'a present state'] },
      { label: 'Earlier + done', leaves: ['to have been stolen', 'to have been painted'] },
      { label: 'Time signals', leaves: ['last night, ago', 'in the 1500s'] },
      { label: 'Errors', leaves: ['to have built (temple)', 'claims being chosen'] }
    ] },
    story: { title: 'Detective Bot', panels: [
      { who: 'Pond', text: 'Bot! The money in the club box is gone!' },
      { who: 'Nong Bot', text: 'Analysing... The money seems <em>to have stolen</em> last night. Beep!' },
      { who: 'Mint', text: 'So the money stole something? Clever money.' },
      { who: 'Nong Bot', text: 'Recalculating... The money seems <em>to be stolen</em> last night!' },
      { who: 'T.Chris', text: 'Last night is earlier, and the money was the victim: <em>it seems <strong>to have been stolen</strong></em>. Case closed, Detective Bot.' }
    ], moral: 'For something done to the subject before now, use <em>seem / appear / claim + to have been + V3</em>.' },
    chant: { title: 'Then and Now', beat: 'kick-kick-clap (4/4)', lines: [
      'Seems, appears — that\'s right now!',
      'What happened before? Here\'s how:',
      '<em>To have</em> for earlier, that\'s the key,',
      'Done to it? Add <em>been</em> plus V3!',
      '<em>It seems to have been stolen</em>, oh no!',
      '<em>It appears to have been painted</em> long ago!'
    ] },
    moves: [
      { move: 'Hold a magnifying glass to your eye', says: '<em>It seems...</em> (now)' },
      { move: 'Point back over your shoulder', says: '<em>...to have...</em> (earlier)' },
      { move: 'Put your hands up like a victim', says: '<em>...been stolen</em> (done to it)' },
      { move: 'Shake your head and wag a finger', says: 'not <em>to be stolen last night</em>!' }
    ]
  },

  't4l3s2': {
    thai: 'having been + V3 ใช้เปิดประโยค เพื่อบอกว่ามีบางอย่างเกิดขึ้นกับประธานก่อนการกระทำหลัก เช่น Having been warned twice, Mint had no excuse. (มิ้นท์ถูกเตือนมาแล้วสองครั้ง จึงไม่มีข้ออ้าง) รูปนี้พบบ่อยในบทอ่านและข่าว ระดับ C1 ให้ฝึกอ่านให้เข้าใจเป็นหลัก กฎสำคัญคือ ประธานของประโยคหลักต้องเป็นคนหรือสิ่งที่ถูกกระทำในตอนแรก เช่น Having been repaired twice, my laptop still crashes. ถูก เพราะแล็ปท็อปถูกซ่อม แต่ Having been repaired twice, I still cannot use my laptop. ผิด เพราะแปลว่าตัวเราเป็นคนถูกซ่อม และถ้าประธานทำเอง ให้ใช้ having + V3 เช่น Having won the prize, Pim thanked her parents.',
    analogy: { title: 'The relay baton', text: 'In a relay, the runner who <strong>receives</strong> the baton is the one who runs the next leg. A <em>having been</em> clause hands its baton to the main subject. <em>Having been warned, <u>Mint</u>...</em> — Mint got the warning, so Mint must run the next leg. Hand it to the wrong runner and the race (and the sentence) falls apart.' },
    trap: 'The exam may give a correct form with the wrong subject: <em>Having been damaged in the earthquake, workers closed the bridge.</em> The form is perfect, but it says the workers were damaged. Always check who comes right after the comma.',
    map: { center: 'having been V3', branches: [
      { label: 'Meaning', leaves: ['done to the subject', 'before the main action'] },
      { label: 'Form', leaves: ['having + been + V3', 'not having being'] },
      { label: 'Subject check', leaves: ['who comes after comma?', 'must be the receiver'] },
      { label: 'Active twin', leaves: ['Having won the prize', 'subject did it'] },
      { label: 'Where', leaves: ['news reports', 'reading passages'] }
    ] },
    story: { title: 'Bot Gets Repaired', panels: [
      { who: 'Nan', text: 'Bot, you were in the repair shop all week! How are you?' },
      { who: 'Nong Bot', text: '<em>Having repaired twice</em>, I am now perfect! Beep!' },
      { who: 'Nan', text: 'You repaired something? I thought the technician repaired you.' },
      { who: 'Nong Bot', text: 'True. <em>Having been repaired twice, the technician</em> was very tired!' },
      { who: 'T.Chris', text: 'Now the technician sounds broken, Bot. Say: <em><strong>Having been repaired</strong> twice, <strong>I</strong> am working again.</em>' }
    ], moral: 'Use <em>having been + V3</em> for something done to the subject first, and make sure the main subject is the one who received it.' },
    chant: { title: 'Pass the Baton', beat: 'kick-kick-clap (4/4)', lines: [
      '<em>Having been</em> plus V3 — it happened first!',
      'Done to the subject, that\'s the burst!',
      'After the comma, who do you see?',
      'The one who received it — that\'s the key!',
      'Did it yourself? <em>Having won</em>, you say,',
      'Had it done to you? <em>Having been</em> all the way!'
    ] },
    moves: [
      { move: 'Hold out a hand to receive a baton', says: '<em>Having been warned...</em>' },
      { move: 'Point at the person next to you', says: '...the subject must be the one who got it!' },
      { move: 'Run on the spot', says: 'Then the main action: <em>...she left early.</em>' },
      { move: 'Raise a trophy', says: 'Did it yourself? <em>Having won the prize...</em>' }
    ]
  },

  't4l3s3': {
    thai: 'เมื่อเรียน to be + V3 แล้ว นักเรียนหลายคนเริ่มใช้ passive ทุกที่ ซึ่งผิด ต้องถามทุกครั้งว่าใครเป็นคนทำกริยาตัวนั้น ถ้าประธานหรือคำนามข้างหน้าทำเอง ใช้ to + V1 เช่น I have a history essay to write. (ฉันเป็นคนเขียน) ถ้าประธานเป็นผู้ถูกกระทำ ใช้ to be + V3 เช่น The essay needs to be written. (เรียงความต้องถูกเขียน) กับดักที่พบบ่อยมีสองแบบ แบบแรก a quiet place to study ต้องเป็น active เพราะพลอยเป็นคนอ่านหนังสือ ไม่ใช่สถานที่ถูกอ่าน แบบที่สอง หลังคำคุณศัพท์ easy, difficult, hard ให้ใช้ active เสมอ เช่น This novel is easy to read. ไม่ใช่ easy to be read และถ้ามีกรรมตามหลังช่องว่าง มักเป็น active',
    analogy: { title: 'Who holds the pen?', text: 'Before you choose, find <strong>who holds the pen</strong>. <em>I have an essay to write</em> — I hold the pen. <em>The essay needs to be written</em> — the essay is the paper, not the pen. A paper cannot write, and a quiet library corner cannot study. Find the hand, then choose the voice.' },
    trap: 'After learning the passive infinitive, students over-use it: <em>a place to be studied</em>, <em>easy to be read</em>, <em>has a job to be done</em>. If the subject is the person who will do the job, or an object follows the gap, keep the infinitive active.',
    map: { center: 'Who does it?', branches: [
      { label: 'Subject does it', leaves: ['I have an essay to write', 'has a job to do'] },
      { label: 'Subject receives', leaves: ['needs to be written', 'wants to be left alone'] },
      { label: 'Place / thing', leaves: ['a place to study', 'something to eat'] },
      { label: 'easy / hard', leaves: ['easy to read', 'not easy to be read'] },
      { label: 'Object follows', leaves: ['to represent the school', 'then active'] }
    ] },
    story: { title: 'Bot Over-Passives', panels: [
      { who: 'Ploy', text: 'Bot, I need somewhere quiet. My house is so noisy.' },
      { who: 'Nong Bot', text: 'BEEP! I will find you a quiet place <em>to be studied</em>!' },
      { who: 'Ploy', text: 'I don\'t want the place to be studied. I want to study there!' },
      { who: 'Nong Bot', text: 'Also, this textbook is easy <em>to be read</em>. Passive everywhere! I love it!' },
      { who: 'T.Chris', text: 'Who holds the pen, Bot? Ploy does: <em>a quiet place <strong>to study</strong></em>. And after <em>easy</em>, stay active: <em>easy <strong>to read</strong></em>.' }
    ], moral: 'Find the doer first: if the subject does the action, the infinitive stays active.' },
    chant: { title: 'Who Holds the Pen?', beat: 'kick-kick-clap (4/4)', lines: [
      'Who holds the pen? Ask it first!',
      'Passive everywhere? That\'s the worst!',
      'I have an essay — <em>to write</em>, that\'s me!',
      'The essay needs <em>to be written</em> — see?',
      'A place <em>to study</em>, a book <em>easy to read</em>,',
      'Find the doer, that\'s all you need!'
    ] },
    moves: [
      { move: 'Mime holding a pen', says: 'Who holds the pen?' },
      { move: 'Point at yourself and write in the air', says: '<em>I have an essay to write.</em>' },
      { move: 'Hold up a sheet of paper and look at it', says: '<em>The essay needs to be written.</em>' },
      { move: 'Flip an imaginary book open with ease', says: '<em>easy to read</em> — stay active!' }
    ]
  }
});
