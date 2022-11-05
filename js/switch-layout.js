let gridLayoutButton = document.querySelector('.card-view-button-grid');
let listLayoutButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards')

gridLayoutButton.onclick = () => {
    cards.classList.remove('list');
    gridLayoutButton.classList.add('active');
    listLayoutButton.classList.remove('active');
};

listLayoutButton.onclick = () => {
    cards.classList.add('list');
    gridLayoutButton.classList.remove('active');
    listLayoutButton.classList.add('active');
};
