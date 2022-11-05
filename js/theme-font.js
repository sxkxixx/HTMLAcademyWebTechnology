let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');

darkThemeButton.onclick = () => {
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
};

lightThemeButton.onclick = () => {
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
};

let buttonSansSerif = document.querySelector('.font-button-sans-serif');
let buttonSerif = document.querySelector('.font-button-serif');

buttonSansSerif.onclick = () => {
  document.body.classList.remove('serif');
  buttonSansSerif.classList.add('active');
  buttonSerif.classList.remove('active');
};

buttonSerif.onclick = () => {
    document.body.classList.add('serif');
    buttonSansSerif.classList.remove('active');
    buttonSerif.classList.add('active');
};

