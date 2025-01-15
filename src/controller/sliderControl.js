let currentSlide = 0;
let autoSlide; // Declarar a variável fora para poder limpar e redefinir o intervalo

// Função para mostrar o slide
function showSlide(index) {
	const slides = document.querySelectorAll(".slide");
	const totalSlides = slides.length;

	// Corrigir o índice para evitar erros
	if (index >= totalSlides) {
		currentSlide = 0;
	} else if (index < 0) {
		currentSlide = totalSlides - 1;
	} else {
		currentSlide = index;
	}

	// Atualizar a posição do slider
	const slider = document.querySelector(".slider");
	slider.style.transform = `translateX(-${currentSlide * 100}%)`;

	// Atualizar o estado visual dos controles
	const controls = document.querySelectorAll(".slider-control");
	controls.forEach((control, i) => {
		control.classList.toggle("active", i === currentSlide);
	});

	// Reiniciar o intervalo para troca automática de slides
	clearInterval(autoSlide);
	autoSlide = setInterval(() => {
		showSlide(currentSlide + 1);
	}, 5000); // 5000 milissegundos = 5 segundos
}

// Inicializar o slider
showSlide(currentSlide);

// Associar controles aos slides
const controls = document.querySelectorAll(".slider-control");
controls.forEach((control, index) => {
	control.addEventListener("click", () => {
		showSlide(index);
	});
});

// // Mudar de slide automaticamente a cada 5 segundos
// autoSlide = setInterval(() => {
// 	showSlide(currentSlide + 1);
// }, 5000); // 5000 milissegundos = 5 segundos
