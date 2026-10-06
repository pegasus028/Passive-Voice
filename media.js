/* ===========================================================================
   VOICE CONTROL — media.js
   The introduction for each stage: a podcast episode, and optionally a slide
   deck and a video. Loaded after the stage files and before content-export.js.

   The `title` on each entry is what `podcasts.html` — the standalone listening
   page, which loads this file and nothing else — shows beside the player. The
   app itself uses the stage's own name, so the two can differ without
   anything breaking.

   ---------------------------------------------------------------------------
   HOW TO ADD AN EPISODE

   Record it, save the MP3 as `audio/stage-N.mp3`, and put that path into the
   `podcast` field for the stage below. The player then shows up on that
   stage's card and on the Podcasts page.

   HOW TO ADD A VIDEO

   Paste an ordinary YouTube link into the `video` field for that stage —
   `https://youtu.be/XXXXXXXXXXX`, a `watch?v=` link, an `/embed/` link or a
   `/shorts/` link all work. The video then plays inside the app, and the
   stage appears on the Videos screen. Until then the stage is simply absent
   from that screen and no Video button is drawn.

   HOW TO ADD SLIDES

   `slides` takes any URL that serves a PDF directly. A Google Drive share
   link will NOT work: Drive returns a viewer page rather than the file.
   Upload the PDF beside the app instead and use a relative path,
   `slides/stage-3.pdf`.

   A FIELD LEFT EMPTY MEANS NO BUTTON. That is deliberate — episodes, videos
   and decks can be added one at a time, in any order, and a stage with no
   media simply shows no strip. Nothing else in the app needs touching, and
   nothing breaks while a field is still blank.

   Listening and watching are tracked like anything else a student does. The
   teacher console reports plays, minutes heard, whether the episode was
   finished, and how often the slides and video were opened — with the stages
   nobody has opened marked in red. A student stuck on a stage who never
   played its introduction is a different teaching problem from one who did.
   =========================================================================== */

var MEDIA = {
  t1: { title: 'The Switch',                 podcast: '', slides: '', video: '' },
  t2: { title: 'Doer or Receiver?',          podcast: '', slides: '', video: '' },
  t3: { title: 'Time Machine',               podcast: '', slides: '', video: '' },
  t4: { title: 'Beyond the Finite Verb',     podcast: '', slides: '', video: '' },
  t5: { title: 'Objects and Prepositions',   podcast: '', slides: '', video: '' },
  t6: { title: 'Shortcuts',                  podcast: '', slides: '', video: '' },
  t7: { title: 'The Causative Family',       podcast: '', slides: '', video: '' },
  t8: { title: 'Said to Be',                 podcast: '', slides: '', video: '' }
};

/* How long each episode runs, in minutes, if you want the card to say so.
   Leave a stage out and the card simply does not mention a length. */
var MEDIA_MINUTES = {};
