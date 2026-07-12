window.HR_DATA = window.HR_DATA || { subjects: [] };
window.HR_DATA.subjects.push({
  key: "lifeskills",
  name: "Life Skills & Civic Readiness",
  icon: "🧭",
  color: "#0d9488",
  blurb: "Money, taxes, US systems, and the unwritten rules of daily American life.",
  why: "This is the practical know-how schools assume Americans absorbed — the fastest path to functioning confidently in the US.",
  stages: [
    { stage: "elementary", grades: "K–5", units: [
      { title: "US Money: Coins, Bills, and Change", lessons: [
        { id: "lifeskills-el-1", title: "Coins and Their Values", minutes: 8, objective: "By the end, you can name US coins and add up their values to a dollar.",
          body: `<p>US money uses dollars and cents. There are 100 cents in 1 dollar, written as $1.00. Cents are written with a cent sign, like 25&cent;, or as part of a dollar amount like $0.25.</p>
<p>There are four common coins you will use every day:</p>
<ul>
<li>The <strong>penny</strong> is worth 1 cent. It is small and copper-colored, with Abraham Lincoln on the front.</li>
<li>The <strong>nickel</strong> is worth 5 cents. It is thick and silver-colored, with Thomas Jefferson on it.</li>
<li>The <strong>dime</strong> is worth 10 cents. It is the smallest coin, even though it is worth more than a penny or nickel. This surprises many newcomers.</li>
<li>The <strong>quarter</strong> is worth 25 cents. Four quarters make one dollar. Quarters are very useful for parking meters, laundry machines, and vending machines.</li>
</ul>
<p>You can combine coins to make any amount. For example, two quarters equal 50 cents (25 + 25 = 50). A quarter, two dimes, and a nickel also equal 50 cents (25 + 10 + 10 + 5 = 50). There are many ways to make the same amount.</p>
<p>Less common coins include the half-dollar (50 cents) and the dollar coin ($1.00), but you will rarely see these in daily life. Most people use bills for amounts of a dollar or more.</p>
<p>A simple tip: the dime is small and thin but worth 10 cents, while the bigger nickel is worth only 5 cents. Learn the coins by sight and value, not by size.</p>`,
          terms: [
            { term: "cent", def: "A small unit of US money; 100 cents make 1 dollar." },
            { term: "penny", def: "A coin worth 1 cent, copper-colored." },
            { term: "nickel", def: "A coin worth 5 cents." },
            { term: "dime", def: "A coin worth 10 cents; the smallest US coin." },
            { term: "quarter", def: "A coin worth 25 cents; four make a dollar." }
          ],
          quiz: [
            { q: "How many cents are in one US dollar?", options: ["100", "50", "10", "25"], answer: 0, explain: "One dollar equals 100 cents." },
            { q: "Which coin is worth 25 cents?", options: ["The quarter", "The dime", "The nickel", "The penny"], answer: 0, explain: "A quarter is worth 25 cents, so four make a dollar." },
            { q: "How much are two dimes and a nickel worth?", options: ["25 cents", "15 cents", "30 cents", "20 cents"], answer: 0, explain: "10 + 10 + 5 = 25 cents." },
            { q: "Which coin is physically the smallest?", options: ["The dime", "The penny", "The quarter", "The nickel"], answer: 0, explain: "The dime is the smallest coin even though it is worth more than the penny or nickel." }
          ] },
        { id: "lifeskills-el-2", title: "Bills and Making Change", minutes: 9, objective: "By the end, you can recognize US bills and figure out the change you should get back.",
          body: `<p>US paper money is called bills or banknotes. All US bills are the same size and the same green color, so you must read the number printed on them. Common bills are $1, $5, $10, $20, $50, and $100. The $20 bill is the most common one you get from ATMs.</p>
<p>Each bill shows a famous American: George Washington on the $1, Abraham Lincoln on the $5, Alexander Hamilton on the $10, Andrew Jackson on the $20, Ulysses S. Grant on the $50, and Benjamin Franklin on the $100. Notice that Franklin and Hamilton are on bills even though they were never presidents.</p>
<p><strong>Making change</strong> means getting money back when you pay more than the price. Suppose a sandwich costs $6.50 and you pay with a $10 bill. Your change is $10.00 minus $6.50, which equals $3.50. The cashier should hand you three dollars and two quarters, or three dollars and a fifty-cent total in coins.</p>
<p>A common way to check change is to "count up" from the price to the amount you paid. Start at $6.50: add two quarters to reach $7.00, then add three one-dollar bills to reach $10.00. That confirms your change is $3.50.</p>
<p>Always count your change before leaving the counter. Mistakes happen, and it is normal and polite to check. Many places now take debit and credit cards or phone payments, but cash is still accepted almost everywhere, and small businesses sometimes prefer it.</p>`,
          terms: [
            { term: "bill", def: "A piece of US paper money, also called a banknote." },
            { term: "change", def: "The money you get back when you pay more than the price." },
            { term: "cashier", def: "The person who takes your payment at a store." },
            { term: "ATM", def: "A machine that dispenses cash from your bank account." },
            { term: "counting up", def: "A method of finding change by adding from the price to the amount paid." }
          ],
          quiz: [
            { q: "If a $6.50 item is paid with a $10 bill, the change is:", options: ["$3.50", "$4.50", "$3.00", "$4.00"], answer: 0, explain: "$10.00 minus $6.50 equals $3.50." },
            { q: "Which person appears on the $20 bill?", options: ["Andrew Jackson", "George Washington", "Benjamin Franklin", "Abraham Lincoln"], answer: 0, explain: "Andrew Jackson is on the $20 bill." },
            { q: "What is unusual about US bills compared to many other countries?", options: ["They are all the same size and color", "Each has a different size", "They are made of plastic", "They have no numbers"], answer: 0, explain: "All US bills are the same size and green, so you must read the printed number." },
            { q: "Why should you count your change at the counter?", options: ["To catch any mistakes before leaving", "Because it is required by law", "To make the cashier nervous", "Because change is always wrong"], answer: 0, explain: "Counting change lets you catch honest mistakes while you are still there." }
          ] }
      ]},
      { title: "Measuring the American Way", lessons: [
        { id: "lifeskills-el-3", title: "Length: Inches, Feet, and Miles", minutes: 9, objective: "By the end, you can use inches, feet, yards, and miles to describe distance.",
          body: `<p>The US uses the US customary system for measuring, not the metric system that most of the world uses. This means distances are measured in inches, feet, yards, and miles instead of centimeters, meters, and kilometers.</p>
<p>Here are the basic units of length from small to large:</p>
<ul>
<li><strong>Inch</strong> (in): about the width of your thumb. A standard sheet of paper is 8.5 inches wide.</li>
<li><strong>Foot</strong> (ft): 12 inches make 1 foot. A foot is about the length of a large shoe.</li>
<li><strong>Yard</strong> (yd): 3 feet make 1 yard, which is about the distance from your nose to your fingertip with your arm out.</li>
<li><strong>Mile</strong> (mi): 5,280 feet make 1 mile. A mile is a long walking distance, roughly 15 to 20 minutes of walking.</li>
</ul>
<p>People describe their height in feet and inches. Someone who is 5 feet 8 inches tall says "five foot eight," often written 5'8". The little mark (') means feet and the double mark (") means inches.</p>
<p>Road distances and speed use miles. Speed limit signs show miles per hour (mph). A typical highway limit is 65 or 70 mph. City streets are often 25 or 30 mph. For comparison, 1 mile is about 1.6 kilometers, so 60 mph is roughly 97 km/h.</p>
<p>When you buy fabric, lumber, or rope, it is sold by the foot or yard. When you read a map or plan a drive, think in miles.</p>`,
          terms: [
            { term: "US customary system", def: "The US system of measurement using inches, feet, miles, pounds, etc." },
            { term: "inch", def: "A small unit of length, about a thumb's width; 12 make a foot." },
            { term: "foot", def: "A unit of length equal to 12 inches." },
            { term: "mile", def: "A unit of distance equal to 5,280 feet, about 1.6 kilometers." },
            { term: "mph", def: "Miles per hour, the US unit for speed." }
          ],
          quiz: [
            { q: "How many inches are in one foot?", options: ["12", "10", "100", "3"], answer: 0, explain: "There are 12 inches in a foot." },
            { q: "What does 5'8\" mean?", options: ["5 feet 8 inches", "5 miles 8 feet", "5 yards 8 inches", "58 inches"], answer: 0, explain: "The (') means feet and the (\") means inches, so it is 5 feet 8 inches." },
            { q: "Speed limits in the US are measured in:", options: ["Miles per hour", "Kilometers per hour", "Feet per minute", "Meters per second"], answer: 0, explain: "US speed is measured in miles per hour (mph)." },
            { q: "About how many kilometers is one mile?", options: ["1.6", "1.0", "5.0", "0.5"], answer: 0, explain: "One mile is approximately 1.6 kilometers." }
          ] },
        { id: "lifeskills-el-4", title: "Weight, Volume, and Temperature", minutes: 9, objective: "By the end, you can read pounds, ounces, gallons, and Fahrenheit temperatures.",
          body: `<p>Besides length, you will need US units for weight, liquid volume, and temperature.</p>
<p><strong>Weight</strong> uses ounces and pounds. There are 16 ounces (oz) in 1 pound (lb). A pound is a little less than half a kilogram (about 0.45 kg). People weigh themselves in pounds, and food packages list weight in pounds and ounces. A newborn baby might weigh 7 or 8 pounds. A bag of apples might be 3 pounds.</p>
<p><strong>Liquid volume</strong> uses fluid ounces, cups, pints, quarts, and gallons. The key amounts to know: 8 fluid ounces make a cup, 2 cups make a pint, 2 pints make a quart, and 4 quarts make a gallon. Milk is usually sold by the gallon or half-gallon. Gas (fuel) is sold by the gallon. One gallon is about 3.8 liters.</p>
<p><strong>Temperature</strong> uses the Fahrenheit scale, not Celsius. This is one of the biggest adjustments for newcomers. Key reference points:</p>
<ul>
<li>Water freezes at 32&deg;F (0&deg;C).</li>
<li>Water boils at 212&deg;F (100&deg;C).</li>
<li>A comfortable room is about 68 to 72&deg;F.</li>
<li>Normal body temperature is about 98.6&deg;F.</li>
<li>A hot summer day is 90&deg;F or higher; a cold winter day can be below 32&deg;F.</li>
</ul>
<p>Weather reports, ovens, and thermostats all use Fahrenheit. If you hear it will be 75 degrees tomorrow, expect a pleasant, mild day.</p>`,
          terms: [
            { term: "pound", def: "A unit of weight equal to 16 ounces, about 0.45 kg." },
            { term: "ounce", def: "A small unit of weight; 16 make a pound." },
            { term: "gallon", def: "A unit of liquid volume equal to 4 quarts, about 3.8 liters." },
            { term: "Fahrenheit", def: "The US temperature scale; water freezes at 32 degrees." },
            { term: "thermostat", def: "The device that controls indoor temperature." }
          ],
          quiz: [
            { q: "How many ounces are in one pound?", options: ["16", "12", "10", "100"], answer: 0, explain: "There are 16 ounces in a pound." },
            { q: "At what Fahrenheit temperature does water freeze?", options: ["32 degrees", "0 degrees", "100 degrees", "212 degrees"], answer: 0, explain: "Water freezes at 32 degrees Fahrenheit, which equals 0 Celsius." },
            { q: "Milk and gasoline are commonly sold by the:", options: ["Gallon", "Liter", "Pound", "Quart only"], answer: 0, explain: "Milk and fuel are typically sold by the gallon in the US." },
            { q: "If the weather forecast says 75 degrees, the day will be:", options: ["Pleasant and mild", "Freezing cold", "Dangerously hot", "Below freezing"], answer: 0, explain: "75 degrees Fahrenheit is a comfortable, mild temperature." }
          ] }
      ]},
      { title: "Dates, Time, and Addresses", lessons: [
        { id: "lifeskills-el-5", title: "The Calendar, Date Format, and the Clock", minutes: 9, objective: "By the end, you can read and write US dates and tell time with AM and PM.",
          body: `<p>The US writes dates in a special order: <strong>month/day/year</strong>, or MM/DD/YYYY. This is different from most of the world, which uses day/month/year. So 03/04/2026 in the US means <strong>March 4, 2026</strong>, not April 3. This difference causes real confusion, so be careful on forms.</p>
<p>In writing, Americans often spell it out: "March 4, 2026" or "March 4th." The days of the week are Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday. The weekend is Saturday and Sunday; the workweek is Monday through Friday.</p>
<p>The US uses the <strong>12-hour clock</strong> with AM and PM, not the 24-hour clock. AM means morning (from midnight to noon). PM means afternoon and evening (from noon to midnight). So:</p>
<ul>
<li>9:00 AM is nine in the morning.</li>
<li>12:00 PM is noon (midday).</li>
<li>3:00 PM is three in the afternoon.</li>
<li>8:00 PM is eight at night.</li>
<li>12:00 AM is midnight.</li>
</ul>
<p>Noon and midnight confuse many people. Remember: 12:00 PM is noon, 12:00 AM is midnight. To avoid mistakes, people often just say "noon" or "midnight."</p>
<p>Most of the US changes clocks twice a year for Daylight Saving Time: clocks move forward one hour in spring ("spring forward") and back one hour in fall ("fall back"). Arizona and Hawaii do not observe it.</p>`,
          terms: [
            { term: "MM/DD/YYYY", def: "The US date format: month, then day, then year." },
            { term: "AM", def: "The hours from midnight to noon (morning)." },
            { term: "PM", def: "The hours from noon to midnight (afternoon and evening)." },
            { term: "noon", def: "12:00 PM, the middle of the day." },
            { term: "Daylight Saving Time", def: "The practice of moving clocks forward in spring and back in fall." }
          ],
          quiz: [
            { q: "In the US, what date does 03/04/2026 mean?", options: ["March 4, 2026", "April 3, 2026", "March 2026 only", "The 34th of 2026"], answer: 0, explain: "The US uses month/day/year, so 03/04 is March 4." },
            { q: "What time is 12:00 PM?", options: ["Noon", "Midnight", "Morning", "Evening"], answer: 0, explain: "12:00 PM is noon; 12:00 AM is midnight." },
            { q: "Which days make up the US weekend?", options: ["Saturday and Sunday", "Friday and Saturday", "Sunday and Monday", "Thursday and Friday"], answer: 0, explain: "The US weekend is Saturday and Sunday." },
            { q: "What does 'spring forward' refer to?", options: ["Moving clocks ahead one hour in spring", "A holiday in April", "Setting clocks back", "The start of summer vacation"], answer: 0, explain: "In spring, Daylight Saving Time moves clocks forward one hour." }
          ] },
        { id: "lifeskills-el-6", title: "Addresses, ZIP Codes, and Phone Numbers", minutes: 8, objective: "By the end, you can write a US address and phone number correctly.",
          body: `<p>A US mailing address follows a standard order. It has three or four lines:</p>
<ul>
<li>Line 1: The recipient's name.</li>
<li>Line 2: The street number and street name, plus apartment or unit if needed. Example: 123 Main Street, Apt 4B.</li>
<li>Line 3: The city, the two-letter state abbreviation, and the ZIP code. Example: Springfield, IL 62704.</li>
</ul>
<p>Every state has a two-letter abbreviation, like CA for California, NY for New York, TX for Texas, and FL for Florida. You will use these constantly on forms.</p>
<p>The <strong>ZIP code</strong> is a five-digit number that identifies a postal area, such as 62704. It helps the US Postal Service deliver mail. Sometimes you see a longer "ZIP+4" code like 62704-1234 for more precise delivery. Knowing your ZIP code is important for shopping, taxes, and registering for services.</p>
<p>US <strong>phone numbers</strong> have 10 digits: a 3-digit area code plus a 7-digit number, often written (312) 555-0182 or 312-555-0182. The area code tells the region. To call long distance within the US, you dial 1 first, then the 10 digits. To call the US from another country, you dial the US country code, which is +1.</p>
<p>Phone numbers that start with 1-800, 1-888, or 1-877 are toll-free, meaning the call is free for you. The number 911 is for emergencies only.</p>`,
          terms: [
            { term: "ZIP code", def: "A five-digit number identifying a US postal area." },
            { term: "state abbreviation", def: "A two-letter code for a state, like CA or NY." },
            { term: "area code", def: "The first three digits of a US phone number, showing the region." },
            { term: "toll-free", def: "A phone number (like 1-800) that is free for the caller." },
            { term: "USPS", def: "The United States Postal Service, which delivers mail." }
          ],
          quiz: [
            { q: "How many digits are in a US ZIP code?", options: ["Five", "Four", "Seven", "Ten"], answer: 0, explain: "A standard ZIP code has five digits." },
            { q: "How many digits does a full US phone number have?", options: ["Ten", "Seven", "Eleven", "Five"], answer: 0, explain: "A US phone number has a 3-digit area code plus a 7-digit number, totaling ten." },
            { q: "What does CA stand for in an address?", options: ["California", "Canada", "Carolina", "Central America"], answer: 0, explain: "CA is the two-letter abbreviation for California." },
            { q: "A number starting with 1-800 is:", options: ["Toll-free for the caller", "An emergency line", "Always a scam", "A foreign number"], answer: 0, explain: "1-800 and similar numbers are toll-free, meaning free to call." }
          ] }
      ]}
    ]},
    { stage: "middle", grades: "6–8", units: [
      { title: "Personal Finance Basics", lessons: [
        { id: "lifeskills-ms-1", title: "Budgeting, Needs vs. Wants, and Saving", minutes: 9, objective: "By the end, you can build a simple budget and tell needs apart from wants.",
          body: `<p>A <strong>budget</strong> is a plan for your money. It compares the money coming in (income) with the money going out (expenses) so you do not spend more than you earn. Most people budget by the month, because rent, bills, and paychecks usually come monthly.</p>
<p>The first step is to separate <strong>needs</strong> from <strong>wants</strong>. Needs are things you must have to live and work: housing, food, utilities, transportation, basic clothing, and medicine. Wants are nice but not necessary: restaurant meals, new gadgets, streaming services, and vacations. When money is tight, you cover needs first.</p>
<p>A popular guideline is the <strong>50/30/20 rule</strong>: spend about 50% of your after-tax income on needs, 30% on wants, and put 20% toward saving and paying off debt. For example, if you take home $3,000 a month, that is $1,500 for needs, $900 for wants, and $600 for saving and debt.</p>
<p><strong>Saving</strong> means setting money aside instead of spending it. A key goal is an <strong>emergency fund</strong>: enough savings to cover three to six months of basic expenses in case you lose your job or face a surprise cost like a car repair. Experts suggest "paying yourself first," meaning you move money to savings as soon as you get paid, before you spend on wants.</p>
<p>Tracking what you actually spend, even for one month, often reveals surprises. Small daily costs like coffee or snacks add up to real money over time.</p>`,
          terms: [
            { term: "budget", def: "A plan that compares income to expenses." },
            { term: "income", def: "Money you receive, usually from work." },
            { term: "needs", def: "Things you must have to live, like housing and food." },
            { term: "wants", def: "Things that are nice but not necessary." },
            { term: "emergency fund", def: "Savings to cover 3 to 6 months of basic expenses." }
          ],
          quiz: [
            { q: "Which of these is a need, not a want?", options: ["Housing", "A vacation", "A video game", "Restaurant dinners"], answer: 0, explain: "Housing is a basic need; the others are wants." },
            { q: "Under the 50/30/20 rule, what percent goes to saving and debt?", options: ["20%", "50%", "30%", "10%"], answer: 0, explain: "The rule puts 20% toward saving and paying off debt." },
            { q: "An emergency fund should ideally cover:", options: ["3 to 6 months of expenses", "One day of expenses", "Ten years of income", "Only your rent"], answer: 0, explain: "A common goal is three to six months of basic expenses." },
            { q: "'Paying yourself first' means:", options: ["Saving money before spending on wants", "Buying yourself gifts", "Paying bills last", "Spending your whole paycheck"], answer: 0, explain: "It means moving money to savings right after you get paid." }
          ] },
        { id: "lifeskills-ms-2", title: "Bank Accounts: Checking vs. Savings", minutes: 9, objective: "By the end, you can explain the difference between checking and savings accounts and how to use them.",
          body: `<p>Most Americans keep their money in a bank or credit union rather than as cash at home. This is safer because deposits are protected by the federal government (insured by the FDIC at banks, up to $250,000 per depositor) and lets you pay bills electronically.</p>
<p>There are two basic account types:</p>
<ul>
<li>A <strong>checking account</strong> is for everyday spending. You use it with a <strong>debit card</strong>, write checks, pay bills online, and withdraw cash from ATMs. Money moves in and out freely. Checking accounts usually pay little or no interest.</li>
<li>A <strong>savings account</strong> is for money you want to keep and grow. It pays <strong>interest</strong>, meaning the bank pays you a small percentage for keeping money there. You should not use it for daily purchases.</li>
</ul>
<p>A <strong>debit card</strong> takes money directly from your checking account when you buy something. This is different from a credit card, which borrows money you must repay later. With a debit card, you can only spend money you already have.</p>
<p>Watch out for fees. Some accounts charge a monthly maintenance fee unless you keep a minimum balance or set up direct deposit. An <strong>overdraft</strong> happens when you spend more than your balance; banks may charge a large fee (often around $35) for this. Many banks now offer free accounts, so it pays to compare.</p>
<p>To open an account, you usually need a government photo ID, your Social Security number or ITIN, and proof of address. An initial deposit may be required.</p>`,
          terms: [
            { term: "checking account", def: "A bank account for everyday spending and bill paying." },
            { term: "savings account", def: "A bank account that earns interest for money you keep." },
            { term: "debit card", def: "A card that spends money directly from your checking account." },
            { term: "interest", def: "Money the bank pays you for keeping funds in savings." },
            { term: "overdraft", def: "Spending more than your account balance, often causing a fee." }
          ],
          quiz: [
            { q: "Which account is meant for everyday spending?", options: ["Checking", "Savings", "Retirement", "Emergency"], answer: 0, explain: "A checking account is designed for daily spending and bills." },
            { q: "A debit card spends:", options: ["Money you already have in checking", "Borrowed money", "Your savings interest", "The bank's money"], answer: 0, explain: "A debit card draws directly from your checking balance." },
            { q: "What is an overdraft?", options: ["Spending more than your balance", "Earning extra interest", "A free deposit", "A type of savings account"], answer: 0, explain: "An overdraft is spending beyond your balance, which often triggers a fee." },
            { q: "US bank deposits are insured by the FDIC up to:", options: ["$250,000 per depositor", "$1,000", "Unlimited amounts", "$10,000"], answer: 0, explain: "FDIC insurance protects up to $250,000 per depositor per bank." }
          ] }
      ]},
      { title: "Social Life and Manners", lessons: [
        { id: "lifeskills-ms-3", title: "American Etiquette and Small Talk", minutes: 8, objective: "By the end, you can handle greetings, personal space, and casual conversation in the US.",
          body: `<p>Americans value friendliness, punctuality, and a degree of personal space. Knowing a few customs helps you feel at ease.</p>
<p><strong>Greetings:</strong> A firm handshake with eye contact is standard when meeting someone, especially in business. Among friends, a wave or a casual "Hey, how's it going?" is normal. The question "How are you?" is usually a polite greeting, not a real request for details. A short "Good, thanks, and you?" is the expected reply.</p>
<p><strong>Personal space:</strong> Americans tend to stand about an arm's length apart in conversation. Standing too close can feel uncomfortable to them. Lines (called "lines," not "queues") are taken seriously; cutting in line is considered rude.</p>
<p><strong>Small talk</strong> is light, friendly conversation about safe topics: the weather, weekend plans, sports, food, or your job. It builds rapport before deeper conversation. Avoid heavy topics with people you just met, such as personal income, religion, politics, age, or weight. Asking "What do you do?" (meaning your job) is common and fine.</p>
<p><strong>Politeness words</strong> matter a lot. Say "please," "thank you," "excuse me" (to pass by or get attention), and "sorry" (even for small bumps). Holding a door for the person behind you is a small, expected courtesy.</p>
<p><strong>Punctuality:</strong> For appointments, interviews, and work, arriving on time or a few minutes early is expected. For casual parties, arriving a little after the start time is normal.</p>`,
          terms: [
            { term: "small talk", def: "Light, friendly conversation about safe, everyday topics." },
            { term: "personal space", def: "The comfortable physical distance people keep, about an arm's length." },
            { term: "punctuality", def: "Being on time, important for work and appointments." },
            { term: "rapport", def: "A friendly, comfortable connection between people." },
            { term: "courtesy", def: "Polite behavior, like holding a door or saying thank you." }
          ],
          quiz: [
            { q: "When an American casually asks 'How are you?', they usually expect:", options: ["A short, polite reply like 'Good, thanks'", "A detailed health report", "No answer at all", "A handshake only"], answer: 0, explain: "It is mostly a greeting, so a brief positive reply is expected." },
            { q: "Which is a safe small-talk topic with someone new?", options: ["The weather or weekend plans", "Their exact salary", "Their religion", "Their weight"], answer: 0, explain: "Weather and weekend plans are safe; income, religion, and weight are not." },
            { q: "For a job interview, you should arrive:", options: ["On time or a few minutes early", "An hour late", "Whenever convenient", "Right after it ends"], answer: 0, explain: "Punctuality is expected for professional appointments." },
            { q: "Cutting in line is considered:", options: ["Rude", "Polite", "Required", "Friendly"], answer: 0, explain: "Americans take lines seriously, and cutting in is seen as rude." }
          ] },
        { id: "lifeskills-ms-4", title: "Tipping Culture", minutes: 9, objective: "By the end, you can calculate appropriate tips for common US services.",
          body: `<p>Tipping is a major part of US life and often surprises newcomers. In many service jobs, workers are paid low base wages and depend on tips for much of their income. Tips are usually expected, not optional, in sit-down restaurants and several other services.</p>
<p>Here are typical tipping rates:</p>
<ul>
<li><strong>Restaurants (sit-down, with a server):</strong> 15% to 20% of the bill before tax is standard. 18% to 20% is normal for good service. For poor service you might leave 15%, but leaving nothing is considered very rude.</li>
<li><strong>Taxis and rideshare (Uber, Lyft):</strong> about 10% to 20% of the fare, or a couple of dollars for a short trip.</li>
<li><strong>Hair salons and barbers:</strong> 15% to 20%.</li>
<li><strong>Food delivery:</strong> 10% to 20%, often a minimum of a few dollars.</li>
<li><strong>Bartenders:</strong> about $1 to $2 per drink.</li>
<li><strong>Hotel housekeeping:</strong> a few dollars per night; <strong>bellhops:</strong> $1 to $2 per bag.</li>
</ul>
<p>To estimate a 20% tip quickly, move the decimal point one place left to get 10%, then double it. On a $40 bill, 10% is $4, so 20% is $8.</p>
<p>You usually do not tip at fast-food counters, in stores, or for takeout you pick up yourself, though tip jars exist and small change is welcome. Some restaurants add an automatic "gratuity" (often 18%) for large groups; check the bill so you do not tip twice.</p>`,
          terms: [
            { term: "tip", def: "Extra money given to a service worker for good service." },
            { term: "gratuity", def: "Another word for a tip, sometimes added automatically to a bill." },
            { term: "rideshare", def: "App-based car services like Uber and Lyft." },
            { term: "server", def: "The person who takes your order and serves food at a restaurant." },
            { term: "fare", def: "The price of a ride in a taxi or rideshare." }
          ],
          quiz: [
            { q: "A standard tip at a sit-down restaurant is about:", options: ["15% to 20% of the bill", "1% of the bill", "50% of the bill", "Nothing at all"], answer: 0, explain: "15% to 20% is the standard restaurant tip in the US." },
            { q: "A quick way to find a 20% tip on a $40 bill is:", options: ["$4 (10%) doubled to $8", "$40 doubled", "$2", "$20"], answer: 0, explain: "10% of $40 is $4, and doubling gives the 20% tip of $8." },
            { q: "When do you usually NOT tip?", options: ["Picking up your own takeout", "A sit-down dinner", "A haircut", "A taxi ride"], answer: 0, explain: "Self-service takeout typically does not require a tip." },
            { q: "Why is tipping so important in the US?", options: ["Many service workers rely on tips for income", "It is required by federal law to tip 25%", "Tips replace all wages", "Tips go to the government"], answer: 0, explain: "Many tipped workers earn low base wages and depend on tips." }
          ] }
      ]},
      { title: "Shopping and Sales Tax", lessons: [
        { id: "lifeskills-ms-5", title: "Grocery Shopping and Sales Tax", minutes: 9, objective: "By the end, you can shop for groceries efficiently and understand why the total is more than the shelf price.",
          body: `<p>American grocery stores are large and organized by aisles with signs overhead. Produce (fruits and vegetables) is often near the entrance; refrigerated and frozen sections are along the walls. Prices are shown on shelf tags, sometimes as a "unit price" (price per ounce or pound) so you can compare brands and sizes.</p>
<p>An important surprise: the price on the shelf usually does <strong>not</strong> include tax. Most US states charge a <strong>sales tax</strong>, a percentage added at the register. So a $10 item might cost $10.80 at checkout if the sales tax is 8%. Sales tax rates vary widely by state and even by city, from 0% in a few states (like Oregon, Delaware, Montana, and New Hampshire) up to around 8% to 10% in many places. Many states do not tax basic groceries, but they do tax prepared food, restaurant meals, and most other goods.</p>
<p>To estimate your total, add roughly 8% to taxable items, or use your phone's calculator. On a $50 cart with 8% tax, expect about $54.</p>
<p>Stores offer ways to save:</p>
<ul>
<li><strong>Sales</strong> and weekly specials, often advertised in store flyers or apps.</li>
<li>A free <strong>loyalty or rewards card</strong> that unlocks member prices.</li>
<li><strong>Coupons</strong>, paper or digital, that reduce the price.</li>
<li><strong>Store brands</strong> (generic), which cost less than name brands.</li>
</ul>
<p>At checkout you can pay with cash, debit, or credit. Bagging your own groceries is common, and many stores now charge a small fee for plastic bags, so bringing reusable bags can save money.</p>`,
          terms: [
            { term: "sales tax", def: "A percentage added to the price at checkout, varying by location." },
            { term: "unit price", def: "The price per ounce or pound, used to compare value." },
            { term: "loyalty card", def: "A free store card that gives members discounts." },
            { term: "coupon", def: "A voucher that lowers the price of an item." },
            { term: "store brand", def: "A store's own generic product, usually cheaper than name brands." }
          ],
          quiz: [
            { q: "Why is your total at checkout often higher than the shelf prices?", options: ["Sales tax is added at the register", "The store made a mistake", "Tips are added", "Bags are always $5"], answer: 0, explain: "Most US shelf prices exclude sales tax, which is added at checkout." },
            { q: "An $10 item with 8% sales tax costs about:", options: ["$10.80", "$18.00", "$10.08", "$80.00"], answer: 0, explain: "8% of $10 is $0.80, so the total is $10.80." },
            { q: "What is a 'unit price' useful for?", options: ["Comparing value between sizes or brands", "Paying your taxes", "Tipping the cashier", "Finding the aisle"], answer: 0, explain: "Unit price shows cost per ounce or pound to compare value." },
            { q: "Which states have no statewide sales tax?", options: ["Oregon and Delaware", "California and Texas", "New York and Florida", "All states"], answer: 0, explain: "Oregon, Delaware, Montana, and New Hampshire have no statewide sales tax." }
          ] },
        { id: "lifeskills-ms-6", title: "Returns, Receipts, and Consumer Rights", minutes: 8, objective: "By the end, you can return items, keep records, and avoid common shopping traps.",
          body: `<p>US stores generally have customer-friendly <strong>return policies</strong>. If you buy something and change your mind or it is defective, you can often return it for a refund or exchange within a set time, commonly 30 to 90 days. The rules vary by store, so it helps to know them before you buy.</p>
<p>Keep your <strong>receipt</strong>, the printed or emailed proof of purchase. Most returns require it. Many stores will refund to your original payment method; without a receipt, you may get only store credit. Some items, like opened electronics, swimwear, or final-sale goods, may not be returnable, so check the policy.</p>
<p>A <strong>warranty</strong> is a promise from the maker or seller to repair or replace a product if it fails within a certain period. Many products come with a basic warranty for free. Stores often try to sell an "extended warranty" for extra money; these are optional and not always worth it.</p>
<p>Watch out for common traps:</p>
<ul>
<li><strong>"Sale" prices</strong> that are not real bargains. Compare the actual price, not just the discount sign.</li>
<li><strong>Subscriptions</strong> that auto-renew and charge your card monthly. Cancel ones you do not use.</li>
<li><strong>Hidden fees</strong> added at checkout, especially online.</li>
</ul>
<p>If a business treats you unfairly or you suspect fraud, you can complain to the store manager, your state's consumer protection office, or the Better Business Bureau. For serious scams, you can report to the Federal Trade Commission (FTC) at reportfraud.ftc.gov.</p>`,
          terms: [
            { term: "return policy", def: "A store's rules for giving refunds or exchanges." },
            { term: "receipt", def: "Printed or emailed proof of what you bought." },
            { term: "refund", def: "Getting your money back for a returned item." },
            { term: "warranty", def: "A promise to repair or replace a faulty product." },
            { term: "FTC", def: "The Federal Trade Commission, which handles consumer fraud reports." }
          ],
          quiz: [
            { q: "What do most stores require to process a return?", options: ["A receipt", "A tip", "A warranty card only", "Your Social Security number"], answer: 0, explain: "A receipt is usually needed as proof of purchase for returns." },
            { q: "A warranty is:", options: ["A promise to repair or replace a faulty product", "A type of coupon", "A sales tax", "A loyalty card"], answer: 0, explain: "A warranty covers repair or replacement of defective products." },
            { q: "Why be careful with subscriptions?", options: ["They can auto-renew and keep charging you", "They are illegal", "They never cost money", "They cannot be canceled"], answer: 0, explain: "Subscriptions often auto-renew, so cancel ones you do not use." },
            { q: "Where can you report a serious scam?", options: ["The Federal Trade Commission (FTC)", "The post office", "The DMV", "Your landlord"], answer: 0, explain: "The FTC handles consumer fraud reports at reportfraud.ftc.gov." }
          ] }
      ]}
    ]},
    { stage: "high", grades: "9–12", units: [
      { title: "Credit, Taxes, and Money Systems", lessons: [
        { id: "lifeskills-hs-1", title: "Credit Cards and Credit Scores", minutes: 10, objective: "By the end, you can use credit responsibly and explain what builds a good credit score.",
          body: `<p>A <strong>credit card</strong> lets you borrow money from a bank to pay for things, up to a limit, and repay it later. This is different from a debit card, which uses your own money. If you pay your full balance by the due date each month, you usually pay no interest. If you carry a balance, the bank charges <strong>interest</strong> at a high annual rate (the APR, often 20% or more), so unpaid debt grows fast.</p>
<p>Each month you get a statement showing your balance, the <strong>minimum payment</strong> (a small required amount), and the due date. Paying only the minimum is a trap: the rest keeps growing with interest. The smart habit is to pay the full balance every month.</p>
<p>A <strong>credit score</strong> is a number, usually from 300 to 850, that lenders use to judge how reliably you repay debt. Higher is better. The most common type is the FICO score. A good score (around 670 and up) helps you get approved for loans, apartments, and lower interest rates. A poor score can mean rejection or higher costs.</p>
<p>Your score is built mainly from:</p>
<ul>
<li><strong>Payment history</strong> (the biggest factor): pay every bill on time.</li>
<li><strong>Amount owed</strong>: keep balances low compared to your limit.</li>
<li><strong>Length of credit history</strong>: older accounts help.</li>
<li>New credit and the mix of credit types.</li>
</ul>
<p>Newcomers often start with no credit history. You can build one with a <strong>secured credit card</strong> (backed by a deposit) or by being added to a family member's card. You can check your credit report free each year at annualcreditreport.com.</p>`,
          terms: [
            { term: "credit card", def: "A card that borrows money from a bank to be repaid later." },
            { term: "APR", def: "Annual Percentage Rate, the yearly interest cost of borrowing." },
            { term: "credit score", def: "A number (300 to 850) showing how reliably you repay debt." },
            { term: "minimum payment", def: "The smallest amount you must pay on a credit card each month." },
            { term: "secured credit card", def: "A card backed by a cash deposit, used to build credit." }
          ],
          quiz: [
            { q: "How do you avoid paying interest on a credit card?", options: ["Pay the full balance by the due date", "Pay only the minimum", "Never use the card", "Pay once a year"], answer: 0, explain: "Paying the full balance each month means no interest is charged." },
            { q: "A US credit score typically ranges from:", options: ["300 to 850", "0 to 100", "1 to 10", "500 to 5000"], answer: 0, explain: "FICO credit scores range from 300 to 850." },
            { q: "Which factor matters most for your credit score?", options: ["Payment history", "Your age", "Your job title", "Where you live"], answer: 0, explain: "On-time payment history is the largest factor in your score." },
            { q: "A good way for a newcomer to build credit is:", options: ["A secured credit card", "Avoiding all banks", "Paying only cash forever", "Skipping bills"], answer: 0, explain: "A secured credit card backed by a deposit helps build credit history." }
          ] },
        { id: "lifeskills-hs-2", title: "US Income Taxes: W-2, Filing, and the IRS", minutes: 10, objective: "By the end, you can explain how US income tax works and what to do by April 15.",
          body: `<p>The US government funds itself largely through <strong>income tax</strong>, a tax on the money you earn. The federal tax agency is the <strong>IRS</strong> (Internal Revenue Service). Most states also charge their own income tax, though a few (like Texas and Florida) do not.</p>
<p>When you work for an employer, taxes are usually <strong>withheld</strong> from each paycheck automatically and sent to the government on your behalf. This includes federal income tax, Social Security, and Medicare taxes (the last two are called FICA). The form you fill out when hired, the <strong>W-4</strong>, tells your employer how much to withhold.</p>
<p>After the year ends, your employer sends you a <strong>W-2</strong> form (by late January) showing how much you earned and how much tax was withheld. Independent contractors instead get a <strong>1099</strong> form. You use these to <strong>file</strong> your tax return.</p>
<p><strong>Filing</strong> means reporting your income to the IRS on a tax return (the main form is the 1040), usually by <strong>April 15</strong>. If too much was withheld, you get a <strong>refund</strong>. If too little was withheld, you owe the difference. The US tax system is <strong>progressive</strong>, meaning higher income is taxed at higher rates through brackets.</p>
<p>Many people file online with software (some free for lower incomes), use a paid preparer, or do it themselves. Free help is available through the IRS VITA program for those who qualify. Keep your tax documents for several years. Filing late or not at all can lead to penalties, so meet the deadline or request an extension.</p>`,
          terms: [
            { term: "IRS", def: "The Internal Revenue Service, the US federal tax agency." },
            { term: "withholding", def: "Tax taken out of your paycheck automatically by your employer." },
            { term: "W-2", def: "A year-end form showing your wages and taxes withheld." },
            { term: "filing", def: "Reporting your income to the IRS on a tax return." },
            { term: "refund", def: "Money returned to you when too much tax was withheld." }
          ],
          quiz: [
            { q: "What is the usual deadline to file federal income taxes?", options: ["April 15", "January 1", "December 31", "July 4"], answer: 0, explain: "The federal tax filing deadline is typically April 15." },
            { q: "What form does an employer send showing your yearly wages and taxes withheld?", options: ["The W-2", "The ZIP code", "The 1040 only", "The lease"], answer: 0, explain: "The W-2 reports your wages and withheld taxes for the year." },
            { q: "If too much tax was withheld from your pay, you:", options: ["Get a refund", "Owe a penalty", "Lose your job", "Pay double"], answer: 0, explain: "Over-withholding results in a tax refund when you file." },
            { q: "The US federal tax agency is called the:", options: ["IRS", "DMV", "FDIC", "USPS"], answer: 0, explain: "The Internal Revenue Service (IRS) collects federal taxes." }
          ] }
      ]},
      { title: "Housing, Health, and Work", lessons: [
        { id: "lifeskills-hs-3", title: "Renting an Apartment", minutes: 10, objective: "By the end, you can understand a lease, deposits, and utilities when renting.",
          body: `<p>Most newcomers rent before they buy. Renting means paying a landlord to live in their property. The agreement is a <strong>lease</strong>, a legal contract you sign, usually for 12 months. Read it carefully before signing, because it sets your rent, rules, and responsibilities.</p>
<p>Common costs when renting:</p>
<ul>
<li><strong>Rent:</strong> a fixed monthly payment, due on a set day (often the 1st). Paying late can bring fees.</li>
<li><strong>Security deposit:</strong> usually one month's rent, paid upfront. The landlord holds it and returns it when you move out, minus any charges for damage beyond normal wear. By law in most states, they must return it within a set number of days.</li>
<li><strong>First and last month's rent:</strong> some landlords ask for this upfront too.</li>
<li><strong>Application fee</strong> and a <strong>credit/background check.</strong></li>
</ul>
<p><strong>Utilities</strong> are the basic services for a home: electricity, gas (heating), water, trash, internet, and sometimes more. Find out which are included in rent and which you must set up and pay yourself. Setting up electricity and internet in your name usually requires a phone call or online sign-up and may require a deposit if you have no credit history.</p>
<p>Before moving in, do a <strong>walk-through</strong> and note any existing damage in writing with photos, so you are not blamed later. Know your rights: landlords generally must give notice (often 24 hours) before entering, keep the home livable, and follow fair housing laws that ban discrimination based on race, religion, national origin, family status, disability, and other protected categories.</p>`,
          terms: [
            { term: "lease", def: "A legal contract to rent a home, usually for 12 months." },
            { term: "landlord", def: "The owner who rents property to a tenant." },
            { term: "security deposit", def: "Money paid upfront, refundable if you leave the home undamaged." },
            { term: "utilities", def: "Home services like electricity, gas, water, and internet." },
            { term: "walk-through", def: "An inspection to record a rental's condition before moving in." }
          ],
          quiz: [
            { q: "A lease is:", options: ["A legal rental contract", "A tax form", "A type of credit card", "A security deposit"], answer: 0, explain: "A lease is the legal agreement between tenant and landlord." },
            { q: "A security deposit is usually:", options: ["Refundable if you leave no damage", "Never returned", "A monthly tip", "A tax payment"], answer: 0, explain: "The deposit is returned minus charges for damage beyond normal wear." },
            { q: "Which is an example of a utility?", options: ["Electricity", "A lease", "A credit score", "A security deposit"], answer: 0, explain: "Electricity is a utility, along with gas, water, and internet." },
            { q: "Why do a walk-through before moving in?", options: ["To document existing damage with photos", "To pay your rent", "To meet the neighbors", "To sign the lease"], answer: 0, explain: "Recording existing damage protects you from being blamed for it later." }
          ] },
        { id: "lifeskills-hs-4", title: "Health Insurance Basics", minutes: 10, objective: "By the end, you can explain premium, deductible, copay, and how US health coverage works.",
          body: `<p>Healthcare in the US is expensive and mostly paid through <strong>health insurance</strong>, not directly by the government for most adults. Without insurance, a single hospital visit can cost thousands of dollars, so coverage matters greatly.</p>
<p>Most working people get insurance through their <strong>employer</strong>, which shares the cost. Others buy a plan on the government marketplace (HealthCare.gov, created by the Affordable Care Act), where lower-income people may get subsidies. <strong>Medicare</strong> covers people 65 and older; <strong>Medicaid</strong> covers many low-income people. Children may qualify for CHIP.</p>
<p>Key terms you must know:</p>
<ul>
<li><strong>Premium:</strong> the fixed amount you pay every month to have insurance, whether or not you use it.</li>
<li><strong>Deductible:</strong> the amount you pay out of pocket each year before insurance starts paying. For example, with a $2,000 deductible, you pay the first $2,000 of covered care yourself.</li>
<li><strong>Copay:</strong> a fixed fee you pay for a service, like $25 for a doctor visit.</li>
<li><strong>Coinsurance:</strong> a percentage you pay after the deductible, such as 20% of a bill.</li>
<li><strong>Out-of-pocket maximum:</strong> the most you will pay in a year; after that, insurance covers 100%.</li>
</ul>
<p>Plans have a <strong>network</strong> of approved doctors and hospitals. Staying "in-network" costs much less than going "out-of-network." Preventive care, like checkups and vaccines, is often free under your plan. Always carry your insurance card, and ask about cost before major procedures when you can.</p>`,
          terms: [
            { term: "premium", def: "The monthly amount you pay to keep insurance." },
            { term: "deductible", def: "What you pay yourself each year before insurance pays." },
            { term: "copay", def: "A fixed fee for a service, like $25 per doctor visit." },
            { term: "network", def: "The doctors and hospitals approved by your insurance plan." },
            { term: "out-of-pocket maximum", def: "The yearly cap on what you pay before insurance covers 100%." }
          ],
          quiz: [
            { q: "The monthly amount you pay just to have insurance is the:", options: ["Premium", "Deductible", "Copay", "Refund"], answer: 0, explain: "The premium is the fixed monthly cost of having insurance." },
            { q: "A deductible is:", options: ["What you pay yourself before insurance starts paying", "A monthly tip", "A type of tax", "A doctor's salary"], answer: 0, explain: "You pay the deductible amount out of pocket before coverage kicks in." },
            { q: "Staying 'in-network' means:", options: ["Using approved doctors for lower cost", "Paying more", "Avoiding all care", "Buying a new plan"], answer: 0, explain: "In-network providers cost much less than out-of-network ones." },
            { q: "Who does Medicare primarily cover?", options: ["People 65 and older", "Only children", "Only the wealthy", "Tourists"], answer: 0, explain: "Medicare covers people aged 65 and older." }
          ] },
        { id: "lifeskills-hs-5", title: "Getting a Job: Résumé, Cover Letter, Interview", minutes: 9, objective: "By the end, you can prepare an application and handle a US-style job interview.",
          body: `<p>Finding work in the US usually involves three tools: a résumé, sometimes a cover letter, and an interview.</p>
<p>A <strong>résumé</strong> is a one-page (sometimes two-page) summary of your work experience, skills, and education. US résumés are concise and focused on results. List jobs in reverse order (most recent first) with your title, employer, dates, and a few bullet points describing what you achieved, using action verbs like "managed," "built," or "increased." Importantly, US résumés do <strong>not</strong> include a photo, your age, marital status, or religion; including these can actually hurt you because of anti-discrimination norms.</p>
<p>A <strong>cover letter</strong> is a short note (three or four paragraphs) explaining why you want the job and why you fit. Tailor it to each position rather than sending the same one everywhere.</p>
<p>Many jobs are found online (Indeed, LinkedIn) or through <strong>networking</strong>, meaning personal connections. Referrals from people you know are powerful.</p>
<p>The <strong>interview</strong> is a conversation where the employer decides if you fit. Tips: arrive a few minutes early, dress neatly (often "business casual" or better), give a firm handshake, and make eye contact. Prepare to answer "Tell me about yourself" and "Why do you want this job?" A useful method for experience questions is <strong>STAR</strong>: describe the Situation, Task, Action, and Result. Bring copies of your résumé, ask one or two thoughtful questions, and send a brief thank-you email afterward.</p>
<p>To work legally, you will complete an <strong>I-9 form</strong> proving work authorization, and you need a Social Security number.</p>`,
          terms: [
            { term: "résumé", def: "A short summary of your work experience and skills." },
            { term: "cover letter", def: "A short note explaining why you fit a specific job." },
            { term: "networking", def: "Building personal connections that help you find work." },
            { term: "STAR method", def: "Answering interview questions with Situation, Task, Action, Result." },
            { term: "I-9 form", def: "A form proving you are authorized to work in the US." }
          ],
          quiz: [
            { q: "What should a US résumé NOT include?", options: ["A photo, age, or marital status", "Your job titles", "Your skills", "Your education"], answer: 0, explain: "US résumés omit photos and personal details to avoid discrimination concerns." },
            { q: "The STAR method helps you:", options: ["Answer experience questions clearly", "Calculate taxes", "Set up utilities", "Buy insurance"], answer: 0, explain: "STAR structures answers as Situation, Task, Action, Result." },
            { q: "For an interview, you should usually:", options: ["Arrive a few minutes early and dress neatly", "Arrive late", "Wear beach clothes", "Skip the handshake"], answer: 0, explain: "Punctuality and neat dress make a good professional impression." },
            { q: "What form proves you can legally work in the US?", options: ["The I-9", "The W-2", "The lease", "The 1040"], answer: 0, explain: "The I-9 verifies work authorization when you are hired." }
          ] }
      ]},
      { title: "Civic Life and Government Systems", lessons: [
        { id: "lifeskills-hs-6", title: "The DMV and Getting a Driver's License", minutes: 9, objective: "By the end, you can describe the steps to get a US driver's license and ID.",
          body: `<p>The <strong>DMV</strong> (Department of Motor Vehicles) is the state agency that handles driver's licenses, state ID cards, and vehicle registration. Each state runs its own DMV, so exact rules and names vary, but the basics are similar. The DMV is known for long waits, so making an appointment online and bringing the right documents saves time.</p>
<p>A <strong>driver's license</strong> lets you drive legally and is the most common photo ID in daily life, used to verify your identity and age. If you do not drive, you can get a non-driver <strong>state ID card</strong> instead.</p>
<p>Getting a license usually involves several steps:</p>
<ul>
<li>Prove your identity, legal presence, and state residency with documents (such as a passport, immigration documents, Social Security number, and proof of address).</li>
<li>Pass a <strong>written knowledge test</strong> on road rules and signs. Study the state's driver handbook, available free online.</li>
<li>Pass a <strong>vision test.</strong></li>
<li>Often start with a <strong>learner's permit</strong>, which lets you practice driving with a licensed adult.</li>
<li>Pass a <strong>road test</strong> (behind-the-wheel driving exam) to get the full license.</li>
<li>Pay the fee and have your photo taken.</li>
</ul>
<p>If you have a foreign license, some states let you drive temporarily, but you generally must get a state license once you become a resident. Note the <strong>REAL ID</strong>: a federally compliant license or ID (marked with a star) is needed to board domestic flights and enter federal buildings. Driving requires car <strong>insurance</strong>, which is legally mandatory in almost every state.</p>`,
          terms: [
            { term: "DMV", def: "The state agency for licenses, IDs, and vehicle registration." },
            { term: "driver's license", def: "A document allowing you to drive and serving as common photo ID." },
            { term: "learner's permit", def: "A document that lets you practice driving supervised." },
            { term: "road test", def: "A behind-the-wheel exam to earn a full license." },
            { term: "REAL ID", def: "A federally compliant ID needed for domestic flights and federal buildings." }
          ],
          quiz: [
            { q: "What does the DMV handle?", options: ["Driver's licenses and vehicle registration", "Income taxes", "Health insurance", "Apartment leases"], answer: 0, explain: "The DMV manages licenses, IDs, and vehicle registration." },
            { q: "Which test checks your knowledge of road rules and signs?", options: ["The written knowledge test", "The vision test", "The road test", "The credit test"], answer: 0, explain: "The written knowledge test covers traffic rules and signs." },
            { q: "What is a REAL ID needed for?", options: ["Boarding domestic flights", "Renting an apartment", "Paying taxes", "Opening a bank account"], answer: 0, explain: "A REAL ID is required to board domestic flights and enter federal buildings." },
            { q: "In almost every state, driving legally requires:", options: ["Car insurance", "A passport", "A college degree", "A credit card"], answer: 0, explain: "Car insurance is legally mandatory in nearly all states." }
          ] },
        { id: "lifeskills-hs-7", title: "Citizenship, Voting, and Key Agencies", minutes: 10, objective: "By the end, you can describe how to become a citizen, how voting works, and which agencies serve you.",
          body: `<p>Becoming a US citizen through <strong>naturalization</strong> is a major milestone for many immigrants. The agency that handles immigration and citizenship is <strong>USCIS</strong> (US Citizenship and Immigration Services). Typical requirements include being a lawful permanent resident (green card holder) for a number of years (usually five, or three if married to a citizen), showing good moral character, passing an English and civics test, and taking the Oath of Allegiance. The civics test asks about US history and government, like the branches of government and the rights in the Bill of Rights.</p>
<p>Citizens gain key rights: the right to <strong>vote</strong> in federal elections, to hold a US passport, to run for most public offices, and protection from deportation. <strong>Voting</strong> is how citizens choose leaders. You must register to vote first; rules vary by state, and you vote in person on Election Day (the first Tuesday after the first Monday in November), early, or by mail ballot in many places. Major elections include the President every four years and members of Congress.</p>
<p>Important government bodies to know:</p>
<ul>
<li><strong>USCIS:</strong> handles green cards, work permits, and citizenship.</li>
<li><strong>Social Security Administration (SSA):</strong> issues your <strong>Social Security number (SSN)</strong>, a nine-digit number used for work, taxes, and credit, and pays retirement and disability benefits.</li>
<li><strong>IRS:</strong> collects federal taxes.</li>
</ul>
<p>For emergencies anywhere in the US, dial <strong>911</strong> for police, fire, or medical help; the call is free from any phone. Use it only for real emergencies. For non-emergencies, many areas use 311 or a local number. Protect your SSN carefully, since identity thieves target it.</p>`,
          terms: [
            { term: "naturalization", def: "The legal process of becoming a US citizen." },
            { term: "USCIS", def: "US Citizenship and Immigration Services, which handles immigration and citizenship." },
            { term: "Social Security number", def: "A nine-digit number used for work, taxes, and credit." },
            { term: "naturalization civics test", def: "An exam on US history and government for citizenship." },
            { term: "911", def: "The free US number to call for emergencies." }
          ],
          quiz: [
            { q: "Which agency handles green cards and citizenship?", options: ["USCIS", "The DMV", "The IRS", "The FDIC"], answer: 0, explain: "USCIS manages immigration benefits and naturalization." },
            { q: "What number do you call for a real emergency?", options: ["911", "411", "1-800", "311"], answer: 0, explain: "911 reaches police, fire, and medical help for free." },
            { q: "A Social Security number is used for:", options: ["Work, taxes, and credit", "Driving only", "Voting only", "Renting a movie"], answer: 0, explain: "The SSN is central to employment, taxes, and credit." },
            { q: "A key right that comes with US citizenship is:", options: ["Voting in federal elections", "Free housing", "No taxes", "A guaranteed job"], answer: 0, explain: "Citizens can vote in federal elections and hold a US passport." }
          ] }
      ]}
    ]}
  ]
});
