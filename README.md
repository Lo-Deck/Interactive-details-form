# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page


### Screenshot


![screenshot mobile](https://github.com/Lo-Deck/Interactive-details-form/blob/main/screenshot/Interactive%20card%20details%20form-mobile.png).
![screenshot desktop](https://github.com/Lo-Deck/Interactive-details-form/blob/main/screenshot/Interactive%20card%20details%20form-desktop.png).
![screenshot desktop-error](https://github.com/Lo-Deck/Interactive-details-form/blob/main/screenshot/Interactive%20card%20details%20form-desktop-error.png).
![screenshot desktop-fill](https://github.com/Lo-Deck/Interactive-details-form/blob/main/screenshot/Interactive%20card%20details%20form-desktop-fill.png).
![screenshot desktop-valid](https://github.com/Lo-Deck/Interactive-details-form/blob/main/screenshot/Interactive%20card%20details%20form-desktop-valid.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Interactive-details-form).
- Live Site URL: [Website](https://lo-deck.github.io/Interactive-details-form/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned


I learned how to validate a `form`:


```js
Array.from(myForm).forEach( (item, index) => {

        if(!item.validity.valid){

```

and display different error message :

```
const spanError = index !== 1 ? `<span class="error">Can't be blank</span>` : `<span class="error">Wrong format, numbers only</span>`;
item.parentElement.insertAdjacentHTML('beforeend', spanError);  

```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.