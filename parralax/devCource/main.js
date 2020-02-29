window.addEventListener('scroll', () => {
    const target = document.querySelectorAll('.scroll');

    for(index = 0; index < target.length; index++) {
        let pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.arah === 'vertikal') {
            // console.log(pos);
            target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
        } else {
            let posX = window.pageYOffset * target[index].dataset.ratex;
            let posY = window.pageYOffset * target[index].dataset.ratey;
            console.log(posX);
            console.log(posY);
            target[index].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
        }
    }
})