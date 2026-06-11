const quotes = [
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  },
  {
    text: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
  },
  {
    text: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth"
  },
  {
    text: "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith"
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    text: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    author: "Henry Ford"
  },
  {
    text: "In order to write about life first you must live it.",
    author: "Ernest Hemingway"
  },
  {
    text: "The big lesson in life, baby, is never be scared of anyone or anything.",
    author: "Frank Sinatra"
  },
  {
    text: "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
    author: "Attributed to various"
  },
  {
    text: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    author: "Leo Burnett"
  },
  {
    text: "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard"
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    text: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    author: "Dolly Parton"
  },
  {
    text: "Do all the good you can, for all the people you can, in all the ways you can, as long as ever you can.",
    author: "Hillary Clinton"
  },
  {
    text: "Don’t settle for what life gives you; make life better and build something.",
    author: "Ashton Kutcher"
  },
  {
    text: "Everything negative - pressure, challenges - is all an opportunity for me to rise.",
    author: "Kobe Bryant"
  },
  {
    text: "I like criticism. It makes you strong.",
    author: "LeBron James"
  },
  {
    text: "You never really learn much from hearing yourself speak.",
    author: "George Clooney"
  },
  {
    text: "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
    author: "Celine Dion"
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    text: "Life is a succession of lessons which must be lived to be understood.",
    author: "Helen Keller"
  },
  {
    text: "May you live all the days of your life.",
    author: "Jonathan Swift"
  },
  {
    text: "Life itself is the most wonderful fairy tale.",
    author: "Hans Christian Andersen"
  },
  {
    text: "Do not let making a living prevent you from making a life.",
    author: "John Wooden"
  },
  {
    text: "Life is a flower of which love is the honey.",
    author: "Victor Hugo"
  },
  {
    text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: "Marilyn Monroe"
  },
  {
    text: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    author: "Buddha"
  },
  {
    text: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain"
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    text: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein"
  },
  {
    text: "Live in the sunshine, swim the sea, drink the wild air.",
    author: "Ralph Waldo Emerson"
  },

  // --- LOVE (41-80) ---
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    text: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle"
  },
  {
    text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
    author: "Victor Hugo"
  },
  {
    text: "We are shaped and fashioned by what we love.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu"
  },
  {
    text: "There is only one happiness in this life, to love and be loved.",
    author: "George Sand"
  },
  {
    text: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare"
  },
  {
    text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    text: "The art of love is largely the art of persistence.",
    author: "Albert Ellis"
  },
  {
    text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    author: "Maya Angelou"
  },
  {
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott"
  },
  {
    text: "Love is a game that two can play and both win.",
    author: "Eva Gabor"
  },
  {
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi"
  },
  {
    text: "If I know what love is, it is because of you.",
    author: "Hermann Hesse"
  },
  {
    text: "Love is the flower; you've got to let it grow.",
    author: "John Lennon"
  },
  {
    text: "I have decided to stick with love. Hate is too great a burden to bear.",
    author: "Martin Luther King, Jr."
  },
  {
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn"
  },
  {
    text: "Let us always meet each other with smile, for the smile is the beginning of love.",
    author: "Mother Teresa"
  },
  {
    text: "A successful marriage requires falling in love many times, always with the same person.",
    author: "Mignon McLaughlin"
  },
  {
    text: "Love cures people - both the ones who give it and the ones who receive it.",
    author: "Karl Menninger"
  },
  {
    text: "We love because it's the only true adventure.",
    author: "Nikki Giovanni"
  },
  {
    text: "True love is quiet, except in the thrills of a shared moment.",
    author: "Unknown"
  },
  {
    text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    author: "Maya Angelou"
  },
  {
    text: "If you find someone you love in your life, then hang on to that love.",
    author: "Princess Diana"
  },
  {
    text: "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.",
    author: "Paulo Coelho"
  },
  {
    text: "To be brave is to love someone unconditionally, without expecting anything in return.",
    author: "Madonna"
  },
  {
    text: "We love the things we love for what they are.",
    author: "Robert Frost"
  },
  {
    text: "Love is the only force capable of transforming an enemy into a friend.",
    author: "Martin Luther King, Jr."
  },
  {
    text: "Intense love does not measure, it just gives.",
    author: "Mother Teresa"
  },
  {
    text: "A heart that loves is always young.",
    author: "Greek Proverb"
  },
  {
    text: "The giving of love is an education in itself.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Love is when the other person's happiness is more important than your own.",
    author: "H. Jackson Brown, Jr."
  },
  {
    text: "To love is to burn, to be on fire.",
    author: "Jane Austen"
  },
  {
    text: "There is no remedy for love but to love more.",
    author: "Henry David Thoreau"
  },
  {
    text: "You don't love someone because they're perfect, you love them in spite of the fact that they're not.",
    author: "Jodi Picoult"
  },
  {
    text: "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
    author: "Antoine de Saint-Exupéry"
  },
  {
    text: "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
    author: "Lao Tzu"
  },
  {
    text: "The water shines only by the sun. And it is you who are my sun.",
    author: "Charles de Leusse"
  },
  {
    text: "Where there is great love, there are always miracles.",
    author: "Willa Cather"
  },

  // --- PATIENCE (81-120) ---
  {
    text: "Patience is not simply the ability to wait - it's how we behave while we're waiting.",
    author: "Joyce Meyer"
  },
  {
    text: "Patience is bitter, but its fruit is sweet.",
    author: "Jean-Jacques Rousseau"
  },
  {
    text: "He that can have patience can have what he will.",
    author: "Benjamin Franklin"
  },
  {
    text: "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
    author: "John Quincy Adams"
  },
  {
    text: "Patience is the companion of wisdom.",
    author: "Saint Augustine"
  },
  {
    text: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy"
  },
  {
    text: "Rivers know this: there is no hurry. We shall get there some day.",
    author: "A.A. Milne"
  },
  {
    text: "Trees that are slow to grow bear the best fruit.",
    author: "Molière"
  },
  {
    text: "Genius is nothing but a great aptitude for patience.",
    author: "George-Louis Leclerc de Buffon"
  },
  {
    text: "Have patience with all things, but, first of all, with yourself.",
    author: "Saint Francis de Sales"
  },
  {
    text: "Patience is a virtue, and I'm learning to have it.",
    author: "Unknown"
  },
  {
    text: "All good things come to he who waits.",
    author: "Proverb"
  },
  {
    text: "Our patience will achieve more than our force.",
    author: "Edmund Burke"
  },
  {
    text: "Patience, persistence and perspiration make an unbeatable combination for success.",
    author: "Napoleon Hill"
  },
  {
    text: "Adopt the pace of nature: her secret is patience.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Tolerance and patience are much deeper and more effective than mere indifference.",
    author: "Dalai Lama"
  },
  {
    text: "It is very strange that the years teach us patience - that the shorter our time, the greater our capacity for waiting.",
    author: "Elizabeth Taylor"
  },
  {
    text: "Patience is the art of hoping.",
    author: "Luc de Clapiers"
  },
  {
    text: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
    author: "Lao Tzu"
  },
  {
    text: "To lose patience is to lose the battle.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Patience is not passive; on the contrary, it is active; it is concentrated strength.",
    author: "Edward G. Bulwer-Lytton"
  },
  {
    text: "The key to everything is patience. You get the chicken by hatching the egg, not by smashing it.",
    author: "Arnold H. Glasow"
  },
  {
    text: "He who is patient has great understanding, but the quick-tempered displays folly.",
    author: "Proverbs 14:29"
  },
  {
    text: "Teach us, O Lord, the disciplines of patience, for to wait is often harder than to work.",
    author: "Peter Marshall"
  },
  {
    text: "A man who is a master of patience is master of everything else.",
    author: "George Savile"
  },
  {
    text: "Patience is the support of weakness; impatience the ruin of strength.",
    author: "Charles Caleb Colton"
  },
  {
    text: "The primary asset of any investor is not their money, but their patience.",
    author: "Unknown"
  },
  {
    text: "With love and patience, nothing is impossible.",
    author: "Daisaku Ikeda"
  },
  {
    text: "Perfect patience is the result of perfect peace.",
    author: "Unknown"
  },
  {
    text: "Patience is the key that opens the door to a more fulfilling life.",
    author: "Unknown"
  },
  {
    text: "Great things are not done by impulse, but by a series of small things brought together.",
    author: "Vincent van Gogh"
  },
  {
    text: "A waiting person is not a lazy person, but a patient person preparing for the right season.",
    author: "Unknown"
  },
  {
    text: "Everything comes to you in the right moment. Be patient.",
    author: "Unknown"
  },
  {
    text: "Patience is the quiet strength that keeps us moving forward when everything else tells us to stop.",
    author: "Unknown"
  },
  {
    text: "Be patient with yourself. Self-growth is tender; it’s holy ground. There’s no greater investment.",
    author: "Stephen Covey"
  },
  {
    text: "Good character is not formed in a week or a month. It is created little by little, day by day. Protracted and patient effort is needed.",
    author: "Heraclitus"
  },
  {
    text: "Patience is the ability to idle your motor when you feel like stripping your gears.",
    author: "Barbara Johnson"
  },
  {
    text: "Patience is the trust that the seeds we plant will bloom in their own time.",
    author: "Unknown"
  },
  {
    text: "Endurance is not just the ability to bear a hard thing, but to turn it into a glory.",
    author: "William Barclay"
  },
  {
    text: "Peace, patience, and perseverance are the cornerstones of a resilient soul.",
    author: "Unknown"
  }
];

const button = document.querySelector('button');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * quotes.length);
    
    const randomQuote = quotes[index];
    
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
});