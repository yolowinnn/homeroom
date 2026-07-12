window.HR_DATA = window.HR_DATA || { subjects: [] };
window.HR_DATA.subjects.push({
  key: "ela",
  name: "English Language Arts",
  icon: "📖",
  color: "#0ea5e9",
  blurb: "Reading, writing, grammar, and the literature every American grows up with.",
  why: "Shared books, idioms, and writing conventions are the everyday common ground of American life.",
  stages: [
    { stage: "elementary", grades: "K–5", units: [
      { title: "Phonics & Early Reading", lessons: [
        { id: "ela-el-1", title: "Letter Sounds & Decoding", minutes: 9, objective: "By the end, you can sound out simple unfamiliar words by blending letter sounds.",
          body: `<p><strong>Phonics</strong> is the method American children use to learn reading. The idea is simple: letters stand for sounds, and you blend those sounds together to read a word.</p>
<p>English has 26 letters but about 44 sounds. Each sound is called a <strong>phoneme</strong>. For example, the word <em>cat</em> has three sounds: /k/ /a/ /t/. A child learns to say each sound, then blend them quickly into "cat."</p>
<h4>Consonants and vowels</h4>
<p>The five vowels are a, e, i, o, u (and sometimes y). Every English word needs at least one vowel sound. The other letters are consonants.</p>
<p>Vowels have two common sounds:</p>
<ul>
<li><strong>Short vowels</strong>: the a in <em>cat</em>, the e in <em>bed</em>, the i in <em>sit</em>, the o in <em>hot</em>, the u in <em>cup</em>.</li>
<li><strong>Long vowels</strong>: the vowel says its own name, like the a in <em>cake</em> or the o in <em>go</em>.</li>
</ul>
<p>A very common American rule is "silent e." When a word ends in e, the vowel before it often becomes long and the e is not pronounced. So <em>hat</em> (short a) becomes <em>hate</em> (long a). The same happens with <em>kit</em> to <em>kite</em> and <em>cub</em> to <em>cube</em>.</p>
<p>Teachers also drill <strong>blends</strong> (two consonants together, like <em>bl</em> in <em>black</em>) and <strong>digraphs</strong> (two letters making one new sound, like <em>sh</em>, <em>ch</em>, and <em>th</em>). Once you can decode, reading speeds up because you no longer guess at words; you build them from their sounds.</p>`,
          terms: [
            { term: "phonics", def: "The way of reading that matches letters to their sounds." },
            { term: "phoneme", def: "A single sound in a word, such as /k/ in cat." },
            { term: "vowel", def: "The letters a, e, i, o, u (and sometimes y)." },
            { term: "consonant", def: "Any letter that is not a vowel." },
            { term: "digraph", def: "Two letters that make one sound, like sh or ch." },
            { term: "silent e", def: "An e at the end of a word that is not said but makes the vowel long." }
          ],
          quiz: [
            { q: "How many sounds (phonemes) are in the word 'cat'?", options: ["Two", "Three", "Four", "One"], answer: 1, explain: "Cat has three sounds: /k/ /a/ /t/." },
            { q: "Which word has a long vowel sound?", options: ["sit", "cake", "hot", "bed"], answer: 1, explain: "In 'cake' the a says its own name, making it a long vowel." },
            { q: "What does silent e usually do to the vowel before it?", options: ["Deletes it", "Makes it short", "Makes it long", "Doubles it"], answer: 2, explain: "Silent e makes the earlier vowel long, as in hat becoming hate." },
            { q: "Which pair is a digraph?", options: ["bl", "sh", "st", "cr"], answer: 1, explain: "Sh is a digraph because two letters make one new sound." }
          ] },
        { id: "ela-el-2", title: "Sight Words", minutes: 8, objective: "By the end, you can recognize the most common English words instantly without sounding them out.",
          body: `<p>Some English words break the normal phonics rules, or appear so often that children memorize them by sight. These are called <strong>sight words</strong> (also "high-frequency words").</p>
<p>Words like <em>the</em>, <em>said</em>, <em>was</em>, and <em>of</em> do not sound the way their letters suggest. If a child tried to sound out <em>the</em>, it would not work cleanly. So American schools have children practice these words until they recognize them in an instant.</p>
<h4>Why they matter</h4>
<p>About half of everything we read is made up of a small set of common words. If a reader has to stop and decode each one, reading becomes slow and tiring. Knowing sight words automatically frees the brain to focus on meaning.</p>
<p>Two famous American lists are used in almost every school:</p>
<ul>
<li><strong>Dolch words</strong>: 220 common words plus 95 nouns, grouped by grade level.</li>
<li><strong>Fry words</strong>: the 1,000 most frequent words in English.</li>
</ul>
<p>Examples of early sight words include: <em>a, and, I, is, it, in, you, to, for, are, with, his, they, this, have, from</em>.</p>
<p>Teachers use flashcards, word walls, and simple games to build instant recognition. A common goal is for a first grader to read a sight word in under three seconds without sounding it out. As an adult learner, you already know many of these words from speaking, so your task is mainly to connect the spoken word to its written form.</p>`,
          terms: [
            { term: "sight word", def: "A common word you recognize instantly without sounding it out." },
            { term: "high-frequency word", def: "Another name for a word that appears very often in text." },
            { term: "Dolch words", def: "A famous list of 220 common American sight words." },
            { term: "Fry words", def: "A list of the 1,000 most frequent English words." },
            { term: "word wall", def: "A classroom display of words for students to see and practice." }
          ],
          quiz: [
            { q: "What is a sight word?", options: ["A word you sound out slowly", "A word you recognize instantly", "A made-up word", "A foreign word"], answer: 1, explain: "Sight words are memorized for instant recognition." },
            { q: "Why are sight words taught?", options: ["They are rare", "They appear very often in reading", "They are hard to spell", "They are all nouns"], answer: 1, explain: "Common words make up a huge share of text, so quick recognition speeds reading." },
            { q: "Which is a well-known American sight-word list?", options: ["Dolch words", "Webster words", "Franklin words", "Lincoln words"], answer: 0, explain: "The Dolch list of 220 words is used in most US schools." },
            { q: "Why is 'the' a sight word rather than a phonics word?", options: ["It is very long", "It does not follow normal sound rules", "It is a name", "It has no vowel"], answer: 1, explain: "The does not sound the way its letters would suggest, so it is memorized." }
          ] }
      ]},
      { title: "Reading Comprehension & Story Elements", lessons: [
        { id: "ela-el-3", title: "Story Elements: Character, Setting, Plot", minutes: 9, objective: "By the end, you can identify the main parts of any story.",
          body: `<p>Every story is built from the same basic pieces. American children learn these <strong>story elements</strong> in early grades so they can talk about books clearly.</p>
<h4>The main elements</h4>
<ul>
<li><strong>Character</strong>: the people or animals in the story. The most important one is the <em>main character</em> (also called the protagonist).</li>
<li><strong>Setting</strong>: where and when the story takes place.</li>
<li><strong>Plot</strong>: the events of the story, in order. The plot usually has a <strong>problem</strong> (also called the conflict) and a <strong>solution</strong> (the resolution).</li>
<li><strong>Theme</strong>: the big idea or lesson the story teaches, such as "friendship matters."</li>
</ul>
<p>A simple way to map a plot is the "story mountain": the story <em>begins</em>, then a problem causes the action to <em>rise</em>, it reaches a high point called the <strong>climax</strong>, and then everything settles into an <em>ending</em>.</p>
<p>For example, in the picture book <em>The Three Little Pigs</em>, the characters are the pigs and the wolf, the setting is the pigs' houses, the problem is the wolf trying to eat them, the climax is the wolf attacking the brick house, and the solution is the pigs staying safe. The theme might be "hard work and planning keep you safe."</p>
<p>When you read, asking "Who? Where? What is the problem? How is it solved?" helps you understand and remember any story, from a children's book to an adult novel.</p>`,
          terms: [
            { term: "character", def: "A person or animal in a story." },
            { term: "setting", def: "Where and when a story takes place." },
            { term: "plot", def: "The events of a story in order." },
            { term: "conflict", def: "The main problem the characters face." },
            { term: "climax", def: "The most exciting high point of the story." },
            { term: "theme", def: "The big idea or lesson of a story." }
          ],
          quiz: [
            { q: "What is the 'setting' of a story?", options: ["The main lesson", "Where and when it happens", "The main character", "The problem"], answer: 1, explain: "Setting is the time and place of a story." },
            { q: "The main problem in a story is called the:", options: ["theme", "setting", "conflict", "climax"], answer: 2, explain: "Conflict is the central problem the characters must face." },
            { q: "The most exciting high point of a story is the:", options: ["climax", "setting", "character", "ending"], answer: 0, explain: "The climax is the peak moment of the plot." },
            { q: "'Friendship matters' is an example of a:", options: ["setting", "theme", "character", "plot"], answer: 1, explain: "A theme is the big idea or lesson of the story." }
          ] },
        { id: "ela-el-4", title: "Main Idea & Details", minutes: 8, objective: "By the end, you can find the main idea of a passage and the details that support it.",
          body: `<p>When you read, the most important skill is finding the <strong>main idea</strong>: what the text is mostly about. Everything else in the passage gives <strong>supporting details</strong> that explain or prove that main idea.</p>
<h4>How to find the main idea</h4>
<p>Ask yourself: "What is this paragraph mostly about?" The answer, said in one sentence, is the main idea. Often the main idea sits in the first sentence (called the <strong>topic sentence</strong>), but sometimes you must figure it out yourself.</p>
<p>Look at this short paragraph:</p>
<p><em>"Dogs make great pets. They are loyal and protect your home. They are also fun to play with, and they can be trained to do tricks."</em></p>
<ul>
<li><strong>Main idea</strong>: Dogs make great pets.</li>
<li><strong>Details</strong>: loyal, protect the home, fun to play with, can do tricks.</li>
</ul>
<p>A helpful image is a table: the main idea is the tabletop, and the details are the legs holding it up.</p>
<h4>Summarizing</h4>
<p>Once you can find the main idea and a few key details, you can write a <strong>summary</strong>, a short retelling in your own words that leaves out small details. Summarizing proves you understood what you read. Good readers do this automatically, pausing now and then to ask, "What was that mostly about?"</p>`,
          terms: [
            { term: "main idea", def: "What a text is mostly about." },
            { term: "supporting detail", def: "A fact or example that explains the main idea." },
            { term: "topic sentence", def: "A sentence that states the main idea, often the first one." },
            { term: "summary", def: "A short retelling in your own words of the most important points." },
            { term: "passage", def: "A short section of text that you read." }
          ],
          quiz: [
            { q: "The main idea is:", options: ["A small detail", "What the text is mostly about", "The first word", "The title only"], answer: 1, explain: "The main idea is the overall point of the text." },
            { q: "What do supporting details do?", options: ["Change the topic", "Explain or prove the main idea", "Confuse the reader", "End the story"], answer: 1, explain: "Details back up and explain the main idea." },
            { q: "A topic sentence usually:", options: ["States the main idea", "Lists every detail", "Ends the paragraph", "Asks a question"], answer: 0, explain: "The topic sentence states the paragraph's main idea." },
            { q: "A summary should:", options: ["Include every tiny detail", "Be longer than the text", "Be a short retelling of key points", "Copy the text exactly"], answer: 2, explain: "A summary briefly restates only the most important points." }
          ] }
      ]},
      { title: "Grammar, Sentences & Children's Classics", lessons: [
        { id: "ela-el-5", title: "Parts of Speech: Nouns, Verbs, Adjectives", minutes: 9, objective: "By the end, you can label the basic parts of speech in a sentence.",
          body: `<p>Every word in English has a job. These jobs are called the <strong>parts of speech</strong>. The most important ones for beginners are nouns, verbs, and adjectives.</p>
<h4>Nouns</h4>
<p>A <strong>noun</strong> names a person, place, thing, or idea. Examples: <em>teacher, school, ball, freedom</em>. A <strong>proper noun</strong> names a specific person or place and is capitalized, like <em>America</em> or <em>Sarah</em>.</p>
<h4>Verbs</h4>
<p>A <strong>verb</strong> shows an action or a state of being. Action verbs: <em>run, eat, jump</em>. "Being" verbs (forms of <em>to be</em>): <em>is, are, was</em>. Every complete sentence needs a verb.</p>
<h4>Adjectives</h4>
<p>An <strong>adjective</strong> describes a noun. It tells which one, what kind, or how many. Examples: <em>red ball, three dogs, happy child</em>.</p>
<p>Look at this sentence: <em>"The happy dog runs."</em></p>
<ul>
<li><em>dog</em> = noun</li>
<li><em>happy</em> = adjective (describes the dog)</li>
<li><em>runs</em> = verb (the action)</li>
<li><em>The</em> = article, a small word that points to a noun</li>
</ul>
<p>Later you will learn pronouns (<em>he, she, it</em>), adverbs (which describe verbs, often ending in -ly like <em>quickly</em>), prepositions (<em>in, on, under</em>), and conjunctions (<em>and, but, or</em>). Knowing the parts of speech helps you build correct sentences and understand grammar rules.</p>`,
          terms: [
            { term: "noun", def: "A word that names a person, place, thing, or idea." },
            { term: "proper noun", def: "A specific name that is capitalized, like America." },
            { term: "verb", def: "A word that shows action or a state of being." },
            { term: "adjective", def: "A word that describes a noun." },
            { term: "adverb", def: "A word that describes a verb, often ending in -ly." },
            { term: "pronoun", def: "A word that replaces a noun, like he, she, or it." }
          ],
          quiz: [
            { q: "Which word is a noun?", options: ["run", "happy", "school", "quickly"], answer: 2, explain: "School is a place, so it is a noun." },
            { q: "A verb shows:", options: ["a description", "an action or state of being", "a name", "a number"], answer: 1, explain: "Verbs express actions or states of being." },
            { q: "In 'the red ball,' the word 'red' is a(n):", options: ["noun", "verb", "adjective", "adverb"], answer: 2, explain: "Red describes the noun ball, so it is an adjective." },
            { q: "Which is a proper noun?", options: ["city", "America", "river", "teacher"], answer: 1, explain: "America is a specific name and is capitalized." }
          ] },
        { id: "ela-el-6", title: "Sentences & Punctuation", minutes: 8, objective: "By the end, you can write complete sentences with correct end punctuation and capitals.",
          body: `<p>A <strong>sentence</strong> is a complete thought. To be complete, it needs two parts: a <strong>subject</strong> (who or what the sentence is about) and a <strong>predicate</strong> (what the subject does or is, including the verb).</p>
<p>Example: <em>"The dog barks."</em> The subject is <em>the dog</em>; the predicate is <em>barks</em>.</p>
<h4>Rules every American student learns</h4>
<ul>
<li>Begin every sentence with a <strong>capital letter</strong>.</li>
<li>Always capitalize the word <em>I</em> and proper nouns (names of people and places).</li>
<li>End every sentence with the correct mark.</li>
</ul>
<h4>The four sentence types and their end marks</h4>
<ul>
<li><strong>Statement (declarative)</strong>: tells something. Ends with a <strong>period</strong> (.). <em>I like pizza.</em></li>
<li><strong>Question (interrogative)</strong>: asks something. Ends with a <strong>question mark</strong> (?). <em>Do you like pizza?</em></li>
<li><strong>Exclamation (exclamatory)</strong>: shows strong feeling. Ends with an <strong>exclamation point</strong> (!). <em>I love pizza!</em></li>
<li><strong>Command (imperative)</strong>: tells someone to do something. Usually ends with a period. <em>Eat your pizza.</em></li>
</ul>
<p>A group of words missing a subject or verb is a <strong>fragment</strong>, not a real sentence (for example, "Running fast."). The <strong>comma</strong> (,) is used to separate items in a list, as in <em>"I bought apples, bread, and milk."</em> Mastering these small marks makes your writing clear and correct.</p>`,
          terms: [
            { term: "sentence", def: "A complete thought with a subject and a predicate." },
            { term: "subject", def: "Who or what the sentence is about." },
            { term: "predicate", def: "The part of the sentence with the verb that tells what the subject does." },
            { term: "period", def: "The dot (.) that ends a statement." },
            { term: "fragment", def: "An incomplete sentence missing a subject or verb." },
            { term: "comma", def: "A mark (,) used to separate items in a list." }
          ],
          quiz: [
            { q: "Every sentence must begin with a:", options: ["comma", "capital letter", "question mark", "number"], answer: 1, explain: "Sentences always start with a capital letter." },
            { q: "Which mark ends a question?", options: ["period", "exclamation point", "question mark", "comma"], answer: 2, explain: "Questions end with a question mark." },
            { q: "'Running fast.' is an example of a:", options: ["complete sentence", "fragment", "question", "command"], answer: 1, explain: "It has no subject, so it is a fragment." },
            { q: "Which word should always be capitalized?", options: ["dog", "happy", "I", "run"], answer: 2, explain: "The word I is always capitalized in English." }
          ] },
        { id: "ela-el-7", title: "American Children's Classics", minutes: 9, objective: "By the end, you can recognize the most famous American children's books and what they are about.",
          body: `<p>Almost every American adult grew up with the same handful of children's books. Knowing them helps you understand jokes, references, and conversations about childhood.</p>
<h4>Dr. Seuss</h4>
<p>Theodor Geisel, known as <strong>Dr. Seuss</strong>, wrote playful rhyming books with invented words and silly drawings. Famous titles include <em>The Cat in the Hat</em>, <em>Green Eggs and Ham</em>, and <em>Oh, the Places You'll Go!</em> (often given at graduations). His books teach reading through rhyme and repetition.</p>
<h4>Charlotte's Web</h4>
<p><em>Charlotte's Web</em> by E.B. White tells of a pig named Wilbur who is saved by a clever spider named Charlotte. She writes words like "SOME PIG" in her web to make people value him. The book deals gently with friendship, loyalty, and death. The phrase "some pig" is widely recognized.</p>
<h4>Where the Wild Things Are</h4>
<p><em>Where the Wild Things Are</em> by Maurice Sendak follows a boy named Max who, after being sent to his room, sails to an island of friendly monsters and becomes their king, then returns home to find his dinner still warm. It captures childhood imagination and big feelings.</p>
<h4>Others you will hear about</h4>
<ul>
<li><em>Goodnight Moon</em>, a gentle bedtime book.</li>
<li><em>The Very Hungry Caterpillar</em> by Eric Carle.</li>
<li><em>The Giving Tree</em> by Shel Silverstein, about generosity.</li>
</ul>
<p>These stories are shared cultural memories. Mentioning Wilbur, the Cat in the Hat, or "the wild things" instantly connects you to nearly any American.</p>`,
          terms: [
            { term: "Dr. Seuss", def: "Famous author of rhyming children's books like The Cat in the Hat." },
            { term: "Charlotte's Web", def: "A classic novel about a pig and a spider who saves him." },
            { term: "E.B. White", def: "The author of Charlotte's Web." },
            { term: "Maurice Sendak", def: "Author and illustrator of Where the Wild Things Are." },
            { term: "picture book", def: "A short children's book where pictures tell much of the story." }
          ],
          quiz: [
            { q: "Who wrote The Cat in the Hat?", options: ["E.B. White", "Dr. Seuss", "Maurice Sendak", "Eric Carle"], answer: 1, explain: "Dr. Seuss wrote The Cat in the Hat and many rhyming books." },
            { q: "In Charlotte's Web, Charlotte is a:", options: ["pig", "spider", "girl", "farmer"], answer: 1, explain: "Charlotte is the clever spider who saves Wilbur the pig." },
            { q: "In Where the Wild Things Are, Max becomes the:", options: ["king of the monsters", "captain of a ship", "teacher", "farmer"], answer: 0, explain: "Max sails to the island and is made king of the wild things." },
            { q: "Which book is often given to graduates?", options: ["Goodnight Moon", "Oh, the Places You'll Go!", "Charlotte's Web", "The Giving Tree"], answer: 1, explain: "Dr. Seuss's Oh, the Places You'll Go! is a popular graduation gift." }
          ] }
      ]}
    ]},
    { stage: "middle", grades: "6–8", units: [
      { title: "Grammar Mastery", lessons: [
        { id: "ela-ms-1", title: "Clauses & Sentence Types", minutes: 10, objective: "By the end, you can tell independent from dependent clauses and build complex sentences.",
          body: `<p>To write like an educated adult, you need to understand <strong>clauses</strong>. A clause is a group of words with a subject and a verb. There are two kinds.</p>
<h4>Independent vs. dependent</h4>
<ul>
<li>An <strong>independent clause</strong> can stand alone as a complete sentence. Example: <em>"I went home."</em></li>
<li>A <strong>dependent clause</strong> (also called a subordinate clause) has a subject and verb but cannot stand alone. It begins with a word like <em>because, although, when, if, since, while</em>. Example: <em>"Because I was tired"</em> is not a complete thought by itself.</li>
</ul>
<h4>Four sentence structures</h4>
<ul>
<li><strong>Simple</strong>: one independent clause. <em>I read a book.</em></li>
<li><strong>Compound</strong>: two independent clauses joined by a comma plus a conjunction (and, but, or, so) or a semicolon. <em>I read a book, and she watched TV.</em></li>
<li><strong>Complex</strong>: one independent clause plus one dependent clause. <em>Because I was tired, I went home.</em></li>
<li><strong>Compound-complex</strong>: two independent clauses and at least one dependent clause.</li>
</ul>
<p>Watch out for two common mistakes. A <strong>run-on sentence</strong> jams two complete sentences together with no punctuation. A <strong>comma splice</strong> joins two complete sentences with only a comma (<em>"I was tired, I went home"</em>), which is incorrect; you need a conjunction or a semicolon. Varying your sentence types makes writing flow and sound mature.</p>`,
          terms: [
            { term: "clause", def: "A group of words containing a subject and a verb." },
            { term: "independent clause", def: "A clause that can stand alone as a sentence." },
            { term: "dependent clause", def: "A clause that cannot stand alone, often starting with because or when." },
            { term: "compound sentence", def: "Two independent clauses joined correctly." },
            { term: "run-on sentence", def: "Two sentences wrongly joined with no punctuation." },
            { term: "comma splice", def: "Two complete sentences joined with only a comma, which is an error." }
          ],
          quiz: [
            { q: "Which can stand alone as a sentence?", options: ["a dependent clause", "an independent clause", "a phrase", "a comma splice"], answer: 1, explain: "An independent clause expresses a complete thought on its own." },
            { q: "'Because I was tired' is a:", options: ["independent clause", "dependent clause", "compound sentence", "complete sentence"], answer: 1, explain: "It cannot stand alone, so it is a dependent clause." },
            { q: "A compound sentence has:", options: ["one clause", "two independent clauses", "no verb", "only a dependent clause"], answer: 1, explain: "Compound sentences join two independent clauses." },
            { q: "'I was tired, I went home' is an example of a:", options: ["correct sentence", "comma splice", "question", "fragment"], answer: 1, explain: "Two complete sentences joined by only a comma is a comma splice." }
          ] },
        { id: "ela-ms-2", title: "Subject-Verb Agreement & Confused Words", minutes: 9, objective: "By the end, you can match subjects with verbs and use commonly confused words correctly.",
          body: `<p>Two grammar problems trip up almost everyone: subject-verb agreement and confusing word pairs.</p>
<h4>Subject-verb agreement</h4>
<p>The verb must match the subject in number. A <strong>singular</strong> subject takes a singular verb; a <strong>plural</strong> subject takes a plural verb.</p>
<ul>
<li>Singular: <em>The dog <strong>runs</strong>.</em></li>
<li>Plural: <em>The dogs <strong>run</strong>.</em></li>
</ul>
<p>Tricky cases: words between the subject and verb do not change the rule. <em>"The box of toys <strong>is</strong> heavy"</em> (the subject is <em>box</em>, not <em>toys</em>). Also, <em>everyone, each, nobody</em> are singular: <em>"Everyone <strong>is</strong> here."</em></p>
<h4>Commonly confused words</h4>
<ul>
<li><strong>their / there / they're</strong>: <em>their</em> shows possession; <em>there</em> shows place; <em>they're</em> means "they are."</li>
<li><strong>your / you're</strong>: <em>your</em> shows possession; <em>you're</em> means "you are."</li>
<li><strong>its / it's</strong>: <em>its</em> shows possession; <em>it's</em> means "it is."</li>
<li><strong>to / too / two</strong>: <em>to</em> shows direction; <em>too</em> means "also" or "very"; <em>two</em> is the number 2.</li>
<li><strong>then / than</strong>: <em>then</em> is about time; <em>than</em> is used to compare.</li>
</ul>
<p>A simple trick: if you can replace the word with "they are," use <em>they're</em>; if not, you need <em>their</em> or <em>there</em>. These pairs are common on tests and in everyday writing, so memorizing them is worth the effort.</p>`,
          terms: [
            { term: "subject-verb agreement", def: "Making the verb match the subject in number." },
            { term: "singular", def: "Referring to one person or thing." },
            { term: "plural", def: "Referring to more than one." },
            { term: "possessive", def: "A word form that shows ownership, like their or its." },
            { term: "contraction", def: "A shortened form joining two words, like they're for they are." }
          ],
          quiz: [
            { q: "Choose the correct verb: 'The box of toys ___ heavy.'", options: ["are", "is", "were", "be"], answer: 1, explain: "The subject is 'box' (singular), so it takes 'is.'" },
            { q: "'You're' means:", options: ["belonging to you", "you are", "over there", "a place"], answer: 1, explain: "You're is a contraction of 'you are.'" },
            { q: "Which word shows possession?", options: ["it's", "its", "they're", "you're"], answer: 1, explain: "Its (no apostrophe) shows possession; it's means 'it is.'" },
            { q: "'Than' is used to:", options: ["show time", "compare things", "show place", "join sentences"], answer: 1, explain: "Than is used in comparisons, while then refers to time." }
          ] }
      ]},
      { title: "The Writing Process & Essays", lessons: [
        { id: "ela-ms-3", title: "The Five-Paragraph Essay", minutes: 10, objective: "By the end, you can structure a clear five-paragraph essay with a thesis.",
          body: `<p>The <strong>five-paragraph essay</strong> is the standard writing format taught in American middle and high schools. Learning it gives you a reliable structure for almost any writing task.</p>
<h4>The structure</h4>
<ul>
<li><strong>Paragraph 1 – Introduction</strong>: grabs attention (a "hook"), gives background, and ends with the <strong>thesis statement</strong>, one sentence stating your main argument or point.</li>
<li><strong>Paragraphs 2, 3, 4 – Body</strong>: each body paragraph covers one supporting idea. Each starts with a <strong>topic sentence</strong>, then gives evidence and explanation.</li>
<li><strong>Paragraph 5 – Conclusion</strong>: restates the thesis in new words, summarizes the main points, and ends with a final thought.</li>
</ul>
<h4>The thesis is everything</h4>
<p>A good <strong>thesis</strong> is specific and arguable. Weak: <em>"Dogs are good."</em> Strong: <em>"Dogs make the best pets because they are loyal, protective, and easy to train."</em> Notice the strong thesis even previews the three body paragraphs.</p>
<p>Within paragraphs, use <strong>transition words</strong> like <em>first, also, however, for example, in conclusion</em> to connect ideas smoothly. The format may feel rigid, but it teaches the core skill of organizing ideas. Once you master it, you can break the rules thoughtfully in longer, more advanced writing. American students practice this format on essays, state tests, and college applications.</p>`,
          terms: [
            { term: "thesis statement", def: "One sentence stating the main argument of an essay." },
            { term: "introduction", def: "The first paragraph that hooks the reader and gives the thesis." },
            { term: "body paragraph", def: "A middle paragraph that develops one supporting point." },
            { term: "conclusion", def: "The final paragraph that restates and wraps up the essay." },
            { term: "transition word", def: "A linking word like however or for example that connects ideas." },
            { term: "hook", def: "An opening line that grabs the reader's attention." }
          ],
          quiz: [
            { q: "How many paragraphs are in the standard format?", options: ["Three", "Five", "Seven", "Two"], answer: 1, explain: "The classic essay has five paragraphs." },
            { q: "The thesis statement usually appears at the end of the:", options: ["introduction", "conclusion", "second body paragraph", "title"], answer: 0, explain: "The thesis ends the introduction paragraph." },
            { q: "Each body paragraph should:", options: ["cover every idea", "cover one supporting idea", "restate the thesis", "have no topic sentence"], answer: 1, explain: "Each body paragraph develops a single supporting point." },
            { q: "Which is the strongest thesis?", options: ["Dogs are good.", "I like dogs.", "Dogs make the best pets because they are loyal, protective, and trainable.", "This essay is about dogs."], answer: 2, explain: "A strong thesis is specific, arguable, and previews the main points." }
          ] },
        { id: "ela-ms-4", title: "Narrative, Expository & Persuasive Writing", minutes: 9, objective: "By the end, you can tell apart the three main types of writing and their purposes.",
          body: `<p>American schools teach that writing has different <strong>purposes</strong>. The three main types are narrative, expository, and persuasive (also called argumentative).</p>
<h4>Narrative writing</h4>
<p><strong>Narrative</strong> writing tells a story. It has characters, a setting, and a plot. The goal is to entertain or share an experience. Personal narratives ("the time I got lost") are common school assignments. Good narratives use vivid details and dialogue.</p>
<h4>Expository writing</h4>
<p><strong>Expository</strong> writing explains or informs. It is factual, not emotional. Examples include how-to guides, news articles, and research reports. The goal is to teach the reader something clearly. It avoids the word "I" and personal opinions.</p>
<h4>Persuasive writing</h4>
<p><strong>Persuasive</strong> (argumentative) writing tries to convince the reader to agree or take action. It states a clear position, gives reasons and evidence, and often addresses the opposite view (the <strong>counterargument</strong>) before answering it. Examples include opinion editorials and advertisements.</p>
<p>One topic can be written in all three ways. Take "school lunches":</p>
<ul>
<li>Narrative: a story about a memorable lunch.</li>
<li>Expository: an explanation of how lunches are prepared.</li>
<li>Persuasive: an argument that lunches should be healthier.</li>
</ul>
<p>Before you write, always ask: "What is my purpose, and who is my audience?" The answer shapes your word choice, tone, and structure.</p>`,
          terms: [
            { term: "narrative writing", def: "Writing that tells a story to entertain or share an experience." },
            { term: "expository writing", def: "Writing that explains or informs with facts." },
            { term: "persuasive writing", def: "Writing that tries to convince the reader of a position." },
            { term: "counterargument", def: "The opposing view that a persuasive writer answers." },
            { term: "audience", def: "The readers a piece of writing is meant for." },
            { term: "purpose", def: "The reason for writing: to tell a story, explain, or persuade." }
          ],
          quiz: [
            { q: "Which type of writing tells a story?", options: ["expository", "narrative", "persuasive", "technical"], answer: 1, explain: "Narrative writing tells a story." },
            { q: "Expository writing mainly aims to:", options: ["entertain", "explain or inform", "argue", "sell"], answer: 1, explain: "Expository writing explains or informs with facts." },
            { q: "A counterargument is:", options: ["the writer's main point", "the opposing view", "a story event", "a definition"], answer: 1, explain: "A counterargument is the opposing view that persuasive writing addresses." },
            { q: "An opinion editorial is an example of:", options: ["narrative", "expository", "persuasive", "poetry"], answer: 2, explain: "Editorials try to convince readers, making them persuasive writing." }
          ] }
      ]},
      { title: "Figurative Language & Novels", lessons: [
        { id: "ela-ms-5", title: "Figurative Language & Idioms", minutes: 10, objective: "By the end, you can identify metaphors, similes, personification, and common idioms.",
          body: `<p><strong>Figurative language</strong> uses words in a non-literal way to create images and feeling. It is everywhere in books, songs, and daily American speech.</p>
<h4>The main types</h4>
<ul>
<li><strong>Simile</strong>: compares two things using <em>like</em> or <em>as</em>. <em>"She is as brave as a lion."</em></li>
<li><strong>Metaphor</strong>: compares two things by saying one <em>is</em> the other. <em>"Time is money."</em></li>
<li><strong>Personification</strong>: gives human qualities to non-human things. <em>"The wind whispered through the trees."</em></li>
<li><strong>Hyperbole</strong>: extreme exaggeration. <em>"I have told you a million times."</em></li>
<li><strong>Onomatopoeia</strong>: words that imitate sounds, like <em>buzz, crash, bang</em>.</li>
</ul>
<h4>Idioms</h4>
<p>An <strong>idiom</strong> is a common phrase whose meaning is not literal. Americans use these constantly, so they are vital for fluency:</p>
<ul>
<li><em>"It's raining cats and dogs"</em> = it is raining very hard.</li>
<li><em>"Break a leg"</em> = good luck (often said to performers).</li>
<li><em>"Piece of cake"</em> = something very easy.</li>
<li><em>"Hit the books"</em> = study hard.</li>
<li><em>"Under the weather"</em> = feeling sick.</li>
</ul>
<p>If you translate an idiom word for word, it makes no sense; you must learn the meaning as a whole. Recognizing figurative language helps you understand humor, poetry, and real conversation, and using it makes your own English sound natural.</p>`,
          terms: [
            { term: "figurative language", def: "Words used in a non-literal way to create images or feeling." },
            { term: "simile", def: "A comparison using like or as." },
            { term: "metaphor", def: "A comparison saying one thing is another." },
            { term: "personification", def: "Giving human qualities to non-human things." },
            { term: "hyperbole", def: "Extreme exaggeration for effect." },
            { term: "idiom", def: "A common phrase whose meaning is not literal." }
          ],
          quiz: [
            { q: "'She is as brave as a lion' is a:", options: ["metaphor", "simile", "idiom", "hyperbole"], answer: 1, explain: "It compares using 'as,' which makes it a simile." },
            { q: "'Time is money' is a:", options: ["simile", "metaphor", "personification", "onomatopoeia"], answer: 1, explain: "It says one thing is another without like or as, so it is a metaphor." },
            { q: "'The wind whispered' is an example of:", options: ["hyperbole", "simile", "personification", "idiom"], answer: 2, explain: "Giving the wind a human ability (whispering) is personification." },
            { q: "The idiom 'piece of cake' means:", options: ["a dessert", "something very easy", "a small portion", "a celebration"], answer: 1, explain: "'Piece of cake' means something is very easy." }
          ] },
        { id: "ela-ms-6", title: "Reading Middle-School Novels", minutes: 10, objective: "By the end, you can summarize three popular American middle-school novels and their themes.",
          body: `<p>Certain novels are read in nearly every American middle school. Knowing them helps you join book conversations and understand cultural references.</p>
<h4>The Giver (Lois Lowry)</h4>
<p><em>The Giver</em> is set in a future community with no pain, war, or color, but also no freedom or real choice. A boy named Jonas is chosen to receive all the community's memories from an old man called the Giver. He learns the truth and decides to escape. The novel explores freedom, memory, and the cost of a "perfect" society. It is a <strong>dystopia</strong>, a story about a controlled, troubling future.</p>
<h4>Holes (Louis Sachar)</h4>
<p><em>Holes</em> follows Stanley Yelnats, a boy wrongly sent to a harsh desert camp where boys dig holes as punishment. The story weaves together past and present and ends with a clever twist about a family curse and buried treasure. Its themes are fate, friendship, and justice.</p>
<h4>The Outsiders (S.E. Hinton)</h4>
<p><em>The Outsiders</em>, written by a teenager, is about rival groups in 1960s Oklahoma: the poor "Greasers" and the rich "Socs." Told by Ponyboy, it deals with class conflict, loyalty, and loss. Its famous line, <em>"Stay gold, Ponyboy,"</em> means hold on to your innocence and goodness.</p>
<p>As you read novels, track the <strong>protagonist</strong> (main character), the <strong>conflict</strong>, and the <strong>theme</strong>. These three keys unlock almost any story.</p>`,
          terms: [
            { term: "novel", def: "A long fictional story in book form." },
            { term: "dystopia", def: "A story set in a troubling, controlled future society." },
            { term: "protagonist", def: "The main character of a story." },
            { term: "theme", def: "The deeper message or big idea of a work." },
            { term: "twist", def: "A surprising turn in the plot the reader did not expect." }
          ],
          quiz: [
            { q: "The Giver is an example of a:", options: ["mystery", "dystopia", "biography", "comedy"], answer: 1, explain: "The Giver shows a controlled, troubling future, making it a dystopia." },
            { q: "In Holes, the boys are forced to:", options: ["plant trees", "dig holes", "swim", "read"], answer: 1, explain: "At Camp Green Lake the boys dig holes as punishment." },
            { q: "The Outsiders is about conflict between the Greasers and the:", options: ["Socs", "Giants", "Sharks", "Jets"], answer: 0, explain: "The rich group in The Outsiders is the Socs." },
            { q: "'Stay gold, Ponyboy' means:", options: ["get rich", "keep your innocence and goodness", "win the fight", "leave town"], answer: 1, explain: "It is a plea to hold on to one's innocence and good nature." }
          ] }
      ]}
    ]},
    { stage: "high", grades: "9–12", units: [
      { title: "Literary Analysis & The American Canon", lessons: [
        { id: "ela-hs-1", title: "Theme & Literary Analysis", minutes: 11, objective: "By the end, you can analyze a text for theme and support a claim with evidence.",
          body: `<p>In high school, reading shifts from "what happened" to "what it means." This deeper reading is called <strong>literary analysis</strong>.</p>
<h4>What theme really is</h4>
<p>A <strong>theme</strong> is a universal message about life that the author explores, not a one-word topic. "Love" is a topic; "true love requires sacrifice" is a theme. Authors rarely state the theme directly; you infer it from what happens and how characters change.</p>
<h4>Tools of analysis</h4>
<ul>
<li><strong>Symbol</strong>: an object that stands for a larger idea (a green light for hope, a dove for peace).</li>
<li><strong>Motif</strong>: an image or idea that repeats throughout a work and points to the theme.</li>
<li><strong>Characterization</strong>: how the author reveals a character's nature through actions, words, and thoughts.</li>
<li><strong>Tone</strong>: the author's attitude toward the subject (serious, ironic, hopeful).</li>
<li><strong>Irony</strong>: a contrast between what is expected and what actually happens.</li>
</ul>
<h4>Writing analysis</h4>
<p>A strong analytical paragraph makes a <strong>claim</strong> (your point), gives <strong>textual evidence</strong> (a quote or detail from the book), and then explains how the evidence proves the claim. Teachers often call this "claim, evidence, reasoning." You should always cite the text rather than just give your opinion. The phrase <em>"this shows that..."</em> is a useful bridge from evidence to explanation. Strong analysis is the central skill of high school English and college writing.</p>`,
          terms: [
            { term: "literary analysis", def: "Examining a text closely to understand its deeper meaning." },
            { term: "theme", def: "A universal message about life explored in a work." },
            { term: "symbol", def: "An object that represents a larger idea." },
            { term: "motif", def: "A repeated image or idea that supports the theme." },
            { term: "textual evidence", def: "A quote or detail from a text used to support a claim." },
            { term: "irony", def: "A contrast between what is expected and what happens." }
          ],
          quiz: [
            { q: "Which is a theme, not just a topic?", options: ["Love", "War", "True love requires sacrifice", "Friendship"], answer: 2, explain: "A theme is a full statement about life, not a single word." },
            { q: "A symbol is:", options: ["a repeated sound", "an object that stands for a larger idea", "the main character", "a spelling rule"], answer: 1, explain: "A symbol represents a bigger idea, like a dove for peace." },
            { q: "In analysis, after making a claim you should give:", options: ["another claim", "textual evidence", "a summary only", "a title"], answer: 1, explain: "Claims must be backed by textual evidence from the work." },
            { q: "An author's attitude toward the subject is called:", options: ["tone", "plot", "setting", "motif"], answer: 0, explain: "Tone is the author's attitude toward the subject." }
          ] },
        { id: "ela-hs-2", title: "The American Novel: Mockingbird, Gatsby, Of Mice and Men", minutes: 11, objective: "By the end, you can summarize three core American novels and their major themes.",
          body: `<p>Three novels appear on almost every American high school reading list. They are touchstones of the culture.</p>
<h4>To Kill a Mockingbird (Harper Lee, 1960)</h4>
<p>Set in 1930s Alabama, it is narrated by a girl named Scout. Her father, lawyer <strong>Atticus Finch</strong>, defends a Black man, Tom Robinson, falsely accused of a crime. The novel confronts racism, injustice, and moral courage. The title is a symbol: it is "a sin to kill a mockingbird" because mockingbirds only bring beauty and harm no one. Atticus is an icon of integrity in American culture.</p>
<h4>The Great Gatsby (F. Scott Fitzgerald, 1925)</h4>
<p>Set in the 1920s Jazz Age, it follows mysterious millionaire <strong>Jay Gatsby</strong>, who throws lavish parties hoping to win back his lost love, Daisy. The green light across the water symbolizes his unreachable dream. The novel critiques the <strong>American Dream</strong> and the emptiness behind wealth.</p>
<h4>Of Mice and Men (John Steinbeck, 1937)</h4>
<p>During the Great Depression, two migrant workers, the clever George and the gentle, strong but mentally disabled Lennie, dream of owning their own farm. The tragic ending explores loneliness, friendship, and broken dreams.</p>
<p>Each book uses a strong <strong>symbol</strong> (the mockingbird, the green light, the dream farm) to carry its theme. These stories shape how Americans talk about race, ambition, and the cost of dreams.</p>`,
          terms: [
            { term: "To Kill a Mockingbird", def: "Harper Lee's novel about racism and justice in the 1930s South." },
            { term: "Atticus Finch", def: "The lawyer father in Mockingbird, a symbol of integrity." },
            { term: "The Great Gatsby", def: "Fitzgerald's novel critiquing the American Dream in the 1920s." },
            { term: "American Dream", def: "The belief that anyone can succeed through hard work." },
            { term: "Of Mice and Men", def: "Steinbeck's novel about two workers' dream during the Depression." }
          ],
          quiz: [
            { q: "Who defends Tom Robinson in To Kill a Mockingbird?", options: ["Jay Gatsby", "Atticus Finch", "George", "Scout"], answer: 1, explain: "Atticus Finch is the lawyer who defends Tom Robinson." },
            { q: "The green light in The Great Gatsby symbolizes:", options: ["money only", "Gatsby's unreachable dream", "the law", "danger"], answer: 1, explain: "The green light stands for Gatsby's hopeful, unreachable dream." },
            { q: "Of Mice and Men is set during the:", options: ["Civil War", "Great Depression", "1920s only", "Revolution"], answer: 1, explain: "The novel takes place during the Great Depression." },
            { q: "Why is it 'a sin to kill a mockingbird'?", options: ["They are rare", "They only bring beauty and harm no one", "They are loud", "They are dangerous"], answer: 1, explain: "Mockingbirds are innocent and harm no one, making them a symbol of innocence." }
          ] },
        { id: "ela-hs-3", title: "Shakespeare & The Crucible", minutes: 11, objective: "By the end, you can summarize Shakespeare's main plays and The Crucible and their themes.",
          body: `<p>American high schoolers read both classic drama from England (Shakespeare) and a famous American play, <em>The Crucible</em>.</p>
<h4>William Shakespeare</h4>
<p><strong>Shakespeare</strong> (1564–1616) is the most famous writer in the English language. His plays are usually read in 9th to 12th grade.</p>
<ul>
<li><strong>Romeo and Juliet</strong>: two young lovers from feuding families (the Montagues and Capulets) fall in love, marry secretly, and die in a tragic misunderstanding. Themes: love, fate, family conflict. The phrase "star-crossed lovers" comes from it.</li>
<li><strong>Macbeth</strong>: a Scottish general hears a prophecy that he will be king, murders the king to take the throne, and is destroyed by guilt and ambition. Themes: ambition, guilt, fate. "Out, damned spot!" is from Lady Macbeth.</li>
</ul>
<p>A <strong>tragedy</strong> is a serious play in which the main character (the tragic hero) falls due to a flaw, often pride or ambition. A famous device is the <strong>soliloquy</strong>, a speech where a character alone on stage reveals private thoughts.</p>
<h4>The Crucible (Arthur Miller, 1953)</h4>
<p><em>The Crucible</em> dramatizes the 1692 Salem witch trials, where innocent people were accused of witchcraft based on lies and fear. Miller wrote it as an <strong>allegory</strong> for 1950s McCarthyism, when Americans were falsely accused of being communists. Themes: mass hysteria, reputation, and standing up for truth.</p>`,
          terms: [
            { term: "Shakespeare", def: "The most famous English-language playwright (1564-1616)." },
            { term: "tragedy", def: "A serious play where the hero falls due to a flaw." },
            { term: "soliloquy", def: "A speech by a character alone on stage revealing private thoughts." },
            { term: "The Crucible", def: "Arthur Miller's play about the Salem witch trials." },
            { term: "allegory", def: "A story that stands for a deeper real-world meaning." },
            { term: "mass hysteria", def: "Widespread fear and irrational behavior spreading through a group." }
          ],
          quiz: [
            { q: "Romeo and Juliet are called 'star-crossed' because:", options: ["they are rich", "fate seems against their love", "they are royalty", "they live far apart"], answer: 1, explain: "'Star-crossed' means fate is set against their love." },
            { q: "In Macbeth, what destroys the main character?", options: ["poverty", "ambition and guilt", "old age", "war wounds"], answer: 1, explain: "Macbeth is destroyed by his ambition and resulting guilt." },
            { q: "A soliloquy is:", options: ["a fight scene", "a speech revealing private thoughts alone", "a song", "a sword"], answer: 1, explain: "A soliloquy is a solo speech revealing a character's inner thoughts." },
            { q: "The Crucible is an allegory for:", options: ["the Civil War", "1950s McCarthyism", "the Revolution", "World War I"], answer: 1, explain: "Miller used the witch trials to mirror McCarthy-era accusations." }
          ] }
      ]},
      { title: "Rhetoric & Famous Speeches", lessons: [
        { id: "ela-hs-4", title: "Rhetoric: Ethos, Pathos, Logos", minutes: 10, objective: "By the end, you can identify the three rhetorical appeals in persuasion.",
          body: `<p><strong>Rhetoric</strong> is the art of persuasion. The ancient Greek thinker Aristotle named three ways to persuade an audience, and American students still study them.</p>
<h4>The three appeals</h4>
<ul>
<li><strong>Ethos</strong> (credibility): persuading by showing you are trustworthy or expert. Example: "As a doctor with 20 years of experience, I can tell you..." Ethos makes the audience believe the speaker.</li>
<li><strong>Pathos</strong> (emotion): persuading by stirring feelings such as pity, fear, hope, or pride. Example: a charity showing a hungry child to move you to donate.</li>
<li><strong>Logos</strong> (logic): persuading with facts, data, and reasoning. Example: "Studies show that 90% of users improved..." Logos appeals to the mind.</li>
</ul>
<p>Strong persuasion usually blends all three. A great speech might establish the speaker's authority (ethos), present statistics (logos), and then tell a moving story (pathos).</p>
<h4>Other rhetorical devices</h4>
<ul>
<li><strong>Repetition</strong>: repeating a phrase for emphasis (as in "I have a dream").</li>
<li><strong>Rhetorical question</strong>: a question asked for effect, not for an answer.</li>
<li><strong>Parallelism</strong>: using the same grammatical pattern for rhythm, like "of the people, by the people, for the people."</li>
</ul>
<p>Recognizing these appeals helps you think critically about advertisements, politics, and news, so you are persuaded by good reasoning rather than tricks.</p>`,
          terms: [
            { term: "rhetoric", def: "The art of persuasive speaking and writing." },
            { term: "ethos", def: "An appeal based on the speaker's credibility or character." },
            { term: "pathos", def: "An appeal to the audience's emotions." },
            { term: "logos", def: "An appeal based on logic, facts, and reasoning." },
            { term: "parallelism", def: "Repeating the same grammatical pattern for rhythm." },
            { term: "rhetorical question", def: "A question asked for effect, not for an answer." }
          ],
          quiz: [
            { q: "Ethos appeals to:", options: ["emotion", "logic", "the speaker's credibility", "humor"], answer: 2, explain: "Ethos persuades by establishing the speaker's trustworthiness." },
            { q: "Showing a sad image to move donors uses:", options: ["logos", "pathos", "ethos", "parallelism"], answer: 1, explain: "Pathos appeals to the audience's emotions." },
            { q: "'Studies show that 90% improved' is an example of:", options: ["pathos", "ethos", "logos", "irony"], answer: 2, explain: "Using data and reasoning is logos." },
            { q: "'Of the people, by the people, for the people' uses:", options: ["a metaphor", "parallelism", "ethos", "hyperbole"], answer: 1, explain: "Repeating the same grammatical pattern is parallelism." }
          ] },
        { id: "ela-hs-5", title: "Famous American Speeches", minutes: 10, objective: "By the end, you can recognize two landmark American speeches and why they matter.",
          body: `<p>Two speeches are quoted constantly in American life. Knowing them is essential to cultural fluency.</p>
<h4>The Gettysburg Address (Abraham Lincoln, 1863)</h4>
<p>President <strong>Lincoln</strong> gave this very short speech (under three minutes) during the Civil War, at the dedication of a cemetery for soldiers killed at the Battle of Gettysburg. It begins, <em>"Four score and seven years ago..."</em> ("four score and seven" means 87 years, pointing back to 1776). Lincoln reframed the war as a test of whether a nation "conceived in liberty" and "dedicated to the proposition that all men are created equal" could survive. It ends with the hope that "government of the people, by the people, for the people, shall not perish from the earth." Despite its shortness, it is among the most important speeches in US history.</p>
<h4>"I Have a Dream" (Martin Luther King Jr., 1963)</h4>
<p><strong>Dr. King</strong> delivered this speech in Washington, D.C., during the civil rights movement, calling for racial equality and an end to segregation. He used powerful repetition ("I have a dream that...") and a famous line dreaming that his children "will not be judged by the color of their skin but by the content of their character." The speech is celebrated for its rhetoric and its role in advancing civil rights.</p>
<p>Both speeches appeal to America's founding ideals of liberty and equality, and both use repetition and parallelism to stir the audience.</p>`,
          terms: [
            { term: "Gettysburg Address", def: "Lincoln's short 1863 Civil War speech on liberty and equality." },
            { term: "Abraham Lincoln", def: "The 16th US president who led during the Civil War." },
            { term: "I Have a Dream", def: "Martin Luther King Jr.'s 1963 speech for racial equality." },
            { term: "Martin Luther King Jr.", def: "A leader of the American civil rights movement." },
            { term: "civil rights movement", def: "The 1950s-60s struggle for equal rights for Black Americans." }
          ],
          quiz: [
            { q: "Who gave the Gettysburg Address?", options: ["Martin Luther King Jr.", "Abraham Lincoln", "George Washington", "Thomas Jefferson"], answer: 1, explain: "Lincoln delivered the Gettysburg Address in 1863." },
            { q: "'Four score and seven years ago' refers to how many years?", options: ["47", "87", "100", "76"], answer: 1, explain: "A score is 20, so four score and seven is 87 years." },
            { q: "Dr. King's 'I Have a Dream' speech called for:", options: ["lower taxes", "racial equality", "war", "new roads"], answer: 1, explain: "King called for racial equality and an end to segregation." },
            { q: "King hoped his children would be judged by:", options: ["their wealth", "the color of their skin", "the content of their character", "their schooling"], answer: 2, explain: "He dreamed they would be judged by the content of their character." }
          ] }
      ]},
      { title: "Research Writing & Vocabulary", lessons: [
        { id: "ela-hs-6", title: "The Research Paper & MLA Citation", minutes: 11, objective: "By the end, you can outline a research paper and cite sources in MLA style.",
          body: `<p>A <strong>research paper</strong> is a longer essay that answers a question using outside <strong>sources</strong>. Learning to write one, and to credit your sources, is a key skill for college.</p>
<h4>The process</h4>
<ul>
<li>Choose a focused topic and form a <strong>research question</strong>.</li>
<li>Find reliable sources (books, articles, trustworthy websites). Evaluate each for accuracy and bias.</li>
<li>Take notes and build a thesis, the argument your paper will prove.</li>
<li>Write, organizing evidence into clear paragraphs, then revise.</li>
</ul>
<h4>Giving credit: MLA style</h4>
<p>In English classes, the standard format is <strong>MLA</strong> (Modern Language Association). You must cite sources to avoid <strong>plagiarism</strong>, which is using someone else's words or ideas without credit; it is a serious academic offense.</p>
<p>MLA uses two parts:</p>
<ul>
<li><strong>In-text citation</strong>: right after a quote or idea, put the author's last name and page number in parentheses, like <em>(Smith 42)</em>.</li>
<li><strong>Works Cited page</strong>: a list at the end with full details of every source, in alphabetical order by author's last name.</li>
</ul>
<p>A basic MLA book entry looks like: <em>Author Last, First. Title of Book. Publisher, Year.</em> A <strong>quotation</strong> must be copied exactly and placed in quotation marks; a <strong>paraphrase</strong> restates an idea in your own words but still needs a citation. Careful citation shows honesty and lets readers check your work.</p>`,
          terms: [
            { term: "research paper", def: "A long essay that answers a question using outside sources." },
            { term: "source", def: "A book, article, or site that provides information." },
            { term: "MLA", def: "The Modern Language Association citation style used in English classes." },
            { term: "plagiarism", def: "Using someone's words or ideas without giving credit." },
            { term: "in-text citation", def: "A short note in parentheses crediting a source within the text." },
            { term: "Works Cited", def: "The list of full source details at the end of an MLA paper." }
          ],
          quiz: [
            { q: "MLA stands for:", options: ["Modern Language Association", "Main Library Archive", "Major Literary Award", "Multi-Level Analysis"], answer: 0, explain: "MLA is the Modern Language Association style." },
            { q: "Using someone's ideas without credit is called:", options: ["paraphrasing", "plagiarism", "citing", "quoting"], answer: 1, explain: "Plagiarism is presenting others' work as your own." },
            { q: "An MLA in-text citation includes the author's name and:", options: ["the publisher", "the page number", "the price", "the date you read it"], answer: 1, explain: "MLA in-text citations give the author's last name and page number." },
            { q: "The list of all sources at the end is the:", options: ["Title Page", "Works Cited", "Index", "Glossary"], answer: 1, explain: "MLA papers end with a Works Cited page." }
          ] },
        { id: "ela-hs-7", title: "SAT-Level Vocabulary", minutes: 10, objective: "By the end, you can use context clues and word parts to learn advanced vocabulary.",
          body: `<p>The <strong>SAT</strong> is a major college-entrance exam, and strong vocabulary helps on it and in advanced reading. American students build vocabulary using two main strategies.</p>
<h4>Context clues</h4>
<p>Often you can guess a word's meaning from the surrounding sentence. <strong>Context clues</strong> include nearby definitions, examples, or contrasts. In <em>"He was so loquacious that he talked for hours,"</em> the phrase "talked for hours" tells you <em>loquacious</em> means talkative.</p>
<h4>Word parts (roots and affixes)</h4>
<p>Many English words come from Latin and Greek. Knowing common <strong>roots</strong>, <strong>prefixes</strong>, and <strong>suffixes</strong> lets you decode new words:</p>
<ul>
<li>Prefix <em>bene-</em> = good (benefit, benevolent).</li>
<li>Prefix <em>mal-</em> = bad (malice, malfunction).</li>
<li>Root <em>chron</em> = time (chronological, synchronize).</li>
<li>Prefix <em>re-</em> = again (rewrite, return).</li>
</ul>
<h4>Useful advanced words</h4>
<ul>
<li><strong>ambiguous</strong>: having more than one possible meaning; unclear.</li>
<li><strong>benevolent</strong>: kind and generous.</li>
<li><strong>candid</strong>: honest and direct.</li>
<li><strong>diligent</strong>: hardworking and careful.</li>
<li><strong>arduous</strong>: very difficult and tiring.</li>
</ul>
<p>The best way to grow vocabulary is to read widely and keep a list of new words. Modern SAT questions test vocabulary <em>in context</em> rather than asking for memorized definitions, so understanding how a word works in a sentence matters most.</p>`,
          terms: [
            { term: "SAT", def: "A major standardized test used for US college admission." },
            { term: "context clue", def: "A hint in the surrounding text that reveals a word's meaning." },
            { term: "root", def: "The core part of a word that carries its basic meaning." },
            { term: "prefix", def: "A word part added to the front, like re- or mal-." },
            { term: "suffix", def: "A word part added to the end, like -ous or -tion." },
            { term: "ambiguous", def: "Having more than one possible meaning; unclear." }
          ],
          quiz: [
            { q: "A context clue helps you:", options: ["spell a word", "guess a word's meaning from the sentence", "find the author", "count syllables"], answer: 1, explain: "Context clues reveal meaning from surrounding text." },
            { q: "The prefix 'mal-' means:", options: ["good", "bad", "time", "again"], answer: 1, explain: "Mal- means bad, as in malice or malfunction." },
            { q: "Something 'ambiguous' is:", options: ["very clear", "unclear or having multiple meanings", "very kind", "very fast"], answer: 1, explain: "Ambiguous means unclear or open to more than one meaning." },
            { q: "The root 'chron' relates to:", options: ["water", "time", "light", "sound"], answer: 1, explain: "Chron means time, as in chronological." }
          ] }
      ]}
    ]}
  ]
});
