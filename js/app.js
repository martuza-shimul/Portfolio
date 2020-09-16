const header = document.querySelector(".side-nav");
const nav = document.querySelector(".side-nav .navbar");
const social = document.querySelector(".side-nav .social-icons");

const openMenu = () => {
	nav.classList.add("open-mobile-nav");
	nav.classList.remove("toggle-display");
	social.classList.remove("toggle-display-social");
	social.classList.add("open-mobile-social");
};
const closeMenu = () => {
	nav.classList.remove("open-mobile-nav");
	nav.classList.add("toggle-display");
	social.classList.add("toggle-display-social");
	social.classList.remove("open-mobile-social");
};

window.addEventListener("scroll", () => {
	const scrollPos = window.scrollY;
	if (scrollPos > 150) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});

const texts = [
	"React",
	"JavaScript",
	"Shopify",
	"BigCommerce",
	"WordPress",
	"Ai ChatBot",
	"consultation",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
	if (count === texts.length) {
		count = 0;
	}

	currentText = texts[count];
	letter = currentText.slice(0, ++index);

	document.querySelector(".typing").textContent = letter;
	if (letter.length === currentText.length) {
		count++;
		index = 0;
	}
	setTimeout(type, 350);
})(); //this is a IFFE -- self invoced function
