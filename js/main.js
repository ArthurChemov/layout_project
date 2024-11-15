// Testimonials

document.addEventListener("DOMContentLoaded", function () {
    const testimonialsWrapper = document.querySelector(".testimonials-wrapper");
    const testimonials = document.querySelectorAll(".testimonial");
    const lines = document.querySelectorAll(".lines .line");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;

    function updateSlider() {
        lines.forEach((line) => line.firstElementChild.style.fill = "#C2D1E0");

        lines[currentIndex].firstElementChild.style.fill = "#003366";

        testimonialsWrapper.style.transform = `translateX(-${currentIndex * 50}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider();
    }

    nextBtn.addEventListener("click", nextSlide);

    prevBtn.addEventListener("click", prevSlide);

    lines.forEach((line, index) => {
        line.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider();
});


// Faq-section
window.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question-item-q');
    questions[0].nextElementSibling.style.display = 'block';
    questions[0].querySelector('.toggle-minus').style.display = 'block'
    questions[0].querySelector('.toggle-plus').style.display = 'none'

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling
            const plusIcon = question.querySelector('.toggle-plus');
            const minusIcon = question.querySelector('.toggle-minus');

            const isAnswerVisible = answer.style.display === 'block'
            answer.style.display = isAnswerVisible ? 'none' : 'block'

            plusIcon.style.display = isAnswerVisible ? 'block' : 'none';
            minusIcon.style.display = isAnswerVisible ? 'none' : 'block';


        })
    })
})

