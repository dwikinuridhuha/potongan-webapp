window.addEventListener('scroll', () => {
    const parralax = document.querySelector('.parallax');
    let scrollingDown = window.pageYOffset;

    // debung
    console.log(scrollingDown);

    parralax.style.transform = `translateY(${scrollingDown * .5}px)`;
});