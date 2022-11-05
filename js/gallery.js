let mainPhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.slider .preview-list a');

for (let preview of previews) {
    preview.onclick = (evt) => {
        evt.preventDefault();
        mainPhoto.src = preview.href;
        let currentActive = document.querySelector('.active-item');
        currentActive.classList.remove('active-item');
        preview.classList.add('active-item');
    };
}
