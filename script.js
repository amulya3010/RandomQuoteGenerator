let Quotes = [
  {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    Author: "Amulya"
  },
  {
    quote: "Friends are the family we choose.🥰",
    Author: "Prao"
  },
  {
    quote: "🦋Kindness is one thing you can't give away.🦋",
    Author: "Daisy"              
  },
  {
    quote: "Great things happen to those who don't stop believing, trying, learning, and being grateful.🌺",
    Author: "Roy T"
  },
  {
    quote: "Always bear in mind that your own resolution to succeed is more important than any other one thing.🐼",
    Author: "Kaojao"                
  },
  {
    quote: "Optimism is a happiness magnet.❤️",
    Author: "Sky"
  },
  {
    quote: "🎶We are the music makers and we are the dreamers of dreams.🎶",
    Author: "Thima"               
  },
  {
    quote: "🎼🎵Musical quotation is the practice of directly quoting another work in a new composition.🎼🎵",
    Author: "Steve"
  },
  {
    quote: "🎈You always pass failure on the way to success.✨",
    Author: "Nuea"
  },
  {
    quote: "💕To be a great champion you must believe you are the best.💕",
    Author: "Toh"
  }
]


// accessing the HTML elements

let quotele=document.querySelector(".quotes")
let authorele=document.querySelector(".authors")
let buttonele=document.querySelector("#generate")

// function for generating the random quotes
function generate(){
    let index=Math.floor(Math.random()*Quotes.length)
    console.log(index)
    quotele.innerText=Quotes[index].quote
    authorele.innerText=`~~${Quotes[index].Author}`
}

buttonele.addEventListener("click",generate)