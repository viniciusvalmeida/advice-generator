# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

### Links

-   Solution URL: [https://www.frontendmentor.io/solutions/advice-generator-app-nextjs-tailwindcss-typescript-api-\_hLJk7rAQ5](https://www.frontendmentor.io/solutions/advice-generator-app-nextjs-tailwindcss-typescript-api-_hLJk7rAQ5)
-   Live Site URL: [https://advice-generator-indol-kappa.vercel.app/](https://advice-generator-indol-kappa.vercel.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Next.js](https://nextjs.org/) - React framework
-   [TailwindCSS](https://tailwindcss.com) - For styles

### What I learned

I putted in practice the concept to fetch the API in the first access to page when call the hook useEffect with a empty array as second parameter to fill the advice state

#### The function that fetches API

```js
const fetchAdvice = async () => {
	const res = await fetch("https://api.adviceslip.com/advice");
	const data: Advice = await res.json();

	setAdvice(data);
};
```

#### UseEffect Hook

```js
useEffect(() => {
	fetchAdvice();
}, []);
```
