//array metods
let vegetables = ["Tomato", "Carrot", "Broccoli"];
vegetables.pop();
console.log(vegetables);

vegetables = ["Tomato", "Carrot", "Garlic"];
vegetables.push("Broccoli");
console.log(vegetables);

vegetables = ["Garlic", "Carrot", "Tomato", "Broccoli"];
vegetables.splice(1, 2);
console.log(vegetables);

vegetables = ["Garlic", "Carrot", "Broccoli", "Pumpkin"];
console.log(vegetables.sort());
