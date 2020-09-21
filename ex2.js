const expenses = [
  {
    amount: 351.5,
    category: "food",
    date: "Tuesday, September 11, 2018 11:22 PM",
    item: "Bristo"
  },
  {
    amount: 435.4,
    category: "food",
    date: "Saturday, May 5, 2018 2:06 PM",
    item: "Amril"
  },
  {
    amount: 249.9,
    category: "misc",
    date: "Tuesday, July 17, 2018 4:18 AM",
    item: "Unq"
  },
  {
    amount: 711.0,
    category: "fun",
    date: "Monday, July 23, 2018 3:16 AM",
    item: "Codact"
  },
  {
    amount: 329.2,
    category: "food",
    date: "Saturday, May 26, 2018 4:31 AM",
    item: "Rodeology"
  },
  {
    amount: 823.2,
    category: "bills",
    date: "Monday, October 29, 2018 4:40 AM",
    item: "Dyno"
  },
  {
    amount: 383.0,
    category: "misc",
    date: "Wednesday, September 19, 2018 11:11 PM",
    item: "Ziore"
  },
  {
    amount: 615.5,
    category: "bills",
    date: "Sunday, July 22, 2018 12:44 PM",
    item: "Medcom"
  },
  {
    amount: 652.07,
    category: "bills",
    date: "Tuesday, October 9, 2018 1:47 AM",
    item: "Tri@Tribalog"
  },
  {
    amount: 918.4,
    category: "food",
    date: "Thursday, March 29, 2018 3:45 PM",
    item: "Envire"
  },
  {
    amount: 320.4,
    category: "misc",
    date: "Tuesday, January 2, 2018 5:21 PM",
    item: "Schoolio"
  },
  {
    amount: 474.7,
    category: "bills",
    date: "Tuesday, July 31, 2018 10:55 AM",
    item: "Zaphire"
  },
  {
    amount: 94.45,
    category: "fun",
    date: "Friday, January 5, 2018 3:12 AM",
    item: "Autograte"
  },
  {
    amount: 396.2,
    category: "bills",
    date: "Wednesday, April 25, 2018 7:41 AM",
    item: "Musix"
  },
  {
    amount: 78.70,
    category: "fun",
    date: "Monday, July 16, 2018 11:37 PM",
    item: "Kog"
  }
]



const getTotalByCategory = function(category){
  let total = 0;
   for(let i = 0; i < expenses.length ; i++){
    if(expenses[i].category === category){
      total += expenses[i].amount;
    }
}
return total;
}
// console.log(getTotalByCategory("food"))




// getTotalByCategory('food')