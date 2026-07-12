window.HR_DATA = window.HR_DATA || { subjects: [] };
window.HR_DATA.subjects.push({
  key: "science",
  name: "Science",
  icon: "🔬",
  color: "#10b981",
  blurb: "Life, earth, and physical science — how the natural world works.",
  why: "Scientific literacy shapes American conversations about health, climate, and technology.",
  stages: [
    { stage: "elementary", grades: "K–5", units: [
      { title: "Doing Science: Observing the World", lessons: [
        { id: "science-el-1", title: "The Scientific Method", minutes: 8, objective: "By the end, you can name the basic steps scientists use to answer questions.",
          body: `<p>Science is a way of learning about the world by asking questions and testing answers. Scientists do not just guess. They follow careful steps so that other people can check their work.</p>
<p>The first step is to <strong>ask a question</strong>. For example, you might ask, "Do plants grow taller in sunlight or in the dark?" Next, you make a <strong>hypothesis</strong>, which is a smart guess about the answer. You might guess that plants grow taller in sunlight.</p>
<p>Then you do an <strong>experiment</strong> to test your guess. You could put one plant in a sunny window and one plant in a dark closet. You give both plants the same water and the same kind of soil. The only thing you change is the light. This is called the <strong>variable</strong>.</p>
<p>While the experiment runs, you <strong>observe</strong> and write down what happens. You might measure each plant with a ruler every day. Writing down numbers and facts is called collecting <strong>data</strong>.</p>
<p>After a week or two, you look at your data and form a <strong>conclusion</strong>. If the sunny plant grew taller, your data supports your hypothesis. If not, that is fine too. Scientists learn from every result, even surprising ones.</p>
<p>A good experiment can be repeated. If your friend does the same steps and gets the same result, everyone can trust the answer. This is why scientists share their work with each other.</p>`,
          terms: [ { term: "hypothesis", def: "A smart guess about the answer to a question." },
            { term: "experiment", def: "A test you do to check a hypothesis." },
            { term: "variable", def: "The one thing you change in an experiment." },
            { term: "data", def: "The facts and numbers you collect by observing." },
            { term: "conclusion", def: "What you decide after looking at your data." } ],
          quiz: [ { q: "What is a hypothesis?", options: ["A smart guess about the answer", "A finished result", "A type of plant", "A measuring tool"], answer: 0, explain: "A hypothesis is your educated guess before you test it." },
            { q: "Why do scientists keep the soil and water the same for both plants?", options: ["To save money", "So only the light is different", "Because plants like the same soil", "To make the test faster"], answer: 1, explain: "Changing only one variable lets you know what caused the result." },
            { q: "What does it mean to collect data?", options: ["To guess the answer", "To write down facts and numbers you observe", "To plant seeds", "To ask a question"], answer: 1, explain: "Data is the recorded facts and measurements from observing." },
            { q: "Why is repeating an experiment useful?", options: ["It wastes time", "It makes plants grow", "It checks if the result is trustworthy", "It changes the hypothesis"], answer: 2, explain: "If others repeat your steps and get the same result, the answer is reliable." } ] },
        { id: "science-el-2", title: "Observing with Tools", minutes: 7, objective: "By the end, you can explain how tools help us observe more than our eyes alone.",
          body: `<p>To observe means to look closely and notice details. Scientists observe using all their senses, but they also use tools to see things our eyes cannot.</p>
<p>A <strong>magnifying glass</strong> makes small things look bigger. If you look at a leaf with a magnifying glass, you can see tiny veins and hairs. A <strong>microscope</strong> is even more powerful. It can show living cells that are far too small to see by yourself.</p>
<p>A <strong>thermometer</strong> measures temperature. It tells you how hot or cold something is in degrees. A <strong>ruler</strong> measures length, and a <strong>scale</strong> measures weight. These tools give us exact numbers instead of just words like "big" or "heavy."</p>
<p>Numbers make observations more useful. Saying "the water is warm" is not as clear as saying "the water is 30 degrees." Two scientists in different places can compare exact numbers, but the word "warm" might mean different things to each person.</p>
<p>Good scientists also stay honest. They write down exactly what they see, even if it is not what they expected. Careful observing with the right tools is the foundation of all science.</p>`,
          terms: [ { term: "observe", def: "To look closely and notice details." },
            { term: "magnifying glass", def: "A lens that makes small things look bigger." },
            { term: "microscope", def: "A tool that shows objects too tiny to see with the eyes." },
            { term: "thermometer", def: "A tool that measures temperature." },
            { term: "measure", def: "To find the exact size, amount, or number of something." } ],
          quiz: [ { q: "What does a microscope help you see?", options: ["Faraway stars", "Tiny things like cells", "The weather", "Loud sounds"], answer: 1, explain: "A microscope reveals objects too small for the naked eye, like cells." },
            { q: "Which tool measures temperature?", options: ["Ruler", "Scale", "Thermometer", "Magnifying glass"], answer: 2, explain: "A thermometer measures how hot or cold something is." },
            { q: "Why are exact numbers better than words like 'warm'?", options: ["Numbers are prettier", "Words are illegal", "Numbers let scientists compare clearly", "Words take longer to say"], answer: 2, explain: "Exact numbers mean the same thing to everyone, unlike vague words." },
            { q: "What should a scientist do if they see something unexpected?", options: ["Ignore it", "Change the result", "Write down exactly what they saw", "Stop the experiment"], answer: 2, explain: "Honesty means recording exactly what you observe, even surprises." } ] }
      ]},
      { title: "Living Things and the Human Body", lessons: [
        { id: "science-el-3", title: "Living and Nonliving Things", minutes: 7, objective: "By the end, you can tell living things from nonliving things and name what living things need.",
          body: `<p>The world is full of living and nonliving things. A dog, a tree, and a person are living. A rock, a chair, and water are nonliving.</p>
<p>How can you tell the difference? <strong>Living things</strong> share special traits. They <strong>grow</strong> and change over time. A puppy grows into a dog. They <strong>reproduce</strong>, which means they make new living things like themselves. Living things also need food, water, and air to stay alive. They respond to the world around them, like a plant turning toward the sun.</p>
<p><strong>Nonliving things</strong> do not grow on their own, do not eat, and do not make babies. A rock today is the same rock next year. A toy car only moves if you push it.</p>
<p>All living things have basic needs. Animals need food, water, air, and shelter. Plants need water, air, sunlight, and nutrients from the soil. Plants are special because they make their own food using sunlight.</p>
<p>Some things can be tricky. A seed looks still, but it is alive and waiting to grow. Once you know the traits of living things, you can sort the world around you.</p>`,
          terms: [ { term: "living thing", def: "Something that grows, needs food and water, and can reproduce." },
            { term: "nonliving thing", def: "Something that does not grow, eat, or reproduce." },
            { term: "grow", def: "To get bigger or change over time." },
            { term: "reproduce", def: "To make new living things of the same kind." },
            { term: "needs", def: "Things a living thing must have to stay alive." } ],
          quiz: [ { q: "Which of these is a living thing?", options: ["A rock", "A tree", "A chair", "A cup of water"], answer: 1, explain: "A tree grows, needs water, and reproduces, so it is living." },
            { q: "What do all animals need to survive?", options: ["Toys", "Food, water, air, and shelter", "Sunlight only", "Nothing"], answer: 1, explain: "Animals need food, water, air, and shelter to live." },
            { q: "What makes plants special among living things?", options: ["They never grow", "They make their own food from sunlight", "They do not need water", "They can walk"], answer: 1, explain: "Plants use sunlight to make their own food." },
            { q: "Why is a seed considered living?", options: ["It is hard", "It is alive and can grow into a plant", "It is small", "It does not move"], answer: 1, explain: "A seed is alive and will grow into a plant under the right conditions." } ] },
        { id: "science-el-4", title: "Life Cycles", minutes: 8, objective: "By the end, you can describe the life cycle of a plant and a butterfly.",
          body: `<p>Every living thing has a <strong>life cycle</strong>. A life cycle is the series of changes a living thing goes through from the start of its life to making new life.</p>
<p>Think about a plant. It begins as a <strong>seed</strong>. When the seed gets water, warmth, and soil, it <strong>germinates</strong>, which means it begins to grow. A small sprout pushes up, and roots grow down. The plant grows leaves and becomes an adult. Then it makes flowers, and the flowers make new seeds. The cycle starts over.</p>
<p>Animals have life cycles too. A butterfly has a famous one called <strong>metamorphosis</strong>, which means a big change in body shape. It starts as an egg. The egg hatches into a <strong>caterpillar</strong> (also called a larva). The caterpillar eats leaves and grows. Then it forms a hard case called a <strong>chrysalis</strong>. Inside, its body changes completely. Finally, an adult butterfly comes out, ready to lay new eggs.</p>
<p>Not all animals change shape so much. A kitten looks like a small cat and simply grows bigger. But every living thing follows a cycle: it is born or sprouts, it grows, it reproduces, and one day it dies. Then new life continues the cycle.</p>`,
          terms: [ { term: "life cycle", def: "The changes a living thing goes through from birth to making new life." },
            { term: "germinate", def: "When a seed begins to grow." },
            { term: "metamorphosis", def: "A big change in body shape, like a caterpillar to a butterfly." },
            { term: "larva", def: "The young, growing form of an insect, like a caterpillar." },
            { term: "chrysalis", def: "The hard case where a caterpillar changes into a butterfly." } ],
          quiz: [ { q: "What does it mean when a seed germinates?", options: ["It dies", "It begins to grow", "It makes a flower", "It turns into a rock"], answer: 1, explain: "Germinate means the seed starts to grow." },
            { q: "What is the correct order for a butterfly?", options: ["Butterfly, egg, caterpillar", "Egg, caterpillar, chrysalis, butterfly", "Chrysalis, egg, butterfly", "Caterpillar, egg, butterfly"], answer: 1, explain: "A butterfly goes egg, caterpillar, chrysalis, then adult butterfly." },
            { q: "What is metamorphosis?", options: ["A type of plant", "A big change in body shape", "A kind of weather", "A measuring tool"], answer: 1, explain: "Metamorphosis is a major change in body form during an animal's life." },
            { q: "How is a kitten's life cycle different from a butterfly's?", options: ["A kitten changes shape completely", "A kitten just grows bigger without changing shape", "A kitten starts as an egg", "A kitten forms a chrysalis"], answer: 1, explain: "A kitten looks like a small cat and simply grows, with no metamorphosis." } ] },
        { id: "science-el-5", title: "The Five Senses and the Body", minutes: 7, objective: "By the end, you can name the five senses and the body parts that go with them.",
          body: `<p>Your body has five <strong>senses</strong> that help you learn about the world. The senses are sight, hearing, smell, taste, and touch.</p>
<p>You use your <strong>eyes</strong> for sight. They let you see colors, shapes, and movement. You use your <strong>ears</strong> for hearing. They catch sounds like music or a voice. Your <strong>nose</strong> is for smell. It can warn you of smoke or enjoy the smell of food.</p>
<p>Your <strong>tongue</strong> is for taste. It senses sweet, salty, sour, and bitter flavors. Your <strong>skin</strong> is for touch. It feels hot, cold, soft, hard, and pain. Skin is the largest organ of your body.</p>
<p>All five senses send messages to your <strong>brain</strong>. The brain is the control center. It receives the messages through nerves and decides what they mean. When you touch a hot stove, your skin sends a message, and your brain quickly tells your hand to pull away.</p>
<p>Your senses work together. When you eat an apple, you see its red color, hear the crunch, smell its sweetness, taste it, and feel it in your hand. Your body and brain make sense of the world every second of the day.</p>`,
          terms: [ { term: "senses", def: "The five ways your body learns about the world: sight, hearing, smell, taste, touch." },
            { term: "organ", def: "A body part that does a special job, like the skin or brain." },
            { term: "brain", def: "The control center that receives and understands messages from the senses." },
            { term: "nerves", def: "Pathways that carry messages between the body and the brain." },
            { term: "touch", def: "The sense from your skin that feels hot, cold, soft, and hard." } ],
          quiz: [ { q: "Which body part is used for the sense of taste?", options: ["Nose", "Tongue", "Ears", "Skin"], answer: 1, explain: "The tongue senses flavors like sweet and salty." },
            { q: "What is the largest organ of the body?", options: ["Brain", "Eyes", "Skin", "Tongue"], answer: 2, explain: "Skin covers the whole body and is the largest organ." },
            { q: "Where do the senses send their messages?", options: ["The heart", "The brain", "The stomach", "The feet"], answer: 1, explain: "The brain is the control center that interprets sensory messages." },
            { q: "Why do you pull your hand away from a hot stove quickly?", options: ["Your skin moves by itself", "Your brain gets the message and signals the hand", "The stove pushes your hand", "You decide slowly"], answer: 1, explain: "Skin sends a message to the brain, which quickly signals the hand to move." } ] }
      ]},
      { title: "Earth, Sky, and Matter", lessons: [
        { id: "science-el-6", title: "Weather, Seasons, and the Water Cycle", minutes: 8, objective: "By the end, you can explain the seasons and describe how the water cycle works.",
          body: `<p><strong>Weather</strong> is what the air is like outside right now. It can be sunny, rainy, windy, snowy, or cloudy. Weather changes from day to day.</p>
<p>The year has four <strong>seasons</strong>: spring, summer, fall, and winter. Seasons happen because the Earth is tilted as it travels around the sun. When your part of the Earth tilts toward the sun, you get summer, with long, warm days. When it tilts away, you get winter, with short, cold days.</p>
<p>Water moves around the Earth in a pattern called the <strong>water cycle</strong>. The sun heats water in oceans, lakes, and rivers. The water turns into an invisible gas called water vapor and rises into the air. This is <strong>evaporation</strong>.</p>
<p>High in the cool sky, the water vapor turns back into tiny drops and forms clouds. This is <strong>condensation</strong>. When the drops grow heavy, they fall as rain or snow. This is <strong>precipitation</strong>.</p>
<p>The fallen water flows into rivers and oceans, and the cycle starts again. The water cycle never stops. The same water has been moving around the Earth for millions of years.</p>`,
          terms: [ { term: "weather", def: "What the air is like outside at a given time." },
            { term: "season", def: "One of four parts of the year caused by Earth's tilt." },
            { term: "evaporation", def: "When water heats up and turns into vapor in the air." },
            { term: "condensation", def: "When water vapor cools and turns back into drops, forming clouds." },
            { term: "precipitation", def: "Water that falls from clouds as rain, snow, or hail." } ],
          quiz: [ { q: "Why does the Earth have seasons?", options: ["The sun moves closer", "The Earth is tilted as it orbits the sun", "Clouds block the sun", "The moon changes"], answer: 1, explain: "Earth's tilt causes different parts to face the sun at different times." },
            { q: "What is evaporation?", options: ["Water falling as rain", "Water turning into vapor and rising", "Clouds forming", "Snow melting"], answer: 1, explain: "Evaporation is liquid water turning into vapor and rising into the air." },
            { q: "What forms when water vapor cools high in the sky?", options: ["Rivers", "Clouds", "Oceans", "Soil"], answer: 1, explain: "Cooling water vapor condenses into droplets that form clouds." },
            { q: "What is rain or snow falling from clouds called?", options: ["Evaporation", "Condensation", "Precipitation", "Reflection"], answer: 2, explain: "Precipitation is water falling from clouds as rain, snow, or hail." } ] },
        { id: "science-el-7", title: "States of Matter", minutes: 7, objective: "By the end, you can name the three states of matter and how they change.",
          body: `<p>Everything around you is made of <strong>matter</strong>. Matter is anything that takes up space and has weight. Matter comes in three main forms, called <strong>states</strong>: solid, liquid, and gas.</p>
<p>A <strong>solid</strong> keeps its own shape. A rock, a book, and an ice cube are solids. The tiny particles in a solid are packed tightly together and barely move.</p>
<p>A <strong>liquid</strong> flows and takes the shape of its container. Water, milk, and juice are liquids. If you pour a liquid into a cup, it becomes cup-shaped. Its particles are close but can slide past each other.</p>
<p>A <strong>gas</strong> spreads out to fill any space. The air around you is gas. You usually cannot see gas. Its particles move fast and are far apart.</p>
<p>Matter can change states when it gets hotter or colder. When you heat ice (a solid), it <strong>melts</strong> into water (a liquid). When you heat water more, it <strong>boils</strong> and becomes steam (a gas). When you cool water down, it <strong>freezes</strong> back into ice. The same water can be a solid, liquid, or gas depending on its temperature.</p>`,
          terms: [ { term: "matter", def: "Anything that takes up space and has weight." },
            { term: "solid", def: "Matter that keeps its own shape, like a rock." },
            { term: "liquid", def: "Matter that flows and takes the shape of its container." },
            { term: "gas", def: "Matter that spreads out to fill any space, like air." },
            { term: "melt", def: "When a solid changes into a liquid by heating." } ],
          quiz: [ { q: "Which state of matter keeps its own shape?", options: ["Liquid", "Gas", "Solid", "Steam"], answer: 2, explain: "A solid keeps its shape because its particles are packed tightly." },
            { q: "What happens when you heat ice?", options: ["It freezes", "It melts into water", "It becomes a solid", "Nothing"], answer: 1, explain: "Heating ice makes it melt into liquid water." },
            { q: "What does a gas do?", options: ["Keeps its shape", "Spreads out to fill any space", "Stays in a pile", "Becomes a rock"], answer: 1, explain: "A gas spreads out to fill whatever space it is in." },
            { q: "What is matter?", options: ["Only liquids", "Anything that takes up space and has weight", "Only solids", "Light and sound"], answer: 1, explain: "Matter is anything with weight that takes up space." } ] },
        { id: "science-el-8", title: "The Solar System, Day and Night", minutes: 8, objective: "By the end, you can explain day and night and name parts of the solar system.",
          body: `<p>Our <strong>solar system</strong> is the sun and everything that travels around it. At the center is the <strong>sun</strong>, a giant ball of hot, glowing gas. The sun gives Earth light and heat.</p>
<p>Eight <strong>planets</strong> travel around the sun in paths called orbits. In order from the sun, they are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Earth is the third planet and the only one we know that has life.</p>
<p>The <strong>moon</strong> is Earth's closest neighbor in space. It travels around the Earth. The moon does not make its own light. It shines because it reflects light from the sun.</p>
<p>Why do we have day and night? The Earth <strong>rotates</strong>, which means it spins like a top. One full spin takes 24 hours, which is one day. When your side of the Earth faces the sun, it is <strong>day</strong>. When your side turns away from the sun, it is <strong>night</strong>. The sun is not really moving across the sky; the Earth is turning.</p>
<p>The Earth also makes a much longer trip. It takes one whole year to travel all the way around the sun. This is called an orbit.</p>`,
          terms: [ { term: "solar system", def: "The sun and everything that travels around it." },
            { term: "sun", def: "The star at the center of our solar system that gives light and heat." },
            { term: "planet", def: "A large object that travels around the sun, like Earth or Mars." },
            { term: "rotate", def: "To spin, like the Earth turning once every 24 hours." },
            { term: "orbit", def: "The path one object takes around another in space." } ],
          quiz: [ { q: "What causes day and night?", options: ["The sun moves around Earth", "The Earth spins on its axis", "The moon blocks the sun", "Clouds cover the sky"], answer: 1, explain: "Earth rotates, so each side faces toward or away from the sun." },
            { q: "Why does the moon shine?", options: ["It makes its own light", "It reflects light from the sun", "It is on fire", "It has lamps"], answer: 1, explain: "The moon reflects sunlight; it does not make its own light." },
            { q: "What is at the center of the solar system?", options: ["The Earth", "The moon", "The sun", "Jupiter"], answer: 2, explain: "The sun is the star at the center of the solar system." },
            { q: "How long does it take Earth to orbit the sun once?", options: ["One day", "One month", "One year", "One hour"], answer: 2, explain: "Earth takes one year to travel all the way around the sun." } ] }
      ]}
    ]},
    { stage: "middle", grades: "6–8", units: [
      { title: "Cells and Body Systems", lessons: [
        { id: "science-ms-1", title: "Cells: The Units of Life", minutes: 9, objective: "By the end, you can explain that all living things are made of cells and name key cell parts.",
          body: `<p>Every living thing is made of tiny building blocks called <strong>cells</strong>. Cells are so small that you need a microscope to see them. Some living things, like bacteria, are just one cell. Others, like humans, are made of trillions of cells.</p>
<p>This idea is part of the <strong>cell theory</strong>, one of the most important ideas in biology. The cell theory says three things: all living things are made of cells, cells are the basic unit of life, and all cells come from other cells.</p>
<p>Cells have parts called <strong>organelles</strong>, each with a job. The <strong>nucleus</strong> is the control center. It holds the cell's instructions (DNA) and tells the cell what to do. The <strong>cell membrane</strong> is a thin layer around the cell. It controls what goes in and out, like a gatekeeper. The <strong>cytoplasm</strong> is a jelly-like fluid that fills the cell and holds the organelles. The <strong>mitochondria</strong> are the powerhouses; they turn food into energy the cell can use.</p>
<p>Plant cells have extra parts. They have a stiff <strong>cell wall</strong> outside the membrane for support, and <strong>chloroplasts</strong> that capture sunlight to make food. That is why plants are usually green.</p>
<p>Cells group together to form tissues, tissues form organs, and organs form whole living things. Understanding cells helps us understand health, disease, and life itself.</p>`,
          terms: [ { term: "cell", def: "The basic building block of all living things." },
            { term: "cell theory", def: "The idea that all living things are made of cells, which come from other cells." },
            { term: "nucleus", def: "The control center of a cell that holds its DNA." },
            { term: "cell membrane", def: "The outer layer that controls what enters and leaves a cell." },
            { term: "mitochondria", def: "Organelles that turn food into usable energy." } ],
          quiz: [ { q: "What is the control center of the cell?", options: ["Cell membrane", "Nucleus", "Cytoplasm", "Cell wall"], answer: 1, explain: "The nucleus holds the DNA and directs the cell's activities." },
            { q: "Which part turns food into energy?", options: ["Mitochondria", "Nucleus", "Cell wall", "Membrane"], answer: 0, explain: "Mitochondria are the powerhouses that produce energy." },
            { q: "What do plant cells have that animal cells do not?", options: ["A nucleus", "Mitochondria", "A cell wall and chloroplasts", "Cytoplasm"], answer: 2, explain: "Plant cells have a cell wall for support and chloroplasts for making food." },
            { q: "Which is part of the cell theory?", options: ["Cells never die", "All cells come from other cells", "Only plants have cells", "Cells are visible to the eye"], answer: 1, explain: "The cell theory states that all cells come from existing cells." } ] },
        { id: "science-ms-2", title: "Human Body Systems", minutes: 9, objective: "By the end, you can describe how major body systems work together.",
          body: `<p>The human body has several <strong>systems</strong>, and each one does an important job. The systems work together to keep you alive and healthy.</p>
<p>The <strong>circulatory system</strong> moves blood through your body. The <strong>heart</strong> is a strong muscle that pumps blood through tubes called blood vessels. Blood carries oxygen and nutrients to every cell and carries away waste.</p>
<p>The <strong>respiratory system</strong> brings in oxygen and removes carbon dioxide. When you breathe in, air goes to your <strong>lungs</strong>. Oxygen passes into your blood, and carbon dioxide passes out when you breathe out.</p>
<p>The <strong>digestive system</strong> breaks down food so your body can use it. Food travels from your mouth through the stomach and intestines. Nutrients pass into the blood, and waste leaves the body.</p>
<p>The <strong>nervous system</strong> is the body's messenger. The brain and nerves send fast signals to control your movements, thoughts, and senses. The <strong>skeletal system</strong> (bones) supports your body and protects organs, while the <strong>muscular system</strong> (muscles) lets you move.</p>
<p>These systems depend on each other. For example, the respiratory system gets oxygen, and the circulatory system delivers it to muscles so you can move. When one system has a problem, others can be affected too.</p>`,
          terms: [ { term: "circulatory system", def: "The system that pumps blood to carry oxygen and nutrients." },
            { term: "respiratory system", def: "The system that brings in oxygen and removes carbon dioxide." },
            { term: "digestive system", def: "The system that breaks down food for the body to use." },
            { term: "nervous system", def: "The brain and nerves that send signals to control the body." },
            { term: "organ system", def: "A group of organs that work together to do a job." } ],
          quiz: [ { q: "What does the circulatory system do?", options: ["Breaks down food", "Pumps blood to carry oxygen and nutrients", "Controls thoughts", "Supports the body"], answer: 1, explain: "The circulatory system moves blood with oxygen and nutrients." },
            { q: "Where does oxygen enter the blood?", options: ["The stomach", "The lungs", "The brain", "The bones"], answer: 1, explain: "In the lungs, oxygen passes from the air into the blood." },
            { q: "Which system breaks down food?", options: ["Nervous", "Digestive", "Skeletal", "Respiratory"], answer: 1, explain: "The digestive system breaks food into nutrients the body uses." },
            { q: "Why do the systems depend on each other?", options: ["They never interact", "One system's work supports another, like oxygen reaching muscles", "Each works completely alone", "Only one system matters"], answer: 1, explain: "Systems cooperate, such as the lungs and blood delivering oxygen to muscles." } ] }
      ]},
      { title: "Ecosystems and Earth's Cycles", lessons: [
        { id: "science-ms-3", title: "Ecosystems, Food Chains, and Energy Flow", minutes: 9, objective: "By the end, you can trace how energy flows through a food chain in an ecosystem.",
          body: `<p>An <strong>ecosystem</strong> is all the living things in an area plus the nonliving parts like water, soil, and air. A forest, a pond, and a desert are all ecosystems. The living things in an ecosystem depend on each other.</p>
<p>Energy enters most ecosystems from the sun. <strong>Producers</strong>, like plants, capture sunlight and make their own food through photosynthesis. Producers are the base of every food chain.</p>
<p><strong>Consumers</strong> cannot make their own food, so they eat other living things. A rabbit that eats grass is a consumer. An animal that eats the rabbit, like a fox, is also a consumer. <strong>Decomposers</strong>, like fungi and bacteria, break down dead plants and animals and return nutrients to the soil.</p>
<p>A <strong>food chain</strong> shows how energy passes from one living thing to the next. For example: grass to grasshopper to frog to snake to hawk. The arrow means "is eaten by," showing the direction energy flows.</p>
<p>Energy is lost as heat at each step, so there is less energy higher up the chain. That is why there are usually many plants, fewer plant-eaters, and only a few top predators. Many food chains connect together to form a <strong>food web</strong>, showing the many feeding links in a real ecosystem.</p>`,
          terms: [ { term: "ecosystem", def: "All the living and nonliving things in an area, interacting together." },
            { term: "producer", def: "An organism, like a plant, that makes its own food from sunlight." },
            { term: "consumer", def: "An organism that gets energy by eating other living things." },
            { term: "decomposer", def: "An organism that breaks down dead material and returns nutrients to soil." },
            { term: "food web", def: "Many connected food chains showing feeding links in an ecosystem." } ],
          quiz: [ { q: "Where does the energy in most ecosystems come from?", options: ["The soil", "The sun", "The wind", "Rocks"], answer: 1, explain: "The sun is the original source of energy for most ecosystems." },
            { q: "What is a producer?", options: ["An animal that eats meat", "An organism that makes its own food from sunlight", "A decomposer", "A predator"], answer: 1, explain: "Producers, like plants, make food using sunlight." },
            { q: "What do decomposers do?", options: ["Hunt animals", "Make sunlight", "Break down dead material and return nutrients", "Eat only plants"], answer: 2, explain: "Decomposers recycle nutrients by breaking down dead organisms." },
            { q: "Why are there fewer top predators than plants?", options: ["Predators are lazy", "Energy is lost at each step of the chain", "Plants eat predators", "Predators do not need energy"], answer: 1, explain: "Energy decreases up the food chain, so fewer animals can be supported at the top." } ] },
        { id: "science-ms-4", title: "Earth's Structure and Plate Tectonics", minutes: 9, objective: "By the end, you can describe Earth's layers and explain how moving plates shape the land.",
          body: `<p>The Earth is made of layers, like an apple. The outer layer is the <strong>crust</strong>, the thin rocky surface we live on. Below it is the <strong>mantle</strong>, a thick layer of hot, slowly flowing rock. At the center is the <strong>core</strong>, made mostly of iron. The inner core is solid, and the outer core is liquid metal.</p>
<p>The crust is not one solid piece. It is broken into giant slabs called <strong>tectonic plates</strong>. These plates float on the soft mantle and move very slowly, only a few centimeters a year, about as fast as your fingernails grow.</p>
<p>Where plates meet, big things happen. When two plates push together, mountains can rise, like the Himalayas. When plates pull apart or slide past each other, the ground can crack. <strong>Earthquakes</strong> happen when plates suddenly slip and release energy as shaking.</p>
<p><strong>Volcanoes</strong> often form where plates meet. Melted rock called magma rises from below and erupts as lava. Over millions of years, plate movement has rearranged continents. Scientists believe the continents were once joined in one giant landmass.</p>
<p>This theory of moving plates is called <strong>plate tectonics</strong>. It explains earthquakes, volcanoes, mountains, and the shape of the continents.</p>`,
          terms: [ { term: "crust", def: "The thin, rocky outer layer of the Earth where we live." },
            { term: "mantle", def: "The thick layer of hot, slowly flowing rock below the crust." },
            { term: "core", def: "The iron center of the Earth, with a solid inner and liquid outer part." },
            { term: "tectonic plate", def: "A giant slab of crust that slowly moves on the mantle." },
            { term: "plate tectonics", def: "The theory that moving plates shape earthquakes, volcanoes, and mountains." } ],
          quiz: [ { q: "What is the thin outer layer of Earth called?", options: ["Mantle", "Core", "Crust", "Magma"], answer: 2, explain: "The crust is Earth's thin, rocky outer layer." },
            { q: "What causes most earthquakes?", options: ["Rain", "Tectonic plates suddenly slipping", "Strong winds", "Ocean tides"], answer: 1, explain: "Earthquakes happen when plates slip and release energy." },
            { q: "How fast do tectonic plates move?", options: ["Hundreds of miles a day", "A few centimeters a year", "They never move", "One mile per hour"], answer: 1, explain: "Plates move only a few centimeters a year, like growing fingernails." },
            { q: "What is at the center of the Earth?", options: ["Water", "The core, made mostly of iron", "Air", "The crust"], answer: 1, explain: "The core is the iron center of the Earth." } ] },
        { id: "science-ms-5", title: "Water Cycle, Carbon Cycle, Weather vs. Climate", minutes: 9, objective: "By the end, you can explain the carbon cycle and tell the difference between weather and climate.",
          body: `<p>Nature reuses its materials in <strong>cycles</strong>. You already know the water cycle, where water evaporates, condenses into clouds, and falls as precipitation, over and over.</p>
<p>The <strong>carbon cycle</strong> moves carbon through living things, the air, and the Earth. Plants take in <strong>carbon dioxide</strong> from the air during photosynthesis and use it to grow. Animals eat plants and breathe out carbon dioxide. When plants and animals die and decompose, carbon returns to the soil and air. Burning fuels like coal, oil, and gas also releases carbon dioxide into the air.</p>
<p>It is important not to confuse <strong>weather</strong> and <strong>climate</strong>. Weather is what is happening in the air right now or this week, like a rainy Tuesday. Climate is the average weather of a place over many years. For example, a desert has a hot, dry climate even if it rains there on one rare day.</p>
<p>Scientists study climate over decades. They have found that the Earth's average temperature is rising. This is called <strong>climate change</strong>, and it is largely caused by extra carbon dioxide from burning fuels, which traps heat in the atmosphere. Understanding these cycles helps people make smart choices about energy and the environment.</p>`,
          terms: [ { term: "carbon cycle", def: "The movement of carbon through living things, the air, and the Earth." },
            { term: "carbon dioxide", def: "A gas plants use and animals breathe out; it also traps heat." },
            { term: "weather", def: "The condition of the air at a place right now or this week." },
            { term: "climate", def: "The average weather of a place over many years." },
            { term: "climate change", def: "The long-term rise in Earth's average temperature." } ],
          quiz: [ { q: "What is the difference between weather and climate?", options: ["They are the same", "Weather is right now; climate is the long-term average", "Climate is right now; weather is the average", "Neither involves temperature"], answer: 1, explain: "Weather is short-term; climate is the average over many years." },
            { q: "How do plants take in carbon?", options: ["By eating animals", "By absorbing carbon dioxide during photosynthesis", "Through their roots only", "They do not use carbon"], answer: 1, explain: "Plants absorb carbon dioxide from the air for photosynthesis." },
            { q: "What releases extra carbon dioxide into the air?", options: ["Planting trees", "Burning coal, oil, and gas", "Drinking water", "Sunlight"], answer: 1, explain: "Burning fossil fuels releases large amounts of carbon dioxide." },
            { q: "What largely causes climate change?", options: ["Cold weather", "Extra carbon dioxide trapping heat", "Too many clouds", "The moon"], answer: 1, explain: "Extra carbon dioxide traps heat and raises Earth's temperature." } ] }
      ]},
      { title: "Matter and Motion", lessons: [
        { id: "science-ms-6", title: "Atoms and the Periodic Table", minutes: 9, objective: "By the end, you can describe atoms and explain what the periodic table organizes.",
          body: `<p>All matter is made of tiny particles called <strong>atoms</strong>. Atoms are so small that millions could fit on the tip of a pin. Everything you see, from water to metal to your own body, is built from atoms.</p>
<p>An atom has a center called the <strong>nucleus</strong>, made of <strong>protons</strong> (with a positive charge) and <strong>neutrons</strong> (with no charge). Around the nucleus, tiny <strong>electrons</strong> (with a negative charge) move in the surrounding space.</p>
<p>An <strong>element</strong> is a substance made of only one kind of atom. Oxygen, gold, hydrogen, and carbon are all elements. What makes each element different is the number of protons in its atoms. Hydrogen has one proton, and carbon has six.</p>
<p>The <strong>periodic table</strong> is a chart that organizes all the known elements. Each box shows one element with its symbol, like O for oxygen or Na for sodium. The elements are arranged in order by the number of protons. Elements in the same column have similar properties. For example, the elements in the far-right column are gases that rarely react with others.</p>
<p>When atoms join together, they form <strong>molecules</strong>. Two hydrogen atoms and one oxygen atom make a water molecule. The periodic table is a kind of map of all the building blocks of matter.</p>`,
          terms: [ { term: "atom", def: "The tiny basic particle that all matter is made of." },
            { term: "proton", def: "A positively charged particle in the nucleus of an atom." },
            { term: "electron", def: "A negatively charged particle that moves around the nucleus." },
            { term: "element", def: "A substance made of only one kind of atom." },
            { term: "periodic table", def: "A chart that organizes all the elements by their number of protons." } ],
          quiz: [ { q: "What is found in the nucleus of an atom?", options: ["Only electrons", "Protons and neutrons", "Only molecules", "Nothing"], answer: 1, explain: "The nucleus contains protons and neutrons." },
            { q: "What makes one element different from another?", options: ["Its color", "The number of protons in its atoms", "Its weight only", "Its temperature"], answer: 1, explain: "Each element has a unique number of protons." },
            { q: "What does the periodic table organize?", options: ["Planets", "All the known elements", "Types of weather", "Living things"], answer: 1, explain: "The periodic table arranges all known elements." },
            { q: "What forms when atoms join together?", options: ["Cells", "Molecules", "Planets", "Tissues"], answer: 1, explain: "Atoms join to form molecules, like water." } ] },
        { id: "science-ms-7", title: "Forces, Motion, and Simple Machines", minutes: 9, objective: "By the end, you can explain how forces cause motion and how simple machines help us.",
          body: `<p>A <strong>force</strong> is a push or a pull. Forces can make things start moving, stop moving, speed up, slow down, or change direction. When you kick a ball, you apply a force that makes it move.</p>
<p><strong>Gravity</strong> is a force that pulls objects toward the Earth. It makes a dropped ball fall to the ground. <strong>Friction</strong> is a force that slows things down when two surfaces rub together. Friction is why a rolling ball eventually stops and why your shoes grip the floor.</p>
<p>An object will keep doing what it is doing unless a force acts on it. A still object stays still, and a moving object keeps moving, until a force changes it. This idea is called <strong>inertia</strong>.</p>
<p><strong>Simple machines</strong> are tools that make work easier by changing how we apply force. A <strong>lever</strong>, like a seesaw, helps you lift heavy things. A <strong>ramp</strong> (inclined plane) lets you move a load up a gentle slope instead of lifting it straight up. A <strong>pulley</strong> uses a wheel and rope to lift loads, and a <strong>wheel and axle</strong> helps things roll. A screw and a wedge are simple machines too.</p>
<p>Simple machines do not reduce the total work, but they spread it out so it feels easier. They are the basis of nearly every tool and machine we use.</p>`,
          terms: [ { term: "force", def: "A push or a pull that can change an object's motion." },
            { term: "gravity", def: "The force that pulls objects toward the Earth." },
            { term: "friction", def: "A force that slows motion when surfaces rub together." },
            { term: "inertia", def: "The tendency of an object to keep doing what it is doing." },
            { term: "simple machine", def: "A basic tool, like a lever or ramp, that makes work easier." } ],
          quiz: [ { q: "What is a force?", options: ["A color", "A push or a pull", "A type of atom", "A measurement of heat"], answer: 1, explain: "A force is a push or pull that can change motion." },
            { q: "What does friction do?", options: ["Speeds things up forever", "Slows motion when surfaces rub", "Pulls objects to Earth", "Creates light"], answer: 1, explain: "Friction is a force that slows motion between rubbing surfaces." },
            { q: "Which is a simple machine?", options: ["A lever", "A cloud", "A cell", "An atom"], answer: 0, explain: "A lever, like a seesaw, is a simple machine." },
            { q: "What is inertia?", options: ["The pull of gravity", "An object's tendency to keep doing what it is doing", "A type of friction", "A simple machine"], answer: 1, explain: "Inertia is the tendency of objects to resist changes in motion." } ] }
      ]}
    ]},
    { stage: "high", grades: "9–12", units: [
      { title: "Biology (Grade 9)", lessons: [
        { id: "science-hs-1", title: "How US Science Courses Are Sequenced", minutes: 8, objective: "By the end, you can name the typical order of high school science courses.",
          body: `<p>In most US high schools, students take a science class each year, usually moving from biology to chemistry to physics. Knowing this path helps you understand how American students build science knowledge.</p>
<p>In <strong>9th grade</strong>, most students take <strong>Biology</strong>. Biology is the study of living things: cells, DNA, genetics, evolution, and ecosystems. It often comes first because it does not require much advanced math.</p>
<p>In <strong>10th grade</strong>, many students take <strong>Chemistry</strong>. Chemistry studies matter, atoms, and how substances react and combine. It uses more math, like ratios and equations.</p>
<p>In <strong>11th grade</strong>, students often take <strong>Physics</strong>. Physics studies energy, forces, motion, electricity, and waves. It uses the most math, including algebra and sometimes trigonometry.</p>
<p>This common order is sometimes called "Bio, Chem, Physics." Some schools use a different order or offer "integrated science" that mixes topics each year. In <strong>12th grade</strong>, students may take advanced electives like Anatomy, Environmental Science, or college-level <strong>Advanced Placement (AP)</strong> courses. To graduate, most states require students to pass two or three years of science.</p>
<p>This unit and the next ones follow that same path, starting with biology, then chemistry, then physics, just like an American high school student would experience.</p>`,
          terms: [ { term: "Biology", def: "The science of living things, usually taken in 9th grade." },
            { term: "Chemistry", def: "The science of matter and reactions, usually taken in 10th grade." },
            { term: "Physics", def: "The science of energy, forces, and motion, usually taken in 11th grade." },
            { term: "Advanced Placement (AP)", def: "College-level courses some students take in high school." },
            { term: "integrated science", def: "A course that mixes biology, chemistry, and physics topics each year." } ],
          quiz: [ { q: "Which science do most US students take in 9th grade?", options: ["Physics", "Chemistry", "Biology", "Astronomy"], answer: 2, explain: "Biology is typically the 9th grade science course." },
            { q: "Which course usually comes in 11th grade?", options: ["Biology", "Physics", "Chemistry", "Reading"], answer: 1, explain: "Physics is commonly taken in 11th grade." },
            { q: "What does AP stand for?", options: ["After Physics", "Advanced Placement", "Average Performance", "Applied Practice"], answer: 1, explain: "AP means Advanced Placement, college-level high school courses." },
            { q: "What is the common order of high school sciences?", options: ["Physics, Chemistry, Biology", "Biology, Chemistry, Physics", "Chemistry, Biology, Physics", "All at once"], answer: 1, explain: "The typical sequence is Biology, then Chemistry, then Physics." } ] },
        { id: "science-hs-2", title: "DNA and Genetics", minutes: 10, objective: "By the end, you can explain what DNA is and how traits pass from parents to children.",
          body: `<p>Inside almost every cell is a set of instructions for building and running a living thing. These instructions are stored in a molecule called <strong>DNA</strong>, which stands for deoxyribonucleic acid.</p>
<p>DNA is shaped like a twisted ladder called a <strong>double helix</strong>. The rungs of the ladder are made of four chemical bases, often written as A, T, C, and G. The order of these bases is a code, like letters spelling out instructions.</p>
<p>A section of DNA that codes for a specific trait is called a <strong>gene</strong>. Genes decide things like eye color, height, and blood type. Humans have about 20,000 genes. DNA is packed into structures called <strong>chromosomes</strong>. Humans have 46 chromosomes, 23 from each parent.</p>
<p>Children inherit genes from both parents, which is why you may have your mother's eyes and your father's hair. Some traits are <strong>dominant</strong> and show up even if only one parent passes them on. Others are <strong>recessive</strong> and only appear if both parents pass them on. A scientist named Gregor Mendel discovered these rules by studying pea plants in the 1800s.</p>
<p>Today, scientists can read DNA to study diseases, solve crimes, and trace family history. Understanding genetics is one of the most powerful tools in modern science and medicine.</p>`,
          terms: [ { term: "DNA", def: "The molecule that stores the instructions for building a living thing." },
            { term: "gene", def: "A section of DNA that codes for a specific trait." },
            { term: "chromosome", def: "A structure that packages DNA; humans have 46." },
            { term: "dominant", def: "A trait that appears even if inherited from only one parent." },
            { term: "recessive", def: "A trait that appears only if inherited from both parents." } ],
          quiz: [ { q: "What shape is DNA?", options: ["A flat square", "A twisted ladder, or double helix", "A circle", "A straight line"], answer: 1, explain: "DNA has a double helix shape, like a twisted ladder." },
            { q: "What is a gene?", options: ["A whole cell", "A section of DNA that codes for a trait", "A type of chromosome count", "A protein only"], answer: 1, explain: "A gene is a piece of DNA that codes for a specific trait." },
            { q: "How many chromosomes do humans have?", options: ["23", "46", "20,000", "4"], answer: 1, explain: "Humans have 46 chromosomes, 23 from each parent." },
            { q: "What did Gregor Mendel study to discover inheritance rules?", options: ["Dogs", "Pea plants", "Bacteria", "Fish"], answer: 1, explain: "Mendel discovered the rules of inheritance by studying pea plants." } ] },
        { id: "science-hs-3", title: "Evolution and Natural Selection", minutes: 10, objective: "By the end, you can explain how natural selection causes species to change over time.",
          body: `<p><strong>Evolution</strong> is the idea that living things change over many generations. The species alive today came from earlier, different species over millions of years. The main process driving evolution is <strong>natural selection</strong>, explained by Charles Darwin in 1859.</p>
<p>Natural selection works like this. Within a species, individuals are slightly different from one another. These differences are called <strong>variation</strong>. Some variations help an organism survive better in its environment. For example, a rabbit with thicker fur survives better in a cold place.</p>
<p>Organisms that survive are more likely to reproduce and pass their helpful traits to their offspring. Over many generations, the helpful traits become more common in the population. People often summarize this as "survival of the fittest," but "fittest" means best suited to the environment, not the strongest.</p>
<p>A trait that helps survival is called an <strong>adaptation</strong>. The long neck of a giraffe and the camouflage of a moth are adaptations shaped by natural selection. Scientists find strong evidence for evolution in <strong>fossils</strong>, which are the preserved remains of ancient living things, and in the DNA that all living things share.</p>
<p>Evolution explains the amazing variety of life on Earth and why living things are so well matched to where they live. It is one of the central ideas of all biology.</p>`,
          terms: [ { term: "evolution", def: "The change in living things over many generations." },
            { term: "natural selection", def: "The process where helpful traits become more common because they aid survival." },
            { term: "variation", def: "The small differences between individuals in a species." },
            { term: "adaptation", def: "A trait that helps an organism survive in its environment." },
            { term: "fossil", def: "The preserved remains of an ancient living thing." } ],
          quiz: [ { q: "Who explained natural selection in 1859?", options: ["Gregor Mendel", "Charles Darwin", "Isaac Newton", "Albert Einstein"], answer: 1, explain: "Charles Darwin described natural selection in 1859." },
            { q: "What does 'fittest' mean in natural selection?", options: ["Strongest only", "Best suited to the environment", "Fastest", "Largest"], answer: 1, explain: "'Fittest' means best suited to survive in the environment." },
            { q: "What is an adaptation?", options: ["A random trait", "A trait that helps survival in an environment", "A type of fossil", "A weakness"], answer: 1, explain: "An adaptation is a helpful trait shaped by natural selection." },
            { q: "What evidence supports evolution?", options: ["Only opinions", "Fossils and shared DNA", "Weather records", "Maps"], answer: 1, explain: "Fossils and shared DNA provide strong evidence for evolution." } ] }
      ]},
      { title: "Chemistry (Grade 10)", lessons: [
        { id: "science-hs-4", title: "Atomic Structure and the Periodic Table in Depth", minutes: 10, objective: "By the end, you can describe atomic structure and read key information from the periodic table.",
          body: `<p>An <strong>atom</strong> is made of three particles. <strong>Protons</strong> (positive) and <strong>neutrons</strong> (neutral) sit in the dense central <strong>nucleus</strong>. <strong>Electrons</strong> (negative) move in regions around the nucleus called energy levels or shells.</p>
<p>The number of protons is called the <strong>atomic number</strong>, and it defines the element. Every carbon atom has 6 protons; every oxygen atom has 8. On the <strong>periodic table</strong>, elements are listed in order of increasing atomic number.</p>
<p>The table is organized into rows and columns. The rows are called <strong>periods</strong>, and the columns are called <strong>groups</strong>. Elements in the same group have the same number of electrons in their outer shell, so they behave in similar ways. For example, Group 1 metals (like sodium) are very reactive, while Group 18 gases (like neon) almost never react.</p>
<p>The table also separates <strong>metals</strong> on the left, <strong>nonmetals</strong> on the upper right, and metalloids in between. Metals usually conduct electricity and bend; nonmetals often do not.</p>
<p>Each box also shows the <strong>atomic mass</strong>, roughly the total of protons and neutrons. The outer electrons, called valence electrons, control how an atom bonds with others. Reading the periodic table lets chemists predict how elements will react, making it the single most useful tool in chemistry.</p>`,
          terms: [ { term: "atomic number", def: "The number of protons in an atom, which defines the element." },
            { term: "period", def: "A row in the periodic table." },
            { term: "group", def: "A column in the periodic table; elements in it behave similarly." },
            { term: "valence electrons", def: "The outer electrons that control how an atom bonds." },
            { term: "atomic mass", def: "The approximate total of protons and neutrons in an atom." } ],
          quiz: [ { q: "What does the atomic number tell you?", options: ["The number of neutrons", "The number of protons, which defines the element", "The color of the atom", "The weight in grams"], answer: 1, explain: "The atomic number is the number of protons and defines the element." },
            { q: "What is a column in the periodic table called?", options: ["A period", "A group", "A shell", "A bond"], answer: 1, explain: "Columns are called groups, and their elements behave similarly." },
            { q: "Why do elements in the same group behave alike?", options: ["They have the same color", "They have the same number of outer electrons", "They weigh the same", "They are next to each other"], answer: 1, explain: "Same-group elements share the same number of valence electrons." },
            { q: "What controls how an atom bonds?", options: ["Neutrons", "Valence electrons", "The nucleus size", "Atomic mass only"], answer: 1, explain: "Valence (outer) electrons determine how atoms bond." } ] },
        { id: "science-hs-5", title: "Chemical Bonds and Reactions", minutes: 10, objective: "By the end, you can explain how atoms bond and what happens in a chemical reaction.",
          body: `<p>Atoms join together to form <strong>compounds</strong>. They bond because most atoms are more stable when their outer electron shell is full. There are two main kinds of bonds.</p>
<p>In an <strong>ionic bond</strong>, one atom gives an electron to another. The atoms become charged particles called ions and stick together by attraction. Table salt forms this way: sodium gives an electron to chlorine, making sodium chloride (NaCl).</p>
<p>In a <strong>covalent bond</strong>, atoms share electrons instead of giving them away. Water (H2O) forms when oxygen shares electrons with two hydrogen atoms. Most molecules in living things use covalent bonds.</p>
<p>A <strong>chemical reaction</strong> happens when bonds break and new bonds form, creating new substances. The starting substances are called <strong>reactants</strong>, and the new substances are called <strong>products</strong>. We write reactions as equations, like: 2H2 + O2 to 2H2O.</p>
<p>A key rule is the <strong>conservation of mass</strong>: matter is not created or destroyed in a reaction. The number of each kind of atom must be the same on both sides of the equation. That is why chemists "balance" equations. Reactions are everywhere: burning fuel, baking bread, rusting iron, and the digestion happening in your body right now.</p>`,
          terms: [ { term: "compound", def: "A substance made of two or more different atoms bonded together." },
            { term: "ionic bond", def: "A bond where one atom gives an electron to another." },
            { term: "covalent bond", def: "A bond where atoms share electrons." },
            { term: "chemical reaction", def: "A process where bonds break and form, making new substances." },
            { term: "conservation of mass", def: "The rule that matter is not created or destroyed in a reaction." } ],
          quiz: [ { q: "What happens in an ionic bond?", options: ["Atoms share electrons", "One atom gives an electron to another", "Atoms split apart", "Nothing changes"], answer: 1, explain: "In an ionic bond, one atom transfers an electron to another." },
            { q: "What kind of bond holds water together?", options: ["Ionic", "Covalent", "No bond", "Magnetic"], answer: 1, explain: "Water forms covalent bonds by sharing electrons." },
            { q: "What are the starting substances in a reaction called?", options: ["Products", "Reactants", "Ions", "Compounds"], answer: 1, explain: "Reactants are the starting substances in a chemical reaction." },
            { q: "What does conservation of mass mean?", options: ["Mass disappears", "Matter is not created or destroyed", "Atoms vanish", "Mass doubles"], answer: 1, explain: "Conservation of mass means matter is neither created nor destroyed." } ] },
        { id: "science-hs-6", title: "The Mole and Measuring Matter", minutes: 9, objective: "By the end, you can explain what the mole is and why chemists use it.",
          body: `<p>Atoms and molecules are far too small and too numerous to count one by one. To work with them, chemists use a special counting unit called the <strong>mole</strong>.</p>
<p>A mole is simply a very large, fixed number of particles, just like a "dozen" always means 12. One mole equals about 602,000,000,000,000,000,000,000 particles. This huge value is called <strong>Avogadro's number</strong>, roughly 6.02 times 10 to the 23rd power.</p>
<p>Why such a strange number? It connects the tiny world of atoms to amounts we can measure on a scale. The <strong>molar mass</strong> of an element is the mass of one mole of it, in grams, and it matches the atomic mass on the periodic table. For example, carbon has an atomic mass of about 12, so one mole of carbon weighs about 12 grams.</p>
<p>The mole lets chemists measure out the right amounts for a reaction. If an equation says two molecules of hydrogen react with one of oxygen, a chemist can scale that up to two moles of hydrogen and one mole of oxygen and weigh them out.</p>
<p>Using moles, chemists can predict exactly how much product a reaction will make. This kind of calculation, called <strong>stoichiometry</strong>, is at the heart of practical chemistry, from making medicines to manufacturing fuels.</p>`,
          terms: [ { term: "mole", def: "A counting unit equal to about 6.02 times 10 to the 23rd particles." },
            { term: "Avogadro's number", def: "The number of particles in one mole, about 6.02 times 10 to the 23rd." },
            { term: "molar mass", def: "The mass of one mole of a substance, in grams." },
            { term: "stoichiometry", def: "The calculation of amounts of reactants and products in a reaction." },
            { term: "atomic mass", def: "The mass of an atom, shown on the periodic table." } ],
          quiz: [ { q: "What is a mole in chemistry?", options: ["A small animal", "A fixed large number of particles", "A type of atom", "A unit of length"], answer: 1, explain: "A mole is a counting unit for a fixed, large number of particles." },
            { q: "What is Avogadro's number, approximately?", options: ["12", "100", "6.02 times 10 to the 23rd", "1,000"], answer: 2, explain: "Avogadro's number is about 6.02 times 10 to the 23rd." },
            { q: "What does molar mass tell you?", options: ["The color of a substance", "The mass of one mole in grams", "The number of bonds", "The temperature"], answer: 1, explain: "Molar mass is the mass of one mole of a substance in grams." },
            { q: "Why do chemists use the mole?", options: ["To count tiny particles in measurable amounts", "To measure temperature", "To name elements", "To draw the periodic table"], answer: 0, explain: "The mole connects countless tiny atoms to amounts we can weigh." } ] }
      ]},
      { title: "Physics (Grade 11)", lessons: [
        { id: "science-hs-7", title: "Newton's Laws and Energy", minutes: 10, objective: "By the end, you can state Newton's three laws and explain energy and its conservation.",
          body: `<p>Physics begins with motion. Isaac Newton described three laws that explain how objects move when forces act on them.</p>
<p><strong>Newton's First Law</strong> says an object at rest stays at rest, and an object in motion stays in motion at the same speed and direction, unless a force acts on it. This is the law of <strong>inertia</strong>. A ball will not stop rolling unless friction or another force stops it.</p>
<p><strong>Newton's Second Law</strong> connects force, mass, and acceleration with the equation F = ma. It means the more force you apply, the more an object accelerates, and the heavier the object, the more force it takes to move it. Pushing an empty cart is easier than pushing a full one.</p>
<p><strong>Newton's Third Law</strong> says for every action there is an equal and opposite reaction. When you jump, you push down on the ground, and the ground pushes you up. A rocket pushes gas down and is pushed up.</p>
<p><strong>Energy</strong> is the ability to do work. <strong>Kinetic energy</strong> is the energy of motion; <strong>potential energy</strong> is stored energy, like a ball held up high. A key rule is the <strong>conservation of energy</strong>: energy is never created or destroyed, only changed from one form to another. A falling ball turns potential energy into kinetic energy.</p>`,
          terms: [ { term: "inertia", def: "An object's tendency to keep its state of rest or motion." },
            { term: "acceleration", def: "How quickly an object's speed or direction changes." },
            { term: "Newton's Second Law", def: "Force equals mass times acceleration (F = ma)." },
            { term: "kinetic energy", def: "The energy of a moving object." },
            { term: "conservation of energy", def: "The rule that energy is not created or destroyed, only changed in form." } ],
          quiz: [ { q: "What does Newton's First Law describe?", options: ["F = ma", "Inertia: objects keep their motion unless a force acts", "Gravity", "Energy storage"], answer: 1, explain: "The First Law is about inertia, objects resisting changes in motion." },
            { q: "What does F = ma mean?", options: ["Force equals mass times acceleration", "Force equals mass plus acceleration", "Friction equals motion", "Force is always zero"], answer: 0, explain: "Newton's Second Law states force equals mass times acceleration." },
            { q: "What is an example of Newton's Third Law?", options: ["A ball rolling forever", "A rocket pushing gas down and being pushed up", "An object speeding up", "A still object"], answer: 1, explain: "Every action has an equal and opposite reaction, like a rocket." },
            { q: "What is the conservation of energy?", options: ["Energy disappears", "Energy is not created or destroyed, only changed", "Energy doubles", "Energy is only kinetic"], answer: 1, explain: "Energy is conserved, changing form but never being created or destroyed." } ] },
        { id: "science-hs-8", title: "Electricity and Magnetism", minutes: 10, objective: "By the end, you can explain electric current and how electricity and magnetism are linked.",
          body: `<p><strong>Electricity</strong> comes from the movement of electrons, the tiny negative particles in atoms. When electrons flow through a material, we call it an electric <strong>current</strong>. Materials that let electrons flow easily, like copper, are <strong>conductors</strong>. Materials that block flow, like rubber, are <strong>insulators</strong>.</p>
<p>For current to flow, you need a closed loop called a <strong>circuit</strong>. A simple circuit has a power source (like a battery), wires, and a device (like a light bulb). If the loop is broken, the current stops, which is how a switch works.</p>
<p>Three quantities describe electricity. <strong>Voltage</strong> is the push that drives the current, measured in volts. <strong>Current</strong> is the amount of flow, measured in amps. <strong>Resistance</strong> slows the flow, measured in ohms. They are related by Ohm's Law: voltage equals current times resistance.</p>
<p><strong>Magnetism</strong> is a force that pulls or pushes certain metals, like iron. Magnets have a north and a south pole. Like poles repel; opposite poles attract.</p>
<p>Electricity and magnetism are deeply connected. A moving electric current creates a magnetic field, and a moving magnet can create an electric current. This link, called <strong>electromagnetism</strong>, powers electric motors and generators. Nearly all the electricity in your home is made by spinning magnets near coils of wire.</p>`,
          terms: [ { term: "current", def: "The flow of electrons through a material." },
            { term: "conductor", def: "A material that lets electricity flow easily, like copper." },
            { term: "circuit", def: "A closed loop that allows current to flow." },
            { term: "voltage", def: "The push that drives electric current, measured in volts." },
            { term: "electromagnetism", def: "The link between electricity and magnetism." } ],
          quiz: [ { q: "What is an electric current?", options: ["The flow of electrons", "A type of magnet", "A kind of atom", "Stored energy"], answer: 0, explain: "Current is the flow of electrons through a material." },
            { q: "What do you need for current to flow?", options: ["An insulator only", "A closed circuit", "A broken loop", "A magnet only"], answer: 1, explain: "Current needs a closed circuit to flow." },
            { q: "What happens with like magnetic poles?", options: ["They attract", "They repel", "They disappear", "They become electric"], answer: 1, explain: "Like poles repel; opposite poles attract." },
            { q: "How is most home electricity generated?", options: ["By burning insulators", "By spinning magnets near coils of wire", "By batteries only", "By sunlight only"], answer: 1, explain: "Generators spin magnets near coils to produce electricity via electromagnetism." } ] },
        { id: "science-hs-9", title: "Waves: Light and Sound", minutes: 9, objective: "By the end, you can describe waves and how light and sound differ.",
          body: `<p>A <strong>wave</strong> is a disturbance that carries energy from one place to another without carrying matter along with it. When you drop a stone in water, ripples spread out, but the water itself does not travel to the shore.</p>
<p>Waves have measurable features. The <strong>wavelength</strong> is the distance from one wave peak to the next. The <strong>frequency</strong> is how many waves pass a point each second, measured in hertz. The <strong>amplitude</strong> is the height of the wave, which relates to how much energy it carries.</p>
<p><strong>Sound</strong> is a wave made by vibrations traveling through a material like air, water, or metal. Sound needs a medium to travel, so there is no sound in empty space. A higher frequency makes a higher pitch, and a larger amplitude makes a louder sound.</p>
<p><strong>Light</strong> is also a wave, but a very different kind. Light is an electromagnetic wave and can travel through empty space, which is why sunlight reaches Earth. Light travels incredibly fast, about 300,000 kilometers per second. Different wavelengths of light appear as different colors; red has a longer wavelength and violet a shorter one.</p>
<p>The full <strong>electromagnetic spectrum</strong> includes radio waves, microwaves, visible light, X-rays, and more. They are all the same kind of wave with different wavelengths. Waves let us see, hear, communicate, and understand the universe.</p>`,
          terms: [ { term: "wave", def: "A disturbance that carries energy without carrying matter." },
            { term: "wavelength", def: "The distance from one wave peak to the next." },
            { term: "frequency", def: "How many waves pass a point each second, in hertz." },
            { term: "amplitude", def: "The height of a wave, related to its energy." },
            { term: "electromagnetic spectrum", def: "The full range of light waves, from radio waves to X-rays." } ],
          quiz: [ { q: "What does a wave carry?", options: ["Matter", "Energy without carrying matter", "Only water", "Nothing"], answer: 1, explain: "A wave carries energy without moving matter along with it." },
            { q: "Why is there no sound in empty space?", options: ["Space is too cold", "Sound needs a medium to travel", "Sound is too fast", "Light blocks it"], answer: 1, explain: "Sound needs a material medium, which empty space lacks." },
            { q: "How is light different from sound?", options: ["Light cannot travel", "Light can travel through empty space", "Light is slower", "Light needs air"], answer: 1, explain: "Light is electromagnetic and can travel through the vacuum of space." },
            { q: "What does frequency measure?", options: ["The wave's color only", "How many waves pass a point each second", "The wave's weight", "The wave's temperature"], answer: 1, explain: "Frequency is the number of waves passing a point per second." } ] }
      ]}
    ]}
  ]
});
