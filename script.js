let teams = [
  {
    team: "CSK",
    primary: "navy",
    secondary: "darkgoldenrod",
    fullName: "Chennai Super Kings",
    trophies: 5,
    captain: "MS Dhoni",
    tColor: "whitesmoke"
  },
  {
    team: "MI",
    primary: "midnightblue",
    secondary: "slategray",
    fullName: "Mumbai Indians",
    trophies: 5,
    captain: "Hardik Pandya",
    tColor: "aliceblue"
  },
  {
    team: "RCB",
    primary: "maroon",
    secondary: "black",
    fullName: "Royal Challengers Bengaluru",
    trophies: 0,
    captain: "Faf du Plessis",
    tColor: "ivory"
  },
  {
    team: "KKR",
    primary: "indigo",
    secondary: "darkgoldenrod",
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    captain: "Shreyas Iyer",
    tColor: "snow"
  },
  {
    team: "RR",
    primary: "darkmagenta",
    secondary: "steelblue",
    fullName: "Rajasthan Royals",
    trophies: 1,
    captain: "Sanju Samson",
    tColor: "gainsboro"
  },
  {
    team: "SRH",
    primary: "darkorange",
    secondary: "saddlebrown",
    fullName: "Sunrisers Hyderabad",
    trophies: 1,
    captain: "Pat Cummins",
    tColor: "linen"
  },
  {
    team: "DC",
    primary: "royalblue",
    secondary: "crimson",
    fullName: "Delhi Capitals",
    trophies: 0,
    captain: "Rishabh Pant",
    tColor: "seashell"
  },
  {
    team: "PBKS",
    primary: "darkred",
    secondary: "dimgray",
    fullName: "Punjab Kings",
    trophies: 0,
    captain: "Shikhar Dhawan",
    tColor: "floralwhite"
  },
  {
    team: "GT",
    primary: "darkslateblue",
    secondary: "darkkhaki",
    fullName: "Gujarat Titans",
    trophies: 1,
    captain: "Shubman Gill",
    tColor: "ghostwhite"
  },
  {
    team: "LSG",
    primary: "teal",
    secondary: "darkorange",
    fullName: "Lucknow Super Giants",
    trophies: 0,
    captain: "KL Rahul",
    tColor: "mintcream"
  }
];



let btn = document.querySelector('.btn');
let card = document.querySelector('.card');
let circle = document.querySelector('.circle');
let h1 = document.querySelector('.circle h1');
let h2= document.querySelector('.info h2');
let  h3 = document.querySelector('.info h3');
let  h4 = document.querySelector('.info h4');


btn.addEventListener('click', function() {
  let randomGuess = Math.floor(Math.random()* teams.length)
  
  h1.innerHTML = `${teams[randomGuess].team}`
  
  h2.innerHTML = `Name: ${teams[randomGuess].fullName}`
  h3.innerHTML = `Captain: ${teams[randomGuess].captain}`
  h4.innerHTML = `Trophies: ${teams[randomGuess].trophies}`

  card.style.backgroundColor = `${teams[randomGuess].primary}`
  circle.style.backgroundColor = `${teams[randomGuess].secondary}`
})




