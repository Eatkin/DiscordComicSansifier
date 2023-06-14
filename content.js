let styleElement = document.createElement('style');
styleElement.textContent = 'body {font-family: "Comic Sans MS", "Comic Sans", cursive; !important;}'
let head = document.head || document.getElementsByTagName('head')[0];
head.appendChild(styleElement);
