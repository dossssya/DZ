function toggleText(button) {
    const riddleContainer = button.parentElement;
    const answer = riddleContainer.querySelector('.answer');

    if (answer.style.display === '' || answer.style.display === 'none') {
        answer.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        answer.style.display = 'none';
        button.textContent = 'Показать';
    }
}
