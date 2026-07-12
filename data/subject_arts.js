window.HR_DATA = window.HR_DATA || { subjects: [] };
window.HR_DATA.subjects.push({
  key: "arts",
  name: "The Arts",
  icon: "🎨",
  color: "#ec4899",
  blurb: "Visual art, music, and theater — creativity and cultural expression.",
  why: "Art and music are cultural touchstones; American genres like jazz and Broadway come up often in conversation.",
  stages: [
    { stage: "elementary", grades: "K–5", units: [
      { title: "The Elements of Art", lessons: [
        { id: "arts-el-1", title: "Line and Shape", minutes: 8, objective: "By the end, you can name the basic kinds of line and shape and find them in pictures.",
          body: `<p>Every drawing or painting is built from a few simple building blocks. Artists call these the <strong>elements of art</strong>. The two we start with are <strong>line</strong> and <strong>shape</strong>.</p>
<p>A <strong>line</strong> is a mark that moves from one point to another. Lines can be straight, curved, wavy, zigzag, thick, or thin. A line can be horizontal (lying down, like the horizon), vertical (standing up), or diagonal (slanted). Artists use lines to show edges, movement, and feeling. A soft curvy line feels calm. A sharp zigzag line feels exciting or nervous.</p>
<p>A <strong>shape</strong> is a flat, closed area. When a line travels around and meets itself, it makes a shape. There are two big groups. <strong>Geometric shapes</strong> are regular and have names, like the circle, square, triangle, and rectangle. <strong>Organic shapes</strong> are free and uneven, like the shape of a leaf, a cloud, or a puddle.</p>
<p>Shapes are flat, with only length and width. Later you will learn that a <strong>form</strong> is the 3-D version of a shape: a circle becomes a sphere (a ball), and a square becomes a cube (a box).</p>
<p>Try this: look around the room. The window is probably a rectangle. A clock is a circle. A door is a tall rectangle made of straight vertical and horizontal lines. Once you start seeing lines and shapes everywhere, you are looking at the world like an artist. Drawing simple shapes first, then adding detail, is how many artists begin a picture.</p>`,
          terms: [
            { term: "Element of art", def: "A basic building block of art, such as line, shape, or color." },
            { term: "Line", def: "A mark that moves from one point to another; it can be straight, curved, or zigzag." },
            { term: "Shape", def: "A flat, closed area with length and width." },
            { term: "Geometric shape", def: "A regular shape with a name, like a circle, square, or triangle." },
            { term: "Organic shape", def: "A free, uneven shape found in nature, like a leaf or cloud." },
            { term: "Form", def: "The three-dimensional version of a shape, such as a sphere or cube." }
          ],
          quiz: [
            { q: "Which of these is a geometric shape?", options: ["Square", "Cloud", "Puddle", "Leaf"], answer: 0, explain: "A square is regular and has a name, so it is geometric." },
            { q: "A line that lies down flat, like the horizon, is called:", options: ["Horizontal", "Vertical", "Diagonal", "Curved"], answer: 0, explain: "Horizontal lines run side to side, like the horizon." },
            { q: "What makes a shape?", options: ["A line that travels around and closes", "A single dot", "A splash of color only", "A straight edge"], answer: 0, explain: "When a line closes on itself, it encloses a flat area called a shape." },
            { q: "The 3-D version of a circle is a:", options: ["Sphere", "Square", "Triangle", "Line"], answer: 0, explain: "A sphere is the rounded, ball-like form of a circle." }
          ] },
        { id: "arts-el-2", title: "Color and the Color Wheel", minutes: 9, objective: "By the end, you can explain primary and secondary colors and read a color wheel.",
          body: `<p>Color is one of the most exciting elements of art. To understand color, artists use a tool called the <strong>color wheel</strong>. It arranges colors in a circle so we can see how they relate to one another.</p>
<p>The three <strong>primary colors</strong> are red, yellow, and blue. They are special because you cannot make them by mixing other colors. Instead, every other color comes from them. Think of the primaries as the starting set of paints.</p>
<p>When you mix two primary colors, you get a <strong>secondary color</strong>. Red and yellow make orange. Yellow and blue make green. Blue and red make purple (also called violet). So the three secondary colors are orange, green, and purple. On the color wheel, each secondary color sits between the two primaries that make it.</p>
<p>If you mix a primary color with the secondary color next to it, you get a <strong>tertiary color</strong>, like red-orange or blue-green. That fills in the rest of the wheel.</p>
<p>Colors also have moods. <strong>Warm colors</strong> — red, orange, and yellow — remind us of fire and sunshine and feel energetic. <strong>Cool colors</strong> — blue, green, and purple — remind us of water and sky and feel calm.</p>
<p>Two more useful words: a <strong>tint</strong> is a color mixed with white to make it lighter, like pink (red plus white). A <strong>shade</strong> is a color mixed with black to make it darker. Artists choose colors carefully because color can change the whole feeling of a picture, even before you notice what the picture shows.</p>`,
          terms: [
            { term: "Color wheel", def: "A circle that arranges colors to show how they relate." },
            { term: "Primary colors", def: "Red, yellow, and blue; colors you cannot make by mixing others." },
            { term: "Secondary color", def: "A color made by mixing two primaries: orange, green, or purple." },
            { term: "Warm colors", def: "Red, orange, and yellow, which feel energetic." },
            { term: "Cool colors", def: "Blue, green, and purple, which feel calm." },
            { term: "Tint", def: "A color lightened by adding white." }
          ],
          quiz: [
            { q: "Which set lists the primary colors?", options: ["Red, yellow, blue", "Orange, green, purple", "Pink, brown, gray", "Black, white, gray"], answer: 0, explain: "Red, yellow, and blue cannot be mixed from other colors." },
            { q: "Mixing yellow and blue makes:", options: ["Green", "Purple", "Orange", "Brown"], answer: 0, explain: "Yellow plus blue produces the secondary color green." },
            { q: "Which is a warm color?", options: ["Orange", "Blue", "Green", "Purple"], answer: 0, explain: "Orange is a warm color, linked to fire and sun." },
            { q: "Pink is an example of a:", options: ["Tint", "Shade", "Primary color", "Cool color"], answer: 0, explain: "Pink is red mixed with white, which makes it a tint." }
          ] },
        { id: "arts-el-3", title: "Famous Artists for Kids", minutes: 8, objective: "By the end, you can name a few famous artists and what they are known for.",
          body: `<p>When children learn about art in American schools, a few famous artists come up again and again. Knowing their names helps you join conversations about museums and culture.</p>
<p><strong>Vincent van Gogh</strong> was a Dutch painter famous for thick, swirling brushstrokes and bright colors. His most famous painting is <em>The Starry Night</em>, a swirling blue night sky. He also painted bright yellow sunflowers.</p>
<p><strong>Pablo Picasso</strong> was a Spanish artist who helped invent a style called Cubism. He painted faces and objects as if you could see them from many sides at once, broken into shapes. His work looks playful and strange in a fun way.</p>
<p><strong>Leonardo da Vinci</strong> lived long ago in Italy. He painted the <em>Mona Lisa</em>, the most famous portrait in the world, known for her mysterious smile. He was also an inventor and scientist.</p>
<p><strong>Claude Monet</strong> was a French painter who loved to paint outdoors, capturing light and water. He painted water lilies in his garden many times.</p>
<p><strong>Frida Kahlo</strong> was a Mexican artist famous for her bold self-portraits, often filled with flowers, animals, and symbols from Mexican culture.</p>
<p>You do not need to remember every detail. The goal is to recognize the names and connect them to one big idea each: Van Gogh and his swirls, Picasso and his shapes, Leonardo and the Mona Lisa, Monet and his soft light, Kahlo and her self-portraits. Visiting a museum becomes much more fun when you spot a name you know.</p>`,
          terms: [
            { term: "Vincent van Gogh", def: "Dutch painter known for swirling brushstrokes and The Starry Night." },
            { term: "Pablo Picasso", def: "Spanish artist who helped create Cubism, showing objects as broken shapes." },
            { term: "Leonardo da Vinci", def: "Italian artist who painted the Mona Lisa." },
            { term: "Claude Monet", def: "French painter who captured light and water, like his water lilies." },
            { term: "Self-portrait", def: "A picture an artist makes of himself or herself." },
            { term: "Portrait", def: "A picture of a person, usually the face." }
          ],
          quiz: [
            { q: "Who painted The Starry Night?", options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Frida Kahlo"], answer: 0, explain: "Van Gogh is famous for the swirling sky of The Starry Night." },
            { q: "The Mona Lisa was painted by:", options: ["Leonardo da Vinci", "Picasso", "Monet", "Van Gogh"], answer: 0, explain: "Leonardo da Vinci painted the world-famous Mona Lisa." },
            { q: "Frida Kahlo is best known for her:", options: ["Self-portraits", "Sculptures of horses", "Black-and-white photos", "Comic books"], answer: 0, explain: "Kahlo painted many bold self-portraits." },
            { q: "Picasso helped create which style?", options: ["Cubism", "Photography", "Pottery", "Calligraphy"], answer: 0, explain: "Picasso co-founded Cubism, breaking objects into shapes." }
          ] }
      ]},
      { title: "Music Basics", lessons: [
        { id: "arts-el-4", title: "Beat and Rhythm", minutes: 8, objective: "By the end, you can tell the difference between a steady beat and rhythm.",
          body: `<p>Music is built on time. Two of the most basic ideas in all of music are the <strong>beat</strong> and the <strong>rhythm</strong>.</p>
<p>The <strong>beat</strong> is the steady pulse of the music. It is like a clock ticking or your heart beating. If you tap your foot to a song without thinking, you are usually tapping the beat. The beat does not speed up or slow down on its own; it stays even.</p>
<p>The speed of the beat is called the <strong>tempo</strong>. A fast tempo makes music feel exciting, like a dance. A slow tempo makes music feel calm or sad, like a lullaby.</p>
<p><strong>Rhythm</strong> is the pattern of long and short sounds that we hear on top of the beat. The words of a song create rhythm. Some notes are quick, some are held long, and some are silent (a rest). Clapping the rhythm of "Hap-py Birth-day to you" sounds different from just tapping the steady beat underneath it.</p>
<p>Here is an easy way to remember the difference. The beat is steady and never changes. The rhythm dances around on top of the beat and changes all the time.</p>
<p>Music also has <strong>dynamics</strong>, which means how loud or soft the sound is. Soft music can feel gentle or mysterious; loud music can feel powerful or joyful. When you sing or play, paying attention to beat, tempo, rhythm, and dynamics turns a string of notes into real, expressive music that people enjoy.</p>`,
          terms: [
            { term: "Beat", def: "The steady pulse of music, like a ticking clock." },
            { term: "Tempo", def: "How fast or slow the beat goes." },
            { term: "Rhythm", def: "The pattern of long and short sounds over the beat." },
            { term: "Rest", def: "A silence in music, when no note is played." },
            { term: "Dynamics", def: "How loud or soft the music is." },
            { term: "Pulse", def: "Another word for the regular beat you can feel." }
          ],
          quiz: [
            { q: "The steady pulse you tap your foot to is the:", options: ["Beat", "Rhythm", "Rest", "Tempo name"], answer: 0, explain: "The beat is the even, steady pulse of the music." },
            { q: "Tempo means:", options: ["How fast or slow the beat is", "How loud the music is", "The pattern of words", "A silence"], answer: 0, explain: "Tempo describes the speed of the beat." },
            { q: "A silence in music is called a:", options: ["Rest", "Beat", "Tint", "Dynamic"], answer: 0, explain: "A rest is a moment of silence with no note." },
            { q: "How loud or soft music is, is called:", options: ["Dynamics", "Tempo", "Rhythm", "Beat"], answer: 0, explain: "Dynamics describe the loudness or softness of music." }
          ] },
        { id: "arts-el-5", title: "Instruments and Their Families", minutes: 9, objective: "By the end, you can sort common instruments into their families.",
          body: `<p>There are hundreds of musical instruments, but most belong to one of four big groups, called <strong>instrument families</strong>. Instruments are grouped by how they make their sound.</p>
<p>The <strong>string family</strong> makes sound from vibrating strings. You can pluck the strings (like a guitar or harp) or rub them with a bow (like a violin or cello). The violin is small and high; the cello is large and low.</p>
<p>The <strong>woodwind family</strong> makes sound when air moves through a tube. Many were once made of wood. The flute is played by blowing across a hole. The clarinet and saxophone use a thin piece called a reed that shakes when you blow.</p>
<p>The <strong>brass family</strong> is made of metal tubes you buzz your lips into, like the trumpet, trombone, and tuba. Brass instruments can be very loud and bright. The trumpet is high; the tuba is very low.</p>
<p>The <strong>percussion family</strong> makes sound when you hit, shake, or scratch it. Drums, cymbals, tambourines, and xylophones are all percussion. Percussion keeps the beat steady for the whole group.</p>
<p>When many instruments play together, we call the large group an <strong>orchestra</strong>. A leader called the conductor stands in front and keeps everyone together. The piano is special: you press keys that make little hammers hit strings inside, so people sometimes call it both a string and a percussion instrument. Knowing the families helps you understand the sounds you hear in songs and movies.</p>`,
          terms: [
            { term: "Instrument family", def: "A group of instruments that make sound in a similar way." },
            { term: "String family", def: "Instruments with vibrating strings, like the violin and guitar." },
            { term: "Woodwind family", def: "Instruments played by blowing air through a tube, like the flute and clarinet." },
            { term: "Brass family", def: "Metal instruments you buzz your lips into, like the trumpet and tuba." },
            { term: "Percussion family", def: "Instruments you hit or shake, like drums and cymbals." },
            { term: "Orchestra", def: "A large group of instruments playing together, led by a conductor." }
          ],
          quiz: [
            { q: "A violin belongs to which family?", options: ["String", "Brass", "Percussion", "Woodwind"], answer: 0, explain: "The violin makes sound from vibrating strings." },
            { q: "Which instrument is in the brass family?", options: ["Trumpet", "Flute", "Drum", "Guitar"], answer: 0, explain: "The trumpet is metal and played by buzzing the lips." },
            { q: "Drums and cymbals are part of the:", options: ["Percussion family", "String family", "Woodwind family", "Brass family"], answer: 0, explain: "Percussion instruments are hit or shaken." },
            { q: "The leader who keeps an orchestra together is the:", options: ["Conductor", "Drummer", "Singer", "Painter"], answer: 0, explain: "The conductor stands in front and guides the players." }
          ] }
      ]}
    ]},
    { stage: "middle", grades: "6–8", units: [
      { title: "Principles of Design", lessons: [
        { id: "arts-ms-1", title: "Balance, Contrast, and Emphasis", minutes: 9, objective: "By the end, you can explain balance, contrast, and emphasis in a design.",
          body: `<p>The elements of art are the building blocks. The <strong>principles of design</strong> are the rules for arranging those blocks so a picture works well. Three important principles are balance, contrast, and emphasis.</p>
<p><strong>Balance</strong> is how the visual weight is spread across a picture. In <em>symmetrical balance</em>, the two sides match, like a butterfly or a face. It feels calm and formal. In <em>asymmetrical balance</em>, the two sides are different but still feel even — maybe one large shape on the left balances several small shapes on the right. This feels more relaxed and natural.</p>
<p><strong>Contrast</strong> means putting different things side by side so each stands out. Light next to dark, big next to small, or smooth next to rough all create contrast. Contrast makes a picture lively and easy to read. Without enough contrast, everything blends together and looks flat.</p>
<p><strong>Emphasis</strong> is making one part of the artwork stand out as the most important. That special part is called the <strong>focal point</strong>. Artists create emphasis by using contrast — a bright color in a gray painting, or the one figure facing toward you while others face away. Your eye goes straight to it.</p>
<p>These principles work together. An artist might use strong contrast to create emphasis, then arrange the rest of the picture for balance. When you look at posters, album covers, or paintings, ask yourself: Is it balanced? Where is the contrast? What is the focal point? You will start to see the choices the artist made on purpose.</p>`,
          terms: [
            { term: "Principles of design", def: "Rules for arranging the elements of art in a pleasing way." },
            { term: "Balance", def: "How visual weight is spread across an artwork." },
            { term: "Symmetrical balance", def: "When both sides of a design match." },
            { term: "Contrast", def: "Placing different things side by side so each stands out." },
            { term: "Emphasis", def: "Making one part of the artwork the most important." },
            { term: "Focal point", def: "The part of an artwork that draws the eye first." }
          ],
          quiz: [
            { q: "When both sides of a design match, the balance is:", options: ["Symmetrical", "Asymmetrical", "Contrasting", "Emphatic"], answer: 0, explain: "Matching sides means symmetrical balance." },
            { q: "Light next to dark is an example of:", options: ["Contrast", "Balance", "Tempo", "Rhythm"], answer: 0, explain: "Putting opposites side by side creates contrast." },
            { q: "The part of an artwork that grabs your eye first is the:", options: ["Focal point", "Color wheel", "Border", "Background"], answer: 0, explain: "Emphasis creates a focal point that draws the eye." },
            { q: "The principles of design are:", options: ["Rules for arranging the elements of art", "The four instrument families", "Names of famous artists", "Types of paint"], answer: 0, explain: "Principles guide how the building blocks are arranged." }
          ] },
        { id: "arts-ms-2", title: "Pattern, Movement, and Unity", minutes: 8, objective: "By the end, you can identify pattern, movement, and unity in artwork.",
          body: `<p>Besides balance, contrast, and emphasis, designers use a few more principles to organize artwork: pattern, movement, rhythm, proportion, and unity.</p>
<p>A <strong>pattern</strong> is something repeated again and again. Repeating a shape, color, or line creates a pattern, like tiles on a floor or stripes on a shirt. Patterns can be calm and regular or wild and surprising.</p>
<p>Closely related is <strong>rhythm</strong>. Just like in music, visual rhythm is created by repeating elements with spaces in between. It guides your eye to move through the picture in a steady way.</p>
<p><strong>Movement</strong> is the path your eye takes as it travels across an artwork. Artists use lines, shapes, and color to lead the viewer's eye from one place to another, almost like a road. Diagonal lines and curves often create a strong sense of movement.</p>
<p><strong>Proportion</strong> is about size relationships — how big one part is compared to another. Correct proportion makes a drawing of a person look real; changing proportion on purpose can make art feel funny or dramatic.</p>
<p>The last principle pulls everything together: <strong>unity</strong>. Unity means all the parts of the artwork feel like they belong together as one whole. Using a few repeated colors or shapes helps create unity. The opposite problem is when a picture feels messy and disconnected.</p>
<p>Good design balances these ideas. A poster might use a repeating pattern for interest, diagonal lines for movement, and a single color scheme for unity. Learning these words gives you the vocabulary to talk about why some designs simply look right.</p>`,
          terms: [
            { term: "Pattern", def: "A shape, color, or line repeated again and again." },
            { term: "Movement", def: "The path your eye takes across an artwork." },
            { term: "Rhythm (visual)", def: "Repeated elements with spaces that guide the eye." },
            { term: "Proportion", def: "The size of one part compared to another." },
            { term: "Unity", def: "When all parts of an artwork feel like one whole." },
            { term: "Repetition", def: "Using the same element more than once." }
          ],
          quiz: [
            { q: "Stripes on a shirt are an example of:", options: ["Pattern", "Movement", "Proportion", "Emphasis"], answer: 0, explain: "Repeating lines or shapes creates a pattern." },
            { q: "The path your eye takes across a picture is called:", options: ["Movement", "Unity", "Pattern", "Balance"], answer: 0, explain: "Movement is how the eye travels through the artwork." },
            { q: "When all parts feel like one whole, the artwork has:", options: ["Unity", "Contrast", "Proportion", "Rhythm"], answer: 0, explain: "Unity means everything belongs together." },
            { q: "Proportion is about:", options: ["Size relationships between parts", "How loud the colors are", "Repeated shapes", "The focal point"], answer: 0, explain: "Proportion compares the sizes of different parts." }
          ] }
      ]},
      { title: "Reading Music and the Stage", lessons: [
        { id: "arts-ms-3", title: "Reading Music Notation", minutes: 10, objective: "By the end, you can read the staff, basic note values, and time signatures.",
          body: `<p>Written music is a code that tells a player what notes to make and how long to hold them. Learning to read it is like learning a new alphabet.</p>
<p>Notes are written on a <strong>staff</strong>, which is a set of five horizontal lines and the four spaces between them. The higher a note sits on the staff, the higher its pitch. At the start of the staff is a <strong>clef</strong>. The treble clef is used for higher sounds (like a flute or right hand on piano), and the bass clef is used for lower sounds.</p>
<p>The lines and spaces stand for the musical alphabet: A, B, C, D, E, F, and G. After G it starts over at A. Each line or space is one of these letter notes.</p>
<p>Notes also tell you how long to play. A <strong>whole note</strong> lasts four beats, a <strong>half note</strong> lasts two beats, and a <strong>quarter note</strong> lasts one beat. The way a note is drawn — open or filled, with or without a stem and flag — shows its length.</p>
<p>The music is divided into <strong>measures</strong> by vertical bar lines. At the beginning you will see a <strong>time signature</strong>, two numbers stacked like a fraction. The top number tells how many beats are in each measure. The bottom number tells which kind of note gets one beat. The most common is 4/4: four beats per measure, with the quarter note getting one beat.</p>
<p>With just these basics — staff, clef, note values, measures, and time signature — you can begin to follow along with simple sheet music.</p>`,
          terms: [
            { term: "Staff", def: "Five lines and four spaces where music notes are written." },
            { term: "Clef", def: "A symbol at the start of the staff showing the pitch range, like treble or bass." },
            { term: "Quarter note", def: "A note that lasts one beat." },
            { term: "Measure", def: "A section of music between two bar lines." },
            { term: "Time signature", def: "Two numbers showing how many beats are in each measure." },
            { term: "Pitch", def: "How high or low a sound is." }
          ],
          quiz: [
            { q: "How many lines does a music staff have?", options: ["Five", "Four", "Six", "Three"], answer: 0, explain: "A staff has five lines and four spaces." },
            { q: "A whole note lasts how many beats?", options: ["Four", "Two", "One", "Eight"], answer: 0, explain: "A whole note is held for four beats." },
            { q: "In 4/4 time, the top number tells you:", options: ["How many beats per measure", "How loud to play", "The name of the song", "Which clef to use"], answer: 0, explain: "The top number of a time signature gives beats per measure." },
            { q: "A clef at the start of the staff shows:", options: ["The pitch range", "The tempo", "The dynamics", "The title"], answer: 0, explain: "The clef tells whether the music is high (treble) or low (bass)." }
          ] },
        { id: "arts-ms-4", title: "Music History Overview", minutes: 9, objective: "By the end, you can name the main periods of Western music history in order.",
          body: `<p>Western music has changed a lot over the centuries. Historians divide it into periods, each with its own sound and famous composers.</p>
<p>The <strong>Medieval</strong> period (about 500 to 1400) was the oldest. Much of its music was simple chant sung in churches, with a single melody and no harmony at first.</p>
<p>The <strong>Renaissance</strong> period (about 1400 to 1600) added rich harmonies, with many voices singing different lines that blended together.</p>
<p>The <strong>Baroque</strong> period (about 1600 to 1750) was fancy and highly decorated. Composers like Johann Sebastian Bach and George Frideric Handel wrote complex, layered music. The orchestra began to grow.</p>
<p>The <strong>Classical</strong> period (about 1750 to 1820) valued balance, clear melodies, and graceful form. Wolfgang Amadeus Mozart and the young Ludwig van Beethoven are the giants of this era. (Note: "classical music" can mean this exact period or all serious orchestral music.)</p>
<p>The <strong>Romantic</strong> period (about 1820 to 1900) was full of strong emotion, drama, and big orchestras. Beethoven's later work led the way, followed by composers like Tchaikovsky, who wrote ballets such as <em>The Nutcracker</em>.</p>
<p>The <strong>Modern</strong> and <strong>contemporary</strong> periods (the 1900s to today) broke old rules and tried bold new sounds, and they overlap with the rise of jazz, pop, and film music. Knowing this timeline — Medieval, Renaissance, Baroque, Classical, Romantic, Modern — helps you place any piece of music in its time.</p>`,
          terms: [
            { term: "Medieval music", def: "Early music (about 500–1400), often simple church chant." },
            { term: "Baroque", def: "Fancy, decorated music (about 1600–1750); composers include Bach." },
            { term: "Classical period", def: "Balanced, graceful music (about 1750–1820); Mozart and Beethoven." },
            { term: "Romantic period", def: "Emotional, dramatic music with big orchestras (about 1820–1900)." },
            { term: "Composer", def: "A person who writes music." },
            { term: "Harmony", def: "Two or more notes played together to support a melody." }
          ],
          quiz: [
            { q: "Which period came first?", options: ["Medieval", "Romantic", "Classical", "Baroque"], answer: 0, explain: "The Medieval period (about 500–1400) is the earliest." },
            { q: "Mozart is a giant of which period?", options: ["Classical", "Baroque", "Medieval", "Modern"], answer: 0, explain: "Mozart is a leading composer of the Classical period." },
            { q: "Johann Sebastian Bach is associated with the:", options: ["Baroque period", "Romantic period", "Medieval period", "Modern period"], answer: 0, explain: "Bach is a famous Baroque composer." },
            { q: "The Romantic period is known for:", options: ["Strong emotion and big orchestras", "Simple church chant only", "No instruments at all", "Computer music"], answer: 0, explain: "Romantic music emphasized emotion, drama, and large orchestras." }
          ] },
        { id: "arts-ms-5", title: "Intro to Theater and the Parts of a Play", minutes: 9, objective: "By the end, you can name the main parts of a play and key theater roles.",
          body: `<p>Theater, or drama, is the art of telling a story by acting it out on a stage in front of a live audience. It is one of the oldest art forms in the world, going back to ancient Greece.</p>
<p>A written play is called a <strong>script</strong>. The words the characters speak are the <strong>dialogue</strong>. Instructions in the script that tell actors where to move or how to feel are called <strong>stage directions</strong>.</p>
<p>A play is divided into large sections called <strong>acts</strong>, and each act is divided into smaller parts called <strong>scenes</strong>. A scene usually happens in one place and time. When the place or time changes, a new scene begins.</p>
<p>Stories in a play follow a shape. The play introduces the characters and setting, then a <strong>conflict</strong> (a problem) appears. Tension rises until it reaches the <strong>climax</strong>, the most exciting turning point. After that, things calm down to the ending, called the resolution.</p>
<p>Many people make a play happen. The <strong>playwright</strong> writes the script. The <strong>director</strong> decides how it will be performed and guides the actors. The <strong>cast</strong> is the group of actors who play the characters. Behind the scenes, the crew handles lights, sound, costumes, and the set (the scenery on stage).</p>
<p>Two famous American types of live performance are the straight play and the musical, where the story is told partly through song. Understanding these basic parts helps you enjoy and talk about any show you see.</p>`,
          terms: [
            { term: "Script", def: "The written text of a play." },
            { term: "Dialogue", def: "The words spoken by characters." },
            { term: "Stage directions", def: "Instructions telling actors how to move or act." },
            { term: "Act", def: "A large section of a play, made of several scenes." },
            { term: "Playwright", def: "The person who writes a play." },
            { term: "Climax", def: "The most exciting turning point of a story." }
          ],
          quiz: [
            { q: "The written text of a play is the:", options: ["Script", "Cast", "Set", "Climax"], answer: 0, explain: "The script is the written version of the play." },
            { q: "A large section of a play, made of scenes, is an:", options: ["Act", "Aria", "Act-or", "Aside"], answer: 0, explain: "Acts are the big sections; scenes are the smaller parts." },
            { q: "The person who writes a play is the:", options: ["Playwright", "Director", "Conductor", "Composer"], answer: 0, explain: "A playwright writes the script of a play." },
            { q: "The most exciting turning point of the story is the:", options: ["Climax", "Setting", "Resolution start", "Dialogue"], answer: 0, explain: "The climax is the high point of the tension." }
          ] }
      ]}
    ]},
    { stage: "high", grades: "9–12", units: [
      { title: "Art History and Critique", lessons: [
        { id: "arts-hs-1", title: "Renaissance to Impressionism", minutes: 10, objective: "By the end, you can describe the Renaissance and Impressionist movements.",
          body: `<p>Art history is the story of how art has changed over time. A <strong>movement</strong> is a group of artists who share ideas and a style during a certain period. Two of the most important early movements are the Renaissance and Impressionism.</p>
<p>The <strong>Renaissance</strong> (roughly the 1400s and 1500s, centered in Italy) means "rebirth." Artists rediscovered the ideas of ancient Greece and Rome and aimed for realism. They studied the human body and used <strong>perspective</strong>, a technique that makes a flat painting look like it has real depth, with far-off things smaller than near ones. The giants of this era were Leonardo da Vinci (the <em>Mona Lisa</em>) and Michelangelo, who painted the ceiling of the Sistine Chapel and carved the statue of David.</p>
<p>Centuries later, <strong>Impressionism</strong> appeared in France in the 1870s. These artists left their studios to paint outdoors and capture a quick "impression" of a moment — especially the way light changed through the day. Instead of smooth, hidden brushwork, they used small, visible dabs of color. Up close it looks rough; from a distance it shimmers. Claude Monet (water lilies, haystacks) and Pierre-Auguste Renoir were leaders. The name was actually a joke from a critic, taken from Monet's painting <em>Impression, Sunrise</em>, but the artists kept it.</p>
<p>The big shift to notice: the Renaissance chased careful realism and depth, while the Impressionists chased the feeling of light and a fleeting moment. Both changed art forever, and you will see their influence in museums around the world.</p>`,
          terms: [
            { term: "Movement (art)", def: "A group of artists sharing a style during a period." },
            { term: "Renaissance", def: "A rebirth of art (1400s–1500s) focused on realism and ancient ideas." },
            { term: "Perspective", def: "A technique that makes a flat picture look deep and three-dimensional." },
            { term: "Michelangelo", def: "Renaissance artist who painted the Sistine Chapel and carved David." },
            { term: "Impressionism", def: "A 1870s French movement capturing light and quick moments with visible brushstrokes." },
            { term: "Realism", def: "Showing subjects as they truly look." }
          ],
          quiz: [
            { q: "The word Renaissance means:", options: ["Rebirth", "Sunset", "Shadow", "Modern"], answer: 0, explain: "Renaissance means rebirth, a revival of ancient ideas." },
            { q: "The technique that gives a flat painting depth is:", options: ["Perspective", "Dynamics", "Tempo", "Contrast only"], answer: 0, explain: "Perspective makes distant objects look smaller and farther away." },
            { q: "Impressionists wanted to capture:", options: ["Light and a fleeting moment", "Only dark indoor scenes", "Ancient battles", "Strict geometric shapes"], answer: 0, explain: "Impressionism aimed to capture changing light and quick impressions." },
            { q: "Who painted the Sistine Chapel ceiling?", options: ["Michelangelo", "Monet", "Renoir", "Warhol"], answer: 0, explain: "Michelangelo painted the Sistine Chapel ceiling." }
          ] },
        { id: "arts-hs-2", title: "Modern, Abstract, and Pop Art", minutes: 10, objective: "By the end, you can explain abstract art and Pop Art, including Warhol.",
          body: `<p>In the 1900s, art changed faster than ever. Artists stopped trying to copy the real world and began exploring new ideas about what art could be. This broad era is called <strong>Modern art</strong>.</p>
<p>One big idea was <strong>abstraction</strong>. <strong>Abstract art</strong> does not try to show people or objects realistically. Instead it uses color, line, and shape on their own to create feeling. Some abstract art is completely <em>non-representational</em>, meaning it shows nothing recognizable at all. Pablo Picasso's Cubism broke objects into shapes; later, painters like Jackson Pollock, an American, dripped and splashed paint across huge canvases in a style called Abstract Expressionism.</p>
<p>In the 1950s and 1960s came <strong>Pop Art</strong>, which took images from everyday popular culture — advertisements, comic books, soup cans, and celebrities — and turned them into fine art. Pop artists liked bright, flat colors and bold outlines, and they often blurred the line between art and commercial design.</p>
<p>The most famous Pop artist was the American <strong>Andy Warhol</strong>. He made silkscreen prints of Campbell's Soup cans, Coca-Cola bottles, and movie stars like Marilyn Monroe, often repeating the same image in different colors. Warhol asked a big question: in a world full of mass-produced images and famous brands, what counts as art? His work is playful but also a sharp comment on fame and consumer culture.</p>
<p>The thread to remember: modern artists moved away from realism toward ideas, emotion, and even everyday objects, opening the door to the wide variety of art we see today.</p>`,
          terms: [
            { term: "Modern art", def: "Art of the 1900s that broke from realism to explore new ideas." },
            { term: "Abstract art", def: "Art that uses color, line, and shape instead of realistic images." },
            { term: "Abstract Expressionism", def: "A bold, gestural American style, as in Jackson Pollock's drip paintings." },
            { term: "Pop Art", def: "A 1950s–60s movement using images from popular culture." },
            { term: "Andy Warhol", def: "American Pop artist known for soup cans and celebrity prints." },
            { term: "Silkscreen", def: "A printing method Warhol used to repeat images." }
          ],
          quiz: [
            { q: "Abstract art mainly uses:", options: ["Color, line, and shape rather than realistic images", "Only black and white photos", "Ancient Greek statues", "Exact copies of real objects"], answer: 0, explain: "Abstract art relies on the elements themselves, not realism." },
            { q: "Pop Art took its images from:", options: ["Everyday popular culture", "Medieval churches", "The Renaissance only", "Nothing recognizable"], answer: 0, explain: "Pop Art used ads, comics, products, and celebrities." },
            { q: "Andy Warhol is famous for prints of:", options: ["Soup cans and celebrities", "Water lilies", "The Mona Lisa", "Cathedrals"], answer: 0, explain: "Warhol made Pop Art of Campbell's Soup cans and stars." },
            { q: "Jackson Pollock is linked to:", options: ["Abstract Expressionism", "the Renaissance", "Baroque opera", "Medieval chant"], answer: 0, explain: "Pollock's drip paintings are Abstract Expressionism." }
          ] },
        { id: "arts-hs-3", title: "How to Analyze and Critique Art", minutes: 9, objective: "By the end, you can use a simple four-step method to critique an artwork.",
          body: `<p>To <strong>critique</strong> art does not mean only to criticize it. It means to look closely and think carefully about what an artwork is doing and how well it works. Art teachers often use a four-step method: describe, analyze, interpret, and judge.</p>
<p><strong>Describe.</strong> First, say only what you actually see, with no opinions yet. What are the subjects, colors, and objects? Is it a painting, photo, or sculpture? This step keeps you honest and slows you down.</p>
<p><strong>Analyze.</strong> Next, look at how the artist arranged things using the elements and principles you have learned. Where is the focal point? Is there balance and contrast? How does color create mood? How does your eye move through the work?</p>
<p><strong>Interpret.</strong> Now ask what it means or makes you feel. What might the artist be trying to say? What mood or idea comes through? There can be more than one reasonable interpretation, but good interpretations are supported by what you described and analyzed.</p>
<p><strong>Judge.</strong> Finally, decide how successful the work is and explain why, using evidence rather than just "I like it." You might judge it by how well the artist used the elements, how original it is, or how strongly it communicates.</p>
<p>This method works for a famous painting in a museum or a poster on the street. The most important habit is to back up every opinion with specific reasons from the artwork itself. Strong art talk is built on evidence, not just taste.</p>`,
          terms: [
            { term: "Critique", def: "To look closely and judge an artwork thoughtfully, not just criticize it." },
            { term: "Describe", def: "The first critique step: state only what you see." },
            { term: "Analyze", def: "Examining how the elements and principles are used." },
            { term: "Interpret", def: "Deciding what an artwork means or expresses." },
            { term: "Judge", def: "Evaluating how successful the artwork is, with reasons." },
            { term: "Evidence", def: "Specific details from the artwork that support an opinion." }
          ],
          quiz: [
            { q: "The first step of an art critique is to:", options: ["Describe what you see", "Judge whether it is good", "Guess the price", "Interpret the meaning"], answer: 0, explain: "Describing comes first, before opinions." },
            { q: "Looking at how the artist used balance and contrast is part of:", options: ["Analyze", "Describe", "Judge", "Buying"], answer: 0, explain: "Analyzing examines the use of elements and principles." },
            { q: "A good judgment of art should be based on:", options: ["Evidence from the artwork", "Only personal taste", "The artist's age", "The size of the frame"], answer: 0, explain: "Strong critique backs opinions with evidence." },
            { q: "To critique art means to:", options: ["Look closely and think carefully about it", "Only say bad things", "Copy it exactly", "Ignore the details"], answer: 0, explain: "Critique is thoughtful analysis, not just criticism." }
          ] }
      ]},
      { title: "American Music and Music Theory", lessons: [
        { id: "arts-hs-4", title: "Jazz, Blues, Rock, and Broadway", minutes: 10, objective: "By the end, you can describe key American music genres and where they came from.",
          body: `<p>The United States created some of the world's most influential music. These genres come up constantly in American culture and conversation.</p>
<p>The <strong>blues</strong> grew out of the songs of African Americans in the South in the late 1800s and early 1900s. It often expresses sorrow or hardship and uses a repeating pattern and "blue notes" that bend the pitch. The blues became the root of much American music that followed.</p>
<p><strong>Jazz</strong> was born in New Orleans in the early 1900s, blending blues, African rhythms, and brass-band sounds. Its key feature is <strong>improvisation</strong>, where musicians invent melodies on the spot. Louis Armstrong (trumpet) and Duke Ellington (bandleader) are legends, along with later figures like Ella Fitzgerald and Miles Davis.</p>
<p><strong>Rock and roll</strong> exploded in the 1950s, mixing blues, country, and rhythm and blues into loud, energetic music for young people. Chuck Berry and Elvis Presley were early stars; the Beatles and many others built on it. Rock used electric guitars, drums, and a strong backbeat.</p>
<p>Meanwhile, <strong>Broadway</strong> in New York City became the home of the American <strong>musical</strong> — a stage play that tells its story through song and dance. Famous musicals include <em>The Sound of Music</em>, <em>West Side Story</em>, and the modern hit <em>Hamilton</em>. Closely tied to this world is <strong>Hollywood</strong>, the center of American movies, where film scores and songs shaped popular culture.</p>
<p>Together, blues, jazz, rock, Broadway, and Hollywood form a huge part of America's gift to world culture.</p>`,
          terms: [
            { term: "Blues", def: "African American music expressing hardship, with blue notes; root of much US music." },
            { term: "Jazz", def: "Music born in New Orleans known for improvisation." },
            { term: "Improvisation", def: "Inventing music on the spot while performing." },
            { term: "Rock and roll", def: "Loud, energetic 1950s music mixing blues, country, and R&B." },
            { term: "Broadway", def: "The New York theater district, home of American musicals." },
            { term: "Musical", def: "A stage play that tells its story through song and dance." }
          ],
          quiz: [
            { q: "Jazz is especially known for:", options: ["Improvisation", "Silent performances", "Medieval chant", "Strict written-only playing"], answer: 0, explain: "Improvising, or inventing music on the spot, defines jazz." },
            { q: "The blues grew out of the music of:", options: ["African Americans in the South", "European royalty", "Ancient Rome", "Broadway producers"], answer: 0, explain: "The blues came from African American communities in the South." },
            { q: "Broadway in New York is famous for:", options: ["Musicals", "Oil paintings", "Sculpture", "Silent films"], answer: 0, explain: "Broadway is the center of American musical theater." },
            { q: "An early rock and roll star was:", options: ["Elvis Presley", "Mozart", "Monet", "Michelangelo"], answer: 0, explain: "Elvis Presley was a leading early rock and roll star." }
          ] },
        { id: "arts-hs-5", title: "Music Theory: Scales, Chords, and Keys", minutes: 10, objective: "By the end, you can explain scales, chords, and keys at a basic level.",
          body: `<p>Music theory explains how music is organized. Three core ideas are scales, chords, and keys.</p>
<p>A <strong>scale</strong> is a set of notes arranged in order from low to high. The most common is the <strong>major scale</strong>, which has seven notes and then repeats (do-re-mi-fa-sol-la-ti-do). Major scales sound bright and happy. A <strong>minor scale</strong> uses a slightly different pattern of steps and sounds sadder or more serious. The distance between two notes is called an <strong>interval</strong>; small steps and larger jumps give a scale its flavor. The gap from one note to the same note higher up is an <strong>octave</strong>.</p>
<p>A <strong>chord</strong> is three or more notes played at the same time, creating <strong>harmony</strong>. The most basic chord is the <em>triad</em>, built from three notes of a scale. Major chords sound happy; minor chords sound sad. When you hear a guitarist strum, each strum is usually a chord. Songs move from chord to chord in patterns called chord progressions.</p>
<p>A <strong>key</strong> is the "home base" of a song — the scale and main note it is built around. A song "in the key of C major" mostly uses the notes of the C major scale and feels resolved when it lands on C. Sharp (#) and flat (b) signs at the start of the staff, called the key signature, tell you which key the music is in.</p>
<p>With scales, chords, and keys, you have the toolkit composers use to build almost any song you hear, from pop to classical.</p>`,
          terms: [
            { term: "Scale", def: "A set of notes in order from low to high." },
            { term: "Major scale", def: "A seven-note scale that sounds bright and happy." },
            { term: "Interval", def: "The distance between two notes." },
            { term: "Chord", def: "Three or more notes played at the same time." },
            { term: "Key", def: "The home base scale and main note a song is built around." },
            { term: "Octave", def: "The distance from one note to the same note higher up." }
          ],
          quiz: [
            { q: "A major scale usually sounds:", options: ["Bright and happy", "Sad and dark", "Random", "Silent"], answer: 0, explain: "Major scales have a bright, happy quality." },
            { q: "A chord is:", options: ["Three or more notes played together", "A single low note", "A type of drum", "A silence"], answer: 0, explain: "A chord is several notes sounding at once, making harmony." },
            { q: "The home base note and scale of a song is its:", options: ["Key", "Tempo", "Octave", "Rest"], answer: 0, explain: "The key is the central scale a song is built around." },
            { q: "The distance between two notes is called an:", options: ["Interval", "Octet", "Encore", "Aria"], answer: 0, explain: "An interval measures the distance between two pitches." }
          ] }
      ]}
    ]}
  ]
});
