const mongoose = require("mongoose");
const Quotes = require("../models/quotes");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/peace-in"
);

const quotesSeed = [
  {
    quote: "Get busy living, or get busy dying.",
    author: "Stephen King",
  },
  {
    quote: "The strength of a wall is neither greater nor less than the courage of the men who defend it. ",
    author: "Genghis Khan",
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "You never know when a moment and a few sincere words can have an impact on a life.  ",
    author: "Zig Ziglar"
  },
  {
    quote: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
    author: "Roy T. Bennett"
  },
  {
    quote: "We have to walk in a way that we only print peace and serenity on the Earth. Walk as if you are kissing the Earth with your feet.",
    author: "Thich Nhat Hanh"
  },
  {
    quote: "Great things happen to those who don't stop believing, trying, learning, and being grateful.",
    author: "Roy T. Bennett"
  },
  {
    quote: "A man who dares to waste one hour of time has not discovered the value of life.",
    author: "Charles Darwin"
  },
  {
    quote: "I was wise enough to never grow up while fooling most people into believing I had. ",
    author: "Margaret Mead"
  },
  {
    quote: "Every defeat, every heartbreak every loss, contains its own seed, its own lesson on how to improve your performance the next time.",
    author: "Og Mandino"
  },
  {
    quote: "Those who look for the bad in people will surely find it.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Insanity is relative. It depends on who has who locked in what cage.  ",
    author: "Ray Bradbury"
  },
  {
    quote: "My actions are my only true belongings. I cannot escape the consequences of my actions. My actions are the ground upon which I stand.",
    author: "Thich Nhat Hanh"
  },
  {
    quote: "Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.",
    author: "Henry David Thoreau"
  },
  {
    quote: "If you are depressed, you are living in the past. If you are anxious, you are living in the future. if you are at peace, you are living in the present.",
    author: "Lao Tzu"
  },
  {
    quote: "Dreams are the royal road to the unconscious. ",
    author: "Sigmund Freud"
  },
  {
    quote: "You are the only real obstacle in your path to a fulfilling life.",
    author: "Les Brown"
  },
  {
    quote: "It is passion that makes man live; wisdom makes one only last.",
    author: "Nicolas Chamfort"
  },
  {
    quote: "No experience is a cause of success or failure. We do not suffer from the shock of our experiences, so-called trauma � but we make out of them just what suits our purposes.",
    author: "Alfred Adler"
  },
  {
    quote: "We have to walk in a way that we only print peace and serenity on the Earth. Walk as if you are kissing the Earth with your feet.",
    author: "Thich Nhat Hanh"
  },
  {
    quote: "A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided.",
    author: "Tony Robbins"
  },
  {
    quote: "If you want peace, you won't get it with violence.",
    author: "John Lennon"
  },
  {
    quote: "When I let go of what I am, I become what I might be.",
    author: "Laozi"
  },
  {
    quote: "The first thing you learn in life is you're a fool. The last thing you learn in life is you're the same fool.  ",
    author: "Ray Bradbury"
  },
  {
    quote: "Be curious, not judgmental.",
    author: "Walt Whitman"
  },
  {
    quote: "I love fools' experiments. I am always making them.",
    author: "Charles Darwin"
  },
  {
    quote: "Life is not always a matter of holding good cards, but sometimes, playing a poor hand well. ",
    author: "Jack London"
  },
  {
    quote: "Insanity: doing the same thing over and over again and expecting different results.",
    author: "Albert Einstein"
  },
  {
    quote: "I skate to where the puck is going to be, not where it has been.",
    author: "Wayne Gretzky"
  },
  {
    quote: "Fiction is the truth inside the lie.",
    author: "Stephen King"
  },
  {
    quote: "Eighty percent of success is showing up. ",
    author: "Woody Allen"
  },
  {
    quote: "Associate yourself with men of good quality, if you esteem your own reputation; for 'tis better to be alone than in bad company. ",
    author: "George Washington"
  },
  {
    quote: "Every second you have on this planet is very precious and it's your responsibility that you're happy.",
    author: "Naval Ravikant"
  },
  {
    quote: "Sometimes it is harder to deprive oneself of a pain than of a pleasure.",
    author: "F. Scott Fitzgerald"
  },
  {
    quote: "We are always complaining that our days are few, and acting as though there would be no end of them.  ",
    author: "Seneca"
  },
  {
    quote: "Where does a thought go when it's forgotten?",
    author: "Sigmund Freud"
  },
  {
    quote: "If you hang out with chickens, you're going to cluck and if you hang out with eagles, you're going to fly.",
    author: "Steve Maraboli"
  },
  {
    quote: "A lie can travel half way around the world while the truth is putting on its shoes.",
    author: "Mark Twain"
  },
  {
    quote: "A simple rule in dealing with those who are hard to get along with is to remember that this person is striving to assert his superiority; and you must deal with him from that point of view.",
    author: "Alfred Adler"
  },
  {
    quote: "Continuous effort - not strength or intelligence - is the key to unlocking our potential.",
    author: "Winston Churchill"
  },
  {
    quote: "To every action there is always opposed an equal reaction.",
    author: "Isaac Newton"
  },
  {
    quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    author: "Winston Churchill "
  },
  {
    quote: "Happiness comes when you believe in what you are doing, know what you are doing, and love what you are doing.",
    author: "Brian Tracy"
  },
  {
    quote: "Science can flourish only in an atmosphere of free speech. ",
    author: "Albert Einstein",
  },
  {
    quote: "Human behavior flows from three main sources: desire, emotion, and knowledge.",
    author: "Plato"
  },
  {
    quote: "To do great work one must be very idle as well as very industrious.",
    author: "Samuel Butler"
  },
  {
    quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
    author: "Albus Dumbledore"
  },
  {
    quote: "We can see through others only when we can see through ourselves.",
    author: "Bruce Lee"
  },
  {
    quote: "We will act consistently with our view of who we truly are, whether that view is accurate or not.",
    author: "Tony Robbins"
  },
  {
    quote: "We have no more right to consume happiness without producing it than to consume wealth without producing it.",
    author: "George Bernard Shaw"
  }
];
Quotes
  .remove({})
  .then(() => Quotes.collection.insertMany(quotesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });