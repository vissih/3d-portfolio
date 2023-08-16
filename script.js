const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut
        duration: 2,
        delay: -1,
        stagger: .2
    })
    .from("#herofooter",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function circleMouseFollower(){
    window.addEventListener("mousemove",function(details){
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
}
)}

circleMouseFollower();
firstPageAnim();