window.HR_DATA = window.HR_DATA || { subjects: [] };
window.HR_DATA.subjects.push({
  key: "social",
  name: "Social Studies",
  icon: "🏛️",
  color: "#f59e0b",
  blurb: "US history, civics, geography, and economics — the American story and how the country works.",
  why: "Nothing builds common ground with Americans faster than knowing their history, government, and shared civic ideals.",
  stages: [
    { stage: "elementary", grades: "K–5", units: [
      { title: "American Symbols and Patriotism", lessons: [
        { id: "social-el-1", title: "The American Flag", minutes: 8, objective: "By the end, you can describe the US flag and explain what its parts mean.",
          body: `<p>The flag of the United States is one of the most recognized symbols in the world. People often call it the <strong>Stars and Stripes</strong> or <strong>Old Glory</strong>. It has 13 stripes that switch between red and white. These 13 stripes stand for the 13 original colonies that became the first states in 1776.</p>
<p>In the top-left corner is a blue rectangle called the <em>union</em> or the <em>canton</em>. On the blue field are 50 small white stars. Each star stands for one of the 50 states in the country today. When a new state joined over the years, a new star was added to the flag.</p>
<p>The colors have meaning too. Many Americans say red stands for courage, white stands for purity, and blue stands for justice and loyalty. The flag is treated with great respect. It should never touch the ground, and on national holidays families and schools display it proudly.</p>
<p>You will see the flag everywhere in the United States: outside schools, government buildings, post offices, and homes. Sports games often begin with the flag and a song. When someone treats the flag carefully, they are showing love and respect for the country. Knowing the flag's story helps you understand a feeling that Americans share across all backgrounds.</p>
<p>The flag is folded into a triangle for storage, and a special flag is given to families at the funerals of soldiers. Learning these customs helps you join in respectfully.</p>`,
          terms: [
            { term: "Stars and Stripes", def: "A common nickname for the United States flag." },
            { term: "stripe", def: "One of the 13 red and white bands on the flag, standing for the 13 original colonies." },
            { term: "star", def: "One of the 50 white shapes on the blue field, each standing for a state." },
            { term: "union (canton)", def: "The blue rectangle in the top-left corner that holds the stars." },
            { term: "Old Glory", def: "Another affectionate nickname for the American flag." }
          ],
          quiz: [
            { q: "How many stripes are on the US flag?", options: ["13", "50", "7", "20"], answer: 0, explain: "The 13 stripes represent the 13 original colonies." },
            { q: "What do the 50 stars stand for?", options: ["The 50 states", "50 presidents", "50 years", "50 cities"], answer: 0, explain: "Each star represents one US state." },
            { q: "Where is the blue field located?", options: ["Top-left corner", "Center", "Bottom-right corner", "All edges"], answer: 0, explain: "The blue union sits in the upper-left corner of the flag." },
            { q: "Which is a nickname for the flag?", options: ["Old Glory", "Big Blue", "The Eagle", "Liberty Cloth"], answer: 0, explain: "Old Glory and the Stars and Stripes are common nicknames." }
          ] },
        { id: "social-el-2", title: "The Bald Eagle and the Statue of Liberty", minutes: 8, objective: "By the end, you can explain why the bald eagle and the Statue of Liberty are American symbols.",
          body: `<p>The <strong>bald eagle</strong> is the national bird and national animal of the United States. It was chosen in 1782 to appear on the Great Seal of the country. The bald eagle is not actually bald — it has a white-feathered head that looks bright against its dark brown body. Americans picked it because it is strong, free, and lives only in North America. You can see the eagle on money, government papers, and official seals.</p>
<p>The <strong>Statue of Liberty</strong> stands on an island in New York Harbor. It was a gift from the people of France in 1886 to celebrate friendship and freedom. The statue is a tall copper woman holding a torch in her raised right hand and a tablet in her left arm. The tablet shows the date July 4, 1776, the day the country declared independence.</p>
<p>For millions of immigrants arriving by ship in the 1800s and early 1900s, the Statue of Liberty was the first thing they saw. It became a symbol of hope and a new beginning. A famous poem on its base says, "Give me your tired, your poor, your huddled masses yearning to breathe free."</p>
<p>Both symbols send a message about American values: freedom, strength, and welcome. As someone building a life here, the Statue of Liberty's message belongs to you too. These images appear in classrooms, movies, and celebrations, so recognizing them helps you feel at home.</p>`,
          terms: [
            { term: "bald eagle", def: "The national bird of the US, with a white head and brown body." },
            { term: "Great Seal", def: "The official emblem of the United States, used on important documents." },
            { term: "Statue of Liberty", def: "A copper statue in New York Harbor, a gift from France in 1886." },
            { term: "torch", def: "The flame the Statue of Liberty holds up, symbolizing light and freedom." },
            { term: "immigrant", def: "A person who moves to a new country to live there." }
          ],
          quiz: [
            { q: "What is the national bird of the United States?", options: ["Bald eagle", "Turkey", "Robin", "Hawk"], answer: 0, explain: "The bald eagle was chosen as the national bird in 1782." },
            { q: "Which country gave the Statue of Liberty to the US?", options: ["France", "England", "Spain", "Mexico"], answer: 0, explain: "France gave the statue as a gift of friendship in 1886." },
            { q: "What does the Statue of Liberty hold in her raised hand?", options: ["A torch", "A flag", "A book", "A sword"], answer: 0, explain: "She holds a torch symbolizing liberty and enlightenment." },
            { q: "What did the statue mean to arriving immigrants?", options: ["Hope and a new beginning", "A warning", "A border wall", "A tax office"], answer: 0, explain: "It was the first sight for many immigrants and stood for hope." }
          ] },
        { id: "social-el-3", title: "The Pledge of Allegiance and the National Anthem", minutes: 8, objective: "By the end, you can say what the Pledge and the national anthem are and when Americans use them.",
          body: `<p>The <strong>Pledge of Allegiance</strong> is a short promise that Americans make to their flag and country. Students say it in many schools at the start of the day. People stand, face the flag, and place their right hand over their heart. The words are: "I pledge allegiance to the Flag of the United States of America, and to the Republic for which it stands, one Nation under God, indivisible, with liberty and justice for all."</p>
<p>The word <em>allegiance</em> means loyalty. The word <em>indivisible</em> means the country cannot be split apart. So the Pledge is a promise to be loyal to one united nation that offers freedom and fairness to everyone.</p>
<p>The <strong>national anthem</strong> is the country's official song. It is called "The Star-Spangled Banner." A lawyer named Francis Scott Key wrote the words in 1814 during a battle in the War of 1812, after he saw the American flag still flying over a fort at dawn. Congress made it the official anthem in 1931.</p>
<p>Americans sing or hear the anthem before sports games, ceremonies, and big events. People stand quietly, remove their hats, and often place a hand over the heart. You are not required to sing, but standing respectfully is the common custom. Knowing these traditions helps you take part comfortably at school events, games, and citizenship ceremonies.</p>`,
          terms: [
            { term: "Pledge of Allegiance", def: "A spoken promise of loyalty to the US flag and country." },
            { term: "allegiance", def: "Loyalty or faithfulness to a country or cause." },
            { term: "indivisible", def: "Unable to be divided or split into parts." },
            { term: "national anthem", def: "The official song of a country." },
            { term: "The Star-Spangled Banner", def: "The US national anthem, with words by Francis Scott Key in 1814." }
          ],
          quiz: [
            { q: "What is the name of the US national anthem?", options: ["The Star-Spangled Banner", "America the Beautiful", "God Bless America", "Yankee Doodle"], answer: 0, explain: "The Star-Spangled Banner became the official anthem in 1931." },
            { q: "Who wrote the words to the anthem?", options: ["Francis Scott Key", "George Washington", "Abraham Lincoln", "Thomas Jefferson"], answer: 0, explain: "Francis Scott Key wrote the words in 1814 during the War of 1812." },
            { q: "What does 'allegiance' mean?", options: ["Loyalty", "Anger", "Freedom", "Travel"], answer: 0, explain: "Allegiance means loyalty to a country or cause." },
            { q: "What do people often do during the Pledge?", options: ["Place right hand over heart", "Sit down", "Wave a banner", "Close their eyes"], answer: 0, explain: "People stand, face the flag, and put their right hand over their heart." }
          ] }
      ]},
      { title: "American Holidays and Traditions", lessons: [
        { id: "social-el-4", title: "Thanksgiving and the First Thanksgiving", minutes: 8, objective: "By the end, you can explain the story of the first Thanksgiving and how the holiday is celebrated today.",
          body: `<p><strong>Thanksgiving</strong> is celebrated on the fourth Thursday of November. It is one of the most loved American holidays. Families travel to be together, share a big meal, and say what they are thankful for. The most common foods are roast turkey, mashed potatoes, stuffing, cranberry sauce, and pumpkin pie.</p>
<p>The holiday remembers an event from 1621. A group of English settlers called the <strong>Pilgrims</strong> had sailed to America on a ship called the <em>Mayflower</em> in 1620. They landed at a place called Plymouth, in what is now Massachusetts. Their first winter was very hard, and many died from cold and hunger.</p>
<p>The Pilgrims survived with help from <strong>Native Americans</strong>, especially the Wampanoag people. A man named Squanto taught the Pilgrims how to plant corn, catch fish, and find food. After a good harvest in the fall of 1621, the Pilgrims and about 90 Wampanoag shared a three-day feast. This gathering is remembered as the first Thanksgiving.</p>
<p>President Abraham Lincoln made Thanksgiving a national holiday in 1863. Today the holiday is less about the Pilgrims and more about gratitude and family. Many cities hold parades, and football games are shown on television. Some families also volunteer to feed people in need. Understanding Thanksgiving helps you join in one of the warmest American traditions.</p>`,
          terms: [
            { term: "Thanksgiving", def: "A US holiday on the fourth Thursday of November for giving thanks." },
            { term: "Pilgrims", def: "English settlers who sailed to America on the Mayflower in 1620." },
            { term: "Mayflower", def: "The ship that carried the Pilgrims to America in 1620." },
            { term: "Wampanoag", def: "The Native American people who helped the Pilgrims survive." },
            { term: "Squanto", def: "A Native American who taught the Pilgrims how to grow food." }
          ],
          quiz: [
            { q: "When is Thanksgiving celebrated?", options: ["Fourth Thursday of November", "First Monday of September", "July 4th", "December 25th"], answer: 0, explain: "Thanksgiving falls on the fourth Thursday of November." },
            { q: "What ship brought the Pilgrims to America?", options: ["The Mayflower", "The Titanic", "The Niña", "The Liberty"], answer: 0, explain: "The Pilgrims sailed on the Mayflower in 1620." },
            { q: "Who helped the Pilgrims survive their first year?", options: ["The Wampanoag people", "The French army", "Spanish sailors", "English kings"], answer: 0, explain: "The Wampanoag, including Squanto, taught them to farm and fish." },
            { q: "Which food is traditional at Thanksgiving?", options: ["Turkey", "Tacos", "Sushi", "Pizza"], answer: 0, explain: "Roast turkey is the classic Thanksgiving dish." }
          ] },
        { id: "social-el-5", title: "Independence Day and Other Summer Holidays", minutes: 8, objective: "By the end, you can explain July 4th, Memorial Day, and Labor Day.",
          body: `<p><strong>Independence Day</strong>, also called the Fourth of July, is the country's birthday. On July 4, 1776, the leaders of the 13 American colonies signed the <strong>Declaration of Independence</strong>, announcing that the colonies were free from British rule. Americans celebrate with fireworks, parades, picnics, and barbecues. People wear red, white, and blue and fly the flag.</p>
<p><strong>Memorial Day</strong> is on the last Monday of May. It honors the soldiers who died while serving in the US military. Families visit cemeteries, place flags and flowers on graves, and attend ceremonies. Because it falls in late spring, many people also see it as the start of summer and have cookouts.</p>
<p><strong>Labor Day</strong> is on the first Monday of September. It celebrates American workers and the labor movement that fought for fair pay, safer jobs, and the eight-hour workday. It became a national holiday in 1894. For most families it marks the end of summer, and the school year usually starts around then.</p>
<p>These three holidays create the "bookends" of the American summer: Memorial Day near the start, Independence Day in the middle, and Labor Day at the end. Knowing what each one honors helps you understand why some are joyful and loud while others, like Memorial Day, are also solemn and respectful.</p>`,
          terms: [
            { term: "Independence Day", def: "July 4th, celebrating the 1776 Declaration of Independence." },
            { term: "Declaration of Independence", def: "The 1776 document announcing the colonies were free from Britain." },
            { term: "Memorial Day", def: "Last Monday of May, honoring soldiers who died in service." },
            { term: "Labor Day", def: "First Monday of September, celebrating workers." },
            { term: "labor movement", def: "The organized effort of workers to win fair pay and safe conditions." }
          ],
          quiz: [
            { q: "What does July 4th celebrate?", options: ["The Declaration of Independence", "The end of WWII", "The first president", "The Constitution"], answer: 0, explain: "The Declaration of Independence was signed on July 4, 1776." },
            { q: "Who does Memorial Day honor?", options: ["Soldiers who died in service", "Teachers", "Workers", "Presidents"], answer: 0, explain: "Memorial Day remembers military members who died serving." },
            { q: "When is Labor Day?", options: ["First Monday of September", "July 4th", "Last Monday of May", "December 25th"], answer: 0, explain: "Labor Day is the first Monday of September." },
            { q: "What does Labor Day celebrate?", options: ["American workers", "Independence", "Soldiers", "Explorers"], answer: 0, explain: "Labor Day honors workers and the labor movement." }
          ] },
        { id: "social-el-6", title: "Holidays Honoring Leaders and Veterans", minutes: 8, objective: "By the end, you can explain MLK Day, Presidents' Day, and Veterans Day.",
          body: `<p><strong>Martin Luther King Jr. Day</strong> is on the third Monday of January. It honors Dr. Martin Luther King Jr., a Baptist minister who led the Civil Rights Movement in the 1950s and 1960s. He worked peacefully to end unfair laws that treated Black Americans differently. His famous 1963 speech said, "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character." On this day, many people volunteer to help their communities.</p>
<p><strong>Presidents' Day</strong> is on the third Monday of February. It started as a celebration of George Washington's birthday. Washington was the first president and a leader in the American Revolution. Today the holiday honors all US presidents, especially Washington and Abraham Lincoln, who were both born in February.</p>
<p><strong>Veterans Day</strong> is on November 11. It honors all people who have served in the US military, both living and dead. (This is different from Memorial Day, which honors only those who died.) The date marks the end of World War I, which stopped fighting on the 11th hour of the 11th day of the 11th month in 1918. Communities hold parades and thank veterans for their service.</p>
<p>These holidays teach an important idea: Americans set aside days to remember leaders and people who served the country.</p>`,
          terms: [
            { term: "Martin Luther King Jr. Day", def: "Third Monday of January, honoring the civil rights leader." },
            { term: "Civil Rights Movement", def: "The 1950s–60s effort to end unfair treatment of Black Americans." },
            { term: "Presidents' Day", def: "Third Monday of February, honoring US presidents." },
            { term: "George Washington", def: "The first US president and a leader of the American Revolution." },
            { term: "Veterans Day", def: "November 11, honoring all who served in the military." }
          ],
          quiz: [
            { q: "Who is honored on the third Monday of January?", options: ["Dr. Martin Luther King Jr.", "George Washington", "Abraham Lincoln", "Thomas Jefferson"], answer: 0, explain: "MLK Day honors the civil rights leader." },
            { q: "Presidents' Day grew out of whose birthday?", options: ["George Washington's", "Lincoln's", "Jefferson's", "Roosevelt's"], answer: 0, explain: "It began as a celebration of Washington's birthday." },
            { q: "What date is Veterans Day?", options: ["November 11", "July 4", "May 30", "January 1"], answer: 0, explain: "Veterans Day is November 11, marking the end of WWI." },
            { q: "How is Veterans Day different from Memorial Day?", options: ["It honors all who served, not only those who died", "It is in summer", "It honors workers", "It honors presidents"], answer: 0, explain: "Veterans Day honors all who served; Memorial Day honors those who died." }
          ] }
      ]},
      { title: "Maps, States, and Communities", lessons: [
        { id: "social-el-7", title: "Maps and the Regions of the United States", minutes: 8, objective: "By the end, you can read a basic map and name the main regions of the US.",
          body: `<p>A <strong>map</strong> is a drawing of a place seen from above. Maps help us find where things are. Most maps use a <strong>compass rose</strong> to show direction: North is up, South is down, East is right, and West is left. A simple way to remember the order going clockwise is "Never Eat Soggy Waffles" (North, East, South, West).</p>
<p>Maps also have a <strong>map key</strong> (also called a legend) that explains what the symbols mean — for example, a star for a capital city or a blue line for a river. A <strong>scale</strong> shows how distance on the map matches real distance on the ground.</p>
<p>The United States is a very large country, so people often divide it into <strong>regions</strong> that share weather, land, and culture. Common regions are the Northeast (states like New York and Massachusetts), the Southeast (like Florida and Georgia), the Midwest (like Illinois and Ohio), the Southwest (like Texas and Arizona), and the West (like California and Washington).</p>
<p>The country also has natural features that shape life: the Atlantic Ocean on the east coast, the Pacific Ocean on the west coast, the Rocky Mountains in the west, the Appalachian Mountains in the east, and the Mississippi River flowing through the middle. Two states are separate from the others: Alaska in the far northwest and Hawaii, a group of islands in the Pacific Ocean. Learning to read maps helps you understand directions, travel, and the weather reports you hear every day.</p>`,
          terms: [
            { term: "map", def: "A drawing of a place as seen from above." },
            { term: "compass rose", def: "A symbol on a map showing the directions North, South, East, and West." },
            { term: "map key (legend)", def: "A guide that explains what the symbols on a map mean." },
            { term: "region", def: "A large area whose places share land, weather, or culture." },
            { term: "Mississippi River", def: "A major river that flows through the middle of the US." }
          ],
          quiz: [
            { q: "What does a compass rose show?", options: ["Directions", "Population", "Temperature", "Money"], answer: 0, explain: "A compass rose shows North, South, East, and West." },
            { q: "Which ocean is on the west coast of the US?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], answer: 0, explain: "The Pacific Ocean borders the western United States." },
            { q: "Which state is a group of islands in the Pacific?", options: ["Hawaii", "Alaska", "Texas", "Maine"], answer: 0, explain: "Hawaii is an island state in the Pacific Ocean." },
            { q: "What does a map key explain?", options: ["What the symbols mean", "The weather", "The price of land", "The history"], answer: 0, explain: "A map key (legend) tells you what each symbol stands for." }
          ] },
        { id: "social-el-8", title: "The 50 States and Their Capitals", minutes: 9, objective: "By the end, you can explain how states and capitals work and name several key examples.",
          body: `<p>The United States is made of <strong>50 states</strong>. Each state has its own government, laws, and a main city called the <strong>capital</strong>, where state leaders meet. It is important to know that a state's capital is often NOT its biggest city. For example, the capital of New York State is Albany, not New York City. The capital of California is Sacramento, not Los Angeles.</p>
<p>The country also has a national capital, <strong>Washington, D.C.</strong>, which is not part of any state. "D.C." stands for District of Columbia. This is where the President lives in the White House and where Congress meets in the Capitol building to make national laws.</p>
<p>Here are a few state capitals worth remembering: Texas — Austin; Florida — Tallahassee; Illinois — Springfield; Massachusetts — Boston; Washington State — Olympia; Georgia — Atlanta; Ohio — Columbus; Arizona — Phoenix.</p>
<p>Each state also has nicknames and special features. Texas is the "Lone Star State." California is the "Golden State." Florida is the "Sunshine State." Some states are very big, like Alaska, which is the largest by area. Some are small, like Rhode Island, the smallest.</p>
<p>States have different climates and jobs. People in farming states grow corn and wheat; coastal states have fishing and ports; some states are known for technology or oil. When you meet Americans, asking what state someone is from is a friendly, common question, and knowing a little about each state helps you connect.</p>`,
          terms: [
            { term: "state", def: "One of the 50 self-governing parts of the United States." },
            { term: "capital", def: "The city where a state's or country's government is based." },
            { term: "Washington, D.C.", def: "The national capital, not part of any state." },
            { term: "District of Columbia", def: "The official name of the area where Washington, D.C. sits." },
            { term: "nickname", def: "An informal name, like Texas being the 'Lone Star State.'" }
          ],
          quiz: [
            { q: "How many states are in the United States?", options: ["50", "13", "100", "48"], answer: 0, explain: "There are 50 states." },
            { q: "What is the national capital?", options: ["Washington, D.C.", "New York City", "Los Angeles", "Chicago"], answer: 0, explain: "Washington, D.C. is the national capital and not part of any state." },
            { q: "What is the capital of California?", options: ["Sacramento", "Los Angeles", "San Francisco", "San Diego"], answer: 0, explain: "Sacramento is California's capital, not its largest city." },
            { q: "Which state is the largest by area?", options: ["Alaska", "Texas", "California", "Montana"], answer: 0, explain: "Alaska is the largest US state by land area." }
          ] },
        { id: "social-el-9", title: "Community Helpers, Rules, and Laws", minutes: 8, objective: "By the end, you can explain who community helpers are and why rules and laws matter.",
          body: `<p>A <strong>community</strong> is a group of people who live and work in the same place, like a town or neighborhood. Communities work because of people who do important jobs to keep everyone safe and healthy. We call them <strong>community helpers</strong>.</p>
<p>Some community helpers include: <em>police officers</em>, who keep order and help in emergencies; <em>firefighters</em>, who put out fires and rescue people; <em>doctors and nurses</em>, who care for sick people; <em>teachers</em>, who help children learn; <em>mail carriers</em>, who deliver letters and packages; and <em>sanitation workers</em>, who collect trash and recycling. In an emergency, anyone in the US can call <strong>911</strong> on a phone to reach police, firefighters, or an ambulance for free.</p>
<p>Communities also need <strong>rules and laws</strong> so people can live together safely and fairly. A <em>rule</em> is a guide for behavior, like "raise your hand before speaking" in a classroom. A <em>law</em> is a rule made by the government that everyone must follow, like stopping at a red light or not stealing. Laws protect people and property and are enforced by the police and the courts.</p>
<p>When people follow laws and treat each other with respect, the community runs smoothly. Citizens can also help by voting, volunteering, keeping public places clean, and being kind to neighbors. Understanding community helpers and laws makes daily life easier — you will know who to call, what is expected of you, and how to be a good neighbor in your new home.</p>`,
          terms: [
            { term: "community", def: "A group of people living and working in the same area." },
            { term: "community helper", def: "A person whose job keeps the community safe and healthy." },
            { term: "911", def: "The US emergency phone number for police, fire, and ambulance." },
            { term: "rule", def: "A guide for how to behave in a certain place." },
            { term: "law", def: "A rule made by the government that everyone must follow." }
          ],
          quiz: [
            { q: "What number do you call for an emergency in the US?", options: ["911", "411", "100", "311"], answer: 0, explain: "911 reaches police, fire, and ambulance services." },
            { q: "Which is a community helper?", options: ["Firefighter", "Cartoon character", "Movie star", "Robot"], answer: 0, explain: "Firefighters are community helpers who keep people safe." },
            { q: "What is a law?", options: ["A rule made by the government that all must follow", "A polite suggestion", "A type of map", "A holiday"], answer: 0, explain: "Laws are government rules everyone must obey." },
            { q: "Why do communities need rules and laws?", options: ["To live together safely and fairly", "To make life harder", "To collect stamps", "To choose nicknames"], answer: 0, explain: "Rules and laws keep people safe and treat everyone fairly." }
          ] }
      ]}
    ]},
    { stage: "middle", grades: "6–8", units: [
      { title: "Colonial America and the Road to Revolution", lessons: [
        { id: "social-ms-1", title: "The 13 Colonies", minutes: 9, objective: "By the end, you can describe the 13 colonies and how they were organized.",
          body: `<p>Before the United States existed, Britain controlled 13 colonies along the Atlantic coast of North America. A <strong>colony</strong> is a settlement controlled by a faraway country. England began settling the coast in the 1600s. The first lasting English settlement was Jamestown, Virginia, founded in 1607. In 1620 the Pilgrims founded Plymouth in present-day Massachusetts.</p>
<p>Historians group the 13 colonies into three regions. The <strong>New England Colonies</strong> (Massachusetts, Connecticut, Rhode Island, New Hampshire) had rocky soil and cold winters, so people fished, built ships, and traded. The <strong>Middle Colonies</strong> (New York, New Jersey, Pennsylvania, Delaware) had good farmland and many different religions and cultures, including Quakers in Pennsylvania. The <strong>Southern Colonies</strong> (Maryland, Virginia, North Carolina, South Carolina, Georgia) had warm weather and large farms called <em>plantations</em> that grew tobacco, rice, and later cotton.</p>
<p>The plantation economy in the South depended heavily on <strong>enslaved Africans</strong>, people who were captured, shipped across the Atlantic, and forced to work without pay or freedom. Slavery was a terrible part of colonial life that would shape American history for centuries.</p>
<p>People came to the colonies for many reasons: to find religious freedom, to own land, or to escape poverty. Over time, the colonists began to feel like a people separate from Britain, even though they were still British subjects. This growing identity would eventually lead them to seek independence.</p>`,
          terms: [
            { term: "colony", def: "A settlement controlled by a distant country." },
            { term: "Jamestown", def: "The first lasting English settlement, founded in Virginia in 1607." },
            { term: "plantation", def: "A large farm in the South that grew cash crops." },
            { term: "enslaved Africans", def: "People forced into slavery and brought to the colonies against their will." },
            { term: "Quakers", def: "A religious group that settled mainly in Pennsylvania and opposed violence." }
          ],
          quiz: [
            { q: "How many colonies did Britain control along the Atlantic coast?", options: ["13", "50", "7", "3"], answer: 0, explain: "There were 13 British colonies." },
            { q: "What was the first lasting English settlement?", options: ["Jamestown", "Plymouth", "Boston", "New York"], answer: 0, explain: "Jamestown, Virginia was founded in 1607." },
            { q: "What did Southern plantations rely on heavily?", options: ["Enslaved African labor", "Factory machines", "Tourism", "Fishing"], answer: 0, explain: "Southern plantations depended on enslaved Africans." },
            { q: "What did New England colonists mostly do for work?", options: ["Fishing, shipbuilding, and trade", "Growing cotton", "Mining gold", "Raising cattle"], answer: 0, explain: "Rocky soil pushed New Englanders toward fishing, shipbuilding, and trade." }
          ] },
        { id: "social-ms-2", title: "Causes of the American Revolution", minutes: 9, objective: "By the end, you can explain why the colonists rebelled against Britain.",
          body: `<p>By the 1760s, the relationship between Britain and its colonies had grown tense. After an expensive war, Britain needed money, so the British government, led by King George III and Parliament, began taxing the colonists. The colonists were angry because they had no representatives in Parliament. Their famous protest was "<strong>No taxation without representation</strong>" — they believed it was unfair to be taxed by a government they did not vote for.</p>
<p>Several laws made things worse. The <strong>Stamp Act</strong> of 1765 taxed paper goods like newspapers and legal documents. The <strong>Townshend Acts</strong> taxed imports like glass and tea. In 1770, British soldiers shot and killed five colonists in the <strong>Boston Massacre</strong>. In 1773, to protest a tax on tea, colonists dumped British tea into the harbor in the <strong>Boston Tea Party</strong>.</p>
<p>Britain punished Massachusetts with harsh laws the colonists called the "Intolerable Acts." In response, leaders from the colonies met in 1774 at the First Continental Congress to decide what to do. Tensions finally exploded into fighting in April 1775 at the battles of Lexington and Concord in Massachusetts — often called "the shot heard round the world."</p>
<p>These events show how small disagreements over taxes and rights grew into a demand for independence. The colonists were not just protesting taxes; they were defending the idea that people should have a say in their own government — an idea at the heart of American identity today.</p>`,
          terms: [
            { term: "No taxation without representation", def: "The colonists' slogan against being taxed without a voice in Parliament." },
            { term: "Stamp Act", def: "A 1765 British tax on paper goods in the colonies." },
            { term: "Boston Massacre", def: "A 1770 event where British soldiers killed five colonists." },
            { term: "Boston Tea Party", def: "A 1773 protest where colonists dumped British tea into the harbor." },
            { term: "Lexington and Concord", def: "The 1775 battles that began the Revolutionary War." }
          ],
          quiz: [
            { q: "What was the colonists' main complaint about taxes?", options: ["No taxation without representation", "Taxes were too low", "They wanted more taxes", "Taxes were on food only"], answer: 0, explain: "They objected to being taxed without representation in Parliament." },
            { q: "What happened at the Boston Tea Party in 1773?", options: ["Colonists dumped British tea into the harbor", "Colonists drank free tea", "Britain gave away tea", "A ship sank by accident"], answer: 0, explain: "Colonists threw British tea into Boston Harbor to protest the tea tax." },
            { q: "Where did the Revolutionary War begin in 1775?", options: ["Lexington and Concord", "Yorktown", "Philadelphia", "New York City"], answer: 0, explain: "The first battles were at Lexington and Concord." },
            { q: "Who was the British king during this time?", options: ["King George III", "King Henry VIII", "King James I", "King Louis XVI"], answer: 0, explain: "King George III ruled Britain during the Revolution." }
          ] },
        { id: "social-ms-3", title: "The Declaration of Independence (1776)", minutes: 9, objective: "By the end, you can explain what the Declaration of Independence says and why it matters.",
          body: `<p>As the war went on, colonial leaders met at the Second Continental Congress in Philadelphia. They decided to declare full independence from Britain. They asked <strong>Thomas Jefferson</strong>, a young lawyer from Virginia, to write the main draft. On <strong>July 4, 1776</strong>, Congress approved the <strong>Declaration of Independence</strong>. This is why July 4th is the country's birthday.</p>
<p>The Declaration has a famous core idea: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness." In plain words, it says all people are born equal and have rights that no government can take away.</p>
<p>The Declaration also says that governments get their power from "the consent of the governed" — meaning a government is only fair if the people agree to it. If a government takes away people's rights, the people have the right to change it. The document then lists the colonists' complaints against King George III to explain why they were separating.</p>
<p>The Declaration did not win the war by itself; the fighting continued until 1783. And it did not immediately give equality to enslaved people, women, or Native Americans. But its ideas about equality and rights became a standard that Americans have struggled to live up to ever since. It remains one of the most important documents in world history and the foundation of American beliefs.</p>`,
          terms: [
            { term: "Declaration of Independence", def: "The 1776 document declaring the colonies free from Britain." },
            { term: "Thomas Jefferson", def: "The main author of the Declaration of Independence." },
            { term: "unalienable rights", def: "Rights that cannot be taken away, such as life and liberty." },
            { term: "consent of the governed", def: "The idea that a government's power comes from the people's agreement." },
            { term: "Second Continental Congress", def: "The meeting of colonial leaders that approved the Declaration." }
          ],
          quiz: [
            { q: "When was the Declaration of Independence approved?", options: ["July 4, 1776", "July 4, 1789", "December 25, 1776", "May 1, 1775"], answer: 0, explain: "Congress approved it on July 4, 1776." },
            { q: "Who was the main author?", options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"], answer: 0, explain: "Thomas Jefferson wrote the main draft." },
            { q: "What does the document say all men are?", options: ["Created equal", "Born rich", "British subjects", "Required to fight"], answer: 0, explain: "It states that 'all men are created equal.'" },
            { q: "What does 'consent of the governed' mean?", options: ["Government power comes from the people's agreement", "Only kings can rule", "Taxes must be high", "People cannot vote"], answer: 0, explain: "It means a just government rests on the people's consent." }
          ] }
      ]},
      { title: "Building a Nation and the Civil War", lessons: [
        { id: "social-ms-4", title: "The Constitution and the Three Branches", minutes: 9, objective: "By the end, you can explain the Constitution and the three branches of government.",
          body: `<p>After winning independence, the new nation needed a plan of government. The first plan was too weak, so leaders met in Philadelphia in 1787 to write a new one: the <strong>Constitution of the United States</strong>. It is the supreme law of the land and is still in use today, making it the oldest written national constitution still working. It begins with the words "We the People," showing that power comes from the citizens.</p>
<p>The Constitution divides the federal government into <strong>three branches</strong> so no single person becomes too powerful. This is called <strong>separation of powers</strong>.</p>
<p>The <strong>Legislative Branch</strong> is <strong>Congress</strong>, which makes the laws. Congress has two parts: the Senate (two senators per state) and the House of Representatives (based on each state's population).</p>
<p>The <strong>Executive Branch</strong> is led by the <strong>President</strong>, who enforces the laws, leads the military, and represents the country. The President is helped by the Vice President and a cabinet of advisors.</p>
<p>The <strong>Judicial Branch</strong> is the courts, led by the <strong>Supreme Court</strong>. It interprets laws and decides if they follow the Constitution.</p>
<p>Each branch can limit the others through a system called <strong>checks and balances</strong>. For example, Congress passes a law, the President can veto (reject) it, and the courts can rule whether it is constitutional. This careful design keeps power balanced and protects freedom. Understanding it helps you follow American news, which constantly mentions these branches.</p>`,
          terms: [
            { term: "Constitution", def: "The supreme law of the United States, written in 1787." },
            { term: "separation of powers", def: "Dividing government into branches so no one part is too strong." },
            { term: "Legislative Branch", def: "Congress, which makes the laws." },
            { term: "Executive Branch", def: "The President, who enforces the laws." },
            { term: "checks and balances", def: "A system letting each branch limit the powers of the others." }
          ],
          quiz: [
            { q: "What is the supreme law of the United States?", options: ["The Constitution", "The Declaration of Independence", "The Bill of Rights only", "The Magna Carta"], answer: 0, explain: "The Constitution is the supreme law of the land." },
            { q: "Which branch makes the laws?", options: ["Legislative (Congress)", "Executive", "Judicial", "Military"], answer: 0, explain: "Congress, the legislative branch, makes laws." },
            { q: "Who leads the Executive Branch?", options: ["The President", "The Chief Justice", "The Speaker", "A senator"], answer: 0, explain: "The President heads the executive branch." },
            { q: "What is the purpose of checks and balances?", options: ["To keep any branch from becoming too powerful", "To collect taxes", "To choose a flag", "To draw maps"], answer: 0, explain: "Checks and balances let branches limit each other." }
          ] },
        { id: "social-ms-5", title: "Westward Expansion", minutes: 9, objective: "By the end, you can explain how and why the US grew westward and its effects on Native Americans.",
          body: `<p>In the 1800s the United States grew rapidly toward the west. In 1803, President Thomas Jefferson bought a huge area of land from France in the <strong>Louisiana Purchase</strong>, which roughly doubled the size of the country. Jefferson sent explorers Meriwether Lewis and William Clark, guided by a Native American woman named Sacagawea, to map the new land and reach the Pacific Ocean.</p>
<p>Many Americans believed in <strong>Manifest Destiny</strong> — the idea that the United States was meant to stretch from the Atlantic to the Pacific Ocean. Settlers traveled west in covered wagons along routes like the Oregon Trail to claim farmland. In 1849, the discovery of gold in California sparked the <strong>Gold Rush</strong>, and thousands rushed west hoping to get rich.</p>
<p>Westward expansion had a tragic cost. As settlers moved in, the US government forced many <strong>Native American</strong> nations off their land. One of the worst examples was the <strong>Trail of Tears</strong> in the 1830s, when the Cherokee and other tribes were forced to march hundreds of miles west; thousands died of cold, hunger, and disease along the way.</p>
<p>The railroad changed everything. In 1869 the first <strong>transcontinental railroad</strong> connected the east and west coasts, built largely by immigrant workers, including many from China. Expansion made the country bigger and richer, but it also brought great suffering to Native peoples — a difficult truth that is an important part of honest American history.</p>`,
          terms: [
            { term: "Louisiana Purchase", def: "The 1803 land deal with France that doubled US size." },
            { term: "Manifest Destiny", def: "The belief that the US was meant to expand to the Pacific." },
            { term: "Gold Rush", def: "The 1849 surge of people to California after gold was found." },
            { term: "Trail of Tears", def: "The forced, deadly march of Native Americans west in the 1830s." },
            { term: "transcontinental railroad", def: "The 1869 railway linking the east and west coasts." }
          ],
          quiz: [
            { q: "What did the Louisiana Purchase do?", options: ["Roughly doubled the size of the US", "Ended slavery", "Started the Civil War", "Created the Constitution"], answer: 0, explain: "The 1803 purchase from France doubled the nation's size." },
            { q: "What was Manifest Destiny?", options: ["The belief the US should expand to the Pacific", "A type of railroad", "A tax law", "A Native American nation"], answer: 0, explain: "It was the belief in expanding across the continent." },
            { q: "What was the Trail of Tears?", options: ["The forced removal of Native Americans", "A gold mine", "A wagon route for tourists", "A peace treaty"], answer: 0, explain: "It was the deadly forced march of Native peoples westward." },
            { q: "What connected the coasts in 1869?", options: ["The transcontinental railroad", "The Panama Canal", "The interstate highway", "The telephone"], answer: 0, explain: "The first transcontinental railroad linked east and west in 1869." }
          ] },
        { id: "social-ms-6", title: "Slavery, the Civil War, and Emancipation", minutes: 10, objective: "By the end, you can explain the causes of the Civil War and the end of slavery.",
          body: `<p>From its beginning, the United States was divided over <strong>slavery</strong>, the cruel practice of owning human beings as property. The Northern states had ended slavery and built factories. The Southern states relied on enslaved African Americans to work on plantations growing cotton. As the country grew, fierce arguments broke out over whether new states would allow slavery.</p>
<p>In 1860, <strong>Abraham Lincoln</strong> was elected president. He opposed the spread of slavery. Fearing he would end it, eleven Southern states <strong>seceded</strong> (left the country) and formed the <strong>Confederate States of America</strong>. The remaining states, called the Union, fought to keep the country together. The <strong>Civil War</strong> began in 1861 and lasted until 1865. It was the deadliest war in American history, killing about 620,000 soldiers.</p>
<p>In 1863, Lincoln issued the <strong>Emancipation Proclamation</strong>, which declared enslaved people in the Confederate states to be free. That same year, the Union won a key victory at the Battle of Gettysburg, where Lincoln later gave the famous Gettysburg Address, calling for "government of the people, by the people, for the people."</p>
<p>The Union won the war in 1865 when Confederate General Robert E. Lee surrendered to Union General Ulysses S. Grant. Just days later, Lincoln was assassinated. After the war, the <strong>13th Amendment</strong> ended slavery everywhere in the United States. The Civil War saved the nation as one country and freed four million enslaved people, though the struggle for true equality would continue for a hundred more years.</p>`,
          terms: [
            { term: "slavery", def: "The cruel practice of owning people as property and forcing them to work." },
            { term: "secede", def: "To formally leave a country or union." },
            { term: "Confederacy", def: "The eleven Southern states that left the US during the Civil War." },
            { term: "Emancipation Proclamation", def: "Lincoln's 1863 order freeing enslaved people in the Confederacy." },
            { term: "13th Amendment", def: "The 1865 change to the Constitution that ended slavery." }
          ],
          quiz: [
            { q: "Who was president during the Civil War?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Ulysses S. Grant"], answer: 0, explain: "Abraham Lincoln led the Union during the Civil War." },
            { q: "What was the main issue dividing North and South?", options: ["Slavery", "Religion", "Language", "Sports"], answer: 0, explain: "Slavery was the central cause of the Civil War." },
            { q: "What did the Emancipation Proclamation do?", options: ["Declared enslaved people in the Confederacy free", "Ended the war", "Created the Constitution", "Built railroads"], answer: 0, explain: "It declared freedom for enslaved people in Confederate states in 1863." },
            { q: "Which amendment ended slavery everywhere in the US?", options: ["The 13th Amendment", "The 1st Amendment", "The 19th Amendment", "The 2nd Amendment"], answer: 0, explain: "The 13th Amendment abolished slavery in 1865." }
          ] }
      ]},
      { title: "World Geography and Citizenship", lessons: [
        { id: "social-ms-7", title: "World Geography and Continents", minutes: 8, objective: "By the end, you can name the continents and oceans and explain basic geography terms.",
          body: `<p>Geography is the study of the Earth's land, water, and people. The Earth has seven <strong>continents</strong>: Asia (the largest), Africa, North America, South America, Antarctica, Europe, and Australia (the smallest). It also has five <strong>oceans</strong>: the Pacific (the largest), the Atlantic, the Indian, the Southern, and the Arctic.</p>
<p>Geographers use imaginary lines to locate places. The <strong>Equator</strong> is the line around the middle of the Earth; it divides the globe into the Northern and Southern Hemispheres. The <strong>Prime Meridian</strong> runs from north to south through Greenwich, England, dividing the Eastern and Western Hemispheres. Lines of <strong>latitude</strong> run east-west, and lines of <strong>longitude</strong> run north-south. Together they form a grid that gives every place an address.</p>
<p>Climate, the usual weather of a place, depends partly on location. Areas near the Equator are usually hot. Areas near the North and South Poles are very cold. Mountains, deserts, rivers, and oceans all shape how and where people live.</p>
<p>Understanding world geography helps you make sense of news, history, and the many cultures in the United States. America is a "nation of immigrants," with people from every continent. When you can place countries on a map and understand basic terms, you can follow conversations about world events and share where you come from with new neighbors and friends.</p>`,
          terms: [
            { term: "continent", def: "One of Earth's seven large land masses." },
            { term: "ocean", def: "One of Earth's five large bodies of salt water." },
            { term: "Equator", def: "The imaginary line around the middle of the Earth." },
            { term: "Prime Meridian", def: "The line dividing Earth into eastern and western halves." },
            { term: "latitude", def: "Imaginary lines that run east-west around the Earth." }
          ],
          quiz: [
            { q: "How many continents are there?", options: ["Seven", "Five", "Ten", "Three"], answer: 0, explain: "There are seven continents." },
            { q: "Which is the largest ocean?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: 0, explain: "The Pacific is the largest ocean." },
            { q: "What does the Equator divide the Earth into?", options: ["Northern and Southern Hemispheres", "Eastern and Western Hemispheres", "Hot and cold zones only", "Land and water"], answer: 0, explain: "The Equator splits Earth into Northern and Southern Hemispheres." },
            { q: "Which continent is the largest?", options: ["Asia", "Africa", "Europe", "Australia"], answer: 0, explain: "Asia is the largest continent." }
          ] },
        { id: "social-ms-8", title: "Cultures of the World", minutes: 8, objective: "By the end, you can explain what culture is and how cultures shape the world and the US.",
          body: `<p><strong>Culture</strong> is the shared way of life of a group of people. It includes language, religion, food, clothing, music, art, holidays, and beliefs. Culture is passed down from parents to children and changes slowly over time. Every region of the world has rich cultures, and learning about them builds respect and understanding.</p>
<p>The world has many major <strong>religions</strong>, including Christianity, Islam, Hinduism, Buddhism, and Judaism. People also follow many other faiths or none at all. In the United States, the Constitution protects <strong>freedom of religion</strong>, so people may worship as they choose. This freedom is one reason so many people moved to America.</p>
<p>Language is a big part of culture. There are thousands of languages worldwide. The most widely spoken include Mandarin Chinese, Spanish, English, and Hindi. In the US, English is the most common language, but millions of people also speak Spanish, Chinese, and many others at home.</p>
<p>The United States is sometimes called a "<strong>melting pot</strong>" or a "salad bowl" because people from all over the world live together, each bringing their own traditions. You can find Italian, Mexican, Chinese, Indian, and Ethiopian restaurants in the same city. Festivals celebrate Lunar New Year, Cinco de Mayo, Diwali, and more. Learning about different cultures helps you appreciate your neighbors and share your own heritage with pride. Cultural understanding is a key part of being a thoughtful American.</p>`,
          terms: [
            { term: "culture", def: "The shared language, beliefs, food, and traditions of a group." },
            { term: "religion", def: "A system of faith and worship." },
            { term: "freedom of religion", def: "The constitutional right to worship as you choose." },
            { term: "melting pot", def: "A term for the US, where many cultures live together." },
            { term: "tradition", def: "A custom passed down through generations." }
          ],
          quiz: [
            { q: "What is culture?", options: ["A group's shared way of life", "A type of map", "A government branch", "A kind of money"], answer: 0, explain: "Culture is the shared way of life, including language, food, and beliefs." },
            { q: "What does the Constitution protect about religion?", options: ["Freedom to worship as you choose", "One required religion", "No religion allowed", "Taxes on churches"], answer: 0, explain: "The Constitution protects freedom of religion." },
            { q: "Why is the US called a 'melting pot'?", options: ["Many cultures live together there", "It is very hot", "It cooks a lot of food", "It melts metal"], answer: 0, explain: "The term describes the mixing of many cultures in the US." },
            { q: "Which is among the most widely spoken languages?", options: ["Mandarin Chinese", "Latin", "Ancient Greek", "Esperanto"], answer: 0, explain: "Mandarin Chinese is one of the most spoken languages worldwide." }
          ] },
        { id: "social-ms-9", title: "Citizenship: Rights and Responsibilities", minutes: 9, objective: "By the end, you can explain the rights and responsibilities of US citizens.",
          body: `<p>A <strong>citizen</strong> is a full member of a country with both rights and responsibilities. In the United States, you can become a citizen in two main ways: by being born here (or, in most cases, being born to US citizen parents abroad), or by going through a legal process called <strong>naturalization</strong> for people who immigrate from other countries.</p>
<p>US citizens have important <strong>rights</strong> protected by the Constitution. These include freedom of speech (you can express your opinions), freedom of religion, the right to a fair trial, and the right to vote in elections. Voting is one of the most powerful rights because it lets citizens choose their leaders and shape the laws.</p>
<p>With rights come <strong>responsibilities</strong>. Citizens are expected to obey the law, pay taxes, serve on a <strong>jury</strong> when called (helping decide court cases), and respect the rights of others. Men must register for the Selective Service in case the country ever needs a military draft. Many citizens also choose to volunteer, stay informed about issues, and take part in their communities.</p>
<p>Some responsibilities, like obeying laws and paying taxes, apply to everyone living in the US, including non-citizens. But certain rights, especially voting and running for most offices, belong only to citizens. Understanding citizenship matters greatly if you plan to become a US citizen yourself. It is both a legal status and a commitment to participate in American democracy and contribute to the common good.</p>`,
          terms: [
            { term: "citizen", def: "A full member of a country with rights and responsibilities." },
            { term: "naturalization", def: "The legal process of becoming a citizen after immigrating." },
            { term: "rights", def: "Freedoms protected by law, such as speech and voting." },
            { term: "responsibilities", def: "Duties of citizens, like obeying laws and paying taxes." },
            { term: "jury", def: "A group of citizens who decide a court case." }
          ],
          quiz: [
            { q: "What is the process of becoming a citizen after immigrating called?", options: ["Naturalization", "Registration", "Migration", "Election"], answer: 0, explain: "Naturalization is the legal path to citizenship for immigrants." },
            { q: "Which right belongs only to citizens?", options: ["Voting in federal elections", "Free speech", "A fair trial", "Freedom of religion"], answer: 0, explain: "Voting in elections is reserved for citizens." },
            { q: "What is a responsibility of citizens?", options: ["Serving on a jury when called", "Never paying taxes", "Ignoring laws", "Leaving the country"], answer: 0, explain: "Serving on a jury is a citizen responsibility." },
            { q: "Who must obey US laws and pay taxes?", options: ["Everyone living in the US", "Only citizens", "Only the president", "Only voters"], answer: 0, explain: "Obeying laws and paying taxes applies to everyone in the country." }
          ] }
      ]}
    ]},
    { stage: "high", grades: "9–12", units: [
      { title: "US Government and Civics", lessons: [
        { id: "social-hs-1", title: "The Constitution and the Bill of Rights", minutes: 10, objective: "By the end, you can explain the structure of the Constitution and the key amendments.",
          body: `<p>The <strong>Constitution</strong>, written in 1787 and ratified in 1788, is the framework of American government. It has a Preamble (the introduction beginning "We the People"), seven Articles that set up the branches and powers of government, and 27 <strong>amendments</strong> (changes added over time). The Constitution can be amended, but the process is hard on purpose: it usually requires approval by two-thirds of Congress and three-fourths of the states.</p>
<p>The first ten amendments are called the <strong>Bill of Rights</strong>, added in 1791 to protect individual freedoms. The <strong>First Amendment</strong> protects five freedoms: religion, speech, press, assembly, and petition. The <strong>Second Amendment</strong> concerns the right to keep and bear arms. The <strong>Fourth Amendment</strong> protects against unreasonable searches and seizures. The <strong>Fifth Amendment</strong> protects rights of the accused, including the right to remain silent. The <strong>Sixth Amendment</strong> guarantees a speedy and fair trial.</p>
<p>Later amendments expanded democracy and equality. The <strong>13th</strong> ended slavery (1865). The <strong>14th</strong> guaranteed equal protection of the laws (1868). The <strong>15th</strong> gave Black men the right to vote (1870). The <strong>19th</strong> gave women the right to vote (1920). The <strong>26th</strong> lowered the voting age to 18 (1971).</p>
<p>The Constitution is a "living document" in the sense that courts interpret it for new situations, and amendments allow it to change. Its genius is balancing a strong government with strong protections for individual rights — a model copied around the world. For anyone living in or joining the US, knowing these rights protects you in daily life.</p>`,
          terms: [
            { term: "amendment", def: "A formal change or addition to the Constitution." },
            { term: "Bill of Rights", def: "The first ten amendments protecting individual freedoms." },
            { term: "First Amendment", def: "Protects religion, speech, press, assembly, and petition." },
            { term: "14th Amendment", def: "Guarantees equal protection of the laws (1868)." },
            { term: "19th Amendment", def: "Gave women the right to vote (1920)." }
          ],
          quiz: [
            { q: "What are the first ten amendments called?", options: ["The Bill of Rights", "The Preamble", "The Articles", "The Declaration"], answer: 0, explain: "The first ten amendments are the Bill of Rights." },
            { q: "Which amendment protects freedom of speech and religion?", options: ["The First Amendment", "The Second Amendment", "The Tenth Amendment", "The Fifth Amendment"], answer: 0, explain: "The First Amendment protects speech, religion, press, assembly, and petition." },
            { q: "Which amendment gave women the right to vote?", options: ["The 19th Amendment", "The 13th Amendment", "The 15th Amendment", "The 2nd Amendment"], answer: 0, explain: "The 19th Amendment (1920) gave women the vote." },
            { q: "How many amendments does the Constitution currently have?", options: ["27", "10", "50", "13"], answer: 0, explain: "There are 27 amendments." }
          ] },
        { id: "social-hs-2", title: "How a Bill Becomes a Law and Federalism", minutes: 10, objective: "By the end, you can explain the lawmaking process and how power is shared between national and state governments.",
          body: `<p>Most federal laws start as a <strong>bill</strong>, a proposed law. A member of Congress introduces a bill in either the House of Representatives or the Senate. The bill goes to a <strong>committee</strong>, a small group of lawmakers who study it, hold hearings, and may change it. If the committee approves, the bill is debated and voted on by the full chamber.</p>
<p>If the bill passes one chamber, it goes to the other chamber, which must also pass it. Both the House and the Senate must approve the same version. Then the bill goes to the <strong>President</strong>. The President can <strong>sign</strong> it into law or <strong>veto</strong> (reject) it. If the President vetoes, Congress can still make it law by overriding the veto with a two-thirds vote in both chambers. This shows checks and balances in action.</p>
<p>Power in the US is also divided between levels of government, a system called <strong>federalism</strong>. The <strong>federal (national) government</strong> handles things like national defense, printing money, foreign treaties, and immigration. <strong>State governments</strong> handle things like schools, driver's licenses, and local police. Some powers are shared, like collecting taxes. Below states are <strong>local governments</strong> — cities and counties — that handle services like trash collection, parks, and zoning.</p>
<p>This layered system means you live under several governments at once: city, state, and national. Understanding which level handles what helps you know where to go for help — for example, the state for a driver's license, or the city for a parking issue. Federalism keeps power closer to the people and lets states try different solutions.</p>`,
          terms: [
            { term: "bill", def: "A proposed law introduced in Congress." },
            { term: "committee", def: "A small group of lawmakers who study and revise bills." },
            { term: "veto", def: "The President's power to reject a bill." },
            { term: "override", def: "Congress passing a bill over a veto with a two-thirds vote." },
            { term: "federalism", def: "The sharing of power between national and state governments." }
          ],
          quiz: [
            { q: "What is a bill?", options: ["A proposed law", "A tax form", "A court order", "A type of money"], answer: 0, explain: "A bill is a proposed law in Congress." },
            { q: "What can the President do to a bill passed by Congress?", options: ["Sign it or veto it", "Only ignore it", "Rewrite it alone", "Hide it"], answer: 0, explain: "The President may sign a bill into law or veto it." },
            { q: "How can Congress overcome a veto?", options: ["Override it with a two-thirds vote", "Ask the Supreme Court", "Wait one year", "Hold a public vote"], answer: 0, explain: "A two-thirds vote in both chambers overrides a veto." },
            { q: "What is federalism?", options: ["Sharing power between national and state governments", "Rule by one king", "A type of election", "A foreign policy"], answer: 0, explain: "Federalism divides power among national and state levels." }
          ] },
        { id: "social-hs-3", title: "Elections, the Electoral College, and the Supreme Court", minutes: 10, objective: "By the end, you can explain how presidents are elected and how the Supreme Court works, including Brown v. Board.",
          body: `<p>Americans elect their leaders through <strong>elections</strong>. Presidential elections happen every four years. Voters do not directly choose the President by national popular vote. Instead, they vote in their state, and the result decides that state's votes in the <strong>Electoral College</strong>. Each state has electors equal to its number of senators (always two) plus its representatives (based on population). There are 538 electoral votes in total, and a candidate needs at least <strong>270</strong> to win. This means a candidate could win the most votes nationwide but still lose the election, which has happened several times.</p>
<p>The <strong>Supreme Court</strong> is the highest court in the country. It has nine <strong>justices</strong>, including one Chief Justice. The President nominates justices, and the Senate must confirm them. Justices serve for life, which keeps them independent of politics. The Court's main job is <strong>judicial review</strong> — deciding whether laws and actions follow the Constitution. This power was established in the 1803 case <em>Marbury v. Madison</em>.</p>
<p>Some Supreme Court cases changed America. In <strong>Brown v. Board of Education (1954)</strong>, the Court ruled that segregated public schools — separate schools for Black and white children — were unconstitutional, overturning the earlier "separate but equal" rule. This decision was a major victory for the Civil Rights Movement. Other landmark cases include <em>Miranda v. Arizona</em> (1966), which requires police to tell suspects their rights, and <em>Gideon v. Wainwright</em> (1963), which guarantees a lawyer to those who cannot afford one.</p>
<p>Understanding elections and the courts helps you follow the most important debates in American public life.</p>`,
          terms: [
            { term: "Electoral College", def: "The system of state electors who formally choose the President." },
            { term: "270", def: "The number of electoral votes needed to win the presidency." },
            { term: "Supreme Court", def: "The highest court in the US, with nine justices." },
            { term: "judicial review", def: "The court's power to decide if laws follow the Constitution." },
            { term: "Brown v. Board of Education", def: "The 1954 case ending legal school segregation." }
          ],
          quiz: [
            { q: "How many electoral votes are needed to win the presidency?", options: ["270", "538", "100", "50"], answer: 0, explain: "A candidate needs at least 270 of 538 electoral votes." },
            { q: "How many justices serve on the Supreme Court?", options: ["Nine", "Twelve", "Five", "One hundred"], answer: 0, explain: "The Supreme Court has nine justices." },
            { q: "What did Brown v. Board of Education (1954) decide?", options: ["School segregation was unconstitutional", "Taxes were illegal", "Women could vote", "Slavery was legal"], answer: 0, explain: "It ruled segregated public schools unconstitutional." },
            { q: "What is judicial review?", options: ["The court's power to judge if laws follow the Constitution", "Reviewing election ballots", "Choosing the President", "Writing new laws"], answer: 0, explain: "Judicial review lets courts check laws against the Constitution." }
          ] }
      ]},
      { title: "Modern US History", lessons: [
        { id: "social-hs-4", title: "Reconstruction, Industry, and Immigration", minutes: 10, objective: "By the end, you can explain Reconstruction, the Industrial Revolution, and the immigration wave through Ellis Island.",
          body: `<p>After the Civil War came <strong>Reconstruction</strong> (1865–1877), the effort to rebuild the South and bring formerly enslaved people into society as citizens. The 13th, 14th, and 15th Amendments ended slavery, granted citizenship and equal protection, and gave Black men the vote. For a time, Black Americans voted and held office. But after Reconstruction ended, Southern states passed <strong>Jim Crow laws</strong> that enforced segregation and denied many Black citizens their rights for nearly a century.</p>
<p>Meanwhile, the country went through a powerful <strong>Industrial Revolution</strong> in the late 1800s. New factories, steel, oil, and railroads transformed America from a farming nation into an industrial power. Inventors like Thomas Edison (the light bulb) and businessmen like Andrew Carnegie (steel) and John D. Rockefeller (oil) became enormously wealthy. Cities grew quickly, but many factory workers, including children, labored long hours in dangerous conditions for low pay, which gave rise to labor unions.</p>
<p>This era drew a huge wave of <strong>immigration</strong>. Between 1892 and 1954, about 12 million immigrants entered the US through <strong>Ellis Island</strong> in New York Harbor, near the Statue of Liberty. Many came from Italy, Ireland, Eastern Europe, and Russia, seeking jobs and freedom. On the West Coast, immigrants from Asia entered through Angel Island in California. Immigrants provided the labor that built modern America and shaped its diverse culture.</p>
<p>This period shows both America's promise and its problems: incredible growth and opportunity alongside inequality and injustice. It is also the story of many American families' own arrival, which makes it deeply personal for millions today.</p>`,
          terms: [
            { term: "Reconstruction", def: "The 1865–1877 effort to rebuild the South after the Civil War." },
            { term: "Jim Crow laws", def: "Southern laws that enforced racial segregation." },
            { term: "Industrial Revolution", def: "The shift to factories and machines in the late 1800s." },
            { term: "Ellis Island", def: "The New York entry point for about 12 million immigrants." },
            { term: "labor union", def: "An organization of workers seeking better pay and conditions." }
          ],
          quiz: [
            { q: "What was Reconstruction?", options: ["The effort to rebuild the South after the Civil War", "A new constitution", "A western railroad", "A foreign war"], answer: 0, explain: "Reconstruction (1865–1877) rebuilt the South and expanded rights." },
            { q: "What were Jim Crow laws?", options: ["Laws enforcing racial segregation", "Labor protections", "Tax laws", "Voting rights for all"], answer: 0, explain: "Jim Crow laws enforced segregation in the South." },
            { q: "Through which place did about 12 million immigrants enter the US?", options: ["Ellis Island", "Plymouth Rock", "Alcatraz", "Mount Rushmore"], answer: 0, explain: "Ellis Island in New York Harbor processed millions of immigrants." },
            { q: "What drove the Industrial Revolution?", options: ["Factories, steel, oil, and railroads", "Only farming", "Only fishing", "Tourism"], answer: 0, explain: "Industry grew from factories, steel, oil, and railroads." }
          ] },
        { id: "social-hs-5", title: "The World Wars, the Depression, and the New Deal", minutes: 10, objective: "By the end, you can explain WWI, the Great Depression, the New Deal, and WWII.",
          body: `<p><strong>World War I</strong> (1914–1918) began in Europe. The US stayed out at first but joined in 1917 on the side of Britain and France, helping them win. The war ended on November 11, 1918 — the date now honored as Veterans Day. The 1920s that followed were a time of prosperity and cultural energy nicknamed the "Roaring Twenties."</p>
<p>Then disaster struck. In October 1929, the stock market crashed, triggering the <strong>Great Depression</strong>, the worst economic crisis in US history. Banks failed, businesses closed, and at its peak about one in four workers was unemployed. Many families lost their homes and savings. To fight the crisis, President <strong>Franklin D. Roosevelt</strong> launched the <strong>New Deal</strong> in 1933 — a series of government programs that created jobs, built roads and dams, regulated banks, and started <strong>Social Security</strong> to support the elderly. The New Deal expanded the government's role in the economy.</p>
<p><strong>World War II</strong> (1939–1945) was the deadliest conflict in history. The US entered on December 7, 1941, after Japan attacked the naval base at <strong>Pearl Harbor</strong>, Hawaii. America fought alongside Britain and the Soviet Union (the Allies) against Germany, Italy, and Japan (the Axis). The US helped liberate Europe from Nazi Germany, which had carried out the Holocaust, the murder of six million Jews. The war ended in 1945 after the US dropped atomic bombs on Hiroshima and Nagasaki, Japan.</p>
<p>These events made the US a global superpower and reshaped the modern world. They also expanded the role of government and women in the workforce.</p>`,
          terms: [
            { term: "Great Depression", def: "The severe economic crisis that began in 1929." },
            { term: "Franklin D. Roosevelt", def: "The president who led the US through the Depression and most of WWII." },
            { term: "New Deal", def: "Roosevelt's 1930s programs to fight the Depression." },
            { term: "Social Security", def: "A New Deal program providing income to the elderly." },
            { term: "Pearl Harbor", def: "The 1941 Japanese attack that brought the US into WWII." }
          ],
          quiz: [
            { q: "What started the Great Depression in 1929?", options: ["The stock market crash", "A war", "An earthquake", "The New Deal"], answer: 0, explain: "The 1929 stock market crash triggered the Depression." },
            { q: "Who created the New Deal?", options: ["Franklin D. Roosevelt", "Abraham Lincoln", "Woodrow Wilson", "Harry Truman"], answer: 0, explain: "FDR launched the New Deal in 1933." },
            { q: "What event brought the US into World War II?", options: ["The attack on Pearl Harbor", "The fall of Paris", "The stock market crash", "The sinking of the Titanic"], answer: 0, explain: "Japan's attack on Pearl Harbor on December 7, 1941 brought the US into the war." },
            { q: "What lasting program began with the New Deal?", options: ["Social Security", "The Electoral College", "The Constitution", "The Supreme Court"], answer: 0, explain: "Social Security started under the New Deal." }
          ] },
        { id: "social-hs-6", title: "The Civil Rights Movement", minutes: 10, objective: "By the end, you can explain the major events and leaders of the Civil Rights Movement.",
          body: `<p>The <strong>Civil Rights Movement</strong> of the 1950s and 1960s was a struggle to end racial segregation and win equal rights for Black Americans. Despite the end of slavery, Jim Crow laws still forced Black people to use separate, worse facilities and blocked many from voting, especially in the South.</p>
<p>A turning point came in 1955 in Montgomery, Alabama, when <strong>Rosa Parks</strong> refused to give up her bus seat to a white passenger. Her arrest sparked the Montgomery Bus Boycott, where Black residents refused to ride the buses for over a year. The boycott was led by a young minister, <strong>Dr. Martin Luther King Jr.</strong>, who became the movement's most famous leader. He preached <strong>nonviolent protest</strong>, inspired partly by Mahatma Gandhi.</p>
<p>In August 1963, King led the March on Washington, where he gave his "I Have a Dream" speech to over 200,000 people. The movement also faced violence, including attacks on peaceful marchers in Birmingham and Selma, Alabama, which shocked the nation and built support for change.</p>
<p>These efforts produced landmark laws. The <strong>Civil Rights Act of 1964</strong> banned discrimination based on race, color, religion, sex, or national origin in jobs and public places. The <strong>Voting Rights Act of 1965</strong> protected the right of Black Americans to vote. Dr. King was assassinated in 1968, but the movement transformed the nation. Its ideals — equality, dignity, and justice for all — continue to guide America and inspire people worldwide who seek their own rights.</p>`,
          terms: [
            { term: "Civil Rights Movement", def: "The 1950s–60s struggle for equal rights for Black Americans." },
            { term: "Rosa Parks", def: "Woman whose 1955 bus protest sparked the Montgomery Bus Boycott." },
            { term: "nonviolent protest", def: "Peaceful resistance used to demand change." },
            { term: "Civil Rights Act of 1964", def: "Law banning discrimination in jobs and public places." },
            { term: "Voting Rights Act of 1965", def: "Law protecting Black Americans' right to vote." }
          ],
          quiz: [
            { q: "Whose 1955 bus protest helped start the movement?", options: ["Rosa Parks", "Harriet Tubman", "Eleanor Roosevelt", "Sojourner Truth"], answer: 0, explain: "Rosa Parks's refusal sparked the Montgomery Bus Boycott." },
            { q: "Who gave the 'I Have a Dream' speech?", options: ["Dr. Martin Luther King Jr.", "Malcolm X", "Thurgood Marshall", "John F. Kennedy"], answer: 0, explain: "Dr. King gave the speech at the 1963 March on Washington." },
            { q: "What did the Civil Rights Act of 1964 do?", options: ["Banned discrimination in jobs and public places", "Ended World War II", "Created Social Security", "Lowered the voting age"], answer: 0, explain: "It outlawed discrimination based on race, sex, religion, and more." },
            { q: "What method did Dr. King promote?", options: ["Nonviolent protest", "Armed rebellion", "Secrecy", "Ignoring the law forever"], answer: 0, explain: "King championed peaceful, nonviolent protest." }
          ] }
      ]},
      { title: "Economics and Civics for Citizenship", lessons: [
        { id: "social-hs-7", title: "Economics: Supply, Demand, and Economic Systems", minutes: 10, objective: "By the end, you can explain supply and demand and compare capitalism with other systems.",
          body: `<p><strong>Economics</strong> is the study of how people use limited resources to meet unlimited wants. Because resources are <strong>scarce</strong>, every choice has an <strong>opportunity cost</strong> — the value of the next best thing you gave up. If you spend money on a phone, the opportunity cost is whatever else you could have bought.</p>
<p>The most important idea in a market is <strong>supply and demand</strong>. <strong>Demand</strong> is how much of a product people want to buy at a given price; usually, when the price drops, people want more. <strong>Supply</strong> is how much producers are willing to make and sell; usually, when the price rises, they make more. The point where supply and demand meet sets the <strong>market price</strong>. For example, if many people want a popular toy but few are made, the price goes up.</p>
<p>The United States has a <strong>capitalist</strong> or free-market economy. In capitalism, businesses are privately owned, people compete to sell goods, and prices are set mostly by supply and demand rather than the government. Competition encourages quality and lower prices, and people can start their own businesses to earn profit.</p>
<p>Other systems work differently. In a <strong>command economy</strong> (like in the former Soviet Union), the government owns businesses and decides what to produce and at what price. <strong>Socialism</strong> involves more government control and shared ownership of some industries. Most countries, including the US, actually have a <strong>mixed economy</strong> — mostly capitalist, but with government rules, public services, and programs like Social Security. Understanding these ideas helps you make smart money decisions and follow economic news that shapes jobs and prices.</p>`,
          terms: [
            { term: "scarcity", def: "The limited nature of resources compared to wants." },
            { term: "opportunity cost", def: "The value of the next best option you give up." },
            { term: "supply and demand", def: "The forces of how much is made and how much is wanted, setting prices." },
            { term: "capitalism", def: "A system of private ownership and free markets." },
            { term: "mixed economy", def: "An economy combining free markets with government rules and services." }
          ],
          quiz: [
            { q: "What is opportunity cost?", options: ["The value of the next best option given up", "The total price of a good", "A type of tax", "Money lost to theft"], answer: 0, explain: "Opportunity cost is what you give up when you make a choice." },
            { q: "In general, what happens to demand when prices drop?", options: ["People want to buy more", "People want to buy less", "Supply disappears", "Nothing changes"], answer: 0, explain: "Lower prices usually increase the quantity demanded." },
            { q: "What kind of economy does the US mainly have?", options: ["Capitalist (free market), and in practice mixed", "Command economy", "No economy", "Pure socialism"], answer: 0, explain: "The US has a capitalist, mostly free-market economy that is mixed in practice." },
            { q: "Who controls production in a command economy?", options: ["The government", "Private businesses", "Foreign countries", "No one"], answer: 0, explain: "In a command economy the government controls production." }
          ] },
        { id: "social-hs-8", title: "Money, Banking, Taxes, and GDP", minutes: 10, objective: "By the end, you can explain how money, banks, taxes, and GDP work in the US economy.",
          body: `<p>Money is anything widely accepted to buy goods and services. US currency is the dollar, printed by the government and managed by the nation's central bank, the <strong>Federal Reserve</strong> ("the Fed"). The Fed influences the economy by raising or lowering <strong>interest rates</strong>, which affect how much it costs to borrow money. Lower rates encourage borrowing and spending; higher rates slow them down to control <strong>inflation</strong> (rising prices).</p>
<p><strong>Banks</strong> keep your money safe and lend it to others. When you put money in a savings account, the bank pays you a little <strong>interest</strong>. When you borrow with a loan or credit card, you pay interest to the bank. Building good <strong>credit</strong> by paying bills on time helps you borrow for big things like a car or a home. In the US, bank deposits are insured by the FDIC up to a legal limit, so your money is protected even if a bank fails.</p>
<p><strong>Taxes</strong> are money citizens and residents pay to the government to fund public services like roads, schools, the military, and Social Security. The main types are <strong>income tax</strong> (on what you earn), <strong>sales tax</strong> (added at the store), and <strong>property tax</strong> (on homes and land). Every year, workers file a tax return by April 15 to settle what they owe or get a refund.</p>
<p>Economists measure the size of the economy with <strong>GDP</strong> (Gross Domestic Product), the total value of all goods and services a country produces in a year. When GDP grows, the economy is expanding; when it shrinks for months, it may be a <strong>recession</strong>. These concepts shape everyday life — your paycheck, your rent, and the prices you pay.</p>`,
          terms: [
            { term: "Federal Reserve", def: "The central bank of the US that manages money and interest rates." },
            { term: "inflation", def: "A general rise in prices over time." },
            { term: "credit", def: "Your record of borrowing and repaying, affecting future loans." },
            { term: "income tax", def: "A tax paid on the money you earn." },
            { term: "GDP", def: "The total value of goods and services a country produces in a year." }
          ],
          quiz: [
            { q: "What is the central bank of the United States?", options: ["The Federal Reserve", "Wall Street", "The IRS", "The World Bank"], answer: 0, explain: "The Federal Reserve is the US central bank." },
            { q: "What is inflation?", options: ["A general rise in prices", "A drop in taxes", "A type of bank", "A government branch"], answer: 0, explain: "Inflation is a general increase in prices over time." },
            { q: "By what date do most US workers file taxes?", options: ["April 15", "July 4", "January 1", "December 31"], answer: 0, explain: "The usual tax deadline is April 15." },
            { q: "What does GDP measure?", options: ["The total value of goods and services produced in a year", "The number of citizens", "The size of the army", "The amount of land"], answer: 0, explain: "GDP measures a country's total economic output." }
          ] },
        { id: "social-hs-9", title: "The US Naturalization Civics Test", minutes: 11, objective: "By the end, you can answer the most common questions on the US citizenship civics test.",
          body: `<p>To become a US citizen, applicants take a <strong>naturalization</strong> interview that includes a <strong>civics test</strong> of questions about American government and history. Here are key facts that appear on the official test, useful for everyone who wants to understand the country.</p>
<p><strong>Government basics:</strong> The supreme law of the land is the <strong>Constitution</strong>. The first three words are "We the People." The first ten amendments are the <strong>Bill of Rights</strong>. There are <strong>27</strong> amendments. The economic system is a capitalist/market economy. The "rule of law" means everyone, including leaders, must follow the law.</p>
<p><strong>Branches:</strong> There are three branches — legislative, executive, and judicial. <strong>Congress</strong> makes federal laws and has two parts: the Senate (100 senators, two per state, six-year terms) and the House of Representatives (435 voting members, two-year terms). The <strong>President</strong> is the head of the executive branch and the commander in chief of the military; the presidential term is four years. The <strong>Supreme Court</strong> has nine justices and is the highest court.</p>
<p><strong>History:</strong> We declared independence from <strong>Great Britain</strong> in <strong>1776</strong>. <strong>George Washington</strong> was the first president, called the "Father of Our Country." <strong>Thomas Jefferson</strong> wrote the Declaration of Independence. <strong>Abraham Lincoln</strong> led during the Civil War and freed the slaves with the Emancipation Proclamation. The two main political parties today are the <strong>Democratic</strong> and <strong>Republican</strong> parties.</p>
<p><strong>Symbols and rights:</strong> The flag has 13 stripes and 50 stars. We celebrate Independence Day on <strong>July 4</strong>. Two rights of everyone living in the US include freedom of speech and freedom of religion. You must be <strong>18</strong> to vote. Knowing these facts prepares you for citizenship and helps you take part as an informed member of American society.</p>`,
          terms: [
            { term: "civics test", def: "The part of the citizenship interview testing US history and government." },
            { term: "rule of law", def: "The principle that everyone, including leaders, must obey the law." },
            { term: "commander in chief", def: "The President's role as head of the US military." },
            { term: "Father of Our Country", def: "A title for George Washington, the first president." },
            { term: "political party", def: "A group with shared ideas; the main US ones are Democratic and Republican." }
          ],
          quiz: [
            { q: "What is the supreme law of the land?", options: ["The Constitution", "The Bill of Rights", "The Declaration of Independence", "The President's orders"], answer: 0, explain: "The Constitution is the supreme law of the land." },
            { q: "From which country did the US declare independence?", options: ["Great Britain", "France", "Spain", "Germany"], answer: 0, explain: "The US declared independence from Great Britain in 1776." },
            { q: "How many US senators are there?", options: ["100", "435", "50", "9"], answer: 0, explain: "There are 100 senators, two from each state." },
            { q: "Who is called the 'Father of Our Country'?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"], answer: 0, explain: "George Washington, the first president, holds that title." }
          ] }
      ]}
    ]}
  ]
});
