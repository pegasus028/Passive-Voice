/* ===========================================================================
   VOICE CONTROL — content.js  (core)
   The English Passive · B1 → C1 · self-study for Thai M5 (TCAS70 A-Level 82)
   ---------------------------------------------------------------------------
   This file holds everything that is NOT question content: the rank ladder,
   the awards, and the empty dictionaries the stage files fill in.

   Loaded in this order (see index.html):

     content.js        this file
     topic-s1.js       Stage 01  The Switch                 (form and function)
     topic-s2.js       Stage 02  Doer or Receiver?          (the Decision Test)
     topic-s3.js       Stage 03  Time Machine               (tenses and modals)
     topic-s4.js       Stage 04  Beyond the Finite Verb     (infinitives, gerunds)
     topic-s5.js       Stage 05  Objects and Prepositions
     topic-s6.js       Stage 06  Shortcuts                  (relative + reduced clauses)
     topic-s7.js       Stage 07  The Causative Family
     topic-s8.js       Stage 08  Said to Be                 (reporting passive, register)
     test-1.js         the triage (MUST load first of the tests)
     test-2.js         Mock Test 2 · B2 final check
     test-3.js         Mock Test 3 · C1 final check

   Each stage file adds its own error tags to REMEDIATION and pushes one
   stage onto TOPICS. Each lenses-sN.js file adds that stage's lesson lenses.

   ---------------------------------------------------------------------------
   ITEM TYPES  (the renderer in engine.js knows these)
     choose  {stem, options[4], answer}                    multiple choice
     equiv   {given, stem, options[4], answer}             closest meaning
     gap     {lines:[{who,text}], blank, stem, options[4], answer}
     cloze   {passage, blank, stem, options[4], answer}    gap in a text
     read    {passage, stem, options[4], answer}           reading question
     spot    {stem, words[4], answer, fix}                 find the mistake
     order   {stem, items[] IN CORRECT ORDER}              reorder (shuffled)
     sort    {stem, bins[], items[{text,bin}]}             drop into boxes
     build   {stem, tiles[], solution, alt[]}              assemble a sentence

   Every item carries: id · type · tag · level · why · hint
   Four-option items also carry:
     fb[4]  — what a student reads after a WRONG FIRST TRY on that option.
              It diagnoses the mistake and never names the right answer.
     near   — the index of the near-miss distractor.
   =========================================================================== */

var CEFR = ['B1', 'B1+', 'B2', 'B2+', 'C1', 'C1+'];

/* --------------------------------------------------------------------------
   RANKS — one rung per band of the 24 stage checks.
   A voice that grows from silence to a broadcast.
   -------------------------------------------------------------------------- */
var RANKS = [
  { min: 0,  name: 'Muted',      note: 'Nothing checked yet. Press the switch.' },
  { min: 1,  name: 'Whisper',    note: 'A first signal: be + past participle.' },
  { min: 3,  name: 'Murmur',     note: 'You can build the passive and say why it is used.' },
  { min: 6,  name: 'Speaking',   note: 'Doer or receiver? You run the test without thinking.' },
  { min: 9,  name: 'Clear',      note: 'Every tense, every modal, both voices.' },
  { min: 12, name: 'Projected',  note: 'Halfway. Infinitives, objects and prepositions hold.' },
  { min: 16, name: 'Amplified',  note: 'Reduced clauses and causatives are opening up.' },
  { min: 20, name: 'On Air',     note: 'Exam-ready on nearly everything.' },
  { min: 24, name: 'Broadcast',  note: 'Every stage green. The whole passive is yours.' }
];

/* --------------------------------------------------------------------------
   AWARDS — the fifteen ids are fixed by the engine; only the wording is ours.
   -------------------------------------------------------------------------- */
var BADGES = [
  { id: 'poweron',   name: 'Switched On',      perk: 'The voice is live.',                   how: 'Finish your first module.' },
  { id: 'streak3',   name: 'Three Days Live',  perk: 'Momentum is a skill.',                 how: 'Study 3 days in a row.' },
  { id: 'streak7',   name: 'A Week On Air',    perk: 'Seven days, no static.',               how: 'Study 7 days in a row.' },
  { id: 'streak14',  name: 'Fourteen Straight',perk: 'Two weeks without a gap.',             how: 'Study 14 days in a row.' },
  { id: 'allgreen',  name: 'Clean Signal',     perk: 'A flawless stage check.',              how: 'Score 100% on any stage check.' },
  { id: 'triple',    name: 'Triple Lock',      perk: 'Three flawless checks.',               how: 'Score 100% on three stage checks.' },
  { id: 'nohelp',    name: 'Unaided',          perk: 'No hints, no help.',                   how: 'Clear a stage check without using a hint.' },
  { id: 'recovered', name: 'Faults Cleared',   perk: 'You fixed what you broke.',            how: 'Fix 5 questions on your Fault List.' },
  { id: 'run10',     name: 'Ten Clean',        perk: 'Ten in a row.',                        how: 'Answer 10 questions correctly in a row.' },
  { id: 'reflight',  name: 'Second Take',      perk: 'A second attempt, taken.',             how: 'Pass a stage check you previously failed.' },
  { id: 'quick',     name: 'Quick Ear',        perk: 'Reading speed counts in the exam.',    how: 'Earn 25 time bonuses by answering inside 7 seconds.' },
  { id: 'sim1',      name: 'First Paper',      perk: 'You have seen a whole paper.',         how: 'Finish any of the three tests.' },
  { id: 'sim70',     name: 'Seventy Up',       perk: '70% on a full paper.',                 how: 'Score 70% or more on any test.' },
  { id: 'simall',    name: 'All Three Papers', perk: 'Triage and both mock tests, done.',    how: 'Finish all three tests.' },
  { id: 'director',  name: 'Broadcast',        perk: 'Every stage green.',                   how: 'Clear all 24 stage checks.' }
];

/* --------------------------------------------------------------------------
   ERROR TAGS — one per module. Each stage file adds its own:
     Object.assign(REMEDIATION, { 's1-form': { name, principle, reteach, activities[] }, … });
   `principle` is the rule reminder behind the Hint button when an item has
   no hint of its own. `reteach` and `activities` appear only in the teacher
   console.
   -------------------------------------------------------------------------- */
var REMEDIATION = {};

/* Lesson lenses (Thai, mind map, story, chant, moves, analogy, trap), keyed
   by module id. Filled by lenses-s1.js … lenses-s8.js. */
var LENSES = {};

/* Stage files push onto this. Order of the <script> tags sets the order. */
var TOPICS = [];

/* The three tests push onto this. test-1.js is the triage: it MUST load
   first, because the engine treats MOCKS[0] as the diagnostic paper. */
var MOCKS = [];
