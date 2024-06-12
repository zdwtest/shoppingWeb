
const themeButton = document.getElementById('theme-button');
const fontSizeButton = document.getElementById('font-size-button');
const body = document.querySelector('body');

themeButton.addEventListener('click', () => {
    if (body.classList.contains('theme-1')) {
        body.classList.remove('theme-1');
        body.classList.add('theme-2');
    } else {
        body.classList.remove('theme-2');
        body.classList.add('theme-1');
    }
});

fontSizeButton.addEventListener('click', () => {
    const currentFontSize = body.classList.value.match(/font-size-(small|medium|large)/);

    if (currentFontSize) {
        const currentSize = currentFontSize[1];

        // 切换字体大小
        if (currentSize === 'small') {
            body.classList.remove('font-size-small');
            body.classList.add('font-size-medium');
        } else if (currentSize === 'medium') {
            body.classList.remove('font-size-medium');
            body.classList.add('font-size-large');
        } else if (currentSize === 'large') {
            body.classList.remove('font-size-large');
            body.classList.add('font-size-small');
        }
    } else {
        body.classList.add('font-size-medium');
    }
});