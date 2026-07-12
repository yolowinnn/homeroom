window.HR_DATA = window.HR_DATA || { subjects: [] };
window.HR_DATA.subjects.push({
  key: "languages",
  name: "World Languages",
  icon: "🗣️",
  color: "#14b8a6",
  blurb: "The foreign language every US student studies — most often Spanish.",
  why: "Spanish is the second-most spoken language in the US; basic Spanish is genuinely useful in daily American life.",
  stages: [
    { stage: "elementary", grades: "K–5", units: [
      { title: "Why Learn a Language", lessons: [
        { id: "languages-el-1", title: "World Languages in US Schools", minutes: 9, objective: "By the end, you can explain how foreign languages are taught in American schools and why Spanish is the most useful one to start with.",
          body: `<p>In US schools, "World Languages" (sometimes called "foreign languages") means learning a language other than English. Almost every American student studies one. The most common choice by far is <strong>Spanish</strong>, because it is the second-most spoken language in the United States. The next most common is <strong>French</strong>, followed by languages like German, Mandarin Chinese, and Latin.</p>
<p>Children sometimes start a little language in elementary school, but serious study usually begins in middle or high school. Most colleges expect students to have studied at least <strong>two years</strong> of one language, and competitive universities like to see three or four years. The goal is not just memorizing words. Schools want students to be able to listen, speak, read, and write a real second language.</p>
<p>In high school, strong students can take an <strong>AP (Advanced Placement) language exam</strong>, such as AP Spanish. A good score can earn college credit. There are also "immersion" and "dual-language" programs where part of the school day is taught entirely in Spanish.</p>
<p>For you as an adult living in America, learning Spanish is the most practical choice. You will hear it in stores, at work, on signs, and in many neighborhoods. Tens of millions of people in the US speak it at home. Even a small amount of Spanish helps you connect with neighbors and coworkers, and it makes English grammar easier to understand by comparison.</p>
<p>In these lessons we will start with simple, real Spanish you can use right away: greetings, introductions, numbers, and colors. You do not need to be perfect. The aim is to communicate.</p>`,
          terms: [
            { term: "World Languages", def: "School subject for learning a language other than English" },
            { term: "Spanish", def: "The most-studied world language in US schools (español)" },
            { term: "French", def: "The second most commonly offered language" },
            { term: "AP exam", def: "Advanced Placement test that can earn college credit" },
            { term: "immersion", def: "Program where lessons are taught in the target language" }
          ],
          quiz: [
            { q: "Which language is most commonly studied in US schools?", options: ["Spanish", "German", "Latin", "Mandarin"], answer: 0, explain: "Spanish is the most-studied because it is the second-most spoken language in the US." },
            { q: "How many years of a language do most colleges expect?", options: ["At least two years", "No years", "Ten years", "One month"], answer: 0, explain: "Two years of one language is the common minimum expectation." },
            { q: "What can a high score on an AP language exam earn?", options: ["College credit", "A driver's license", "A passport", "Nothing"], answer: 0, explain: "AP exams can earn college credit when scores are high enough." },
            { q: "Why is Spanish especially practical for an adult in the US?", options: ["It is widely spoken in daily American life", "It is the official US language", "No one speaks it", "It is required by law"], answer: 0, explain: "Spanish is heard in stores, work, and neighborhoods across the US." }
          ] },
        { id: "languages-el-2", title: "Why Learn Another Language", minutes: 8, objective: "By the end, you can name several real benefits of learning a second language as an adult.",
          body: `<p>Why bother learning a language when you are already busy learning English? There are real, practical reasons.</p>
<p><strong>It opens doors.</strong> Knowing even basic Spanish helps you talk with neighbors, customers, and coworkers. Many jobs in the US — in healthcare, retail, construction, and education — pay more or hire faster if you speak two languages. Being "bilingual" is a valuable skill on a job application.</p>
<p><strong>It helps your brain.</strong> Studies show that learning a language improves memory and focus. Switching between two languages is good mental exercise at any age. Adults can absolutely learn — you may even learn grammar faster than a child because you already understand how language works.</p>
<p><strong>It builds connection.</strong> When you greet someone in their own language, even with mistakes, people appreciate the effort. It shows respect and warmth. A simple "hola" or "gracias" can make a stranger smile.</p>
<p><strong>It makes travel and life easier.</strong> Spanish is spoken in over twenty countries. Restaurant menus, road signs, and product labels in the US are often printed in both English and Spanish, so a little knowledge goes a long way.</p>
<p>The key for adults is steady practice, not perfection. Five or ten minutes a day beats one long study session a week. Listen to songs, label objects in your home, and try out new words on real people. Mistakes are part of learning — every fluent speaker made thousands of them first.</p>`,
          terms: [
            { term: "bilingual", def: "Able to speak two languages" },
            { term: "hola", def: "Spanish for \"hello\"" },
            { term: "gracias", def: "Spanish for \"thank you\"" },
            { term: "fluent", def: "Able to speak a language smoothly and easily" },
            { term: "practice", def: "Repeating something regularly to get better" }
          ],
          quiz: [
            { q: "What does \"bilingual\" mean?", options: ["Able to speak two languages", "Able to read only", "A type of job", "Speaking very loudly"], answer: 0, explain: "Bilingual means speaking two languages." },
            { q: "Which study habit works best for adults?", options: ["A little practice every day", "One long session a month", "Never speaking aloud", "Only memorizing rules"], answer: 0, explain: "Short daily practice is more effective than rare long sessions." },
            { q: "What does \"gracias\" mean?", options: ["Thank you", "Goodbye", "Please", "Hello"], answer: 0, explain: "Gracias means \"thank you\" in Spanish." },
            { q: "Why is learning a language good for adults?", options: ["It exercises the brain and can be learned at any age", "Only children can learn", "It harms memory", "It is illegal"], answer: 0, explain: "Adults can learn well, and language study improves memory and focus." }
          ] }
      ]},
      { title: "First Words of Spanish", lessons: [
        { id: "languages-el-3", title: "Greetings and Introductions", minutes: 9, objective: "By the end, you can greet someone and introduce yourself in basic Spanish.",
          body: `<p>Let's learn the words you would use the very first time you meet a Spanish speaker. Spanish is spelled almost exactly how it sounds, which makes it easier than English to read aloud.</p>
<p><strong>Greetings.</strong> Say <em>hola</em> (OH-lah) for "hello." For times of day: <em>buenos días</em> (good morning), <em>buenas tardes</em> (good afternoon), and <em>buenas noches</em> (good evening / good night).</p>
<p><strong>Asking how someone is.</strong> A common question is <em>¿Cómo estás?</em> meaning "How are you?" You can answer <em>Bien, gracias</em> ("Fine, thanks") or <em>Muy bien</em> ("Very well"). Notice the upside-down question mark at the start of a Spanish question — that is normal in Spanish.</p>
<p><strong>Introducing yourself.</strong> Say <em>Me llamo Ana</em> ("My name is Ana") or <em>Soy Ana</em> ("I am Ana"). To ask someone's name, say <em>¿Cómo te llamas?</em> ("What is your name?"). A polite reply when meeting someone is <em>Mucho gusto</em> ("Nice to meet you").</p>
<p><strong>Saying goodbye.</strong> Use <em>adiós</em> (goodbye), <em>hasta luego</em> ("see you later"), or <em>hasta mañana</em> ("see you tomorrow").</p>
<p>Put it together in a tiny conversation: "Hola, ¿cómo estás?" — "Bien, gracias. Me llamo Carlos. ¿Y tú?" — "Me llamo Ana. Mucho gusto." Practice this out loud. The accent marks (like the one in <em>adiós</em>) tell you which syllable to stress.</p>`,
          terms: [
            { term: "hola", def: "Hello" },
            { term: "buenos días", def: "Good morning" },
            { term: "¿Cómo estás?", def: "How are you?" },
            { term: "Me llamo...", def: "My name is..." },
            { term: "Mucho gusto", def: "Nice to meet you" },
            { term: "adiós", def: "Goodbye" }
          ],
          quiz: [
            { q: "How do you say \"hello\" in Spanish?", options: ["Hola", "Adiós", "Gracias", "Bien"], answer: 0, explain: "Hola means hello." },
            { q: "What does \"Me llamo Ana\" mean?", options: ["My name is Ana", "Goodbye Ana", "Thank you Ana", "Where is Ana"], answer: 0, explain: "Me llamo means \"my name is.\"" },
            { q: "Which phrase means \"Nice to meet you\"?", options: ["Mucho gusto", "Buenas noches", "Hasta luego", "Cómo estás"], answer: 0, explain: "Mucho gusto is used when meeting someone." },
            { q: "What is unusual about the start of a Spanish question?", options: ["It uses an upside-down question mark", "It has no marks", "It starts with a number", "It is always capitalized"], answer: 0, explain: "Spanish questions open with an inverted question mark (¿)." }
          ] },
        { id: "languages-el-4", title: "Numbers 1 to 20", minutes: 8, objective: "By the end, you can count from one to twenty in Spanish.",
          body: `<p>Numbers are some of the most useful words in any language. You need them for prices, phone numbers, addresses, and time. Here are one through twenty in Spanish.</p>
<p><strong>One to ten:</strong> uno (1), dos (2), tres (3), cuatro (4), cinco (5), seis (6), siete (7), ocho (8), nueve (9), diez (10).</p>
<p><strong>Eleven to twenty:</strong> once (11), doce (12), trece (13), catorce (14), quince (15), dieciséis (16), diecisiete (17), dieciocho (18), diecinueve (19), veinte (20).</p>
<p>Notice a helpful pattern: from sixteen on, the numbers combine ten and the smaller number. <em>Dieciséis</em> is literally "ten and six" (diez + y + seis). <em>Diecisiete</em> is "ten and seven." Once you know one through ten, the teens become easier.</p>
<p>The numbers one through fifteen each have their own special word and must be memorized: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince.</p>
<p>A good way to practice is to count objects around you out loud — steps as you walk, plates as you set the table, or dollars when you pay. You can also say your phone number digit by digit in Spanish. Try counting backwards from diez to uno, too. Repetition is what makes numbers automatic, so you do not have to translate in your head every time.</p>`,
          terms: [
            { term: "uno", def: "One (1)" },
            { term: "cinco", def: "Five (5)" },
            { term: "diez", def: "Ten (10)" },
            { term: "quince", def: "Fifteen (15)" },
            { term: "veinte", def: "Twenty (20)" }
          ],
          quiz: [
            { q: "What number is \"cinco\"?", options: ["5", "2", "9", "15"], answer: 0, explain: "Cinco means five." },
            { q: "Which word means \"ten\"?", options: ["Diez", "Dos", "Doce", "Trece"], answer: 0, explain: "Diez is ten." },
            { q: "\"Dieciséis\" combines which two ideas?", options: ["Ten and six", "Two and six", "Ten and ten", "Six and six"], answer: 0, explain: "Dieciséis literally means ten-and-six." },
            { q: "What is \"veinte\"?", options: ["20", "12", "11", "8"], answer: 0, explain: "Veinte is twenty." }
          ] },
        { id: "languages-el-5", title: "Colors and Basic Nouns", minutes: 8, objective: "By the end, you can name common colors and everyday objects in Spanish.",
          body: `<p>Colors and the names of everyday things let you describe the world around you. Let's start with colors.</p>
<p><strong>Colors (los colores):</strong> rojo (red), azul (blue), verde (green), amarillo (yellow), negro (black), blanco (white), and naranja (orange).</p>
<p><strong>Everyday nouns:</strong> casa (house), agua (water), perro (dog), gato (cat), libro (book), and mesa (table).</p>
<p>In Spanish, every noun is either <strong>masculine</strong> or <strong>feminine</strong>. This affects the word for "the." Use <em>el</em> before most masculine nouns and <em>la</em> before most feminine nouns: <em>el perro</em> (the dog), <em>la casa</em> (the house), <em>el libro</em> (the book), <em>la mesa</em> (the table). A useful clue: many words ending in <strong>-o</strong> are masculine, and many ending in <strong>-a</strong> are feminine. It is not a perfect rule, but it helps.</p>
<p>Colors also change to match the noun. "The red book" is <em>el libro rojo</em>, but "the red house" is <em>la casa roja</em> — the <em>o</em> changes to <em>a</em> to match a feminine noun. Notice that the color comes <strong>after</strong> the noun in Spanish, the opposite of English.</p>
<p>Practice by pointing at things and naming both the color and the object: <em>la mesa azul</em> (the blue table), <em>el gato negro</em> (the black cat). Combining a color with a noun is your first real Spanish phrase.</p>`,
          terms: [
            { term: "rojo", def: "Red" },
            { term: "azul", def: "Blue" },
            { term: "casa", def: "House (feminine)" },
            { term: "perro", def: "Dog (masculine)" },
            { term: "el / la", def: "The (masculine / feminine)" }
          ],
          quiz: [
            { q: "What color is \"azul\"?", options: ["Blue", "Red", "Green", "Black"], answer: 0, explain: "Azul means blue." },
            { q: "Which word means \"the\" before a feminine noun?", options: ["la", "el", "los", "un"], answer: 0, explain: "La is used before feminine nouns." },
            { q: "How do you say \"the red house\"?", options: ["la casa roja", "el casa rojo", "la rojo casa", "el rojo casa"], answer: 0, explain: "Casa is feminine, so the color becomes roja and follows the noun." },
            { q: "In Spanish, where does the color word usually go?", options: ["After the noun", "Before the noun", "At the start of the sentence", "It is left out"], answer: 0, explain: "Colors normally come after the noun in Spanish." }
          ] }
      ]}
    ]},
    { stage: "middle", grades: "6–8", units: [
      { title: "Spanish Verbs and Time", lessons: [
        { id: "languages-ms-1", title: "Ser and Estar: Two Ways to Say \"To Be\"", minutes: 10, objective: "By the end, you can choose between ser and estar to say \"to be\" in simple sentences.",
          body: `<p>English has one verb "to be." Spanish has two: <strong>ser</strong> and <strong>estar</strong>. Both mean "to be," but they are used in different situations, and choosing the right one is a key early skill.</p>
<p><strong>Ser</strong> is for permanent or defining facts: who you are, where you are from, your job, and what something is like by nature. Examples: <em>Soy Ana</em> (I am Ana), <em>Soy de México</em> (I am from Mexico), <em>Soy maestra</em> (I am a teacher), <em>Ella es alta</em> (She is tall).</p>
<p>Its forms: <em>yo soy</em> (I am), <em>tú eres</em> (you are), <em>él/ella es</em> (he/she is), <em>nosotros somos</em> (we are), <em>ellos son</em> (they are).</p>
<p><strong>Estar</strong> is for temporary states and locations: how you feel right now and where something is. Examples: <em>Estoy cansado</em> (I am tired), <em>Estoy en casa</em> (I am at home), <em>La comida está caliente</em> (The food is hot right now).</p>
<p>Its forms: <em>yo estoy</em>, <em>tú estás</em>, <em>él/ella está</em>, <em>nosotros estamos</em>, <em>ellos están</em>.</p>
<p>A simple memory trick: use <strong>estar</strong> for "location" and "emotion" (things that can change), and <strong>ser</strong> for "identity" (things that stay the same). So "I am happy today" uses estar (<em>estoy feliz</em>), but "I am a person" uses ser (<em>soy una persona</em>). With practice the choice starts to feel natural.</p>`,
          terms: [
            { term: "ser", def: "To be — for permanent traits and identity" },
            { term: "estar", def: "To be — for feelings and location" },
            { term: "soy", def: "I am (from ser)" },
            { term: "estoy", def: "I am (from estar)" },
            { term: "de", def: "From / of" }
          ],
          quiz: [
            { q: "Which verb describes where you are right now?", options: ["estar", "ser", "ir", "tener"], answer: 0, explain: "Estar is used for location and temporary states." },
            { q: "How do you say \"I am from Mexico\"?", options: ["Soy de México", "Estoy de México", "Soy en México", "Estoy México"], answer: 0, explain: "Origin is a permanent fact, so use ser: soy de México." },
            { q: "\"Estoy cansado\" means:", options: ["I am tired", "I am tall", "I am a teacher", "I am from Spain"], answer: 0, explain: "Estar plus a feeling: estoy cansado means \"I am tired.\"" },
            { q: "Which uses ser correctly?", options: ["Soy maestra (I am a teacher)", "Soy en casa", "Soy cansado today only", "Soy hot right now"], answer: 0, explain: "A job is part of identity, so ser is correct: soy maestra." }
          ] },
        { id: "languages-ms-2", title: "Regular -ar Verbs in the Present", minutes: 10, objective: "By the end, you can conjugate common regular -ar verbs in the present tense.",
          body: `<p>Most Spanish verbs follow predictable patterns. The easiest group ends in <strong>-ar</strong>, like <em>hablar</em> (to speak), <em>trabajar</em> (to work), <em>estudiar</em> (to study), and <em>caminar</em> (to walk). Learn one pattern and you can use hundreds of verbs.</p>
<p>To conjugate a regular -ar verb in the present, remove the <em>-ar</em> ending and add a new ending for each subject:</p>
<p><strong>hablar (to speak):</strong> yo hablo (I speak), tú hablas (you speak), él/ella habla (he/she speaks), nosotros hablamos (we speak), ellos hablan (they speak).</p>
<p>The endings are: <strong>-o, -as, -a, -amos, -an</strong>. Notice that you usually do not need to say "yo" or "tú," because the ending already tells you who is doing the action. <em>Hablo español</em> by itself means "I speak Spanish."</p>
<p>Try it with <em>trabajar</em>: yo trabajo, tú trabajas, él trabaja, nosotros trabajamos, ellos trabajan. And <em>estudiar</em>: yo estudio, tú estudias, ella estudia, nosotros estudiamos, ellos estudian.</p>
<p>The Spanish present tense covers more than one English meaning. <em>Hablo</em> can mean "I speak," "I am speaking," or "I do speak." So <em>Estudio inglés</em> can mean "I study English" or "I am studying English" depending on context.</p>
<p>Practice making real sentences about your day: <em>Trabajo en una tienda</em> (I work in a store), <em>Camino al parque</em> (I walk to the park), <em>Hablo un poco de español</em> (I speak a little Spanish).</p>`,
          terms: [
            { term: "hablar", def: "To speak" },
            { term: "trabajar", def: "To work" },
            { term: "estudiar", def: "To study" },
            { term: "-o, -as, -a, -amos, -an", def: "Present-tense endings for -ar verbs" },
            { term: "conjugate", def: "To change a verb to match the subject" }
          ],
          quiz: [
            { q: "What is the \"yo\" (I) form of hablar?", options: ["hablo", "hablas", "habla", "hablan"], answer: 0, explain: "Drop -ar and add -o: yo hablo." },
            { q: "Which ending goes with \"nosotros\" (we)?", options: ["-amos", "-o", "-as", "-an"], answer: 0, explain: "Nosotros uses -amos: hablamos." },
            { q: "\"Trabajo en una tienda\" means:", options: ["I work in a store", "You work in a store", "We walk to the store", "They study"], answer: 0, explain: "Trabajo is the yo form: \"I work.\"" },
            { q: "\"Estudio inglés\" can mean:", options: ["I study / am studying English", "He studies English", "We studied English", "Study English!"], answer: 0, explain: "The present tense covers both \"I study\" and \"I am studying.\"" }
          ] },
        { id: "languages-ms-3", title: "Days, Months, and Telling Time", minutes: 10, objective: "By the end, you can say the days, months, and the time of day in Spanish.",
          body: `<p>Talking about time is essential for work and appointments. Let's cover days, months, and the clock.</p>
<p><strong>Days of the week (los días):</strong> lunes (Monday), martes (Tuesday), miércoles (Wednesday), jueves (Thursday), viernes (Friday), sábado (Saturday), domingo (Sunday). In Spanish, the week usually starts with Monday, and days are not capitalized.</p>
<p><strong>Months (los meses):</strong> enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre. They look similar to English, which makes them easy to remember.</p>
<p><strong>Telling time.</strong> Ask <em>¿Qué hora es?</em> ("What time is it?"). For one o'clock, say <em>Es la una</em>. For other hours, use <em>Son las</em>: <em>Son las dos</em> (It is two o'clock), <em>Son las tres</em> (three o'clock). Add minutes with <em>y</em>: <em>Son las dos y diez</em> (2:10). Half past is <em>y media</em>: <em>Son las dos y media</em> (2:30). Quarter past is <em>y cuarto</em> (2:15).</p>
<p>To say "on Monday" use <em>el lunes</em>, and "on Mondays" (every Monday) use <em>los lunes</em>. For dates, say the number then <em>de</em> then the month: <em>el cinco de mayo</em> (the fifth of May).</p>
<p>Practice by saying today's day and date out loud, then reading clocks around you in Spanish. This skill is very practical for making appointments and being on time.</p>`,
          terms: [
            { term: "lunes", def: "Monday" },
            { term: "enero", def: "January" },
            { term: "¿Qué hora es?", def: "What time is it?" },
            { term: "Son las...", def: "It is ... o'clock (for 2 and up)" },
            { term: "y media", def: "Half past (:30)" }
          ],
          quiz: [
            { q: "What day is \"viernes\"?", options: ["Friday", "Monday", "Sunday", "Tuesday"], answer: 0, explain: "Viernes is Friday." },
            { q: "How do you ask \"What time is it?\"", options: ["¿Qué hora es?", "¿Cómo estás?", "¿Cómo te llamas?", "¿Dónde está?"], answer: 0, explain: "¿Qué hora es? asks for the time." },
            { q: "How do you say \"It is two o'clock\"?", options: ["Son las dos", "Es la dos", "Son la una", "Es las dos"], answer: 0, explain: "For two and higher, use Son las: Son las dos." },
            { q: "\"Son las tres y media\" means:", options: ["3:30", "3:00", "2:30", "3:15"], answer: 0, explain: "Y media adds half an hour, so it is 3:30." }
          ] }
      ]},
      { title: "Everyday Talk", lessons: [
        { id: "languages-ms-4", title: "Family and Food Vocabulary", minutes: 9, objective: "By the end, you can name family members and common foods in Spanish.",
          body: `<p>Two topics come up in almost every conversation: family and food. Let's build vocabulary for both.</p>
<p><strong>Family (la familia):</strong> madre (mother), padre (father), hijo (son), hija (daughter), hermano (brother), hermana (sister), abuelo (grandfather), abuela (grandmother), esposo (husband), and esposa (wife). Notice the -o / -a pattern again: <em>hermano</em> is brother, <em>hermana</em> is sister.</p>
<p>To say a family belongs to you, use <em>mi</em> (my) for one person and <em>mis</em> for more than one: <em>mi madre</em> (my mother), <em>mis hermanos</em> (my brothers, or brothers and sisters together). A handy phrase: <em>Tengo dos hijos</em> means "I have two children" — <em>tengo</em> means "I have."</p>
<p><strong>Food (la comida):</strong> pan (bread), leche (milk), agua (water), arroz (rice), pollo (chicken), carne (meat), fruta (fruit), verduras (vegetables), and café (coffee). At a meal you might say <em>Tengo hambre</em> (I am hungry) or <em>Tengo sed</em> (I am thirsty).</p>
<p>Useful at the table: <em>Me gusta el café</em> means "I like coffee," and <em>No me gusta</em> means "I don't like it." For more than one thing, use <em>Me gustan</em>: <em>Me gustan las frutas</em> (I like fruits).</p>
<p>Practice describing your own family and your favorite foods out loud. Real, personal sentences stick in memory far better than random word lists.</p>`,
          terms: [
            { term: "madre / padre", def: "Mother / father" },
            { term: "hermano / hermana", def: "Brother / sister" },
            { term: "tengo", def: "I have" },
            { term: "comida", def: "Food" },
            { term: "Me gusta", def: "I like (one thing)" }
          ],
          quiz: [
            { q: "What does \"hermana\" mean?", options: ["Sister", "Brother", "Mother", "Daughter"], answer: 0, explain: "Hermana is sister; hermano is brother." },
            { q: "How do you say \"my mother\"?", options: ["mi madre", "mis madre", "mi padre", "el madre"], answer: 0, explain: "Mi means \"my\" for one person: mi madre." },
            { q: "\"Tengo hambre\" means:", options: ["I am hungry", "I am thirsty", "I have a sister", "I like food"], answer: 0, explain: "Tengo hambre literally means \"I have hunger\" = I am hungry." },
            { q: "How do you say \"I like coffee\"?", options: ["Me gusta el café", "Me gustan el café", "No me gusta café", "Tengo café"], answer: 0, explain: "For one thing, use Me gusta: Me gusta el café." }
          ] },
        { id: "languages-ms-5", title: "Forming Simple Questions", minutes: 9, objective: "By the end, you can ask basic questions in Spanish using question words.",
          body: `<p>Asking questions lets you get information and keep a conversation going. Spanish questions are simpler than they look.</p>
<p>The easiest way to ask a yes/no question is to take a statement and raise your voice at the end. <em>Hablas español</em> ("You speak Spanish") becomes <em>¿Hablas español?</em> ("Do you speak Spanish?"). In writing, add the inverted question mark at the start: <em>¿...?</em></p>
<p><strong>Question words:</strong> <em>¿Qué?</em> (What?), <em>¿Quién?</em> (Who?), <em>¿Dónde?</em> (Where?), <em>¿Cuándo?</em> (When?), <em>¿Por qué?</em> (Why?), <em>¿Cómo?</em> (How?), and <em>¿Cuánto?</em> (How much?). These all carry an accent mark when used in a question.</p>
<p>Examples you can use right away: <em>¿Dónde está el baño?</em> (Where is the bathroom?), <em>¿Qué es esto?</em> (What is this?), <em>¿Cuánto cuesta?</em> (How much does it cost?), <em>¿Cómo se dice...?</em> (How do you say...?), and <em>¿Quién es?</em> (Who is it?).</p>
<p>Answering "why" uses <em>porque</em> ("because"), written as one word — different from the question <em>¿por qué?</em> (two words). For example: <em>¿Por qué estudias español? Porque es útil.</em> ("Why do you study Spanish? Because it is useful.")</p>
<p>One very practical question for a learner is <em>¿Cómo se dice "table" en español?</em> — "How do you say 'table' in Spanish?" It lets you learn new words from any Spanish speaker. Practice asking real questions about prices, directions, and meanings.</p>`,
          terms: [
            { term: "¿Qué?", def: "What?" },
            { term: "¿Dónde?", def: "Where?" },
            { term: "¿Cuánto cuesta?", def: "How much does it cost?" },
            { term: "¿Cómo se dice...?", def: "How do you say...?" },
            { term: "porque", def: "Because (one word)" }
          ],
          quiz: [
            { q: "Which word means \"where?\"", options: ["¿Dónde?", "¿Qué?", "¿Quién?", "¿Cuándo?"], answer: 0, explain: "¿Dónde? asks \"where?\"" },
            { q: "How do you ask the price of something?", options: ["¿Cuánto cuesta?", "¿Qué es esto?", "¿Quién es?", "¿Cómo estás?"], answer: 0, explain: "¿Cuánto cuesta? means \"How much does it cost?\"" },
            { q: "What is the simplest way to make a yes/no question?", options: ["Raise your voice at the end of a statement", "Add a number", "Remove the verb", "Whisper"], answer: 0, explain: "Intonation alone can turn a statement into a yes/no question." },
            { q: "\"Porque\" (one word) means:", options: ["Because", "Why", "Where", "What"], answer: 0, explain: "Porque means \"because\"; ¿por qué? means \"why?\"" }
          ] }
      ]}
    ]},
    { stage: "high", grades: "9–12", units: [
      { title: "Past Tense and Real-World Spanish", lessons: [
        { id: "languages-hs-1", title: "Talking About the Past", minutes: 11, objective: "By the end, you can form simple past-tense sentences with regular verbs.",
          body: `<p>So far you have spoken in the present. To tell what you did, you need the past tense. Spanish has two main past tenses, but we will focus on the <strong>preterite</strong>, which describes completed actions — what happened and finished.</p>
<p>For regular <strong>-ar</strong> verbs like <em>hablar</em>, remove <em>-ar</em> and add these endings: <em>hablé</em> (I spoke), <em>hablaste</em> (you spoke), <em>habló</em> (he/she spoke), <em>hablamos</em> (we spoke), <em>hablaron</em> (they spoke). Notice the accent marks on <em>hablé</em> and <em>habló</em> — they change the meaning, so they matter.</p>
<p>For regular <strong>-er</strong> and <strong>-ir</strong> verbs like <em>comer</em> (to eat) and <em>vivir</em> (to live), the endings are: <em>comí</em> (I ate), <em>comiste</em> (you ate), <em>comió</em> (he/she ate), <em>comimos</em> (we ate), <em>comieron</em> (they ate). The -er and -ir verbs share the same past endings.</p>
<p>Examples: <em>Ayer trabajé ocho horas</em> (Yesterday I worked eight hours). <em>Comí pollo anoche</em> (I ate chicken last night). <em>Ellos vivieron en Texas</em> (They lived in Texas).</p>
<p>A few very common verbs are irregular in the past and worth memorizing: <em>fui</em> (I was / I went), <em>tuve</em> (I had), <em>hice</em> (I did/made). For example, <em>Fui al trabajo</em> means "I went to work."</p>
<p>Useful time words signal the past: <em>ayer</em> (yesterday), <em>anoche</em> (last night), and <em>la semana pasada</em> (last week). Practice telling someone three things you did yesterday.</p>`,
          terms: [
            { term: "preterite", def: "Past tense for completed actions" },
            { term: "hablé", def: "I spoke" },
            { term: "comí", def: "I ate" },
            { term: "ayer", def: "Yesterday" },
            { term: "fui", def: "I was / I went (irregular)" }
          ],
          quiz: [
            { q: "What does \"hablé\" mean?", options: ["I spoke", "I speak", "You spoke", "We will speak"], answer: 0, explain: "Hablé is the past \"I spoke.\"" },
            { q: "Which ending is shared by regular -er and -ir verbs in the past \"I\" form?", options: ["-í", "-é", "-aste", "-aron"], answer: 0, explain: "Comí and viví both end in -í for \"I.\"" },
            { q: "\"Ayer\" means:", options: ["Yesterday", "Tomorrow", "Now", "Last year"], answer: 0, explain: "Ayer means yesterday, a signal of past tense." },
            { q: "How do you say \"I went to work\"?", options: ["Fui al trabajo", "Voy al trabajo", "Trabajo ahora", "Iré al trabajo"], answer: 0, explain: "Fui is the irregular past of ir: \"I went.\"" }
          ] },
        { id: "languages-hs-2", title: "Directions and Shopping", minutes: 10, objective: "By the end, you can ask for directions and handle a basic shopping interaction in Spanish.",
          body: `<p>This lesson gives you Spanish you can use the moment you step outside. Let's start with directions.</p>
<p><strong>Asking the way:</strong> <em>¿Dónde está...?</em> (Where is...?), as in <em>¿Dónde está la estación?</em> (Where is the station?). Key direction words: <em>derecha</em> (right), <em>izquierda</em> (left), <em>recto</em> or <em>derecho</em> (straight ahead), <em>cerca</em> (near), and <em>lejos</em> (far). A reply might be <em>Gire a la derecha</em> (Turn right) or <em>Siga recto</em> (Go straight).</p>
<p><strong>Shopping:</strong> In a store, useful phrases include <em>¿Cuánto cuesta?</em> (How much does it cost?), <em>Quiero...</em> (I want...), <em>Necesito...</em> (I need...), and <em>¿Tiene...?</em> (Do you have...?). To say "I am just looking," use <em>Solo estoy mirando</em>.</p>
<p>Money words: <em>dinero</em> (money), <em>barato</em> (cheap), <em>caro</em> (expensive), and <em>la cuenta</em> (the bill). To pay, you might say <em>¿Puedo pagar con tarjeta?</em> (Can I pay with card?) or <em>en efectivo</em> (in cash).</p>
<p>A short shopping exchange: "Hola, ¿cuánto cuesta esta camisa?" — "Cuesta veinte dólares." — "La quiero, gracias." (Hello, how much is this shirt? — It costs twenty dollars. — I want it, thank you.) <em>Camisa</em> means shirt.</p>
<p>Be polite with <em>por favor</em> (please) and <em>gracias</em> (thank you). These small words go a long way and make any interaction smoother. Practice a pretend shopping trip out loud before you try it for real.</p>`,
          terms: [
            { term: "¿Dónde está...?", def: "Where is...?" },
            { term: "derecha / izquierda", def: "Right / left" },
            { term: "¿Cuánto cuesta?", def: "How much does it cost?" },
            { term: "en efectivo", def: "In cash" },
            { term: "por favor", def: "Please" }
          ],
          quiz: [
            { q: "What does \"izquierda\" mean?", options: ["Left", "Right", "Straight", "Near"], answer: 0, explain: "Izquierda is left; derecha is right." },
            { q: "How do you ask where something is?", options: ["¿Dónde está...?", "¿Cuánto cuesta?", "¿Qué hora es?", "¿Cómo estás?"], answer: 0, explain: "¿Dónde está...? asks for a location." },
            { q: "\"En efectivo\" means paying:", options: ["In cash", "With a card", "Later", "For free"], answer: 0, explain: "En efectivo means in cash; con tarjeta means by card." },
            { q: "Which phrase means \"I want it\"?", options: ["La quiero", "Necesito ayuda", "Estoy mirando", "Es caro"], answer: 0, explain: "La quiero means \"I want it.\"" }
          ] },
        { id: "languages-hs-3", title: "At the Restaurant and the Doctor", minutes: 11, objective: "By the end, you can order food and describe a basic health problem in Spanish.",
          body: `<p>Two real-life situations call for clear Spanish: eating out and visiting a doctor.</p>
<p><strong>At the restaurant (en el restaurante):</strong> A server may ask <em>¿Qué desea?</em> (What would you like?). You can answer <em>Quiero...</em> (I want...) or the more polite <em>Quisiera...</em> (I would like...). Useful words: <em>el menú</em> (the menu), <em>la mesa</em> (the table), <em>el agua</em> (water), <em>la cuenta</em> (the bill), and <em>la propina</em> (the tip). To order water you might say <em>Quisiera un vaso de agua, por favor</em> (I would like a glass of water, please). To finish, ask <em>La cuenta, por favor</em> (The bill, please).</p>
<p><strong>At the doctor (en el médico):</strong> The doctor may ask <em>¿Qué le pasa?</em> (What is wrong?). Describe pain with <em>Me duele...</em> (My ... hurts): <em>Me duele la cabeza</em> (My head hurts / I have a headache), <em>Me duele el estómago</em> (My stomach hurts). Other useful words: <em>fiebre</em> (fever), <em>tos</em> (cough), <em>la medicina</em> (medicine), and <em>el dolor</em> (pain). You can say <em>Estoy enfermo</em> (I am sick) or <em>Necesito un médico</em> (I need a doctor).</p>
<p>An emergency phrase everyone should know: <em>¡Ayuda!</em> (Help!) and <em>Llame a una ambulancia</em> (Call an ambulance). In a true emergency in the US, you still dial 911.</p>
<p>These phrases can matter in a real moment, so practice them until they come automatically. Try describing an imaginary symptom and ordering an imaginary meal out loud.</p>`,
          terms: [
            { term: "Quisiera...", def: "I would like... (polite)" },
            { term: "la cuenta", def: "The bill / check" },
            { term: "Me duele...", def: "My ... hurts" },
            { term: "fiebre", def: "Fever" },
            { term: "Necesito un médico", def: "I need a doctor" }
          ],
          quiz: [
            { q: "How do you politely say \"I would like\"?", options: ["Quisiera", "Quiero ahora", "Tengo", "Es"], answer: 0, explain: "Quisiera is the polite \"I would like.\"" },
            { q: "\"Me duele la cabeza\" means:", options: ["My head hurts", "I am hungry", "I want water", "I am tired"], answer: 0, explain: "Me duele la cabeza means \"my head hurts.\"" },
            { q: "How do you ask for the bill at a restaurant?", options: ["La cuenta, por favor", "El menú, por favor", "Quisiera agua", "¿Qué desea?"], answer: 0, explain: "La cuenta, por favor asks for the bill." },
            { q: "What does \"fiebre\" mean?", options: ["Fever", "Cough", "Pain", "Medicine"], answer: 0, explain: "Fiebre means fever." }
          ] }
      ]},
      { title: "Beyond Spanish", lessons: [
        { id: "languages-hs-4", title: "A Look at French and Other Languages", minutes: 9, objective: "By the end, you can describe other languages US schools commonly offer and how they compare.",
          body: `<p>Spanish is the most common world language in US schools, but it is not the only one. Knowing your options helps you understand the American education system.</p>
<p><strong>French</strong> is the traditional second choice. It is spoken in France, parts of Canada, and many African countries. Like Spanish, it comes from Latin, so the two share many similar words. <em>Bonjour</em> means "hello," <em>merci</em> means "thank you," and <em>au revoir</em> means "goodbye." French spelling is trickier than Spanish because many letters are silent.</p>
<p><strong>German</strong> is offered in many schools, especially in areas with German heritage. It is closely related to English, so words like "house" (Haus) and "water" (Wasser) look familiar. <em>Hallo</em> is hello and <em>danke</em> is thank you.</p>
<p><strong>Mandarin Chinese</strong> has grown quickly because China is a major world power. It uses characters instead of an alphabet and has tones, where the pitch of your voice changes a word's meaning. It is challenging but valuable.</p>
<p><strong>Latin</strong> is a special case. It is no longer spoken in daily life, but it is the root of Spanish, French, Italian, and much of English vocabulary. Students take it to strengthen grammar, build vocabulary, and prepare for fields like law and medicine.</p>
<p>Other offerings include Italian, Japanese, Arabic, and American Sign Language (ASL), which many schools now accept as a world language. Each opens a different door. For most adult immigrants in the US, though, Spanish remains the most immediately useful, which is why we focus on it here.</p>`,
          terms: [
            { term: "bonjour", def: "Hello (French)" },
            { term: "merci", def: "Thank you (French)" },
            { term: "danke", def: "Thank you (German)" },
            { term: "Mandarin", def: "Most-spoken Chinese language, uses tones" },
            { term: "Latin", def: "Ancient root language of Spanish, French, and English vocabulary" }
          ],
          quiz: [
            { q: "Which language is the traditional second choice in US schools?", options: ["French", "Japanese", "Arabic", "Russian"], answer: 0, explain: "French has long been the second most common world language taught." },
            { q: "What does \"merci\" mean?", options: ["Thank you", "Hello", "Goodbye", "Please"], answer: 0, explain: "Merci is French for thank you." },
            { q: "What makes Mandarin Chinese distinctive?", options: ["It uses characters and tones", "It has no grammar", "It is spelled like English", "It has no writing"], answer: 0, explain: "Mandarin uses characters and tones that change meaning." },
            { q: "Why do students study Latin even though it is not spoken daily?", options: ["It strengthens grammar and vocabulary roots", "It is easy to chat in", "It is required for citizenship", "It has no value"], answer: 0, explain: "Latin builds grammar skills and underlies much English vocabulary." }
          ] },
        { id: "languages-hs-5", title: "Becoming Conversational as an Adult", minutes: 10, objective: "By the end, you can describe practical strategies for reaching real conversation ability in Spanish.",
          body: `<p>Classroom rules help, but real conversation comes from steady, smart practice. Here is how adults actually become conversational.</p>
<p><strong>Practice every day, even briefly.</strong> Ten focused minutes daily beats two hours once a week. Your brain needs frequent, repeated contact with the language to make it automatic.</p>
<p><strong>Focus on the most common words first.</strong> Just a few hundred words cover most everyday speech. Learn high-frequency verbs like <em>ser, estar, tener, ir, hacer, querer</em> and you can already say a great deal. Do not get stuck memorizing rare vocabulary.</p>
<p><strong>Speak from day one.</strong> You do not need to be perfect to be understood. Say what you can, accept mistakes, and keep going. Talking to real people — coworkers, neighbors, shopkeepers — is the fastest teacher. Many people will gladly help a learner.</p>
<p><strong>Listen a lot.</strong> Put Spanish in your ears with music, podcasts, news, or shows with subtitles. This trains your ear so spoken Spanish stops sounding like one long blur. Over time you will catch more and more.</p>
<p><strong>Learn in chunks, not just single words.</strong> Memorize whole useful phrases like <em>¿Me puede ayudar?</em> (Can you help me?) or <em>No entiendo</em> (I don't understand). Phrases come out of your mouth faster than building each sentence from scratch.</p>
<p><strong>Be patient and consistent.</strong> Becoming conversational takes months, not days, but progress is steady if you keep showing up. Set small goals, like having one Spanish conversation a week. Celebrate small wins. Every fluent speaker was once a beginner who simply did not quit.</p>`,
          terms: [
            { term: "high-frequency words", def: "The most common words, worth learning first" },
            { term: "chunks", def: "Whole useful phrases learned as one unit" },
            { term: "¿Me puede ayudar?", def: "Can you help me?" },
            { term: "No entiendo", def: "I don't understand" },
            { term: "consistency", def: "Practicing regularly over time" }
          ],
          quiz: [
            { q: "What practice schedule works best for adults?", options: ["A short session every day", "One long session a month", "Only before a test", "Never speaking aloud"], answer: 0, explain: "Frequent short daily practice builds lasting skill." },
            { q: "Which words should you learn first?", options: ["The most common, high-frequency words", "The rarest words", "Only colors", "Only numbers"], answer: 0, explain: "A few hundred common words cover most everyday speech." },
            { q: "\"No entiendo\" means:", options: ["I don't understand", "Can you help me?", "I am hungry", "See you later"], answer: 0, explain: "No entiendo means \"I don't understand.\"" },
            { q: "What is a realistic mindset for becoming conversational?", options: ["Be patient and consistent over months", "Expect fluency in a week", "Quit after mistakes", "Never speak to people"], answer: 0, explain: "Steady, patient practice over months is what works." }
          ] }
      ]}
    ]}
  ]
});
