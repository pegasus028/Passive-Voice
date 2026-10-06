/* VOICE CONTROL — lenses-s8.js · Stage 08 lesson lenses */
Object.assign(LENSES, {
  t8l1s1: {
    thai: 'เวลาจะเล่าว่า "คนเขาพูดกันว่า…" หรือ "เชื่อกันว่า…" โดยไม่ต้องบอกว่าใครพูด ภาษาอังกฤษใช้ It + be + V3 + that เช่น It is said that Wat Arun looks its best at sunset. (ว่ากันว่าวัดอรุณสวยที่สุดตอนพระอาทิตย์ตก) It ตรงนี้เป็นประธานลอย ๆ ไม่ได้หมายถึงอะไร ส่วนที่บอกเวลาคือ be เท่านั้น เช่น It is said / It was reported / It has been found แล้วตามด้วยประโยคเต็มหลัง that ข้อควรระวังคือ ภาษาไทยพูดว่า "ว่ากันว่า" โดยไม่มีประธาน แต่ภาษาอังกฤษต้องมี It เสมอ และกริยาต้องเป็น passive ถ้าเขียน It believes that… จะกลายเป็นว่า "มัน" เป็นคนเชื่อ อย่าเติม by people เพราะไม่ได้ข้อมูลอะไรเพิ่ม และถ้าอยากบอกว่าใครเชื่อ ให้ใช้ active ไปเลย เช่น Scientists believe that…',
    analogy: {
      title: 'The school rumour',
      text: 'A rumour goes round the school: the canteen will sell pizza next term. Nobody knows who started it, so you don\'t say a name. You say <em>"They say…"</em> In news English that becomes <em>It <strong>is said</strong> that the canteen will sell pizza.</em> The <em>It</em> is like the empty space where the name of the person who started the rumour should be.'
    },
    trap: 'The exam puts the active <em>It believes that…</em> or a perfect with no <em>been</em> (<em>It has reported that…</em>) next to the right answer. Both make <em>it</em> the speaker. Dodge: after an empty <em>It</em> with a <em>that</em>-clause, the reporting verb must contain <em>be</em> + past participle.',
    map: {
      center: 'It + passive',
      branches: [
        {
          label: 'Form',
          leaves: ['It + be + V3 + that', 'only be shows tense']
        },
        {
          label: 'Verbs',
          leaves: ['say, believe, think', 'report, know, estimate']
        },
        {
          label: 'Why use it',
          leaves: ['source unknown', 'writer keeps distance']
        },
        {
          label: 'Traps',
          leaves: ['not: It believes that', 'not: Is said that']
        },
        {
          label: 'Named source',
          leaves: ['use the active', 'Scientists believe…']
        }
      ]
    },
    story: {
      title: 'Nong Bot Spreads the News',
      panels: [
        {
          who: 'Ploy',
          text: 'People say the canteen will sell pizza next term!'
        },
        {
          who: 'Nong Bot',
          text: 'BEEP! Writing it for the school news: <em>It says that the canteen will sell pizza.</em>'
        },
        {
          who: 'Fah',
          text: 'Who is <em>it</em>, Bot? The canteen menu? A wall?'
        },
        {
          who: 'Nong Bot',
          text: 'Correction: <em>It is said by people by somebody that…</em> Beep!'
        },
        {
          who: 'T.Chris',
          text: 'Too many doers, Bot. Nobody is named, so just write <em>It <strong>is said</strong> that the canteen will sell pizza.</em>'
        }
      ],
      moral: 'When nobody is named, use an empty <em>It</em> with a passive reporting verb, and no <em>by people</em>.'
    },
    chant: {
      title: 'Nobody Said It',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Who said it? Nobody knows!',
        'Start with <em>It</em>, that\'s how it goes!',
        '<em>It is said</em>, <em>it is believed</em>,',
        '<em>It was reported</em>, so we\'re relieved!',
        'Only <em>be</em> will show the time,',
        'No <em>by people</em> in this line!'
      ]
    },
    moves: [
      {
        move: 'Shrug with both hands open',
        says: 'Who said it? <em>Nobody knows.</em>'
      },
      {
        move: 'Draw a big letter I and T in the air',
        says: 'Start with an empty <em>It</em>.'
      },
      {
        move: 'Tap your wrist like a watch',
        says: '<em>Is said</em>, <em>was said</em>: only <em>be</em> shows the time.'
      },
      {
        move: 'Wave a hand to push something away',
        says: 'No <em>by people</em>, no <em>by someone</em>.'
      }
    ]
  },
  t8l1s2: {
    thai: 'ถ้าเรื่องที่พูดถึงคือคนหรือสิ่งของตัวนั้น ให้ยกมันขึ้นต้นประโยคเลย แล้วใช้ is said / is thought / is believed ตามด้วย to + กริยาช่องหนึ่ง เช่น People say that the café serves great coffee. เปลี่ยนเป็น The café is said to serve great coffee. (ร้านนี้ขึ้นชื่อว่ากาแฟอร่อย) ทำสามขั้น: หนึ่ง ยกประธานของประโยค that ขึ้นมาหน้า สอง ทำกริยารายงานให้เป็น passive ตาม tense เดิม สาม เปลี่ยนส่วนที่เหลือเป็น to + V1 อย่าลืมให้ be ตรงกับประธาน เช่น The paintings are thought to be old. ห้ามผสมสองแบบเป็น The temple is said that it is old. และถ้าประธานเป็นคนพูดเรื่องของตัวเอง ให้ใช้ active เช่น Fah claims to know him. (ฟ้าอ้างเองว่ารู้จักเขา)',
    analogy: {
      title: 'The spotlight',
      text: 'Think of a stage with one spotlight. In <em>It is said that the café serves great coffee</em>, the spotlight is on an empty space. Move the spotlight onto the café and it becomes the star of the sentence: <em>The café <strong>is said to serve</strong> great coffee.</em> The people who said it stay in the dark, where they were all along.'
    },
    trap: 'The classic trap mixes the two patterns: <em>The café is said <strong>that</strong> it serves…</em>. Another trap is agreement: <em>The paintings in the chapel <strong>is</strong> believed…</em>, where <em>be</em> agrees with the nearest noun. Dodge: real subject first means <em>to</em> + base form after the reporting verb, and <em>be</em> agrees with the head noun.',
    map: {
      center: 'Subject + to-inf',
      branches: [
        {
          label: 'Form',
          leaves: ['X is said to + V1', 'X are thought to be']
        },
        {
          label: 'Three moves',
          leaves: ['subject to the front', 'passive, then to + V1']
        },
        {
          label: 'Agreement',
          leaves: ['be agrees with subject', 'paintings are…']
        },
        {
          label: 'Never mix',
          leaves: ['not: is said that it…', 'pick one pattern']
        },
        {
          label: 'Own claim',
          leaves: ['active: claims to', 'Fah claims to know…']
        }
      ]
    },
    story: {
      title: 'Nong Bot and the Famous Grandma',
      panels: [
        {
          who: 'Pim',
          text: 'Everyone says my grandma makes the best green curry on our soi.'
        },
        {
          who: 'Nong Bot',
          text: 'BEEP! New sentence: <em>Pim\'s grandma is said that she makes the best curry.</em>'
        },
        {
          who: 'Mint',
          text: 'Bot, that sounds strange. Two patterns are fighting in one sentence.'
        },
        {
          who: 'Nong Bot',
          text: 'Then I will delete the grandma. <em>It is said to make the best curry.</em> Beep!'
        },
        {
          who: 'T.Chris',
          text: 'Keep Grandma, Bot. She\'s the topic: <em>Pim\'s grandma <strong>is said to make</strong> the best green curry.</em>'
        }
      ],
      moral: 'Put the topic first, then a passive reporting verb and <em>to</em> + base form; never add a <em>that</em>-clause.'
    },
    chant: {
      title: 'Topic First',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Topic first, put it in the light,',
        '<em>The café is said</em>, that\'s right!',
        'Then <em>to</em> + verb, keep it plain,',
        '<em>to serve</em>, <em>to be</em>, <em>to live</em>, <em>to remain</em>!',
        'No <em>that</em>-clause after a name,',
        'And if you claim it, active\'s the game!'
      ]
    },
    moves: [
      {
        move: 'Point at a classmate',
        says: 'Topic first: <em>The singer…</em>'
      },
      {
        move: 'Cup a hand behind your ear',
        says: '…<em>is believed</em>: other people believe it.'
      },
      {
        move: 'Step forward with one foot',
        says: '…<em>to live</em> in Chiang Mai: <em>to</em> + base form.'
      },
      {
        move: 'Cross your arms in an X',
        says: 'No <em>that</em> after the topic!'
      }
    ]
  },
  t8l1s3: {
    thai: 'หลัง is said / is believed / is thought ส่วนที่เป็น infinitive จะบอกสองอย่างพร้อมกัน คือ เวลา และ ใครทำ ถ้าเป็นเรื่องเวลาเดียวกับตอนที่รายงาน ใช้ to + V1 เช่น He is believed to be in Phuket. ถ้ากำลังเกิดขึ้นอยู่ ใช้ to be + V-ing เช่น The team is reported to be searching the cave. ถ้าเกิดก่อนหน้านั้น ใช้ to have + V3 เช่น The thieves are thought to have escaped. และถ้าเกิดก่อนหน้า แถมประธานเป็นผู้ถูกกระทำ ใช้ to have been + V3 เช่น The walls are believed to have been built 700 years ago. (กำแพงสร้างเองไม่ได้ ต้องมีคนสร้าง) ข้อผิดที่เจอบ่อยที่สุดคือลืม been ดังนั้นต้องถามตัวเองสองคำถามทุกครั้ง: เกิดเมื่อไร และประธานทำเองหรือถูกทำ',
    analogy: {
      title: 'Two dials on a radio',
      text: 'Imagine a radio with two dials. The first dial sets the <strong>time</strong>: now, in progress, or earlier. The second dial sets the <strong>voice</strong>: did the subject do it, or receive it? <em>To have been stolen</em> means the time dial is on <em>earlier</em> and the voice dial is on <em>received</em>. Turn only one dial and you get static: <em>The ruby is believed to have stolen</em>.'
    },
    trap: 'Exams love the half-right option: the right time but the wrong voice (<em>is thought to have caused</em> for a fire that was caused), or the right voice but the wrong time (<em>is thought to be caused</em> for last night\'s fire). Dodge: make both decisions every time, first when, then who.',
    map: {
      center: 'Time + voice',
      branches: [
        {
          label: 'Same time',
          leaves: ['to + V1', 'is believed to be']
        },
        {
          label: 'In progress',
          leaves: ['to be + V-ing', 'is reported to be busy']
        },
        {
          label: 'Earlier',
          leaves: ['to have + V3', 'are thought to have left']
        },
        {
          label: 'Earlier, received',
          leaves: ['to have been + V3', 'to have been built']
        },
        {
          label: 'Two questions',
          leaves: ['when did it happen?', 'did it, or received it?']
        }
      ]
    },
    story: {
      title: 'Nong Bot Finds the Ruby',
      panels: [
        {
          who: 'Nan',
          text: 'The museum\'s ruby disappeared in 1998. Nobody knows how!'
        },
        {
          who: 'Nong Bot',
          text: 'BEEP! Report: <em>The ruby is believed to have stolen in 1998.</em>'
        },
        {
          who: 'Mai',
          text: 'Bot, did the ruby steal something? Does it have little hands?'
        },
        {
          who: 'Nong Bot',
          text: 'Rubies have no hands. Then <em>the ruby is believed to be stolen</em>. Beep!'
        },
        {
          who: 'T.Chris',
          text: 'Now the time is wrong, Bot. It was earlier, and it was done to the ruby: <em>to <strong>have been</strong> stolen</em>.'
        }
      ],
      moral: 'Set both dials: <em>have</em> for an earlier time, <em>been</em> when the subject received the action.'
    },
    chant: {
      title: 'When and Who',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Is it now? Then <em>to be</em>!',
        'Going on? <em>To be searching</em>, see?',
        'Was it before? <em>To have left</em>, that\'s true!',
        'Done to the subject? Add <em>been</em> too!',
        '<em>To have been built</em>, <em>to have been found</em>,',
        'When and who, every time around!'
      ]
    },
    moves: [
      {
        move: 'Point straight down at the floor',
        says: 'Now: <em>to be</em>.'
      },
      {
        move: 'Roll your hands round and round',
        says: 'In progress: <em>to be searching</em>.'
      },
      {
        move: 'Point back over your shoulder',
        says: 'Earlier: <em>to have left</em>.'
      },
      {
        move: 'Point back, then hug yourself',
        says: 'Earlier and received: <em>to have been stolen</em>.'
      }
    ]
  },
  t8l2s1: {
    thai: 'ในเรียงความหรือรายงานวิชาการ เรามักไม่เขียนว่า I think หรือ we can see แต่ใช้ It + modal + be + V3 + that แทน เช่น It can be argued that… (อาจกล่าวได้ว่า…) It can be seen from the graph that… (จากกราฟจะเห็นได้ว่า…) It can be concluded that… (สรุปได้ว่า…) และ It is hoped that… (หวังว่า…) หลัง can ต้องเป็น be + V3 เสมอ ห้ามเขียน It can see หรือ It can be see เลือกกริยาให้ตรงกับหน้าที่ argued คือข้อโต้แย้ง seen คือสิ่งที่หลักฐานแสดง concluded คือข้อสรุปสุดท้าย แต่อย่าใช้ passive ไปทุกประโยค ถ้าเอกสารหรือกราฟเป็นผู้แสดงข้อมูล ใช้ active ได้เลย เช่น This essay argues that… หรือ The graph shows that… สิ่งของเป็นผู้กระทำได้',
    analogy: {
      title: 'The invisible narrator',
      text: 'In a documentary, the narrator talks but you never see their face. That is what <em>It can be argued that…</em> does in an essay: the writer is still making the argument, but stays off camera. And when a chart is on screen, the chart can speak for itself: <em>The graph <strong>shows</strong> that…</em>'
    },
    trap: 'Two traps sit side by side. One is a broken chain after the modal: <em>It can see</em> or <em>It can be see</em>. The other is a passive forced onto a document that is clearly the doer: <em>This essay <strong>is argued</strong> that…</em>. Dodge: empty <em>It</em> means modal + <em>be</em> + V3; a real document subject usually takes the active.',
    map: {
      center: 'Academic It',
      branches: [
        {
          label: 'Form',
          leaves: ['It + can be + V3 + that', 'It has been found that']
        },
        {
          label: 'argued',
          leaves: ['a claim to defend', 'It can be argued that']
        },
        {
          label: 'seen / concluded',
          leaves: ['what evidence shows', 'the final result']
        },
        {
          label: 'hoped',
          leaves: ['the writer\'s wish', 'It is hoped that…']
        },
        {
          label: 'Active is fine',
          leaves: ['This essay argues…', 'The graph shows…']
        }
      ]
    },
    story: {
      title: 'Nong Bot Writes an Essay',
      panels: [
        {
          who: 'Fah',
          text: 'Bot, T.Chris says no <em>I think</em> in our essays.'
        },
        {
          who: 'Nong Bot',
          text: 'BEEP! Deleting all humans. <em>It can see from the graph that cycling has doubled.</em>'
        },
        {
          who: 'Ploy',
          text: 'Bot, <em>it</em> has no eyes. Who is doing the seeing?'
        },
        {
          who: 'Nong Bot',
          text: 'Fixed! <em>This essay is argued that cycling is good.</em> Beep!'
        },
        {
          who: 'T.Chris',
          text: 'Two fixes, Bot: <em>It <strong>can be seen</strong> from the graph that…</em> and <em>This essay <strong>argues</strong> that…</em> An essay can argue.'
        }
      ],
      moral: 'Empty <em>It</em> takes modal + <em>be</em> + V3, but a document that does the arguing takes the active.'
    },
    chant: {
      title: 'No I in the Essay',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'No <em>I think</em> and no <em>we see</em>,',
        '<em>It can be argued</em>, academically!',
        '<em>Can be seen</em> from the chart, you know,',
        '<em>Can be concluded</em>, at the end of the show!',
        'After <em>can</em>, it\'s <em>be</em> + V3,',
        'But <em>the graph shows</em>: active, see!'
      ]
    },
    moves: [
      {
        move: 'Cover your mouth with one hand',
        says: 'No <em>I think</em> in the essay.'
      },
      {
        move: 'Make glasses with your fingers',
        says: '<em>It can be seen</em> from the chart that…'
      },
      {
        move: 'Bring your hands together with a clap',
        says: '<em>It can be concluded</em> that…'
      },
      {
        move: 'Hold up an imaginary paper',
        says: '<em>This essay argues</em>: the paper does it.'
      }
    ]
  },
  t8l2s2: {
    thai: 'กริยารายงานบางตัวใช้ได้แค่บางรูปแบบ กลุ่มแรกคือกริยาเสนอแนะ เช่น suggest, recommend, propose, mention ใช้ได้แค่ It is suggested that… ห้ามเขียน The trip was suggested to be postponed. กลุ่มที่สองคือกริยาที่ทำกับคน เช่น inform, tell, warn, remind ต้องให้คนที่ได้รับข้อมูลเป็นประธาน เช่น Students have been informed that… (นักเรียนได้รับแจ้งว่า…) ห้ามเขียน It has been informed that… เพราะไม่มีใครรับข้อมูล ส่วน tell + to ใช้ได้เฉพาะความหมายว่า "สั่ง" เช่น We were told to wait. กลุ่มที่สามคือการบอกว่ามีอะไรอยู่ ใช้ There is/are + V3 + to be เช่น There are said to be over 400 temples in Bangkok. โดย is/are ต้องตรงกับคำนามที่ตามมา',
    analogy: {
      title: 'Three keys, three doors',
      text: 'Reporting verbs are like keys on a ring, and each one opens only certain doors. <em>Suggest</em> opens only the <em>It… that</em> door. <em>Inform</em> and <em>warn</em> open only the door with a person standing in it: <em>We were warned…</em>. And for things that exist, there is a special door marked <em>There</em>. Push the wrong key into a door and it just won\'t turn.'
    },
    trap: 'The exam takes a pattern that works for <em>say</em> and uses it with the wrong verb: <em>The trip was suggested to be…</em> or <em>It has been informed that…</em>. Both look like real reporting passives. Dodge: before you choose, ask which family the verb belongs to, a proposal verb, a person-object verb, or an existence report.',
    map: {
      center: 'Picky verbs',
      branches: [
        {
          label: 'Proposal verbs',
          leaves: ['suggest, recommend', 'It… that only']
        },
        {
          label: 'Person verbs',
          leaves: ['inform, tell, warn', 'person = subject']
        },
        {
          label: 'tell + to',
          leaves: ['only an order', 'We were told to wait.']
        },
        {
          label: 'Existence',
          leaves: ['There is/are + V3', '+ to be']
        },
        {
          label: 'Agreement',
          leaves: ['There are said to be', 'agrees with the noun']
        }
      ]
    },
    story: {
      title: 'Nong Bot Makes an Announcement',
      panels: [
        {
          who: 'Mai',
          text: 'Bot, please tell everyone the pool is closed this week.'
        },
        {
          who: 'Nong Bot',
          text: 'BEEP! Loudspeaker on: <em>It has been informed that the pool is closed!</em>'
        },
        {
          who: 'Nan',
          text: 'Informed who, Bot? The pool? The loudspeaker?'
        },
        {
          who: 'Nong Bot',
          text: 'Second try: <em>The pool has been suggested to be closed.</em> Beep!'
        },
        {
          who: 'T.Chris',
          text: 'The students get the news, Bot, so they are the subject: <em>Students <strong>have been informed</strong> that the pool is closed.</em>'
        }
      ],
      moral: 'Verbs like <em>inform</em> and <em>warn</em> need a person as the passive subject, and <em>suggest</em> only works with <em>It… that</em>.'
    },
    chant: {
      title: 'Picky Verbs',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>Suggest</em>, <em>recommend</em>: <em>It… that</em> only!',
        '<em>Inform</em>, <em>warn</em>: a person, not lonely!',
        '<em>We were warned</em>, <em>we were told</em>,',
        'Not <em>It was informed</em>, that\'s getting old!',
        'Something there? Then <em>There</em> + <em>to be</em>,',
        '<em>There are said to be</em> temples, see!'
      ]
    },
    moves: [
      {
        move: 'Hold up one finger and point to the side',
        says: '<em>Suggest</em>: <em>It is suggested that…</em> only.'
      },
      {
        move: 'Point at a friend',
        says: '<em>Inform</em>, <em>warn</em>: the person is the subject.'
      },
      {
        move: 'Hold up a hand like a stop sign',
        says: '<em>Tell</em> + <em>to</em> is an order: <em>We were told to wait.</em>'
      },
      {
        move: 'Point far away into the distance',
        says: '<em>There are said to be</em> 400 temples.'
      }
    ]
  },
  t8l2s3: {
    thai: 'หลังวลีทางการที่เป็นการเสนอแนะหรือความจำเป็น เช่น It is recommended that… / It is suggested that… / It is essential that… กริยาในประโยค that ใช้รูปพื้นฐาน (base form) กับประธานทุกตัว ไม่เติม s และไม่มี tense ถ้าเป็น passive จึงใช้ be + V3 เช่น It is recommended that the medicine be taken after meals. แม้กริยาหลักจะเป็นอดีตก็ยังใช้ be เหมือนเดิม เช่น It was suggested that the meeting be moved. รูปแบบนี้เคยออกใน A-Level 2567 (ข้อสอบที่เรียบเรียงใหม่) โดยตัวลวงคือ V3 เปล่า ๆ ที่ไม่มี be แบบบริติชใช้ should be + V3 ได้เช่นกัน แต่อย่าลืมเช็กว่าใครทำ ถ้าประธานในประโยค that เป็นผู้ทำเอง ใช้ active เช่น It is recommended that visitors wear comfortable shoes.',
    analogy: {
      title: 'The school rulebook',
      text: 'A rulebook does not care who you are or what day it is. The rule is the same for everyone, always: <em>It is required that every bag <strong>be</strong> checked.</em> That is why the verb is frozen in its base form. No <em>-s</em>, no <em>was</em>, no <em>will</em>, just the plain rule, the same for every subject.'
    },
    trap: 'The trap in the A-Level item was a bare participle (<em>that exams tailored</em>) next to <em>be tailored</em>, with <em>will be tailored</em> as a second trap. Students who think "singular subject needs <em>is</em>" also reject the base form. Dodge: after these formal phrases, the <em>that</em>-clause takes a base form: <em>be</em> + V3 for a receiver, a plain verb for a doer.',
    map: {
      center: 'that X be done',
      branches: [
        {
          label: 'Trigger phrases',
          leaves: ['It is recommended that', 'It is essential that']
        },
        {
          label: 'Passive',
          leaves: ['base be + V3', 'the test be taken']
        },
        {
          label: 'Frozen form',
          leaves: ['no -s, no tense', 'past main verb: still be']
        },
        {
          label: 'Doer subject',
          leaves: ['active base form', 'that visitors wear…']
        },
        {
          label: 'Never',
          leaves: ['bare V3: that it taken', 'have + V3, will be + V3']
        }
      ]
    },
    story: {
      title: 'Nong Bot Writes the Rules',
      panels: [
        {
          who: 'Mint',
          text: 'Bot, write a rule so nobody uses the old hall for parties.'
        },
        {
          who: 'Nong Bot',
          text: 'BEEP! Rule one: <em>It is recommended that the hall not used for parties.</em>'
        },
        {
          who: 'Pim',
          text: 'Bot, that sentence has no verb. The hall is just floating.'
        },
        {
          who: 'Nong Bot',
          text: 'Adding tense! <em>…that the hall will be not used.</em> Beep!'
        },
        {
          who: 'T.Chris',
          text: 'No tense here, Bot. The base form stays frozen: <em>It is recommended that the hall <strong>not be used</strong> for parties.</em>'
        }
      ],
      moral: 'After <em>It is recommended that…</em>, the verb is a frozen base form: <em>be</em> + V3 for a receiver.'
    },
    chant: {
      title: 'Frozen Be',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        '<em>Recommended that</em>… freeze the verb!',
        'No <em>-s</em>, no tense, that\'s the word!',
        '<em>That the test be taken</em>, <em>that the bag be checked</em>,',
        'Base-form <em>be</em>, what did you expect?',
        'But if the subject does it, then',
        '<em>That visitors wear</em>: active again!'
      ]
    },
    moves: [
      {
        move: 'Freeze like a statue',
        says: 'Frozen form: <em>be</em>, for every subject.'
      },
      {
        move: 'Point backwards over your shoulder, then freeze again',
        says: '<em>It was suggested that…</em> still <em>be</em>.'
      },
      {
        move: 'Shake a finger',
        says: 'No bare V3: never <em>that exams tailored</em>.'
      },
      {
        move: 'Walk on the spot',
        says: 'Doer subject: <em>that visitors wear</em>.'
      }
    ]
  },
  t8l3s1: {
    thai: 'ในภาษาพูด เราใช้ get + V3 แทน be ได้ เพื่อบอกว่าเกิดอะไรขึ้นกับประธาน เช่น My bike got stolen. (จักรยานโดนขโมย) หรือ She got promoted. (เธอได้เลื่อนตำแหน่ง) เห็นไหมว่าภาษาไทยใช้ทั้ง "โดน" และ "ได้" แต่ภาษาอังกฤษใช้ get + V3 เหมือนกัน เพราะฉะนั้นอย่าคิดว่า get-passive ใช้กับเรื่องร้ายเท่านั้น เรื่องดีก็ใช้ได้ เช่น got chosen, got paid ส่วนที่ต้องระวังคือใช้ V3 ไม่ใช่ V2 (got stolen ไม่ใช่ got stole) คำถามและปฏิเสธใช้ did เช่น Did you get hurt? และใช้กับเหตุการณ์ที่เกิดขึ้นเท่านั้น ไม่ใช้กับสภาวะ เช่น The hotel is located near the beach. ห้ามใช้ gets located นอกจากนี้ถ้าประธานทำเอง เช่น Pond broke his wrist. ก็ใช้ active',
    analogy: {
      title: 'The surprise box',
      text: 'Think of <em>get</em> as a box that something lands in: a red card, a prize, a promotion, a stolen bike. <em>Get</em> is about something <strong>happening</strong> to you, good or bad. But you can\'t <em>get</em> a state, like being located by a river or being owned by someone. Nothing lands in the box; it just <em>is</em>.'
    },
    trap: 'The forms trap: <em>got stole</em>, <em>got catched</em>, <em>got promote</em>, which use the wrong verb form after <em>get</em>. And the meaning trap: a rule like "<em>get</em> is only for bad things" makes students reject <em>got promoted</em>. Dodge: <em>get</em> + the real past participle, for any event, good or bad.',
    map: {
      center: 'get + V3',
      branches: [
        {
          label: 'Form',
          leaves: ['get (any tense) + V3', 'got stolen, gets paid']
        },
        {
          label: 'Meaning',
          leaves: ['often bad surprises', 'good news too: promoted']
        },
        {
          label: 'Questions',
          leaves: ['Did you get hurt?', 'I didn\'t get invited.']
        },
        {
          label: 'Not for states',
          leaves: ['is located', 'not: gets located']
        },
        {
          label: 'V3 check',
          leaves: ['got stolen, not stole', 'got caught, not catched']
        }
      ]
    },
    story: {
      title: 'Nong Bot Hears Good News',
      panels: [
        {
          who: 'Earth',
          text: 'Guess what? I got chosen for the school football team!'
        },
        {
          who: 'Nong Bot',
          text: 'BEEP! Error! <em>Get</em>-passive is for bad things only. You must be sad.'
        },
        {
          who: 'Earth',
          text: 'Sad? Bot, I\'m the happiest person in M5!'
        },
        {
          who: 'Nong Bot',
          text: 'Then I will say it correctly: <em>Earth got choose</em>. Congratulations. Beep!'
        },
        {
          who: 'T.Chris',
          text: 'Two fixes, Bot: good news can use <em>get</em> too, and it needs a past participle: <em>Earth <strong>got chosen</strong>!</em>'
        }
      ],
      moral: 'The get-passive is <em>often</em> for bad surprises, but not only, and it always needs a past participle.'
    },
    chant: {
      title: 'Got It!',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Bike <em>got stolen</em>, oh no!',
        'Sister <em>got promoted</em>, let\'s go!',
        'Good or bad, <em>get</em> can do,',
        'Always V3, never V2!',
        '<em>Did you get hurt?</em> <em>Did</em> leads the way,',
        'States keep <em>be</em>, every day!'
      ]
    },
    moves: [
      {
        move: 'Hold out both hands like catching a ball',
        says: '<em>Get</em>: something lands on you.'
      },
      {
        move: 'Thumbs down, then thumbs up',
        says: '<em>Got stolen</em>, <em>got promoted</em>: bad or good.'
      },
      {
        move: 'Tap three fingers in a row',
        says: 'V3 only: <em>stolen</em>, <em>caught</em>, <em>chosen</em>.'
      },
      {
        move: 'Stand completely still',
        says: 'A state: <em>is located</em>, no <em>get</em>.'
      }
    ]
  },
  t8l3s2: {
    thai: 'ถ้าเติม myself / yourself / herself หลัง get จะมีความหมายเพิ่มว่า "เป็นเพราะตัวเองด้วย" เช่น I got myself locked out. (ฉันทำตัวเองล็อกอยู่นอกบ้าน เพราะลืมกุญแจไว้ข้างใน) หรือ You\'ll get yourself hurt. (ระวังจะทำตัวเองเจ็บนะ) ลำดับคือ get + -self + V3 และคำ -self ต้องตรงกับประธาน เช่น they got themselves ถ้าใช้ her หรือ them แทน ความหมายจะเปลี่ยนเป็นคนอื่น อีกเรื่องคือระดับภาษา get-passive เป็นภาษาพูดหรือแชต ไม่ใช้ในงานเขียนทางการ เช่น รายงานวิทยาศาสตร์ ข่าว หรือเรียงความ ในงานเขียนแบบนั้นใช้ be-passive เสมอ เช่น The samples were collected… ไม่ใช่ got collected',
    analogy: {
      title: 'School uniform and weekend clothes',
      text: 'The get-passive is your weekend T-shirt: perfect with friends, in chat, in a funny story. A news report or a lab report is school uniform day, and the be-passive is the uniform. Both are clothes and both are passives, but you would not wear your weekend T-shirt to morning assembly.'
    },
    trap: 'The register trap: a formal report with <em>got injured</em> or <em>got collected</em> sits next to the be-passive, and the get version looks perfectly grammatical. The form trap: <em>got locked herself</em> or <em>got her locked</em>. Dodge: ask who reads it first; then for blame use <em>get</em> + matching <em>-self</em> + V3, in that order.',
    map: {
      center: 'get -self / register',
      branches: [
        {
          label: 'get -self + V3',
          leaves: ['partly your own fault', 'got myself locked out']
        },
        {
          label: 'Match pronoun',
          leaves: ['she… herself', 'they… themselves']
        },
        {
          label: 'Word order',
          leaves: ['-self right after get', 'not: got locked herself']
        },
        {
          label: 'Informal',
          leaves: ['speech, chat, stories', 'got injured']
        },
        {
          label: 'Formal',
          leaves: ['reports, news, essays', 'were injured']
        }
      ]
    },
    story: {
      title: 'Nong Bot Writes the News',
      panels: [
        {
          who: 'Nan',
          text: 'Bot, write the school newsletter story about the science fair.'
        },
        {
          who: 'Nong Bot',
          text: 'BEEP! Headline story: <em>Three robots got broken and the judges got totally confused lol.</em>'
        },
        {
          who: 'Ploy',
          text: 'Bot, this is the newsletter, not a chat with your friends!'
        },
        {
          who: 'Nong Bot',
          text: 'Understood. I also got locked myself out of the lab. Beep.'
        },
        {
          who: 'T.Chris',
          text: 'Newsletter: <em>Three robots <strong>were damaged</strong>.</em> And for you, Bot: <em>I <strong>got myself locked out</strong></em>. You left your key inside!'
        }
      ],
      moral: 'Use the be-passive in formal writing, and <em>get</em> + <em>-self</em> + V3 when the subject caused the problem.'
    },
    chant: {
      title: 'Chat or Report?',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'Chatting with friends? <em>Got</em> is fine!',
        'Writing a report? <em>Be</em> on the line!',
        '<em>Were collected</em>, <em>were injured</em>, formal and clear,',
        '<em>Got</em> in a report? Not here!',
        'Locked out because you forgot your key?',
        '<em>Got myself locked out</em>: blame on me!'
      ]
    },
    moves: [
      {
        move: 'Pretend to type on a phone',
        says: 'Chat: <em>got hurt</em>, <em>got stuck</em>.'
      },
      {
        move: 'Straighten your back and fix a pretend tie',
        says: 'Report: <em>were injured</em>, <em>were collected</em>.'
      },
      {
        move: 'Point at yourself and shake your head',
        says: '<em>I got myself locked out</em>: my fault.'
      },
      {
        move: 'Point at yourself, then at the subject',
        says: 'Match it: <em>they… themselves</em>.'
      }
    ]
  },
  t8l3s3: {
    thai: 'การเลือก active หรือ passive ในย่อหน้าไม่ได้ขึ้นกับไวยากรณ์อย่างเดียว แต่ขึ้นกับว่าเนื้อความกำลังพูดถึงอะไร (topic) ให้เริ่มประโยคด้วยสิ่งที่ผู้อ่านรู้แล้ว และจบด้วยข้อมูลใหม่ ถ้า topic เป็นผู้ทำ ใช้ active เช่น Fah loves robots. Last year she built one. ถ้า topic เป็นผู้ถูกกระทำ ใช้ passive เช่น Our school has a new mural. It was painted by M5 students. (ภาพนี้วาดโดยนักเรียน ม.5 ข้อมูลใหม่อยู่ท้ายประโยค) อย่าคิดว่า passive ฟังดูเป็นวิชาการกว่าแล้วใช้ทุกที่ เพราะ topic จะหลุดจากตำแหน่งประธาน ผู้อ่านต้องคอยหาว่าเรื่องนี้พูดถึงอะไร วิธีเช็ก: ถามว่าย่อหน้านี้เกี่ยวกับอะไร ให้สิ่งนั้นเป็นประธาน แล้วค่อยเลือก voice',
    analogy: {
      title: 'Passing the ball',
      text: 'A good paragraph is like a football team passing the ball. Each sentence receives the ball (something the reader already knows) and passes it on (something new). If one player suddenly kicks the ball off the pitch, which is a sentence that starts with a brand-new subject, the reader has to run and find it. Choose the voice that keeps the ball moving.'
    },
    trap: 'The trap option is a perfectly grammatical sentence in the wrong voice, such as <em>A team of former students designed it</em> in a paragraph about the lab, or <em>the drums were being played by him</em> in a paragraph about Earth. Dodge: name the topic of the paragraph first, then pick the voice that keeps it as the subject.',
    map: {
      center: 'Flow',
      branches: [
        {
          label: 'Given → new',
          leaves: ['start: what we know', 'end: what is new']
        },
        {
          label: 'Topic = subject',
          leaves: ['what is it about?', 'keep it in front']
        },
        {
          label: 'Topic does it',
          leaves: ['active', 'Last year she built one.']
        },
        {
          label: 'Topic receives it',
          leaves: ['passive', 'It was painted by M5.']
        },
        {
          label: 'Not a rule',
          leaves: ['passive ≠ better', 'context decides']
        }
      ]
    },
    story: {
      title: 'Nong Bot and the Robot Girl',
      panels: [
        {
          who: 'Fah',
          text: 'Bot, help me write my profile for the science fair.'
        },
        {
          who: 'Nong Bot',
          text: 'BEEP! <em>Fah loves robots. Last year a robot was built by Fah. A prize was won by the robot.</em>'
        },
        {
          who: 'Fah',
          text: 'Where am I in my own profile, Bot? I keep disappearing!'
        },
        {
          who: 'Nong Bot',
          text: 'Passive is more academic. More passive = more smart. Beep!'
        },
        {
          who: 'T.Chris',
          text: 'Not here, Bot. The profile is about Fah and she did it: <em>Last year <strong>she built</strong> a robot, and it <strong>won</strong> first prize.</em>'
        }
      ],
      moral: 'The passive is not automatically better: keep the topic as the subject and let the voice follow.'
    },
    chant: {
      title: 'Keep the Ball Rolling',
      beat: 'kick-kick-clap (4/4)',
      lines: [
        'What\'s it about? Put that first!',
        'Old news first, new news burst!',
        'Topic does it? Active, go!',
        'Topic gets it? Passive, so!',
        'Passive\'s not always the smarter way,',
        'Keep the topic, that\'s the play!'
      ]
    },
    moves: [
      {
        move: 'Pretend to catch a ball',
        says: 'Start with what we know.'
      },
      {
        move: 'Pretend to pass the ball on',
        says: 'End with what is new.'
      },
      {
        move: 'Flex an arm like a superhero',
        says: 'Topic does it: active, <em>she built</em>.'
      },
      {
        move: 'Open your arms to receive a hug',
        says: 'Topic receives it: passive, <em>it was painted</em>.'
      }
    ]
  }
});
