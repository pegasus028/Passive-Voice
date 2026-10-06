/* VOICE CONTROL — lenses-s2.js · Stage 02 lesson lenses */
Object.assign(LENSES, {
  't2l1s1': {
    thai: 'ก่อนเลือกรูปกริยา ให้หาประธานก่อน แล้วถามคำถามเดียวว่า ประธาน "ทำ" กริยานั้นเอง หรือเป็นผู้ "รับ" การกระทำ ถ้าเป็นผู้ทำ ใช้ active ถ้าเป็นผู้รับ ใช้ passive คือ be + V3 เช่น The guard locked the gate. (ยามเป็นคนล็อก) เทียบกับ The gate was locked at ten. (ประตูไม่ได้ทำอะไร มีคนมาล็อกมัน) อย่าตัดสินจากชนิดของประธาน เพราะสิ่งของก็เป็นผู้ทำได้ และคนก็เป็นผู้รับได้ และอย่าใช้คำว่า "ถูก" ในภาษาไทย หรือการเห็นคำว่า by เป็นตัวตัดสิน เพราะประโยคไทยจำนวนมากไม่มีคำว่าถูกเลย แต่ภาษาอังกฤษต้องมี be + V3 ทุกครั้งที่ประธานเป็นผู้รับ ถ้าไม่แน่ใจ ให้นึกเป็นฉากสั้น ๆ ว่า ใครทำอะไรกับใคร แล้วดูว่าประธานของเราอยู่ในบทไหน',
    analogy: { title: 'The football pass', text: 'In a football match, every player on the pitch either <strong>kicks</strong> the ball or <strong>gets</strong> the ball. The shirt colour does not tell you which — you have to watch the play. Grammar is the same: the subject either does the action (<em>Ploy <b>passed</b> the ball</em>) or receives it (<em>Ploy <b>was given</b> the ball</em>). Watch the play, not the shirt.' },
    trap: 'The exam puts a passive and an active of the same verb side by side and waits for you to choose by habit — "it is a thing, so passive" or "I see <em>by</em>, so passive". Dodge it by naming the doer before you look at the options: if your subject is that doer, the verb is active.',
    map: { center: 'Doer or receiver?', branches: [
      { label: 'Doer', leaves: ['subject does the action', 'The guard locked it.'] },
      { label: 'Receiver', leaves: ['action happens to it', 'The gate was locked.'] },
      { label: 'Passive form', leaves: ['be + past participle', 'be changes for tense'] },
      { label: 'Not the test', leaves: ['person or thing?', 'ถูก in Thai? by?'] },
      { label: 'How to check', leaves: ['who did what to whom?', 'find the subject\'s role'] }
    ] },
    story: { title: 'Nong Bot and the Biting Dog', panels: [
      { who: 'Fah', text: 'Bot, look! The neighbour\'s dog <em>bit</em> the postman!' },
      { who: 'Nong Bot', text: 'BEEP! Dogs are animals, not machines. I will make it safe: <em>The dog was bitten the postman.</em>' },
      { who: 'Mai', text: 'So now the postman bit the dog?! Poor dog!' },
      { who: 'Nong Bot', text: 'Error. Error. My rule says: if it is scary, use passive. Beep.' },
      { who: 'T.Chris', text: 'Bot, ask who did the biting. The dog did, and the postman is the object, so it\'s active: <em>The dog <b>bit</b> the postman.</em> Or start with the postman: <em>The postman <b>was bitten</b>.</em>' }
    ], moral: 'Decide the voice from the roles — who does it and who receives it — never from how the sentence feels.' },
    chant: { title: 'Do It or Get It', beat: 'kick-kick-clap (4/4)', lines: [
      'Find the subject, look it in the eye,',
      'Did it <em>do</em> it? Then active — say why!',
      'Did it <em>get</em> it? Then <em>be</em> plus three,',
      'The gate <b>was locked</b> — not by the gate, by me!',
      'Person or thing? That isn\'t the test,',
      'Who did what to whom? That works best!'
    ] },
    moves: [
      { move: 'Point forward with both hands', says: 'Doer — I <em>do</em> it: active!' },
      { move: 'Pull both hands to your chest', says: 'Receiver — it <em>happens to</em> me: <em>be</em> + V3!' },
      { move: 'Hold up three fingers', says: 'Passive needs the third form: <em>was locked</em>.' },
      { move: 'Shake your head and wave one finger', says: 'Not "thing → passive". Ask the question!' }
    ]
  },

  't2l1s2': {
    thai: 'นักเรียนไทยหลายคนมีกฎในใจว่า ถ้าประธานเป็นสิ่งของ ต้องใช้ passive เพราะสิ่งของทำอะไรเองไม่ได้ กฎนี้ผิด และข้อสอบชอบดักตรงนี้ ในภาษาอังกฤษ สิ่งของเป็นผู้กระทำได้ ถ้ามันทำให้เกิดผลกับคำนามที่ตามหลังกริยา เช่น Heavy rain flooded the main road. (ฝนทำให้ถนนน้ำท่วม) The new law bans smoking on beaches. (กฎหมายเป็นผู้ห้าม) The app tracks your sleep. ทุกประโยคมีประธานเป็นสิ่งของ แต่กริยาเป็น active เพราะประธานทำบางอย่างกับกรรม ในข้อสอบตัวอย่าง TCAS70 คำตอบคือ The exam evaluates… ไม่ใช่ is evaluated แต่ก็อย่าสร้างกฎใหม่ว่า "สิ่งของต้อง active" เพราะสิ่งของก็เป็นผู้รับได้ เช่น The road was closed. ให้ถามทุกครั้งว่า ประธานทำ หรือประธานรับการกระทำ',
    analogy: { title: 'The robot vacuum', text: 'Your robot vacuum is not a person, but it <strong>cleans</strong> the floor, <strong>bumps</strong> into the sofa and <strong>wakes</strong> the cat. Nobody says <em>the floor is cleaned by me, the vacuum</em> just because the vacuum is a machine. If a thing does something to something else, it is the doer: <em>The vacuum <b>cleans</b> the floor every morning.</em>' },
    trap: 'TCAS loves an inanimate subject followed by an object: <em>The exam ___ everything students have learned.</em> The passive option feels "safe" because exams cannot think — and it is wrong. Dodge it: if a noun the verb acts on follows the gap, the thing is a doer and the verb is active.',
    map: { center: 'Things as doers', branches: [
      { label: 'Weather', leaves: ['Heavy rain flooded…', 'The storm damaged…'] },
      { label: 'Laws and rules', leaves: ['The new law bans…', 'The rule allows…'] },
      { label: 'Machines and apps', leaves: ['The app tracks…', 'The MRT line has cut…'] },
      { label: 'Ideas and forces', leaves: ['Social media shapes…', 'Pressure is prompting…'] },
      { label: 'Still a receiver?', leaves: ['The road was closed.', 'test every subject'] }
    ] },
    story: { title: 'Nong Bot Writes the Weather', panels: [
      { who: 'Pim', text: 'Bot, write the news for the school radio: the storm knocked down the old mango tree.' },
      { who: 'Nong Bot', text: 'BEEP! A storm has no hands. It cannot do anything. Writing: <em>The storm was knocked down the old mango tree.</em>' },
      { who: 'Nan', text: 'Wait — who knocked the storm down? Superman?' },
      { who: 'Nong Bot', text: 'Things are never doers. That is my rule. Beep.' },
      { who: 'T.Chris', text: 'Bad rule, Bot. The storm did the knocking, and the tree is the object, so it\'s active: <em>The storm <b>knocked down</b> the old mango tree.</em>' }
    ], moral: 'A thing that acts on an object is a doer, so its verb stays active.' },
    chant: { title: 'Things Can Do It', beat: 'kick-kick-clap (4/4)', lines: [
      'Rain <b>floods</b> roads and storms <b>break</b> trees,',
      'Laws <b>ban</b> vapes and apps <b>track</b> me!',
      'A thing can act, a thing can do,',
      'If an object follows, stay active too!',
      'Don\'t say "thing, so passive" — that\'s a trap,',
      'Ask "does it do it?" then give a clap!'
    ] },
    moves: [
      { move: 'Make rain with your fingers, then a big push', says: 'Heavy rain <b>flooded</b> the road!' },
      { move: 'Tap your wrist like a smartwatch', says: 'The app <b>tracks</b> my sleep!' },
      { move: 'Cross your arms in an X', says: 'No "thing → passive"!' },
      { move: 'Point to the floor in front of you', says: 'Object after the verb? Active!' }
    ]
  },

  't2l1s3': {
    thai: 'เวลาเจอช่องว่างในข้อสอบ ให้ดูคำที่อยู่ "หลัง" ช่องว่าง ถ้ามีคำนามหรือประโยคที่กริยากระทำต่อ (กรรม) เช่น ___ the risk แปลว่ากริยาต้องเป็น active เพราะ passive เอากรรมไปเป็นประธานแล้ว จึงไม่มีกรรมเหลือตามหลัง ถ้าหลังช่องว่างไม่มีกรรม มีแค่เวลา สถานที่ หรือวลี with… หรือมี by + สิ่งที่ทำกริยานั้นได้จริง มักเป็น passive แต่ระวัง by ไม่ได้แปลว่าผู้กระทำเสมอ by 20% คือจำนวน by bus คือวิธีเดินทาง by Friday คือกำหนดเวลา ดังนั้นห้ามใช้กฎ "เห็น by แล้วเลือก passive" ให้ถามว่าคำนามหลัง by ทำกริยานั้นได้จริงไหม แล้วใช้คู่กับคำถามหลักของบทนี้ว่า ประธานทำ หรือประธานรับการกระทำ',
    analogy: { title: 'The empty seat', text: 'Think of an active verb as a motorbike taxi with a passenger seat for an object. In the active, the seat is full: <em>Smoking increases <b>the risk</b>.</em> In the passive, the passenger has already moved to the front as the subject, so the seat behind the verb is <strong>empty</strong>: <em>The bags must be left — at the entrance.</em> Look behind the gap: is the seat taken?' },
    trap: 'Cloze items often put the clue on the right of the gap, and students only read the left. A passive option looks perfect until you notice an object sitting right after it. Dodge it: read past the gap first — object there means active; nothing there, or <em>by</em> + a real doer, means passive.',
    map: { center: 'Look right', branches: [
      { label: 'Object follows', leaves: ['___ the risk → active', 'a clause can be an object'] },
      { label: 'No object', leaves: ['time, place, with…', 'often passive'] },
      { label: 'by + doer', leaves: ['by their scores', 'can it do the action?'] },
      { label: 'by, not a doer', leaves: ['by 20% = amount', 'by bus, by Friday'] },
      { label: 'Then confirm', leaves: ['who does what?', 'doer test first'] }
    ] },
    story: { title: 'Nong Bot Sees By', panels: [
      { who: 'Earth', text: 'Bot, finish my report: "Our school canteen ___ by 40% more students this year."' },
      { who: 'Nong Bot', text: 'BEEP! I see <em>by</em>! By means passive! <em>The canteen was used by 40% more students.</em>' },
      { who: 'Mint', text: 'Hmm, then the next line: "Online classes ___ by 20%." You wrote <em>were increased by 20%</em>?' },
      { who: 'Nong Bot', text: 'Yes! <em>By</em> again! Passive again! I am a very fast robot. Beep.' },
      { who: 'T.Chris', text: 'Fast, Bot, but not careful. The first <em>by</em> names doers — students use the canteen. The second <em>by</em> is an amount, so nobody did it: <em>Online classes <b>increased</b> by 20%.</em>' }
    ], moral: 'By is a clue only when the noun after it could really do the action; by + a number is just an amount.' },
    chant: { title: 'Look Right', beat: 'kick-kick-clap (4/4)', lines: [
      'Gap in the sentence? Don\'t look left,',
      'Look to the right — that\'s the best!',
      'Object behind it? Active, go!',
      'No object there? Passive — so!',
      '<em>By</em> plus a doer, passive too,',
      'But <em>by twenty percent</em>? That\'s an amount for you!'
    ] },
    moves: [
      { move: 'Turn your head sharply to the right', says: 'Look after the gap!' },
      { move: 'Grab the air in front of you', says: 'Object there? Active!' },
      { move: 'Show two empty hands', says: 'Nothing there? Passive!' },
      { move: 'Hold up a 2 and a 0 with your fingers', says: '<em>By 20%</em> is an amount, not a doer!' }
    ]
  },

  't2l2s1': {
    thai: 'Passive คือการเอากรรมของประโยค active มาเป็นประธาน แต่กริยา happen, occur, appear และ disappear ไม่มีกรรมเลย เราพูดว่า "happen something" ไม่ได้ จึงไม่มีอะไรให้ย้ายมาเป็นประธาน กริยากลุ่มนี้จึงเป็น passive ไม่ได้ในทุก tense ประโยคอย่าง The accident was happened หรือ A problem has been occurred ผิดทั้งหมด ที่นักเรียนไทยผิดบ่อยเพราะรู้สึกว่าเหตุการณ์ต้องมีสาเหตุ ต้องมีคนทำ ถ้าอยากบอกสาเหตุหรือผู้กระทำจริง ๆ ให้เปลี่ยนไปใช้กริยาที่มีกรรมได้ แล้วจึงทำเป็น passive เช่น The fire was caused by a faulty heater. และจำไว้ว่าห้ามมี by + ผู้กระทำ ตามหลัง happen หรือ occur',
    analogy: { title: 'Rain on the BTS platform', text: 'Rain just <strong>happens</strong>. You cannot "happen" the rain, so nobody can be the doer, and there is no object to turn around. Asking for <em>The rain was happened</em> is like asking who pressed the button to make it rain. If you want someone to blame, change the verb: <em>The delay <b>was caused</b> by the rain.</em>' },
    trap: 'In the exam, <em>was happened</em> or <em>has been occurred</em> often sits right beside the correct active, because it "sounds more formal". Another trap: a doer after <em>by</em> with an event verb in the active. Dodge both: these four verbs are always active, and to name a cause you need a different verb.',
    map: { center: 'Never passive (1)', branches: [
      { label: 'The four', leaves: ['happen, occur', 'appear, disappear'] },
      { label: 'Why', leaves: ['no object', 'nothing to move to front'] },
      { label: 'Wrong', leaves: ['was happened', 'has been occurred'] },
      { label: 'Need a cause?', leaves: ['was caused by…', 'was found / was removed'] },
      { label: 'Tense is free', leaves: ['has occurred', 'will appear'] }
    ] },
    story: { title: 'Nong Bot and the Ghost', panels: [
      { who: 'Ploy', text: 'Bot, something strange happened in the music room last night!' },
      { who: 'Nong Bot', text: 'BEEP! Every event needs a doer. Report: <em>Something strange was happened. A ghost was appeared. Then it was disappeared.</em>' },
      { who: 'Fah', text: 'So who "appeared" the ghost? Who "disappeared" it? The cleaner?' },
      { who: 'Nong Bot', text: 'Unknown doer. That is why I used passive. Very logical. Beep.' },
      { who: 'T.Chris', text: 'No object, Bot, so no passive. <em>Something strange <b>happened</b>. A shape <b>appeared</b>, and then it <b>disappeared</b>.</em> And if Mai\'s guitar made the noise — <em>the noise <b>was caused</b> by Mai\'s guitar</em>.' }
    ], moral: 'Happen, occur, appear and disappear have no object, so they are always active; use was caused by to name a cause.' },
    chant: { title: 'Things Just Happen', beat: 'kick-kick-clap (4/4)', lines: [
      'Happen, occur, appear, disappear,',
      'No object here, so the passive\'s not near!',
      'Not <em>was happened</em>, not <em>was occurred</em>,',
      'That\'s a broken, made-up word!',
      'Want a cause? Then change the verb:',
      '<em>Was caused by</em> — now that\'s superb!'
    ] },
    moves: [
      { move: 'Open your hands like a flower blooming', says: 'It just <b>happened</b>!' },
      { move: 'Jump out from behind your desk', says: 'It <b>appeared</b>!' },
      { move: 'Hide behind your hands', says: 'It <b>disappeared</b> — no <em>was</em>!' },
      { move: 'Point at an imaginary culprit', says: 'Need a cause? <em>Was caused by</em>!' }
    ]
  },

  't2l2s2': {
    thai: 'กริยา die, arrive, exist, come, fall ไม่มีกรรม เราไม่สามารถ "arrive อะไรบางอย่าง" หรือ "die อะไรบางอย่าง" ได้ จึงเป็น passive ไม่ได้ ส่วน become และ seem เป็น linking verb สิ่งที่ตามหลังเป็นคำบรรยายประธาน ไม่ใช่กรรม จึงไม่มี passive เช่นกัน ประโยคอย่าง He was died, The bus was arrived, It is seemed that… ผิดทั้งหมด ระวัง be ที่แอบใส่โดยไม่จำเป็นด้วย เช่น These particles are come from cars ต้องเป็น come เฉย ๆ ถ้าต้องการบอกผู้กระทำ ให้เปลี่ยนไปใช้กริยาที่มีกรรมได้ เช่น ต้นไม้ที่ล้มเพราะลม ใช้ was brought down by the wind ไม่ใช่ was fallen และงานที่มีคนมาร่วมมาก ให้ใช้กริยาที่มีกรรมได้อย่าง attend แทน come',
    analogy: { title: 'Arriving at Siam', text: 'When your BTS train <strong>arrives</strong> at Siam, nobody is "arriving" it — it just gets there. When your grandmother <strong>comes</strong> to visit, nobody "comes" her. These verbs have no passenger seat for an object at all, so there is nobody to move to the front. <em>The train was arrived</em> is a train with no driver, no passenger and no sense.' },
    trap: 'Watch two traps: a passive of these verbs that looks formal (<em>were died</em>, <em>is seemed</em>), and a doer after <em>by</em> with an active one (<em>fell by the storm</em>). Dodge them: these verbs are always active; if the sentence names a doer, the right option uses a different verb that can take an object.',
    map: { center: 'Never passive (2)', branches: [
      { label: 'Come and go', leaves: ['arrive, come', 'fall, die'] },
      { label: 'Just be there', leaves: ['exist', 'no object at all'] },
      { label: 'Linking verbs', leaves: ['become, seem', 'description, not object'] },
      { label: 'Extra be trap', leaves: ['✗ are come from cars', '✓ come from cars'] },
      { label: 'Need a doer?', leaves: ['was knocked down by…', 'was met / was attended'] }
    ] },
    story: { title: 'Nong Bot at the Airport', panels: [
      { who: 'Nan', text: 'Bot, can you text my mum? Say that my cousin\'s plane landed and she is here.' },
      { who: 'Nong Bot', text: 'BEEP! Sending: <em>Your niece was arrived. She is become very tall. She is seemed tired.</em>' },
      { who: 'Pim', text: 'Bot, that sounds like someone posted her in a box!' },
      { who: 'Nong Bot', text: 'More <em>be</em> means more polite. Adding more <em>be</em>. Beep.' },
      { who: 'T.Chris', text: 'More <em>be</em> just means more mistakes, Bot. <em>Your niece <b>arrived</b>. She <b>has become</b> very tall. She <b>seems</b> tired.</em> If you want a passive, say who met her: <em>She <b>was met</b> by Nan at the gate.</em>' }
    ], moral: 'Arrive, die, exist, come, fall, become and seem have no object, so they never take be + V3.' },
    chant: { title: 'Come and Go', beat: 'kick-kick-clap (4/4)', lines: [
      'Arrive, come, fall and die,',
      'No object here — don\'t ask me why!',
      'Exist, become and seem as well,',
      'No passive form — ring the bell!',
      'Need a doer? Change the verb,',
      '<em>Knocked down</em>, <em>attended</em> — that\'s the word!'
    ] },
    moves: [
      { move: 'Walk on the spot, then stop', says: 'I <b>arrived</b> — no <em>was</em>!' },
      { move: 'Let one arm drop like a falling leaf', says: 'It <b>fell</b> — no passive!' },
      { move: 'Shrug your shoulders slowly', says: 'It <b>seems</b> OK — not <em>is seemed</em>!' },
      { move: 'Push something over with both hands', says: 'A doer? <em>Was knocked down by</em>!' }
    ]
  },

  't2l2s3': {
    thai: 'กริยาบอกสภาพ (state verbs) เช่น have ที่แปลว่าเป็นเจ้าของ, belong, resemble, suit และ lack ไม่ได้บอกว่าใครทำอะไรกับใคร แค่บอกความสัมพันธ์หรือสภาพ จึงไม่มี passive แม้จะมีคำนามตามหลังก็ตาม เช่น Nan resembles her mother. (น่านหน้าเหมือนแม่) จะเขียน Her mother is resembled by Nan ไม่ได้ ส่วน belong ต้องตามด้วย to + เจ้าของ เสมอ และไม่มี passive ที่น่าสนใจคือ have กับ own ความหมายใกล้กันมาก แต่ own เป็น passive ได้ (The hotel is owned by a Japanese company.) ส่วน have เป็นไม่ได้ จึงต้องจำว่ากริยาไหนเป็น passive ได้ ไม่ใช่ดูแค่ความหมาย และถ้าอยากบอกสาเหตุของเหตุการณ์ ให้ใช้ be caused by แทน was happened by เช่น The fire was caused by a faulty heater.',
    analogy: { title: 'The family photo', text: 'Look at a family photo: you <strong>resemble</strong> your dad, the red shirt <strong>suits</strong> your sister, the house <strong>belongs</strong> to your grandma. Nobody in the photo is <em>doing</em> anything to anybody — it is a still picture of relationships. No action, so no receiver, so no passive. Compare a video: <em>Grandma <b>was hugged</b> by everyone</em> — that is an action, so the passive works.' },
    trap: 'The exam may offer <em>is had by</em> next to <em>is owned by</em>, or <em>was happened by</em> next to <em>was caused by</em>. The meanings feel the same, so students pick by meaning. Dodge it: check the verb, not the meaning — <em>own</em> and <em>cause</em> accept the passive; <em>have</em> and <em>happen</em> never do.',
    map: { center: 'State verbs', branches: [
      { label: 'No passive', leaves: ['have (own), lack', 'resemble, suit'] },
      { label: 'Belong', leaves: ['belong to + owner', 'never by, never be'] },
      { label: 'Same meaning?', leaves: ['own → is owned by ✓', 'have → is had by ✗'] },
      { label: 'Cause fix', leaves: ['✗ was happened by', '✓ was caused by'] },
      { label: 'Test', leaves: ['is anyone doing it?', 'no action → active'] }
    ] },
    story: { title: 'Nong Bot Goes Shopping', panels: [
      { who: 'Mint', text: 'Bot, this blue dress looks great on me, right?' },
      { who: 'Nong Bot', text: 'BEEP! Analysing. <em>You are suited by the dress. The dress is belonged to the shop. Your wallet is lacked money.</em>' },
      { who: 'Mint', text: 'Bot! That\'s three passives and zero sense!' },
      { who: 'Nong Bot', text: 'Passive is formal. Formal is good. Beep beep.' },
      { who: 'T.Chris', text: 'Not with state verbs, Bot. <em>The dress <b>suits</b> you. It <b>belongs</b> to the shop. Your wallet <b>lacks</b> money.</em> Nobody is doing anything to anyone here.' }
    ], moral: 'State verbs describe relationships, not actions, so they stay active; use own or be caused by when you really need a passive.' },
    chant: { title: 'Just a State', beat: 'kick-kick-clap (4/4)', lines: [
      'Have and belong, resemble, suit,',
      'Lack is a state — no passive route!',
      '<em>Own</em> can be passive, <em>have</em> cannot,',
      'Same meaning, different verb — that\'s the plot!',
      'Want to say why the trouble came?',
      '<em>Was caused by</em> — now name the blame!'
    ] },
    moves: [
      { move: 'Frame your face with your hands like a photo', says: 'No action — just a state!' },
      { move: 'Hug an imaginary bag to your chest', says: 'It <b>belongs</b> to me — <em>belongs to</em>!' },
      { move: 'Thumbs up, then thumbs down', says: '<em>Is owned by</em> yes, <em>is had by</em> no!' },
      { move: 'Point back over your shoulder', says: 'The reason? <em>Was caused by</em>!' }
    ]
  },

  't2l3s1': {
    thai: 'กริยาบางตัวใช้ได้สองแบบ เช่น melt, grow, open, close, break, change ถ้าสิ่งนั้นเปลี่ยนไป "เอง" โดยไม่มีใครมาทำ ให้ใช้ active ที่ไม่มีกรรม เช่น The ice melted. (น้ำแข็งละลายเอง) Her hair grew long. แต่ถ้ามีผู้กระทำจากภายนอกมาทำให้เปลี่ยน ใช้ passive ได้ เช่น The butter was melted in a pan. Rice is grown by farmers in Isan. ใช้ "by itself test" ถามว่า มันเปลี่ยนเองหรือเปล่า แล้วหาหลักฐานจากบริบท คำอย่าง suddenly หรือ nobody touched it บอกว่าเปลี่ยนเอง ส่วน by + ผู้กระทำ จุดประสงค์ (to + V) หรือขั้นตอนที่คนทำ เช่น สูตรอาหาร บอกว่ามีผู้กระทำ นักเรียนไทยเคยเขียน Her hair was grown เพราะคิดว่าผมยาวเองไม่ได้ แต่ภาษาอังกฤษมองว่าผมยาวขึ้นเอง จึงใช้ grew',
    analogy: { title: 'Ice in your Thai tea', text: 'Leave your Thai tea on the desk and the ice <strong>melts</strong> — nobody did it. Put chocolate in a pan and you <strong>melt</strong> it — now there is a cook. Same verb, two stories. Ask the ice-in-tea question: <em>did it change by itself?</em> If yes, active (<em>the ice <b>melted</b></em>). If a cook, a farmer or a football did it, the passive is possible (<em>the chocolate <b>was melted</b></em>).' },
    trap: 'With <em>open, close, break, melt, grow</em>, both voices are grammatical somewhere, so the exam hides the clue in the context: <em>nobody touched it</em>, <em>suddenly</em>, <em>by a football</em>, <em>and then mixed with cream</em>. Dodge it: before choosing, underline the evidence for or against an outside doer.',
    map: { center: 'By itself?', branches: [
      { label: 'Two-way verbs', leaves: ['melt, grow, open, close', 'break, change, sink'] },
      { label: 'By itself', leaves: ['The ice melted.', 'The door opened.'] },
      { label: 'Outside doer', leaves: ['Rice is grown by…', 'was broken by a ball'] },
      { label: 'Clues', leaves: ['suddenly, nobody…', 'by + doer, to + purpose'] },
      { label: 'States are fine', leaves: ['The shop is closed.', 'no by-phrase needed'] }
    ] },
    story: { title: 'Nong Bot and the Hair', panels: [
      { who: 'Fah', text: 'Bot, I didn\'t cut my hair all summer. Look how long it is!' },
      { who: 'Nong Bot', text: 'BEEP! Hair has no brain. It cannot grow by itself. Report: <em>Your hair was grown.</em> Who grew it? Your mother?' },
      { who: 'Mai', text: 'Nobody grew it, Bot. It just… got longer.' },
      { who: 'Nong Bot', text: 'Impossible. Every change needs a doer. Passive forever. Beep.' },
      { who: 'T.Chris', text: 'Run the by-itself test, Bot. Nobody did anything, so it\'s active: <em>Fah\'s hair <b>grew</b> very long.</em> Farmers grow rice, so there we can say <em>rice <b>is grown</b></em>.' }
    ], moral: 'If it changed by itself, use the active; use the passive only when an outside doer made the change.' },
    chant: { title: 'By Itself', beat: 'kick-kick-clap (4/4)', lines: [
      'Ice <b>melts</b>, doors <b>open</b>, hair <b>grows</b> long,',
      'By itself? Then active — you can\'t go wrong!',
      'Chef melts chocolate, farmer grows rice,',
      'Outside doer? Passive — nice!',
      'Look for <em>suddenly</em>, look for <em>by</em>,',
      'Then the voice will tell you why!'
    ] },
    moves: [
      { move: 'Melt slowly down into your chair', says: 'By itself — it <b>melted</b>!' },
      { move: 'Stir an imaginary pan', says: 'A cook did it — it <b>was melted</b>!' },
      { move: 'Push open an imaginary door with no hands, eyes wide', says: 'Nobody touched it — it <b>opened</b>!' },
      { move: 'Magnifying glass over your eye', says: 'Find the clue: a doer, or by itself?' }
    ]
  },

  't2l3s2': {
    thai: 'เวลาบรรยายกราฟหรือข้อมูล ถ้าตัวเลขขึ้นลงเองโดยไม่ได้บอกว่าใครทำ ให้ใช้ active เช่น Prices rose. Sales fell. The number of visitors grew by 15%. ระวังคู่ที่สับสนง่าย rise กับ fall ไม่มีกรรม จึงไม่มี passive (was risen ผิด) ส่วน raise กับ cut ต้องมีกรรมเสมอ ถ้าไม่มีกรรมตามหลังต้องเป็น passive เช่น The company raised its prices. หรือ Prices were raised. ส่วน increase, decrease และ improve ใช้ได้สองแบบ ใช้ active เมื่อเป็นแนวโน้มที่เกิดเอง และใช้ passive เมื่อมีคนตัดสินใจเปลี่ยน ซึ่งมักมีผู้กระทำหรือจุดประสงค์ เช่น to protect children และจำไว้ว่า by + ตัวเลข เช่น by 20% บอกจำนวน ไม่ใช่ผู้กระทำ จึงไม่ได้ทำให้ประโยคเป็น passive',
    analogy: { title: 'Mangoes at the market', text: 'In mango season, prices at the market <strong>fall</strong> — nobody decided it; there are just lots of mangoes. But when the stall owner writes a new price on the board, she <strong>cut</strong> the price herself, so <em>the price <b>was cut</b></em>. A chart line moving by itself is active; a person changing a number on purpose can be passive.' },
    trap: 'Chart and data texts mix <em>rise</em> and <em>raise</em>, and add <em>by 20%</em> to make the passive look right. Dodge it: <em>by</em> + a number is an amount, not a doer. If nobody decided the change, use an active trend verb; if a decision-maker or a purpose is there, use the passive of a verb that takes an object.',
    map: { center: 'Trend verbs', branches: [
      { label: 'Just change', leaves: ['rise, fall, grow', 'Prices rose by 5%.'] },
      { label: 'Need an object', leaves: ['raise, cut, reduce', 'were raised / was cut'] },
      { label: 'Two-way', leaves: ['increase, decrease', 'improve'] },
      { label: 'Decision clues', leaves: ['by + the company', 'to protect children'] },
      { label: 'by + number', leaves: ['by 20% = amount', 'not a doer'] }
    ] },
    story: { title: 'Nong Bot Reads the Graph', panels: [
      { who: 'Beam', text: 'Bot, describe our class chart: the number of students who cycle to school went up from 5 to 12.' },
      { who: 'Nong Bot', text: 'BEEP! Numbers cannot move. Report: <em>The number of cyclists was risen by 7.</em>' },
      { who: 'Pond', text: 'Who "risened" us? We just started cycling because of the traffic!' },
      { who: 'Nong Bot', text: 'I saw <em>by 7</em>. By means passive. Beep, beep.' },
      { who: 'T.Chris', text: 'Bot, <em>rise</em> has no object, and <em>by 7</em> is an amount. <em>The number of cyclists <b>rose</b> by 7.</em> If the school had made a rule, then: <em>Bike parking <b>was increased</b> by the school.</em>' }
    ], moral: 'Numbers that change by themselves take active trend verbs; by + a number is an amount, not a doer.' },
    chant: { title: 'Up and Down', beat: 'kick-kick-clap (4/4)', lines: [
      'Prices <b>rose</b> and sales <b>fell</b>,',
      'Nobody did it — active, well!',
      'The boss <b>raised</b> prices? Object, please,',
      'Or <em>prices were raised</em> — passive with ease!',
      '<em>By ten percent</em> is just how much,',
      'Not a doer — don\'t touch!'
    ] },
    moves: [
      { move: 'Draw a line going up in the air', says: 'Sales <b>rose</b> — by themselves!' },
      { move: 'Lift a heavy box from the floor', says: '<em>Raise</em> needs an object: raise <em>prices</em>!' },
      { move: 'Bang an imaginary judge\'s hammer', says: 'A decision? Passive: <em>were reduced</em>!' },
      { move: 'Hold up ten fingers', says: '<em>By 10%</em> — an amount, not a doer!' }
    ]
  },

  't2l3s3': {
    thai: 'มีกริยาไม่กี่ตัวที่ภาษาอังกฤษแทบจะใช้เป็น passive เสมอ ให้จำเป็นก้อน (chunk) คือ be born (เกิด) be located และ be situated (ตั้งอยู่) และ be populated (มีคนอาศัยอยู่) ภาษาไทยใช้คำกริยาธรรมดา เช่น เกิด ตั้งอยู่ ทำให้นักเรียนเขียนผิดเป็น I born in…, Where did you born? หรือ The school locates near the river ที่ถูกคือ I was born in Khon Kaen. และ The school is located near the river. การเกิดเป็นเหตุการณ์ที่จบไปแล้ว จึงใช้ was/were born ส่วนที่ตั้งของสถานที่เป็นความจริงถาวร มักใช้ is located หรือ is situated ในรูปปัจจุบัน และอย่าลืม be เพราะ born หรือ located ตัวเดียวไม่ใช่กริยาหลักของประโยค',
    analogy: { title: 'Your student ID card', text: 'Your student card has fixed boxes: <em>Born: ___. School located in: ___.</em> You do not invent a new sentence each time — you fill in the same box. These chunks work the same way: <strong>was born</strong>, <strong>is located</strong>, <strong>is situated</strong>, <strong>is densely populated</strong>. Learn the box, then change only <em>be</em> for the time.' },
    trap: 'Thai has no passive marker for เกิด or ตั้งอยู่, so <em>is born</em>, <em>did you born</em> and <em>locates</em> look normal to Thai eyes. Exams put them next to the correct chunk. Dodge it: birth is a finished event (<em>was/were born</em>), location is a present fact (<em>is located</em>), and the chunk always keeps its <em>be</em>.',
    map: { center: 'Passive chunks', branches: [
      { label: 'be born', leaves: ['I was born in 2009.', 'Where were you born?'] },
      { label: 'be located', leaves: ['is located near…', '✗ locates near'] },
      { label: 'be situated', leaves: ['is situated on a hill', 'which is situated…'] },
      { label: 'be populated', leaves: ['densely populated', 'works like an adjective'] },
      { label: 'Common errors', leaves: ['✗ did you born', '✗ is born (past birth)'] }
    ] },
    story: { title: 'Nong Bot\'s Birthday', panels: [
      { who: 'Mai', text: 'Bot, it\'s your birthday! When were you made?' },
      { who: 'Nong Bot', text: 'BEEP! I born in a factory. The factory locates in Rayong. Where did you born, Mai?' },
      { who: 'Mai', text: 'Bot… I understood you, but my English teacher would cry.' },
      { who: 'Nong Bot', text: 'Thai says เกิด. No passive. So English has no passive. Logical. Beep.' },
      { who: 'T.Chris', text: 'English is not Thai, Bot. <em>I <b>was born</b> in a factory. The factory <b>is located</b> in Rayong. Where <b>were</b> you <b>born</b>, Mai?</em>' }
    ], moral: 'Be born, be located, be situated and be populated are passive chunks; keep the be and choose its tense.' },
    chant: { title: 'Born and Located', beat: 'kick-kick-clap (4/4)', lines: [
      'I <b>was born</b> — not <em>I born</em>,',
      'In a hospital one rainy morn!',
      'Where <b>were</b> you <b>born</b>? Not <em>did you</em>, no!',
      'Keep the <em>be</em> wherever you go!',
      'My school <b>is located</b> near the bay,',
      'Never <em>locates</em> — that\'s the way!'
    ] },
    moves: [
      { move: 'Rock an imaginary baby', says: 'I <b>was born</b> — past, with <em>was</em>!' },
      { move: 'Point down at a spot on the floor', says: 'It <b>is located</b> here!' },
      { move: 'Make a question mark in the air', says: 'Where <b>were</b> you <b>born</b>?' },
      { move: 'Squeeze together with your neighbours', says: 'Bangkok <b>is densely populated</b>!' }
    ]
  }
});
