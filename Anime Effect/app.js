const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//EN SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

// SCROLL MAGIC

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 7000,
    triggerElement: intro,
    triggerHook: 0
})

    .addIndicators()
    .setPin(intro)
    .addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller)

//VIDEO ANIMATION
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;

});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 180)