/* ===========================================================================
   STAGE 06 — Shortcuts
   The TCAS Text Completion core: passives inside relative clauses, reduced
   V3 / V-ing clauses after a noun, the finite-verb trap, elliptical clauses
   after if/once/unless, adverbs inside the passive, and opening V3 clauses.
   =========================================================================== */
Object.assign(REMEDIATION, {
  's6-relpass': {
    name: 'Passives in relative clauses',
    principle: 'A relative clause that starts with <em>which</em>, <em>that</em> or <em>who</em> needs its own finite verb. If the noun before it receives the action, that verb is <em>be</em> + V3, with <em>be</em> agreeing with the noun and matching the time. A V3 alone after the relative pronoun reads as an active past verb.',
    reteach: 'Thai uses ที่ for every relative clause and marks no voice inside it, so students carry the bare verb straight across: <em>a system that activated after each use</em>, <em>the panels that installed last month</em>. Many also believe the V3 is "already passive" because it looks like the passive verb they learned. Reteach by unpacking the clause into a full sentence: replace <em>that</em> with the noun (<em>the system activated after each use?</em>), ask whether the system does the switching on or is switched on, then put <em>is/was/are/were</em> back and make it agree with the noun, not with the nearest word. It is still broken when a student writes a V3 straight after <em>that/which/who</em>, or makes <em>be</em> agree with a noun inside a prepositional phrase. It is fixed when the student can turn any relative clause into a full sentence and back again, and can say who does the action.',
    activities: [
      'Relative unpacking: give eight noun phrases with relative clauses taken from Bangkok Post headlines; students rewrite each clause as a full sentence (that → the noun), mark it A (active) or P (passive), then rebuild the phrase.',
      'Bare-V3 hunt: a 120-word passage with five relative clauses, three of them missing be; pairs race to find and fix them, then defend each fix aloud with the Decision Test.'
    ]
  },
  's6-relact': {
    name: 'Active relative clauses',
    principle: 'Run the Decision Test on the noun before the relative pronoun. If that noun does the action, even when it is a thing, the relative clause is active, and a noun phrase straight after the verb is its object. A passive verb would leave that object with no job in the sentence.',
    reteach: 'The strongest wrong rule Thai students bring to this item type is "thing as subject means passive", so <em>customs ___ young Thais to their past</em> attracts <em>are linked</em>, and an app that measures something gets <em>is measured</em>. A-Level 2569 rewarded the active relative in exactly this position. Reteach with object-spotting: underline the noun phrase straight after the gap and ask "what is this noun doing in the sentence?" If it can only be the object, the verb before it must be active. Pair each item with its passive twin (<em>an app that checks your pulse</em> / <em>a pulse that is checked by an app</em>) so students see that both voices are possible, but not with the same subject. It is still broken when the student chooses the passive because the subject is a machine, an idea or a custom. It is fixed when the student points to the object before choosing, and accepts an active verb with an inanimate subject without hesitating.',
    activities: [
      'Object spotlight: project ten TCAS-style gaps; students only underline the word or phrase after each gap and shout "object!" or "no object!" before anyone looks at the options.',
      'Machines that do things: groups list five machines or apps at school and write a "that + active verb + object" phrase for each (a scanner that reads our ID cards); the class turns two of them round into passive phrases with a different subject.'
    ]
  },
  's6-twofinite': {
    name: 'One clause, one finite verb',
    principle: 'Count subjects and finite verbs. A sentence that already has its main verb can take another finite verb only inside a clause with its own subject, such as <em>which</em> or <em>who</em>. After that, decide the voice inside that clause: does the noun do the action, or receive it?',
    reteach: 'Gaps between commas tempt Thai learners to fill the space with any verb that "means the right thing", because Thai strings verbs together freely and needs no relative pronoun to add information. The result is <em>Soft power, is often described as…, has become…</em>: two finite verbs sharing one subject. The other half of the trap is <em>which often describes</em>, where the student keeps the subject but loses the voice. Reteach in two passes. Pass 1: draw a box round the main subject and circle its finite verb; any other finite verb needs a new subject (which/who). Pass 2: inside that clause, run the Decision Test. It is still broken when the student chooses by meaning alone and cannot point to the main verb. It is fixed when the student says "the main verb is X, so this part needs which", and then picks the voice for a reason.',
    activities: [
      'Verb counting: give six long sentences with commas; students box every subject, circle every finite verb and draw an arrow from each verb to its subject. Any verb without an arrow is an error to fix.',
      'Four-way grid: write one TCAS gap on the board with a 2×2 grid (with/without which × active/passive); teams must place all four options in the grid and cross out three with a reason each.'
    ]
  },
  's6-reduced': {
    name: 'Reduced passive clauses',
    principle: 'A passive relative clause can lose its <em>which/that</em> + <em>be</em>, leaving the V3 phrase straight after the noun. This phrase has no tense of its own, so the sentence still needs its own main verb elsewhere. Use it only when the noun receives the action.',
    reteach: 'Students meet reduced clauses constantly in TCAS reading passages but rarely produce them, so they misread the V3 as the main past-tense verb (<em>The money raised… will be spent</em> becomes "the money rose"?). In gap items they then add the be they think is missing. Reteach by expansion and compression: expand every reduced clause back to <em>which was/were + V3</em>, check that it makes sense, then compress it again. Make students find the real main verb every time. Include rise/raise and grow/produce pairs, where the V3 changes meaning. It is still broken when the student reads the V3 as the sentence verb, or puts be back without which. It is fixed when the student can expand the phrase, name the main verb and explain why the shortened version needs no be.',
    activities: [
      'Accordion sentences: students get ten sentences from science and news texts; they stretch each reduced clause to a full relative clause, then squeeze it back, timing themselves.',
      'Main-verb race: in a 150-word news article, students highlight every V3 in two colours: main verb (with be or have) or reduced clause (no be). First pair with all correct wins.'
    ]
  },
  's6-edving': {
    name: 'V3 or V-ing after a noun',
    principle: 'After a noun, a V3 phrase gives the noun a passive meaning and a V-ing phrase gives it an active meaning. Ask whether the noun does the action or receives it, and check whether an object follows the gap.',
    reteach: 'Thai learners often treat V-ing as "the current action" and V3 as "the past action", so they choose by time instead of voice: <em>the tourists visited Phuket last year</em> as a noun phrase. Others choose V3 for anything that sounds formal. Reteach with the two questions in order: does the noun do it or receive it, and is there an object after the gap? Show that the time comes from the rest of the sentence, not from the participle (<em>the players chosen last year / next week</em>). It is still broken when a student explains the choice with time words ("it already happened, so V3"). It is fixed when the student explains it with the doer: "the students do the taking part, so V-ing".',
    activities: [
      'Doer or done-to cards: each pair gets 12 noun + verb cards (the girl / sit; the souvenirs / sell) and must make a noun phrase, then say "does" or "done to" for each.',
      'Rewrite the caption: students write captions for six school photos using noun + V-ing or noun + V3 (Students waiting for the bus; Books donated by Mattayom 6), then swap and check the voice.'
    ]
  },
  's6-commatrap': {
    name: 'The finite trap',
    principle: 'Find the main subject and its finite verb before you choose. If that verb is already there, the gap after a noun takes a participle phrase, with no <em>is/are</em> and no comma between the noun and the phrase that defines it. If there is no finite verb yet, the gap must supply one.',
    reteach: 'This is the trap behind A-Level 2569 #66, where students choose <em>a trend is known as</em> because a full verb "looks more complete". The habit comes from writing practice that rewards full sentences. The comma options add a second layer: Thai has no commas, so learners use them where they would pause. Reteach with a fixed routine: (1) box the main subject, (2) circle its finite verb, (3) if the verb is already there, the gap is non-finite; if it is not, the gap must be finite. Then teach the comma rule only for defining phrases: the noun and its identifying phrase stay together. It is still broken when the student chooses the option that "makes a full sentence" inside a sentence that already has one, or adds a comma before a defining phrase. It is fixed when the student runs the three-step routine aloud and can do it in both directions.',
    activities: [
      'Verb or no verb?: show 12 sentences for 5 seconds each; students hold up a card: FINITE NEEDED or ALREADY HAS ONE. Then reveal the gap options.',
      'Fix the news ticker: a scrolling list of eight headlines-turned-sentences, four with an extra is/are and four with no finite verb; teams repair them and explain which direction each one failed.'
    ]
  },
  's6-ellip': {
    name: 'Elliptical passive clauses',
    principle: 'After <em>if, when, unless, once</em> or <em>although</em>, a passive can drop its subject and <em>be</em>, leaving the V3. The missing subject is the subject of the main clause, so put it back and test it: does it receive the action? If it does the action, use V-ing. After the V3, use an adverb, not an adjective.',
    reteach: 'Elliptical clauses are short and look like fragments, so students fill them by sound: <em>if not correct preparing</em>, <em>when asking by reporters</em>. They forget that the dropped subject is the main subject. Reteach by restoring: write the dropped words in a different colour (<em>if [it is] not prepared correctly</em>), read the full clause aloud, and only then remove the colour. Contrast pairs where the main subject receives the action (<em>once opened, the bottle…</em>) with pairs where it does the action (<em>when crossing the road, look…</em>). Add the adverb check last. It is still broken when the student chooses V-ing because there is no be, or uses an adjective after the V3. It is fixed when the student can restore the hidden subject and be, and explain the choice from that full clause.',
    activities: [
      'Hidden words: students get ten warning labels from food, medicine and electronics packaging (Once opened, keep refrigerated); they write the missing subject and be in red, then decide whether each could take V-ing instead.',
      'Label designer: pairs design three product labels using if not / once / unless + V3, then test another pair by blanking out the V3.'
    ]
  },
  's6-adverb': {
    name: 'Adverbs inside the passive',
    principle: 'An adverb describing a passive action usually sits between <em>be</em> and the V3, and it must be the adverb form, not the adjective. Decide the voice first: if the subject does the action and an object follows, the verb stays active, with the adverb before it.',
    reteach: 'Thai uses the same word for "good" and "well" in many contexts (ดี), and places manner words after the verb, so learners write <em>is good prepared</em> or <em>prepared good</em>. Some also read an -ly word as a signal to choose the passive. Reteach with three slots on the board: be | adverb | V3. Students sort adverbs and adjectives first (well / good, careful / carefully), then fill only adverbs into the middle slot. Finish with active pairs (<em>Thai dramas regularly top the charts</em>) so the adverb never decides the voice. It is still broken when the student uses good, careful or clear before a V3, or picks the passive because an adverb is present. It is fixed when the student decides the voice first and then puts an -ly or well adverb in the middle slot.',
    activities: [
      'Slot machine: three columns of cards (be forms / adverbs and adjectives mixed / V3s); students pull one from each and keep only grammatical combinations, explaining any adjective they reject.',
      'Hotel review rewrite: give a short, flat hotel review (The room was cleaned. The staff were trained.) and have students add one precise adverb to each passive, then compare which adverbs change the meaning most.'
    ]
  },
  's6-front': {
    name: 'Opening participle clauses',
    principle: 'An opening participle clause has no subject of its own; it borrows the subject after the comma. That subject must be the thing the clause describes. If it receives the action, open with V3; if it does the action, open with V-ing. Never add a subject and <em>be</em> before the comma.',
    reteach: 'Opening clauses work like a topic in Thai, so learners attach them to whatever comes next: <em>Built in the 13th century, tourists love the old city</em>. In Thai this is fine, because the topic does not have to be the subject. In English, the reader joins the opening clause to the main subject, and the result is a dangling participle. Reteach by asking "who or what was built?" and pointing to the word straight after the comma. If they do not match, rebuild the main clause, often with a passive (<em>the city is visited by…</em>). Then contrast V3 openings with V-ing openings using the Decision Test. It is still broken when the student accepts any main clause after an opening V3, or writes <em>It was built in 1782, the palace…</em>. It is fixed when the student checks the first noun after the comma every time.',
    activities: [
      'Dangling detectives: show eight sentences with funny dangling openings (Covered in chocolate sauce, Fah ate the ice cream); students draw what the sentence really says, then fix it.',
      'Postcard openers: students write three postcard sentences about Thai places, each opening with a V3 clause (Built…, Located…, Surrounded by…), and a partner checks the first noun after each comma.'
    ]
  }
});

var T6 = {
  id: 't6', n: 6, code: 'Stage 06', art: 'stack',
  name: 'Shortcuts', cefr: 'B2–C1',
  blurb: 'Writers shorten clauses all the time, and TCAS gaps test it: learn when a gap needs a full verb, a V3, a V-ing or a which in front.',
  levels: []
};

/* ---------------------------------------------------------------- LEVEL 1 */
var T6_P1 = 'Bangkok\'s Smartest Public Toilets\n\nPublic toilets are rarely a source of civic pride, but a pilot project in Lumphini Park is trying to change that. Each unit has a self-cleaning floor ___(1)___ after every visitor leaves. Sensors ___(2)___ how many people use the toilets each hour send the data to a control room, where staff decide when a cleaner is needed. The scheme, ___(3)___ partly through a green-city grant, also saves rainwater, which ___(4)___ to flush the toilets. Visitors ___(5)___ the new units so far have given them high marks, and similar toilets may soon appear in other parks across the city.';

T6.levels.push({
  id: 't6l1', n: 1, name: 'Passives in relative clauses', cefr: 'B2',
  blurb: 'Which, that and who start a small clause with its own verb. Decide whether that verb is active or passive, and never leave it without be.',
  subs: [

    /* ------------------------------------------------------------ 1.1 */
    {
      id: 't6l1s1', name: 'which / that / who + is + V3 (a system that is activated after each use)', cefr: 'B2',
      theory: {
        key: 'When the noun before <em>which</em>, <em>that</em> or <em>who</em> receives the action, the relative clause needs its own passive verb: <em>be</em> + V3.',
        body: [
          'A relative clause is a small sentence hiding inside a bigger one. In <em>a cleaning system that is activated after each use</em>, the word <em>that</em> stands for <em>the system</em> and is the subject of its own little clause. Like every subject, it needs a finite verb, a verb that shows tense: <em>is activated</em>, <em>was built</em>, <em>are sold</em>.',
          'Run the Decision Test inside the clause. Does the noun do the action, or receive it? A cleaning system does not activate anything; someone, or a timer, switches it on. So the relative clause is passive: <em>that + is + activated</em>. A bare V3 such as <em>that activated</em> looks like an active past-tense verb, so the clause now says the system switched something on, and the object is missing.',
          'Two more checks finish the job. First, <em>be</em> agrees with the noun that the relative pronoun stands for: <em>the panels that <b>were</b> installed</em>, <em>the plastic that <b>is</b> thrown away</em>. Second, the tense comes from the time in the sentence: <em>last month</em> points to <em>were</em>; <em>every day</em> points to <em>is/are</em>.',
          'This choice has appeared in A-Level 2568: <em>a special cleaning system that ___ after each use</em>, where the bare V3 was the trap and the finite passive was the key.'
        ],
        simple: [
          '<em>Who</em>, <em>which</em> and <em>that</em> start a small clause, and that clause needs its own verb.',
          'If the noun receives the action, use <em>be</em> + V3: <em>the bags that are sold here</em>.',
          'Do not write only the V3 after <em>that</em>: <em>the bags that sold here</em> is wrong.'
        ],
        examples: [
          { s: 'Each gate has a sensor that <b>is activated</b> when someone walks past.', g: 'the sensor receives the action, so the clause is passive: that + is + V3.' },
          { s: 'The fans that <b>were donated</b> last term are already broken.', g: 'were agrees with fans, and last term gives the past.' },
          { s: 'Students who <b>are chosen</b> for the team train every evening.', g: 'who stands for students, and students receive the choosing.' },
          { s: '<s>The money that collected at the fair went to the hospital.</s>', g: 'collected alone looks like an active past verb; the clause needs that was collected.' }
        ]
      },
      items: [
        { id: 't6l1s1-1', type: 'cloze', tag: 's6-relpass', level: 'B2',
          passage: T6_P1, blank: '(1)', stem: 'Choose the best option for gap (1).',
          options: ['that disinfected', 'that disinfecting', 'that is disinfected', 'is disinfected'],
          answer: 2, near: 0,
          fb: [
            'This is the bare-V3 trap. After <em>that</em> the word reads as an active past verb, so the floor seems to disinfect something, and there is no tense to match <em>leaves</em>.',
            'A V-ing form cannot be the verb of a relative clause on its own; the clause has a subject (<em>that</em>) but no finite verb.',
            'Yes. <em>That</em> stands for the floor, the floor receives the cleaning, and present <em>is</em> matches <em>after every visitor leaves</em>.',
            'The voice is right, but there is no relative pronoun, so this is a second finite verb with no subject; the sentence already has <em>has</em>.'
          ],
          hint: 'The gap starts a new clause after the floor: it needs its own subject and a finite verb, so ask whether the floor does the cleaning or receives it.',
          why: 'The relative pronoun <em>that</em> is the subject of its own clause, and it stands for <em>a self-cleaning floor</em>, which receives the action. So the clause needs a finite passive: <em>that is disinfected</em>. <em>That disinfected</em> is the near miss: it looks passive but reads as an active past verb with no object, exactly the trap from A-Level 2568. <em>That disinfecting</em> has no finite verb, and <em>is disinfected</em> has no subject of its own, so it fights with the main verb <em>has</em>.' },

        { id: 't6l1s1-2', type: 'choose', tag: 's6-relpass', level: 'B2',
          stem: 'Students ______ cheating in the final exam will receive a zero for the whole subject.',
          options: ['who are caught', 'who caught', 'who is caught', 'who are catching'],
          answer: 0, near: 2,
          fb: [
            'Yes. <em>Who</em> stands for the students, the students receive the catching, and <em>are</em> agrees with the plural noun.',
            'This makes the students the catchers: <em>who caught cheating</em> says they caught someone, which is the wrong doer and leaves the action without an object.',
            'The voice is right, but <em>be</em> must agree with the noun that <em>who</em> stands for, and that noun is plural.',
            '<em>Be</em> + V-ing is active: the students would be doing the catching. The teachers catch; the students receive it.'
          ],
          hint: 'Ask who does the catching in this sentence, then make be agree with the noun that who stands for.',
          why: 'The teachers do the catching, and the students receive it, so the relative clause is passive: <em>who are caught</em>, with <em>are</em> agreeing with the plural <em>students</em>. <em>Who is caught</em> is the near miss: right voice, wrong agreement. <em>Who caught</em> turns the students into the catchers, and <em>who are catching</em> is active continuous, which also makes them the doers.' },

        { id: 't6l1s1-3', type: 'choose', tag: 's6-relpass', level: 'B2',
          stem: 'The solar panels that ______ on the school roof last month have already cut our electricity bill by a third.',
          options: ['installed', 'was installed', 'were installing', 'were installed'],
          answer: 3, near: 1,
          fb: [
            'A V3 on its own after <em>that</em> reads as an active past verb, so the panels seem to install something. The clause needs <em>be</em>.',
            'The voice and tense are right, but <em>be</em> must agree with <em>panels</em>, which is plural.',
            '<em>Be</em> + V-ing is active: it says the panels were doing the installing. Panels receive that action.',
            'Yes. <em>That</em> stands for <em>the panels</em>, which were put on the roof by workers, and <em>were</em> matches a plural noun and <em>last month</em>.'
          ],
          hint: 'Make be agree with the noun that the relative pronoun stands for, and take the tense from the time phrase.',
          why: 'The panels did not install anything; workers installed them. So the relative clause is passive, and <em>be</em> must agree with the plural <em>panels</em> and the past time <em>last month</em>: <em>were installed</em>. <em>Was installed</em> is the near miss, with the wrong agreement. <em>Installed</em> alone is the bare-V3 trap, and <em>were installing</em> is active, making the panels the workers.' },

        { id: 't6l1s1-4', type: 'spot', tag: 's6-relpass', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The essays', 'that submitted', 'after the deadline', 'will not be marked.'],
          answer: 1, fix: 'that are submitted',
          hint: 'A relative clause needs its own finite verb; check whether the essays do the action or receive it.',
          why: 'Essays do not submit anything; students submit them. The relative clause therefore needs a finite passive: <em>that are submitted</em> (or <em>that were submitted</em> for essays already handed in). <em>That submitted</em> is the bare-V3 error: it reads as an active past verb with no object. The main clause, <em>The essays … will not be marked</em>, is already correct.' },

        { id: 't6l1s1-5', type: 'gap', tag: 's6-relpass', level: 'B2',
          lines: [
            { who: 'Situation', text: 'Mint is showing Ploy her new phone case at lunch.' },
            { who: 'Ploy', text: 'That case is so cool. What is it made of?' },
            { who: 'Mint', text: 'It\'s made from plastic bottles ___(1)___ from the beach at Bang Saen. A student start-up turns them into cases.' }
          ],
          blank: '(1)', stem: 'Choose the best option for gap (1).',
          options: ['that collected', 'that were collected', 'were collected', 'that collecting'],
          answer: 1, near: 0,
          fb: [
            'This is the bare-V3 trap: after <em>that</em> the verb reads as active past, so the bottles seem to have collected something.',
            'Yes. <em>That</em> stands for the bottles, people collected them, and <em>were</em> agrees with a plural noun in the past.',
            'Without a relative pronoun, this is a second finite verb with no subject; the sentence already has its verb, <em>is made</em>.',
            'A V-ing form alone is not a finite verb, and it is active, so the bottles would be doing the collecting.'
          ],
          hint: 'The sentence already has its main verb; the gap starts a new clause, so it needs a subject and a finite verb with the right voice.',
          why: 'Mint\'s sentence already has its main verb (<em>It\'s made</em>), so the gap must start a relative clause with its own subject and finite verb. The bottles were collected by people, so the clause is passive: <em>that were collected</em>. <em>That collected</em> is the near miss, the bare-V3 trap. <em>Were collected</em> has no subject and adds a second finite verb, and <em>that collecting</em> has no finite verb and an active meaning, so the bottles would be the collectors.' }
      ]
    },

    /* ------------------------------------------------------------ 1.2 */
    {
      id: 't6l1s2', name: 'Active relative is right when the noun does the action (threads that connect generations)', cefr: 'B2',
      theory: {
        key: 'If the noun before <em>which</em>, <em>that</em> or <em>who</em> does the action, the relative clause is active, even when the noun is a thing.',
        body: [
          'Not every relative clause is passive. In <em>the cultural threads that connect generations</em>, the threads do the connecting, and <em>generations</em> is the object. The clause is active: <em>that</em> + verb + object. This pattern appeared in A-Level 2569, and the passive options were the traps.',
          'Many learners carry a wrong rule: "a thing as subject means passive." Things do actions all the time: <em>an app that tracks your sleep</em>, <em>a road that leads to the beach</em>, <em>a policy that affects every student</em>. Ask the Decision Test question every time: does the noun do it, or receive it?',
          'The fastest clue is what comes after the gap. If a noun phrase follows the verb directly, as in <em>___ young Thais</em> or <em>___ the freshness of fish</em>, that noun is an object, and an object means active. A passive verb would leave that noun with no job in the sentence.',
          'Do not drop the relative pronoun. Without <em>that</em> or <em>who</em>, the verb becomes a second main verb with no subject of its own: <em>✗ the threads connect generations are…</em>.'
        ],
        simple: [
          'Sometimes the noun does the action. Then the relative clause is active.',
          'Things can do actions too: <em>an app that tracks your sleep</em>.',
          'If an object comes straight after the verb, choose the active.'
        ],
        examples: [
          { s: 'Robots that <b>clean</b> the platforms work all night at Siam station.', g: 'the robots do the cleaning; the platforms are the object.' },
          { s: 'Volunteers who <b>plant</b> mangroves in Samut Prakan meet every Sunday.', g: 'the volunteers do the planting, so the clause is active.' },
          { s: 'This is the road that <b>leads</b> to the beach.', g: 'lead has no object here, so it can only be active.' },
          { s: '<s>It is a festival that is brought families together for centuries.</s>', g: 'families is an object, so the verb must be active: that has brought families together.' }
        ]
      },
      items: [
        { id: 't6l1s2-1', type: 'cloze', tag: 's6-relact', level: 'B2',
          passage: T6_P1, blank: '(2)', stem: 'Choose the best option for gap (2).',
          options: ['that are counted', 'that count', 'count', 'are counting'],
          answer: 1, near: 0,
          fb: [
            'A passive makes the sensors the thing being counted, and then <em>how many people…</em> has no job in the sentence.',
            'Yes. The sensors do the counting, <em>how many people use the toilets</em> is the object, and <em>that</em> gives the clause its own subject.',
            'Without a relative pronoun this is a second finite verb; the sentence already has its main verb, <em>send</em>.',
            'This adds another finite verb with no subject of its own; the sentence already has its main verb, <em>send</em>.'
          ],
          hint: 'Look at what follows the gap: is it an object? Then check that the extra verb has its own subject.',
          why: 'The sensors do the counting, and <em>how many people use the toilets each hour</em> is the object of that verb, so the relative clause is active: <em>that count</em>. <em>That are counted</em> is the near miss: it has a subject but the wrong voice, which leaves the object stranded. <em>Count</em> and <em>are counting</em> both create a second finite verb without a subject, because the main verb of the sentence is <em>send</em>.' },

        { id: 't6l1s2-2', type: 'choose', tag: 's6-relact', level: 'B2',
          stem: 'Festivals such as Loy Krathong are among the customs ______ young Thais to the generations before them.',
          options: ['are linked', 'link', 'that are linked', 'that link'],
          answer: 3, near: 2,
          fb: [
            'This is a second finite verb with no subject, and it is also passive, so <em>young Thais</em> has no role in the sentence.',
            'The voice is right, but without a relative pronoun this verb has no subject of its own; the sentence already has <em>are</em>.',
            'The clause has a subject, but the passive leaves <em>young Thais</em> without a job. Customs can do actions too.',
            'Yes. The customs do the linking, <em>young Thais</em> is the object, and <em>that</em> gives the clause its own subject.'
          ],
          hint: 'Ask whether the customs do the action or receive it, and look at the noun phrase straight after the gap.',
          why: 'The customs do the linking, and <em>young Thais</em> is the object, so the relative clause is active: <em>that link</em>. <em>That are linked</em> is the near miss: it has a subject, but a passive cannot take <em>young Thais</em> as an object, so it repeats the "thing subject means passive" error. <em>Link</em> and <em>are linked</em> have no relative pronoun, so they add a second finite verb to a sentence that already has <em>are</em>.' },

        { id: 't6l1s2-3', type: 'choose', tag: 's6-relact', level: 'B2',
          stem: 'Researchers at Kasetsart University have developed an app ______ the freshness of fish from a single photo.',
          options: ['that checks', 'that is checked', 'is checking', 'that checking'],
          answer: 0, near: 1,
          fb: [
            'Yes. The app does the checking, and <em>the freshness of fish</em> is its object.',
            'A passive makes the app the thing being checked, and then <em>the freshness of fish</em> has no role in the sentence.',
            'This is a second finite verb with no subject; the sentence already has its verb, <em>have developed</em>.',
            'The clause has a subject, <em>that</em>, but a V-ing form alone is not a finite verb.'
          ],
          hint: 'An app is a thing, but things can be doers. Check whether an object comes straight after the gap.',
          why: 'An app is a thing, but here it does the action, and <em>the freshness of fish</em> is the object, so the clause is active: <em>that checks</em>. <em>That is checked</em> is the near miss, the "thing means passive" error, which leaves the object without a job. <em>Is checking</em> has no subject of its own, and <em>that checking</em> has no finite verb.' },

        { id: 't6l1s2-4', type: 'sort', tag: 's6-relact', level: 'B2',
          stem: 'Does the noun do the action, or receive it? Sort each phrase by the relative clause it needs.',
          bins: [
            { key: 'act', label: 'who/that + active verb', hint: 'The noun does the action.' },
            { key: 'pass', label: 'who/that + be + V3', hint: 'The noun receives the action.' }
          ],
          items: [
            { text: 'the nurses … the patients on Ward 5 <em>(care for)</em>', bin: 'act' },
            { text: 'the patients … at the new clinic <em>(treat)</em>', bin: 'pass' },
            { text: 'the letters … to parents last week <em>(send)</em>', bin: 'pass' },
            { text: 'a teacher … every student in the class <em>(inspire)</em>', bin: 'act' },
            { text: 'the rules … in the student handbook <em>(list)</em>', bin: 'pass' },
            { text: 'the bus … us to the airport <em>(take)</em>', bin: 'act' }
          ],
          hint: 'For each card, ask who does the action, and notice whether an object follows the gap.',
          why: 'Active: the nurses care for the patients, a teacher inspires every student, the bus takes us; each has an object after the gap. Passive: the patients are treated, the letters were sent, the rules are listed; nobody is named after the gap because the noun itself receives the action. Notice that <em>the bus</em> and <em>a teacher</em> are just as active as the nurses, and a bus is a thing.' },

        { id: 't6l1s2-5', type: 'equiv', tag: 's6-relact', level: 'B2',
          given: 'Some farmers in Yasothon grow organic rice. These farmers sell it directly to restaurants in Bangkok.',
          stem: 'Which sentence joins the two ideas correctly?',
          options: [
            'The farmers in Yasothon who are grown organic rice sell it directly to restaurants in Bangkok.',
            'The farmers in Yasothon grow organic rice sell it directly to restaurants in Bangkok.',
            'The farmers in Yasothon who grow organic rice sell it directly to restaurants in Bangkok.',
            'The farmers in Yasothon who grown organic rice sell it directly to restaurants in Bangkok.'
          ],
          answer: 2, near: 0,
          fb: [
            'This passive says the farmers are the thing being grown, and <em>organic rice</em> is left without a job.',
            'With no relative pronoun, <em>grow</em> and <em>sell</em> are two finite verbs fighting over one subject.',
            'Yes. The farmers do the growing, <em>organic rice</em> is the object, and <em>who</em> gives the clause its own subject.',
            'A V3 alone is not a finite verb, and it gives the wrong voice for farmers who do the growing.'
          ],
          hint: 'The farmers do one action and then another; the first must sit in a relative clause with its own subject and verb.',
          why: 'The farmers do the growing, and <em>organic rice</em> is the object, so the relative clause is active: <em>who grow organic rice</em>. <em>Who are grown</em> is the near miss: it has the relative pronoun but makes the farmers the crop. Without <em>who</em>, <em>grow</em> and <em>sell</em> become two finite verbs, and <em>who grown</em> has no finite verb at all.' }
      ]
    },

    /* ------------------------------------------------------------ 1.3 */
    {
      id: 't6l1s3', name: 'One clause, one finite verb: Soft power, which is often described as… not often describes', cefr: 'B2+',
      theory: {
        key: 'Each clause gets one finite verb. If the sentence already has its main verb, any extra finite verb between the commas needs <em>which</em> or <em>who</em> in front of it, and then the right voice.',
        body: [
          'Count the verbs. <em>Soft power, which is often described as the ability to influence others, has become important.</em> The main clause is <em>Soft power … has become important</em>, and its finite verb is <em>has become</em>. The part between the commas is a relative clause with its own subject (<em>which</em>) and its own finite verb (<em>is described</em>). Two clauses, two finite verbs: legal.',
          'Now remove <em>which</em>: <em>✗ Soft power, is often described as…, has become important.</em> There are two finite verbs but only one subject, so the sentence breaks. Every finite verb needs its own subject, and between the commas the relative pronoun is the word that provides it.',
          'Then check the voice inside the relative clause. <em>✗ Soft power, which often describes…</em> keeps the subject but makes soft power the describer. Power does not describe anything; people describe it. A role phrase such as <em>as the ability to…</em> after the gap points to the passive. But the active can win too: in <em>The storm, which brought heavy rain, has moved away</em>, the storm did the bringing.',
          'So a TCAS gap between commas often offers four combinations: with or without <em>which</em>, active or passive. Only one has a subject AND the right voice. This pattern appears in a reconstructed A-Level 2567 item.'
        ],
        simple: [
          'One subject, one finite verb.',
          'If the sentence already has its main verb, an extra verb in the middle needs <em>which</em> or <em>who</em>.',
          'Then choose active or passive: does the noun do it, or receive it?'
        ],
        examples: [
          { s: 'Muay Thai, which <b>is often described</b> as an art, is taught all over the world.', g: 'the main verb is is taught; the relative clause has its own subject and verb.' },
          { s: 'The storm, which <b>brought</b> heavy rain to the south, has moved out to sea.', g: 'the storm did the bringing, so the relative clause is active.' },
          { s: '<s>Som tam, is made with green papaya, is popular everywhere.</s>', g: 'two finite verbs share one subject; add which before is made.' },
          { s: 'The report, which <b>was published</b> on Monday, has caused a debate.', g: 'two clauses, two subjects, two finite verbs.' }
        ]
      },
      items: [
        { id: 't6l1s3-1', type: 'cloze', tag: 's6-twofinite', level: 'B2+',
          passage: T6_P1, blank: '(3)', stem: 'Choose the best option for gap (3).',
          options: ['which is funding', 'is funded', 'funds', 'which is funded'],
          answer: 3, near: 1,
          fb: [
            'The clause has a subject, but <em>be</em> + V-ing is active: the scheme would be paying for something, and nothing follows as an object.',
            'The voice is right, but there is no subject for this verb; the sentence already has its main verb, <em>saves</em>.',
            'This is a second finite verb with no subject, and it is active, so the scheme would be the one paying.',
            'Yes. <em>Which</em> gives the clause its own subject, and the scheme receives the money, so the verb is passive.'
          ],
          hint: 'Find the main verb of the sentence first; then decide whether the scheme pays or is paid for.',
          why: 'The main verb of the sentence is <em>saves</em>, so the part between the commas needs its own subject (<em>which</em>), and the scheme receives the money, so it is passive: <em>which is funded</em>. <em>Is funded</em> is the near miss: right voice, but it is a second finite verb with no subject. <em>Funds</em> has the same problem and the wrong voice, and <em>which is funding</em> is active continuous with no object.' },

        { id: 't6l1s3-2', type: 'choose', tag: 's6-twofinite', level: 'B2+',
          stem: 'Khao Yai, ______ as one of the finest national parks in Asia, receives more than a million visitors a year.',
          options: ['is widely regarded', 'which widely regards', 'which is widely regarded', 'widely regards'],
          answer: 2, near: 0,
          fb: [
            'The voice is right, but this is a second finite verb with no subject; the sentence already has its main verb, <em>receives</em>.',
            'The clause has a subject, but the active makes the park the one doing the judging, and <em>regard</em> would need an object.',
            'Yes. <em>Which</em> gives the clause its own subject, and the park receives the judgement, so the verb is passive.',
            'This has no subject and the wrong voice: a park does not judge anything here.'
          ],
          hint: 'Count the finite verbs: the sentence already has one. Then ask whether the park does the judging or receives it.',
          why: 'The main verb is <em>receives</em>, so the gap between the commas needs its own subject, <em>which</em>. People regard the park as one of the finest, so the park receives the action: <em>which is widely regarded</em>. <em>Is widely regarded</em> is the near miss, the two-finite-verb trap. <em>Which widely regards</em> and <em>widely regards</em> are active, which would make the park the judge, and the second one also lacks a subject.' },

        { id: 't6l1s3-3', type: 'spot', tag: 's6-twofinite', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Thai cuisine, is often described', 'as a balance of five flavours,', 'has become popular', 'all over the world.'],
          answer: 0, fix: 'Thai cuisine, which is often described',
          hint: 'Every finite verb needs its own subject; count the finite verbs and the subjects in this sentence.',
          why: 'The main clause is <em>Thai cuisine … has become popular</em>. The phrase between the commas adds a second finite verb, <em>is described</em>, with no subject of its own. Add <em>which</em> (<em>Thai cuisine, which is often described as…</em>), or drop <em>is</em> to make a reduced clause (<em>Thai cuisine, often described as…</em>). The other three parts are correct.' },

        { id: 't6l1s3-4', type: 'build', tag: 's6-twofinite', level: 'B2+',
          stem: 'Build one sentence with a relative clause. Use every tile.',
          tiles: ['has caused', 'the report', 'last week', 'which', 'a heated debate', 'was published'],
          solution: 'the report which was published last week has caused a heated debate',
          alt: ['the report which has caused a heated debate was published last week'],
          hint: 'One finite verb belongs to the main clause and one to the relative clause; the relative pronoun goes straight after the noun it describes.',
          why: '<em>The report which was published last week has caused a heated debate.</em> The relative clause <em>which was published last week</em> has its own subject and finite verb, and the main clause, <em>the report … has caused a heated debate</em>, has its own. Each finite verb has one subject. Swapping the two clauses also works: <em>the report which has caused a heated debate was published last week</em>.' },

        { id: 't6l1s3-5', type: 'choose', tag: 's6-twofinite', level: 'B2+',
          stem: 'The heatwave, ______ temperatures of 44°C to Tak province, has forced many schools to close early.',
          options: ['which brought', 'which was brought', 'was bringing', 'brought'],
          answer: 0, near: 1,
          fb: [
            'Yes. <em>Which</em> gives the clause a subject, and the heatwave did the bringing, with <em>temperatures of 44°C</em> as the object.',
            'The clause has a subject, but the passive makes the heatwave the thing being brought, and then <em>temperatures of 44°C</em> has no job.',
            'This is a second finite verb with no subject; the main verb of the sentence is <em>has forced</em>.',
            'Without a relative pronoun, this is either a second finite verb with no subject or a passive phrase, and the heatwave was not brought by anyone.'
          ],
          hint: 'Find the main verb, then look straight after the gap: does an object follow?',
          why: 'The main verb is <em>has forced</em>, so the extra verb needs its own subject, <em>which</em>. The heatwave did the action, and <em>temperatures of 44°C</em> is the object, so the clause is active: <em>which brought</em>. <em>Which was brought</em> is the near miss, with the subject in place but the wrong voice. <em>Was bringing</em> has no subject, and <em>brought</em> on its own either lacks a subject or makes the heatwave the thing brought.' }
      ]
    }
  ],
  check: { id: 't6l1ck', name: 'Stage Check · Passives in relative clauses', items: [

    { id: 't6l1ck-1', type: 'cloze', tag: 's6-relpass', level: 'B2',
      passage: T6_P1, blank: '(4)', stem: 'Choose the best option for gap (4).',
      options: ['then uses', 'is then used', 'then used', 'then using'],
      answer: 1, near: 2,
      fb: [
        'This active makes the rainwater the user, and <em>use</em> would then need an object.',
        'Yes. <em>Which</em> stands for the rainwater, the rainwater receives the action, and <em>is</em> gives the clause a finite verb.',
        'This is the bare-V3 trap: after <em>which</em> it reads as an active past verb with no object.',
        'A V-ing form alone is not a finite verb, and its active meaning makes the rainwater the user.'
      ],
      hint: 'Rewrite the relative clause with the rainwater as its subject and check that it has a finite verb in the right voice.',
      why: 'The rainwater is used by the system, so the relative clause is passive and needs a finite <em>be</em>: <em>which is then used</em>. <em>Then used</em> is the near miss, the bare-V3 trap. <em>Then uses</em> is active, which makes the rainwater the user and leaves <em>use</em> without an object, and <em>then using</em> has no finite verb at all.' },

    { id: 't6l1ck-2', type: 'cloze', tag: 's6-relact', level: 'B2',
      passage: T6_P1, blank: '(5)', stem: 'Choose the best option for gap (5).',
      options: ['who have tried', 'who have been tried', 'have tried', 'who trying'],
      answer: 0, near: 1,
      fb: [
        'Yes. The visitors did the trying, <em>the new units</em> is the object, and <em>who</em> gives the clause its own subject.',
        'This passive makes the visitors the thing being tried (it even sounds like a court case), and <em>the new units</em> is left without a job.',
        'This is a second finite verb with no subject; the sentence already has <em>have given</em>.',
        'The clause has a subject but no finite verb; a V-ing form alone cannot be the verb of a relative clause.'
      ],
      hint: 'Look at the noun phrase after the gap and ask whether the visitors act on it.',
      why: 'The visitors did the trying, and <em>the new units</em> is the object, so the clause is active: <em>who have tried</em>. <em>Who have been tried</em> is the near miss: a passive with a subject, but it makes the visitors the thing tested and strands the object. <em>Have tried</em> creates a second finite verb with no subject, and <em>who trying</em> has no finite verb.' },

    { id: 't6l1ck-3', type: 'choose', tag: 's6-twofinite', level: 'B2+',
      stem: 'Pad thai, ______ by the government in the 1940s as a national dish, is now eaten all over the world.',
      options: ['which promoted', 'was promoted', 'which was promoted', 'promoting'],
      answer: 2, near: 1,
      fb: [
        'The clause has a subject, but the active makes the dish the promoter, and <em>promote</em> would need an object.',
        'The voice is right, but this is a second finite verb with no subject; the main verb of the sentence is <em>is eaten</em>.',
        'Yes. <em>Which</em> gives the clause a subject, and the dish received the promotion from the government.',
        'An active V-ing phrase makes the dish the promoter, which is the wrong doer.'
      ],
      hint: 'Find the main verb, then decide whether the dish promoted something or was promoted.',
      why: 'The main verb is <em>is eaten</em>, so the extra verb needs its own subject, <em>which</em>. The government did the promoting and the dish received it, so the clause is passive: <em>which was promoted</em>. <em>Was promoted</em> is the near miss, a second finite verb with no subject. <em>Which promoted</em> and <em>promoting</em> are active and turn the dish into the promoter.' },

    { id: 't6l1ck-4', type: 'choose', tag: 's6-relpass', level: 'B2',
      stem: 'Most of the plastic ______ into the Chao Phraya River ends up in the Gulf of Thailand.',
      options: ['that throws', 'that thrown', 'that are thrown', 'that is thrown'],
      answer: 3, near: 2,
      fb: [
        'This active makes the plastic the thrower, and <em>throw</em> would need an object.',
        'A V3 alone after <em>that</em> gives the clause no finite verb.',
        'The voice is right, but <em>plastic</em> is uncountable, so <em>be</em> must be singular.',
        'Yes. People throw the plastic, and <em>is</em> agrees with the uncountable noun <em>plastic</em>.'
      ],
      hint: 'Check who does the throwing, then make be agree with the real head noun, not with a word nearby.',
      why: 'People throw the plastic, so the relative clause is passive, and <em>plastic</em> is uncountable, so <em>be</em> is singular: <em>that is thrown</em>. <em>That are thrown</em> is the near miss, with the wrong agreement (perhaps pulled by <em>most</em>). <em>That throws</em> is active, and <em>that thrown</em> has no finite verb.' },

    { id: 't6l1ck-5', type: 'spot', tag: 's6-twofinite', level: 'B2',
      stem: 'One of the four parts is wrong. Find it.',
      words: ['The temple', 'that we visited yesterday', 'built', 'in the fourteenth century.'],
      answer: 2, fix: 'was built',
      hint: 'A relative clause has a verb, but the main clause needs its own finite verb as well.',
      why: 'The relative clause <em>that we visited yesterday</em> has its own subject and verb, but the main clause, <em>The temple … in the fourteenth century</em>, has no finite verb. The temple received the building, so it needs <em>was built</em>. Without <em>was</em>, the sentence is only a long noun phrase. The other three parts are correct.' },

    { id: 't6l1ck-6', type: 'choose', tag: 's6-relpass', level: 'B2',
      stem: 'Patients ______ to the new hospital in Nonthaburi receive a smart wristband that tracks their heart rate.',
      options: ['who admit', 'who are admitted', 'are admitted', 'who admitting'],
      answer: 1, near: 2,
      fb: [
        'This active makes the patients the ones who admit, which changes the meaning (to admit can mean to confess) and leaves no object.',
        'Yes. <em>Who</em> gives the clause a subject, and the hospital admits the patients, so the verb is passive.',
        'The voice is right, but this is a second finite verb with no subject; the main verb is <em>receive</em>.',
        'The clause has a subject but no finite verb, and the V-ing form makes the patients the doers.'
      ],
      hint: 'Ask who lets the patients into the hospital, and check that the extra verb has its own subject.',
      why: 'The hospital admits the patients, so the patients receive the action: <em>who are admitted</em>. <em>Are admitted</em> is the near miss, with the right voice but no subject, while the sentence already has <em>receive</em>. <em>Who admit</em> is active and turns the patients into the doers, and <em>who admitting</em> has no finite verb.' }
  ] }
});

/* ---------------------------------------------------------------- LEVEL 2 */
var T6_P2 = 'Why Teenagers Stay Up Late\n\nMany Thai teenagers go to bed long after midnight, a habit ___(6)___ as "revenge bedtime procrastination." The term describes people who give up sleep to win back the free time ___(7)___ from them during a busy day. A survey of 2,000 students ___(8)___ by a Bangkok university last year found that more than half regularly slept less than six hours a night. Students ___(9)___ long hours at tutoring schools after class were the most affected. Doctors also warn that the blue light ___(10)___ by phone screens can delay sleep by up to an hour.';

T6.levels.push({
  id: 't6l2', n: 2, name: 'Reduced passive clauses', cefr: 'B2+',
  blurb: 'Drop which and be, and the V3 phrase hangs straight off the noun. Learn when you can drop them, when you need V-ing instead, and when the gap needs a full verb.',
  subs: [

    /* ------------------------------------------------------------ 2.1 */
    {
      id: 't6l2s1', name: 'noun + V3 phrase: a trend known as…, the money raised last year', cefr: 'B2+',
      theory: {
        key: 'Drop <em>which/that</em> + <em>be</em> from a passive relative clause and the V3 phrase sits straight after the noun: <em>the road (which was) damaged by the floods</em>.',
        body: [
          'Long passive relative clauses are often shortened. <em>The photos which were taken on the trip</em> becomes <em>the photos taken on the trip</em>. Remove the relative pronoun and <em>be</em>; keep the V3 and everything after it. The result is a reduced passive clause, and it works like a long adjective after the noun.',
          'This V3 is not a verb of the sentence. It has no tense and no subject of its own, so the sentence still needs its main finite verb somewhere else: <em>The photos taken on the trip <b>have been posted</b>.</em> If you put <em>were</em> back without <em>which</em>, you create a second finite verb and the sentence breaks.',
          'You will meet this pattern again and again in reading passages: <em>a test said to be the hardest in the world</em>, <em>rice grown in Isan</em>, <em>a method described in this report</em>. A-Level 2569 tested it directly with <em>IQ scores rose steadily, a trend ___ as the "Flynn Effect"</em>.',
          'Check the meaning before you shorten: the noun must receive the action. Watch verb pairs that look alike: money is <em>raised</em> (someone collects it), but prices <em>rise</em> (nobody does it to them).'
        ],
        simple: [
          '<em>The cake which was made by Fah</em> → <em>the cake made by Fah</em>.',
          'Drop <em>which/that</em> and <em>be</em>. Keep the V3.',
          'The sentence still needs its own main verb: <em>The cake made by Fah <b>was</b> delicious.</em>'
        ],
        examples: [
          { s: 'The road <b>damaged</b> by the floods has finally reopened.', g: 'short for the road which was damaged; the main verb is has reopened.' },
          { s: 'Jasmine rice <b>grown</b> in Surin is sold all over the world.', g: 'the rice is grown; the main verb is is sold.' },
          { s: 'Most of the food <b>served</b> in the canteen is cooked on site.', g: 'served is a reduced clause; is cooked is the main verb.' },
          { s: '<s>The old cinema was closed in 2010 is now a bookshop.</s>', g: 'two finite verbs; write the old cinema closed in 2010 is now a bookshop.' }
        ]
      },
      items: [
        { id: 't6l2s1-1', type: 'cloze', tag: 's6-reduced', level: 'B2+',
          passage: T6_P2, blank: '(6)', stem: 'Choose the best option for gap (6).',
          options: ['known', 'is known', 'knowing', 'which known'],
          answer: 0, near: 1,
          fb: [
            'Yes. <em>A habit …</em> is a noun phrase that sums up the clause before it, and the V3 phrase describes that habit: people call it this name.',
            'A noun phrase cannot carry a finite verb; the sentence already has its main verb, <em>go</em>.',
            'An active V-ing phrase makes the habit the one who knows, which is the wrong meaning.',
            'This has a relative pronoun but no finite verb; <em>which</em> needs <em>is</em> before the V3.'
          ],
          hint: 'The sentence already has its main verb; the words after the comma are a noun phrase, so ask what kind of phrase can follow that noun.',
          why: 'The sentence already has its main verb (<em>go</em>), and <em>a habit …</em> is a noun phrase that sums up the clause before it. People call the habit by this name, so it receives the action, and the reduced passive phrase fits: <em>a habit known as…</em>. <em>Is known</em> is the near miss, the finite trap from A-Level 2569. <em>Knowing</em> is active, and <em>which known</em> is missing <em>is</em>.' },

        { id: 't6l2s1-2', type: 'choose', tag: 's6-reduced', level: 'B2+',
          stem: 'The money ______ at this year\'s charity run will be spent on books for schools in Nan.',
          options: ['was raised', 'raising', 'raised', 'rose'],
          answer: 2, near: 0,
          fb: [
            'This puts a second finite verb into a sentence that already has <em>will be spent</em>, and it has no subject of its own.',
            'An active V-ing phrase makes the money the one doing the collecting.',
            'Yes. The runners collected the money, so it receives the action, and the V3 phrase shortens <em>which was …</em>.',
            'This verb never takes an object (prices go up by themselves), and here it would also be a second finite verb.'
          ],
          hint: 'Find the main verb of the sentence first, then ask whether the money does something or has something done to it.',
          why: 'The main verb is <em>will be spent</em>, so the gap needs a reduced phrase, and the money was collected by the runners, so it is passive: <em>the money raised at…</em>. <em>Was raised</em> is the near miss: the right verb, but a second finite verb without <em>which</em>. <em>Raising</em> is active, and <em>rose</em> is the past of <em>rise</em>, a verb with no object and no passive, used here as a second finite verb.' },

        { id: 't6l2s1-3', type: 'equiv', tag: 's6-reduced', level: 'B2+',
          given: 'The photos which were taken on the class trip to Chiang Rai have been posted on the school page.',
          stem: 'Which sentence is the correct shortened version?',
          options: [
            'The photos were taken on the class trip to Chiang Rai have been posted on the school page.',
            'The photos taken on the class trip to Chiang Rai have been posted on the school page.',
            'The photos taking on the class trip to Chiang Rai have been posted on the school page.',
            'The photos took on the class trip to Chiang Rai have been posted on the school page.'
          ],
          answer: 1, near: 0,
          fb: [
            'Removing <em>which</em> but keeping <em>were</em> leaves two finite verbs and one subject.',
            'Yes. <em>Which were</em> is dropped and the V3 phrase stays straight after the noun.',
            'An active V-ing phrase makes the photos the photographers.',
            'This is a past-tense active verb, so the photos seem to have taken something, and the sentence has two finite verbs.'
          ],
          hint: 'To shorten a passive relative clause, remove two words and keep the participle; the main verb must not change.',
          why: 'To shorten a passive relative clause, drop both <em>which</em> and <em>were</em> and keep the V3: <em>The photos taken on the class trip…</em>. The main verb, <em>have been posted</em>, stays. The version with <em>were taken</em> is the near miss: it keeps <em>be</em> without a subject, giving two finite verbs. <em>Taking</em> is active, and <em>took</em> is a V2, a past active verb.' },

        { id: 't6l2s1-4', type: 'build', tag: 's6-reduced', level: 'B2+',
          stem: 'Build one sentence with a reduced passive clause. Use every tile.',
          tiles: ['will reopen', 'damaged', 'the bridge', 'next month', 'in the storm'],
          solution: 'the bridge damaged in the storm will reopen next month',
          alt: ['next month the bridge damaged in the storm will reopen'],
          hint: 'The V3 phrase goes straight after the noun it describes; the finite verb belongs to the main clause.',
          why: '<em>The bridge damaged in the storm will reopen next month.</em> The V3 phrase <em>damaged in the storm</em> sits straight after <em>the bridge</em> and is short for <em>which was damaged in the storm</em>. The only finite verb is <em>will reopen</em>. <em>Next month</em> can also open the sentence.' },

        { id: 't6l2s1-5', type: 'choose', tag: 's6-reduced', level: 'B2+',
          stem: 'Most of the coffee ______ in Thailand comes from the hills of Chiang Rai and Nan.',
          options: ['producing', 'is produced', 'produces', 'produced'],
          answer: 3, near: 1,
          fb: [
            'An active V-ing phrase makes the coffee the producer, which is the wrong doer.',
            'This is a finite verb with no subject of its own; the sentence already has its main verb, <em>comes</em>.',
            'This is an active finite verb: the coffee would be producing something, and the sentence would have two finite verbs.',
            'Yes. Farmers grow and process the coffee, so it receives the action, and the V3 phrase shortens <em>which is …</em>.'
          ],
          hint: 'Find the main verb first; then decide whether the coffee does the action or receives it.',
          why: 'The main verb is <em>comes</em>, so the gap needs a non-finite phrase, and the coffee is made by farmers, so it is passive: <em>the coffee produced in Thailand</em>. <em>Is produced</em> is the near miss, with the right voice but no subject, adding a second finite verb. <em>Producing</em> and <em>produces</em> are active, making the coffee the producer.' }
      ]
    },

    /* ------------------------------------------------------------ 2.2 */
    {
      id: 't6l2s2', name: 'V3 or V-ing after a noun: the students invited / the students inviting', cefr: 'B2+',
      theory: {
        key: 'After a noun, a V3 phrase means the noun receives the action; a V-ing phrase means the noun does it.',
        body: [
          'Both participles can follow a noun and shorten a relative clause. <em>The students who are taking part</em> becomes <em>the students taking part</em>. <em>The students who were chosen</em> becomes <em>the students chosen</em>. The form you keep tells the reader the voice: V-ing is active, V3 is passive.',
          'So run the Decision Test on the noun. <em>The boy standing at the gate</em>: the boy does the standing. <em>The clothes donated to the shelter</em>: the clothes receive the donating. Swap the forms and the meaning breaks: <em>clothes donating</em> would make the clothes generous people.',
          'Then look at what comes after the gap. An object straight after the participle (<em>___ long hours</em>, <em>___ a red helmet</em>) means V-ing. A <em>by</em>-phrase, or a place or time phrase with no object, usually goes with V3.',
          'Do not choose by time. V-ing and V3 have no tense of their own: <em>the teams chosen last year</em> and <em>the teams chosen next week</em> are both fine. The time comes from the rest of the sentence.'
        ],
        simple: [
          'V-ing after a noun: the noun does it. <em>a boy wearing glasses</em>',
          'V3 after a noun: the noun receives it. <em>a phone made in Korea</em>',
          'An object after the gap means V-ing.'
        ],
        examples: [
          { s: 'The boy <b>standing</b> at the gate is Mint\'s brother.', g: 'the boy does the standing: active, V-ing.' },
          { s: 'The clothes <b>donated</b> to the shelter were sorted by volunteers.', g: 'the clothes receive the donating: passive, V3.' },
          { s: 'Anyone <b>needing</b> help with the form should ask at the office.', g: 'needing has an object (help), so it is active.' },
          { s: '<s>The people waited outside the hospital were worried.</s>', g: 'the people did the waiting, so use waiting.' }
        ]
      },
      items: [
        { id: 't6l2s2-1', type: 'cloze', tag: 's6-edving', level: 'B2+',
          passage: T6_P2, blank: '(9)', stem: 'Choose the best option for gap (9).',
          options: ['spent', 'are spending', 'who spending', 'spending'],
          answer: 3, near: 0,
          fb: [
            'A V3 phrase gives the students a passive meaning, as if someone had spent them, and leaves <em>long hours</em> without a job.',
            'This is a second finite verb with no subject; the sentence already has its main verb, <em>were</em>.',
            'This has a relative pronoun but no finite verb; a V-ing form cannot be the verb of the clause on its own.',
            'Yes. The students do the spending, and <em>long hours</em> is its object.'
          ],
          hint: 'Ask whether the students do the action, and check whether an object comes straight after the gap.',
          why: 'The students do the action, and <em>long hours</em> is the object, so the reduced clause is active: <em>Students spending long hours…</em> (= who spend). <em>Spent</em> is the near miss: it gives a passive meaning and strands the object. <em>Are spending</em> adds a second finite verb next to <em>were</em>, and <em>who spending</em> has no finite verb.' },

        { id: 't6l2s2-2', type: 'choose', tag: 's6-edving', level: 'B2+',
          stem: 'All students ______ in the English camp must hand in the consent form by Friday.',
          options: ['taken part', 'taking part', 'take part', 'took part'],
          answer: 1, near: 0,
          fb: [
            'A V3 phrase gives a passive meaning, and <em>take part</em> cannot be passive: nobody "takes part" the students.',
            'Yes. The students do the action, so the reduced clause is active.',
            'This is a second finite verb with no subject; the main verb of the sentence is <em>must hand in</em>.',
            'This is a past finite verb with no subject of its own, clashing with <em>must hand in</em>.'
          ],
          hint: 'Does the noun do the action or receive it? Then check that the sentence keeps only one finite verb.',
          why: 'The students do the action, so the reduced clause is active: <em>All students taking part in the English camp…</em> (= who are taking part). <em>Taken part</em> is the near miss: a V3 gives a passive meaning, and this verb has no object to promote. <em>Take part</em> and <em>took part</em> are finite verbs with no subject, clashing with <em>must hand in</em>.' },

        { id: 't6l2s2-3', type: 'choose', tag: 's6-edving', level: 'B2+',
          stem: 'The players ______ for the national under-17 team will start training in Chiang Mai next week.',
          options: ['selecting', 'were selected', 'selected', 'select'],
          answer: 2, near: 1,
          fb: [
            'An active V-ing phrase makes the players the ones doing the choosing.',
            'The voice is right, but this is a second finite verb with no subject; the main verb is <em>will start</em>.',
            'Yes. The coaches choose the players, so the players receive the action, and the V3 phrase follows the noun.',
            'This is an active finite verb with no subject of its own, next to <em>will start</em>.'
          ],
          hint: 'Ask who chooses whom, and remember that the sentence already has its main verb.',
          why: 'The coaches choose the players, so the players receive the action: <em>The players selected for the team…</em> (= who were selected). <em>Were selected</em> is the near miss, with the right voice but no subject, giving the sentence two finite verbs. <em>Selecting</em> and <em>select</em> are active and make the players the selectors.' },

        { id: 't6l2s2-4', type: 'sort', tag: 's6-edving', level: 'B2+',
          stem: 'V-ing or V3? Decide whether the noun does the action or receives it, then sort each phrase.',
          bins: [
            { key: 'ing', label: 'noun + V-ing', hint: 'The noun does the action (active meaning).' },
            { key: 'ed', label: 'noun + V3', hint: 'The noun receives the action (passive meaning).' }
          ],
          items: [
            { text: 'the girl … next to Ploy <em>(sit)</em>', bin: 'ing' },
            { text: 'the souvenirs … to tourists at Chatuchak <em>(sell)</em>', bin: 'ed' },
            { text: 'a man … a red helmet <em>(wear)</em>', bin: 'ing' },
            { text: 'the lessons … by T.Chris <em>(teach)</em>', bin: 'ed' },
            { text: 'a path … to the waterfall <em>(lead)</em>', bin: 'ing' },
            { text: 'the cakes … for the party this morning <em>(bake)</em>', bin: 'ed' }
          ],
          hint: 'Ask who does each action; an object after the gap points one way, a by-phrase or a time phrase often the other.',
          why: 'V-ing (the noun does it): the girl sitting next to Ploy, a man wearing a red helmet, a path leading to the waterfall. V3 (the noun receives it): the souvenirs sold to tourists, the lessons taught by T.Chris, the cakes baked this morning. Notice that <em>a path</em> is a thing but still takes V-ing: it does the leading.' },

        { id: 't6l2s2-5', type: 'choose', tag: 's6-edving', level: 'B2+',
          stem: 'The number of foreign tourists ______ Phuket rose by twenty per cent last year.',
          options: ['visiting', 'visited', 'visits', 'visit'],
          answer: 0, near: 1,
          fb: [
            'Yes. The tourists do the visiting, and <em>Phuket</em> is the object.',
            'A V3 phrase gives the tourists a passive meaning, and then <em>Phuket</em> has no job in the sentence.',
            'This is a finite verb, so the sentence now has two (the main verb is <em>rose</em>), and it does not even agree with <em>tourists</em>.',
            'This is a second finite verb with no subject of its own; the main verb of the sentence is <em>rose</em>.'
          ],
          hint: 'Look at the word straight after the gap: is it an object of the action?',
          why: 'The tourists visit Phuket, and <em>Phuket</em> is the object, so the reduced clause is active: <em>tourists visiting Phuket</em>. <em>Visited</em> is the near miss: a V3 phrase gives a passive meaning (tourists who were visited) and strands the object. <em>Visits</em> and <em>visit</em> are finite verbs, which give the sentence a second verb next to <em>rose</em>.' }
      ]
    },

    /* ------------------------------------------------------------ 2.3 */
    {
      id: 't6l2s3', name: 'The finite trap: a trend is known as… when the sentence already has its verb', cefr: 'C1',
      theory: {
        key: 'Before you choose, count finite verbs: if the sentence already has its main verb, the gap after a noun takes a participle; if it has none, the gap must supply it.',
        body: [
          'Here is the trap from A-Level 2569: <em>IQ scores rose steadily, ___ as the "Flynn Effect."</em> The options were <em>a trend known</em>, <em>a trend, known</em>, <em>a trend is known</em> and <em>a trend, is known</em>. The sentence already has its main verb (<em>rose</em>), and <em>a trend …</em> is a noun phrase that sums up the clause before it. A noun phrase cannot carry a finite verb, so both options with <em>is</em> are out.',
          'The comma is the second trap. A defining phrase tells you which thing you mean, so it is glued to its noun, and no comma comes between them. A single comma in that slot cuts the noun off from the phrase that identifies it, and nothing closes it again.',
          'The trap works in both directions. If the sentence has no finite verb yet, a bare V3 is the mistake. <em>✗ The stadium designed by a Thai architect.</em> is only a noun phrase. <em>The stadium was designed by a Thai architect.</em> is a sentence.',
          'So the routine is always the same: (1) find the main subject; (2) find its finite verb; (3) if the verb is already there, the gap is non-finite; if it is missing, the gap supplies it.'
        ],
        simple: [
          'Find the main verb of the sentence first.',
          'Already there? Then the gap is a V3 phrase, with no <em>is/are</em> and no comma: <em>a dance called "khon"</em>.',
          'Not there? Then the gap needs <em>is/was</em> + V3.'
        ],
        examples: [
          { s: 'The study, <b>published</b> in March, found that most teenagers sleep too little.', g: 'found is the main verb, so published stays non-finite.' },
          { s: 'Fah learned a dance <b>called</b> "fon leb" at school.', g: 'learned is the main verb; called is part of the noun phrase.' },
          { s: '<s>Prices rose fast, a trend is described in this report.</s>', g: 'a noun phrase cannot hold a second finite verb; write a trend described in this report.' },
          { s: 'The stadium <b>was designed</b> by a Thai architect.', g: 'there is no other verb here, so the gap must be finite.' }
        ]
      },
      items: [
        { id: 't6l2s3-1', type: 'cloze', tag: 's6-commatrap', level: 'C1',
          passage: T6_P2, blank: '(8)', stem: 'Choose the best option for gap (8).',
          options: ['which carried out', 'carrying out', 'carried out', 'was carried out'],
          answer: 2, near: 3,
          fb: [
            'The clause has a subject, but the active makes the students the researchers, and <em>carry out</em> needs an object.',
            'An active V-ing phrase makes the students the ones conducting something.',
            'Yes. The sentence already has its main verb, <em>found</em>, so the gap takes a V3 phrase describing the survey.',
            'This adds a second finite verb with no subject; the sentence already has its main verb, <em>found</em>.'
          ],
          hint: 'Find the subject of the sentence and its finite verb before you look at the options.',
          why: 'The subject is <em>A survey of 2,000 students</em> and its finite verb is <em>found</em>, so the gap must be non-finite, and the survey was conducted by the university: <em>carried out</em> (= which was carried out). <em>Was carried out</em> is the near miss, the finite trap: it gives the sentence two finite verbs. <em>Carrying out</em> is active, and <em>which carried out</em> is active with no object.' },

        { id: 't6l2s3-2', type: 'choose', tag: 's6-commatrap', level: 'C1',
          stem: 'Many rice farmers in Isan now use ______ as "alternate wetting and drying" to cut their water use by a third.',
          options: ['a method known', 'a method is known', 'a method which known', 'a method knowing'],
          answer: 0, near: 1,
          fb: [
            'Yes. <em>Use</em> is the main verb, and the V3 phrase after the noun tells you which method.',
            'This puts a finite verb inside the object of <em>use</em>; the sentence already has its main verb.',
            'This has a relative pronoun but no finite verb; <em>which</em> would need <em>is</em> before the V3.',
            'An active V-ing phrase makes the method the one who knows, which is the wrong meaning.'
          ],
          hint: 'Find the main verb first; the gap is part of its object, a noun phrase, so ask what can follow the noun inside it.',
          why: 'The main verb is <em>use</em>, and the gap is its object, a noun phrase. People call the method by this name, so the V3 phrase follows the noun with no finite verb: <em>a method known as…</em>. <em>A method is known</em> is the near miss, the finite trap: it puts a second finite verb inside a noun phrase. <em>A method which known</em> is missing <em>is</em>, and <em>a method knowing</em> is active.' },

        { id: 't6l2s3-3', type: 'spot', tag: 's6-commatrap', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Next year, doctors', 'will begin trials of', 'a new dengue vaccine', 'is developed at Mahidol University.'],
          answer: 3, fix: 'developed at Mahidol University.',
          hint: 'Find the finite verb of the sentence; anything describing a noun after it cannot add another.',
          why: 'The sentence already has its finite verb, <em>will begin</em>. The phrase after <em>a new dengue vaccine</em> describes the vaccine, so it must be a reduced V3 phrase: <em>a new dengue vaccine developed at Mahidol University</em>. With <em>is</em>, the sentence has two finite verbs and the second has no subject. The other three parts are correct.' },

        { id: 't6l2s3-4', type: 'choose', tag: 's6-commatrap', level: 'C1',
          stem: 'The new law, ______ last month, bans the sale of e-cigarettes near schools.',
          options: ['it passed', 'passing', 'was passed', 'passed'],
          answer: 3, near: 2,
          fb: [
            'Adding <em>it</em> creates a second clause inside the first, joined by nothing: two subjects and two finite verbs for one sentence.',
            'An active V-ing phrase makes the law the one doing the approving.',
            'The voice is right, but this is a second finite verb with no subject; the sentence already has <em>bans</em>.',
            'Yes. <em>Bans</em> is the main verb, and the V3 phrase between the commas adds information about the law.'
          ],
          hint: 'Find the main verb of the sentence; whatever sits between the commas must not compete with it.',
          why: 'The main verb is <em>bans</em>, so the phrase between the commas must be non-finite, and parliament approved the law, so it is passive: <em>The new law, passed last month, bans…</em>. <em>Was passed</em> is the near miss, the finite trap. <em>It passed</em> adds a whole second clause with nothing to join it, and <em>passing</em> is active.' },

        { id: 't6l2s3-5', type: 'choose', tag: 's6-commatrap', level: 'C1',
          stem: 'The Flynn effect ______ after James Flynn, the researcher who first described it.',
          options: ['named', 'is named', 'naming', 'names'],
          answer: 1, near: 0,
          fb: [
            'This sentence has no other finite verb, so a V3 alone leaves it as a noun phrase with no verb.',
            'Yes. This is the only main verb in the sentence, and the effect receives its name from someone.',
            'A V-ing form is not finite, and it makes the effect the one giving names.',
            'This is finite, but it is active: the effect would be giving a name to something, and <em>name</em> would need an object.'
          ],
          hint: 'Look for the main verb of the sentence. If you cannot find one, the gap must supply it.',
          why: 'This time the sentence has no main verb: <em>who first described it</em> belongs to a relative clause. So the gap must supply a finite verb, and the effect receives its name: <em>is named</em>. <em>Named</em> is the near miss, the trap in the other direction: a bare V3 leaves only a noun phrase. <em>Naming</em> is non-finite and active, and <em>names</em> is finite but active, so the effect would be the one giving names.' }
      ]
    }
  ],
  check: { id: 't6l2ck', name: 'Stage Check · Reduced passive clauses', items: [

    { id: 't6l2ck-1', type: 'cloze', tag: 's6-edving', level: 'B2+',
      passage: T6_P2, blank: '(7)', stem: 'Choose the best option for gap (7).',
      options: ['taken', 'taking', 'is taken', 'which took'],
      answer: 0, near: 1,
      fb: [
        'Yes. The busy day removes the free time, so the time receives the action, and the V3 phrase follows the noun.',
        'An active V-ing phrase makes the free time the one removing something from them.',
        'This is a finite verb with no subject inside an infinitive phrase; it cannot follow the noun directly.',
        'This active makes the time the doer, and <em>take</em> would then need an object.'
      ],
      hint: 'Does the free time do the action, or does something happen to it? Remember the gap follows a noun.',
      why: 'The free time is removed from them, so it receives the action, and the V3 phrase follows the noun: <em>the free time taken from them</em> (= which is taken). <em>Taking</em> is the near miss, with an active meaning that makes the time the taker. <em>Is taken</em> is a finite verb with no subject, and <em>which took</em> is active.' },

    { id: 't6l2ck-2', type: 'cloze', tag: 's6-reduced', level: 'B2+',
      passage: T6_P2, blank: '(10)', stem: 'Choose the best option for gap (10).',
      options: ['giving off', 'is given off', 'gives off', 'given off'],
      answer: 3, near: 1,
      fb: [
        'An active V-ing phrase makes the light the thing producing something, and the screens are the producers here.',
        'This is a second finite verb with no subject; the clause after <em>that</em> already has <em>can delay</em>.',
        'This is an active finite verb: two finite verbs for one subject, and the wrong doer.',
        'Yes. The screens produce the light, so the light receives the action, and the V3 phrase follows the noun.'
      ],
      hint: 'Find the finite verb of the clause after that; then ask whether the light produces or is produced.',
      why: 'The clause <em>the blue light … can delay sleep</em> already has its finite verb, <em>can delay</em>, and the screens produce the light, so the light receives the action: <em>the blue light given off by phone screens</em>. <em>Is given off</em> is the near miss, adding a second finite verb. <em>Giving off</em> and <em>gives off</em> are active and make the light the producer.' },

    { id: 't6l2ck-3', type: 'choose', tag: 's6-commatrap', level: 'C1',
      stem: 'Phi Ta Khon, a festival ______ every year in Loei\'s Dan Sai district, is famous for its colourful ghost masks.',
      options: ['is held', 'held', 'holding', 'which held'],
      answer: 1, near: 0,
      fb: [
        'A noun phrase cannot carry a finite verb, and the sentence already has its main verb, <em>is famous</em>.',
        'Yes. <em>A festival …</em> is a noun phrase, the festival is organised by the town, and the sentence already has its main verb.',
        'An active V-ing phrase makes the festival the organiser, and <em>hold</em> would need an object.',
        'This has a relative pronoun but an active verb with no object, so the festival seems to hold something.'
      ],
      hint: 'The words between the commas are a noun phrase describing the festival; the sentence already has its main verb.',
      why: 'The main verb is <em>is famous</em>, and <em>a festival …</em> is a noun phrase giving more information about Phi Ta Khon. The festival is organised by the town, so the reduced passive fits: <em>a festival held every year…</em>. <em>Is held</em> is the near miss, the finite trap. <em>Holding</em> and <em>which held</em> are active and make the festival the organiser.' },

    { id: 't6l2ck-4', type: 'choose', tag: 's6-edving', level: 'B2+',
      stem: 'Anyone ______ a fever after the school trip should see a doctor at once.',
      options: ['developed', 'develops', 'developing', 'develop'],
      answer: 2, near: 0,
      fb: [
        'A V3 phrase gives a passive meaning, as if the person had been developed by someone, and leaves <em>a fever</em> without a job.',
        'This is a finite verb, so the sentence now has two; the main verb is <em>should see</em>.',
        'Yes. The person does the action, and <em>a fever</em> is its object.',
        'This is a finite verb with no subject of its own, and it does not agree with <em>anyone</em>.'
      ],
      hint: 'Look at the noun phrase straight after the gap, and remember the sentence already has its main verb.',
      why: 'The person gets the fever, and <em>a fever</em> is the object, so the reduced clause is active: <em>Anyone developing a fever</em> (= who develops). <em>Developed</em> is the near miss: it gives a passive meaning and strands the object. <em>Develops</em> and <em>develop</em> are finite verbs that clash with <em>should see</em>.' },

    { id: 't6l2ck-5', type: 'equiv', tag: 's6-reduced', level: 'B2+',
      given: 'Many of the songs that are sung at Thai weddings today were written in the 1970s.',
      stem: 'Which sentence is the correct shortened version?',
      options: [
        'Many of the songs singing at Thai weddings today were written in the 1970s.',
        'Many of the songs are sung at Thai weddings today were written in the 1970s.',
        'Many of the songs sung at Thai weddings today written in the 1970s.',
        'Many of the songs sung at Thai weddings today were written in the 1970s.'
      ],
      answer: 3, near: 1,
      fb: [
        'An active V-ing phrase makes the songs the singers.',
        'Dropping <em>that</em> but keeping <em>are</em> leaves two finite verbs for one subject.',
        'This has dropped the main verb too: the whole sentence is now just a long noun phrase.',
        'Yes. <em>That are</em> is dropped, the V3 phrase follows the noun, and the main verb stays.'
      ],
      hint: 'Shorten only the relative clause; the main verb of the sentence must stay exactly as it is.',
      why: 'Drop <em>that are</em> and keep the V3: <em>the songs sung at Thai weddings today</em>, with the main verb <em>were written</em> unchanged. The version with <em>are sung</em> is the near miss: it keeps <em>be</em> without a subject. <em>Singing</em> makes the songs the singers, and the version without <em>were</em> has lost its main verb.' },

    { id: 't6l2ck-6', type: 'build', tag: 's6-edving', level: 'B2+',
      stem: 'Build one sentence. Use every tile.',
      tiles: ['will fail', 'during the exam', 'students', 'using', 'caught', 'phones', 'the subject'],
      solution: 'students caught using phones during the exam will fail the subject',
      alt: [],
      hint: 'One participle shows something done to the students, the other shows what they were doing; only one verb is finite.',
      why: '<em>Students caught using phones during the exam will fail the subject.</em> <em>Caught</em> is a V3 phrase because the students receive the action (teachers catch them); <em>using phones</em> is V-ing because the students do the using, with <em>phones</em> as the object. The only finite verb is <em>will fail</em>.' }
  ] }
});

/* ---------------------------------------------------------------- LEVEL 3 */
var T6_P3 = 'Bamboo Shoots: Delicious, but Handle with Care\n\nFresh bamboo shoots, which ___(11)___ in northern Thai curries and soups, contain a natural toxin and can be harmful ___(12)___. Fortunately, the toxin breaks down quickly in heat. ___(13)___ in the right way, the shoots are completely safe to eat, which is why cooks in Chiang Mai and Nan always boil them before adding them to a dish. Most canned shoots ___(14)___ at the factory, so they can go straight from the tin into the pot. When ___(15)___ fresh shoots at a market, ask the seller when they were cut: the fresher they are, the sweeter they taste.';

T6.levels.push({
  id: 't6l3', n: 3, name: 'Elliptical clauses and adverbs', cefr: 'C1',
  blurb: 'Short clauses after if, once and when, adverbs inside the passive, and V3 clauses that open a sentence.',
  subs: [

    /* ------------------------------------------------------------ 3.1 */
    {
      id: 't6l3s1', name: 'if / when / unless / once + V3: if not prepared correctly', cefr: 'C1',
      theory: {
        key: 'After <em>if, when, unless, once</em> and <em>although</em>, the subject and <em>be</em> can be dropped, leaving the V3, but only when the main subject is the thing that receives the action.',
        body: [
          '<em>If it is not prepared correctly, the fish can make you ill</em> becomes <em>If not prepared correctly, the fish can make you ill.</em> The subject (<em>it</em>) and <em>be</em> (<em>is</em>) disappear, and the conjunction and the V3 phrase stay. This elliptical passive appeared in A-Level 2568.',
          'The missing subject is always the subject of the main clause. In <em>Once printed, the tickets cannot be changed</em>, the things printed are the tickets. So the test is simple: put the main subject back in and check that the full passive makes sense: <em>once the tickets are printed</em>.',
          'If the main subject does the action, keep the active and use V-ing: <em>When crossing the road, look both ways.</em> You cross the road. An object straight after the gap is the clue.',
          'Check the word form as well. An adverb describes the verb, so <em>if not prepared <b>correctly</b></em>, not <em>correct</em>; <em>unless stored <b>properly</b></em>, not <em>proper</em>.'
        ],
        simple: [
          '<em>If it is not cooked well</em> can become <em>if not cooked well</em>.',
          'Drop the subject and <em>be</em>. Keep the V3.',
          'The missing subject is the main subject. If that subject does the action, use V-ing.'
        ],
        examples: [
          { s: 'If not <b>stored</b> properly, fresh milk goes off within a day.', g: 'if it is not stored properly: the milk receives the storing.' },
          { s: 'Once <b>printed</b>, the tickets cannot be changed.', g: 'once the tickets are printed.' },
          { s: 'When <b>crossing</b> the road, look both ways.', g: 'you cross the road, so V-ing (active).' },
          { s: '<s>Unless keeping cold, the vaccine stops working.</s>', g: 'the vaccine is kept cold; write unless kept cold.' }
        ]
      },
      items: [
        { id: 't6l3s1-1', type: 'cloze', tag: 's6-ellip', level: 'C1',
          passage: T6_P3, blank: '(12)', stem: 'Choose the best option for gap (12).',
          options: ['if not boiling properly', 'if not boiled properly', 'if not proper boiled', 'if not boiled proper'],
          answer: 1, near: 3,
          fb: [
            'An active V-ing form makes the shoots the ones doing the cooking. Put the subject back: the shoots are not the cooks.',
            'Yes. The hidden words are <em>they are</em>: the shoots receive the action, and an adverb describes how it is done.',
            'The V3 is right, but an adjective cannot describe a verb, and it cannot sit before the V3 here.',
            'The V3 is right, but this word describes how the action is done, so it needs the adverb form.'
          ],
          hint: 'Put back the hidden subject and be after if not, then check the voice and the word form.',
          why: 'The hidden words are <em>if [they are] not boiled properly</em>: the shoots receive the action, so V3, and the word describing the verb is an adverb. <em>If not boiled proper</em> is the near miss, with the right V3 but an adjective where an adverb is needed. <em>If not proper boiled</em> has the same word-form error, and <em>if not boiling properly</em> is active, making the shoots the cooks. This mirrors A-Level 2568 #67.' },

        { id: 't6l3s1-2', type: 'choose', tag: 's6-ellip', level: 'C1',
          stem: 'This eye medicine must be kept in the fridge once ______ and thrown away after four weeks.',
          options: ['opening', 'it opened', 'opened', 'is opened'],
          answer: 2, near: 1,
          fb: [
            'An active V-ing form makes the medicine the one doing the opening.',
            'Adding a subject is fine, but this verb is active and past, so the medicine seems to have done the action itself, at some time in the past.',
            'Yes. The hidden words are <em>it is</em>: the medicine receives the action.',
            'The voice is right, but a finite verb needs a subject, and the subject has been dropped.'
          ],
          hint: 'Put the hidden subject and be back after once, then read the clause aloud.',
          why: 'The full clause is <em>once [it is] opened</em>: the medicine receives the action, so the elliptical passive keeps only the V3. <em>It opened</em> is the near miss: it puts a subject back but makes the verb active and past. <em>Opening</em> is active, and <em>is opened</em> keeps <em>be</em> but has no subject.' },

        { id: 't6l3s1-3', type: 'choose', tag: 's6-ellip', level: 'C1',
          stem: 'Unless ______ otherwise, students must wear full school uniform on all school trips.',
          options: ['told', 'telling', 'they told', 'are told'],
          answer: 0, near: 3,
          fb: [
            'Yes. The hidden words are <em>they are</em>: teachers give the instruction, and the students receive it.',
            'An active V-ing form makes the students the ones giving the instruction.',
            'This active makes the students the speakers, and <em>tell</em> would need a person as its object.',
            'The voice is right, but a finite verb needs a subject, and the subject has been dropped.'
          ],
          hint: 'The missing subject is the main subject of the sentence; put it back with be and check who gives the instruction.',
          why: 'The full clause is <em>unless [they are] told otherwise</em>: the students receive the instruction, so only the V3 stays. <em>Are told</em> is the near miss, keeping <em>be</em> without a subject. <em>Telling</em> and <em>they told</em> are active and make the students the ones giving the instruction.' },

        { id: 't6l3s1-4', type: 'choose', tag: 's6-ellip', level: 'C1',
          stem: 'Always check the expiry date when ______ medicine online.',
          options: ['ordered', 'is ordered', 'you ordered', 'ordering'],
          answer: 3, near: 0,
          fb: [
            'A V3 gives the hidden subject a passive meaning, as if you were being ordered, and then <em>medicine</em> has no job.',
            'This is a finite passive with no subject, and the passive leaves <em>medicine</em> without a role.',
            'The voice is right, but the past tense does not fit a general instruction about any time you buy.',
            'Yes. The hidden subject is <em>you</em>, you do the action, and <em>medicine</em> is the object.'
          ],
          hint: 'The hidden subject is the person told to check; do they do the action? Look for an object after the gap.',
          why: 'The hidden subject is <em>you</em> (the person told to check), you do the action, and <em>medicine</em> is the object, so the elliptical clause is active: <em>when ordering medicine online</em>. <em>Ordered</em> is the near miss: it gives a passive meaning and strands the object. <em>Is ordered</em> has no subject and the wrong voice, and <em>you ordered</em> uses a past tense that does not fit a general instruction.' },

        { id: 't6l3s1-5', type: 'build', tag: 's6-ellip', level: 'C1',
          stem: 'Build one sentence that starts with a short clause. Use every tile.',
          tiles: ['can spread', 'if', 'treated', 'the infection', 'not', 'quickly'],
          solution: 'if not treated quickly the infection can spread',
          alt: ['the infection can spread if not treated quickly', 'if not quickly treated the infection can spread', 'the infection can spread if not quickly treated'],
          hint: 'The short clause drops its subject and be; its hidden subject must be the main subject of the sentence.',
          why: '<em>If not treated quickly, the infection can spread.</em> The full clause is <em>if [it is] not treated quickly</em>: the infection receives the treatment, so V3, and <em>quickly</em> is the adverb. The clause can also come at the end: <em>the infection can spread if not treated quickly</em>.' }
      ]
    },

    /* ------------------------------------------------------------ 3.2 */
    {
      id: 't6l3s2', name: 'Adverb and word form: is well prepared, are conveniently scheduled', cefr: 'B2+',
      theory: {
        key: 'In a passive, an adverb usually sits between <em>be</em> and the V3, and it must be an adverb (<em>well</em>, <em>clearly</em>), not an adjective (<em>good</em>, <em>clear</em>).',
        body: [
          'An adverb that describes how the action is done usually goes in the middle: <em>is <b>well</b> prepared</em>, <em>are <b>conveniently</b> scheduled</em>, <em>was <b>carefully</b> checked</em>. Both of the first two have appeared as keys in Thai entrance exams (วิชาสามัญ 2564 and 2555).',
          'It must be an adverb. <em>Good</em>, <em>careful</em> and <em>clear</em> are adjectives; they describe nouns. A V3 is part of a verb, so it takes <em>well</em>, <em>carefully</em>, <em>clearly</em>: <em>✗ is good prepared</em>, <em>✗ were careful checked</em>.',
          'Do not let the adverb decide the voice. <em>Thai dramas <b>regularly</b> top the charts in China</em> is active: the dramas do it, and <em>the charts</em> is the object. Run the Decision Test on the verb first, then put the adverb in its slot.',
          'Keep the V3 after the adverb. <em>Are widely using</em> is active continuous, so it means the subject is doing the using; for a passive meaning you need <em>are widely used</em>.'
        ],
        simple: [
          'Put the adverb between <em>be</em> and the V3: <em>is well made</em>.',
          'Use an adverb (<em>well</em>, <em>carefully</em>), not an adjective (<em>good</em>, <em>careful</em>).',
          'Still check the voice: if the subject does the action, the verb is active.'
        ],
        examples: [
          { s: 'Generation Z <b>is well prepared</b> for a global job market.', g: 'the adverb well sits between be and the V3.' },
          { s: 'The night buses <b>are poorly lit</b>, so many passengers feel unsafe.', g: 'poorly is the adverb form of poor.' },
          { s: 'Thai dramas <b>regularly top</b> the charts in China.', g: 'active: the dramas do it, and the charts are the object.' },
          { s: '<s>The exam papers were careful marked by two teachers.</s>', g: 'use the adverb carefully before the V3.' }
        ]
      },
      items: [
        { id: 't6l3s2-1', type: 'cloze', tag: 's6-adverb', level: 'B2+',
          passage: T6_P3, blank: '(11)', stem: 'Choose the best option for gap (11).',
          options: ['widely using', 'widely use', 'are wide used', 'are widely used'],
          answer: 3, near: 2,
          fb: [
            'After <em>which</em>, a V-ing form alone gives the clause no finite verb, and its meaning is active.',
            'This active makes the shoots the users, and <em>use</em> would need an object.',
            'The passive is right, but an adjective cannot describe a V3; it needs the adverb form.',
            'Yes. Cooks use the shoots, so the clause is passive, and the adverb sits between <em>be</em> and the V3.'
          ],
          hint: 'Decide whether the shoots use something or are used, then check the word form of the middle word.',
          why: 'Cooks use the shoots, so the relative clause is passive, and the word describing the verb must be an adverb: <em>which are widely used</em>. <em>Are wide used</em> is the near miss: right voice, wrong word form. <em>Widely use</em> is active and makes the shoots the users, and <em>widely using</em> has no finite verb.' },

        { id: 't6l3s2-2', type: 'choose', tag: 's6-adverb', level: 'B2+',
          stem: 'Our school\'s science labs are ______, so students can do almost any experiment on campus.',
          options: ['well equipped', 'good equipped', 'well equipping', 'good equipping'],
          answer: 0, near: 1,
          fb: [
            'Yes. The labs receive the equipment, and the adverb describes how fully that was done.',
            'The V3 is right, but <em>good</em> is an adjective; a V3 needs the adverb form.',
            '<em>Be</em> + V-ing is active: the labs would be doing the equipping.',
            'This has two errors: an adjective before the verb, and an active V-ing form.'
          ],
          hint: 'Choose the voice first, then remember that a word describing a verb must be an adverb.',
          why: 'The labs have received their equipment, so the verb is passive, and the word describing it must be the adverb: <em>are well equipped</em>. <em>Good equipped</em> is the near miss, with the adjective in the adverb slot. <em>Well equipping</em> and <em>good equipping</em> are active continuous, making the labs the ones supplying equipment.' },

        { id: 't6l3s2-3', type: 'choose', tag: 's6-adverb', level: 'B2+',
          stem: 'The new road signs in Bangkok are easy to follow because they ______ in both Thai and English.',
          options: ['clearly write', 'are clear written', 'are clearly written', 'clearly writing'],
          answer: 2, near: 1,
          fb: [
            'This active makes the signs the writers, and <em>write</em> would need an object.',
            'The passive is right, but <em>clear</em> is an adjective; a V3 needs the adverb form.',
            'Yes. Someone wrote the signs, so they are passive, and the adverb sits between <em>be</em> and the V3.',
            'A V-ing form alone is not a finite verb, and it is active, so the signs would be doing the writing.'
          ],
          hint: 'Ask whether the signs write or are written, then check that the middle word can describe a verb.',
          why: 'The signs do not write anything; someone wrote them, so the verb is passive: <em>are clearly written</em>, with the adverb between <em>be</em> and the V3. <em>Are clear written</em> is the near miss, with the adjective form. <em>Clearly write</em> is active and makes the signs the writers, and <em>clearly writing</em> has no finite verb.' },

        { id: 't6l3s2-4', type: 'spot', tag: 's6-adverb', level: 'B2+',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The results', 'of the competition', 'were careful checked', 'before they were announced.'],
          answer: 2, fix: 'were carefully checked',
          hint: 'A word that describes how an action was done must be an adverb, even inside a passive.',
          why: '<em>Careful</em> is an adjective, but here it describes how the checking was done, so it must be the adverb <em>carefully</em>: <em>were carefully checked</em>. The voice is right, because the results received the checking. The other three parts are correct.' },

        { id: 't6l3s2-5', type: 'choose', tag: 's6-adverb', level: 'B2+',
          stem: 'Thai pop groups ______ fans from all over Asia to their concerts in Bangkok.',
          options: ['are increasingly attracted', 'increasingly attract', 'are increasing attracting', 'increasing attract'],
          answer: 1, near: 0,
          fb: [
            'The adverb is fine, but the passive makes the groups the ones being drawn in, and then <em>fans</em> has no job.',
            'Yes. The groups do the attracting, <em>fans</em> is the object, and the adverb sits before the verb.',
            'This has a V-ing where an adverb is needed, and an active continuous with two -ing forms in a row.',
            'This uses a V-ing form where an adverb is needed, so the sentence has no proper verb.'
          ],
          hint: 'Look at the noun straight after the gap: is it an object? Then check the word form of the adverb.',
          why: 'The pop groups do the attracting, and <em>fans</em> is the object, so the verb is active: <em>increasingly attract</em>, with the adverb before the verb. <em>Are increasingly attracted</em> is the near miss: a correct passive form, but it makes the groups the ones attracted and strands <em>fans</em>. The other two use <em>increasing</em> where an adverb is needed.' }
      ]
    },

    /* ------------------------------------------------------------ 3.3 */
    {
      id: 't6l3s3', name: 'Clauses that open the sentence: Built in 1782, the palace…; the subject must be the thing built', cefr: 'C1',
      theory: {
        key: 'A V3 clause at the start of a sentence describes the subject after the comma, so that subject must be the thing that received the action.',
        body: [
          'English writers often open a sentence with a reduced passive clause: <em>Built in 1782, the Grand Palace was home to the kings of Siam.</em> It is short for <em>The Grand Palace was built in 1782, and it…</em>. The opening clause has no subject of its own; it borrows the subject of the main clause.',
          'That is where the danger is. <em>✗ Built in 1782, millions of tourists visit the palace.</em> Now the sentence says the tourists were built in 1782. This is called a dangling participle. Fix it by making the right noun the main subject, often with a passive main clause: <em>Built in 1782, the palace is visited by millions of tourists.</em>',
          'V3 or V-ing at the front? Use the same test as before. If the main subject receives the action, open with V3: <em>Surrounded by rice fields, the school…</em>. If the main subject does it, open with V-ing: <em>Looking out of the window, Pim…</em>. An object straight after the gap (<em>___ the map</em>) means V-ing.',
          'Do not add a subject and <em>be</em> to the opening clause. <em>✗ It was built in 1782, the palace…</em> joins two sentences with only a comma.'
        ],
        simple: [
          '<em>Built in 1782, the palace…</em> means the palace was built in 1782.',
          'The noun after the comma must be the thing the opening clause describes.',
          'If that noun does the action, start with V-ing instead.'
        ],
        examples: [
          { s: '<b>Surrounded</b> by rice fields, the school is quiet all year.', g: 'the school is surrounded by the fields.' },
          { s: '<b>Written</b> in 1932, the song is still sung at school events.', g: 'the song was written in 1932.' },
          { s: '<b>Looking</b> out of the window, Pim saw the parade.', g: 'Pim did the looking, so V-ing.' },
          { s: '<s>Built in the 13th century, tourists love the old city.</s>', g: 'the tourists were not built; make the city the subject.' }
        ]
      },
      items: [
        { id: 't6l3s3-1', type: 'cloze', tag: 's6-front', level: 'C1',
          passage: T6_P3, blank: '(13)', stem: 'Choose the best option for gap (13).',
          options: ['Preparing', 'Having prepared', 'Prepared', 'They are prepared'],
          answer: 2, near: 0,
          fb: [
            'An active V-ing opening makes the shoots the cooks: the subject after the comma would be doing the preparing.',
            'This active perfect form also makes the shoots the cooks, as if they had done the work themselves.',
            'Yes. The opening clause describes <em>the shoots</em>, and the shoots receive the action.',
            'A full clause before the comma gives two sentences joined only by a comma.'
          ],
          hint: 'The opening clause borrows the subject that comes after the comma; ask whether that subject does the action or receives it.',
          why: 'The opening clause borrows the main subject, <em>the shoots</em>, and the shoots receive the action, so it opens with V3: <em>[If they are] prepared in the right way, the shoots are completely safe</em>. <em>Preparing</em> is the near miss: right position, but active, so the shoots become the cooks. <em>Having prepared</em> is active too, and <em>They are prepared</em> creates a comma splice.' },

        { id: 't6l3s3-2', type: 'choose', tag: 's6-front', level: 'C1',
          stem: '______ with thousands of pieces of Chinese porcelain, the towers of Wat Arun sparkle in the evening sun.',
          options: ['Decorating', 'They are decorated', 'Having decorated', 'Decorated'],
          answer: 3, near: 0,
          fb: [
            'An active V-ing opening makes the towers the decorators, doing the work themselves.',
            'A full clause before the comma joins two sentences with only a comma.',
            'This active perfect form says the towers did the decorating.',
            'Yes. The opening clause describes <em>the towers</em>, and the towers received the porcelain.'
          ],
          hint: 'Find the subject straight after the comma; the opening clause must describe it with the right voice.',
          why: 'The subject after the comma is <em>the towers of Wat Arun</em>, and the towers received the porcelain, so the opening clause is a V3 phrase: <em>Decorated with…</em>. <em>Decorating</em> is the near miss: it opens the sentence correctly but makes the towers the workers. <em>Having decorated</em> is active too, and <em>They are decorated</em> makes a comma splice.' },

        { id: 't6l3s3-3', type: 'equiv', tag: 's6-front', level: 'C1',
          given: 'The Grand Palace was built in 1782. Millions of tourists visit it every year.',
          stem: 'Which sentence joins the two ideas correctly?',
          options: [
            'Built in 1782, millions of tourists visit the Grand Palace every year.',
            'Built in 1782, the Grand Palace is visited by millions of tourists every year.',
            'Building in 1782, the Grand Palace is visited by millions of tourists every year.',
            'Having built in 1782, the Grand Palace is visited by millions of tourists every year.'
          ],
          answer: 1, near: 0,
          fb: [
            'The opening is fine, but the noun after the comma is <em>millions of tourists</em>, so the sentence says the tourists date from 1782.',
            'Yes. The opening V3 clause describes the palace, and a passive main clause keeps the palace as the subject.',
            'An active V-ing opening makes the palace the builder.',
            'This active perfect form also makes the palace the one that did the building.'
          ],
          hint: 'The opening clause describes the first noun after the comma; make sure that noun is the thing that received the action.',
          why: 'The opening V3 clause must describe the main subject, so the palace has to come straight after the comma, which needs a passive main clause: <em>Built in 1782, the Grand Palace is visited by millions of tourists every year.</em> The <em>by</em>-phrase earns its place here because the tourists are the new information. The version starting with the tourists is the near miss, a dangling participle. <em>Building</em> and <em>Having built</em> make the palace the builder.' },

        { id: 't6l3s3-4', type: 'choose', tag: 's6-front', level: 'C1',
          stem: '______ the map carefully, Mint found the quickest way to the museum.',
          options: ['Studying', 'Studied', 'Being studied', 'She studied'],
          answer: 0, near: 1,
          fb: [
            'Yes. Mint does the action, and <em>the map</em> is its object.',
            'A V3 opening describes Mint as the thing that received the action, and then <em>the map</em> has no job.',
            'This passive form says Mint was being examined by someone, and leaves <em>the map</em> without a role.',
            'A full clause before the comma joins two sentences with only a comma.'
          ],
          hint: 'The opening clause borrows the subject after the comma; check whether that person does the action and whether an object follows.',
          why: 'The opening clause borrows the subject <em>Mint</em>, Mint does the action, and <em>the map</em> is the object, so it opens with V-ing: <em>Studying the map carefully, Mint…</em>. <em>Studied</em> is the near miss: a V3 opening would mean Mint was examined, and it strands the object. <em>Being studied</em> is passive too, and <em>She studied</em> makes a comma splice.' },

        { id: 't6l3s3-5', type: 'order', tag: 's6-front', level: 'C1',
          stem: 'Put the sentences in order to make a short paragraph. Each opening clause must fit the subject after its comma.',
          items: [
            'Sukhothai, in the lower north of Thailand, was the capital of a powerful kingdom in the 13th and 14th centuries.',
            'Abandoned for centuries, its temples were slowly covered by the forest.',
            'Restored in the 1970s and 1980s, they now form one of Thailand\'s best-known historical parks.',
            'Visited at sunrise, the park is quiet, cool and almost empty.'
          ],
          hint: 'Follow the time order and the pronouns; each opening V3 clause must describe the noun or pronoun after its comma.',
          why: 'The paragraph moves through time: the capital, then its abandonment, then the restoration, then the park today. The pronouns link the sentences: <em>its temples</em> needs Sukhothai before it, <em>they</em> needs the temples, and <em>the park</em> needs the historical park. In each sentence, the opening V3 clause describes the subject straight after the comma: the temples were abandoned, the temples were restored, the park is visited.' }
      ]
    }
  ],
  check: { id: 't6l3ck', name: 'Stage Check · Elliptical clauses and adverbs', items: [

    { id: 't6l3ck-1', type: 'cloze', tag: 's6-adverb', level: 'B2+',
      passage: T6_P3, blank: '(14)', stem: 'Choose the best option for gap (14).',
      options: ['are thoroughly cooked', 'are thorough cooked', 'thoroughly cook', 'are thoroughly cooking'],
      answer: 0, near: 1,
      fb: [
        'Yes. The factory cooks the shoots, so they receive the action, and the adverb sits between <em>be</em> and the V3.',
        'The passive is right, but an adjective cannot describe a V3; it needs the adverb form.',
        'This active makes the canned shoots the cooks, and <em>cook</em> would need an object here.',
        '<em>Be</em> + V-ing is active continuous: the shoots would be cooking right now, which does not fit tinned food.'
      ],
      hint: 'Decide whether the shoots do the action or receive it at the factory, then check the word form in the middle.',
      why: 'The factory cooks the shoots, so the verb is passive, and the adverb goes between <em>be</em> and the V3: <em>are thoroughly cooked</em>. <em>Are thorough cooked</em> is the near miss, with the adjective form. <em>Thoroughly cook</em> is active and makes the shoots the cooks, and <em>are thoroughly cooking</em> describes something happening now, which cannot be true of food already in a tin.' },

    { id: 't6l3ck-2', type: 'cloze', tag: 's6-ellip', level: 'C1',
      passage: T6_P3, blank: '(15)', stem: 'Choose the best option for gap (15).',
      options: ['bought', 'buying', 'are bought', 'you bought'],
      answer: 1, near: 0,
      fb: [
        'A V3 gives the hidden subject a passive meaning, as if you were being bought, and then <em>fresh shoots</em> has no job.',
        'Yes. The hidden subject is <em>you</em>, you do the action, and <em>fresh shoots</em> is the object.',
        'This finite passive has no subject, and the passive leaves <em>fresh shoots</em> without a role.',
        'The voice is right, but the past tense does not fit a general instruction about any time you shop.'
      ],
      hint: 'The hidden subject is the person told to ask; do they do the action? Look for an object after the gap.',
      why: 'The hidden subject is <em>you</em>, the person told to ask the seller. You do the action, and <em>fresh shoots</em> is the object, so the elliptical clause is active: <em>When buying fresh shoots…</em>. <em>Bought</em> is the near miss: it gives a passive meaning and strands the object. <em>Are bought</em> has no subject, and <em>you bought</em> uses a past tense that does not fit a general instruction.' },

    { id: 't6l3ck-3', type: 'choose', tag: 's6-front', level: 'C1',
      stem: 'Located on a mountain above the city, ______.',
      options: [
        'visitors get a stunning view of Chiang Mai from the temple',
        'there is a stunning view of Chiang Mai from the temple',
        'you can see the whole of Chiang Mai from the temple',
        'the temple offers a stunning view of Chiang Mai'
      ],
      answer: 3, near: 0,
      fb: [
        'The noun after the comma is <em>visitors</em>, so the sentence says the visitors sit on a mountain.',
        'After the comma comes <em>there</em>, which is not a thing that can be located anywhere, so the opening clause has nothing to describe.',
        'The noun after the comma is <em>you</em>, so the sentence says you are located on the mountain.',
        'Yes. The opening clause describes the first noun after the comma, and that noun is the thing on the mountain.'
      ],
      hint: 'The opening V3 clause describes the first noun after the comma. Which thing is actually on the mountain?',
      why: 'The opening clause <em>Located on a mountain above the city</em> borrows the main subject, so that subject must be the thing on the mountain: <em>the temple offers a stunning view</em>. The version with <em>visitors</em> is the near miss: natural meaning, but a dangling participle that puts the visitors on the mountain. <em>There is</em> gives the clause nothing to describe, and <em>you can see</em> puts you on the mountain.' },

    { id: 't6l3ck-4', type: 'choose', tag: 's6-ellip', level: 'C1',
      stem: 'Although ______ as the weaker side, Thailand\'s volleyball team reached the final.',
      options: ['seeing', 'was seen', 'seen', 'they saw'],
      answer: 2, near: 0,
      fb: [
        'An active V-ing form makes the team the ones doing the judging.',
        'The voice is right, but a finite verb needs a subject, and the subject has been dropped.',
        'Yes. The hidden words are <em>it was</em>: other people judged the team, and the team received that judgement.',
        'This active makes the team the ones judging, and <em>see</em> would need an object.'
      ],
      hint: 'Put the hidden subject and be back after although, then ask who did the judging.',
      why: 'The full clause is <em>although [it was] seen as the weaker side</em>: other people judged the team, so the elliptical clause keeps only the V3, followed by <em>as</em> and the role. <em>Seeing</em> is the near miss, with an active meaning that makes the team the judge. <em>Was seen</em> has no subject, and <em>they saw</em> is active and needs an object.' },

    { id: 't6l3ck-5', type: 'choose', tag: 's6-adverb', level: 'B2+',
      stem: 'Your essay ______, but it needs a stronger conclusion.',
      options: ['is well organised', 'is good organised', 'well organises', 'is well organising'],
      answer: 0, near: 1,
      fb: [
        'Yes. You organised the essay, so it receives the action, and the adverb sits between <em>be</em> and the V3.',
        'The passive is right, but <em>good</em> is an adjective; a V3 needs the adverb form.',
        'This active makes the essay the organiser, and <em>organise</em> would need an object.',
        '<em>Be</em> + V-ing is active: the essay would be organising something.'
      ],
      hint: 'Decide whether the essay does the organising, then check that the middle word is an adverb.',
      why: 'The writer organised the essay, so the verb is passive, with the adverb between <em>be</em> and the V3: <em>is well organised</em>. <em>Is good organised</em> is the near miss, with the adjective form. <em>Well organises</em> and <em>is well organising</em> are active and make the essay the organiser.' },

    { id: 't6l3ck-6', type: 'spot', tag: 's6-ellip', level: 'C1',
      stem: 'One of the four parts is wrong. Find it.',
      words: ['The driver', 'refused to comment', 'on the accident', 'when asking by reporters.'],
      answer: 3, fix: 'when asked by reporters.',
      hint: 'Put the hidden subject and be back into the short clause and check who does the action.',
      why: 'The hidden subject of the short clause is <em>the driver</em>, and the reporters did the asking, so the clause is passive: <em>when [he was] asked by reporters</em>. <em>When asking by reporters</em> makes the driver the questioner and does not fit the <em>by</em>-phrase. The other three parts are correct.' }
  ] }
});

TOPICS.push(T6);
