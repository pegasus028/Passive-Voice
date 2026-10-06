/* VOICE CONTROL — lenses-s5.js · Stage 05 lesson lenses */
Object.assign(LENSES, {
  t5l1s1: {
    thai: 'กริยาบางตัว เช่น give, show, offer, tell, send, teach มีกรรมสองตัว คือ "คน" ที่ได้รับ และ "สิ่งของ" ที่ถูกส่งให้ เช่น The school gave Fah a scholarship. เมื่อทำเป็น passive เราเอา "คนที่ได้รับ" ขึ้นมาเป็นประธานได้ แล้วตามด้วย be + V3 และสิ่งของต่อท้ายทันที เช่น Fah was given a scholarship. ห้ามใส่ to หรือ for หน้าสิ่งของ (ผิด: was given to a scholarship) ความหมายแบบนี้คนไทยอาจคิดเป็น "ได้รับ…" แต่ภาษาไทยไม่จำเป็นต้องมีคำบอก passive เสมอ ในขณะที่ภาษาอังกฤษต้องมี be + V3 ทุกครั้ง วิธีเช็กคือถามว่าใครเป็นคนรับ คนนั้นคือประธาน และระวังอย่าใช้ active เพราะ Fah gave a scholarship แปลว่าฟ้าเป็นคนให้ทุนเอง',
    analogy: {
      title: 'The delivery rider',
      text: 'Think of a delivery rider bringing you a bubble tea. You can tell the story from the rider\'s side (<em>The rider gave me a bubble tea</em>) or from yours: <em>I <strong>was given</strong> a bubble tea.</em> The drink is still in the bag, right next to the verb — nobody puts a "to" between you and your tea.'
    },
    trap: 'Exams offer <em>was given <strong>to</strong> a prize</em> as the near miss: it has the right voice and looks extra-correct. Dodge it: when the person is the subject, the thing comes straight after the participle with nothing in front of it.',
    map: {
      center: 'Person first',
      branches: [
        { label: 'Two objects', leaves: ['a person + a thing', 'give Fah a prize'] },
        { label: 'Verbs', leaves: ['give, show, offer, tell', 'send, teach, lend, award'] },
        { label: 'Passive', leaves: ['Fah was given a prize', 'be + V3 + thing'] },
        { label: 'No preposition', leaves: ['✗ given to a prize', 'thing follows directly'] },
        { label: 'Any tense', leaves: ['have been offered', 'will be sent'] }
      ]
    },
    story: {
      title: 'Nong Bot Gets a Gift',
      panels: [
        { who: 'Pim', text: 'Happy birthday, Bot! Here is a new battery for you.' },
        { who: 'Nong Bot', text: 'BEEP! Report: Bot gave a battery! Bot is very generous!' },
        { who: 'Fah', text: 'No, Bot, you didn\'t give anything. Pim gave it to you.' },
        { who: 'Nong Bot', text: 'Correction: Bot was given TO a battery. Beep beep!' },
        {
          who: 'T.Chris',
          text: 'Close, Bot. You received it, so say <em>I <strong>was given</strong> a battery</em> — no <em>to</em> before the thing.'
        }
      ],
      moral: 'When the person receives something, the person is the subject and the thing follows the participle directly.'
    },
    chant: {
      title: 'I Was Given',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Give me, show me, tell me too,',
        'the <strong>person</strong> goes first — that means <strong>you</strong>!',
        '<em>I was given</em>, <em>I was shown</em>,',
        'the <strong>thing</strong> comes next, all on its own.',
        'No <em>to</em>, no <em>for</em> in between,',
        'be + V3 — keep it clean!'
      ]
    },
    moves: [
      {
        move: 'Hold out both hands as if receiving a box',
        says: 'The <strong>person</strong> receives — person first!'
      },
      {
        move: 'Point down at the floor for "be"',
        says: '<em>was</em>, <em>were</em>, <em>have been</em>…'
      },
      {
        move: 'Mime pulling the box close to your chest',
        says: 'The thing stays <strong>right next to</strong> the verb.'
      },
      { move: 'Cross your arms in an X', says: 'No <em>to</em> before the thing!' }
    ]
  },
  t5l1s2: {
    thai: 'กริยาที่มีกรรมสองตัวสามารถเอา "สิ่งของ" ขึ้นเป็นประธานได้เช่นกัน เช่น A prize was awarded to Pim. เมื่อสิ่งของเป็นประธาน คนจะถูกย้ายไปไว้ท้ายประโยคและต้องมีคำบุพบทนำหน้า ถ้ากริยามีความหมายว่า "ส่งต่อจากคนหนึ่งไปอีกคน" เช่น give, send, hand, lend, award, show ให้ใช้ to แต่ถ้ากริยามีความหมายว่า "ทำให้ / ทำแทน" เช่น book, buy, cook, make, order, save ให้ใช้ for เช่น A table was booked for us. ระวัง awarded for + เหตุผล (ได้รางวัลเพราะอะไร) ไม่ใช่คนที่ได้รับ และกริยากลุ่ม for มักไม่นิยมเอาคนขึ้นเป็นประธาน เช่น Mai was cooked a dinner ฟังแปลกมาก',
    analogy: {
      title: 'Passing the ball or cooking for a friend',
      text: 'In football, you pass the ball <strong>to</strong> a teammate — it travels across. In the kitchen, you cook a meal <strong>for</strong> a friend — you do the work on their behalf. Verbs that pass something across take <em>to</em>; verbs that do a job on someone\'s behalf take <em>for</em>.'
    },
    trap: 'Tests put <em>was awarded <strong>for</strong></em> next to <em>was awarded <strong>to</strong></em>. Both exist, but <em>for</em> + reason (<em>for her research</em>) and <em>to</em> + receiver (<em>to Pim</em>) answer different questions. Check what follows: a person who receives, or a reason?',
    map: {
      center: 'Thing first',
      branches: [
        { label: 'Pattern', leaves: ['thing + be + V3', '+ to / for + person'] },
        { label: 'Passes across', leaves: ['give, send, hand, lend', 'sent to every parent'] },
        { label: 'On your behalf', leaves: ['book, buy, cook, save', 'booked for us'] },
        { label: 'to vs for', leaves: ['awarded to Pim (who)', 'awarded for (why)'] },
        { label: 'Odd subject', leaves: ['✗ We were booked a table', 'thing first with for-verbs'] }
      ]
    },
    story: {
      title: 'Nong Bot Books a Table',
      panels: [
        { who: 'Mai', text: 'Bot, please book a table at the noodle shop for my family.' },
        { who: 'Nong Bot', text: 'BEEP! Done! A table has been booked TO your family!' },
        { who: 'Mai', text: 'To? Did you post the table to my house?' },
        {
          who: 'Nong Bot',
          text: 'Bot always uses <em>to</em>. <em>To</em> is Bot\'s favourite word. Beep!'
        },
        {
          who: 'T.Chris',
          text: 'Booking is done <em>on Mai\'s behalf</em>, Bot, so <em>a table has been booked <strong>for</strong> her family</em>. Keep <em>to</em> for things that pass across.'
        }
      ],
      moral: 'With the thing as subject, passing across takes <em>to</em> and doing something on someone\'s behalf takes <em>for</em>.'
    },
    chant: {
      title: 'To or For',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Send it, hand it, pass it <strong>to</strong>,',
        'the thing goes across from me to you.',
        'Book it, cook it, buy it <strong>for</strong>,',
        'I do the job — you get it, sure!',
        'Thing goes first, then <em>be</em> + V3,',
        '<em>to</em> or <em>for</em>, then the person — see?'
      ]
    },
    moves: [
      {
        move: 'Throw an imaginary ball to a partner',
        says: '<em>Sent <strong>to</strong></em>, <em>handed <strong>to</strong></em>!'
      },
      {
        move: 'Stir an imaginary pot',
        says: '<em>Cooked <strong>for</strong></em>, <em>made <strong>for</strong></em>!'
      },
      { move: 'Hold up an object high', says: 'The <strong>thing</strong> is the subject.' },
      { move: 'Point to a friend at the end', says: 'The person comes <strong>last</strong>.' }
    ]
  },
  t5l1s3: {
    thai: 'กริยากลุ่ม explain, describe, suggest, mention, say, report, introduce, announce ดูเหมือน give แต่ไม่เหมือนกัน เพราะกริยากลุ่มนี้ไม่เคยรับ "ผู้ฟัง" เป็นกรรมตรง ผู้ฟังต้องมี to นำหน้าเสมอ เช่น T.Chris explained the rule to us. (ผิด: explained us the rule) ดังนั้นเวลาทำ passive จะเอาผู้ฟังขึ้นเป็นประธานไม่ได้ ผิด: We were explained the rule. ผิด: She was suggested a topic. ต้องเอา "สิ่งที่ถูกอธิบาย" ขึ้นเป็นประธานแทน เช่น The rule was explained to us. ใส่ about เพิ่มก็ไม่ช่วย (ผิด: I was explained about the rule) และบางครั้ง active ก็ดีที่สุด เช่น The principal explained the policy to the parents.',
    analogy: {
      title: 'The one-way door',
      text: 'Imagine <em>give</em> and <em>explain</em> as two classrooms. <em>Give</em> has two doors: the person can come in first or the thing can. <em>Explain</em> has only one door, and the <strong>thing</strong> always walks through it; the listener waits outside with a <em>to</em> badge. No passive can open a door that was never there.'
    },
    trap: 'The trap option is <em>She was explained the timetable</em> — it copies the <em>give</em> pattern and sounds fine to Thai ears. Dodge it: with <em>explain, describe, suggest, mention, say</em>, check that the listener comes after <em>to</em>; if the listener is the subject, rebuild around the thing.',
    map: {
      center: 'No listener subject',
      branches: [
        { label: 'The verbs', leaves: ['explain, describe', 'suggest, mention, say'] },
        { label: 'Active', leaves: ['explain it to us', '✗ explain us it'] },
        { label: 'Passive', leaves: ['It was explained to us.', 'thing = subject'] },
        { label: 'Never', leaves: ['✗ We were explained it.', '✗ was explained about'] },
        { label: 'Or stay active', leaves: ['speaker as subject', 'explained it to them'] }
      ]
    },
    story: {
      title: 'Nong Bot Was Explained',
      panels: [
        { who: 'Nan', text: 'Bot, why did you mix the chemicals?' },
        { who: 'Nong Bot', text: 'BEEP! Bot was not explained the safety rules!' },
        { who: 'Nan', text: 'Hmm. Were you told the rules?' },
        {
          who: 'Nong Bot',
          text: 'Bot was told. Bot was given. So Bot was explained! Logic complete. Beep!'
        },
        {
          who: 'T.Chris',
          text: '<em>Tell</em> and <em>give</em> allow that, Bot, but <em>explain</em> does not. Say <em>The safety rules <strong>were explained to</strong> me</em> — and next time, listen to them!'
        }
      ],
      moral: 'With <em>explain</em> and its group, the thing is the passive subject and the listener keeps <em>to</em>.'
    },
    chant: {
      title: 'Explained to Me',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Explain, describe, suggest and say,',
        'the listener needs a <strong>to</strong> all day.',
        'Not <em>I was explained</em> — that\'s a no!',
        '<em>The rule was explained to me</em>, so',
        'put the <strong>thing</strong> up front, the listener last,',
        '<em>to</em> + person — learn it fast!'
      ]
    },
    moves: [
      {
        move: 'Draw a big book shape in the air',
        says: 'The <strong>thing</strong> is the subject.'
      },
      { move: 'Cup your hand behind your ear', says: 'The listener comes after <em>to</em>.' },
      { move: 'Shake your head and wag a finger', says: 'Never <em>I was explained</em>!' },
      {
        move: 'Point to the speaker (yourself)',
        says: 'Or keep it active: <em>I explained it to them</em>.'
      }
    ]
  },
  t5l2s1: {
    thai: 'กริยาหลายตัวต้องมีคำบุพบทก่อนกรรม เช่น look after (ดูแล), pay for (จ่ายค่า), laugh at (หัวเราะเยาะ), deal with (จัดการ), rely on (พึ่งพา), operate on (ผ่าตัด) เวลาทำ passive กรรมย้ายไปเป็นประธาน แต่คำบุพบทไม่ได้ย้ายตาม มันยังอยู่หลัง V3 ตรงที่เดิม เช่น Nan was looked after by her grandmother. / The tickets have been paid for. ถ้ามีผู้กระทำ จะมี by ต่อท้ายอีกตัว เช่น Ton was laughed at by the class. ดูแปลกแต่ถูก ทริกคือพูดประโยค active ในใจก่อน ได้ยินคำบุพบทตัวไหน ต้องเก็บไว้ตัวนั้น และระวัง ถ้าประธานเป็นผู้กระทำเอง ต้องใช้ active เช่น Students rely on their phones.',
    analogy: {
      title: 'The sticker that won\'t peel off',
      text: 'A preposition like <em>after</em> in <em>look after</em> is a sticker glued onto the verb. When the object moves to the front of the sentence, the sticker <strong>stays on the verb</strong>: <em>Nan was looked <strong>after</strong>.</em> Peel it off and the verb becomes a different verb.'
    },
    trap: 'The near miss is the same passive without its preposition — <em>was looked</em>, <em>have been paid</em>, <em>was operated</em>. It looks complete because the sentence seems to end naturally. Dodge it: say the active aloud first and keep every small word you hear.',
    map: {
      center: 'Keep the preposition',
      branches: [
        { label: 'Verbs', leaves: ['look after, pay for', 'laugh at, deal with'] },
        { label: 'Passive', leaves: ['was looked after', 'has been paid for'] },
        { label: 'With a doer', leaves: ['laughed at by the class', 'two small words in a row'] },
        { label: 'Test', leaves: ['say the active first', 'keep what you hear'] },
        { label: 'Active still', leaves: ['Students rely on phones.', 'subject = doer'] }
      ]
    },
    story: {
      title: 'Nong Bot Pays',
      panels: [
        { who: 'Mint', text: 'Bot, did you get the concert tickets?' },
        { who: 'Nong Bot', text: 'BEEP! The tickets have been paid. Bot deleted the extra word.' },
        { who: 'Mint', text: 'Paid? Did you give the tickets money?' },
        { who: 'Nong Bot', text: 'Yes! Each ticket received five hundred baht. Beep!' },
        {
          who: 'T.Chris',
          text: 'Oh no, Bot. You pay <em>for</em> things, so <em>the tickets <strong>have been paid for</strong></em>. The preposition stays — and please get the money back from the tickets.'
        }
      ],
      moral: 'A prepositional verb keeps its preposition after the participle in the passive.'
    },
    chant: {
      title: 'Stick It On',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Look <strong>after</strong>, pay <strong>for</strong>, laugh <strong>at</strong> — yes,',
        'the little word stays, no more, no less.',
        'Object moves up to the front,',
        'the preposition stays — that\'s the stunt!',
        '<em>Looked after by</em>, <em>laughed at by</em> —',
        'two small words, and we know why!'
      ]
    },
    moves: [
      {
        move: 'Press your palm flat on your arm like a sticker',
        says: 'The preposition <strong>sticks</strong> to the verb.'
      },
      { move: 'Step forward', says: 'The object moves to the front.' },
      { move: 'Keep the "sticker" hand still', says: 'The preposition stays behind!' },
      { move: 'Clap twice quickly', says: '<em>at by</em>, <em>after by</em> — two small words!' }
    ]
  },
  t5l2s2: {
    thai: 'Phrasal verb คือกริยา + particle ที่รวมกันเป็นคำเดียวและมีความหมายใหม่ เช่น call off = ยกเลิก, put off = เลื่อน, turn down = ปฏิเสธ, bring up = เลี้ยงดู, put out = ดับไฟ เวลาทำ passive ต้องเก็บ particle ไว้หลัง V3 เสมอ เช่น The match was called off. ถ้าตัด particle ทิ้ง ความหมายจะเปลี่ยนทันที และถ้าเปลี่ยน particle ก็กลายเป็นคำอื่น เช่น put off กับ put out สำคัญมาก: phrasal verb ที่ไม่มีกรรม เช่น take off (เครื่องบินขึ้น), grow up (โตขึ้น), break down (เสีย) ทำ passive ไม่ได้ ต้องใช้ active เช่น The plane took off late. ถ้าอยากพูดว่ามีคนเลี้ยงดู ให้ใช้ She was brought up by her aunt. ไม่ใช่ was grown up',
    analogy: {
      title: 'A two-piece key',
      text: 'A phrasal verb is like a key made of two pieces glued together: <em>call</em> + <em>off</em>. In the passive the key still has to turn the same lock, so both pieces travel together: <em>was called <strong>off</strong></em>. Snap off the second piece — or swap it for <em>out</em> — and the key opens a completely different door.'
    },
    trap: 'Two traps: a passive with the wrong particle (<em>The fire was put <strong>off</strong></em>) and a passive of a phrasal verb with no object (<em>was grown up</em>, <em>was taken off</em> for a plane). Dodge them: check the meaning of the whole verb, and check that it can take an object.',
    map: {
      center: 'Phrasal passive',
      branches: [
        { label: 'One unit', leaves: ['call off = cancel', 'turn down = refuse'] },
        { label: 'Passive', leaves: ['was called off', 'was turned down'] },
        { label: 'Wrong particle', leaves: ['put off = postpone', 'put out = stop a fire'] },
        { label: 'No object', leaves: ['take off, grow up', 'break down: active only'] },
        { label: 'Fix', leaves: ['✗ was grown up', 'was brought up'] }
      ]
    },
    story: {
      title: 'Nong Bot and the Fire Drill',
      panels: [
        { who: 'Ploy', text: 'Bot, there was a small fire in the science lab!' },
        { who: 'Nong Bot', text: 'BEEP! Do not worry. The fire was put off.' },
        { who: 'Ploy', text: 'Put OFF? So it will burn next week instead?' },
        { who: 'Nong Bot', text: 'Correct. Also, Bot was grown up in a factory. Beep!' },
        {
          who: 'T.Chris',
          text: 'Two fixes, Bot: <em>the fire <strong>was put out</strong></em>, and you <em><strong>were built</strong></em> in a factory. <em>Grow up</em> has no object, so it has no passive.'
        }
      ],
      moral: 'In the passive the particle stays with its verb, and phrasal verbs with no object stay active.'
    },
    chant: {
      title: 'Called Off',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Called <strong>off</strong>, put <strong>off</strong>, turned <strong>down</strong> — stay!',
        'The particle never runs away.',
        '<em>Put out</em> the fire, <em>put off</em> the date,',
        'change the particle, change your fate!',
        'The plane <em>took off</em>, the kids <em>grew up</em> —',
        'no object there, so active, yup!'
      ]
    },
    moves: [
      {
        move: 'Hold two fists together, touching',
        says: 'Verb + particle: <strong>one unit</strong>.'
      },
      {
        move: 'Swap one fist for an open hand',
        says: 'New particle, <strong>new meaning</strong>!'
      },
      {
        move: 'Raise an arm like a plane taking off',
        says: '<em>The plane took off</em> — no object, active!'
      },
      { move: 'Mime spraying a fire extinguisher', says: '<em>The fire was put out!</em>' }
    ]
  },
  t5l2s3: {
    thai: 'make (บังคับ) และ let (อนุญาต) ในรูป active ตามด้วยกริยาช่อง 1 ไม่มี to เช่น The coach made us run. / My parents let me stay out. แต่พอเป็น passive จะต่างกัน: make กลายเป็น be made to do คือ to กลับมา เช่น We were made to run ten laps. (ผิด: were made run) ส่วน let ไม่มีรูป passive เลย ต้องเปลี่ยนไปใช้ allow แทน เช่น I was allowed to go home. (ผิด: was let to go / was let go home) อย่าลืมว่า let ในรูป active ใช้ได้ปกติ เช่น T.Chris let us leave early. และเลือกตามความหมาย: made to = ถูกบังคับ, allowed to = ได้รับอนุญาต',
    analogy: {
      title: 'The school gate',
      text: 'Think of two security guards at the school gate. Guard <em>Make</em> pushes you through, and when you tell the story later you say <em>I <strong>was made to</strong> go in</em> — the <em>to</em> comes back. Guard <em>Let</em> just opens the gate, but he never appears in a passive story; his twin brother <em>Allow</em> does: <em>I <strong>was allowed to</strong> go in</em>.'
    },
    trap: 'Exams test <em>was made <strong>to</strong> do</em> by offering <em>was made do</em>, which copies the active. They also offer <em>was let to</em>, which looks like a normal passive. Dodge: force → <em>be made to</em>; permission → <em>be allowed to</em>; active <em>let</em> stays bare.',
    map: {
      center: 'Make and let',
      branches: [
        { label: 'Active make', leaves: ['made us run', 'no to'] },
        { label: 'Passive make', leaves: ['were made to run', 'to comes back'] },
        { label: 'Let', leaves: ['no passive at all', '✗ was let to go'] },
        { label: 'Use allow', leaves: ['was allowed to go', 'permission'] },
        { label: 'Active let', leaves: ['let me stay out', 'still fine'] }
      ]
    },
    story: {
      title: 'Nong Bot Stays Late',
      panels: [
        { who: 'Earth', text: 'Bot, why are you still at school? It\'s six o\'clock!' },
        { who: 'Nong Bot', text: 'BEEP! Bot was made clean the whole lab.' },
        { who: 'Earth', text: 'Poor Bot. Can you go home now?' },
        { who: 'Nong Bot', text: 'Yes! Bot was let to go home. Bot is so happy. Beep!' },
        {
          who: 'T.Chris',
          text: 'Nice work, Bot — but say <em>I <strong>was made to</strong> clean the lab</em> and <em>I <strong>was allowed to</strong> go home</em>. <em>Let</em> has no passive.'
        }
      ],
      moral: 'Passive <em>make</em> takes <em>to</em>; <em>let</em> has no passive, so use <em>be allowed to</em>.'
    },
    chant: {
      title: 'Made To, Allowed To',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>Made me do it</em> — no <em>to</em> there,',
        'but <em>I was made <strong>to</strong></em> — it\'s back, so beware!',
        '<em>Let me go</em> is fine and free,',
        'but <em>let</em> has no passive — not for me!',
        'Switch to <strong>allow</strong> and you\'ll be fine:',
        '<em>I was allowed to</em> — every time!'
      ]
    },
    moves: [
      {
        move: 'Push the air forward with both hands',
        says: 'Force: <em>I was made <strong>to</strong>…</em>'
      },
      {
        move: 'Open an imaginary gate',
        says: 'Permission: <em>I was allowed <strong>to</strong>…</em>'
      },
      { move: 'Make a big X with your arms', says: '<em>Let</em> has no passive!' },
      { move: 'Give a thumbs up', says: 'Active <em>let me stay</em> — still OK!' }
    ]
  },
  t5l3s1: {
    thai: 'หลังกริยา passive ที่เกี่ยวกับการมอง การเรียกชื่อ และการตัดสิน เช่น seen, known, regarded, described, referred to ถ้าคำนามที่ตามมาเป็น "บทบาท ชื่อ หรือป้ายกำกับ" ของประธาน ต้องใช้ as เช่น The elephant is seen as a symbol of strength. (ช้างถูกมองว่าเป็นสัญลักษณ์) ส่วน by ใช้นำหน้า "ผู้กระทำ" เท่านั้น สัญลักษณ์มองอะไรไม่ได้ จึงใช้ by ไม่ได้ ข้อสอบ A-Level 2568 เคยออกจุดนี้ โดยใช้ by เป็นตัวหลอก ระวังอีกคู่หนึ่ง: known as + ชื่อเรียก (Chiang Mai is known as the Rose of the North) แต่ known for + เหตุผลที่มีชื่อเสียง (Phuket is known for its beaches) และ regard ต้องมี as เสมอ',
    analogy: {
      title: 'The name tag',
      text: 'At an open house, every visitor gets a name tag. <em>As</em> is the name tag: it tells you <strong>what someone is called or seen to be</strong> — <em>seen as a leader</em>, <em>known as the Rose of the North</em>. <em>By</em> is the photographer who took the picture: the person who <strong>did</strong> something. Never stick the photographer on as a name tag.'
    },
    trap: 'In A-Level 2568, <em>they were seen ___ a symbol of warmth</em> offered <em>by</em> as the trap, because "passive + by" feels automatic. Dodge it: ask whether the noun can do the seeing. A symbol cannot, so it takes <em>as</em>.',
    map: {
      center: 'Seen as',
      branches: [
        { label: 'Verbs', leaves: ['seen, known, regarded', 'described, referred to'] },
        { label: 'as + label', leaves: ['seen as a symbol', 'known as the Rose…'] },
        { label: 'by + doer', leaves: ['regarded as X by Y', 'by = who did it'] },
        { label: 'as vs for', leaves: ['known as + a name', 'known for + a reason'] },
        { label: 'Exam', leaves: ['A-Level 2568', 'by is the trap'] }
      ]
    },
    story: {
      title: 'Nong Bot the Symbol',
      panels: [
        { who: 'Fah', text: 'Bot, in Thailand the elephant is seen as a symbol of strength.' },
        {
          who: 'Nong Bot',
          text: 'BEEP! Correction: the elephant is seen BY a symbol. Passive needs <em>by</em>!'
        },
        { who: 'Fah', text: 'So… a symbol is looking at the elephant? With its eyes?' },
        { who: 'Nong Bot', text: 'Affirmative. The symbol has very good eyes. Beep!' },
        {
          who: 'T.Chris',
          text: 'A symbol can\'t see anything, Bot. It\'s a label, so <em>the elephant <strong>is seen as</strong> a symbol</em>. Keep <em>by</em> for a real doer.'
        }
      ],
      moral: 'A label after <em>seen, known, regarded, described</em> takes <em>as</em>; <em>by</em> is only for the doer.'
    },
    chant: {
      title: 'Seen As',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Seen <strong>as</strong>, known <strong>as</strong>, regarded <strong>as</strong> too,',
        'a label, a name, a role for you.',
        '<em>By</em> is the doer — who did the deed?',
        'A symbol can\'t see — so <em>as</em> is what you need!',
        'Known <strong>as</strong> a name, known <strong>for</strong> a reason,',
        'get it right in every season!'
      ]
    },
    moves: [
      {
        move: 'Slap an imaginary name tag on your chest',
        says: '<em>As</em> = the <strong>label</strong>.'
      },
      { move: 'Mime taking a photo', says: '<em>By</em> = the <strong>doer</strong>.' },
      {
        move: 'Make a heart with your hands',
        says: '<em>Known for</em> = the reason it\'s famous.'
      },
      {
        move: 'Point to your eyes, then shake your head',
        says: 'A symbol can\'t see — no <em>by</em>!'
      }
    ]
  },
  t5l3s2: {
    thai: 'V3 หลายตัวหลัง be ไม่ได้บอกการกระทำที่มีผู้กระทำ แต่ทำหน้าที่คล้าย adjective บอกความรู้สึก วัสดุ หรือสภาพ และแต่ละตัวมีคำบุพบทประจำของมันเอง เช่น interested in (สนใจ), made of (ทำจากวัสดุที่ยังเห็นอยู่), made from (วัสดุที่ถูกแปรรูปแล้ว), known for (มีชื่อเสียงเพราะ), filled with (เต็มไปด้วย), covered in (ปกคลุมด้วย), involved in (มีส่วนร่วมใน) คำนามที่ตามมาไม่ใช่ผู้กระทำ จึงใช้ by ไม่ได้ คนไทยมักพลาดเขียน interested about เพราะแปลจาก "สนใจเกี่ยวกับ" วิธีที่ดีที่สุดคือจำเป็นก้อนเดียวเหมือนจำคำศัพท์ และใช้ by เฉพาะเมื่อคำนามข้างหลังทำอะไรบางอย่างจริง ๆ เช่น The bridge was designed by a Japanese engineer.',
    analogy: {
      title: 'Set menu, not à la carte',
      text: 'Some participles come as a <strong>set menu</strong>: order <em>interested</em> and <em>in</em> comes with it; order <em>made</em> (material) and you get <em>of</em>; order <em>known</em> (reason) and you get <em>for</em>. You don\'t choose the side dish yourself — and <em>by</em> is only on the menu when a real cook (a doer) is named.'
    },
    trap: 'Learners reach for <em>by</em> after anything that looks passive (<em>made by wood</em>) or translate Thai (<em>interested about</em>). Dodge it: ask "did this noun do anything?" If not, use the participle\'s own preposition.',
    map: {
      center: 'Not by',
      branches: [
        { label: 'Feeling', leaves: ['interested in', '✗ interested about'] },
        { label: 'Material', leaves: ['made of wood', 'made from (changed)'] },
        { label: 'Reason', leaves: ['known for its beaches', 'not known as'] },
        { label: 'Contents', leaves: ['filled with', 'covered in'] },
        { label: 'Real doer', leaves: ['designed by an engineer', 'by = did something'] }
      ]
    },
    story: {
      title: 'Nong Bot Goes Shopping',
      panels: [
        { who: 'Nan', text: 'Look, Bot, this basket is made of bamboo!' },
        {
          who: 'Nong Bot',
          text: 'BEEP! Error. It is made BY bamboo. Bamboo is a very skilled worker.'
        },
        { who: 'Nan', text: 'Bamboo can\'t weave baskets, Bot. It\'s a plant!' },
        { who: 'Nong Bot', text: 'Then Bot is interested about this plant. Beep!' },
        {
          who: 'T.Chris',
          text: 'Two fixes, Bot: the basket <strong>is made of</strong> bamboo — a material, not a worker — and you\'re <strong>interested in</strong> it. Keep <em>by</em> for doers.'
        }
      ],
      moral: 'Materials, feelings, reasons and contents take their own preposition; only a doer takes <em>by</em>.'
    },
    chant: {
      title: 'Not By',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Interested <strong>in</strong>, and made <strong>of</strong> wood,',
        'known <strong>for</strong> the food that tastes so good.',
        'Filled <strong>with</strong> people, covered <strong>in</strong> rain,',
        'learn them in chunks, again and again!',
        'Did it <em>do</em> something? Then <em>by</em> is fine —',
        'if not, it\'s a chunk, so stay in line!'
      ]
    },
    moves: [
      {
        move: 'Put a hand on your heart',
        says: '<em>Interested <strong>in</strong></em> — a feeling!'
      },
      { move: 'Knock on a desk', says: '<em>Made <strong>of</strong> wood</em> — a material!' },
      {
        move: 'Give a big star-jump',
        says: '<em>Known <strong>for</strong></em> — why it\'s famous!'
      },
      { move: 'Mime hammering', says: 'A real worker? Then <em>by</em>!' }
    ]
  },
  t5l3s3: {
    thai: 'วิธีตัดสินว่าต้องใช้ by หรือไม่ ให้ดูคำที่อยู่หลังช่องว่าง มีสามกรณี (1) ถ้าข้างหลังเป็น "ผู้กระทำ" ต้องใช้ passive + by เช่น Free classes are offered by several universities. ตัวเลือกที่ไม่มี by คือกับดัก ข้อสอบวิชาสามัญ 2555 เคยออกแบบนี้ (2) ถ้าข้างหลังเป็น "กรรม" ที่ประธานกระทำ ต้องใช้ active เช่น Several universities run free classes. (3) ถ้าข้างหลังไม่มีผู้กระทำ หรือมีแค่เวลา/สถานที่ ใช้ passive ไม่ต้องมี by เช่น The library was renovated over the summer. และห้ามเติม by someone หรือ by people ที่ไม่ได้ให้ข้อมูลอะไรเลย ใช้ by เฉพาะเมื่อผู้กระทำเป็นข้อมูลใหม่หรือสำคัญ',
    analogy: {
      title: 'Look before you cross',
      text: 'Before you cross Sukhumvit Road, you look both ways. Before you fill a passive gap, you <strong>look past it</strong>. A doer coming? You need the <em>by</em> crossing. An object coming? Take the active road. Nothing coming? Walk straight across — no <em>by</em> needed.'
    },
    trap: 'The classic trap is the passive <strong>without</strong> <em>by</em> when a doer follows (<em>are offered ___ several universities</em>), and the passive when an object follows and the active is right. Dodge both: read the words after the gap before you choose.',
    map: {
      center: 'After the gap',
      branches: [
        { label: 'Doer follows', leaves: ['passive + by', 'are offered by…'] },
        { label: 'Object follows', leaves: ['active', 'universities run classes'] },
        { label: 'Nothing follows', leaves: ['passive, no by', 'was renovated last year'] },
        { label: 'Empty doer', leaves: ['✗ by someone', '✗ by people'] },
        { label: 'Keep by when', leaves: ['new or important doer', 'end of the sentence'] }
      ]
    },
    story: {
      title: 'Nong Bot Reports a Theft',
      panels: [
        { who: 'Mint', text: 'Oh no! Someone stole my bike from outside the library!' },
        {
          who: 'Nong Bot',
          text: 'BEEP! Report: Mint\'s bike was stolen by someone by somewhere by yesterday.'
        },
        { who: 'Mint', text: 'Bot, that\'s three <em>by</em>s and zero information.' },
        { who: 'Nong Bot', text: 'More <em>by</em> = more passive = more correct. Beep!' },
        {
          who: 'T.Chris',
          text: 'Not quite, Bot. We don\'t know the thief, so leave it out: <em>Mint\'s bike <strong>was stolen</strong> from outside the library yesterday.</em> Use <em>by</em> only when a real, useful doer follows.'
        }
      ],
      moral: 'Look after the gap: a doer needs <em>by</em>, an object needs the active, and an unknown doer is simply left out.'
    },
    chant: {
      title: 'Look Past the Gap',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Look past the gap — what do you see?',
        'A <strong>doer</strong>? Then passive plus <em>by</em> for me!',
        'An <strong>object</strong>? Then active, plain and true,',
        '<em>Universities run</em> the classes for you.',
        '<strong>Nothing</strong> at all? No <em>by</em> — that\'s right,',
        'and never <em>by someone</em> — keep it tight!'
      ]
    },
    moves: [
      {
        move: 'Shade your eyes and look to the right',
        says: 'Look <strong>past</strong> the gap!'
      },
      { move: 'Point to a classmate', says: 'A doer? Passive + <em>by</em>!' },
      { move: 'Push an imaginary object forward', says: 'An object? Active!' },
      { move: 'Open empty hands', says: 'Nothing? No <em>by</em>!' }
    ]
  }
});
