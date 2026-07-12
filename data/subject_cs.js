window.HR_DATA = window.HR_DATA || { subjects: [] };
window.HR_DATA.subjects.push({
  key: "cs",
  name: "Computer Science & Technology",
  icon: "💻",
  color: "#8b5cf6",
  blurb: "Digital literacy, internet safety, and the basics of coding.",
  why: "Digital skills and online-safety habits are assumed in American school, work, and government services.",
  stages: [
    { stage: "elementary", grades: "K–5", units: [
      { title: "Computer Basics", lessons: [
        { id: "cs-el-1", title: "Hardware and Software", minutes: 8, objective: "By the end, you can name the main parts of a computer and explain the difference between hardware and software.",
          body: `<p>A <b>computer</b> is a machine that follows instructions to do work. Every computer has two big sides: hardware and software.</p>
<p><b>Hardware</b> is the part you can touch. The <b>monitor</b> is the screen you look at. The <b>keyboard</b> has the keys you press. The <b>mouse</b> moves the arrow on screen. Inside the case are the parts that do the thinking: the <b>CPU</b> (the brain) and the <b>memory</b> that holds information while you work.</p>
<p><b>Software</b> is the part you cannot touch. It is a set of instructions, also called a <b>program</b> or an <b>app</b>. A web browser, a game, and a word processor are all software. The hardware runs the software, the same way a music player (hardware) plays a song (like software).</p>
<p>Think of it this way: the body is hardware, and the ideas in your head are software. You need both. A computer with no software cannot do anything useful, and software needs hardware to run on.</p>
<p>Computers come in many shapes. A <b>desktop</b> sits on a table. A <b>laptop</b> folds shut and travels with you. A <b>tablet</b> and a <b>smartphone</b> are small computers you touch with your finger. They all share the same idea: hardware plus software working together.</p>
<p>When you turn a computer on, the hardware starts first, then the main software, called the <b>operating system</b> (like Windows or macOS), loads. After that, you can open the apps you want.</p>`,
          terms: [
            { term: "Hardware", def: "The physical parts of a computer you can touch." },
            { term: "Software", def: "Instructions, or programs, that tell the hardware what to do." },
            { term: "CPU", def: "The 'brain' of the computer that does the thinking." },
            { term: "Operating system", def: "The main software that runs the computer, such as Windows." },
            { term: "App", def: "A program made to do one job, like a game or browser." }
          ],
          quiz: [
            { q: "Which of these is hardware?", options: ["The keyboard", "A web browser", "A song", "An idea"], answer: 0, explain: "Hardware is the physical part you can touch, like the keyboard." },
            { q: "Which of these is software?", options: ["A game app", "The monitor", "The mouse", "The CPU"], answer: 0, explain: "A game app is a program, which is software." },
            { q: "What does the CPU do?", options: ["It does the computer's thinking", "It holds the screen", "It plays sound only", "It cleans the case"], answer: 0, explain: "The CPU acts like the brain and does the computer's thinking." },
            { q: "What is the operating system?", options: ["The main software that runs the computer", "A type of mouse", "A power cable", "A printer"], answer: 0, explain: "The operating system is the main software, like Windows or macOS." }
          ] },
        { id: "cs-el-2", title: "Using a Keyboard and Mouse", minutes: 8, objective: "By the end, you can use basic keyboard keys and mouse actions to control a computer.",
          body: `<p>The <b>keyboard</b> and <b>mouse</b> are how you talk to a computer. Learning a few simple moves makes everything easier.</p>
<p>On the keyboard, the long bar at the bottom is the <b>space bar</b>; it makes a space between words. The <b>Enter</b> key starts a new line or says "yes, do it." The <b>Backspace</b> key erases the letter to the left. The <b>Shift</b> key, held down with a letter, makes a CAPITAL letter. The <b>arrow keys</b> move the blinking line, called the <b>cursor</b>.</p>
<p>The mouse has two buttons. A <b>left click</b> selects or opens something. A <b>double click</b> (two fast clicks) opens a file or program. A <b>right click</b> opens a small menu with more choices. The <b>scroll wheel</b> in the middle moves the page up and down. On a laptop, the flat pad below the keys is a <b>trackpad</b>; you slide your finger to move the pointer and tap to click.</p>
<p>The arrow you move on screen is the <b>pointer</b> or <b>cursor</b>. To select a word, you press the left button and drag across it; this is called <b>highlighting</b>. Highlighted text turns a different color so you can copy or delete it.</p>
<p>Good <b>typing</b> takes practice. Rest your fingers gently on the middle row of keys and look at the screen, not your hands. Speed comes slowly, and that is normal. Free websites can help you practice a little each day. The more you use a keyboard and mouse, the more natural they feel.</p>`,
          terms: [
            { term: "Space bar", def: "The long key that adds a space between words." },
            { term: "Enter", def: "The key that starts a new line or confirms an action." },
            { term: "Cursor", def: "The blinking line or pointer that shows where you are." },
            { term: "Double click", def: "Two fast clicks used to open a file or program." },
            { term: "Right click", def: "A click that opens a small menu of extra choices." },
            { term: "Highlighting", def: "Dragging over text to select it for copying or deleting." }
          ],
          quiz: [
            { q: "What does the Backspace key do?", options: ["Erases the letter to the left", "Makes capital letters", "Opens a menu", "Saves a file"], answer: 0, explain: "Backspace erases the character just to the left of the cursor." },
            { q: "How do you open a file with a mouse?", options: ["Double click it", "Scroll past it", "Right click and wait", "Press the space bar"], answer: 0, explain: "A double click opens a file or program." },
            { q: "What makes a capital letter?", options: ["Holding Shift with the letter", "Pressing Enter", "Pressing the space bar", "Right clicking"], answer: 0, explain: "Holding Shift while pressing a letter makes it capital." },
            { q: "What does highlighting text mean?", options: ["Selecting it by dragging over it", "Deleting the whole file", "Turning off the screen", "Printing the page"], answer: 0, explain: "Highlighting means selecting text by dragging the pointer across it." }
          ] }
      ]},
      { title: "Thinking Like a Computer", lessons: [
        { id: "cs-el-3", title: "What Is the Internet?", minutes: 8, objective: "By the end, you can explain in simple words what the internet is and what a website is.",
          body: `<p>The <b>internet</b> is a giant network that connects computers all over the world. A <b>network</b> is just a group of computers joined together so they can share information. The internet links millions of networks into one huge web.</p>
<p>When you want to see something online, your computer sends a request through wires, phone lines, and wireless signals. Somewhere far away, a powerful computer called a <b>server</b> stores the information and sends it back to you. This happens in seconds, even across oceans.</p>
<p>A <b>website</b> is a place on the internet made of pages you can read, like a digital book or store. Each website has an <b>address</b> (a web address, such as usa.gov). You type the address into a <b>browser</b> like Chrome, Safari, or Edge. The browser is the software that finds the website and shows it to you.</p>
<p>To search for something, you can use a <b>search engine</b> like Google. You type a few words, and it gives you a list of websites that might help. You then click the one you want.</p>
<p>Many homes connect to the internet using <b>Wi-Fi</b>, a wireless signal sent from a small box. Phones also use a cell signal. Either way, your device joins the network and can reach the whole world of information.</p>
<p>The internet is powerful, but remember: not everything online is true, and not every page is safe. Later lessons will teach you how to stay safe and check facts.</p>`,
          terms: [
            { term: "Internet", def: "A worldwide network connecting millions of computers." },
            { term: "Network", def: "A group of computers joined together to share information." },
            { term: "Server", def: "A powerful computer that stores and sends out information." },
            { term: "Website", def: "A place on the internet made of pages you can read." },
            { term: "Browser", def: "Software like Chrome or Safari used to view websites." },
            { term: "Wi-Fi", def: "A wireless signal that connects a device to the internet." }
          ],
          quiz: [
            { q: "What is the internet?", options: ["A worldwide network of connected computers", "A single computer in one office", "A type of keyboard", "A printer cable"], answer: 0, explain: "The internet connects millions of computers worldwide into one network." },
            { q: "What does a browser do?", options: ["Finds and shows websites", "Stores all the world's data", "Prints documents", "Charges the battery"], answer: 0, explain: "A browser is software that finds websites and displays them." },
            { q: "What is a server?", options: ["A computer that stores and sends information", "A wireless box at home", "A web address", "A mouse button"], answer: 0, explain: "A server is a powerful computer that stores data and sends it to you." },
            { q: "How do you find websites about a topic?", options: ["Use a search engine", "Unplug the computer", "Press Backspace", "Turn off Wi-Fi"], answer: 0, explain: "A search engine like Google lists websites that match your words." }
          ] },
        { id: "cs-el-4", title: "Algorithms and Sequences", minutes: 8, objective: "By the end, you can write a clear step-by-step algorithm and explain why order matters.",
          body: `<p>An <b>algorithm</b> is a set of step-by-step instructions to do a job. You use algorithms every day without knowing it. A recipe is an algorithm. Brushing your teeth is an algorithm. Computers follow algorithms to do their work.</p>
<p>The order of the steps is called a <b>sequence</b>. Order matters a lot. Imagine making a sandwich: if you put the bread on last instead of first, it does not work. Computers are very picky. They do exactly what you say, in the exact order you say it, even if it is wrong.</p>
<p>Let us write an algorithm for making toast:</p>
<p>1. Take a slice of bread.<br>2. Put it in the toaster.<br>3. Push the lever down.<br>4. Wait until it pops up.<br>5. Take the toast out.</p>
<p>Each step is clear and in the right sequence. If we skipped step 2, the bread would never toast. This is called <b>step-by-step thinking</b>, and it is the heart of computer science.</p>
<p>When instructions are not clear, a computer makes a <b>bug</b>, which is a mistake. Finding and fixing a bug is called <b>debugging</b>. Good programmers test their steps, find the bug, and fix the order.</p>
<p>You can practice this skill anywhere. Try writing the steps to wash your hands or tie your shoes. Make each step small and clear. Then ask a friend to follow only your steps exactly. If they get stuck, you found a bug to fix.</p>`,
          terms: [
            { term: "Algorithm", def: "A set of step-by-step instructions to do a job." },
            { term: "Sequence", def: "The order in which steps are done." },
            { term: "Step-by-step thinking", def: "Breaking a task into small, clear steps." },
            { term: "Bug", def: "A mistake in the instructions." },
            { term: "Debugging", def: "Finding and fixing a mistake in instructions." }
          ],
          quiz: [
            { q: "What is an algorithm?", options: ["Step-by-step instructions to do a job", "A type of computer screen", "A wireless signal", "A search engine"], answer: 0, explain: "An algorithm is a set of clear step-by-step instructions." },
            { q: "Why does sequence matter?", options: ["Steps must be in the right order to work", "It does not matter at all", "Computers ignore order", "Order only matters for humans"], answer: 0, explain: "Computers follow steps in exact order, so order is very important." },
            { q: "What is a bug?", options: ["A mistake in the instructions", "A fast computer", "A web address", "A keyboard key"], answer: 0, explain: "A bug is a mistake in a program or set of steps." },
            { q: "What is debugging?", options: ["Finding and fixing a mistake", "Buying a new computer", "Turning off Wi-Fi", "Writing in capital letters"], answer: 0, explain: "Debugging means finding and fixing mistakes in instructions." }
          ] },
        { id: "cs-el-5", title: "Block Coding with Scratch", minutes: 9, objective: "By the end, you can describe how block coding works and how to make a character move with blocks.",
          body: `<p><b>Block coding</b> is a friendly way to start programming. Instead of typing words, you drag colorful blocks and snap them together like puzzle pieces. Each block is one instruction. <b>Scratch</b> and <b>Code.org</b> are free websites that use block coding, and millions of children and adults learn with them.</p>
<p>In Scratch, you control a character called a <b>sprite</b>. The most famous sprite is an orange cat. You give the sprite instructions by stacking blocks. For example, a block might say "move 10 steps" or "turn 15 degrees." When you click the green flag, the sprite runs your blocks from top to bottom, in sequence.</p>
<p>Blocks come in groups by color. Blue blocks usually handle <b>motion</b> (moving and turning). Purple blocks handle <b>looks</b> (changing how the sprite appears). Yellow blocks are <b>events</b>, like "when green flag clicked," which start your program.</p>
<p>To make a cat walk across the screen, you could stack: "when green flag clicked," then "move 10 steps," then "move 10 steps" again. Click the flag, and the cat slides forward. If you want it to repeat, you can wrap the steps in a <b>loop</b> block that runs them many times.</p>
<p>The best part of block coding is that you cannot make spelling mistakes, because there is no typing of code. This lets you focus on the <b>logic</b>, which is the thinking behind the steps. If something looks wrong, you simply drag the blocks around until it works. That is debugging in action, and it makes learning fun.</p>`,
          terms: [
            { term: "Block coding", def: "Programming by dragging and snapping blocks together." },
            { term: "Scratch", def: "A free website that teaches coding with blocks." },
            { term: "Sprite", def: "A character you control in Scratch, like the cat." },
            { term: "Loop", def: "A block that repeats steps many times." },
            { term: "Event", def: "A block that starts a program, like 'when flag clicked.'" },
            { term: "Logic", def: "The thinking and reasoning behind the steps of a program." }
          ],
          quiz: [
            { q: "How does block coding work?", options: ["You drag and snap blocks together", "You type long words of code", "You use only the mouse wheel", "You speak to the computer"], answer: 0, explain: "Block coding lets you drag blocks and snap them like puzzle pieces." },
            { q: "What is a sprite in Scratch?", options: ["A character you control", "A type of mouse", "A web address", "A power button"], answer: 0, explain: "A sprite is a character, like the cat, that you control in Scratch." },
            { q: "What does a loop block do?", options: ["Repeats steps many times", "Deletes the program", "Turns off the computer", "Prints a page"], answer: 0, explain: "A loop repeats a set of steps without writing them over and over." },
            { q: "Why is block coding good for beginners?", options: ["You cannot make spelling mistakes", "It needs no thinking", "It only works offline", "It has no rules"], answer: 0, explain: "Because there is no typing of code, you focus on logic, not spelling." }
          ] }
      ]}
    ]},
    { stage: "middle", grades: "6–8", units: [
      { title: "Staying Safe Online", lessons: [
        { id: "cs-ms-1", title: "Passwords and Account Safety", minutes: 9, objective: "By the end, you can create a strong password and protect your accounts with safe habits.",
          body: `<p>A <b>password</b> is a secret word or phrase that proves an account belongs to you. A weak password is easy to guess and puts your money, email, and identity at risk. A strong password keeps strangers out.</p>
<p>What makes a password strong? It is <b>long</b> (at least 12 characters), and it mixes upper-case letters, lower-case letters, numbers, and symbols. Avoid common choices like "password," "123456," or your name and birthday. A good trick is a <b>passphrase</b>: string together a few random words you can remember, such as "BlueTiger7Rain!"</p>
<p>Never use the same password for everything. If one website is hacked, criminals try that password everywhere else. A <b>password manager</b> is an app that creates and stores strong, different passwords for each account, so you only remember one master password.</p>
<p>Turn on <b>two-factor authentication</b> (2FA) when you can. With 2FA, after you type your password, the site also sends a code to your phone. Even if someone steals your password, they cannot get in without your phone. This is one of the strongest protections you have.</p>
<p>Be careful with <b>phishing</b>, which is a fake message that tricks you into giving your password. A real bank will never email you asking for your password. If a message feels urgent or scary and asks you to "log in now," stop and check the real website yourself. Protecting your accounts protects your whole digital life.</p>`,
          terms: [
            { term: "Password", def: "A secret word or phrase that proves an account is yours." },
            { term: "Passphrase", def: "Several random words joined to make a strong password." },
            { term: "Password manager", def: "An app that creates and stores strong passwords for you." },
            { term: "Two-factor authentication", def: "A second step, like a phone code, added to your password." },
            { term: "Phishing", def: "A fake message that tries to steal your password or money." }
          ],
          quiz: [
            { q: "What makes a password strong?", options: ["It is long and mixes letters, numbers, and symbols", "It is your birthday", "It is the word 'password'", "It is short and simple"], answer: 0, explain: "Strong passwords are long and mix different kinds of characters." },
            { q: "Why use a different password for each site?", options: ["So one hack does not unlock everything", "To make logging in slower", "Because sites require it by law", "So you can forget them"], answer: 0, explain: "If you reuse passwords, one hacked site puts all your accounts at risk." },
            { q: "What does two-factor authentication add?", options: ["A second step like a phone code", "A faster internet speed", "A new keyboard", "A free email account"], answer: 0, explain: "2FA adds a second step, so a stolen password alone is not enough." },
            { q: "What is phishing?", options: ["A fake message that tries to steal your info", "A way to type faster", "A kind of password manager", "A safe bank website"], answer: 0, explain: "Phishing uses fake messages to trick you into giving up information." }
          ] },
        { id: "cs-ms-2", title: "Digital Citizenship", minutes: 9, objective: "By the end, you can describe responsible and respectful behavior online and protect your privacy.",
          body: `<p>A <b>digital citizen</b> is a person who uses technology in a safe, kind, and responsible way. Just as we follow rules in a neighborhood, we follow good habits online so that the internet is better for everyone.</p>
<p>One key idea is your <b>digital footprint</b>. Everything you post, like, or share leaves a trail that can last for years. Photos and comments can be copied and seen by teachers, employers, and family. Before you post, ask yourself: would I be okay if anyone saw this in five years? If not, do not post it.</p>
<p>Be careful with <b>personal information</b>. Do not share your home address, phone number, school name, or daily schedule with strangers online. Use <b>privacy settings</b> to control who can see your posts. Adjust them so only people you trust can view your profile.</p>
<p><b>Cyberbullying</b> is using technology to hurt, scare, or shame someone. It is never okay. If you see it, do not join in. Save the evidence with a screenshot, then block the person and tell a trusted adult. Kindness online matters as much as kindness in person.</p>
<p>Respect other people's work, too. Copying someone's words or images and calling them your own is <b>plagiarism</b>. Give credit to the creator instead. A good digital citizen thinks before posting, protects privacy, treats others with respect, and stands up against harm. These habits build trust and keep you and others safe.</p>`,
          terms: [
            { term: "Digital citizen", def: "A person who uses technology safely and responsibly." },
            { term: "Digital footprint", def: "The trail of everything you do and post online." },
            { term: "Privacy settings", def: "Controls that decide who can see your posts and profile." },
            { term: "Cyberbullying", def: "Using technology to hurt, scare, or shame someone." },
            { term: "Plagiarism", def: "Copying someone's work and calling it your own." }
          ],
          quiz: [
            { q: "What is a digital footprint?", options: ["The lasting trail of what you do online", "A shoe icon on the screen", "A type of password", "A search engine"], answer: 0, explain: "Your digital footprint is the trail your online activity leaves behind." },
            { q: "What should you do before posting something?", options: ["Ask if you would be okay with anyone seeing it later", "Post it as fast as possible", "Share your home address", "Turn off privacy settings"], answer: 0, explain: "Thinking before posting protects your future reputation." },
            { q: "What is a good response to cyberbullying?", options: ["Save evidence, block, and tell a trusted adult", "Join in to fit in", "Ignore it forever and share it", "Send your password"], answer: 0, explain: "Saving evidence, blocking, and telling an adult are the safe steps." },
            { q: "What is plagiarism?", options: ["Copying others' work and calling it yours", "Giving credit to a creator", "Using a strong password", "Reading the news online"], answer: 0, explain: "Plagiarism is taking someone's work and claiming it as your own." }
          ] },
        { id: "cs-ms-3", title: "How Websites Work", minutes: 9, objective: "By the end, you can explain how a browser loads a website using addresses, servers, and HTML.",
          body: `<p>When you type a web address and press Enter, a lot happens in under a second. Understanding it helps you use the internet wisely.</p>
<p>Every website has a <b>URL</b>, which is its full web address, like https://www.usa.gov. The first part, the <b>domain name</b>, is the human-friendly name. But computers find each other using numbers called <b>IP addresses</b>. A system called <b>DNS</b> (the Domain Name System) works like a phone book: it looks up the domain name and finds the matching IP address.</p>
<p>Once your browser knows the address, it sends a request to a <b>server</b>, the computer that stores the website. The server sends back the page files. The browser then reads those files and builds the page you see.</p>
<p>Web pages are written in <b>HTML</b> (HyperText Markup Language). HTML uses <b>tags</b> to label parts of a page, such as headings, paragraphs, and links. Another language, <b>CSS</b>, controls colors, fonts, and layout, making the page look nice. A third language, JavaScript, can make pages interactive.</p>
<p>Notice the "https" at the start of safe addresses. The "s" means <b>secure</b>: the connection is encrypted, so information you send (like a password) is scrambled and protected. A small lock icon often appears too. Before entering private details, always check for https and the lock. Knowing how websites work makes you a smarter, safer user of the web.</p>`,
          terms: [
            { term: "URL", def: "The full web address of a page, like https://usa.gov." },
            { term: "Domain name", def: "The human-friendly name of a website, like usa.gov." },
            { term: "IP address", def: "A number that identifies a computer on the internet." },
            { term: "DNS", def: "The system that turns domain names into IP addresses." },
            { term: "HTML", def: "The language used to build the structure of web pages." },
            { term: "HTTPS", def: "A secure, encrypted way to connect to a website." }
          ],
          quiz: [
            { q: "What does DNS do?", options: ["Turns domain names into IP addresses", "Charges the battery", "Writes HTML for you", "Blocks all websites"], answer: 0, explain: "DNS works like a phone book, matching names to IP addresses." },
            { q: "What is HTML used for?", options: ["Building the structure of web pages", "Storing passwords", "Sending text messages", "Cooling the computer"], answer: 0, explain: "HTML uses tags to build the structure of a web page." },
            { q: "What does the 's' in https mean?", options: ["The connection is secure and encrypted", "The site is slow", "The page is small", "The server is sleeping"], answer: 0, explain: "HTTPS means the connection is secure and information is encrypted." },
            { q: "What sends the web page back to your browser?", options: ["A server", "A mouse", "The keyboard", "A password"], answer: 0, explain: "The server stores the website and sends its files to your browser." }
          ] }
      ]},
      { title: "Programming and Tools", lessons: [
        { id: "cs-ms-4", title: "Variables, Loops, and Conditionals", minutes: 10, objective: "By the end, you can explain variables, loops, and conditionals and how they control a program.",
          body: `<p>Real programs do more than run steps in order. Three big ideas give programs power: variables, loops, and conditionals. They appear in Scratch, Python, and every other language.</p>
<p>A <b>variable</b> is a named box that holds a value the program can use and change. Imagine a box labeled "score." At the start, score holds 0. When a player wins a point, the program changes score to 1, then 2, and so on. Variables let a program remember things.</p>
<p>A <b>loop</b> repeats steps so you do not have to write them over and over. Suppose you want to print "Hello" five times. Instead of writing it five times, a loop says, "repeat this 5 times." Loops save effort and make programs shorter. A loop that runs while a condition is true is very common.</p>
<p>A <b>conditional</b> lets a program make a decision. It uses "if" and "else." For example: "if the score is over 10, show 'You win!', else show 'Keep trying.'" The program checks the condition and chooses a path. This is called <b>branching</b>, because the program can go different ways.</p>
<p>Together these tools handle almost any task. A simple guessing game might use a variable to store the secret number, a loop to keep asking, and a conditional to check if the guess is right. As you learn to combine variables, loops, and conditionals, you can build games, calculators, and useful tools of your own.</p>`,
          terms: [
            { term: "Variable", def: "A named box that holds a value a program can change." },
            { term: "Loop", def: "A way to repeat steps without rewriting them." },
            { term: "Conditional", def: "An 'if/else' choice that lets a program decide." },
            { term: "Branching", def: "When a program takes different paths based on a condition." },
            { term: "Value", def: "The piece of data stored inside a variable." }
          ],
          quiz: [
            { q: "What is a variable?", options: ["A named box that holds a value", "A type of screen", "A web address", "A password manager"], answer: 0, explain: "A variable is a named box that stores a value the program can change." },
            { q: "Why use a loop?", options: ["To repeat steps without rewriting them", "To delete the program", "To slow the computer", "To turn off Wi-Fi"], answer: 0, explain: "Loops repeat steps, saving you from writing them many times." },
            { q: "What does a conditional do?", options: ["Lets the program make a decision", "Stores a password", "Cools the CPU", "Prints the screen"], answer: 0, explain: "A conditional uses if/else so the program can choose a path." },
            { q: "What is branching?", options: ["Taking different paths based on a condition", "Adding more memory", "Typing in capital letters", "Charging the battery"], answer: 0, explain: "Branching is when a program goes different ways depending on a condition." }
          ] },
        { id: "cs-ms-5", title: "Spreadsheets and Productivity Tools", minutes: 9, objective: "By the end, you can explain how spreadsheets and office tools help organize work and do calculations.",
          body: `<p><b>Productivity tools</b> are everyday programs that help you do work: writing, organizing numbers, and giving presentations. The most common are word processors, spreadsheets, and slideshow apps. Free versions include Google Docs, Sheets, and Slides.</p>
<p>A <b>spreadsheet</b> is a grid of <b>cells</b> arranged in <b>rows</b> (across) and <b>columns</b> (up and down). Each cell holds a number, word, or formula. Spreadsheets are great for budgets, schedules, and lists. Popular ones are Microsoft Excel and Google Sheets.</p>
<p>The real power of a spreadsheet is the <b>formula</b>. A formula starts with an equals sign and does math for you. For example, typing =A1+A2 adds the numbers in those two cells. A <b>function</b> is a ready-made formula. =SUM(B1:B10) adds up ten cells at once, and =AVERAGE finds the average. If you change a number, the answer updates automatically. No calculator needed.</p>
<p>You can also <b>sort</b> data (put it in order) and make a <b>chart</b> (a picture of the numbers, like a bar graph) to see patterns quickly.</p>
<p>A <b>word processor</b> like Microsoft Word lets you write letters and forms, fix spelling, and format text. A slideshow app helps you present ideas with images and bullet points. These tools are used in nearly every American job and school. Learning the basics, even just making a simple budget in a spreadsheet, is a valuable, practical skill.</p>`,
          terms: [
            { term: "Spreadsheet", def: "A grid program for organizing numbers and doing math." },
            { term: "Cell", def: "A single box in a spreadsheet that holds data." },
            { term: "Formula", def: "An equation in a cell that calculates a result." },
            { term: "Function", def: "A ready-made formula like SUM or AVERAGE." },
            { term: "Chart", def: "A picture of data, such as a bar graph." },
            { term: "Word processor", def: "A program for writing and formatting text, like Word." }
          ],
          quiz: [
            { q: "What is a spreadsheet best for?", options: ["Organizing numbers and doing math", "Charging a phone", "Sending Wi-Fi signals", "Painting pictures only"], answer: 0, explain: "Spreadsheets organize data in cells and can do calculations." },
            { q: "What does =SUM(B1:B10) do?", options: ["Adds the numbers in those cells", "Deletes the cells", "Prints the page", "Changes the font"], answer: 0, explain: "SUM is a function that adds up a range of cells." },
            { q: "What happens when you change a number used in a formula?", options: ["The result updates automatically", "Nothing changes", "The file is deleted", "The computer shuts off"], answer: 0, explain: "Spreadsheets recalculate formulas automatically when data changes." },
            { q: "What is a chart?", options: ["A picture of data, like a bar graph", "A type of password", "A web browser", "A keyboard key"], answer: 0, explain: "A chart shows data as a picture so patterns are easy to see." }
          ] }
      ]}
    ]},
    { stage: "high", grades: "9–12", units: [
      { title: "Programming with Python", lessons: [
        { id: "cs-hs-1", title: "Python Data Types and Variables", minutes: 11, objective: "By the end, you can name common Python data types and use variables to store data.",
          body: `<p><b>Python</b> is a popular programming language used in schools, science, and major companies. It is loved by beginners because its code reads almost like English. In Python, you store information in <b>variables</b> using an equals sign, like age = 30.</p>
<p>Every value has a <b>data type</b>, which tells the computer what kind of information it is. The main types are:</p>
<p><b>Integer</b> (int): a whole number, such as 5 or -12.<br><b>Float</b>: a number with a decimal, such as 3.14 or 0.5.<br><b>String</b> (str): text inside quotes, such as "Hello" or "Maria".<br><b>Boolean</b> (bool): only True or False, used for yes/no logic.</p>
<p>Using the right type matters. You can do math with integers and floats, like total = price + tax. With strings, the plus sign joins text together; "Good" + "bye" becomes "Goodbye". This joining is called <b>concatenation</b>.</p>
<p>You can show a value on screen with the <b>print</b> command: print("Hello, world") displays that text. To get input from a user, Python uses input(), which always returns a string. If you need a number from input, you convert it, for example age = int(input("Your age: ")).</p>
<p>Choosing clear variable names, like first_name instead of x, makes code easier to read and fix. Mixing the wrong types causes errors, for example trying to add a number and a word directly. Understanding data types is the foundation for everything else you will build in Python.</p>`,
          terms: [
            { term: "Python", def: "A beginner-friendly programming language that reads like English." },
            { term: "Data type", def: "The kind of value, such as number, text, or true/false." },
            { term: "Integer", def: "A whole number with no decimal point." },
            { term: "String", def: "Text stored inside quotation marks." },
            { term: "Boolean", def: "A value that is only True or False." },
            { term: "Concatenation", def: "Joining strings of text together with a plus sign." }
          ],
          quiz: [
            { q: "Which is a string in Python?", options: ["\"Maria\"", "42", "3.14", "True"], answer: 0, explain: "A string is text inside quotation marks, like \"Maria\"." },
            { q: "What is a Boolean value?", options: ["True or False", "Any whole number", "A line of text", "A decimal number"], answer: 0, explain: "A Boolean can only be True or False." },
            { q: "What does print() do?", options: ["Shows a value on the screen", "Saves a file", "Deletes a variable", "Connects to Wi-Fi"], answer: 0, explain: "The print command displays a value on the screen." },
            { q: "What is concatenation?", options: ["Joining strings of text together", "Adding two decimals", "Deleting a variable", "Sorting a list"], answer: 0, explain: "Concatenation joins text strings together, like \"Good\" + \"bye\"." }
          ] },
        { id: "cs-hs-2", title: "Functions and Problem Solving", minutes: 11, objective: "By the end, you can explain what a function is and how breaking a problem into steps helps you code.",
          body: `<p>As programs grow, you need a way to organize code. A <b>function</b> is a named block of code that does one job. You write it once, then <b>call</b> it (use it) as many times as you like. This saves work and keeps code tidy.</p>
<p>In Python, you create a function with the word def. For example:</p>
<p>def greet(name):<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Hello, " + name)</p>
<p>The word in parentheses, name, is a <b>parameter</b>: an input the function needs. When you call greet("Sam"), the value "Sam" is the <b>argument</b> that fills the parameter. Some functions also <b>return</b> a value, sending an answer back so other code can use it.</p>
<p>Functions are powerful because of <b>abstraction</b>: once a function works, you can use it without thinking about the details inside. You trust that greet just works, the way you drive a car without knowing every engine part.</p>
<p>Good programmers solve big problems by <b>decomposition</b>, breaking a large task into smaller pieces. To build a quiz program, you might write one function to ask a question, another to check the answer, and another to keep score. Each small function is easy to test and fix on its own.</p>
<p>This is real problem solving: understand the goal, break it into steps, write a function for each step, test as you go, and fix bugs early. These habits work in any language and in life, not just in Python.</p>`,
          terms: [
            { term: "Function", def: "A named block of code that does one job." },
            { term: "Parameter", def: "An input a function needs, named in its definition." },
            { term: "Argument", def: "The actual value you give a function when you call it." },
            { term: "Return", def: "Sending a result back from a function to be used." },
            { term: "Abstraction", def: "Using something without worrying about its inner details." },
            { term: "Decomposition", def: "Breaking a big problem into smaller, easier parts." }
          ],
          quiz: [
            { q: "What is a function?", options: ["A named block of code that does one job", "A type of computer screen", "A password", "A web address"], answer: 0, explain: "A function is reusable code that performs a single task." },
            { q: "What is a parameter?", options: ["An input named in the function's definition", "The computer's brain", "A wireless signal", "A chart"], answer: 0, explain: "A parameter is the named input a function expects." },
            { q: "What is decomposition?", options: ["Breaking a big problem into smaller parts", "Deleting code", "Charging the battery", "Sorting numbers"], answer: 0, explain: "Decomposition means splitting a large task into smaller pieces." },
            { q: "Why are functions useful?", options: ["You write code once and reuse it", "They slow the program", "They use more typing", "They erase variables"], answer: 0, explain: "Functions let you write code once and call it many times." }
          ] }
      ]},
      { title: "How Computing Works and Its Impact", lessons: [
        { id: "cs-hs-3", title: "Binary, Bits, and Bytes", minutes: 11, objective: "By the end, you can explain how computers use binary to represent all data.",
          body: `<p>Computers seem to handle words, pictures, and music, but underneath they only understand one thing: numbers made of 0s and 1s. This is called <b>binary</b>.</p>
<p>A single 0 or 1 is called a <b>bit</b>, short for "binary digit." A bit is like a light switch: off (0) or on (1). One bit alone cannot say much, but bits combine to make any value. Eight bits together make a <b>byte</b>. One byte can store 256 different combinations, enough to represent a single letter or a small number.</p>
<p>In the everyday <b>decimal</b> system we use ten digits (0 to 9) because we have ten fingers. Binary uses only two digits because electronic parts have two states: current flowing or not. Each binary place is worth double the one before it: 1, 2, 4, 8, 16, and so on. So 1011 in binary equals 8 + 0 + 2 + 1 = 11 in decimal.</p>
<p>How does a computer store the letter A? A code called <b>ASCII</b> (and the larger Unicode) gives each character a number. The letter A is 65, which in binary is 01000001. Pictures work the same way: each tiny dot, or pixel, is stored as numbers for its color.</p>
<p>Bigger files need more bytes. About 1,000 bytes make a <b>kilobyte</b>, a million make a <b>megabyte</b>, and a billion make a <b>gigabyte</b>. When you see a 5 GB video, that is about five billion bytes of 0s and 1s. Everything digital, in the end, is just binary.</p>`,
          terms: [
            { term: "Binary", def: "A number system using only 0s and 1s." },
            { term: "Bit", def: "A single 0 or 1, the smallest piece of data." },
            { term: "Byte", def: "A group of eight bits, enough for one letter." },
            { term: "Decimal", def: "The everyday number system using digits 0 to 9." },
            { term: "ASCII", def: "A code that gives each character a number." },
            { term: "Gigabyte", def: "About a billion bytes, used to measure file size." }
          ],
          quiz: [
            { q: "What is binary?", options: ["A number system of only 0s and 1s", "A type of browser", "A wireless signal", "A spreadsheet"], answer: 0, explain: "Binary uses only two digits, 0 and 1, which computers understand." },
            { q: "How many bits are in a byte?", options: ["Eight", "Two", "Ten", "One hundred"], answer: 0, explain: "A byte is made of eight bits." },
            { q: "Why do computers use binary?", options: ["Electronic parts have two states: on or off", "It is prettier than decimal", "Humans have two fingers", "It uses less electricity than nothing"], answer: 0, explain: "Binary matches the two states of electronic parts: on (1) or off (0)." },
            { q: "How is the letter A stored?", options: ["As a number using a code like ASCII", "As a tiny picture only", "As pure sound", "It cannot be stored"], answer: 0, explain: "ASCII gives each character a number; A is 65 in binary." }
          ] },
        { id: "cs-hs-4", title: "Cybersecurity and the Internet", minutes: 11, objective: "By the end, you can explain how the internet sends data and how to protect it from threats.",
          body: `<p>The internet moves information using a clever idea: data is broken into small pieces called <b>packets</b>. Each packet travels separately across many paths and is reassembled at the other end. A set of rules called <b>protocols</b> (such as TCP/IP) makes sure every packet arrives and is put back in order. This design is why the internet keeps working even if one path fails.</p>
<p>Because data travels through many machines, <b>cybersecurity</b>, the practice of protecting systems and information, is essential. Threats are everywhere. <b>Malware</b> is harmful software, including viruses that spread and <b>ransomware</b> that locks your files until you pay. <b>Phishing</b> tricks people into revealing passwords. A <b>data breach</b> is when criminals steal large amounts of private information from a company.</p>
<p>A main defense is <b>encryption</b>: scrambling data with a secret key so only the right person can read it. When you see https and a lock icon, your connection is encrypted. Even if a criminal grabs the packets, they see only scrambled nonsense.</p>
<p>Other protections include a <b>firewall</b>, which blocks unwanted traffic, plus keeping software updated, using strong unique passwords, and turning on two-factor authentication. Many attacks succeed not through clever code but through <b>social engineering</b>, fooling a person into making a mistake. So the human is often the weakest link.</p>
<p>Good security is a habit, not a single tool. By understanding how data moves and how attackers think, you can protect yourself, your family, and your workplace in a connected world.</p>`,
          terms: [
            { term: "Packet", def: "A small piece of data sent across the internet." },
            { term: "Protocol", def: "A set of rules computers follow to communicate, like TCP/IP." },
            { term: "Cybersecurity", def: "The practice of protecting systems and information." },
            { term: "Malware", def: "Harmful software like viruses and ransomware." },
            { term: "Encryption", def: "Scrambling data so only the right person can read it." },
            { term: "Firewall", def: "A barrier that blocks unwanted network traffic." }
          ],
          quiz: [
            { q: "How does data travel across the internet?", options: ["In small pieces called packets", "All in one big block", "Only by Wi-Fi", "Through the keyboard"], answer: 0, explain: "Data is split into packets that travel separately and are reassembled." },
            { q: "What does encryption do?", options: ["Scrambles data so only the right person can read it", "Speeds up the computer", "Deletes packets", "Charges the battery"], answer: 0, explain: "Encryption scrambles data with a key so others cannot read it." },
            { q: "What is ransomware?", options: ["Malware that locks files until you pay", "A safe website", "A strong password", "A search engine"], answer: 0, explain: "Ransomware locks your files and demands payment to unlock them." },
            { q: "What is social engineering?", options: ["Fooling a person into a security mistake", "Building network cables", "Writing Python code", "A type of firewall"], answer: 0, explain: "Social engineering tricks people rather than breaking code directly." }
          ] },
        { id: "cs-hs-5", title: "Artificial Intelligence and Society", minutes: 11, objective: "By the end, you can explain what AI is, how it learns, and how it affects society.",
          body: `<p><b>Artificial intelligence</b> (AI) is software that can do tasks that usually need human thinking, such as recognizing speech, translating languages, or recommending videos. You already use AI in maps, voice assistants, and spam filters.</p>
<p>Most modern AI uses <b>machine learning</b>: instead of being given exact rules, the program learns patterns from huge amounts of <b>data</b>. For example, to recognize cats, you show it millions of cat photos until it learns the patterns. The more good data it sees, the better it gets. A newer kind, <b>generative AI</b>, can create new text, images, or code based on what it learned. Chatbots are a common example.</p>
<p>AI brings real benefits: faster medical diagnoses, helpful translation, and tools that save time at work. But it also raises serious concerns. AI can show <b>bias</b>: if the training data was unfair, the AI repeats that unfairness, for example treating some groups worse in hiring. AI can also produce confident answers that are wrong, so you must check important facts yourself.</p>
<p>There are bigger questions for society too: jobs may change as machines do more tasks, <b>privacy</b> is at risk when companies collect huge amounts of personal data, and AI can be misused to create fake images or videos called deepfakes. Wise use means asking who made a tool, what data it used, and who benefits. As an informed citizen, you can enjoy AI's help while staying alert to its limits and its impact on fairness, work, and truth.</p>`,
          terms: [
            { term: "Artificial intelligence", def: "Software that does tasks usually needing human thinking." },
            { term: "Machine learning", def: "AI that learns patterns from data instead of fixed rules." },
            { term: "Data", def: "The information an AI learns from." },
            { term: "Generative AI", def: "AI that creates new text, images, or code." },
            { term: "Bias", def: "Unfairness in AI caused by unfair training data." },
            { term: "Deepfake", def: "A fake image or video made by AI to look real." }
          ],
          quiz: [
            { q: "What is artificial intelligence?", options: ["Software that does tasks needing human thinking", "A type of keyboard", "A web cable", "A spreadsheet formula"], answer: 0, explain: "AI does tasks that usually require human thinking, like recognizing speech." },
            { q: "How does machine learning work?", options: ["It learns patterns from data", "It follows only fixed rules", "It needs no information", "It guesses randomly forever"], answer: 0, explain: "Machine learning finds patterns in large amounts of data." },
            { q: "What causes bias in AI?", options: ["Unfair training data", "Too much electricity", "A slow internet", "A strong password"], answer: 0, explain: "If training data is unfair, the AI repeats that unfairness." },
            { q: "What is a deepfake?", options: ["A fake image or video made by AI", "A secure website", "A spreadsheet chart", "A real news report"], answer: 0, explain: "A deepfake is a realistic but fake image or video created by AI." }
          ] }
      ]}
    ]}
  ]
});
