const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieReleaseDate = document.querySelector('.userInputReleaseDate');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieReleaseDateToDisplay = document.querySelector('.favoriteMovieReleaseDate');

let titleInStorage = localStorage.getItem('title');
let releaseDateInStorage = localStorage.getItem('releaseDate');
let imageUrlInStorage = localStorage.getItem('imageUrl');

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieReleaseDateToDisplay.textContent = releaseDateInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(40, 40, 65, 0.514), rgba(63, 45, 45, 0.459)),
    url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let movieReleaseDateInput = movieReleaseDate.value;
    let posterUrlInput = moviePosterUrl.value;

    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('releaseDate', movieReleaseDateInput);
    localStorage.setItem('imageUrl', posterUrlInput); 

    movieTitleToDisplay.textContent = movieTitleInput;
    movieReleaseDateToDisplay.textContent = movieReleaseDateInput;
    container.style.backgroundImage = `linear-gradient(rgba(40, 40, 65, 0.514), rgba(63, 45, 45, 0.459)),
    url('${posterUrlInput}')`;

    movieTitle.value = '';
    movieReleaseDate.value = '';
    moviePosterUrl.value = '';
});