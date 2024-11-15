document.addEventListener("DOMContentLoaded", () => {
    initializeTestimonialsSlider();
    initializeFaqSection();
});

function initializeTestimonialsSlider() {
    const testimonialsWrapper = document.querySelector(".testimonials-wrapper");
    const testimonials = document.querySelectorAll(".testimonial");
    const lines = document.querySelectorAll(".lines .line");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const prevRect = prevBtn.querySelector("rect");
    const nextRect = nextBtn.querySelector("rect");
    let currentIndex = 0;

    const updateSlider = () => {
        lines.forEach(line => line.firstElementChild.style.fill = "#C2D1E0");
        lines[currentIndex].firstElementChild.style.fill = "#003366";
        testimonialsWrapper.style.transform = `translateX(-${currentIndex * 50}%)`;

        if (currentIndex === 0) {
            prevBtn.disabled = true;
            prevRect.style.fill = "#C2D1E0";
        } else {
            prevBtn.disabled = false;
            prevRect.style.fill = "#003366";
        }

        if (currentIndex === testimonials.length - 1) {
            nextBtn.disabled = true;
            nextRect.style.fill = "#C2D1E0";
        } else {
            nextBtn.disabled = false;
            nextRect.style.fill = "#003366";
        }
    };

    const changeSlide = (indexChange) => {
        currentIndex = (currentIndex + indexChange + testimonials.length) % testimonials.length;
        updateSlider();
    };

    nextBtn.addEventListener("click", () => changeSlide(1));
    prevBtn.addEventListener("click", () => changeSlide(-1));

    lines.forEach((line, index) => {
        line.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider();
}

function initializeFaqSection() {
    const questions = document.querySelectorAll(".question-item-q");

    const toggleAnswerVisibility = (question) => {
        const answer = question.nextElementSibling;
        const plusIcon = question.querySelector(".toggle-plus");
        const minusIcon = question.querySelector(".toggle-minus");
        const isAnswerVisible = answer.style.display === "block";

        answer.style.display = isAnswerVisible ? "none" : "block";
        plusIcon.style.display = isAnswerVisible ? "block" : "none";
        minusIcon.style.display = isAnswerVisible ? "none" : "block";
    };

    if (questions.length > 0) {
        questions[0].nextElementSibling.style.display = "block";
        questions[0].querySelector(".toggle-minus").style.display = "block";
        questions[0].querySelector(".toggle-plus").style.display = "none";
    }

    questions.forEach(question => {
        question.addEventListener("click", () => toggleAnswerVisibility(question));
    });
}
