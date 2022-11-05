let articleSections = document.querySelectorAll('.blog-article.short');

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = () => {
        articleSection.classList.remove('short');
    };
}
