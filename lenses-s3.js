/* VOICE CONTROL — lenses-s3.js · Stage 03 lesson lenses */
Object.assign(LENSES, {
  t3l1s1: {
    thai: 'ถ้าประธานกำลัง "ถูกกระทำ" อยู่ในตอนนี้ ให้ใช้ am/is/are + being + V3 เช่น The school hall is being painted this week. (ห้องประชุมกำลังถูกทาสีอยู่สัปดาห์นี้) คำว่า being บอกว่ากำลังเกิดขึ้น ส่วน V3 บอกว่าประธานเป็นผู้ถูกกระทำ ต้องมีทั้งสองส่วนเสมอ ถ้าเขียน The road is repairing จะกลายเป็นประโยค active แปลว่าถนนกำลังซ่อมอะไรบางอย่างเอง ซึ่งผิดความหมาย ภาษาไทยมักไม่ต้องใช้คำว่า "ถูก" แต่ภาษาอังกฤษต้องมี be + V3 ทุกครั้ง อย่าตัดสินจากคำว่า "ถูก" ให้ถามว่าประธานเป็นผู้ทำหรือผู้ถูกทำ และถ้ามีกรรมตามหลังช่องว่าง เช่น The workers are painting the gate. ประโยคต้องเป็น active สัญญาณของ tense นี้คือ now, right now, at the moment, this week และ Look!',
    analogy: {
      title: 'The live cooking show',
      text: 'On a live cooking show, the chef <strong>is cooking</strong> the noodles — the chef is the doer. But if the camera zooms in on the pan, the commentator says, <em>The noodles <strong>are being cooked</strong> right now.</em> Same moment, different star of the shot: <em>being</em> keeps it live, and the V3 tells you the noodles are on the receiving end.'
    },
    trap: 'The exam puts <em>is building</em> or <em>are installing</em> next to the key, because it "looks" continuous and has no strange extra word. Dodge it: if the subject cannot do the action (a road, a station, an air conditioner), you need <em>being</em> + V3. But if an object follows the gap, the subject is the doer, so stay active.',
    map: {
      center: 'is being done',
      branches: [
        {
          label: 'Form',
          leaves: ['am/is/are + being + V3', 'being = in progress']
        },
        {
          label: 'Signals',
          leaves: ['now, at the moment', 'this week, Look!']
        },
        {
          label: 'Receiver',
          leaves: ['The hall is being painted.', 'doer often left out']
        },
        {
          label: 'Doer + object',
          leaves: ['stay active', 'Workers are painting it.']
        },
        {
          label: 'Trap',
          leaves: ['is repairing = active', 'is repaired = routine']
        }
      ]
    },
    story: {
      title: 'Nong Bot and the Busy Road',
      panels: [
        { who: 'Ploy', text: 'Why is the bus so slow today?' },
        { who: 'Nong Bot', text: 'BEEP! I can see why! The road <em>is repairing</em> itself! Very hard-working road!' },
        { who: 'Mai', text: 'Bot, roads don\'t have hands. Those men in orange are doing the work.' },
        { who: 'Nong Bot', text: 'Then the road is lazy. It is just lying there. Beep?' },
        {
          who: 'T.Chris',
          text: 'Exactly, Bot — the road receives the action, so it <em>is being repaired</em>. The workers <em>are repairing</em> it.'
        }
      ],
      moral: 'If the subject receives the action right now, use <em>is/are being + V3</em>; <em>is + V-ing</em> makes it the doer.'
    },
    chant: {
      title: 'Being in the Middle',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Right now, right now, what\'s being done?',
        'The hall <em>is being painted</em> — the work\'s begun!',
        '<em>Being</em> says "live", the V3 says "done to",',
        'Put them both together and the passive comes through.',
        'If there\'s an object, the doer is in charge:',
        '<em>The workers are painting</em> the gate — loud and large!'
      ]
    },
    moves: [
      { move: 'Point at the floor in front of you', says: '<em>Now!</em> It\'s happening right now.' },
      { move: 'Roll your hands round and round', says: '<em>being</em> — still in progress.' },
      { move: 'Cross your arms over your chest like a shield', says: 'V3 — the subject receives the action.' },
      { move: 'Push both hands forward', says: 'An object follows? The doer acts — stay active!' }
    ]
  },
  t3l1s2: {
    thai: 'was/were + being + V3 ใช้เมื่อประธานกำลังถูกกระทำอยู่ ณ ช่วงเวลาหนึ่งในอดีต เช่น When I arrived, the patient was being examined. (ตอนที่ฉันไปถึง คนไข้กำลังถูกตรวจอยู่) มักใช้คู่กับ when หรือ while เหตุการณ์ยาวที่เป็นฉากหลังใช้ was/were being + V3 ส่วนเหตุการณ์สั้นที่แทรกเข้ามาใช้ past simple เช่น The roof was being repaired when the storm hit. ระวังสองจุด ถ้าไม่มี being จะกลายเป็นเหตุการณ์ที่จบไปแล้ว และถ้าไม่มี V3 เช่น The stage was building ประโยคจะเป็น active แปลว่าเวทีเป็นผู้สร้างเอง ถ้าประธานเป็นผู้กระทำและมีกรรมตามมา ให้ใช้ active เช่น At 8 p.m., Mai\'s brother was washing the dishes. และอย่าลืมให้ was/were สอดคล้องกับประธาน',
    analogy: {
      title: 'The paused video',
      text: 'Pause a video of yesterday\'s sports day at 10:15. In the frame, the track <strong>was being marked</strong> with white lines and the tents <strong>were being put up</strong>. A paused frame shows things <em>in the middle</em> of being done — that is the past continuous passive. The short event that "presses pause" — <em>when the rain started</em> — takes the past simple.'
    },
    trap: 'Two traps sit together: the active <em>was cleaning</em> for a floor, and the present <em>is being cleaned</em> in a story about yesterday. Dodge both: first ask whether the subject receives the action, then check that the tense of <em>be</em> matches the past time marker.',
    map: {
      center: 'was being done',
      branches: [
        {
          label: 'Form',
          leaves: ['was/were + being + V3', 'agree with the subject']
        },
        {
          label: 'Timeline',
          leaves: ['long action: was being', 'short event: past simple']
        },
        {
          label: 'Signals',
          leaves: ['when..., while...', 'at 8 p.m. last night']
        },
        {
          label: 'Doer + object',
          leaves: ['was washing the dishes', 'active past continuous']
        },
        {
          label: 'Trap',
          leaves: ['was cleaning = active', 'is being = wrong time']
        }
      ]
    },
    story: {
      title: 'Nong Bot Tells a Story',
      panels: [
        { who: 'Fah', text: 'Bot, why didn\'t you go to the library yesterday?' },
        { who: 'Nong Bot', text: 'BEEP! The floor <em>was cleaning</em>! It was mopping itself with a big smile!' },
        { who: 'Pim', text: 'A smiling floor? I think the cleaner was doing the mopping, Bot.' },
        { who: 'Nong Bot', text: 'Okay, okay. The floor <em>is being cleaned</em>. Beep!' },
        {
          who: 'T.Chris',
          text: 'Close, Bot, but that was yesterday: the floor <em>was being cleaned</em> when you arrived.'
        }
      ],
      moral: 'In a past story, a receiver in the middle of an action takes <em>was/were being + V3</em>.'
    },
    chant: {
      title: 'Paused in the Past',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Yesterday at ten, what was going on?',
        'The stage <em>was being built</em> on the school front lawn.',
        '<em>Was</em> or <em>were</em>, then <em>being</em>, then V3,',
        'A long, long action in the past — you see?',
        'Then <em>the storm hit</em> — short and fast,',
        'Past simple cuts into the long past!'
      ]
    },
    moves: [
      { move: 'Point back over your shoulder', says: 'Past time — use <em>was</em> or <em>were</em>.' },
      { move: 'Stretch your arms wide apart', says: 'A long action: <em>was being</em> + V3.' },
      { move: 'Clap once, sharply', says: 'A short event cuts in: past simple.' },
      { move: 'Freeze like a statue', says: 'Paused in the middle — still being done.' }
    ]
  },
  t3l1s3: {
    thai: 'Present perfect passive คือ has/have + been + V3 ใช้กับสิ่งที่ถูกกระทำไปแล้วก่อนตอนนี้ และผลยังสำคัญอยู่ตอนนี้ เช่น The exam results have just been posted. (ผลสอบเพิ่งประกาศ ตอนนี้เข้าไปดูได้แล้ว) คำสัญญาณคือ since, for, already, yet, just, so far ข้อผิดพลาดที่พบบ่อยที่สุดคือลืม been เช่น A letter has written ซึ่งแปลว่า "จดหมายเขียนอะไรบางอย่าง" ไม่ใช่ "จดหมายถูกเขียน" จำไว้ว่า has/have บอกเวลา been บอกว่าเป็น passive และ V3 คือคำกริยาหลัก ต้องมีครบทั้งสามส่วน แต่ถ้าประธานเป็นผู้กระทำ เช่น Ton has read three novels. ก็ใช้ has + V3 แบบ active ได้ถูกต้อง ถ้ามีเวลาในอดีตที่จบแล้ว เช่น yesterday หรือ in 2019 ให้ใช้ past simple แทน',
    analogy: {
      title: 'The missing train carriage',
      text: 'Think of the present perfect passive as a three-carriage train: <strong>has</strong> (the engine, which gives the time), <strong>been</strong> (the middle carriage, which carries the passive) and the <strong>V3</strong>. Drop the middle carriage and the train still moves, but it arrives at the wrong station: <em>The trees have planted</em> means the trees did the planting.'
    },
    trap: 'The key and the near miss often differ by one word: <em>have been planted</em> vs <em>have planted</em>. Dodge it: whenever the subject receives the action, look for <em>been</em> after <em>has/have</em>. And remember the opposite trap too: a person who does the action to an object keeps <em>has + V3</em>.',
    map: {
      center: 'has been done',
      branches: [
        {
          label: 'Form',
          leaves: ['has/have + been + V3', 'three parts, always']
        },
        {
          label: 'Use',
          leaves: ['before now, matters now', 'news and changes']
        },
        {
          label: 'Signals',
          leaves: ['since, for, so far', 'already, yet, just']
        },
        {
          label: 'Missing been',
          leaves: ['has written = it wrote', 'error E10']
        },
        {
          label: 'Doer stays',
          leaves: ['Ton has read 3 novels.', 'active is right here']
        }
      ]
    },
    story: {
      title: 'The Letter That Wrote Itself',
      panels: [
        { who: 'Nan', text: 'Bot, did you send the thank-you letter to our guest speaker?' },
        { who: 'Nong Bot', text: 'BEEP! The letter <em>has written</em>. It is very clever. I am proud of it.' },
        { who: 'Nan', text: 'The letter wrote something? What did it write?' },
        { who: 'Nong Bot', text: 'Error. Error. I do not know what the letter wrote. Beep...' },
        {
          who: 'T.Chris',
          text: 'Add the missing piece, Bot: the letter <em>has been written</em>. You wrote it; the letter received the action.'
        }
      ],
      moral: 'For a receiver, the present perfect passive always needs <em>been</em>: <em>has/have been + V3</em>.'
    },
    chant: {
      title: 'Don\'t Forget Been',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>Has</em> or <em>have</em> — that tells the time,',
        '<em>Been</em> in the middle keeps the passive in line,',
        'V3 at the end, and the job is done:',
        '<em>The trip has been cancelled</em> — no Chiang Mai fun!',
        'Drop the <em>been</em> and the subject acts,',
        '<em>The trip has cancelled</em>? That\'s not the facts!'
      ]
    },
    moves: [
      { move: 'Tap your wrist like a watch', says: '<em>has/have</em> — the time.' },
      { move: 'Hold up three fingers', says: 'three parts: <em>has</em>, <em>been</em>, V3.' },
      { move: 'Wiggle the middle finger', says: 'Never drop the middle one: <em>been</em>!' },
      { move: 'Point at the floor', says: 'The result matters now.' }
    ]
  },
  t3l2s1: {
    thai: 'Past perfect passive คือ had + been + V3 ใช้เมื่อประธานถูกกระทำไปแล้ว "ก่อน" อีกเหตุการณ์หนึ่งในอดีต เช่น When we got to the cinema, all the tickets had been sold. (ตอนที่เราไปถึงโรงหนัง ตั๋วทั้งหมดถูกขายไปหมดแล้ว) การขายเกิดก่อน การไปถึงเกิดทีหลัง คำสัญญาณคือ by the time, when, before, after, already ระวังความเข้าใจผิดที่พบบ่อย นักเรียนหลายคนคิดว่า had + V3 เป็น passive แต่จริงๆ แล้ว had + V3 เป็น active ส่วนคำที่ทำให้เป็น passive คือ been เช่น The building had evacuated ผิด เพราะตึกไม่ได้อพยพใคร ต้องเป็น had been evacuated แต่ถ้าประธานเป็นผู้กระทำ เช่น Her brother had eaten all the mangoes. ก็ใช้ had + V3 ได้ถูกต้อง',
    analogy: {
      title: 'Too late for the last bowl',
      text: 'You run to the canteen at 12:30 for the famous khao man gai, but the pot is empty. By the time you arrived, every plate <strong>had been sold</strong>. Two past moments: the selling (earlier) and your arrival (later). <em>had been</em> + V3 is how English points back to the earlier one when the subject was on the receiving end.'
    },
    trap: 'Tests put <em>has been taken</em> next to <em>had been taken</em>, because both are passive and perfect. Dodge it: if the reference point is a past event (<em>by the time the police arrived</em>), you need <em>had</em>; if it is now, you need <em>has/have</em>. Then check for <em>been</em>.',
    map: {
      center: 'had been done',
      branches: [
        {
          label: 'Form',
          leaves: ['had + been + V3', 'had = time, been = passive']
        },
        {
          label: 'Two past times',
          leaves: ['earlier: had been + V3', 'later: past simple']
        },
        {
          label: 'Signals',
          leaves: ['by the time, before', 'when ... already']
        },
        {
          label: 'Active had + V3',
          leaves: ['had eaten the mangoes', 'subject = doer']
        },
        {
          label: 'Trap',
          leaves: ['has been = up to now', 'had evacuated = active']
        }
      ]
    },
    story: {
      title: 'The Mystery of the Mangoes',
      panels: [
        { who: 'Mint', text: 'I came home and the mango basket was empty!' },
        { who: 'Nong Bot', text: 'BEEP! I know! Your little brother <em>had been eaten</em> all the mangoes!' },
        { who: 'Mint', text: 'Bot! My brother was eaten?! He\'s right there, watching cartoons!' },
        { who: 'Nong Bot', text: 'Passive sounds more serious. I like serious. Beep.' },
        {
          who: 'T.Chris',
          text: 'Your brother did the eating, Mint, so it\'s active: he <em>had eaten</em> them. The mangoes <em>had been eaten</em>.'
        }
      ],
      moral: '<em>had been + V3</em> is for an earlier past receiver; a doer with an object keeps <em>had + V3</em>.'
    },
    chant: {
      title: 'Before the Before',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Two times in the past, which one came first?',
        'The earlier one gets <em>had been</em> — that\'s the verse!',
        '<em>By the time</em> we got there, the tickets <em>had been sold</em>,',
        '<em>had</em> gives the time and <em>been</em> makes it hold.',
        'But if your brother ate the mangoes, he\'s the doer, you see:',
        '<em>He had eaten</em> them — active, easy as can be!'
      ]
    },
    moves: [
      { move: 'Point back over your shoulder twice, further each time', says: 'Two past moments: the earlier one is further back.' },
      { move: 'Tap your wrist', says: '<em>had</em> — earlier past.' },
      { move: 'Cross your arms like a shield', says: '<em>been</em> + V3 — the subject receives it.' },
      { move: 'Shrug with empty hands', says: 'Too late — it <em>had</em> already <em>been</em> done!' }
    ]
  },
  t3l2s2: {
    thai: 'Future passive ทำได้สองแบบ คือ will be + V3 สำหรับการประกาศ การคาดการณ์ หรือการตัดสินใจ เช่น The winners will be announced on Friday. (จะประกาศชื่อผู้ชนะในวันศุกร์) และ am/is/are going to be + V3 สำหรับแผนที่วางไว้แล้ว หรือสิ่งที่เห็นหลักฐานว่ากำลังจะเกิด เช่น The old market is going to be knocked down. หลัง will และ going to ต้องใช้ be รูปเดิมเสมอ ห้ามใช้ been และต้องตามด้วย V3 ไม่ใช่กริยาช่องหนึ่ง เช่น will be announce ผิด อีกเรื่องที่สำคัญคือ ประโยคเกี่ยวกับอนาคตไม่จำเป็นต้องเป็น passive ถ้าประธานเป็นผู้กระทำและมีกรรม เช่น Earth will carry the boxes. หรือ This app will check your homework. ให้ใช้ active สิ่งของก็เป็นผู้กระทำได้',
    analogy: {
      title: 'The school announcement',
      text: 'Every Monday the loudspeaker says things like <em>Exam results <strong>will be sent</strong> to parents on Friday</em> and <em>The pool <strong>is going to be closed</strong> next week</em>. The speaker doesn\'t say who will do it, because nobody cares — the results and the pool are the news. That is the future passive: a future frame (<em>will / is going to</em>) plus <em>be + V3</em>.'
    },
    trap: 'Watch for <em>will be announce</em> (base form instead of V3) and <em>going to been</em> (wrong form of <em>be</em>). The bigger trap is passivising a doer: in <em>Earth ______ the boxes</em>, an object follows, so the future stays active.',
    map: {
      center: 'will be done',
      branches: [
        {
          label: 'will be + V3',
          leaves: ['announcements, decisions', 'Results will be sent.']
        },
        {
          label: 'going to be + V3',
          leaves: ['plans and evidence', 'is going to be knocked']
        },
        {
          label: 'Form check',
          leaves: ['be stays as be', 'then V3, not base form']
        },
        {
          label: 'Doer + object',
          leaves: ['Earth will carry them.', 'apps can be doers']
        },
        {
          label: 'Questions',
          leaves: ['Will it be sent?', 'Is it going to be used?']
        }
      ]
    },
    story: {
      title: 'Bot Plans the Camp',
      panels: [
        { who: 'Pond', text: 'Bot, can you help me carry these boxes to the car?' },
        { who: 'Nong Bot', text: 'BEEP! Future plan: Bot <em>will be carried</em> the boxes!' },
        { who: 'Pond', text: 'Wait — who is carrying you? I can\'t lift a robot!' },
        { who: 'Nong Bot', text: 'Future must be passive. Future is very formal. Beep.' },
        {
          who: 'T.Chris',
          text: 'Not always, Bot. You do the carrying and <em>the boxes</em> is the object, so you <em>will carry</em> them. The boxes <em>will be carried</em> by you.'
        }
      ],
      moral: 'The future is not automatically passive; use <em>will be + V3</em> only when the subject receives the action.'
    },
    chant: {
      title: 'Future Frame',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Next week, next year, what will be done?',
        '<em>Will be</em> + V3 for the news, everyone!',
        '<em>Going to be</em> + V3 when the plan is made,',
        '<em>The market\'s going to be knocked down</em> — don\'t be afraid!',
        'But if you do the action and an object is there,',
        '<em>I will carry the boxes</em> — active, I swear!'
      ]
    },
    moves: [
      { move: 'Point far ahead', says: 'Future: <em>will</em> or <em>going to</em>.' },
      { move: 'Stand up straight like the letter B', says: '<em>be</em> — base form, never <em>been</em>.' },
      { move: 'Cross your arms like a shield', says: 'V3 — the subject receives it.' },
      { move: 'Mime lifting a heavy box', says: 'I do it to an object? Active: <em>I will carry it</em>.' }
    ]
  },
  t3l2s3: {
    thai: 'ในข้อสอบแบบเติมคำในบทความ ให้ทำสองขั้น ขั้นแรกเลือก voice โดยถามว่าประธานเป็นผู้ทำหรือผู้ถูกทำ และมีกรรมตามหลังช่องว่างหรือไม่ ขั้นที่สองเลือก tense จากคำบอกเวลา ใน passive คำกริยา V3 ไม่เปลี่ยน มีแค่ be ที่เปลี่ยนตามเวลา เช่น now หรือ at the moment ใช้ is/are being เวลาในอดีตที่จบแล้ว เช่น yesterday, in the 1920s, two years ago ใช้ was/were ส่วน since, for, so far, yet ใช้ has/have been ถ้ามี by the time ตามด้วยเหตุการณ์ในอดีต ใช้ had been และ next, tomorrow, soon ใช้ will be คำบอกเวลาอาจไม่ได้อยู่ติดกับช่องว่าง จึงต้องวงทุกคำบอกเวลาในประโยคก่อนตอบ และตอบทุกข้อด้วยเหตุผลสองข้อ คือเหตุผลเรื่อง voice และเหตุผลเรื่อง tense',
    analogy: {
      title: 'The lift buttons',
      text: 'Think of <em>be</em> as a lift and the time markers as the buttons. Press <em>since 2020</em> and the lift stops at <strong>has been</strong>; press <em>in the 1920s</em> and it stops at <strong>was</strong>; press <em>next December</em> and it goes up to <strong>will be</strong>. The passenger, the V3, never changes — only the floor does. But first check you are in the right building: active or passive?'
    },
    trap: 'In a TCAS-style passage, the marker is often far from the gap: <em>Since 2020</em> opens the sentence and the gap comes later. Students spot "passive" and grab any <em>be + V3</em> option. Dodge it: circle every time word in the sentence, and give two reasons for every answer — one for the voice, one for the tense.',
    map: {
      center: 'Markers set be',
      branches: [
        {
          label: 'Step 1: voice',
          leaves: ['doer or receiver?', 'object after the gap?']
        },
        {
          label: 'Step 2: tense',
          leaves: ['circle the time words', 'then choose be']
        },
        {
          label: 'Past / perfect',
          leaves: ['in 1920s → was', 'since 2020 → has been']
        },
        {
          label: 'Earlier / future',
          leaves: ['by the time → had been', 'next year → will be']
        },
        {
          label: 'Now',
          leaves: ['right now → is being', 'at the moment → is being']
        }
      ]
    },
    story: {
      title: 'Bot Reads the News',
      panels: [
        { who: 'Earth', text: 'Bot, read this sentence: "Since 2020, ten warehouses ___ as cafés."' },
        { who: 'Nong Bot', text: 'BEEP! Warehouses cannot build. Passive! The answer is <em>were rebuilt</em>! Done!' },
        { who: 'Earth', text: 'Passive, yes. But what about the first two words?' },
        { who: 'Nong Bot', text: 'I do not read the first words. They are too far away. Beep.' },
        {
          who: 'T.Chris',
          text: 'That\'s the trap, Bot: <em>since 2020</em> runs up to now, so the warehouses <em>have been rebuilt</em>. Voice first, then tense.'
        }
      ],
      moral: 'Choose the voice first, then circle the time marker to choose the tense of <em>be</em>.'
    },
    chant: {
      title: 'Circle the Clock',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Doer or receiver? That\'s step one,',
        'Circle the time words — then you\'re almost done!',
        '<em>Since</em> and <em>so far</em>, it\'s <em>has been</em> for you,',
        '<em>In 1925</em>? Then it\'s <em>was</em> + V3!',
        '<em>By the time</em> in the past? <em>Had been</em> is the key,',
        '<em>Next year</em>? <em>Will be</em> — one, two, three!'
      ]
    },
    moves: [
      { move: 'Hold up one finger', says: 'Step one: doer or receiver?' },
      { move: 'Draw a circle in the air', says: 'Step two: circle the time words.' },
      { move: 'Point back, down, then forward', says: 'Past, now, future: set the tense of <em>be</em>.' },
      { move: 'Hold up two fingers', says: 'Two reasons for every answer!' }
    ]
  },
  t3l3s1: {
    thai: 'Modal passive คือ modal + be + V3 เช่น Phones must be switched off. (ต้องปิดโทรศัพท์ — ภาษาไทยไม่ต้องมีคำว่า ถูก แต่ภาษาอังกฤษต้องมี be + V3) หรือ Tickets can be bought online. modal ยังคงความหมายเดิม เช่น can = ทำได้ must = กฎ should = คำแนะนำ might = อาจจะ ส่วน be + V3 บอกว่าประธานเป็นผู้ถูกกระทำ ป้ายประกาศและกฎต่างๆ ใช้รูปนี้บ่อย เพราะผู้กระทำคือใครก็ได้ ข้อผิดพลาดที่พบบ่อยมีสามแบบ คือ ลืม be (Bags must leave at the door แปลว่ากระเป๋าต้องเดินออกไปเอง) ใช้กริยาช่องหนึ่งแทน V3 (must be leave) และใช้ be ผิดรูป (must been, must to be) หลัง modal ต้องเป็น be เสมอ แต่ถ้าประธานเป็นผู้กระทำและมีกรรม เช่น Students must switch off their phones. ให้ใช้ active กฎข้อเดียวกันอาจเขียนได้ทั้งสอง voice ขึ้นอยู่กับประธาน',
    analogy: {
      title: 'The sign on the door',
      text: 'Signs talk to everyone and no one, so they love the modal passive: <em>Shoes <strong>must be removed</strong>. Food <strong>may not be eaten</strong> here.</em> Turn the sign into a teacher talking to you and it flips to the active: <em>You must remove your shoes.</em> Same rule, different subject — and the subject decides the voice.'
    },
    trap: 'The exam loves <em>must switch</em> for phones and <em>must be switched</em> for students — the same words in the wrong places. Dodge it: ask who does the action. Things that receive it get <em>modal + be + V3</em>; doers with an object get <em>modal + base verb</em>. Then check for <em>been</em> or <em>to</em> sneaking in after the modal.',
    map: {
      center: 'must be done',
      branches: [
        {
          label: 'Form',
          leaves: ['modal + be + V3', 'can/must/should/might']
        },
        {
          label: 'Meaning',
          leaves: ['the modal keeps its job', 'rule, advice, possibility']
        },
        {
          label: 'Signs and rules',
          leaves: ['Phones must be switched', 'doer = everyone']
        },
        {
          label: 'Doer + object',
          leaves: ['Students must switch...', 'modal + base verb']
        },
        {
          label: 'Errors',
          leaves: ['must been / must to be', 'must be leave']
        }
      ]
    },
    story: {
      title: 'Bot Makes the Exam Rules',
      panels: [
        { who: 'Fah', text: 'Bot, please write the exam-room sign.' },
        { who: 'Nong Bot', text: 'BEEP! Sign ready: "STUDENTS MUST BE SWITCHED OFF."' },
        { who: 'Fah', text: 'Bot! We are not robots! You can\'t switch <em>us</em> off!' },
        { who: 'Nong Bot', text: 'Rules must be passive. Passive is rule-shaped. Beep.' },
        {
          who: 'T.Chris',
          text: 'Choose the subject first, Bot: <em>Phones must be switched off</em>, or <em>Students must switch off their phones</em>.'
        }
      ],
      moral: 'Use <em>modal + be + V3</em> for the receiver, and keep <em>modal + base verb</em> for a doer with an object.'
    },
    chant: {
      title: 'Modal, Be, V3',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>Can</em> or <em>must</em> or <em>should</em> or <em>might</em>,',
        'Then plain <em>be</em> — and V3 — that\'s right!',
        '<em>Phones must be switched off</em>, the sign on the door,',
        '<em>Tickets can be bought</em> at the pier, for sure!',
        'No <em>been</em>, no <em>to</em> — keep it neat,',
        'But <em>students must switch</em> their phones — active, complete!'
      ]
    },
    moves: [
      { move: 'Raise one finger like a rule-maker', says: 'The modal: <em>must</em>, <em>can</em>, <em>should</em>.' },
      { move: 'Stand up straight', says: '<em>be</em> — plain and simple.' },
      { move: 'Cross your arms like a shield', says: 'V3 — the subject receives it.' },
      { move: 'Mime switching off a phone', says: 'You do it? Active: <em>must switch it off</em>.' }
    ]
  },
  t3l3s2: {
    thai: 'ถ้าจะพูดถึงอดีตด้วย modal ใน passive ให้ใช้ modal + have been + V3 เลือก modal ตามความหมายก่อน must have been = มั่นใจว่าเกิดขึ้นแล้ว (สรุปจากหลักฐาน) เช่น My bike must have been stolen. (จักรยานต้องถูกขโมยไปแน่ๆ) might/could have been = อาจจะเกิดขึ้น should have been = ควรจะเกิดแต่ไม่ได้เกิด (ตำหนิ) เช่น We should have been told earlier. และ could have been avoided/prevented = เป็นไปได้ที่จะป้องกัน แต่ไม่ได้ป้องกัน ต้องมีครบสามส่วนหลัง modal ถ้าลืม been ประธานจะกลายเป็นผู้กระทำ เช่น The accident could have avoided ผิด ถ้าใช้ be แทน have been เวลาจะเปลี่ยนเป็นปัจจุบันหรืออนาคต และถ้าประธานเป็นผู้กระทำ เช่น Fah must have taken the wrong bus. ให้ใช้ active',
    analogy: {
      title: 'Detective, judge, lucky escape',
      text: 'Three characters look back at the past. The <strong>detective</strong> sees mud on the floor and says <em>The door <strong>must have been left</strong> open.</em> The <strong>judge</strong> says <em>It <strong>should have been locked</strong>.</em> The <strong>lucky survivor</strong> says <em>The whole house <strong>could have been flooded</strong>!</em> Pick your character first; the passive part, <em>have been + V3</em>, is the same for all three.'
    },
    trap: 'Two traps: dropping <em>been</em> (<em>could have avoided</em> for an accident), and choosing the wrong modal meaning (<em>must have been checked</em> when the point is that nobody checked). Dodge them: decide the meaning first — sure, criticism or possibility — then build <em>have been + V3</em>.',
    map: {
      center: 'have been done',
      branches: [
        {
          label: 'Form',
          leaves: ['modal + have been + V3', 'three pieces after modal']
        },
        {
          label: 'must have been',
          leaves: ['I\'m sure it happened', 'detective']
        },
        {
          label: 'should have been',
          leaves: ['it didn\'t happen', 'judge: criticism']
        },
        {
          label: 'could have been',
          leaves: ['possible, didn\'t happen', 'lucky escape']
        },
        {
          label: 'Doer + object',
          leaves: ['must have taken the bus', 'active past modal']
        }
      ]
    },
    story: {
      title: 'Who Stole Bot\'s Battery?',
      panels: [
        { who: 'Nong Bot', text: 'BEEP! My spare battery is gone! It <em>must have stolen</em>!' },
        { who: 'Pim', text: 'Your battery stole something? What did it steal?' },
        { who: 'Nong Bot', text: 'Probably my other battery. Batteries are very sneaky. Beep.' },
        { who: 'Mint', text: 'Or maybe someone took it, Bot. Look — your charger is gone too.' },
        {
          who: 'T.Chris',
          text: 'Add <em>been</em>, Bot: it <em>must have been stolen</em>. And it <em>should have been locked</em> in your drawer!'
        }
      ],
      moral: 'For a past receiver after a modal, use <em>have been + V3</em>, and pick the modal for the meaning.'
    },
    chant: {
      title: 'Looking Back',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Looking back with a modal? Here\'s the plan:',
        'Modal, <em>have been</em>, V3 — yes you can!',
        '<em>Must have been stolen</em> — I\'m sure, I\'m sure!',
        '<em>Should have been locked</em> — but it wasn\'t, what a shame!',
        '<em>Could have been worse</em> — a lucky escape,',
        'Three pieces after the modal keep it in shape!'
      ]
    },
    moves: [
      { move: 'Hold a magnifying glass to your eye', says: 'Detective: <em>must have been</em>.' },
      { move: 'Bang an imaginary judge\'s hammer', says: 'Judge: <em>should have been</em>.' },
      { move: 'Wipe your forehead in relief', says: 'Lucky escape: <em>could have been</em>.' },
      { move: 'Count three pieces on your fingers', says: '<em>have</em>, <em>been</em>, V3!' }
    ]
  },
  t3l3s3: {
    thai: 'will have been + V3 (future perfect passive) ใช้บอกว่าสิ่งหนึ่งจะถูกทำเสร็จก่อนเส้นตายในอนาคต มักมี by + เวลาในอนาคต หรือ by the time เช่น By 2030, the new MRT line will have been completed. (ภายในปี 2030 รถไฟฟ้าสายใหม่จะสร้างเสร็จแล้ว) ถ้าลืม been ประธานจะกลายเป็นผู้กระทำ ส่วนรูปอย่าง has been being repaired (perfect continuous passive) หรือ will be being checked (future continuous passive) ถูกหลักไวยากรณ์ แต่ฟังดูหนักและเจ้าของภาษาที่เขียนอย่างระมัดระวังมักหลีกเลี่ยง ให้อ่านเข้าใจได้ แต่เวลาเขียนให้เลือกรูปที่เป็นธรรมชาติกว่า เช่น The road has been under repair for months. หรือ The road is still being repaired. บทเรียนนี้จึงเน้นการจำรูปให้ได้ และการเปลี่ยนรูปที่หนักเกินไปให้เป็นภาษาที่เป็นธรรมชาติ',
    analogy: {
      title: 'The countdown clock',
      text: 'Imagine a countdown clock for the 2028 Games. Stand at the deadline and look back: by then the stadium <strong>will have been finished</strong>. That is the future perfect passive. Now imagine stacking <em>been</em> and <em>being</em> on top of each other like too many bubble-tea toppings: <em>has been being repaired</em>. It is allowed, but nobody wants to drink it — order something lighter: <em>is still being repaired</em>.'
    },
    trap: 'Strong students sometimes pick <em>has been being repaired</em> because it looks advanced. Careful writers avoid it, so it is a distractor, never a key. Also watch for <em>will have finished</em> for a stadium: without <em>been</em>, the stadium becomes the builder.',
    map: {
      center: 'Rare forms',
      branches: [
        {
          label: 'will have been V3',
          leaves: ['done before a deadline', 'by 2030, by the time']
        },
        {
          label: 'Missing been',
          leaves: ['will have finished', '= the subject acts']
        },
        {
          label: 'Avoid in writing',
          leaves: ['has been being done', 'will be being done']
        },
        {
          label: 'Lighter choices',
          leaves: ['is still being repaired', 'has been under repair']
        },
        {
          label: 'Your job',
          leaves: ['recognise them', 'write natural forms']
        }
      ]
    },
    story: {
      title: 'Bot Tries to Sound Clever',
      panels: [
        { who: 'Beam', text: 'Bot, is the school roof fixed yet?' },
        { who: 'Nong Bot', text: 'BEEP! The roof <em>has been being being repaired</em> since May! Very advanced English!' },
        { who: 'Beam', text: 'That\'s a lot of "being". My ears hurt.' },
        { who: 'Nong Bot', text: 'More <em>being</em> = more points. That is my rule. Beep.' },
        {
          who: 'T.Chris',
          text: 'Lighter is better, Bot: the roof <em>has been under repair</em> since May, and by June it <em>will have been finished</em>.'
        }
      ],
      moral: 'Use <em>will have been + V3</em> for a future deadline, and replace heavy forms like <em>has been being done</em> with natural ones.'
    },
    chant: {
      title: 'Deadline Done',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>By 2030</em>, what will be done?',
        '<em>Will have been completed</em> — the line will run!',
        '<em>Will</em> and <em>have</em> and <em>been</em> and V3,',
        'Finished by the deadline, plain to see.',
        '<em>Has been being</em>? Too heavy — let it go,',
        '<em>Is still being repaired</em> — smooth and slow!'
      ]
    },
    moves: [
      { move: 'Point far ahead, then turn and look back', says: 'Stand at the deadline and look back.' },
      { move: 'Count four pieces on your fingers', says: '<em>will</em>, <em>have</em>, <em>been</em>, V3.' },
      { move: 'Pretend to carry a very heavy box, then drop it', says: '<em>has been being</em> — too heavy!' },
      { move: 'Smooth the air with a flat hand', says: 'Write the lighter, natural form.' }
    ]
  }
});
