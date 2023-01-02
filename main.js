window.addEventListener("load", () => {
  const preload = document.querySelector(".preloader");
  setTimeout(function () {
    preload.classList.add("hidden");
  }, 3000);
});
new hoverEffect({
	parent: document.querySelector(".project-thumbnail1"),
	intensity: 0.3,
	image1: "images/image5.jpg",
	image2: "images/image6.jpg",
	displacementImage: "images/diss.png",
	imagesRatio: 381 / 494,
});

new hoverEffect({
	parent: document.querySelector(".project-thumbnail2"),
	intensity: 0.3,
	image1: "images/image1.jpg",
	image2: "images/image2.jpg",
	displacementImage: "images/diss.png",
	imagesRatio: 381 / 494,
});

new hoverEffect({
	parent: document.querySelector(".project-thumbnail3"),
	intensity: 0.3,
	image1: "images/image3.jpg",
	image2: "images/image4.jpg",
	displacementImage: "images/diss.png",
	imagesRatio: 381 / 494,
});
/*SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
	distance: "30px",
	duration: 1800,
	reset: true,
});

sr.reveal(
	`.intro-text`,
	{
		origin: "top",
		interval: 200,
	}
);

sr.reveal(`.p-1, .p-3`, {
	origin: "left",
});

sr.reveal(`.p-2, .p-4`, {
	origin: "right",
});
