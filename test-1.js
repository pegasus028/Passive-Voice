/* ===========================================================================
   TEST 1 — m1 · THE TRIAGE
   Twenty-four items, Parts A–H, one Part per stage. Within each Part the three
   items test the three levels of that stage, one module tag each, so every
   miss routes the student to the exact module that fixes it.
   MOCKS[0] is the diagnostic: each item is a clean single-point test.
   =========================================================================== */

var M1_P1 = 'Many Bangkok schools now run “green canteens”, where food waste is sorted and recycled. Each canteen has a drinking-water dispenser with a filter that ___(16)___ every three months, and most of the cooks ___(17)___ in them have completed a food-safety course.\n\nThe rules on leftovers are strict. Cooked rice can make students ill ___(18)___, so the canteens throw it away at the end of each day instead of keeping it overnight.';

MOCKS.push({
  id: 'm1',
  name: 'Triage Test',
  blurb: 'Twenty-four questions, three from each of the eight stages. It is not a grade, it is a map: every question you miss points to the exact module that will fix it.',
  minutes: 30,
  total: 24,
  sections: [

    /* ---------------------------------------- PART A: THE SWITCH */
    {
      code: 'A',
      part: 'PART A: THE SWITCH',
      title: 'Building the passive, and why we use it',
      instructions: 'Three questions on the form of the passive, on when to leave out the doer, and on spotting a broken passive. Answer every one; a wrong guess still tells the app where to send you.',
      points: 1,
      items: [
        { id: 'm1-1', type: 'choose', tag: 's1-v3', level: 'B1',
          stem: 'Ton\'s new bicycle ______ from outside the school library on Monday afternoon.',
          options: [
            'was stole',
            'was stolen',
            'was stealed',
            'was stealing'
          ],
          answer: 1, near: 0,
          fb: [
            '<em>Stole</em> is the past simple (V2). After <em>be</em>, the passive needs the past participle (V3), which is a different form for this verb.',
            'Yes — <em>be</em> + the irregular past participle.',
            '<em>Steal</em> is irregular; adding <em>-ed</em> makes a form that does not exist.',
            '<em>Be</em> + V-ing is the active past continuous: it would make the bicycle the thief.'
          ],
          hint: 'A passive is <em>be</em> + the past participle (V3), and many common verbs have an irregular V3 that is different from their past simple.',
          why: '<em>Was stolen</em> is <em>be</em> + V3: steal – stole – stolen. <em>Was stole</em> is the near miss: it puts the past simple after <em>be</em>. <em>Was stealed</em> treats an irregular verb as regular, and <em>was stealing</em> is active, so the bicycle would be doing the stealing.' },

        { id: 'm1-2', type: 'equiv', tag: 's1-noagent', level: 'B1',
          given: 'Someone cleans the science labs every evening after school.',
          stem: 'Which sentence is the best passive version?',
          options: [
            'The science labs are cleaned every evening after school.',
            'The science labs are cleaned by someone every evening after school.',
            'The science labs were cleaned every evening after school.',
            'The science labs are clean every evening after school.'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — same tense, and the unknown doer simply disappears.',
            'The doer is unknown, and <em>by someone</em> adds no information; a vague agent like this is left out.',
            'The original describes a habit in the present; changing <em>be</em> to the past changes the meaning.',
            '<em>Clean</em> here is an adjective, so the sentence describes how the labs look, not the action of cleaning.'
          ],
          hint: 'When the doer is unknown or unimportant, ask whether the passive needs to mention them at all, and keep the tense of the original.',
          why: '<em>Are cleaned</em> keeps the present simple of <em>cleans</em>, and the passive lets us drop the unknown doer. The version with <em>by someone</em> is the near miss: it is grammatical, but a vague agent is exactly what the passive allows you to leave out. <em>Were cleaned</em> moves a present habit into the past, and <em>are clean</em> uses an adjective, so it describes a state, not the cleaning.' },

        { id: 'm1-3', type: 'spot', tag: 's1-agree', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The results of the speaking test', 'for all three M5 classes', 'was posted on the noticeboard', 'outside the staff room this morning.'],
          answer: 2,
          fix: 'were posted on the noticeboard',
          hint: 'Find the real subject of the sentence (its head noun, not the nearest noun) and make <em>be</em> agree with it.',
          why: 'The head of the subject is <em>results</em>, which is plural, so the verb must be <em>were posted</em>. The words in between (<em>of the speaking test for all three M5 classes</em>) only describe the results and do not decide the verb. The other three parts are correct.' }
      ]
    },

    /* ---------------------------------------- PART B: DOER OR RECEIVER? */
    {
      code: 'B',
      part: 'PART B: DOER OR RECEIVER?',
      title: 'The Decision Test',
      instructions: 'Three questions on choosing between active and passive. Remember that the active is sometimes the right answer.',
      points: 1,
      items: [
        { id: 'm1-4', type: 'choose', tag: 's2-thingdoer', level: 'B2',
          stem: 'The new air-quality app ______ users when PM2.5 levels in their district become dangerous.',
          options: [
            'is warned',
            'warn',
            'warns',
            'warning'
          ],
          answer: 2, near: 0,
          fb: [
            'This makes the app the receiver, but the app sends the warning, and <em>users</em> after the gap would have no job.',
            'The subject <em>app</em> is singular, so a present simple verb needs <em>-s</em>.',
            'Yes — a thing can be a doer, and an object follows.',
            'An -ing form alone cannot be the main verb; the sentence still needs a finite verb.'
          ],
          hint: 'Ask whether the subject does the action or receives it (a machine or an app can be a doer), and look at what comes straight after the gap.',
          why: 'The app does the warning and <em>users</em> is its object, so the active <em>warns</em> is right. <em>Is warned</em> is the near miss: it follows the false rule "a thing as subject means passive" and leaves <em>users</em> without a role. <em>Warn</em> does not agree with the singular subject, and <em>warning</em> is not a finite verb.' },

        { id: 'm1-5', type: 'spot', tag: 's2-happen', level: 'B1+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Two days after the storm,', 'a large crack was appeared', 'in the wall of the old library,', 'so the building was closed.'],
          answer: 1,
          fix: 'a large crack appeared',
          hint: 'Some verbs have no object, so there is nothing to move into subject position; they cannot be made passive.',
          why: '<em>Appear</em> has no object (nobody "appears" a crack), so it has no passive: <em>a large crack appeared</em>. <em>The building was closed</em> is a correct passive, because someone closed the building. The other parts contain no verb error.' },

        { id: 'm1-6', type: 'choose', tag: 's2-twoway', level: 'B2',
          stem: 'The ice sculptures at the hotel entrance looked wonderful at breakfast, but by lunchtime they ______ in the heat.',
          options: [
            'had been melted',
            'have melted',
            'had melting',
            'had melted'
          ],
          answer: 3, near: 0,
          fb: [
            'This says someone or something melted them on purpose; ask whether the change could happen by itself.',
            'The story is told in the past (<em>looked</em>), so a present perfect does not fit <em>by lunchtime</em>.',
            '<em>Had</em> must be followed by a past participle, not an -ing form.',
            'Yes — ice melts by itself, so the verb is active.'
          ],
          hint: 'Some verbs describe a change that can happen by itself; ask whether anyone outside caused it, then check the time.',
          why: 'Nobody melted the sculptures; the change happened by itself as the day got hotter, so <em>melt</em> is active, and the past perfect fits <em>by lunchtime</em>: <em>had melted</em>. <em>Had been melted</em> is the near miss: right tense, but it treats the change as something done by an outside doer. <em>Have melted</em> clashes with the past story, and <em>had melting</em> is not a verb form.' }
      ]
    },

    /* ---------------------------------------- PART C: TIME MACHINE */
    {
      code: 'C',
      part: 'PART C: TIME MACHINE',
      title: 'Tenses and modals in the passive',
      instructions: 'Three questions on choosing the right tense or modal form. Let the time words guide you.',
      points: 1,
      items: [
        { id: 'm1-7', type: 'choose', tag: 's3-prescont', level: 'B1+',
          stem: 'Sorry, the school pool is closed this week because it ______.',
          options: [
            'is being repainted',
            'is repainting',
            'was being repainted',
            'has repainted'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — work in progress now, done to the pool.',
            '<em>Be</em> + V-ing on its own is active: it would mean the pool is doing the painting.',
            'The work is happening now (<em>is closed this week</em>), so a past form does not fit.',
            'Without <em>been</em> this is active: the pool would have repainted something.'
          ],
          hint: 'Ask who is doing the painting, and choose a form that shows an action in progress at the moment of speaking.',
          why: 'The pool is closed now because painters are working on it, so we need the present continuous passive: <em>is being repainted</em>. <em>Is repainting</em> is the near miss: right tense, but active, so the pool becomes the painter. <em>Was being repainted</em> puts the work in the past, and <em>has repainted</em> has lost <em>been</em>, which makes it active.' },

        { id: 'm1-8', type: 'choose', tag: 's3-markers', level: 'B2',
          stem: 'By the time the firefighters arrived, the fire ______ to the shops next door.',
          options: [
            'had been spread',
            'has spread',
            'had spread',
            'was spread'
          ],
          answer: 2, near: 0,
          fb: [
            'This makes the fire a receiver, but nothing spread the fire; it moved by itself.',
            '<em>By the time</em> + a past verb points to a time before a past moment, so a present perfect does not fit.',
            'Yes — earlier than a past moment, and the fire does the spreading.',
            'This is passive, so it says someone spread the fire, and it misses the "before then" meaning of <em>by the time</em>.'
          ],
          hint: 'Let the time marker choose the tense, and ask whether the fire does the action itself or has it done to it.',
          why: '<em>By the time the firefighters arrived</em> sets a past moment, and the spreading happened before it, so the past perfect is needed; the fire spreads by itself, so the verb is active: <em>had spread</em>. <em>Had been spread</em> is the near miss: right tense, wrong voice. <em>Has spread</em> uses a present perfect after a past time marker, and <em>was spread</em> is both passive and the wrong tense.' },

        { id: 'm1-9', type: 'choose', tag: 's3-modalperf', level: 'B2',
          stem: 'The flooding in the underpass ______ if the drains had been cleared before the rainy season.',
          options: [
            'could be prevented',
            'could have been prevented',
            'could have prevented',
            'could have been preventing'
          ],
          answer: 1, near: 0,
          fb: [
            'This talks about now or the future, but the <em>if</em>-clause is about a past chance that was missed.',
            'Yes — a missed chance in the past, and the flooding receives the action.',
            'Without <em>been</em> this is active: the flooding would be the one doing the preventing.',
            'This is an active continuous form, and the flooding cannot prevent anything.'
          ],
          hint: 'A past possibility that did not happen needs a perfect modal; then decide whether the subject does the action or receives it.',
          why: 'The <em>if</em>-clause (<em>had been cleared</em>) imagines a different past, so the result needs a perfect modal, and the flooding is something people prevent, so it is passive: <em>could have been prevented</em>. <em>Could be prevented</em> is the near miss: right voice, wrong time. <em>Could have prevented</em> drops <em>been</em> and makes the flooding the doer, and <em>could have been preventing</em> is active continuous.' }
      ]
    },

    /* ---------------------------------------- PART D: BEYOND THE FINITE VERB */
    {
      code: 'D',
      part: 'PART D: BEYOND THE FINITE VERB',
      title: 'Passive infinitives and gerunds',
      instructions: 'Three questions on passive forms after other verbs, after prepositions and in perfect forms. One of them is a short conversation.',
      points: 1,
      items: [
        { id: 'm1-10', type: 'gap', tag: 's4-verbinf', level: 'B2',
          lines: [
            { who: 'Situation', text: 'Mint is asking T.Chris about the essay deadline.' },
            { who: 'Mint', text: 'T.Chris, could I give you my essay on Monday instead of Friday?' },
            { who: 'T.Chris', text: 'Sorry, Mint. All essays are expected ___(10)___ by Friday, so that we can mark them over the weekend.' }
          ],
          blank: '(10)',
          stem: 'Choose the best option for gap (10).',
          options: [
            'to hand in',
            'being handed in',
            'to be hand in',
            'to be handed in'
          ],
          answer: 3, near: 0,
          fb: [
            'The essays do not hand anything in; students hand them in, so the infinitive must show that the essays receive the action.',
            '<em>Be expected</em> is followed by a <em>to</em>-infinitive, not an -ing form.',
            'After <em>to be</em>, the passive needs the past participle, not the base form.',
            'Yes — <em>be expected</em> + a passive infinitive.'
          ],
          hint: 'After <em>be expected</em>, use a <em>to</em>-infinitive, and ask whether the essays do the action or receive it.',
          why: 'The pattern is <em>be expected to</em> + infinitive, and the essays are handed in by students, so the infinitive is passive: <em>to be handed in</em>. <em>To hand in</em> is the near miss: right pattern, but active, so the essays become the ones handing something in. <em>Being handed in</em> uses the wrong pattern after <em>expected</em>, and <em>to be hand in</em> has a base form where the V3 should be.' },

        { id: 'm1-11', type: 'spot', tag: 's4-prepger', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Without seen by anyone,', 'the cat crept out', 'of the kitchen', 'and hid under the car.'],
          answer: 0,
          fix: 'Without being seen by anyone,',
          hint: 'After a preposition, a verb takes the -ing form; ask whether the cat does the seeing or is seen.',
          why: 'After a preposition such as <em>without</em>, a verb must be a gerund, and the cat is the one not seen, so the passive gerund is needed: <em>without being seen</em>. <em>Seen</em> alone is a past participle and cannot follow a preposition. The other three parts are correct.' },

        { id: 'm1-12', type: 'equiv', tag: 's4-perfinf', level: 'B2+',
          given: 'It seems that the ancient city wall was repaired several times over the centuries.',
          stem: 'Which sentence means the same?',
          options: [
            'The ancient city wall seems to be repaired several times over the centuries.',
            'The ancient city wall is seemed to have been repaired several times over the centuries.',
            'The ancient city wall seems to have been repaired several times over the centuries.',
            'The ancient city wall seems to have repaired several times over the centuries.'
          ],
          answer: 2, near: 0,
          fb: [
            'A simple infinitive refers to the same time as <em>seems</em>, but the repairs happened earlier, in the past.',
            '<em>Seem</em> has no object, so it cannot be made passive.',
            'Yes — an earlier action, done to the wall.',
            'Without <em>been</em> the wall becomes the repairer.'
          ],
          hint: 'When the action happened before the time of <em>seems</em>, use a perfect infinitive; then ask whether the wall does the action or receives it.',
          why: 'The repairs were in the past while the seeming is now, so we need a perfect infinitive, and the wall was repaired by people, so it is passive: <em>seems to have been repaired</em>. <em>Seems to be repaired</em> is the near miss: passive, but it puts the repairs in the present. <em>Is seemed</em> passivises a verb that has no object, and <em>seems to have repaired</em> makes the wall the doer.' }
      ]
    },

    /* ---------------------------------------- PART E: OBJECTS AND PREPOSITIONS */
    {
      code: 'E',
      part: 'PART E: OBJECTS AND PREPOSITIONS',
      title: 'Two objects, particles and prepositions',
      instructions: 'Three questions on which noun can become the subject and which small words stay with the verb.',
      points: 1,
      items: [
        { id: 'm1-13', type: 'equiv', tag: 's5-explain', level: 'B2',
          given: 'T.Chris explained the homework task to Pond again at break time.',
          stem: 'Which passive sentence is correct?',
          options: [
            'The homework task was explained to Pond again at break time.',
            'Pond was explained the homework task again at break time.',
            'The homework task was explained for Pond again at break time.',
            'The homework task explained to Pond again at break time.'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — the thing explained is the subject, and the listener comes after a preposition.',
            '<em>Explain</em> is not like <em>give</em>: the person who hears the explanation cannot become the subject of the passive.',
            'The listener after <em>explain</em> is introduced with a different preposition.',
            'Without <em>be</em> this is active, and a task cannot explain anything.'
          ],
          hint: 'Some verbs, unlike <em>give</em> or <em>tell</em>, never let the person become the passive subject; check which noun can move to the front.',
          why: 'With <em>explain</em>, only the thing explained can be the passive subject, and the listener follows <em>to</em>: <em>The homework task was explained to Pond</em>. <em>Pond was explained the homework task</em> is the near miss: it copies the pattern of <em>Pond was given…</em>, which <em>explain</em> does not allow. <em>Explained for Pond</em> uses the wrong preposition, and the version without <em>was</em> makes the task the explainer.' },

        { id: 'm1-14', type: 'spot', tag: 's5-phrasal', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The M5 sports day', 'had been planned for weeks,', 'but at the last minute', 'it was called because of the storm.'],
          answer: 3,
          fix: 'it was called off because of the storm.',
          hint: 'A phrasal verb keeps its particle in the passive; check whether every verb still has the word that gives it its meaning.',
          why: 'The verb meaning "cancel" is <em>call off</em>, and its particle stays in the passive: <em>it was called off</em>. Without <em>off</em>, <em>was called</em> means "was named" or "was phoned", which makes no sense here. <em>Had been planned</em> is a correct past perfect passive.' },

        { id: 'm1-15', type: 'choose', tag: 's5-as', level: 'B2',
          stem: 'In Thai culture, the elephant has long been regarded ______ a symbol of strength and good fortune.',
          options: [
            'like',
            'as',
            'by',
            'for'
          ],
          answer: 1, near: 0,
          fb: [
            '<em>Like</em> compares two things; after <em>regarded</em>, a role or category is introduced with a different word.',
            'Yes — <em>regarded</em> + a role.',
            '<em>By</em> introduces the doer, and <em>a symbol</em> is not a doer: it is what the elephant is considered to be.',
            'This preposition does not follow <em>regarded</em> to name a role.'
          ],
          hint: 'After verbs like <em>seen</em>, <em>known</em> and <em>regarded</em>, ask whether the noun that follows is a doer or a role.',
          why: '<em>Be regarded as</em> introduces a role or category, and <em>a symbol of strength</em> is exactly that. <em>Like</em> is the near miss: the meaning is close, but <em>regard</em> takes <em>as</em>. <em>By</em> is the classic trap, because it would make a symbol the doer of the regarding, and <em>for</em> does not follow this verb.' }
      ]
    },

    /* ---------------------------------------- PART F: SHORTCUTS */
    {
      code: 'F',
      part: 'PART F: SHORTCUTS',
      title: 'Relative, reduced and shortened clauses',
      instructions: 'Read the short text about school canteens, then choose the best option for each of the three gaps.',
      points: 1,
      items: [
        { id: 'm1-16', type: 'cloze', tag: 's6-relpass', level: 'B2',
          passage: M1_P1,
          blank: '(16)',
          stem: 'Choose the best option for gap (16).',
          options: [
            'replaced',
            'is replacing',
            'replaces',
            'is replaced'
          ],
          answer: 3, near: 0,
          fb: [
            'This bare V3 looks like a past tense, but a filter cannot replace anything, and the relative clause has no proper verb.',
            '<em>Be</em> + V-ing is active: it would mean the filter is doing the replacing.',
            'This is active, and <em>replace</em> needs an object; nothing follows the gap but a time phrase.',
            'Yes — the filter receives the action, and the relative clause has its own finite verb.'
          ],
          hint: 'Ask whether the filter does the action or receives it, and remember that the relative clause after <em>that</em> needs a full finite verb.',
          why: 'The filter does not replace anything (a technician replaces it), so the relative clause needs a finite passive: <em>is replaced</em>. <em>Replaced</em> alone is the near miss, the bare-V3 trap: with no <em>be</em>, the clause has no proper verb. <em>Is replacing</em> and <em>replaces</em> are both active and would need an object after the gap, where there is only <em>every three months</em>.' },

        { id: 'm1-17', type: 'cloze', tag: 's6-edving', level: 'B2+',
          passage: M1_P1,
          blank: '(17)',
          stem: 'Choose the best option for gap (17).',
          options: [
            'working',
            'worked',
            'are working',
            'who working'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — the cooks do the work, so the shortened clause takes the -ing form.',
            'A V3 after a noun gives it a passive meaning, but the cooks are the ones doing the action.',
            'The sentence already has its finite verb later on (<em>have completed</em>), so a second finite verb here breaks it.',
            'A relative pronoun needs a finite verb after it; <em>who</em> + V-ing alone is not a clause.'
          ],
          hint: 'After a noun, use V3 when the noun receives the action and V-ing when the noun does it; check whether the sentence already has its main verb.',
          why: 'The cooks work in the canteens, so the shortened clause uses the active -ing form: <em>the cooks working in them</em> = the cooks who work in them. <em>Worked</em> is the near miss: a V3 would make the cooks receivers of the action. <em>Are working</em> adds a second finite verb to a sentence that already has <em>have completed</em>, and <em>who working</em> drops the verb that a relative clause must have.' },

        { id: 'm1-18', type: 'cloze', tag: 's6-ellip', level: 'C1',
          passage: M1_P1,
          blank: '(18)',
          stem: 'Choose the best option for gap (18).',
          options: [
            'if not storing properly',
            'if not proper stored',
            'if not stored properly',
            'if it not stored properly'
          ],
          answer: 2, near: 0,
          fb: [
            'The rice does not store anything; the -ing form gives it an active meaning.',
            'An adjective cannot describe a verb form; a participle needs an adverb.',
            'Yes — <em>if not</em> + V3, with <em>it is</em> left out.',
            'Once you keep the subject <em>it</em>, you must keep the verb <em>be</em> too; a full clause needs a finite verb.'
          ],
          hint: 'A short clause after <em>if</em> can drop its subject and <em>be</em>; ask whether the rice does the action or receives it, and check the word form.',
          why: 'The full clause is <em>if it is not stored properly</em>; English can drop <em>it is</em>, leaving <em>if not stored properly</em> (this pattern appeared in A-Level 2568). <em>If not storing properly</em> is the near miss: right shape, but it makes the rice the storer. <em>If not proper stored</em> uses an adjective where an adverb is needed, and <em>if it not stored properly</em> keeps the subject but drops <em>is</em>.' }
      ]
    },

    /* ---------------------------------------- PART G: THE CAUSATIVE FAMILY */
    {
      code: 'G',
      part: 'PART G: THE CAUSATIVE FAMILY',
      title: 'Have, get, make and let',
      instructions: 'Three questions on getting things done by other people. One of them is a short conversation.',
      points: 1,
      items: [
        { id: 'm1-19', type: 'choose', tag: 's7-service', level: 'B2',
          stem: 'My phone screen cracked when I dropped it, so I\'m going to ______ at the mall this weekend.',
          options: [
            'have it repair',
            'have repaired it',
            'have it to repair',
            'have it repaired'
          ],
          answer: 3, near: 0,
          fb: [
            'The phone does not repair anything; after the object, this pattern needs a different verb form.',
            'This word order makes a perfect infinitive: it would mean you yourself will have finished the repair.',
            'There is no <em>to</em> in this pattern.',
            'Yes — <em>have</em> + object + V3: someone else does the job.'
          ],
          hint: 'When you pay someone else to do a job on your things, think about the order of <em>have</em>, the object and the verb, and which form follows the object.',
          why: 'A technician will do the repair, so the causative is <em>have</em> + object + V3: <em>have it repaired</em>. <em>Have it repair</em> is the near miss: right order, but a base form makes the phone the repairer. <em>Have repaired it</em> is a perfect form meaning you do it yourself, and <em>have it to repair</em> adds a <em>to</em> that the pattern never takes (a distractor of this kind appeared in A-Level 2568).' },

        { id: 'm1-20', type: 'gap', tag: 's7-getsb', level: 'B2',
          lines: [
            { who: 'Situation', text: 'Nan and Pim are planning the class party.' },
            { who: 'Nan', text: 'The speakers are far too heavy for the two of us to carry.' },
            { who: 'Pim', text: 'Don\'t worry. I\'ll get my cousin ___(20)___ them over in his pickup.' }
          ],
          blank: '(20)',
          stem: 'Choose the best option for gap (20).',
          options: [
            'bring',
            'to bring',
            'brought',
            'bringing'
          ],
          answer: 1, near: 0,
          fb: [
            'A base form after the person belongs to the <em>have</em> pattern; <em>get</em> works differently.',
            'Yes — <em>get</em> + person + <em>to</em>-infinitive.',
            'A V3 after the person would mean your cousin receives the action, but he is the one doing it.',
            'An -ing form here does not express persuading someone to do a favour.'
          ],
          hint: 'When you persuade a person to do something, check whether the verb you used (<em>have</em>, <em>make</em> or <em>get</em>) needs <em>to</em> before the next verb.',
          why: '<em>Get</em> + person + action always takes a <em>to</em>-infinitive: <em>get my cousin to bring them</em>. <em>Bring</em> is the near miss: that is the pattern for <em>have</em> (<em>have my cousin bring them</em>), not <em>get</em>. <em>Brought</em> would make the cousin the thing that is brought, and <em>bringing</em> does not express persuading.' },

        { id: 'm1-21', type: 'choose', tag: 's7-made', level: 'B2',
          stem: 'The two boys who were caught cheating ______ the whole test after school.',
          options: [
            'were made to retake',
            'were made retake',
            'were let to retake',
            'were made retaking'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — the passive of <em>make</em> brings back <em>to</em>.',
            'In the active, <em>make</em> is followed by a base form, but the passive pattern is different.',
            '<em>Let</em> has no passive, and the boys were not given permission: they were forced.',
            'This pattern is never followed by an -ing form.'
          ],
          hint: 'Active <em>make someone do</em> has no <em>to</em>; think about what changes when the person becomes the subject.',
          why: 'Active <em>made them retake</em> has no <em>to</em>, but in the passive the <em>to</em> returns: <em>were made to retake</em>. <em>Were made retake</em> is the near miss: it copies the active pattern into the passive. <em>Let</em> has no passive and means permission, not force, and <em>were made retaking</em> uses a form this pattern never takes.' }
      ]
    },

    /* ---------------------------------------- PART H: SAID TO BE */
    {
      code: 'H',
      part: 'PART H: SAID TO BE',
      title: 'Reporting passives and register',
      instructions: 'Three questions on reporting what people say, on verbs that refuse a pattern, and on the informal get-passive.',
      points: 1,
      items: [
        { id: 'm1-22', type: 'equiv', tag: 's8-saidto', level: 'B2',
          given: 'People say that the old banyan tree behind the temple is over three hundred years old.',
          stem: 'Which sentence means the same?',
          options: [
            'The old banyan tree behind the temple is said to have been over three hundred years old.',
            'The old banyan tree behind the temple is said that it is over three hundred years old.',
            'The old banyan tree behind the temple says to be over three hundred years old.',
            'The old banyan tree behind the temple is said to be over three hundred years old.'
          ],
          answer: 3, near: 0,
          fb: [
            'A perfect infinitive moves the age into the past, but the tree is that old now.',
            'This mixes two patterns: a personal subject is followed by a <em>to</em>-infinitive, not a <em>that</em>-clause.',
            'This is active: the tree itself would be doing the saying.',
            'Yes — subject + <em>is said</em> + a simple infinitive for the same time.'
          ],
          hint: 'After a personal subject + <em>is said</em>, use a <em>to</em>-infinitive, and choose a simple or perfect infinitive by comparing the two times.',
          why: 'The tree\'s age is true now, at the same time as the saying, so the simple infinitive is right: <em>is said to be</em>. The version with <em>to have been</em> is the near miss: right pattern, but it sends the age into the past. <em>Is said that it is</em> blends the <em>It is said that…</em> pattern with the personal one, and <em>says to be</em> makes the tree the speaker.' },

        { id: 'm1-23', type: 'choose', tag: 's8-refuse', level: 'C1',
          stem: '______ that the school will close early on Friday because of the flood warning.',
          options: [
            'It has been informed to parents',
            'Parents have been informed',
            'Parents have informed',
            'It has been informed parents'
          ],
          answer: 1, near: 0,
          fb: [
            '<em>Inform</em> does not work in the <em>It</em> + passive + <em>that</em> pattern; it needs the people who receive the news as subject.',
            'Yes — <em>inform</em> takes a person subject in the passive.',
            'Without <em>been</em> this is active: the parents become the ones giving the news, and <em>inform</em> would need an object.',
            'This puts the people informed after the verb with an empty <em>it</em> in front, a pattern <em>inform</em> never allows.'
          ],
          hint: 'Verbs like <em>inform</em>, <em>tell</em> and <em>warn</em> behave differently from <em>say</em> in the passive; ask who receives the news.',
          why: '<em>Inform</em>, <em>tell</em> and <em>warn</em> need a person as passive subject: <em>Parents have been informed that…</em>. <em>It has been informed to parents</em> is the near miss: it copies <em>It has been said that…</em>, a pattern that <em>inform</em> refuses. <em>Parents have informed</em> drops <em>been</em> and makes the parents the informers, and <em>It has been informed parents</em> has no possible structure.' },

        { id: 'm1-24', type: 'choose', tag: 's8-get', level: 'B1+',
          stem: 'Mint was thrilled last week: she ______ to team captain after only one season with the volleyball club.',
          options: [
            'got promote',
            'was promoting',
            'got promoted',
            'got promoting'
          ],
          answer: 2, near: 0,
          fb: [
            'In a <em>get</em>-passive, <em>get</em> is followed by the past participle, not the base form.',
            'This is active continuous: Mint would be the one promoting someone.',
            'Yes — an informal <em>get</em>-passive, here for good news.',
            'An -ing form after <em>get</em> does not give a passive meaning.'
          ],
          hint: 'In informal English, <em>get</em> can replace <em>be</em> in the passive; check which verb form follows it and who does the promoting.',
          why: 'The club promoted Mint, so she receives the action, and in this chatty sentence the informal <em>get</em>-passive works well: <em>got promoted</em>. <em>Got promote</em> is the near miss: right auxiliary, but a base form instead of the V3. <em>Was promoting</em> makes Mint the promoter, and <em>got promoting</em> is not a passive form. The <em>get</em>-passive is not only for bad events.' }
      ]
    }
  ]
});
