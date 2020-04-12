const header = document.querySelector(".side-nav");
const nav = document.querySelector(".side-nav .navbar");
const social = document.querySelector(".side-nav .social-icons");

const openMenu = () => {
	nav.classList.add("show");
	nav.classList.remove("toggle-display");
	social.classList.remove("toggle-display");
	social.classList.add("show");
};
const closeMenu = () => {
	nav.classList.remove("show");
	nav.classList.add("toggle-display");
	social.classList.add("toggle-display");
	social.classList.remove("show");
};

window.addEventListener("scroll", () => {
	const scrollPos = window.scrollY;
	if (scrollPos > 150) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});
