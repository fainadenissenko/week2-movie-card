const slides = document.getElementsByClassName('carousel__item');
const slidesTotal = slides.lenghth;
const nextButton = document.querySelector('#carousel__button--next')
const prevButton = document.querySelector('#carousel__button--prev')

nextButton.addEventListener('click', () => {
    console.log('click from next')

    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }
});

prevButton.addEventListener('click', () =>{
    console.log('click from prev')
})