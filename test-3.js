/* ===========================================================================
   TEST 3 — m3 · MOCK TEST 3, C1
   Twenty items in the same Part 3 shape as Mock Test 2, at C1: reduced and
   fronted clauses, reporting passives with perfect infinitives, academic
   it-passives, causatives, the subjunctive, two-finite-verb traps and
   items where the active is the right answer.
   =========================================================================== */

var M3_P1 = 'Some years ago, fishermen working off the eastern coast of Thailand ___(11)___ fragments of blue-and-white pottery tangled in their nets. The find led archaeologists to a wreck, ___(12)___ as one of the most significant ever discovered in Thai waters. The ship is believed ___(13)___ a port in southern China in the 1650s, carrying porcelain bound for the markets of Ayutthaya.\n\nExcavating the site has been slow and difficult. Visibility on the seabed rarely exceeds a metre, and every object must be photographed and mapped before it ___(14)___ to the surface. Even so, the work has already changed the way historians picture the period. ___(15)___ that the cargo offers a clearer view of the kingdom\'s trade with its neighbours than any written record of the time.';

var M3_P2 = 'Should secondary schools start later in the morning? A growing body of research suggests that they should. During adolescence the body clock shifts, so most teenagers ___(16)___ sleepy until well after eleven at night. When lessons begin at half past seven, the result is chronic tiredness, a problem that ___(17)___ to lower grades and poorer mental health.\n\nA pilot scheme at several Bangkok schools, ___(18)___ last year, moved the first lesson to nine o\'clock. Early results are encouraging: attendance has improved, teachers report that students are more alert, and students ___(19)___ far less often for falling asleep in class. The researchers behind the study have recommended that the scheme ___(20)___ to more schools next year, although they admit that a later timetable can create problems for working parents.';

MOCKS.push({
  id: 'm3',
  name: 'Mock Test 3 · C1',
  blurb: 'Twenty questions at C1: reduced clauses, perfect reporting infinitives, academic it-passives, causatives and the subjunctive, with traps where the active is the right answer. Read every gap twice.',
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
        { id: 'm3-1', type: 'choose', tag: 's8-infchoice', level: 'C1',
          stem: 'The palm-leaf manuscript, which surfaced at an auction in Bangkok last year, is thought ______ by a court scribe in the early nineteenth century.',
          options: [
            'to have copied',
            'to be copied',
            'to have been copying',
            'to have been copied'
          ],
          answer: 3, near: 0,
          fb: [
            'Without <em>been</em> this is active, so the manuscript becomes the copier, even though the scribe is named as the doer.',
            'A simple infinitive refers to the present, but the copying happened two centuries ago.',
            'This is active and continuous: the manuscript would be doing the copying.',
            'Yes — an earlier time and a passive meaning: a perfect passive infinitive.'
          ],
          hint: 'Compare the time of <em>is thought</em> with the time of the copying, and ask whether the manuscript did the copying or was copied.',
          why: 'The belief is present but the copying was two centuries earlier, so a perfect infinitive is needed, and the manuscript was copied by the scribe, so it is passive: <em>is thought to have been copied</em>. <em>To have copied</em> is the near miss: the time is right but <em>been</em> is missing, so the manuscript becomes the copier. <em>To be copied</em> puts the copying in the present, and <em>to have been copying</em> is active.' },

        { id: 'm3-2', type: 'choose', tag: 's8-refuse', level: 'C1',
          stem: 'All applicants ______ to submit their portfolios at least two weeks before the interview.',
          options: [
            'are suggested',
            'are advised',
            'are advising',
            'advise'
          ],
          answer: 1, near: 0,
          fb: [
            '<em>Suggest</em> refuses this pattern: it cannot take a person as passive subject followed by a <em>to</em>-infinitive.',
            'Yes — <em>advise</em> allows a person as the passive subject.',
            'This is active: the applicants would be giving the advice, to nobody.',
            'This is active: the applicants would be the advisers, and <em>advise</em> would need a person after it.'
          ],
          hint: 'Not every reporting or recommending verb allows a person as subject + passive + <em>to</em>-infinitive; check the verb as well as the voice.',
          why: '<em>Advise</em> takes a person object (<em>We advise applicants to…</em>), so the person can become the passive subject: <em>All applicants are advised to submit</em>. <em>Are suggested</em> is the near miss: it looks parallel, but <em>suggest</em> only works as <em>It is suggested that…</em>. <em>Are advising</em> and <em>advise</em> are active and leave <em>advise</em> without its object.' },

        { id: 'm3-3', type: 'choose', tag: 's2-thingdoer', level: 'B2',
          stem: 'Rapid urbanisation ______ the city\'s ageing drainage system to its limits, which is why even moderate rain now floods the streets.',
          options: [
            'has pushed',
            'has been pushed',
            'is pushed',
            'pushing'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — an abstract subject can be the doer, and an object follows.',
            'A passive here leaves <em>the city\'s ageing drainage system</em> with no role; look at what follows the gap.',
            'This is passive, yet an object follows the gap; urbanisation is the cause, not the receiver.',
            'An -ing form alone cannot be the main verb of the sentence.'
          ],
          hint: 'An abstract noun can be a doer; look at what comes straight after the gap and ask whether the subject acts on it.',
          why: 'Urbanisation is the cause and the drainage system is the object it acts on, so the active present perfect <em>has pushed</em> is right. <em>Has been pushed</em> is the near miss: right tense, but the passive leaves the object stranded, the classic over-passivising trap with an abstract subject. <em>Is pushed</em> has the same problem, and <em>pushing</em> is not a finite verb.' },

        { id: 'm3-4', type: 'choose', tag: 's6-front', level: 'C1',
          stem: '______, the new MRT line is expected to cut journey times across the city by up to forty minutes.',
          options: [
            'Completing ahead of schedule',
            'Completes ahead of schedule',
            'Completed ahead of schedule',
            'It was completed ahead of schedule'
          ],
          answer: 2, near: 0,
          fb: [
            'An -ing opening clause makes the subject the doer, but the MRT line did not complete anything.',
            'This is a finite verb with no subject of its own; an opening clause before the comma cannot be built this way, and it would make the line the doer.',
            'Yes — a passive participle clause whose subject is the line.',
            'This is a full sentence; joining it to another with only a comma creates a comma splice.'
          ],
          hint: 'An opening participle clause takes its subject from the main clause; ask whether that subject did the action or had it done to it.',
          why: 'The opening clause shares the subject of the main clause, <em>the new MRT line</em>, and the line was completed by builders, so the passive participle clause <em>Completed ahead of schedule</em> is right. <em>Completing ahead of schedule</em> is the near miss: right position, active meaning. <em>Completes</em> is a finite verb with no subject, and <em>It was completed…</em> is a separate sentence joined with only a comma.' },

        { id: 'm3-5', type: 'choose', tag: 's7-contrast', level: 'B2+',
          stem: 'Rather than redesign the website herself, the director ______ an outside agency rebuild it from scratch.',
          options: [
            'got',
            'had',
            'asked',
            'wanted'
          ],
          answer: 1, near: 0,
          fb: [
            'With a person as its object, this verb needs <em>to</em> before the next verb.',
            'Yes — <em>have</em> + person + base form.',
            '<em>Ask</em> + person is followed by a <em>to</em>-infinitive, and there is no <em>to</em> here.',
            '<em>Want</em> + person also takes <em>to</em>, and it expresses only a wish, not an arrangement.'
          ],
          hint: 'Look at the form of the verb after the person: only some causative verbs are followed by a base form without <em>to</em>.',
          why: 'The verb after the agency is a base form, <em>rebuild</em>, and of these verbs only <em>have</em> takes person + base form: <em>had an outside agency rebuild it</em>. <em>Got</em> is the near miss: it means almost the same, but <em>get</em> + person needs <em>to</em> (<em>got an agency to rebuild it</em>). <em>Asked</em> and <em>wanted</em> also need <em>to</em>.' },

        { id: 'm3-6', type: 'choose', tag: 's6-commatrap', level: 'C1',
          stem: 'The coral reefs off Koh Tao, ______ by rising sea temperatures, are now the focus of a major restoration project.',
          options: [
            'were badly damaged',
            'which badly damaged',
            'badly damaging',
            'badly damaged'
          ],
          answer: 3, near: 0,
          fb: [
            'The sentence already has its finite verb (<em>are now the focus</em>); a second one between the commas breaks it.',
            'This active relative clause makes the reefs the ones doing the damage.',
            'An -ing form gives an active meaning, as if the reefs were causing the damage.',
            'Yes — a reduced passive clause between commas.'
          ],
          hint: 'Find the main verb of the sentence first; if it is already there, the words between the commas cannot have a finite verb of their own.',
          why: 'The sentence already has its main verb, <em>are</em>, so the words between the commas must be a reduced clause, and the reefs were damaged, so it is passive: <em>badly damaged by rising sea temperatures</em>. <em>Were badly damaged</em> is the near miss: the meaning is right, but it creates a second finite verb, the trap seen in A-Level 2569 (<em>a trend is known as</em>). <em>Which badly damaged</em> and <em>badly damaging</em> are both active.' }
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
        { id: 'm3-7', type: 'spot', tag: 's8-infchoice', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['The ancient temple near Phimai', 'is said to build', 'by Khmer craftsmen', 'in the eleventh century.'],
          answer: 1,
          fix: 'is said to have been built',
          hint: 'In a reporting passive, the infinitive must show both the time of the action and whether the subject did it or received it.',
          why: 'The building happened about a thousand years ago and the temple was built by craftsmen, so the infinitive must be perfect and passive: <em>is said to have been built</em>. <em>To build</em> is active and present, as if the temple were building something now. <em>By Khmer craftsmen</em> is a correct agent.' },

        { id: 'm3-8', type: 'spot', tag: 's4-having', level: 'C1',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Having warned about the flood risk', 'several days earlier,', 'most villagers had already moved', 'their animals to higher ground.'],
          answer: 0,
          fix: 'Having been warned about the flood risk',
          hint: 'An opening <em>having</em> clause shares the subject of the main clause; ask whether that subject gave the warning or received it.',
          why: 'The villagers received the warning, so the perfect participle clause must be passive: <em>Having been warned about the flood risk</em>. As written, <em>Having warned</em> says the villagers gave the warning. The rest of the sentence is correct.' },

        { id: 'm3-9', type: 'spot', tag: 's2-trend', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Since the new bridge opened,', 'the number of accidents on the old road', 'has been decreased', 'by almost half.'],
          answer: 2,
          fix: 'has decreased',
          hint: 'For changes in numbers, ask whether anyone deliberately changed them or whether the change simply happened.',
          why: 'Nobody "decreased" the accidents; the number simply went down, so the verb is active: <em>has decreased by almost half</em>. Here <em>by</em> introduces the size of the change, not a doer, which makes the passive look tempting. <em>Opened</em> is also correctly active: the bridge opened to traffic.' },

        { id: 'm3-10', type: 'spot', tag: 's7-made', level: 'B2',
          stem: 'One of the four parts is wrong. Find it.',
          words: ['Following the investigation,', 'the two officials', 'who had lied to the committee', 'were made resign within a week.'],
          answer: 3,
          fix: 'were made to resign within a week.',
          hint: 'Active <em>make someone do</em> has no <em>to</em>; check what happens to the next verb when the person becomes the subject.',
          why: 'In the active, <em>make</em> takes a base form (<em>made them resign</em>), but in the passive the <em>to</em> returns: <em>were made to resign</em>. <em>Who had lied to the committee</em> is a correct active relative clause.' }
      ]
    },

    /* ---------------------------------------- PART C: TEXT COMPLETION 1 */
    {
      code: 'C',
      part: 'PART C: TEXT COMPLETION 1',
      title: 'A wreck in the Gulf',
      instructions: 'Read the passage and choose the best option for each numbered gap (11 to 15).',
      points: 1,
      items: [
        { id: 'm3-11', type: 'cloze', tag: 's2-follows', level: 'B2',
          passage: M3_P1,
          blank: '(11)',
          stem: 'Choose the best option for gap (11).',
          options: [
            'were noticed',
            'had been noticed',
            'noticed',
            'noticing'
          ],
          answer: 2, near: 0,
          fb: [
            'An object follows the gap (<em>fragments of … pottery</em>), so a passive leaves it with no role.',
            'This passive makes the fishermen the ones who were seen, and an object still follows.',
            'Yes — the fishermen do the noticing, and an object follows.',
            'An -ing form cannot be the main verb; the sentence still needs a finite verb.'
          ],
          hint: 'Look at what comes straight after the gap: if an object follows, ask who is doing the action to it.',
          why: 'The fishermen did the noticing and <em>fragments of pottery</em> is the object, so the verb is active past simple: <em>noticed</em>. <em>Were noticed</em> is the near miss: it makes the fishermen receivers and strands the object. <em>Had been noticed</em> has the same problem in the wrong tense, and <em>noticing</em> leaves the sentence with no finite verb (<em>working</em> is part of the subject).' },

        { id: 'm3-12', type: 'cloze', tag: 's6-reduced', level: 'C1',
          passage: M3_P1,
          blank: '(12)',
          stem: 'Choose the best option for gap (12).',
          options: [
            'now regarded',
            'is now regarded',
            'now regards',
            'now regarding'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — a reduced passive clause after the noun.',
            'The sentence already has its main verb (<em>led</em>); after the comma you need a reduced clause, not a second finite verb.',
            'This is an active finite verb, and the sentence already has its main verb.',
            'An -ing form gives an active meaning, as if the wreck were regarding something.'
          ],
          hint: 'Check whether the sentence already has its finite verb; then ask whether the wreck does the regarding or is regarded.',
          why: '<em>A wreck, now regarded as…</em> is a reduced form of <em>which is now regarded as…</em>: the sentence already has its verb (<em>led</em>), and the wreck is regarded so by experts. <em>Is now regarded</em> is the near miss: right meaning, but a second finite verb. <em>Now regards</em> and <em>now regarding</em> are both active, as if the wreck were doing the regarding.' },

        { id: 'm3-13', type: 'cloze', tag: 's8-infchoice', level: 'C1',
          passage: M3_P1,
          blank: '(13)',
          stem: 'Choose the best option for gap (13).',
          options: [
            'to have been left',
            'to be leaving',
            'to leave',
            'to have left'
          ],
          answer: 3, near: 0,
          fb: [
            'A passive infinitive leaves <em>a port</em> with no role; the ship did the leaving.',
            'A continuous infinitive describes something in progress now, but the voyage was in the 1650s.',
            'A simple infinitive refers to the same time as <em>is believed</em>, not to the 1650s.',
            'Yes — an earlier event, and the ship is the doer.'
          ],
          hint: 'Compare the time of the belief with the time of the voyage, and look at what comes straight after the gap.',
          why: 'The belief is now but the voyage was in the 1650s, so a perfect infinitive is needed, and the ship left the port (<em>a port</em> is the object), so it is active: <em>is believed to have left</em>. <em>To have been left</em> is the near miss: right time, but passive, which strands the object. <em>To be leaving</em> and <em>to leave</em> both refer to the present.' },

        { id: 'm3-14', type: 'cloze', tag: 's3-future', level: 'B2',
          passage: M3_P1,
          blank: '(14)',
          stem: 'Choose the best option for gap (14).',
          options: [
            'will be lifted',
            'is lifted',
            'lifts',
            'is lifting'
          ],
          answer: 1, near: 0,
          fb: [
            'After <em>before</em>, <em>when</em> or <em>until</em>, English uses a present form for a future event.',
            'Yes — a present passive after <em>before</em>.',
            'This is active: the object would be lifting itself, and <em>lift</em> would need an object.',
            '<em>Be</em> + V-ing is active: the object would be doing the lifting.'
          ],
          hint: 'In a time clause after <em>before</em>, think about which tense English uses for the future, then ask who does the lifting.',
          why: 'Divers lift the objects, so the verb is passive, and after <em>before</em> English uses the present for a future event: <em>before it is lifted to the surface</em>. <em>Will be lifted</em> is the near miss: right voice, but <em>will</em> is not used in this kind of time clause. <em>Lifts</em> and <em>is lifting</em> make the object do the lifting.' },

        { id: 'm3-15', type: 'cloze', tag: 's8-argued', level: 'C1',
          passage: M3_P1,
          blank: '(15)',
          stem: 'Choose the best option for gap (15).',
          options: [
            'It can be argued',
            'It can argue',
            'It can be arguing',
            'One can be argued'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — an academic <em>it</em> + modal passive.',
            'Without a passive, <em>it</em> would be a real subject doing the arguing, but there is nothing for <em>it</em> to refer to.',
            'This is an active continuous form; an empty <em>it</em> cannot argue.',
            '<em>One</em> means a person, and a person cannot be "argued"; this pattern needs an empty subject.'
          ],
          hint: 'Academic writers often introduce a cautious claim with an empty <em>it</em> and a reporting verb; ask who is doing the arguing.',
          why: 'In academic writing, <em>It can be argued that…</em> introduces a claim without naming who makes it: the <em>it</em> is empty and the reporting verb is passive. <em>It can argue</em> is the near miss: it treats <em>it</em> as a real subject doing the arguing. <em>It can be arguing</em> is active continuous, and <em>One can be argued</em> makes a person the thing argued.' }
      ]
    },

    /* ---------------------------------------- PART D: TEXT COMPLETION 2 */
    {
      code: 'D',
      part: 'PART D: TEXT COMPLETION 2',
      title: 'Later school start times',
      instructions: 'Read the passage and choose the best option for each numbered gap (16 to 20).',
      points: 1,
      items: [
        { id: 'm3-16', type: 'cloze', tag: 's2-doer', level: 'B2',
          passage: M3_P2,
          blank: '(16)',
          stem: 'Choose the best option for gap (16).',
          options: [
            'are not felt',
            'do not felt',
            'do not feel',
            'not feeling'
          ],
          answer: 2, near: 0,
          fb: [
            'This passive makes the teenagers the thing that is felt, but they are the ones experiencing the feeling.',
            'After <em>do</em>, the verb must be in the base form.',
            'Yes — the teenagers experience the feeling, so the verb is active.',
            'An -ing form cannot be the main verb of this clause.'
          ],
          hint: 'Ask whether the subject experiences the feeling or receives an action from someone else, and check the form after any auxiliary.',
          why: 'Teenagers are the ones who feel sleepy, so the verb is active: <em>do not feel sleepy</em>. <em>Are not felt</em> is the near miss: a passive that turns the teenagers into something other people feel. <em>Do not felt</em> puts a past form after <em>do</em>, and <em>not feeling</em> gives the clause no finite verb.' },

        { id: 'm3-17', type: 'cloze', tag: 's6-relpass', level: 'B2',
          passage: M3_P2,
          blank: '(17)',
          stem: 'Choose the best option for gap (17).',
          options: [
            'has linked',
            'has been linked',
            'linked',
            'has been linking'
          ],
          answer: 1, near: 0,
          fb: [
            'Without <em>been</em> this is active: the problem would be doing the linking, and it would need an object.',
            'Yes — a finite passive in the relative clause.',
            'After <em>that</em>, the relative clause needs a finite verb; a bare V3 is not enough.',
            'This is active continuous: the problem would be linking something.'
          ],
          hint: 'A relative clause after <em>that</em> needs its own finite verb; ask whether the problem does the linking or is linked by researchers.',
          why: 'Researchers link tiredness to lower grades, so the problem receives the action, and the relative clause needs a finite verb: <em>a problem that has been linked to…</em>. <em>Has linked</em> is the near miss: without <em>been</em>, it becomes active. <em>Linked</em> alone is the bare-V3 trap from A-Level 2568 (<em>that activated</em>), and <em>has been linking</em> is active.' },

        { id: 'm3-18', type: 'cloze', tag: 's6-reduced', level: 'C1',
          passage: M3_P2,
          blank: '(18)',
          stem: 'Choose the best option for gap (18).',
          options: [
            'was introduced',
            'introducing',
            'which introduced',
            'introduced'
          ],
          answer: 3, near: 0,
          fb: [
            'The sentence already has its main verb (<em>moved</em>); a second finite verb between the commas breaks it.',
            'An -ing form gives the scheme an active meaning, as if the scheme were doing the action itself.',
            'This active relative clause makes the scheme the one doing the introducing.',
            'Yes — a reduced passive clause between commas.'
          ],
          hint: 'Find the main verb of the sentence first; then ask whether the scheme did the action or received it.',
          why: 'The main verb is <em>moved</em>, so the words between the commas must be a reduced clause, and the scheme was introduced by the schools: <em>introduced last year</em> = <em>which was introduced last year</em>. <em>Was introduced</em> is the near miss: right meaning, but a second finite verb. <em>Introducing</em> and <em>which introduced</em> are active.' },

        { id: 'm3-19', type: 'cloze', tag: 's5-phrasal', level: 'B2',
          passage: M3_P2,
          blank: '(19)',
          stem: 'Choose the best option for gap (19).',
          options: [
            'are told off',
            'are told',
            'tell off',
            'are telling off'
          ],
          answer: 0, near: 1,
          fb: [
            'Yes — a phrasal verb keeps its particle in the passive.',
            'Without its particle, <em>tell</em> means "give information", which does not fit <em>for falling asleep</em>.',
            'This is active, and the students would then be the ones scolding someone.',
            '<em>Be</em> + V-ing is active: the students would be doing the scolding.'
          ],
          hint: 'In the passive, a phrasal verb keeps every part of itself; ask whether the students scold or are scolded.',
          why: 'Teachers tell students off, so the students receive the action, and the phrasal verb keeps its particle: <em>are told off</em>. <em>Are told</em> is the near miss: right voice, but without the particle it means "are informed". <em>Tell off</em> and <em>are telling off</em> are active.' },

        { id: 'm3-20', type: 'cloze', tag: 's8-subj', level: 'C1',
          passage: M3_P2,
          blank: '(20)',
          stem: 'Choose the best option for gap (20).',
          options: [
            'to be extended',
            'being extended',
            'be extended',
            'be extending'
          ],
          answer: 2, near: 0,
          fb: [
            'After <em>recommend that</em>, the clause needs a subject + verb, not a <em>to</em>-infinitive.',
            'An -ing form cannot be the verb of a <em>that</em>-clause.',
            'Yes — <em>recommend that</em> + subject + <em>be</em> + V3.',
            'This is active continuous: the scheme would be extending something.'
          ],
          hint: 'After <em>recommend that</em> or <em>suggest that</em>, formal English uses a special base-form pattern; ask whether the scheme does the extending.',
          why: 'Formal English uses the base form after <em>recommend that</em> + subject (the subjunctive), and the scheme is extended by the authorities, so the form is <em>be extended</em>; the same pattern appeared as <em>be tailored</em> in a reconstructed A-Level 2567 item. <em>To be extended</em> is the near miss: right voice, but a <em>that</em>-clause cannot take an infinitive. <em>Being extended</em> is not finite, and <em>be extending</em> is active.' }
      ]
    }
  ]
});
