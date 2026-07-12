window.HR_DATA = window.HR_DATA || { subjects: [] };
window.HR_DATA.subjects.push({
  key: "math",
  name: "Mathematics",
  icon: "🔢",
  color: "#6366f1",
  blurb: "From counting to calculus — the full American math sequence.",
  why: "Math is a universal language; knowing the US course names and notation helps in school, work, and daily money matters.",
  stages: [
    {
      stage: "elementary",
      grades: "K–5",
      units: [
        {
          title: "Place Value & Whole-Number Operations",
          lessons: [
            {
              id: "math-el-1",
              title: "Place Value and Reading Big Numbers",
              minutes: 8,
              objective: "By the end, you can read the value of each digit in a multi-digit number and write numbers in expanded form.",
              body: `<h4>What place value means</h4>
<p>In American elementary school, one of the first big ideas is <strong>place value</strong>. The same digit means a different amount depending on where it sits. In the number 4,827, the digit 4 is not just 4 — it means 4 thousands.</p>
<p>Reading from the right, the places are: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands, millions. A comma is placed every three digits to make large numbers easier to read.</p>
<h4>Worked example</h4>
<p>Take the number 4,827. Break it apart by place:</p>
<ul>
<li>4 is in the thousands place, so it means 4 x 1,000 = 4,000</li>
<li>8 is in the hundreds place, so it means 8 x 100 = 800</li>
<li>2 is in the tens place, so it means 2 x 10 = 20</li>
<li>7 is in the ones place, so it means 7 x 1 = 7</li>
</ul>
<p>Written in <strong>expanded form</strong>: 4,000 + 800 + 20 + 7 = 4,827. We read it out loud as "four thousand, eight hundred twenty-seven."</p>
<h4>Why this matters</h4>
<p>Place value is the foundation for adding, subtracting, and lining up numbers correctly. When you add 4,827 + 100, only the hundreds digit changes: you get 4,927. Understanding place value also helps with money, since dollars and cents follow the same base-ten system.</p>`,
              terms: [
                { term: "Digit", def: "Any single number symbol from 0 to 9." },
                { term: "Place value", def: "The value a digit has because of its position in a number." },
                { term: "Expanded form", def: "Writing a number as the sum of the value of each digit." },
                { term: "Ones place", def: "The rightmost position in a whole number." },
                { term: "Thousands place", def: "The fourth position from the right, worth 1,000 per unit." }
              ],
              quiz: [
                { q: "In the number 3,562, what is the value of the digit 5?", options: ["5", "50", "500", "5,000"], answer: 2, explain: "The 5 sits in the hundreds place, so it means 5 x 100 = 500." },
                { q: "What is 6,000 + 300 + 40 + 9 in standard form?", options: ["6,349", "6,439", "60,349", "6,034"], answer: 0, explain: "Adding each place gives 6,349." },
                { q: "How do you read 2,108 out loud?", options: ["Two hundred eighteen", "Two thousand, one hundred eight", "Twenty-one thousand eight", "Two thousand eighteen"], answer: 1, explain: "2 thousands, 1 hundred, 0 tens, 8 ones is two thousand, one hundred eight." },
                { q: "Which digit is in the tens place in 7,294?", options: ["7", "2", "9", "4"], answer: 2, explain: "Counting from the right, 9 is the second digit, the tens place." }
              ]
            },
            {
              id: "math-el-2",
              title: "Adding and Subtracting with Regrouping",
              minutes: 9,
              objective: "By the end, you can add and subtract multi-digit numbers using carrying and borrowing.",
              body: `<h4>Lining up the columns</h4>
<p>To add or subtract big numbers, American students stack them so the place-value columns line up: ones under ones, tens under tens, and so on. Then you work one column at a time, starting from the right.</p>
<h4>Addition with carrying</h4>
<p>Add 367 + 258.</p>
<ul>
<li>Ones: 7 + 8 = 15. Write the 5, <strong>carry</strong> the 1 to the tens.</li>
<li>Tens: 6 + 5 + 1 (carried) = 12. Write the 2, carry the 1 to the hundreds.</li>
<li>Hundreds: 3 + 2 + 1 (carried) = 6.</li>
</ul>
<p>The answer is 625. Carrying just means a column overflowed past 9, so the extra ten moves left.</p>
<h4>Subtraction with borrowing</h4>
<p>Subtract 503 - 178.</p>
<ul>
<li>Ones: 3 - 8 cannot be done, so <strong>borrow</strong>. The tens digit is 0, so borrow from the hundreds first. 503 becomes 4 hundreds, 10 tens, then 4 hundreds, 9 tens, 13 ones.</li>
<li>Ones: 13 - 8 = 5.</li>
<li>Tens: 9 - 7 = 2.</li>
<li>Hundreds: 4 - 1 = 3.</li>
</ul>
<p>The answer is 325. You can always check subtraction by adding back: 325 + 178 = 503.</p>`,
              terms: [
                { term: "Regrouping", def: "Moving amounts between place-value columns; includes carrying and borrowing." },
                { term: "Carry", def: "Moving a ten into the next column when a sum is more than 9." },
                { term: "Borrow", def: "Taking ten from the next-higher column when a digit is too small to subtract." },
                { term: "Sum", def: "The result of adding numbers." },
                { term: "Difference", def: "The result of subtracting one number from another." }
              ],
              quiz: [
                { q: "What is 367 + 258?", options: ["515", "625", "615", "525"], answer: 1, explain: "Adding with carrying gives 625." },
                { q: "What is 503 - 178?", options: ["335", "325", "435", "315"], answer: 1, explain: "Borrowing across the zero gives 325." },
                { q: "When a column adds up to 15, what do you carry?", options: ["5", "1", "15", "0"], answer: 1, explain: "You write the 5 and carry the 1 ten to the next column." },
                { q: "How can you check that 325 - 178 = 147 is correct?", options: ["Add 147 + 178", "Subtract 178 - 147", "Add 325 + 147", "Multiply 147 x 178"], answer: 0, explain: "Adding the difference and the subtracted number should return the start: 147 + 178 = 325." }
              ]
            }
          ]
        },
        {
          title: "Fractions, Decimals & Multiplication Facts",
          lessons: [
            {
              id: "math-el-3",
              title: "Understanding Fractions",
              minutes: 9,
              objective: "By the end, you can identify the numerator and denominator and compare simple fractions.",
              body: `<h4>What a fraction shows</h4>
<p>A <strong>fraction</strong> describes part of a whole. It is written with two numbers and a line, like 3/4. The bottom number, the <strong>denominator</strong>, tells how many equal parts the whole is split into. The top number, the <strong>numerator</strong>, tells how many of those parts you have.</p>
<p>If a pizza is cut into 4 equal slices and you eat 3, you ate 3/4 of the pizza.</p>
<h4>Comparing fractions</h4>
<p>When two fractions have the <strong>same denominator</strong>, just compare the numerators. For example, 3/8 is less than 5/8 because 3 is less than 5.</p>
<p>When the denominators differ, think about the size of the pieces. 1/2 is bigger than 1/4, because cutting a whole into 2 parts makes bigger pieces than cutting it into 4 parts. So fewer cuts means larger pieces.</p>
<h4>Equivalent fractions</h4>
<p>Different fractions can name the same amount. 1/2 equals 2/4 equals 4/8. You get an <strong>equivalent fraction</strong> by multiplying the top and bottom by the same number. Multiply 1/2 by 2/2 and you get 2/4.</p>
<ul>
<li>1/2 = 2/4 (multiply top and bottom by 2)</li>
<li>1/3 = 3/9 (multiply top and bottom by 3)</li>
</ul>
<p>This skill becomes essential later when adding fractions, because you first rewrite them with a common denominator.</p>`,
              terms: [
                { term: "Fraction", def: "A number showing part of a whole, written as numerator over denominator." },
                { term: "Numerator", def: "The top number, counting how many parts you have." },
                { term: "Denominator", def: "The bottom number, showing how many equal parts the whole is divided into." },
                { term: "Equivalent fractions", def: "Different fractions that represent the same amount, like 1/2 and 2/4." },
                { term: "Whole", def: "The complete object or amount being divided." }
              ],
              quiz: [
                { q: "In the fraction 3/5, what is the denominator?", options: ["3", "5", "8", "2"], answer: 1, explain: "The denominator is the bottom number, 5." },
                { q: "Which fraction is larger?", options: ["1/4", "1/2", "They are equal", "Cannot tell"], answer: 1, explain: "Splitting a whole into 2 parts makes bigger pieces than into 4, so 1/2 is larger." },
                { q: "Which fraction equals 1/2?", options: ["2/3", "2/4", "3/4", "1/4"], answer: 1, explain: "Multiplying 1/2 by 2/2 gives 2/4." },
                { q: "Comparing 5/8 and 3/8, which is greater?", options: ["3/8", "5/8", "Equal", "Cannot compare"], answer: 1, explain: "Same denominator, so compare numerators: 5 is greater than 3." }
              ]
            },
            {
              id: "math-el-4",
              title: "Decimals and Money",
              minutes: 8,
              objective: "By the end, you can read decimals to the hundredths place and connect them to US dollars and cents.",
              body: `<h4>Decimals extend place value</h4>
<p>A <strong>decimal point</strong> separates whole numbers from parts smaller than one. To the right of the point come the tenths place, then the hundredths place. So 0.7 means seven tenths, and 0.25 means twenty-five hundredths.</p>
<p>Decimals follow the same base-ten pattern as whole numbers, just going the other direction. 0.1 is ten times bigger than 0.01.</p>
<h4>Money is decimals</h4>
<p>US money is written with decimals. The amount $3.45 means 3 dollars and 45 cents. The first digit after the point is dimes (tenths of a dollar), and the second is pennies (hundredths of a dollar).</p>
<ul>
<li>$0.10 = one dime = one tenth of a dollar</li>
<li>$0.01 = one penny = one hundredth of a dollar</li>
<li>$0.25 = one quarter = twenty-five cents</li>
</ul>
<h4>Worked example</h4>
<p>You buy items for $2.30 and $1.45. Line up the decimal points and add:</p>
<p>2.30 + 1.45 = 3.75. So the total is $3.75. If you pay with a $5 bill, your change is 5.00 - 3.75 = $1.25, which is one dollar and a quarter.</p>
<p>Always keep the decimal points lined up when adding or subtracting money, just like lining up place-value columns.</p>`,
              terms: [
                { term: "Decimal point", def: "The dot that separates whole numbers from fractional parts." },
                { term: "Tenths place", def: "The first digit right of the decimal point, worth 1/10." },
                { term: "Hundredths place", def: "The second digit right of the decimal point, worth 1/100." },
                { term: "Cent", def: "One hundredth of a US dollar, written as $0.01." },
                { term: "Quarter", def: "A US coin worth 25 cents, or $0.25." }
              ],
              quiz: [
                { q: "What does the 5 mean in $4.59?", options: ["5 dollars", "5 dimes", "5 pennies", "5 tens"], answer: 1, explain: "The first digit after the point is tenths, here 5 dimes or 50 cents." },
                { q: "What is $2.30 + $1.45?", options: ["$3.75", "$3.85", "$4.75", "$3.65"], answer: 0, explain: "Lining up decimals and adding gives $3.75." },
                { q: "How is twenty-five cents written?", options: ["$2.50", "$0.25", "$25.00", "$0.025"], answer: 1, explain: "Twenty-five hundredths of a dollar is $0.25." },
                { q: "You pay $3.75 with a $5 bill. What is your change?", options: ["$1.25", "$2.25", "$1.75", "$1.35"], answer: 0, explain: "5.00 - 3.75 = $1.25." }
              ]
            },
            {
              id: "math-el-5",
              title: "Multiplication and Division Facts",
              minutes: 9,
              objective: "By the end, you can recall basic multiplication facts and connect multiplication to division.",
              body: `<h4>Multiplication is repeated addition</h4>
<p><strong>Multiplication</strong> is a fast way to add the same number many times. 4 x 3 means 4 groups of 3, which is 3 + 3 + 3 + 3 = 12. American students memorize the <strong>times tables</strong> up to 12 x 12, usually in grades 3 and 4.</p>
<p>Multiplication is <strong>commutative</strong>: the order does not change the answer. 4 x 3 = 12 and 3 x 4 = 12.</p>
<h4>Helpful patterns</h4>
<ul>
<li>Multiplying by 10 just adds a zero: 7 x 10 = 70.</li>
<li>Multiplying by 5 always ends in 0 or 5: 5, 10, 15, 20.</li>
<li>Anything times 1 stays the same: 9 x 1 = 9.</li>
<li>Anything times 0 is 0: 6 x 0 = 0.</li>
</ul>
<h4>Division undoes multiplication</h4>
<p><strong>Division</strong> splits a number into equal groups. Since 4 x 3 = 12, we know 12 / 3 = 4 and 12 / 4 = 3. These four facts form a <strong>fact family</strong>.</p>
<p>Worked example: You have 24 cookies to share equally among 6 children. 24 / 6 = 4, so each child gets 4 cookies. To check, multiply back: 6 x 4 = 24. Knowing your times tables makes division much faster.</p>`,
              terms: [
                { term: "Multiplication", def: "Repeated addition of equal groups, shown with x." },
                { term: "Times tables", def: "The memorized products of numbers, usually up to 12 x 12." },
                { term: "Commutative", def: "A property where order does not change the result, like 3 x 4 = 4 x 3." },
                { term: "Division", def: "Splitting a number into equal groups, shown with /." },
                { term: "Fact family", def: "A group of related multiplication and division facts using the same three numbers." }
              ],
              quiz: [
                { q: "What is 4 x 3?", options: ["7", "12", "9", "43"], answer: 1, explain: "4 groups of 3 equals 12." },
                { q: "What is 7 x 10?", options: ["17", "70", "710", "7"], answer: 1, explain: "Multiplying by 10 adds a zero, giving 70." },
                { q: "If 6 x 4 = 24, what is 24 / 6?", options: ["6", "4", "24", "8"], answer: 1, explain: "Division undoes multiplication, so 24 / 6 = 4." },
                { q: "What is 9 x 0?", options: ["9", "1", "0", "90"], answer: 2, explain: "Anything multiplied by 0 is 0." }
              ]
            }
          ]
        },
        {
          title: "Geometry & Measurement",
          lessons: [
            {
              id: "math-el-6",
              title: "Shapes, Perimeter, and Area",
              minutes: 9,
              objective: "By the end, you can name basic shapes and calculate the perimeter and area of a rectangle.",
              body: `<h4>Basic shapes</h4>
<p>A <strong>polygon</strong> is a closed shape made of straight sides. A triangle has 3 sides, a square has 4 equal sides, a rectangle has 4 sides with opposite sides equal, and a pentagon has 5 sides. A circle is not a polygon because it has no straight sides.</p>
<h4>Perimeter: the distance around</h4>
<p><strong>Perimeter</strong> is the total length around the outside of a shape. You find it by adding all the side lengths. For a rectangle 6 feet long and 4 feet wide:</p>
<p>Perimeter = 6 + 4 + 6 + 4 = 20 feet. A shortcut is 2 x (length + width) = 2 x (6 + 4) = 20 feet.</p>
<h4>Area: the space inside</h4>
<p><strong>Area</strong> measures the flat space a shape covers, counted in square units. For a rectangle, multiply length by width.</p>
<ul>
<li>Rectangle: Area = length x width</li>
<li>Square: Area = side x side</li>
</ul>
<p>For the same 6-by-4 rectangle: Area = 6 x 4 = 24 square feet. Notice that perimeter is measured in regular units (feet) but area is measured in square units (square feet), because area covers two dimensions.</p>
<p>Real example: to buy carpet for a room, you need area (square feet); to buy a fence around a yard, you need perimeter (feet).</p>`,
              terms: [
                { term: "Polygon", def: "A closed shape made only of straight sides." },
                { term: "Perimeter", def: "The total distance around the outside of a shape." },
                { term: "Area", def: "The amount of flat space inside a shape, in square units." },
                { term: "Rectangle", def: "A four-sided polygon with opposite sides equal and four right angles." },
                { term: "Square unit", def: "A unit for measuring area, such as a square foot." }
              ],
              quiz: [
                { q: "How many sides does a pentagon have?", options: ["4", "5", "6", "3"], answer: 1, explain: "A pentagon has 5 sides." },
                { q: "What is the perimeter of a 6 ft by 4 ft rectangle?", options: ["24 ft", "10 ft", "20 ft", "48 ft"], answer: 2, explain: "Adding all sides: 6 + 4 + 6 + 4 = 20 feet." },
                { q: "What is the area of a 6 ft by 4 ft rectangle?", options: ["20 sq ft", "24 sq ft", "10 sq ft", "12 sq ft"], answer: 1, explain: "Area = length x width = 6 x 4 = 24 square feet." },
                { q: "To buy a fence around a yard, which do you measure?", options: ["Area", "Perimeter", "Volume", "Weight"], answer: 1, explain: "A fence goes around the edge, which is the perimeter." }
              ]
            },
            {
              id: "math-el-7",
              title: "Measurement and Word Problems",
              minutes: 8,
              objective: "By the end, you can use US customary units and solve simple word problems with a clear plan.",
              body: `<h4>US customary units</h4>
<p>The United States mostly uses <strong>customary units</strong> rather than the metric system. The common ones are:</p>
<ul>
<li><strong>Length:</strong> 12 inches = 1 foot; 3 feet = 1 yard; 5,280 feet = 1 mile.</li>
<li><strong>Weight:</strong> 16 ounces = 1 pound; 2,000 pounds = 1 ton.</li>
<li><strong>Volume:</strong> 8 fluid ounces = 1 cup; 2 cups = 1 pint; 2 pints = 1 quart; 4 quarts = 1 gallon.</li>
</ul>
<h4>Converting units</h4>
<p>To change feet to inches, multiply by 12. So 3 feet = 3 x 12 = 36 inches. To change inches back to feet, divide by 12.</p>
<h4>A plan for word problems</h4>
<p>Word problems describe a real situation in words. A reliable plan: read carefully, find the numbers, decide the operation, solve, and check that the answer makes sense.</p>
<p>Worked example: A recipe needs 2 cups of milk, but you want to make a double batch. How many cups total? Double means times 2: 2 x 2 = 4 cups. Since 2 cups equal 1 pint, that is also 2 pints.</p>
<p>Another example: A board is 4 feet long. You cut off 18 inches. How much is left? Convert 4 feet to 48 inches, then 48 - 18 = 30 inches, which is 2 feet 6 inches.</p>`,
              terms: [
                { term: "Customary units", def: "The measurement system used in the US, including inches, pounds, and cups." },
                { term: "Foot", def: "A unit of length equal to 12 inches." },
                { term: "Pound", def: "A unit of weight equal to 16 ounces." },
                { term: "Gallon", def: "A unit of liquid volume equal to 4 quarts." },
                { term: "Conversion", def: "Changing a measurement from one unit to another." }
              ],
              quiz: [
                { q: "How many inches are in 3 feet?", options: ["30", "36", "12", "33"], answer: 1, explain: "3 feet x 12 inches per foot = 36 inches." },
                { q: "How many cups are in 1 quart?", options: ["2", "4", "8", "16"], answer: 1, explain: "1 quart = 2 pints = 4 cups." },
                { q: "A recipe needs 2 cups; you double it. How many cups?", options: ["2", "3", "4", "6"], answer: 2, explain: "Doubling means 2 x 2 = 4 cups." },
                { q: "How many ounces are in 1 pound?", options: ["12", "10", "16", "20"], answer: 2, explain: "There are 16 ounces in 1 pound." }
              ]
            }
          ]
        }
      ]
    },
    {
      stage: "middle",
      grades: "6–8",
      units: [
        {
          title: "Ratios, Proportions & Percents",
          lessons: [
            {
              id: "math-ms-1",
              title: "Ratios and Proportions",
              minutes: 9,
              objective: "By the end, you can write a ratio, find a unit rate, and solve a proportion.",
              body: `<h4>What a ratio is</h4>
<p>A <strong>ratio</strong> compares two quantities. If a class has 12 girls and 8 boys, the ratio of girls to boys is 12 to 8, written 12:8 or as the fraction 12/8. Like fractions, ratios can be simplified: 12:8 reduces to 3:2 by dividing both numbers by 4.</p>
<h4>Unit rate</h4>
<p>A <strong>rate</strong> compares quantities with different units, like miles and hours. A <strong>unit rate</strong> tells the amount per one unit. If a car travels 150 miles in 3 hours, divide: 150 / 3 = 50 miles per hour. Unit rates make prices easy to compare at the store, like cost per ounce.</p>
<h4>Solving proportions</h4>
<p>A <strong>proportion</strong> says two ratios are equal. To solve one, you can <strong>cross-multiply</strong>.</p>
<p>Worked example: If 3 apples cost $2, how much do 9 apples cost? Set up 3/2 = 9/x. Cross-multiply: 3 times x = 2 times 9, so 3x = 18, and x = 6. Nine apples cost $6.</p>
<ul>
<li>Set the two ratios equal.</li>
<li>Cross-multiply to get an equation.</li>
<li>Divide to find the unknown.</li>
</ul>
<p>Proportions appear everywhere: scaling recipes, reading maps, and converting currencies.</p>`,
              terms: [
                { term: "Ratio", def: "A comparison of two quantities, written as a:b or a/b." },
                { term: "Rate", def: "A ratio comparing quantities with different units." },
                { term: "Unit rate", def: "A rate expressed per single unit, like miles per hour." },
                { term: "Proportion", def: "An equation stating that two ratios are equal." },
                { term: "Cross-multiply", def: "A method to solve a proportion by multiplying across the equal sign." }
              ],
              quiz: [
                { q: "Simplify the ratio 12:8.", options: ["6:4", "3:2", "2:3", "4:3"], answer: 1, explain: "Dividing both by 4 gives 3:2." },
                { q: "A car goes 150 miles in 3 hours. What is the unit rate?", options: ["45 mph", "50 mph", "60 mph", "30 mph"], answer: 1, explain: "150 / 3 = 50 miles per hour." },
                { q: "If 3 apples cost $2, how much do 9 apples cost?", options: ["$4", "$5", "$6", "$9"], answer: 2, explain: "Cross-multiplying 3/2 = 9/x gives x = 6." },
                { q: "What does cross-multiplying solve?", options: ["A ratio", "A proportion", "A percent", "A decimal"], answer: 1, explain: "Cross-multiplying is used to solve proportions." }
              ]
            },
            {
              id: "math-ms-2",
              title: "Percents in Daily Life",
              minutes: 9,
              objective: "By the end, you can convert between percents and decimals and calculate discounts and tax.",
              body: `<h4>Percent means per hundred</h4>
<p>A <strong>percent</strong> is a number out of 100. The word comes from "per cent," meaning per hundred. So 25% means 25 out of 100, which equals the fraction 25/100 or the decimal 0.25.</p>
<p>To convert a percent to a decimal, divide by 100 (move the decimal two places left): 25% becomes 0.25. To convert back, multiply by 100: 0.4 becomes 40%.</p>
<h4>Finding a percent of a number</h4>
<p>To find a percent of a number, change the percent to a decimal and multiply.</p>
<p>Worked example: What is 20% of $50? Convert 20% to 0.20, then 0.20 x 50 = 10. So 20% of $50 is $10.</p>
<h4>Discounts and sales tax</h4>
<p>These are everyday uses of percent in America.</p>
<ul>
<li><strong>Discount:</strong> A jacket costs $80 with 25% off. The discount is 0.25 x 80 = $20, so you pay 80 - 20 = $60.</li>
<li><strong>Sales tax:</strong> Most US states add tax at checkout. If tax is 8% on a $60 purchase, tax is 0.08 x 60 = $4.80, so the total is $64.80.</li>
</ul>
<p>A useful tip: 10% of any number is found by moving the decimal one place left, so 10% of 50 is 5. Tips at restaurants are often 15% to 20%.</p>`,
              terms: [
                { term: "Percent", def: "A ratio out of 100, shown with the % symbol." },
                { term: "Discount", def: "An amount subtracted from a price, often given as a percent." },
                { term: "Sales tax", def: "A percent added to a purchase price at checkout." },
                { term: "Decimal equivalent", def: "The decimal form of a percent, found by dividing by 100." },
                { term: "Tip", def: "Extra money given for service, often 15-20% in the US." }
              ],
              quiz: [
                { q: "What is 25% as a decimal?", options: ["2.5", "0.25", "0.025", "25.0"], answer: 1, explain: "Dividing 25 by 100 gives 0.25." },
                { q: "What is 20% of $50?", options: ["$5", "$10", "$15", "$20"], answer: 1, explain: "0.20 x 50 = $10." },
                { q: "A $80 jacket is 25% off. What do you pay?", options: ["$55", "$60", "$65", "$20"], answer: 1, explain: "Discount is $20, so you pay 80 - 20 = $60." },
                { q: "Sales tax of 8% on $60 is how much?", options: ["$4.80", "$6.00", "$8.00", "$4.00"], answer: 0, explain: "0.08 x 60 = $4.80." }
              ]
            }
          ]
        },
        {
          title: "Integers & Introduction to Algebra",
          lessons: [
            {
              id: "math-ms-3",
              title: "Integers and the Number Line",
              minutes: 9,
              objective: "By the end, you can add and subtract positive and negative numbers using the number line.",
              body: `<h4>Negative numbers</h4>
<p><strong>Integers</strong> are whole numbers including negatives: ..., -3, -2, -1, 0, 1, 2, 3, ... On a <strong>number line</strong>, positive numbers go right of zero and negative numbers go left. Negatives appear in real life as temperatures below zero, debts, and elevations below sea level.</p>
<h4>Adding integers</h4>
<p>Think of moving along the number line. Adding a positive moves right; adding a negative moves left.</p>
<ul>
<li>5 + (-3): start at 5, move 3 left, land on 2.</li>
<li>-4 + (-2): start at -4, move 2 more left, land on -6.</li>
</ul>
<p>When signs are the same, add and keep the sign. When signs differ, subtract and take the sign of the larger absolute value.</p>
<h4>Subtracting integers</h4>
<p>Subtracting is the same as adding the opposite. 3 - 7 becomes 3 + (-7) = -4. And 2 - (-5) becomes 2 + 5 = 7, because subtracting a negative is like adding.</p>
<h4>Absolute value</h4>
<p>The <strong>absolute value</strong> of a number is its distance from zero, always positive. The absolute value of -6, written |-6|, is 6. The absolute value of 6 is also 6.</p>
<p>Worked example: A diver is at -30 feet and descends 10 more feet. -30 + (-10) = -40 feet.</p>`,
              terms: [
                { term: "Integer", def: "A whole number that can be positive, negative, or zero." },
                { term: "Number line", def: "A line showing numbers in order with negatives left of zero." },
                { term: "Negative number", def: "A number less than zero, written with a minus sign." },
                { term: "Absolute value", def: "A number's distance from zero, always non-negative." },
                { term: "Opposite", def: "A number with the same size but the other sign, like 5 and -5." }
              ],
              quiz: [
                { q: "What is 5 + (-3)?", options: ["8", "2", "-2", "-8"], answer: 1, explain: "Start at 5, move 3 left to reach 2." },
                { q: "What is -4 + (-2)?", options: ["-6", "-2", "6", "2"], answer: 0, explain: "Same signs: add and keep the sign, giving -6." },
                { q: "What is 2 - (-5)?", options: ["-3", "-7", "7", "3"], answer: 2, explain: "Subtracting a negative is adding: 2 + 5 = 7." },
                { q: "What is the absolute value of -6?", options: ["-6", "0", "6", "12"], answer: 2, explain: "Absolute value is distance from zero, so |-6| = 6." }
              ]
            },
            {
              id: "math-ms-4",
              title: "Variables and Solving Equations",
              minutes: 10,
              objective: "By the end, you can solve one-step and two-step equations using inverse operations.",
              body: `<h4>What a variable is</h4>
<p>In algebra, a <strong>variable</strong> is a letter that stands for an unknown number, often x. An <strong>equation</strong> says two expressions are equal, like x + 5 = 12. Solving means finding the value of the variable that makes the equation true.</p>
<h4>The balance idea</h4>
<p>An equation is like a balanced scale. Whatever you do to one side, you must do to the other to keep it balanced. To isolate the variable, use <strong>inverse operations</strong>: addition and subtraction undo each other, and multiplication and division undo each other.</p>
<h4>One-step equations</h4>
<ul>
<li>x + 5 = 12. Subtract 5 from both sides: x = 7.</li>
<li>3x = 15. Divide both sides by 3: x = 5.</li>
</ul>
<h4>Two-step equations</h4>
<p>Worked example: 2x + 3 = 11. First undo the addition: subtract 3 from both sides to get 2x = 8. Then undo the multiplication: divide both sides by 2 to get x = 4.</p>
<p>Always check by substituting back: 2 times 4 plus 3 = 8 + 3 = 11. Correct.</p>
<p>This skill, called pre-algebra, prepares students for Algebra I in high school. The key habit is doing the same operation to both sides, in reverse order of operations.</p>`,
              terms: [
                { term: "Variable", def: "A letter that represents an unknown number." },
                { term: "Equation", def: "A statement that two expressions are equal." },
                { term: "Inverse operation", def: "An operation that undoes another, like subtraction undoing addition." },
                { term: "Isolate", def: "To get the variable alone on one side of the equation." },
                { term: "Solution", def: "The value of the variable that makes the equation true." }
              ],
              quiz: [
                { q: "Solve x + 5 = 12.", options: ["x = 17", "x = 7", "x = 5", "x = 60"], answer: 1, explain: "Subtract 5 from both sides: x = 7." },
                { q: "Solve 3x = 15.", options: ["x = 12", "x = 18", "x = 5", "x = 45"], answer: 2, explain: "Divide both sides by 3: x = 5." },
                { q: "Solve 2x + 3 = 11.", options: ["x = 4", "x = 7", "x = 5", "x = 8"], answer: 0, explain: "Subtract 3 to get 2x = 8, then divide by 2: x = 4." },
                { q: "What undoes multiplication?", options: ["Addition", "Subtraction", "Division", "Squaring"], answer: 2, explain: "Division is the inverse of multiplication." }
              ]
            }
          ]
        },
        {
          title: "Coordinate Plane, Statistics & Probability",
          lessons: [
            {
              id: "math-ms-5",
              title: "The Coordinate Plane",
              minutes: 9,
              objective: "By the end, you can plot and read ordered pairs on a coordinate grid.",
              body: `<h4>Two number lines together</h4>
<p>The <strong>coordinate plane</strong> is made of two number lines that cross at right angles. The horizontal one is the <strong>x-axis</strong> and the vertical one is the <strong>y-axis</strong>. They meet at the <strong>origin</strong>, the point (0, 0).</p>
<h4>Ordered pairs</h4>
<p>Every point is named by an <strong>ordered pair</strong> (x, y). The first number tells how far right or left from the origin; the second tells how far up or down. Order matters: (3, 2) is different from (2, 3).</p>
<p>Worked example: To plot (3, 2), start at the origin, move 3 units right, then 2 units up. To plot (-4, 1), move 4 units left and 1 up.</p>
<h4>The four quadrants</h4>
<p>The axes divide the plane into four <strong>quadrants</strong>, numbered counterclockwise:</p>
<ul>
<li>Quadrant I: x positive, y positive (right and up).</li>
<li>Quadrant II: x negative, y positive (left and up).</li>
<li>Quadrant III: x negative, y negative (left and down).</li>
<li>Quadrant IV: x positive, y negative (right and down).</li>
</ul>
<p>The coordinate plane is the foundation for graphing lines and functions in high school algebra, and it is also how maps and computer screens locate positions.</p>`,
              terms: [
                { term: "Coordinate plane", def: "A grid formed by a horizontal and a vertical number line." },
                { term: "X-axis", def: "The horizontal number line on the coordinate plane." },
                { term: "Y-axis", def: "The vertical number line on the coordinate plane." },
                { term: "Origin", def: "The point (0, 0) where the two axes cross." },
                { term: "Ordered pair", def: "Two numbers (x, y) that name a point's location." }
              ],
              quiz: [
                { q: "What point is the origin?", options: ["(1, 1)", "(0, 0)", "(0, 1)", "(1, 0)"], answer: 1, explain: "The origin is where the axes meet, at (0, 0)." },
                { q: "To plot (3, 2), what do you do first?", options: ["Move up 3", "Move right 3", "Move left 2", "Move down 2"], answer: 1, explain: "The first number is x, so move 3 units right." },
                { q: "In which quadrant is (-4, 1)?", options: ["I", "II", "III", "IV"], answer: 1, explain: "Negative x and positive y is Quadrant II." },
                { q: "Is (3, 2) the same point as (2, 3)?", options: ["Yes", "No", "Only if positive", "Only on the x-axis"], answer: 1, explain: "Order matters in an ordered pair, so they are different points." }
              ]
            },
            {
              id: "math-ms-6",
              title: "Statistics and Probability Basics",
              minutes: 9,
              objective: "By the end, you can find the mean, median, and mode of data and express simple probability.",
              body: `<h4>Measures of center</h4>
<p>Statistics summarizes data with single numbers called <strong>measures of center</strong>.</p>
<ul>
<li><strong>Mean</strong> (average): add all values, divide by how many there are.</li>
<li><strong>Median</strong>: the middle value when data is in order.</li>
<li><strong>Mode</strong>: the value that appears most often.</li>
</ul>
<p>Worked example with the data 4, 8, 6, 4, 8, 8, 10:</p>
<p>Mean = (4 + 8 + 6 + 4 + 8 + 8 + 10) / 7 = 48 / 7 = about 6.9. To find the median, sort: 4, 4, 6, 8, 8, 8, 10. The middle (4th) value is 8. The mode is 8, since it appears most.</p>
<h4>Probability</h4>
<p><strong>Probability</strong> measures how likely an event is, from 0 (impossible) to 1 (certain). It is the number of favorable outcomes divided by the total number of outcomes.</p>
<p>Worked example: Rolling a fair six-sided die, the probability of rolling a 4 is 1/6, because there is one 4 out of six faces. The probability of rolling an even number (2, 4, or 6) is 3/6 = 1/2.</p>
<p>A probability of 1/2 means it happens about half the time, like flipping a coin and getting heads.</p>`,
              terms: [
                { term: "Mean", def: "The average, found by adding values and dividing by the count." },
                { term: "Median", def: "The middle value of an ordered data set." },
                { term: "Mode", def: "The value that occurs most frequently in a data set." },
                { term: "Probability", def: "A measure of how likely an event is, from 0 to 1." },
                { term: "Outcome", def: "A possible result of an experiment, like rolling a 4." }
              ],
              quiz: [
                { q: "What is the mean of 4, 6, 8?", options: ["6", "18", "8", "4"], answer: 0, explain: "(4 + 6 + 8) / 3 = 18 / 3 = 6." },
                { q: "What is the median of 4, 4, 6, 8, 10?", options: ["4", "6", "8", "10"], answer: 1, explain: "The middle value of the ordered list is 6." },
                { q: "What is the probability of rolling a 4 on a six-sided die?", options: ["1/4", "1/6", "4/6", "1/2"], answer: 1, explain: "One favorable face out of six gives 1/6." },
                { q: "What is the probability of an even number on a die?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2, explain: "Three even faces out of six is 3/6 = 1/2." }
              ]
            }
          ]
        }
      ]
    },
    {
      stage: "high",
      grades: "9–12",
      units: [
        {
          title: "Algebra I",
          lessons: [
            {
              id: "math-hs-1",
              title: "Linear Equations and Slope",
              minutes: 10,
              objective: "By the end, you can graph a line, find its slope, and use slope-intercept form.",
              body: `<h4>The standard US course sequence</h4>
<p>American high school math usually follows a four-year path: <strong>Algebra I</strong> (often 9th grade), <strong>Geometry</strong> (10th), <strong>Algebra II</strong> (11th), and then <strong>Pre-Calculus</strong> or <strong>Statistics</strong> (12th). This sequence builds from solving equations to studying functions, then to the tools needed for calculus. We begin with Algebra I.</p>
<h4>Linear equations</h4>
<p>A <strong>linear equation</strong> graphs as a straight line. The most useful form is <strong>slope-intercept form</strong>: y = mx + b, where m is the slope and b is the y-intercept (where the line crosses the y-axis).</p>
<h4>Slope: steepness</h4>
<p><strong>Slope</strong> measures how steep a line is. It is the rise over the run, the change in y divided by the change in x.</p>
<p>Worked example: A line passes through (1, 2) and (3, 8). Slope = (8 - 2) / (3 - 1) = 6 / 2 = 3. The line rises 3 units for every 1 unit right.</p>
<h4>Using the form</h4>
<p>In y = 2x + 1, the slope is 2 and the y-intercept is 1. To graph it: plot (0, 1), then from there go up 2 and right 1 to find the next point. Connect them with a straight line.</p>
<ul>
<li>Positive slope: line goes up to the right.</li>
<li>Negative slope: line goes down to the right.</li>
<li>Zero slope: horizontal line.</li>
</ul>`,
              terms: [
                { term: "Linear equation", def: "An equation whose graph is a straight line." },
                { term: "Slope", def: "The steepness of a line, equal to rise over run." },
                { term: "Y-intercept", def: "The point where a line crosses the y-axis." },
                { term: "Slope-intercept form", def: "The equation y = mx + b, showing slope m and intercept b." },
                { term: "Rise over run", def: "The change in y divided by the change in x." }
              ],
              quiz: [
                { q: "In y = 2x + 1, what is the slope?", options: ["1", "2", "0", "-1"], answer: 1, explain: "In y = mx + b, m is the slope, here 2." },
                { q: "Find the slope through (1, 2) and (3, 8).", options: ["2", "3", "6", "4"], answer: 1, explain: "(8 - 2) / (3 - 1) = 6 / 2 = 3." },
                { q: "In y = 2x + 1, what is the y-intercept?", options: ["2", "1", "0", "-1"], answer: 1, explain: "The constant b is the y-intercept, here 1." },
                { q: "A horizontal line has what slope?", options: ["Positive", "Negative", "Zero", "Undefined"], answer: 2, explain: "A horizontal line has no rise, so slope is 0." }
              ]
            },
            {
              id: "math-hs-2",
              title: "Systems of Equations",
              minutes: 10,
              objective: "By the end, you can solve a system of two linear equations by substitution.",
              body: `<h4>What a system is</h4>
<p>A <strong>system of equations</strong> is two or more equations considered together. The <strong>solution</strong> is the (x, y) pair that makes all equations true at once. Graphically, it is the point where the two lines cross.</p>
<h4>The substitution method</h4>
<p>One reliable method is <strong>substitution</strong>: solve one equation for a variable, then plug that into the other.</p>
<p>Worked example. Solve this system:</p>
<ul>
<li>y = x + 1</li>
<li>2x + y = 7</li>
</ul>
<p>The first equation already gives y. Substitute x + 1 in place of y in the second: 2x + (x + 1) = 7. Combine: 3x + 1 = 7, so 3x = 6 and x = 2. Then y = x + 1 = 3. The solution is (2, 3).</p>
<p>Check both equations: y = x + 1 gives 3 = 2 + 1 (true), and 2x + y = 7 gives 4 + 3 = 7 (true).</p>
<h4>Three possibilities</h4>
<ul>
<li><strong>One solution:</strong> lines cross at one point (most common).</li>
<li><strong>No solution:</strong> lines are parallel and never meet.</li>
<li><strong>Infinitely many:</strong> the two equations describe the same line.</li>
</ul>
<p>Systems model real choices, like finding when two phone plans cost the same.</p>`,
              terms: [
                { term: "System of equations", def: "Two or more equations solved together." },
                { term: "Substitution", def: "Replacing a variable with an equivalent expression to solve a system." },
                { term: "Solution of a system", def: "The values that make all equations true at once." },
                { term: "Parallel lines", def: "Lines with the same slope that never intersect." },
                { term: "Intersection", def: "The point where two graphs cross, the system's solution." }
              ],
              quiz: [
                { q: "What is the solution to y = x + 1 and 2x + y = 7?", options: ["(2, 3)", "(3, 2)", "(1, 2)", "(2, 5)"], answer: 0, explain: "Substituting gives x = 2 and y = 3." },
                { q: "Graphically, the solution of a system is where the lines do what?", options: ["Stay parallel", "Cross", "Curve", "Stop"], answer: 1, explain: "The solution is the intersection point." },
                { q: "If two lines are parallel, how many solutions?", options: ["One", "None", "Two", "Infinite"], answer: 1, explain: "Parallel lines never meet, so there is no solution." },
                { q: "If the equations describe the same line, how many solutions?", options: ["None", "One", "Infinitely many", "Two"], answer: 2, explain: "Every point on the shared line works, so infinitely many." }
              ]
            }
          ]
        },
        {
          title: "Geometry & Algebra II",
          lessons: [
            {
              id: "math-hs-3",
              title: "Geometry: Pythagorean Theorem and Proofs",
              minutes: 10,
              objective: "By the end, you can apply the Pythagorean theorem and understand what a proof is.",
              body: `<h4>The Geometry year</h4>
<p>In most US schools, <strong>Geometry</strong> follows Algebra I, usually in 10th grade. It studies shapes, angles, area, and volume, and it introduces formal <strong>proofs</strong>, where you justify each step with a reason. Proofs teach logical thinking that matters far beyond math.</p>
<h4>The Pythagorean theorem</h4>
<p>For any <strong>right triangle</strong> (one with a 90-degree angle), the <strong>Pythagorean theorem</strong> states: a squared plus b squared equals c squared, where c is the longest side, the <strong>hypotenuse</strong>, and a and b are the two legs.</p>
<p>Worked example: A right triangle has legs of 3 and 4. Then c squared = 3 squared + 4 squared = 9 + 16 = 25, so c = 5. This famous 3-4-5 triangle is used by builders to make square corners.</p>
<h4>Area and volume</h4>
<ul>
<li>Triangle area = (1/2) x base x height.</li>
<li>Circle area = pi x radius squared (pi is about 3.14).</li>
<li>Rectangular box volume = length x width x height.</li>
</ul>
<p>Worked example: A circle with radius 5 has area = 3.14 x 5 x 5 = 78.5 square units.</p>
<h4>What a proof is</h4>
<p>A proof is a chain of true statements, each backed by a definition, postulate, or earlier result, leading to a conclusion. The goal is certainty, not just an example that seems to work.</p>`,
              terms: [
                { term: "Right triangle", def: "A triangle containing a 90-degree angle." },
                { term: "Hypotenuse", def: "The longest side of a right triangle, opposite the right angle." },
                { term: "Pythagorean theorem", def: "a squared plus b squared equals c squared for right triangles." },
                { term: "Proof", def: "A logical argument that establishes a statement with certainty." },
                { term: "Pi", def: "The ratio of a circle's circumference to its diameter, about 3.14." }
              ],
              quiz: [
                { q: "A right triangle has legs 3 and 4. What is the hypotenuse?", options: ["5", "7", "6", "12"], answer: 0, explain: "3 squared + 4 squared = 25, so c = 5." },
                { q: "What is the area of a circle with radius 5? (use pi = 3.14)", options: ["31.4", "78.5", "15.7", "25"], answer: 1, explain: "Area = 3.14 x 5 x 5 = 78.5." },
                { q: "Which side is the hypotenuse?", options: ["The shortest", "Any leg", "The longest, opposite the right angle", "The base"], answer: 2, explain: "The hypotenuse is the longest side, across from the right angle." },
                { q: "What is the area of a triangle with base 6 and height 4?", options: ["24", "12", "10", "20"], answer: 1, explain: "(1/2) x 6 x 4 = 12." }
              ]
            },
            {
              id: "math-hs-4",
              title: "Algebra II: Quadratics and Functions",
              minutes: 11,
              objective: "By the end, you can recognize a quadratic, understand functions, and use the quadratic formula idea.",
              body: `<h4>The Algebra II year</h4>
<p><strong>Algebra II</strong>, usually 11th grade, deepens algebra with quadratics, functions, exponentials, and logarithms. These prepare students for pre-calculus and college math.</p>
<h4>Functions</h4>
<p>A <strong>function</strong> is a rule that gives exactly one output for each input. We write f(x), read "f of x." If f(x) = 2x + 1, then f(3) = 2 times 3 + 1 = 7. The input is 3, the output is 7.</p>
<h4>Quadratic equations</h4>
<p>A <strong>quadratic</strong> has the form ax squared + bx + c = 0, where the variable is squared. Its graph is a U-shaped curve called a <strong>parabola</strong>. Quadratics model thrown objects, profit curves, and areas.</p>
<p>Worked example by factoring: Solve x squared - 5x + 6 = 0. Find two numbers that multiply to 6 and add to -5: those are -2 and -3. So (x - 2)(x - 3) = 0, which means x = 2 or x = 3. A quadratic often has two solutions.</p>
<h4>The quadratic formula</h4>
<p>When factoring is hard, the <strong>quadratic formula</strong> always works: x equals negative b, plus or minus the square root of (b squared minus 4ac), all divided by 2a. The "plus or minus" is why there are usually two answers.</p>
<h4>Exponentials and logs</h4>
<p>An <strong>exponential function</strong> like 2 to the x grows by multiplying, modeling population or compound interest. A <strong>logarithm</strong> is its inverse, answering "what exponent gives this number?" Since 2 cubed = 8, log base 2 of 8 is 3.</p>`,
              terms: [
                { term: "Function", def: "A rule giving exactly one output for each input, written f(x)." },
                { term: "Quadratic", def: "An equation where the highest power of the variable is 2." },
                { term: "Parabola", def: "The U-shaped graph of a quadratic function." },
                { term: "Quadratic formula", def: "A formula that solves any quadratic equation." },
                { term: "Logarithm", def: "The inverse of an exponential, finding the needed exponent." }
              ],
              quiz: [
                { q: "If f(x) = 2x + 1, what is f(3)?", options: ["5", "6", "7", "8"], answer: 2, explain: "2 times 3 plus 1 = 7." },
                { q: "Solve x squared - 5x + 6 = 0.", options: ["x = 2 or 3", "x = 1 or 6", "x = -2 or -3", "x = 5 or 6"], answer: 0, explain: "Factoring gives (x - 2)(x - 3) = 0, so x = 2 or 3." },
                { q: "What shape is the graph of a quadratic?", options: ["A line", "A parabola", "A circle", "A zigzag"], answer: 1, explain: "Quadratics graph as U-shaped parabolas." },
                { q: "Since 2 cubed = 8, what is log base 2 of 8?", options: ["2", "3", "4", "8"], answer: 1, explain: "The exponent that gives 8 from base 2 is 3." }
              ]
            }
          ]
        },
        {
          title: "Pre-Calculus, Calculus & Statistics",
          lessons: [
            {
              id: "math-hs-5",
              title: "Trigonometry and Pre-Calculus",
              minutes: 10,
              objective: "By the end, you can use sine, cosine, and tangent ratios in a right triangle.",
              body: `<h4>Why Pre-Calculus exists</h4>
<p><strong>Pre-Calculus</strong>, often 11th or 12th grade, bridges Algebra II and Calculus. It covers advanced functions and <strong>trigonometry</strong>, the study of angles and triangles, giving students the tools calculus will use.</p>
<h4>The three main ratios</h4>
<p>Trigonometry connects a right triangle's angles to its side lengths through three ratios. For an angle, name the sides as the <strong>opposite</strong>, the <strong>adjacent</strong>, and the <strong>hypotenuse</strong>.</p>
<ul>
<li><strong>Sine</strong> (sin) = opposite / hypotenuse</li>
<li><strong>Cosine</strong> (cos) = adjacent / hypotenuse</li>
<li><strong>Tangent</strong> (tan) = opposite / adjacent</li>
</ul>
<p>A common memory aid is SOH-CAH-TOA, naming each ratio's parts.</p>
<h4>Worked example</h4>
<p>A right triangle has an angle whose opposite side is 3 and hypotenuse is 5. Then sin of that angle = 3 / 5 = 0.6. If the adjacent side is 4, then cos = 4 / 5 = 0.8 and tan = 3 / 4 = 0.75.</p>
<p>These ratios let you find an unknown side or angle. Surveyors, engineers, and navigators use trigonometry to measure distances and heights that cannot be reached directly, such as the height of a building from its shadow.</p>
<h4>Beyond triangles</h4>
<p>Pre-calculus also studies trig functions as repeating <strong>periodic</strong> waves, which model sound, light, and tides.</p>`,
              terms: [
                { term: "Trigonometry", def: "The study of relationships between angles and sides of triangles." },
                { term: "Sine", def: "The ratio of the opposite side to the hypotenuse." },
                { term: "Cosine", def: "The ratio of the adjacent side to the hypotenuse." },
                { term: "Tangent", def: "The ratio of the opposite side to the adjacent side." },
                { term: "Periodic function", def: "A function whose values repeat in regular cycles, like a wave." }
              ],
              quiz: [
                { q: "Sine equals which ratio?", options: ["adjacent/hypotenuse", "opposite/hypotenuse", "opposite/adjacent", "hypotenuse/opposite"], answer: 1, explain: "Sine is opposite over hypotenuse (the S in SOH)." },
                { q: "If opposite is 3 and hypotenuse is 5, what is sine?", options: ["0.6", "0.8", "0.75", "1.6"], answer: 0, explain: "sin = 3 / 5 = 0.6." },
                { q: "If opposite is 3 and adjacent is 4, what is tangent?", options: ["0.6", "0.8", "0.75", "1.33"], answer: 2, explain: "tan = opposite / adjacent = 3 / 4 = 0.75." },
                { q: "What does SOH-CAH-TOA help you remember?", options: ["Area formulas", "The trig ratios", "Quadratics", "Slope"], answer: 1, explain: "It encodes sine, cosine, and tangent ratios." }
              ]
            },
            {
              id: "math-hs-6",
              title: "Introduction to Calculus",
              minutes: 11,
              objective: "By the end, you can describe what a limit and a derivative mean conceptually.",
              body: `<h4>The top of the sequence</h4>
<p><strong>Calculus</strong> is the final course in the standard sequence, often taken in 12th grade as AP Calculus, sometimes for college credit. It studies how things change and accumulate. Its two big ideas are the <strong>limit</strong> and the <strong>derivative</strong>.</p>
<h4>Limits</h4>
<p>A <strong>limit</strong> describes what value a function approaches as the input gets closer and closer to some number, even if it never quite arrives. For f(x) = x + 2, as x approaches 3, f(x) approaches 5. We write this as the limit equals 5.</p>
<p>Limits let mathematicians handle the idea of "infinitely close," which makes the rest of calculus rigorous.</p>
<h4>Derivatives: instant rate of change</h4>
<p>A <strong>derivative</strong> measures how fast a quantity changes at a single instant. It is the slope of a curve at one point. Average speed over a trip is total distance over total time, but a car's speedometer shows the derivative: the speed at this exact moment.</p>
<p>Worked example: For f(x) = x squared, the derivative is 2x (a rule learned in class). At x = 3, the derivative is 2 times 3 = 6, meaning the curve rises 6 times as fast as x increases right there.</p>
<h4>Why it matters</h4>
<ul>
<li>Physics uses derivatives for velocity and acceleration.</li>
<li>Economics uses them for marginal cost and profit.</li>
<li>The reverse process, integration, finds areas and totals.</li>
</ul>`,
              terms: [
                { term: "Calculus", def: "The branch of math studying change and accumulation." },
                { term: "Limit", def: "The value a function approaches as the input nears a point." },
                { term: "Derivative", def: "The instantaneous rate of change, or slope at a point." },
                { term: "Rate of change", def: "How much an output changes relative to its input." },
                { term: "Integration", def: "The reverse of differentiation, used to find totals and areas." }
              ],
              quiz: [
                { q: "For f(x) = x + 2, the limit as x approaches 3 is?", options: ["3", "5", "2", "6"], answer: 1, explain: "As x nears 3, x + 2 nears 5." },
                { q: "A derivative measures what?", options: ["Total distance", "Instant rate of change", "Average over time", "Area"], answer: 1, explain: "The derivative is the instantaneous rate of change." },
                { q: "For f(x) = x squared, the derivative is 2x. What is it at x = 3?", options: ["3", "6", "9", "2"], answer: 1, explain: "2 times 3 = 6." },
                { q: "What does a car's speedometer reading represent?", options: ["A limit", "An average", "A derivative", "An integral"], answer: 2, explain: "It shows speed at one instant, which is a derivative." }
              ]
            },
            {
              id: "math-hs-7",
              title: "Statistics and Data Analysis",
              minutes: 10,
              objective: "By the end, you can describe the normal distribution and standard deviation.",
              body: `<h4>An alternative senior course</h4>
<p>Instead of calculus, many US seniors take <strong>Statistics</strong>, often AP Statistics. It is widely useful for business, medicine, social science, and everyday reasoning about data and risk.</p>
<h4>Spread, not just center</h4>
<p>Earlier we learned mean, median, and mode for the center of data. Statistics also measures <strong>spread</strong>, how far values typically fall from the mean. The main measure is <strong>standard deviation</strong>. A small standard deviation means data clusters tightly; a large one means it is spread out.</p>
<h4>The normal distribution</h4>
<p>Many real data sets, like heights or test scores, form a bell-shaped curve called the <strong>normal distribution</strong>. It is symmetric around the mean. A handy rule, the 68-95-99.7 rule, says:</p>
<ul>
<li>About 68% of values fall within 1 standard deviation of the mean.</li>
<li>About 95% fall within 2 standard deviations.</li>
<li>About 99.7% fall within 3 standard deviations.</li>
</ul>
<p>Worked example: A test has mean 70 and standard deviation 10. About 68% of scores fall between 60 and 80 (one deviation each way). About 95% fall between 50 and 90.</p>
<h4>Samples and inference</h4>
<p>Statisticians study a <strong>sample</strong> to draw conclusions about a larger <strong>population</strong>. Polls do this: surveying a few thousand people to estimate what millions think, with a stated margin of error. Good sampling must be random to avoid bias.</p>`,
              terms: [
                { term: "Standard deviation", def: "A measure of how spread out data values are from the mean." },
                { term: "Normal distribution", def: "A symmetric, bell-shaped spread of data around the mean." },
                { term: "68-95-99.7 rule", def: "The percent of normal data within 1, 2, and 3 standard deviations." },
                { term: "Sample", def: "A smaller group selected to represent a larger population." },
                { term: "Population", def: "The entire group a study aims to describe." }
              ],
              quiz: [
                { q: "What does standard deviation measure?", options: ["The center", "The spread", "The mode", "The count"], answer: 1, explain: "Standard deviation measures how spread out the data is." },
                { q: "About what percent of normal data is within 1 standard deviation?", options: ["50%", "68%", "95%", "99.7%"], answer: 1, explain: "The rule says about 68% fall within 1 standard deviation." },
                { q: "Mean 70, standard deviation 10: about 68% of scores fall between?", options: ["50 and 90", "60 and 80", "65 and 75", "40 and 100"], answer: 1, explain: "One deviation each way is 60 to 80." },
                { q: "Polls survey a sample to estimate what?", options: ["The sample", "The population", "The mean only", "The mode"], answer: 1, explain: "A sample is used to infer about the whole population." }
              ]
            }
          ]
        }
      ]
    }
  ]
});
