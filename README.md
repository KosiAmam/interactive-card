# Interactive Card Details Form – Frontend Mentor Challenge

This is my solution to the [Interactive Card Details Form challenge](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw) on Frontend Mentor. I used this project to sharpen my skills in building responsive layouts, real-time form interaction, and basic input validation using vanilla JavaScript.

---

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Live Link](#live-link)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Key Learnings](#key-learnings)
  - [Things to Improve](#things-to-improve)
  - [Resources](#resources)
- [Author](#author)
- [Thanks](#thanks)

---

## Overview

### The Challenge

The main goal of this challenge was to build an interactive card form that:

- Updates card details in real-time as the user types
- Handles form validation (blank fields, incorrect formats)
- Gives immediate feedback for errors
- Works smoothly across different screen sizes (mobile & desktop)

---

### Live Link

- GitHub Repo: [https://github.com/KosiAmam/interactive-card.git](https://github.com/KosiAmam/interactive-card.git)
- Live Site on Vercel: [https://your-project-name.vercel.app](https://your-project-name.vercel.app)

---

## My Process

### Built With

- HTML5
- CSS3 (Flexbox + Grid)
- JavaScript (vanilla)
- Mobile-first responsive design
- Basic form validation logic

---

### Key Learnings

Working on this project helped me:

- Understand how to connect form inputs with visual UI updates
- Practice formatting user input (like auto-spacing the card number)
- Write simple form validation using regex and conditional logic
- Manage state and error feedback in a clean way without any libraries

```js
cardNumberInput.addEventListener("input", (e) => {
  const formatted = e.target.value
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
  cardNumberDisplay.textContent = formatted;
});


Things to Improve
 Add ARIA labels and other accessibility features

 Handle more validation edge cases (e.g., invalid expiry months like 00 or >12)

 Store form input in local storage to preserve state on refresh

 Rebuild using React for practice with controlled components

 Improve mobile responsiveness further with clamp() and fluid typography


Author
GitHub: @kosiAmam