updateStyle = () => {
    const obj = document.getElementById('fact-sheet-container');
    obj.addEventListener('error', (event) => {
        obj.style.height = 'auto';
    })
}