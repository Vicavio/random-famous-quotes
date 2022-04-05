const quotes = [
    {author: "-Ed van der Elsken-",
     quote: "Who am I to spout about life, love, happiness? About whether all’s right with the world, or whether it’s just a vale of tears. I think it’s unbelievable, fabulous, this life of ours —everything, the birds and the bees, the deer and the antelope, the spacious skies, the foggy dew, the rockabye babies. . . . My wife’s embrace, a landing on the moon, space, time, eternity. I don’t understand one damn thing about any of it, except that it’s enough to keep me in a constant delirium of delight, surprise, enthusiasm, despair, enough to keep me roaming, stumbling, faltering, cursing, adoring, hating the destruction, the violence in myself and others."
    },
    {author: "-Hayao Miyazaki-",
     quote: "Problems begin the moment we're born. We're born with infinite possibilities, only to give up on one after another. To choose one thing means to give up another. That's inevitable. But what can you do? That's what it is to live."
    },
    {author: "-Carl Jung-",
     quote: "I am not what happened to me, I am what I choose to become."
    },
    {author: "-Dante Alighieri-",
     quote: "In the middle of the journey of our life I came to myself within a dark wood where the straight way was lost."
    },
    {author: "-Mircea Eliade-",
     quote: "The way towards ‘wisdom’ or towards ‘freedom’ is the way towards your inner being. This is the simplest definition of metaphysics."
    }
];

document.getElementById("button").onclick = function displayQuote() {
    let random = quotes[Math.floor(Math.random() * (quotes.length))];
    document.getElementById("author").innerHTML = random.author;
    document.getElementById("quote").innerHTML = random.quote;
    
}