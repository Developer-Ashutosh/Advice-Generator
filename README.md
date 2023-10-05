# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/advice-generator-s8hbP5gNK2). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Advice Generator](https://www.frontendmentor.io/solutions/advice-generator-s8hbP5gNK2)
- Live Site URL: [Advice Generator App](https://developer-ashutosh.github.io/Advice-Generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive

### What I learned

```js

const adviceId = document.querySelector("#adviceId");
const advice = document.querySelector(".advice");
const adviceBtn = document.querySelector('.adviceBtn')

const generate = function () {
    adviceBtn.addEventListener("click", async function () {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        adviceId.innerText = data.slip.id;
        advice.innerText = '"' + data.slip.advice + '"';
    })
}

generate();

```

## Author

- Frontend Mentor - [@Developer-Ashutosh](https://www.frontendmentor.io/profile/Developer-Ashutosh)
- GitHub - [Developer-Ashutosh](https://github.com/Developer-Ashutosh)
