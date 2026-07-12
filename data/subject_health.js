window.HR_DATA = window.HR_DATA || { subjects: [] };
window.HR_DATA.subjects.push({
  key: "health",
  name: "Health & Physical Education",
  icon: "💪",
  color: "#ef4444",
  blurb: "Nutrition, the body, mental health, safety, and American sports culture.",
  why: "Health vocabulary and sports (football, baseball, basketball) are woven through everyday American small talk.",
  stages: [
    { stage: "elementary", grades: "K–5", units: [
      { title: "Healthy Habits Every Day", lessons: [
        { id: "health-el-1", title: "Washing Hands and Staying Clean", minutes: 8, objective: "By the end, you can explain why and how to wash your hands and keep clean.",
          body: `<p>Germs are tiny living things that are too small to see. Some germs can make you sick with a cold, the flu, or a stomach ache. Germs spread when you touch things and then touch your face, mouth, or eyes. The best way to stop germs is to wash your hands often.</p>
<p>Wash your hands before you eat, after you use the bathroom, after you blow your nose, and after you play outside. Use soap and warm water. Rub your hands together for about 20 seconds. A good trick is to sing the "Happy Birthday" song two times while you scrub. Clean between your fingers, under your nails, and the backs of your hands. Then rinse and dry with a clean towel.</p>
<p>Keeping clean also means taking a bath or shower, brushing your hair, and wearing clean clothes. When you cough or sneeze, cover your mouth with your elbow, not your hand. This is called the "vampire cough" because your arm looks like a cape. Throw used tissues in the trash right away.</p>
<p>Good cleaning habits keep you healthy and keep the people around you healthy too. In American schools, children learn these habits early, and teachers often remind students to wash up before lunch.</p>`,
          terms: [
            { term: "germ", def: "A tiny living thing, too small to see, that can make you sick." },
            { term: "soap", def: "A cleaning product used with water to remove dirt and germs." },
            { term: "rinse", def: "To wash off soap or dirt with clean water." },
            { term: "sneeze", def: "A sudden, loud release of air from your nose and mouth." },
            { term: "tissue", def: "A soft paper used to wipe your nose, then thrown away." },
            { term: "hygiene", def: "The practice of keeping yourself clean to stay healthy." }
          ],
          quiz: [
            { q: "About how long should you scrub your hands with soap?", options: ["20 seconds", "1 second", "5 minutes", "1 hour"], answer: 0, explain: "Twenty seconds, about two rounds of the Happy Birthday song, is the recommended time." },
            { q: "When should you wash your hands?", options: ["Before eating", "Only on weekends", "Only when they look dirty", "Never"], answer: 0, explain: "You should always wash your hands before eating to remove germs." },
            { q: "What is the best way to cover a cough?", options: ["With your elbow", "With your bare hand", "With your shirt of a friend", "Do not cover it"], answer: 0, explain: "Coughing into your elbow keeps germs off your hands and away from others." },
            { q: "What are germs?", options: ["Tiny living things that can make you sick", "A kind of food", "A type of soap", "A school subject"], answer: 0, explain: "Germs are tiny living things too small to see that can cause illness." }
          ] },
        { id: "health-el-2", title: "Sleep and Healthy Teeth", minutes: 8, objective: "By the end, you can describe why sleep matters and how to take care of your teeth.",
          body: `<p>Your body needs sleep to grow strong and feel happy. Children need a lot of sleep, often about 9 to 11 hours each night. When you sleep, your body rests and your brain stores what you learned during the day. If you do not sleep enough, you may feel tired, grumpy, or have trouble paying attention at school.</p>
<p>A good bedtime routine helps you sleep well. Try to go to bed at the same time every night. Turn off screens like phones and televisions before bed, because their light can keep your brain awake. A quiet, dark room helps your body rest.</p>
<p>Your teeth also need daily care. Brush your teeth two times a day, in the morning and before bed. Use a small amount of toothpaste with fluoride, which protects teeth from holes called cavities. Brush for two minutes, gently moving the brush in small circles. Do not forget to brush your tongue. Flossing once a day cleans between the teeth where the brush cannot reach.</p>
<p>Eating too much candy and drinking sugary soda can hurt your teeth. In the United States, people visit a dentist about every six months for a checkup. The dentist cleans your teeth and looks for problems early.</p>`,
          terms: [
            { term: "routine", def: "The same set of steps you do regularly, such as before bed." },
            { term: "cavity", def: "A small hole in a tooth caused by decay." },
            { term: "fluoride", def: "A mineral in toothpaste that helps protect teeth." },
            { term: "floss", def: "A thin string used to clean between the teeth." },
            { term: "dentist", def: "A doctor who takes care of your teeth and gums." },
            { term: "checkup", def: "A regular visit to a doctor or dentist to check your health." }
          ],
          quiz: [
            { q: "How many times a day should you brush your teeth?", options: ["Two times", "Once a week", "Never", "Ten times"], answer: 0, explain: "Brushing twice a day, morning and night, keeps teeth healthy." },
            { q: "What is a cavity?", options: ["A small hole in a tooth", "A type of toothbrush", "A kind of sleep", "A healthy food"], answer: 0, explain: "A cavity is a hole in a tooth caused by decay, often from sugar." },
            { q: "What can help you sleep better?", options: ["Turning off screens before bed", "Drinking soda at night", "Going to bed at a different time each night", "Keeping bright lights on"], answer: 0, explain: "Turning off screens helps your brain get ready for sleep." },
            { q: "How often do many Americans visit the dentist?", options: ["About every six months", "Once in a lifetime", "Every day", "Never"], answer: 0, explain: "A checkup about every six months catches problems early." }
          ] }
      ]},
      { title: "Food, Safety, and Play", lessons: [
        { id: "health-el-3", title: "The Food Groups and MyPlate", minutes: 9, objective: "By the end, you can name the food groups and use the MyPlate guide to build a healthy meal.",
          body: `<p>Food gives your body energy to run, learn, and grow. To stay healthy, you should eat different kinds of food. In the United States, schools teach a simple picture called MyPlate. It shows a plate divided into four parts, plus a small circle for dairy.</p>
<p>The five food groups are fruits, vegetables, grains, protein, and dairy. Fruits are sweet foods like apples, oranges, and bananas. Vegetables are plants like carrots, broccoli, and spinach. Grains include bread, rice, and pasta; whole grains are the healthiest. Protein helps build muscles and comes from meat, fish, beans, eggs, and nuts. Dairy includes milk, cheese, and yogurt, which help build strong bones.</p>
<p>On the MyPlate guide, half of your plate should be fruits and vegetables. The other half is grains and protein. A glass of milk or another dairy food sits on the side. Drinking water is better than sugary drinks.</p>
<p>Try to "eat the rainbow," which means choosing foods of many colors. Each color gives your body different vitamins. Sweets and chips are sometimes foods, which means you can enjoy them once in a while, but not every day.</p>`,
          terms: [
            { term: "food group", def: "A category of foods that give the body similar nutrients." },
            { term: "MyPlate", def: "A US guide showing how to fill a plate with healthy foods." },
            { term: "protein", def: "A nutrient that builds muscles, found in meat, beans, and eggs." },
            { term: "dairy", def: "Foods made from milk, like cheese and yogurt." },
            { term: "grain", def: "Food made from wheat, rice, or other plants, like bread and pasta." },
            { term: "vitamin", def: "A substance in food that keeps the body healthy." }
          ],
          quiz: [
            { q: "How much of your plate should be fruits and vegetables?", options: ["Half", "None", "All of it", "A tiny corner"], answer: 0, explain: "MyPlate says half the plate should be fruits and vegetables." },
            { q: "Which food is a good source of protein?", options: ["Beans", "Soda", "Candy", "Chips"], answer: 0, explain: "Beans, like meat and eggs, are rich in protein." },
            { q: "What does dairy help build?", options: ["Strong bones", "Cavities only", "Nothing at all", "Bigger feet"], answer: 0, explain: "Dairy foods give calcium that helps build strong bones." },
            { q: "What does 'eat the rainbow' mean?", options: ["Choose foods of many colors", "Only eat candy", "Eat just one color", "Skip vegetables"], answer: 0, explain: "Eating many colors gives the body different vitamins." }
          ] },
        { id: "health-el-4", title: "Staying Safe: 911, Streets, and Strangers", minutes: 8, objective: "By the end, you can explain how to call for help, cross the street safely, and stay safe around strangers.",
          body: `<p>Knowing how to stay safe helps you and your family. In the United States, the emergency phone number is 911. Call 911 if there is a fire, if someone is badly hurt, or if you are in danger. When you call, stay calm. Tell the person your name, where you are, and what is wrong. Do not hang up until they tell you it is okay. Only call 911 for real emergencies, not for jokes.</p>
<p>Crossing the street safely is important. Always cross at a corner or a crosswalk. Stop at the edge of the sidewalk. Look left, then right, then left again. Listen for cars. When it is clear, walk, do not run, across the street. If there is a traffic light, wait for the walk signal. Make eye contact with drivers so they see you.</p>
<p>A stranger is someone you do not know. Most people are kind, but it is smart to be careful. Do not go anywhere with a stranger or take gifts from one. If a stranger makes you feel scared or uncomfortable, walk away and find a trusted adult, such as a parent, teacher, or police officer. Pick a safe word with your family that only trusted people know.</p>`,
          terms: [
            { term: "emergency", def: "A sudden, dangerous situation that needs help right away." },
            { term: "911", def: "The phone number in the US to call for police, fire, or medical help." },
            { term: "crosswalk", def: "The marked path where people safely cross the street." },
            { term: "stranger", def: "A person you do not know." },
            { term: "trusted adult", def: "A grown-up you know and can ask for help, like a parent or teacher." },
            { term: "safe word", def: "A secret word your family uses to know who is safe." }
          ],
          quiz: [
            { q: "What number do you call in an emergency in the US?", options: ["911", "411", "123", "611"], answer: 0, explain: "911 reaches police, fire, and medical help in the United States." },
            { q: "How should you look before crossing the street?", options: ["Left, right, then left again", "Only down", "With your eyes closed", "Behind you only"], answer: 0, explain: "Looking left, right, then left again checks for cars from all directions." },
            { q: "What should you do if a stranger makes you feel scared?", options: ["Walk away and find a trusted adult", "Go with them", "Take their gift", "Keep it a secret"], answer: 0, explain: "Walking to a trusted adult keeps you safe in an uncomfortable situation." },
            { q: "When should you call 911?", options: ["Only for real emergencies", "As a joke", "To ask the time", "To order food"], answer: 0, explain: "911 is only for true emergencies like fire, danger, or injury." }
          ] },
        { id: "health-el-5", title: "Moving Your Body and Playground Games", minutes: 8, objective: "By the end, you can explain why exercise matters and name common American playground games.",
          body: `<p>Your body is made to move. Exercise, or physical activity, makes your heart, muscles, and bones strong. It also helps you feel happy and sleep better. Children should be active for about 60 minutes every day. Activity does not have to be boring; playing games is exercise too.</p>
<p>Before you play hard, it is good to warm up with easy movements like stretching or jogging in place. This helps your body get ready and prevents injuries. After playing, you can cool down by walking slowly and stretching again.</p>
<p>On American playgrounds, children play many fun games. In tag, one person is "it" and tries to touch others, who then become "it." In hide-and-seek, one person counts while others hide. Jump rope, hopscotch, and four square are also popular. Many schools have a time called recess, when students go outside to play and rest their minds between lessons.</p>
<p>When you play, remember to take turns, share, and follow the rules. Being a good sport means playing fair and being kind whether you win or lose. Drinking water during and after play keeps your body cool and healthy. Moving every day is one of the best habits for a strong, happy life.</p>`,
          terms: [
            { term: "exercise", def: "Physical activity that makes the body stronger." },
            { term: "warm up", def: "Easy movement done before exercise to get the body ready." },
            { term: "recess", def: "A break at school when children go outside to play." },
            { term: "tag", def: "A chasing game where one person who is 'it' tries to touch others." },
            { term: "good sport", def: "Someone who plays fair and is kind when winning or losing." },
            { term: "injury", def: "Harm or hurt to the body, like a scrape or a sprain." }
          ],
          quiz: [
            { q: "How many minutes a day should children be active?", options: ["About 60 minutes", "About 5 minutes", "Zero minutes", "All day with no rest"], answer: 0, explain: "Children should get about 60 minutes of activity each day." },
            { q: "Why do you warm up before playing hard?", options: ["To get the body ready and prevent injuries", "To make games boring", "To get tired faster", "There is no reason"], answer: 0, explain: "Warming up prepares your body and helps prevent injuries." },
            { q: "In the game of tag, what does the person who is 'it' do?", options: ["Tries to touch others", "Hides", "Counts to ten", "Jumps rope"], answer: 0, explain: "The person who is 'it' chases and tries to touch others." },
            { q: "What does being a good sport mean?", options: ["Playing fair and being kind win or lose", "Cheating to win", "Quitting when losing", "Yelling at others"], answer: 0, explain: "A good sport plays fairly and stays kind regardless of the result." }
          ] }
      ]}
    ]},
    { stage: "middle", grades: "6–8", units: [
      { title: "Nutrition, the Body, and Growing Up", lessons: [
        { id: "health-ms-1", title: "Reading Nutrition Labels", minutes: 10, objective: "By the end, you can read a Nutrition Facts label and make healthier food choices.",
          body: `<p>In the United States, packaged foods must have a Nutrition Facts label. Learning to read it helps you choose healthier foods and avoid eating too much sugar, salt, or fat. The label looks confusing at first, but each part has a clear meaning.</p>
<p>Start at the top with the serving size. This tells you how much one serving is, for example, one cup. All the numbers below are for one serving. If you eat two servings, you must double the numbers. Just below is calories, the amount of energy in one serving.</p>
<p>Next come the nutrients. Some you should limit: saturated fat, sodium (salt), and added sugars. Too much of these can harm your heart and health over time. Other nutrients are good to get more of, like dietary fiber, vitamins, and minerals such as calcium and iron. On the right, the Percent Daily Value, written as %DV, shows whether a serving has a little or a lot of a nutrient. As a rule, 5% or less is low and 20% or more is high.</p>
<p>Check the ingredients list too. Ingredients are listed from most to least. If sugar is near the top, the food has a lot of sugar. Comparing labels on two products helps you pick the better choice.</p>`,
          terms: [
            { term: "Nutrition Facts label", def: "The chart on US packaged food showing its nutrients." },
            { term: "serving size", def: "The amount of food the label's numbers describe." },
            { term: "calorie", def: "A unit that measures the energy in food." },
            { term: "sodium", def: "The scientific word for salt, which should be limited." },
            { term: "%DV", def: "Percent Daily Value, showing if a serving has a little or a lot of a nutrient." },
            { term: "ingredient", def: "One of the items used to make a food, listed by amount." }
          ],
          quiz: [
            { q: "Where should you start when reading a label?", options: ["The serving size", "The bottom", "The brand name", "The price"], answer: 0, explain: "The serving size tells you what the other numbers refer to." },
            { q: "A %DV of 20% or more means the food has:", options: ["A lot of that nutrient", "None of that nutrient", "Only sugar", "No calories"], answer: 0, explain: "20% or more Daily Value is considered high for a nutrient." },
            { q: "Which nutrient should you limit?", options: ["Sodium", "Fiber", "Calcium", "Iron"], answer: 0, explain: "Too much sodium can harm the heart, so it should be limited." },
            { q: "How are ingredients listed?", options: ["From most to least", "Alphabetically", "From least to most", "In random order"], answer: 0, explain: "Ingredients are listed in order from the largest amount to the smallest." }
          ] },
        { id: "health-ms-2", title: "Body Systems and Puberty Basics", minutes: 10, objective: "By the end, you can name major body systems and describe the basic changes of puberty.",
          body: `<p>Your body is made of systems that work together. The skeletal system is your bones, which give your body shape and protect organs. The muscular system lets you move. The circulatory system is your heart and blood vessels, which carry blood and oxygen everywhere. The respiratory system is your lungs, which take in oxygen and let out carbon dioxide. The digestive system breaks down food into energy. The nervous system, led by the brain, sends messages all over the body.</p>
<p>During the teenage years, the body goes through puberty. Puberty is a normal stage when a child's body grows into an adult body. It is controlled by chemicals called hormones. Puberty happens at different ages for different people, usually between about 9 and 16. There is no single "right" time, and everyone changes at their own pace.</p>
<p>During puberty, people grow taller and gain weight. Hair grows in new places. Skin may get oily, and pimples, called acne, can appear. Voices may change, especially in boys. Emotions can feel stronger and change quickly. These changes are healthy and natural. Good hygiene, like daily washing and using deodorant, helps you feel clean and confident. If you have questions, a parent, school nurse, or doctor can help.</p>`,
          terms: [
            { term: "body system", def: "A group of organs that work together to do a job." },
            { term: "circulatory system", def: "The heart and blood vessels that move blood through the body." },
            { term: "respiratory system", def: "The lungs and airways used for breathing." },
            { term: "puberty", def: "The stage when a child's body grows into an adult body." },
            { term: "hormone", def: "A body chemical that controls growth and changes." },
            { term: "acne", def: "Pimples on the skin, common during puberty." }
          ],
          quiz: [
            { q: "Which system carries blood and oxygen through the body?", options: ["Circulatory system", "Skeletal system", "Digestive system", "Nervous system"], answer: 0, explain: "The circulatory system, the heart and blood vessels, moves blood and oxygen." },
            { q: "What controls the changes of puberty?", options: ["Hormones", "Bones", "Soap", "Calories"], answer: 0, explain: "Hormones are the chemicals that drive puberty changes." },
            { q: "When does puberty usually happen?", options: ["Between about 9 and 16", "At age 2", "At age 40", "Never"], answer: 0, explain: "Puberty commonly happens between about ages 9 and 16, varying by person." },
            { q: "Which statement about puberty is true?", options: ["Everyone changes at their own pace", "Everyone changes on the same day", "Only boys go through it", "It lasts one week"], answer: 0, explain: "Puberty is normal and happens at different times for each person." }
          ] }
      ]},
      { title: "Mental Health, Fitness, and American Sports", lessons: [
        { id: "health-ms-3", title: "Feelings, Stress, and Kindness", minutes: 9, objective: "By the end, you can name emotions, use healthy ways to handle stress, and explain why kindness matters.",
          body: `<p>Mental and emotional health is just as important as physical health. Everyone has feelings, such as happy, sad, angry, scared, and excited. All feelings are normal. The key is learning healthy ways to handle them. The first step is naming what you feel. You might say, "I feel nervous about my test."</p>
<p>Stress is the feeling of pressure or worry. A little stress is normal, like before a big game. Too much stress can make you tired, grumpy, or unable to focus. Healthy ways to lower stress include taking slow deep breaths, exercising, talking to someone you trust, getting enough sleep, and taking breaks. Unhealthy ways, like yelling at people or ignoring problems, usually make things worse.</p>
<p>It also helps to have a growth mindset. This means believing you can improve with practice, instead of thinking you are simply "bad" at something. Mistakes are part of learning.</p>
<p>Kindness improves the mood of others and your own. Simple acts like saying thank you, including someone who is alone, or listening to a friend make a big difference. Bullying, which is hurting others on purpose, is never okay. If you see bullying, tell a trusted adult. Caring for your mind and treating others well builds a happier life and community.</p>`,
          terms: [
            { term: "emotion", def: "A feeling such as happiness, sadness, or anger." },
            { term: "stress", def: "The feeling of pressure or worry." },
            { term: "deep breathing", def: "Slow, full breaths used to calm the body and mind." },
            { term: "growth mindset", def: "The belief that you can improve through effort and practice." },
            { term: "bullying", def: "Hurting or scaring someone on purpose, often again and again." },
            { term: "kindness", def: "Being friendly, caring, and helpful to others." }
          ],
          quiz: [
            { q: "What is a healthy way to handle stress?", options: ["Taking slow deep breaths", "Yelling at others", "Ignoring all problems", "Skipping sleep"], answer: 0, explain: "Deep breathing calms the body and is a healthy stress tool." },
            { q: "What is the first step in handling a feeling?", options: ["Naming what you feel", "Hiding it forever", "Blaming others", "Eating candy"], answer: 0, explain: "Naming the emotion helps you understand and manage it." },
            { q: "What does a growth mindset mean?", options: ["You can improve with practice", "You are born good or bad at things", "Mistakes are failures", "Effort does not matter"], answer: 0, explain: "A growth mindset is believing effort and practice lead to improvement." },
            { q: "What should you do if you see bullying?", options: ["Tell a trusted adult", "Join in", "Laugh at it", "Keep it secret"], answer: 0, explain: "Telling a trusted adult helps stop bullying and keeps people safe." }
          ] },
        { id: "health-ms-4", title: "Fitness Components and Team Sports", minutes: 10, objective: "By the end, you can describe the parts of fitness and explain the basic rules of American football, baseball, and basketball.",
          body: `<p>Fitness has several parts. Cardiovascular endurance is how long you can run or move without getting too tired. Muscular strength is how much force your muscles can make. Flexibility is how far you can stretch and bend. Building all of these keeps your body healthy. Team sports are a fun way to stay fit and make friends.</p>
<p>American football is played by two teams of 11 players on a long field with goal lines at each end. The team with the ball, the offense, tries to move it toward the other end to score a touchdown, worth 6 points. They can run with the ball or throw it. The defense tries to stop them. After a touchdown, a team can kick the ball through the tall goalposts for an extra point.</p>
<p>Baseball is played by two teams of nine. A pitcher throws the ball, and a batter tries to hit it with a bat. After hitting, the batter runs around four bases. Touching all four bases scores a run. Three strikes, or missed swings, and the batter is out. Three outs end a team's turn at bat.</p>
<p>Basketball has two teams of five. Players bounce, or dribble, the ball and try to throw it through a hoop, called a basket. A regular basket is worth 2 points, and a shot from far away is worth 3.</p>`,
          terms: [
            { term: "cardiovascular endurance", def: "The ability to keep moving for a long time without tiring." },
            { term: "flexibility", def: "How far your body can stretch and bend." },
            { term: "touchdown", def: "Scoring in football by getting the ball to the end zone, worth 6 points." },
            { term: "pitcher", def: "The baseball player who throws the ball to the batter." },
            { term: "run", def: "A point in baseball scored by touching all four bases." },
            { term: "dribble", def: "Bouncing the basketball while moving in basketball." }
          ],
          quiz: [
            { q: "How many points is a touchdown worth?", options: ["6", "1", "3", "10"], answer: 0, explain: "A touchdown in American football is worth 6 points." },
            { q: "In baseball, how many strikes make a batter out?", options: ["Three", "One", "Five", "Ten"], answer: 0, explain: "Three strikes and the batter is out." },
            { q: "How many players are on a basketball team on the court?", options: ["Five", "Eleven", "Nine", "Two"], answer: 0, explain: "Each basketball team has five players on the court." },
            { q: "What is cardiovascular endurance?", options: ["Moving a long time without tiring", "How far you can stretch", "How loud you can shout", "How tall you are"], answer: 0, explain: "Cardiovascular endurance is the ability to keep moving without getting too tired." }
          ] }
      ]}
    ]},
    { stage: "high", grades: "9–12", units: [
      { title: "First Aid, Safety, and Healthy Choices", lessons: [
        { id: "health-hs-1", title: "First Aid and CPR Basics", minutes: 11, objective: "By the end, you can describe basic first aid steps and the idea of CPR in an emergency.",
          body: `<p>First aid is the help you give right away when someone is hurt or sick, before professional help arrives. Knowing basic first aid can save a life. The first rule is to stay calm and check that the area is safe before you help. Then call 911 or ask someone nearby to call.</p>
<p>For a small cut, wash your hands, then clean the wound with water and press a clean cloth on it to stop the bleeding. Cover it with a bandage. For a burn, run cool water over it for several minutes and do not use ice or butter. For a sprained ankle, remember RICE: Rest, Ice, Compression, and Elevation, which means resting it, putting ice on it, wrapping it, and raising it.</p>
<p>CPR, which stands for cardiopulmonary resuscitation, is used when a person's heart stops and they are not breathing. The rescuer pushes hard and fast on the center of the chest to keep blood moving until help arrives. A common rhythm is about 100 to 120 pushes per minute, the beat of the song "Stayin' Alive." Many people also use an AED, an automated machine that can restart the heart and gives spoken instructions. Taking a certified first aid and CPR class teaches these skills safely. Many American workplaces and schools offer them.</p>`,
          terms: [
            { term: "first aid", def: "Immediate help given to a hurt or sick person before professionals arrive." },
            { term: "wound", def: "An injury where the skin is cut or broken." },
            { term: "RICE", def: "Rest, Ice, Compression, Elevation, a method for treating sprains." },
            { term: "CPR", def: "Chest pushes and rescue breaths used when the heart stops." },
            { term: "AED", def: "A machine that can restart a stopped heart with instructions." },
            { term: "certified", def: "Officially trained and approved after passing a class or test." }
          ],
          quiz: [
            { q: "What should you do first before helping in an emergency?", options: ["Stay calm and check the area is safe", "Run away", "Push on the chest right away", "Give them food"], answer: 0, explain: "Checking that the scene is safe protects you and the victim." },
            { q: "What does RICE stand for?", options: ["Rest, Ice, Compression, Elevation", "Run, Idle, Cook, Eat", "Read, Improve, Care, End", "Rest, Inhale, Climb, Exit"], answer: 0, explain: "RICE is Rest, Ice, Compression, and Elevation for sprains." },
            { q: "When is CPR used?", options: ["When the heart stops and breathing stops", "For a small cut", "For a headache", "For tiredness"], answer: 0, explain: "CPR is used when a person's heart and breathing have stopped." },
            { q: "How should you treat a small burn?", options: ["Run cool water over it", "Put butter on it", "Cover it with ice for an hour", "Ignore it"], answer: 0, explain: "Cool water soothes a burn; ice and butter can cause more harm." }
          ] },
        { id: "health-hs-2", title: "Substance Awareness", minutes: 10, objective: "By the end, you can explain the risks of alcohol, tobacco, and other drugs and how to refuse them.",
          body: `<p>Substances like alcohol, tobacco, and drugs can harm the body and mind. Understanding the risks helps you make safe choices. In the United States, you must be 21 to buy alcohol and tobacco or vaping products legally.</p>
<p>Alcohol slows the brain and body. Too much can cause poor judgment, accidents, and over time damage the liver and brain. Driving after drinking is illegal and very dangerous; this is called a DUI, driving under the influence. Tobacco and vaping deliver nicotine, a chemical that is highly addictive. Smoking causes lung disease and cancer. Vaping is not safe either and can harm the lungs and the developing teenage brain.</p>
<p>Other drugs, including misused prescription pills and illegal drugs, can quickly lead to addiction, which is when a person cannot stop using even when it hurts them. Some drugs can cause an overdose, which can be deadly.</p>
<p>You have the right to say no. Refusal skills include saying no clearly, giving a reason such as "No thanks, I have practice tomorrow," changing the subject, or simply leaving. Choosing healthy friends helps. If you or someone you know struggles with substances, help is available from a doctor, counselor, or a free helpline. Asking for help is a sign of strength, not weakness.</p>`,
          terms: [
            { term: "substance", def: "A drug or product like alcohol or tobacco that affects the body." },
            { term: "nicotine", def: "An addictive chemical in tobacco and many vapes." },
            { term: "addiction", def: "A condition where a person cannot stop using something harmful." },
            { term: "DUI", def: "Driving under the influence of alcohol or drugs, which is illegal." },
            { term: "overdose", def: "Taking too much of a drug, which can be deadly." },
            { term: "refusal skills", def: "Ways to clearly and safely say no to something." }
          ],
          quiz: [
            { q: "What is the legal age to buy alcohol and tobacco in the US?", options: ["21", "16", "18", "12"], answer: 0, explain: "In the United States you must be 21 to buy alcohol and tobacco." },
            { q: "What does DUI mean?", options: ["Driving under the influence", "Daily useful information", "Drink until ill", "Drive until idle"], answer: 0, explain: "DUI means driving under the influence, which is illegal and dangerous." },
            { q: "What makes tobacco and many vapes addictive?", options: ["Nicotine", "Water", "Vitamins", "Fiber"], answer: 0, explain: "Nicotine is the highly addictive chemical in tobacco and many vapes." },
            { q: "What is a good refusal skill?", options: ["Say no clearly and give a reason", "Always say yes", "Stay silent and join in", "Hide the problem"], answer: 0, explain: "Saying no clearly with a reason is an effective refusal skill." }
          ] }
      ]},
      { title: "Lifelong Health and the US System", lessons: [
        { id: "health-hs-3", title: "Mental Health and Stress Management", minutes: 10, objective: "By the end, you can recognize signs of stress and depression and name healthy coping strategies and resources.",
          body: `<p>Mental health is how we think, feel, and handle life. Just like the body, the mind can have good days and hard days, and sometimes it needs care or treatment. There is no shame in struggling or in asking for help.</p>
<p>Stress is normal, but long-lasting stress can affect sleep, appetite, and mood. Anxiety is strong worry or fear that is hard to control. Depression is more than feeling sad; it is a lasting low mood that takes away energy and interest in things a person used to enjoy. These are real health conditions, not weakness, and they can be treated.</p>
<p>Healthy coping strategies help manage stress and protect mental health. These include regular exercise, enough sleep, healthy eating, talking with friends and family, journaling, and relaxation through deep breathing or being outside. Setting realistic goals and managing time also reduce pressure.</p>
<p>When problems feel too big, professional help works. A counselor, therapist, or doctor can listen and offer treatment such as talk therapy or, when needed, medicine. Schools often have counselors. In the United States, you can call or text 988, the Suicide and Crisis Lifeline, anytime for free, private help. If someone is in immediate danger, call 911. Checking on friends and speaking openly about mental health helps everyone.</p>`,
          terms: [
            { term: "mental health", def: "How we think, feel, and cope with daily life." },
            { term: "anxiety", def: "Strong worry or fear that is hard to control." },
            { term: "depression", def: "A lasting low mood that drains energy and interest." },
            { term: "coping strategy", def: "A healthy way to deal with stress or hard feelings." },
            { term: "therapist", def: "A trained professional who helps people with mental health." },
            { term: "988", def: "The US Suicide and Crisis Lifeline, free and available anytime." }
          ],
          quiz: [
            { q: "What number is the US Suicide and Crisis Lifeline?", options: ["988", "911", "411", "211"], answer: 0, explain: "988 reaches free, private mental health crisis support anytime." },
            { q: "How is depression best described?", options: ["A lasting low mood that drains energy", "A short bad mood for an hour", "A type of exercise", "A kind of food"], answer: 0, explain: "Depression is a lasting low mood, a real and treatable condition." },
            { q: "Which is a healthy coping strategy?", options: ["Regular exercise and talking to others", "Ignoring all feelings", "Skipping sleep on purpose", "Avoiding everyone"], answer: 0, explain: "Exercise and connecting with others are healthy ways to cope." },
            { q: "What is true about asking for mental health help?", options: ["It is a sign of strength, not weakness", "It means you failed", "Only adults need it", "It never works"], answer: 0, explain: "Seeking help is healthy and a sign of strength." }
          ] },
        { id: "health-hs-4", title: "Adult Nutrition, Fitness, and the US Health System", minutes: 11, objective: "By the end, you can plan balanced adult habits and explain basic doctor visit and insurance terms.",
          body: `<p>Healthy habits matter for a whole lifetime, not just childhood. As an adult, a balanced diet includes plenty of vegetables, fruits, whole grains, lean protein, and water, while limiting added sugar, salt, and processed food. Adults should aim for at least 150 minutes of moderate exercise each week, such as brisk walking, plus strength activities twice a week. Lifelong fitness can be simple: walking, biking, swimming, or playing a sport you enjoy. Regular sleep and not smoking also protect long-term health.</p>
<p>Understanding the US health system helps you get care. A primary care doctor is your main doctor for checkups and common problems. For serious or sudden issues, you go to the emergency room, or ER. A specialist is a doctor who focuses on one area, like the heart or skin, and often needs a referral, a note from your main doctor.</p>
<p>Health insurance helps pay for care, which can be expensive in the US. A premium is the amount you pay each month to have insurance. A deductible is the amount you must pay yourself before insurance starts paying more. A copay is a fixed fee you pay at a visit, such as 25 dollars. A network is the group of doctors your plan works with; staying in network costs less. Always ask questions and keep your insurance card with you.</p>`,
          terms: [
            { term: "primary care doctor", def: "Your main doctor for checkups and common health needs." },
            { term: "specialist", def: "A doctor focused on one area, such as the heart or skin." },
            { term: "premium", def: "The monthly amount you pay to have health insurance." },
            { term: "deductible", def: "The amount you pay yourself before insurance pays more." },
            { term: "copay", def: "A fixed fee you pay at a medical visit." },
            { term: "referral", def: "A note from your doctor allowing you to see a specialist." }
          ],
          quiz: [
            { q: "How much moderate exercise should adults aim for weekly?", options: ["At least 150 minutes", "10 minutes", "No exercise", "12 hours daily"], answer: 0, explain: "Adults should get at least 150 minutes of moderate activity per week." },
            { q: "What is a premium?", options: ["The monthly cost of insurance", "A free doctor visit", "A type of food", "A fixed fee at a visit"], answer: 0, explain: "A premium is the monthly amount paid to have insurance." },
            { q: "Who is your main doctor for checkups?", options: ["Primary care doctor", "Specialist only", "The ER nurse", "The pharmacist"], answer: 0, explain: "A primary care doctor handles checkups and common problems." },
            { q: "What is a copay?", options: ["A fixed fee paid at a visit", "The monthly premium", "A doctor's referral", "A type of insurance card"], answer: 0, explain: "A copay is a fixed fee, like 25 dollars, paid at a medical visit." }
          ] },
        { id: "health-hs-5", title: "American Sports Culture", minutes: 9, objective: "By the end, you can describe major US sports events and use them in everyday conversation.",
          body: `<p>Sports are a huge part of American culture and a common topic in small talk at work, school, and family gatherings. Knowing the big events helps you join conversations and feel connected.</p>
<p>The Super Bowl is the championship game of the National Football League, the NFL. It is played on a Sunday in early February and is the most watched event on American television. Many people host Super Bowl parties with food like wings and chips, and even those who do not follow football watch the famous commercials and the halftime music show. People often ask, "Who are you rooting for?"</p>
<p>The World Series is the championship of Major League Baseball, the MLB, played in October. It is a best-of-seven series, meaning the first team to win four games wins the title. Baseball is sometimes called "America's pastime" because it has been popular for over a century.</p>
<p>March Madness is the men's and women's college basketball tournament held in spring. Many fans fill out a bracket, a chart predicting which teams will win each round, and compete with friends and coworkers. A surprise win by a weaker team is called an upset. Other big events include the NBA Finals in basketball and the Stanley Cup in hockey. Talking about your favorite team is a friendly, easy way to connect with Americans.</p>`,
          terms: [
            { term: "Super Bowl", def: "The championship game of the NFL, played in early February." },
            { term: "World Series", def: "The championship of Major League Baseball, played in October." },
            { term: "March Madness", def: "The US college basketball tournament held in spring." },
            { term: "bracket", def: "A chart used to predict tournament winners." },
            { term: "upset", def: "A surprise win by a team expected to lose." },
            { term: "rooting for", def: "Supporting or cheering for a team or person." }
          ],
          quiz: [
            { q: "What is the Super Bowl?", options: ["The NFL championship game", "A baseball tournament", "A cooking show", "A college exam"], answer: 0, explain: "The Super Bowl is the championship game of the NFL." },
            { q: "When is the World Series played?", options: ["October", "February", "July", "December"], answer: 0, explain: "The World Series, baseball's championship, is played in October." },
            { q: "What is a 'bracket' in March Madness?", options: ["A chart predicting tournament winners", "A type of ball", "A football play", "A kind of food"], answer: 0, explain: "A bracket is a chart fans use to predict which teams will win." },
            { q: "What does 'Who are you rooting for?' mean?", options: ["Which team do you support?", "What do you want to eat?", "Where do you live?", "What time is it?"], answer: 0, explain: "Rooting for a team means supporting or cheering for it." }
          ] }
      ]}
    ]}
  ]
});
