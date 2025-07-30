document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn');
  const quote1 = document.getElementById('quote');
  const author1 = document.getElementById('author');
  const audio = document.getElementById('my-audio');
  const bgNight = document.querySelector(".bg-night");
  const bgDay = document.querySelector(".bg-day");
  const body = document.body;

  function getRandomQuote() {
    audio.play();
    audio.currentTime = 0;

    let random = Math.floor(Math.random() * quotes.length);
    quote1.innerHTML = quotes[random].text;
    author1.innerHTML = quotes[random].author;
  }

  function copyQuote() {
    audio.play();
    audio.currentTime = 0;

    const quoteText = quote1.innerText;
    const authorText = author1.innerText;
    const fullQuote = `${quoteText}\n\n- ${authorText}`;

    navigator.clipboard.writeText(fullQuote).then(() => {
      const copyBtn = document.getElementById('copy-btn');
      const originalText = copyBtn.innerText;
      copyBtn.innerText = 'Copied!';
      setTimeout(() => {
        copyBtn.innerText = originalText;
      }, 2000);
    });
  }



  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Perseverance is not a long race; it's many short races one after the other.", author: "Walter Elliot" },
    { text: "I can, therefore I am.", author: "Simone Weil" },
    { text: "Your big opportunity may be right where you are now.", author: "Napoleon Hill" },
    { text: "If you’re going through hell, keep going.", author: "Winston Churchill" },
    { text: "Light tomorrow with today.", author: "Elizabeth Barrett Browning" },
    { text: "Limit your 'always' and your 'nevers'.", author: "Amy Poehler" },
    { text: "You do not find the happy life. You make it.", author: "Camilla Eyring Kimball" },
    { text: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
    { text: "You are enough just as you are.", author: "Meghan Markle" },
    { text: "One day or day one. You decide.", author: "Paulo Coelho" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Whether you think you can or think you can’t, you’re right.", author: "Henry Ford" },
    { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don’t be pushed by your problems. Be led by your dreams.", author: "Ralph Waldo Emerson" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Aim for the moon. If you miss, you may hit a star.", author: "W. Clement Stone" },
    { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The harder the battle, the sweeter the victory.", author: "Les Brown" },
    { text: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney" },
    { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { text: "Go the extra mile, it’s never crowded.", author: "Wayne Dyer" },
    { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" },
    { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { text: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
    { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Sometimes later becomes never. Do it now.", author: "Osama’s Favorite" },
    { text: "Great things never come from comfort zones.", author: "Osama’s Favorite" },
    { text: "Dream it. Believe it. Build it.", author: "Osama’s Favorite" },
    { text: "The key to success is to start before you’re ready.", author: "Osama’s Favorite" },
    { text: "Your limitation—it’s only your imagination.", author: "Osama’s Favorite" },
    { text: "Dream bigger. Do bigger.", author: "Osama’s Favorite" },
    { text: "Do what is right, not what is easy.", author: "Osama’s Favorite" },
    { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Osama’s Favorite" },
    { text: "You are capable of amazing things.", author: "Osama’s Favorite" },
    { text: "Stay positive, work hard, make it happen.", author: "Osama’s Favorite" },
    { text: "Sometimes the smallest step in the right direction ends up being the biggest step of your life.", author: "Osama’s Favorite" },
    { text: "Don’t stop until you’re proud.", author: "Osama’s Favorite" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Osama’s Favorite" },
    { text: "Don’t limit your challenges. Challenge your limits.", author: "Osama’s Favorite" },
    { text: "To get something you never had, you have to do something you never did.", author: "Osama’s Favorite" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Do what you love, love what you do.", author: "Ray Bradbury" },
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
    { text: "Dream big, work hard, stay focused, and surround yourself with good people.", author: "Unknown" },
    { text: "Success isn’t about how much money you make; it’s about the difference you make in people’s lives.", author: "Michelle Obama" },
    { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Success seems to be connected with action. Successful people keep moving.", author: "Conrad Hilton" },
    { text: "I never dreamed about success, I worked for it.", author: "Estée Lauder" },
    { text: "The harder the conflict, the greater the triumph.", author: "George Washington" },
    { text: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "You have to expect things of yourself before you can do them.", author: "Michael Jordan" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.", author: "Chantal Sutherland" },
    { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    {
      text: "Asking for help isn't giving up. It's refusing to give up.",
      author: "Charlie Mackesy"
    },
    {
      text: "You are loved and important and you bring things to this world that no one else can.",
      author: "Charlie Mackesy"
    },
    {
      text: "Imagine how we would be if we were less afraid.",
      author: "Charlie Mackesy"
    },
    {
      text: "Home isn't always a place, is it?",
      author: "Charlie Mackesy"
    },
    {
      text: "One day you'll look back and realize how hard it was and just how well you did.",
      author: "Manar"
    },
    {
      text: "When you understand the game you don’t panic.",
      author: "Manar"
    },
    {
      text: "ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب.",
      author: "النبي محمد ﷺ (رواه البخاري ومسلم)"
    },
    {
      text: "خير الناس أنفعهم للناس.",
      author: "النبي محمد ﷺ (رواه الطبراني وحسنه الألباني)"
    },
    {
      text: "يسروا ولا تعسروا، وبشروا ولا تنفروا.",
      author: "النبي محمد ﷺ (رواه البخاري ومسلم)"
    },
    {
      text: "You can't tell big dreams to small minded people.",
      author: "Steve Harvey"
    },
    {
      text: "Don't give up on your dreams, or your dreams will give up on you.",
      author: "John Wooden"
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "Les Brown"
    },
    {
      text: "Never let your memories be greater than your dreams.",
      author: "Doug Ivester"
    },
    {
      text: "Dream big. Start small. But most of all, start.",
      author: "Simon Sinek"
    },
    {
      text: "Anxiety is the dizziness of freedom.",
      author: "Søren Kierkegaard"
    }, 
  ];



  function QuoteOfTheDay() {
    const today = new Date();
    const dayKey = today.toDateString();

    const saved = localStorage.getItem("quoteOfTheDay");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === dayKey) {
        quote1.innerText = parsed.text;
        author1.innerText = parsed.author;
        return;
      }
    }

    let usedIndexes = JSON.parse(localStorage.getItem("usedQuoteIndexes")) || [];

    let availableQuotes = quotes
      .map((q, i) => ({ ...q, index: i }))
      .filter(q => !usedIndexes.includes(q.index));

    if (availableQuotes.length === 0) {
      usedIndexes = [];
      availableQuotes = quotes.map((q, i) => ({ ...q, index: i }));
    }

    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const selected = availableQuotes[randomIndex];

    quote1.innerText = selected.text;
    author1.innerText = selected.author;

    localStorage.setItem("quoteOfTheDay", JSON.stringify({
      date: dayKey,
      text: selected.text,
      author: selected.author
    }));

    usedIndexes.push(selected.index);
    localStorage.setItem("usedQuoteIndexes", JSON.stringify(usedIndexes));
  }
  function setMode(isNight) {
    if (isNight) {

      body.classList.add("night-mode");
      bgNight.style.display = "block";
      bgDay.style.display = "none";
    } else {

      body.classList.remove("night-mode");
      bgNight.style.display = "none";
      bgDay.style.display = "block";
    }
  }

  function scheduleNextSwitch() {
    const now = new Date();
    const hour = now.getHours();
    let nextSwitch;

    if (hour >= 6 && hour < 18) {
      nextSwitch = new Date();
      nextSwitch.setHours(18, 0, 0, 0);
    } else {
      nextSwitch = new Date();
      if (hour >= 18) {
        nextSwitch.setDate(nextSwitch.getDate() + 1);
      }
      nextSwitch.setHours(6, 0, 0, 0);
    }

    const delay = nextSwitch - now;

    setTimeout(() => {
      const newIsNight = !(body.classList.contains("night-mode"));
      setMode(newIsNight);
      scheduleNextSwitch();
    }, delay);
  }


  const now = new Date();
  const hour = now.getHours();
  const isNight = hour >= 18 || hour < 6;
  setMode(isNight);
  scheduleNextSwitch();
  QuoteOfTheDay();


  btn.addEventListener('click', getRandomQuote);
  document.getElementById('copy-btn').addEventListener('click', copyQuote);
});