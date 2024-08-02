var crsr = document.querySelector("#cursor");

document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.clientX + "px";
    crsr.style.top = dets.clientY + "px";
});

var h4ALL = document.querySelectorAll("#nav h4");

h4ALL.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        crsr.style.opacity = 1;
        crsr.style.transform = "scale(3)";
        crsr.style.border = "0.3px solid #fffff3";
        crsr.style.backgroundColor = "transparent";
    });
    e.addEventListener("mouseleave", () => {
        crsr.style.transform = "scale(1)";
        crsr.style.border = "0.3px solid white";
        crsr.style.backgroundColor = "transparent";
        crsr.style.opacity = 0;
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "75px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
});

gsap.from("#cards-container", {
    scale: 0.9,
    opacity: 0.6,
    duration: 3,
    scrollTrigger: {
        trigger: "#cards-container",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 2
    }
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "bottom 55%",
        end: "bottom 45%",
        scrub: 2
    }
});

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
})
