const moodData = {
    stressed: {
        background: "linear-gradient(-45deg, #113f48, #19545d, #277966, #1f5f4b)", 
        emoji: "🌊",
        title: "Calming Down...",
        quote: "Take a long slow breath. Let the nostalgia wash away the rush of the world around you."
    },
    creative: {
        background: "linear-gradient(-45deg, #a83279, #6d214f, #3a1c5c, #833471)", 
        emoji: "🎨",
        title: "Creative Matrix Active",
        quote: "Art isn't meant to be perfect; it's meant to tell your truth. Trust your hands and start making."
    },
    sleepy: {
        background: "linear-gradient(-45deg, #020024, #05051a, #0c1033, #090942)", 
        emoji: "🌌",
        title: "Entering Dreamscape",
        quote: "Close your eyes. Your mind has traveled far today. Give it permission to drift cleanly into space."
    },
    energetic: {
        background: "linear-gradient(-45deg, #b71c1c, #dd2c00, #ff6d00, #e65100)", 
        emoji: "⚡",
        title: "Max Power Unlocked",
        quote: "The engine is roaring. Break down whatever ceiling is in your way today. Move fast, win big!"
    }
};

const buttons = document.querySelectorAll('.mood-btn');
const mainContainer = document.getElementById('main-container');
const uiHeader = document.getElementById('ui-header');
const uiGrid = document.getElementById('ui-grid');

const moodEmoji = document.getElementById('mood-emoji');
const moodTitle = document.getElementById('mood-title');
const moodQuote = document.getElementById('mood-quote');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetMood = button.getAttribute('data-mood');
        const selected = moodData[targetMood];

        if (selected) {
            // A. Hide selection layout completely
            uiHeader.classList.add('hidden-elements');
            uiGrid.classList.add('hidden-elements');
            mainContainer.classList.add('expanded-card');

            // B. Apply new colors and trigger the moving animation
            document.body.style.background = selected.background;
            document.body.classList.add('animated-bg');

            // C. Smoothly swap out card texts
            moodEmoji.textContent = selected.emoji;
            moodTitle.textContent = selected.title;
            moodQuote.textContent = `"${selected.quote}"`;
        }
    });
});