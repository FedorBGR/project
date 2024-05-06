// Открытие модального окна с изображением
function openModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    modalImg.style.width = "auto"; // Установите ширину изображения равной его оригинальной ширине
}

// Закрытие модального окна
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Функция для листания фотографий
function movePortfolio(direction) {
    var portfolio = document.querySelector(".portfolio-items");
    var amountToMove = 300; // Измените на ширину одной фотографии, чтобы пролистывать на одну фотографию за раз

    // Устанавливаем направление прокрутки
    if (direction === -1) {
        amountToMove *= -1;
    }

    // Прокручиваем фотографии
    portfolio.scrollBy({
        left: amountToMove,
        behavior: "smooth"
    });
}
