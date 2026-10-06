/* ===========================================================================
   TEST 2 — m2 · MOCK TEST 2, B2
   Twenty items across all eight stages in the shape of A-Level English Part 3:
   six sentence completions, four error-identification items and two
   five-gap Text Completion passages. Active-correct keys are mixed in.
   =========================================================================== */

var M2_P1 = 'Every year between December and March, a thick grey haze settles over Bangkok. The haze ___(11)___ mainly of PM2.5, particles so small that they can travel deep into the lungs. Most of these particles ___(12)___ by traffic, factories and the burning of crop fields in nearby provinces. Wind usually clears the air within a few days, but when the weather is calm, the particles stay trapped close to the ground.\n\nOn the worst days, PM2.5 levels ___(13)___ to more than three times the safe limit, and many schools cancel outdoor lessons. Doctors advise children and older people to stay indoors and to wear a mask if they have to go out. The problem is not new: air-quality warnings ___(14)___ by the city every dry season since 2015, yet many residents feel that little has changed. Experts warn that until the main sources of pollution ___(15)___, the “smog season” will keep returning year after year.';

var M2_P2 = 'Songkran, the Thai New Year festival, ___(16)___ in the middle of April, at the hottest time of the year. For many visitors it is simply the world\'s biggest water fight, but the festival has much deeper roots. Water ___(17)___ a symbol of cleansing and renewal, and many families still pour scented water over the hands of their elders to ask for their blessing.\n\nIn 2023, Songkran was added to UNESCO\'s list of the Intangible Cultural Heritage of Humanity, a decision ___(18)___ by many Thais as recognition of a living tradition. The festival has a darker side, however. The days around Songkran ___(19)___ to be among the most dangerous of the year on Thai roads, as millions of people drive home to their provinces. Every April, the authorities remind drivers to ___(20)___ by a mechanic before they set off, and to take a break every two hours on long journeys.';

MOCKS.push({
  id: 'm2',
  name: 'Mock Test 2 · B2',
  blurb: 'Twenty questions at B2 in the shape of A-Level English Part 3: sentence completion, error identification and two text-completion passages. Every stage is covered. Seventy per cent means the core of the passive is secure.',
  minutes: 25,
  total: 20,
  sections: [

    /* ---------------------------------------- PART A: SENTENCE COMPLETION */
    {
      code: 'A',
      part: 'PART A: SENTENCE COMPLETION',
      title: 'Choose the correct form',
      instructions: 'Choose the option that best completes each sentence. Only one option is correct in the context given.',
      points: 1,
      items: [
        { id: 'm2-1', type: 'choose', tag: 's1-agree', level: 'B1+',
          stem: 'A list of the students chosen for the exchange programme to Japan ______ on the school website yesterday.',
          options: [
            'were posted',
            'was posting',
            'was posted',
            'posted'
          ],
          answer: 2, near: 0,
          fb: [
            'The verb has been made to agree with <em>students</em>, but that noun is not the head of the subject.',
            '<em>Be</em> + V-ing is active: the list would be doing the posting.',
            'Yes — a singular head noun and a past passive.',
            'With no <em>be</em>, this is an active past verb, and a list cannot post anything.'
          ],
          hint: 'Find the head noun of the long subject, make <em>be</em> agree with it, and ask whether the subject does the action.',
          why: 'The head of the subject is <em>A list</em>, which is singular; everything after it just describes the list. So the verb is <em>was posted</em>. <em>Were posted</em> is the near miss: it agrees with <em>students</em>, the noun nearest the gap. <em>Was posting</em> and <em>posted</em> are active and would make the list the poster.' },

        { id: 'm2-2', type: 'choose', tag: 's2-state', level: 'B2',
          stem: 'The teak house on the corner of our soi ______ to the same family for more than a century.',
          options: [
            'has belonged',
            'has been belonged',
            'is belonged',
            'has been belonging'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — an active state verb, continuing up to now.',
            '<em>Belong</em> has no object, so there is nothing to turn into a passive subject.',
            'This passivises a verb that cannot take an object, and <em>for more than a century</em> needs a perfect form.',
            '<em>Belong</em> describes a state, and state verbs do not normally take continuous forms.'
          ],
          hint: 'Some state verbs never take an object and so never go into the passive; then let <em>for</em> + a period of time choose the tense.',
          why: '<em>Belong</em> is a state verb with no object, so it is always active, and <em>for more than a century</em> needs the present perfect: <em>has belonged</em>. <em>Has been belonged</em> is the near miss: the tense is right, but it forces a verb with no object into the passive. <em>Is belonged</em> has the same voice error plus the wrong tense, and <em>has been belonging</em> puts a state verb into a continuous form.' },

        { id: 'm2-3', type: 'choose', tag: 's3-modal', level: 'B2',
          stem: 'Mobile phones ______ in the exam hall; any phone that is found will be kept in the office until the end of the day.',
          options: [
            'must not use',
            'must not been used',
            'must not to be used',
            'must not be used'
          ],
          answer: 3, near: 0,
          fb: [
            'This is active, so the phones become the users, and <em>use</em> would need an object.',
            'After a modal, the passive needs <em>be</em>, not <em>been</em>.',
            'A modal is never followed by <em>to</em>.',
            'Yes — modal + <em>be</em> + V3.'
          ],
          hint: 'A modal passive is built as modal + <em>be</em> + past participle; ask whether the phones use something or are used.',
          why: 'The phones are used by students, so we need a modal passive: <em>must not be used</em>. <em>Must not use</em> is the near miss: right modal, but active, as if the phones were the users. <em>Must not been used</em> puts <em>been</em> where only <em>be</em> can follow a modal, and <em>must not to be used</em> adds a <em>to</em> that modals never take.' },

        { id: 'm2-4', type: 'choose', tag: 's4-gerund', level: 'B2',
          stem: 'Like most teenagers, Earth can\'t stand ______ how to spend his free time.',
          options: [
            'telling',
            'being told',
            'been told',
            'to be telling'
          ],
          answer: 1, near: 0,
          fb: [
            'This is active: Earth would be the one giving the orders, and <em>tell</em> would need a person after it.',
            'Yes — a passive gerund: Earth receives the action.',
            '<em>Been</em> cannot stand alone after <em>can\'t stand</em>; it needs a perfect auxiliary in front of it.',
            'This is an active continuous infinitive, so Earth would be doing the telling.'
          ],
          hint: 'Ask whether Earth gives the instructions or receives them, and check which forms can follow <em>can\'t stand</em>.',
          why: 'Other people tell Earth what to do, so he receives the action and we need the passive gerund: <em>being told</em>. <em>Telling</em> is the near miss: right pattern, wrong voice, and <em>tell</em> would then need a person as its object. <em>Been told</em> has no auxiliary to support it, and <em>to be telling</em> is active, again making Earth the teller.' },

        { id: 'm2-5', type: 'choose', tag: 's5-thing', level: 'B2',
          stem: 'At the end of the ceremony, a special prize ______ the student with the most creative science project.',
          options: [
            'was awarded to',
            'was awarded',
            'awarded to',
            'was awarded by'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — the thing as subject, and the person after <em>to</em>.',
            'When the thing is the subject, the person who receives it still needs a preposition in front.',
            'Without <em>be</em>, the sentence has no finite passive verb; read as a main verb, this makes the prize the one doing the awarding.',
            '<em>By</em> introduces the doer, but the student received the prize; the student did not award it.'
          ],
          hint: 'With two-object verbs, if the thing becomes the subject, think about how the person who receives it is introduced.',
          why: 'The prize is the subject, so the person who receives it is introduced with <em>to</em>: <em>was awarded to the student</em>. <em>Was awarded</em> is the near miss: the passive is right, but without <em>to</em> the student has no grammatical link to the verb. <em>Awarded to</em> has no <em>be</em>, and <em>was awarded by</em> turns the winner into the judge.' },

        { id: 'm2-6', type: 'choose', tag: 's7-experience', level: 'B2',
          stem: 'On her first night in Paris, Fah ______ while she was waiting for the metro.',
          options: [
            'had stolen her wallet',
            'had her wallet steal',
            'was stolen her wallet',
            'had her wallet stolen'
          ],
          answer: 3, near: 0,
          fb: [
            'This word order is the past perfect: it says Fah herself stole the wallet.',
            'A base form after the object would make the wallet the thief.',
            'A person cannot be the subject of <em>steal</em> in the passive; only the thing taken can be.',
            'Yes — <em>have</em> + object + V3 for something bad done to you.'
          ],
          hint: 'The <em>have</em> + object pattern can describe something unpleasant that someone else did to you; check the word order and the verb form.',
          why: 'Someone else stole the wallet and Fah suffered the result, so the causative <em>have</em> + object + V3 is used: <em>had her wallet stolen</em>. <em>Had stolen her wallet</em> is the near miss: the same words in a different order become the past perfect, and then Fah is the thief. <em>Had her wallet steal</em> uses a base form, and <em>was stolen her wallet</em> makes Fah the thing stolen.' }
      ]
    },

    /* ---------------------------------------- PART B: ERROR IDENTIFICATION */
    {
      code: 'B',
      part: 'PART B: ERROR IDENTIFICATION',
      title: 'Find the mistake',
      instructions: 'Each sentence is divided into four parts. Exactly one part contains an error. Choose it.',
      points: 1,
      items: [
        { id: 'm2-7', type: 'spot', tag: 's3-presperf', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Since the start of term,', 'more than two hundred trees have planted', 'around the school grounds', 'by M5 volunteers.'],
          answer: 1,
          fix: 'more than two hundred trees have been planted',
          hint: 'Ask whether the trees did the planting, then check that the perfect form contains everything a passive needs.',
          why: 'The trees were planted by the volunteers, so the present perfect passive needs <em>been</em>: <em>have been planted</em>. Without <em>been</em>, <em>have planted</em> is active and says the trees did the planting. <em>By M5 volunteers</em> is a correct agent, because the volunteers are new, important information.' },

        { id: 'm2-8', type: 'spot', tag: 's6-twofinite', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The Grand Palace, which built in 1782,', 'is visited by', 'millions of tourists', 'every year.'],
          answer: 0,
          fix: 'The Grand Palace, which was built in 1782,',
          hint: 'A relative clause needs its own finite verb; ask whether the palace did the building or had it done to it.',
          why: 'The palace was built by others, so the relative clause needs a finite passive: <em>which was built in 1782</em>. <em>Which built</em> is active and says the palace built something. <em>Is visited by millions of tourists</em> is a correct passive with an agent that carries real information.' },

        { id: 'm2-9', type: 'spot', tag: 's5-with', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The traditional house', 'at the back of the museum', 'is made entirely by teak', 'and contains no nails at all.'],
          answer: 2,
          fix: 'is made entirely of teak',
          hint: 'After <em>made</em>, ask whether the noun that follows is the person who made it or the material it is made from.',
          why: 'Teak is the material, not a maker, so the preposition is <em>of</em>: <em>is made entirely of teak</em>. <em>By</em> introduces a doer, such as the craftsmen who built the house. The other parts are correct.' },

        { id: 'm2-10', type: 'spot', tag: 's7-havesb', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['When the air conditioners broke down,', 'the school had', 'a technician', 'to check all the units.'],
          answer: 3,
          fix: 'check all the units.',
          hint: 'When <em>have</em> is followed by the person who does a job, check whether the next verb takes <em>to</em>.',
          why: '<em>Have</em> + person + base form: <em>the school had a technician check all the units</em>. Unlike <em>get</em> (<em>got a technician to check them</em>), <em>have</em> never takes <em>to</em> in this pattern. The other parts are correct.' }
      ]
    },

    /* ---------------------------------------- PART C: TEXT COMPLETION 1 */
    {
      code: 'C',
      part: 'PART C: TEXT COMPLETION 1',
      title: 'Bangkok\'s smog season',
      instructions: 'Read the passage and choose the best option for each numbered gap (11 to 15).',
      points: 1,
      items: [
        { id: 'm2-11', type: 'cloze', tag: 's2-state', level: 'B2',
          passage: M2_P1,
          blank: '(11)',
          stem: 'Choose the best option for gap (11).',
          options: [
            'is consisted',
            'consists',
            'is consisting',
            'consisting'
          ],
          answer: 1, near: 0,
          fb: [
            '<em>Consist of</em> has no object to promote, so it cannot be passive.',
            'Yes — an active state verb.',
            '<em>Consist</em> describes a state, which is not normally used in a continuous form.',
            'An -ing form cannot be the main verb; this sentence still needs a finite verb.'
          ],
          hint: 'Some verbs that describe what something is made up of are always active; check also that the sentence has a finite verb.',
          why: '<em>Consist of</em> describes a state and never takes an object, so it stays active: <em>The haze consists mainly of PM2.5</em>. <em>Is consisted</em> is the near miss: it treats the haze as receiving an action. <em>Is consisting</em> puts a state verb into the continuous, and <em>consisting</em> leaves the sentence with no main verb.' },

        { id: 'm2-12', type: 'cloze', tag: 's2-follows', level: 'B2',
          passage: M2_P1,
          blank: '(12)',
          stem: 'Choose the best option for gap (12).',
          options: [
            'produce',
            'are producing',
            'are produced',
            'produced'
          ],
          answer: 2, near: 0,
          fb: [
            'Active <em>produce</em> would make the particles the producers and needs an object; look at what follows the gap.',
            '<em>Be</em> + V-ing is active: the particles would be doing the producing.',
            'Yes — the doers follow after <em>by</em>, so the passive is needed.',
            'On its own, this V3 cannot be the main verb of the sentence.'
          ],
          hint: 'Look at what comes straight after the gap: does an object follow, or a <em>by</em>-phrase naming the doer?',
          why: 'The doers (traffic, factories, burning) follow <em>by</em>, and the particles receive the action, so the passive <em>are produced</em> is right. <em>Produce</em> is the near miss: right tense, wrong voice, and active <em>produce</em> would need an object, not a <em>by</em>-phrase. <em>Are producing</em> is active continuous, and <em>produced</em> alone gives the sentence no finite verb.' },

        { id: 'm2-13', type: 'cloze', tag: 's2-trend', level: 'B2',
          passage: M2_P1,
          blank: '(13)',
          stem: 'Choose the best option for gap (13).',
          options: [
            'rise',
            'are risen',
            'are raised',
            'raise'
          ],
          answer: 0, near: 2,
          fb: [
            'Yes — a trend described with an active verb.',
            'This verb never takes an object, so it has no passive form.',
            'This passive presents the levels as pushed up by an outside doer; ask whether the change is reported as something that simply happens.',
            '<em>Raise</em> needs an object (you raise something), and nothing follows the gap except <em>to</em> + an amount.'
          ],
          hint: 'For trends in data, ask whether the numbers change by themselves or whether someone changes them, and whether the verb needs an object.',
          why: 'Data trends are normally described actively: levels <em>rise</em>, prices fall. <em>Rise</em> has no object and no passive, so <em>are risen</em> is impossible. <em>Are raised</em> is the near miss: it is a real passive, but it presents the change as an action done to the levels by an outside doer, which is not how data trends are reported. <em>Raise</em> needs an object, and there is none after the gap.' },

        { id: 'm2-14', type: 'cloze', tag: 's3-markers', level: 'B2',
          passage: M2_P1,
          blank: '(14)',
          stem: 'Choose the best option for gap (14).',
          options: [
            'have issued',
            'were issued',
            'are being issued',
            'have been issued'
          ],
          answer: 3, near: 0,
          fb: [
            'Without <em>been</em> this is active: the warnings would be doing the issuing.',
            '<em>Since</em> + a past year links the past to now, which a past simple cannot do.',
            'This describes only what is happening right now, but <em>since 2015</em> needs a form that reaches from then to now.',
            'Yes — <em>since</em> + present perfect, and the warnings receive the action.'
          ],
          hint: 'Let <em>since</em> + a point in time choose the tense, then check that the passive form is complete.',
          why: '<em>Since 2015</em> needs the present perfect, and the warnings are issued by the city, so the verb is the present perfect passive <em>have been issued</em>. <em>Have issued</em> is the near miss: right tense, but missing <em>been</em>, which makes it active. <em>Were issued</em> cuts the link to the present, and <em>are being issued</em> describes only the present moment.' },

        { id: 'm2-15', type: 'cloze', tag: 's3-future', level: 'B2',
          passage: M2_P1,
          blank: '(15)',
          stem: 'Choose the best option for gap (15).',
          options: [
            'will be controlled',
            'are controlled',
            'are controlling',
            'controlled'
          ],
          answer: 1, near: 0,
          fb: [
            'After time words like <em>until</em>, <em>when</em> and <em>before</em>, English uses a present form for the future, not <em>will</em>.',
            'Yes — a present passive with future meaning after <em>until</em>.',
            'This is active: the sources of pollution would be controlling something.',
            'A V3 alone cannot be the verb of the <em>until</em>-clause.'
          ],
          hint: 'In a time clause about the future, think about which tense English uses after the time word, then check the voice.',
          why: 'In a time clause beginning with <em>until</em>, English uses a present form for a future event, and the sources are controlled by the authorities, so the verb is <em>are controlled</em>. <em>Will be controlled</em> is the near miss: right voice and meaning, but <em>will</em> is not used after <em>until</em>. <em>Are controlling</em> is active, and <em>controlled</em> has no <em>be</em>.' }
      ]
    },

    /* ---------------------------------------- PART D: TEXT COMPLETION 2 */
    {
      code: 'D',
      part: 'PART D: TEXT COMPLETION 2',
      title: 'Songkran',
      instructions: 'Read the passage and choose the best option for each numbered gap (16 to 20).',
      points: 1,
      items: [
        { id: 'm2-16', type: 'cloze', tag: 's2-arrive', level: 'B1+',
          passage: M2_P2,
          blank: '(16)',
          stem: 'Choose the best option for gap (16).',
          options: [
            'is fallen',
            'falling',
            'falls',
            'was fallen'
          ],
          answer: 2, near: 0,
          fb: [
            '<em>Fall</em> has no object, so it cannot be made passive.',
            'An -ing form cannot be the main verb; the sentence needs a finite verb.',
            'Yes — an active verb with no object, in the present simple for a yearly event.',
            'This passivises a verb with no object, and a fact about every year needs the present.'
          ],
          hint: 'Some verbs that say when or where something happens can never take an object, so they have no passive.',
          why: 'A festival <em>falls</em> on a date: <em>fall</em> never takes an object, so it is always active, and the present simple suits an event that happens every year. <em>Is fallen</em> is the near miss: it follows the false idea that a thing as subject needs the passive. <em>Falling</em> is not a finite verb, and <em>was fallen</em> repeats the voice error in the past.' },

        { id: 'm2-17', type: 'cloze', tag: 's5-as', level: 'B2',
          passage: M2_P2,
          blank: '(17)',
          stem: 'Choose the best option for gap (17).',
          options: [
            'is seen like',
            'is seen by',
            'sees as',
            'is seen as'
          ],
          answer: 3, near: 0,
          fb: [
            '<em>Like</em> compares; after <em>seen</em>, a role or category is introduced with a different word.',
            '<em>By</em> introduces the doer, but <em>a symbol</em> does not do any seeing.',
            'This is active: water would be the one doing the seeing.',
            'Yes — a role after the passive.'
          ],
          hint: 'After <em>seen</em>, <em>known</em> or <em>regarded</em>, ask whether the noun that follows is a doer or a role.',
          why: 'People see water as a symbol, so in the passive the role follows <em>as</em>: <em>Water is seen as a symbol of cleansing</em>. <em>Is seen by</em> is the classic trap (this pattern appeared in A-Level 2568), because <em>by</em> would make a symbol the viewer. <em>Is seen like</em> is the near miss: close in meaning, but the wrong word after <em>seen</em>. <em>Sees as</em> makes water the viewer.' },

        { id: 'm2-18', type: 'cloze', tag: 's6-reduced', level: 'B2+',
          passage: M2_P2,
          blank: '(18)',
          stem: 'Choose the best option for gap (18).',
          options: [
            'welcomed',
            'welcoming',
            'was welcomed',
            'which welcomed'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — a reduced passive clause after a noun.',
            'An -ing form after a noun gives it an active meaning, but the decision did not welcome anything.',
            'The sentence already has its main verb (<em>was added</em>); a second finite verb breaks it.',
            'This active relative clause makes the decision the one doing the welcoming.'
          ],
          hint: 'After a noun, a V3 phrase can replace a whole passive relative clause; check whether the sentence already has its finite verb.',
          why: '<em>A decision welcomed by many Thais</em> is a reduced form of <em>a decision which was welcomed by many Thais</em>: the decision receives the action, and the sentence already has its verb. <em>Welcoming</em> is the near miss: right shape, active meaning. <em>Was welcomed</em> adds a second finite verb, and <em>which welcomed</em> makes the decision the welcomer.' },

        { id: 'm2-19', type: 'cloze', tag: 's8-saidto', level: 'B2',
          passage: M2_P2,
          blank: '(19)',
          stem: 'Choose the best option for gap (19).',
          options: [
            'are considering',
            'it is considered',
            'are considered',
            'consider'
          ],
          answer: 2, near: 0,
          fb: [
            '<em>Be</em> + V-ing is active: the days would be doing the considering.',
            'The sentence already has a subject; an empty <em>it</em> cannot be added after it.',
            'Yes — subject + passive reporting verb + <em>to</em>-infinitive.',
            'This active verb makes the days the thinkers.'
          ],
          hint: 'Reporting verbs such as <em>say</em>, <em>believe</em> and <em>think</em> can be passive with the topic as subject, followed by a <em>to</em>-infinitive.',
          why: 'People consider these days dangerous, and the topic is the subject, so the reporting passive is <em>are considered to be</em>. <em>Are considering</em> is the near miss: same verb and auxiliary, but active, so the days become the thinkers. <em>It is considered</em> cannot follow a subject that is already there, and <em>consider</em> is active.' },

        { id: 'm2-20', type: 'cloze', tag: 's7-service', level: 'B2',
          passage: M2_P2,
          blank: '(20)',
          stem: 'Choose the best option for gap (20).',
          options: [
            'have their brakes check',
            'have their brakes checked',
            'have their brakes to check',
            'have their brakes checking'
          ],
          answer: 1, near: 0,
          fb: [
            'A base form after the object would mean the brakes do the checking.',
            'Yes — <em>have</em> + object + V3 for a service.',
            'This pattern never has <em>to</em> between the object and the verb.',
            'An -ing form after the object describes something the object is doing, not a job done for you.'
          ],
          hint: 'When a professional does a job for you, think about the order of <em>have</em>, the object and the verb, and which form follows the object.',
          why: 'The mechanic does the checking, so the causative <em>have</em> + object + V3 is used: <em>have their brakes checked by a mechanic</em>. <em>Have their brakes check</em> is the near miss: right order, but a base form. <em>Have their brakes to check</em> adds the <em>to</em> that appeared as a trap in A-Level 2568, and <em>have their brakes checking</em> makes the brakes the doers.' }
      ]
    }
  ]
});
