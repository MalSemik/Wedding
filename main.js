// COUNTDOWN
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Jul 11, 2020 15:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
        // document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)

//MENU
$(".burger").on("click", function () {
    $(".fa-bars,.fa-times, nav, h1, h2").toggleClass("show");
})
$(".fa-times").on("click", function () {
    $(".fa-bars,.fa-times, nav, h1,h2").toggleClass("show");
})

//SCROLL
$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000)
    $(".fa-bars,.fa-times, nav, h1, h2").toggleClass("show")
})

//CAROUSEL

// const slideList = [{
//         img: "media/us.png"
//     },
//     {
//         img: "media/us2.png"
//     },
//     {
//         img: "media/us3.png"
//     }
// ];

// const image = document.querySelector("img.slider")
// const time = 5000;
// let active = 0;
// const changeSlide = () => {
//     document.getElementById('slider').className += "fadeOut";
//     active++;
//     if (active === slideList.length) {
//         active = 0;
//     }
//     image.src = slideList[active].img;
//     document.getElementById('slider').className = "";


// }
// setInterval(changeSlide, time)

// var imgArray = ["media/us.png", "media/us2.png", "media/us3.png"];
// curIndex = 0;
// imgDuration = 5000;

// function slideShow() {
//     document.getElementById('slider').className += "fadeOut";
//     setTimeout(function () {
//         document.getElementById('slider').src = imgArray[curIndex];
//         document.getElementById('slider').className = "";
//     }, 1000);
//     curIndex++;
//     if (curIndex == imgArray.length) {
//         curIndex = 0;
//     }
//     setTimeout(slideShow, imgDuration);
// }
// slideShow();
const time = 5000;
const dots = [...document.querySelectorAll(".dots span")];
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active")
}
var active = 0,
    slides = document.getElementsByTagName("img");
const changeSlide = () => {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    active = (active != slides.length - 1) ? active + 1 : 0;
    slides[active].style.opacity = 1;
    changeDot();

}
setInterval(changeSlide, time)