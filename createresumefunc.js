// Функция для добавления навыка
function addSkill() {
    var skillInput = document.getElementById('skill');
    var skill = skillInput.value;
    var skillsList = document.getElementById('skills-list');
    var listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
    skillInput.value = ''; // Очистить поле ввода
}

// Функция для добавления практики
function addPractice() {
    var courseSelect = document.getElementById('course-select');
    var course = courseSelect.options[courseSelect.selectedIndex].text;
    var practiceInfo = document.getElementById('practice-info').value;
    var practiceList = document.getElementById('practice-list');
    var listItem = document.createElement('li');
    listItem.textContent = course + ': ' + practiceInfo;
    practiceList.appendChild(listItem);
    document.getElementById('practice-info').value = ''; // Очистить поле ввода
}

// Функция для загрузки фотографий в портфолио
// Функция для загрузки фотографий в портфолио
function uploadPortfolio() {
    var fileInput = document.getElementById('portfolio-file');
    var uploadedPhotos = document.getElementById('uploaded-photos');

    // Проверяем, выбраны ли файлы
    if (fileInput.files.length > 0) {
        for (var i = 0; i < fileInput.files.length; i++) {
            var file = fileInput.files[i];
            var img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.width = 150; // Устанавливаем ширину изображения
            img.height = 100; // Устанавливаем высоту изображения
            img.className = "portfolio-items"; // Добавляем класс для стилей CSS
            uploadedPhotos.appendChild(img);
        }

        // Добавляем слушатель события только после добавления фотографий
        uploadedPhotos.addEventListener("click", function(event) {
            if (event.target.tagName === "IMG") {
                openModal(event.target.src);
            }
        });
    } else {
        alert('Выберите файлы для загрузки.');
    }
}



// JavaScript для открытия изображений в модальном окне
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const uploadedPhotos = document.getElementById("uploaded-photos");

function openModal(imgSrc) {
    // Проверяем существование модального окна перед попыткой изменения его стилей
    if (modal) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
    }
}

function closeModal() {
    // Проверяем существование модального окна перед попыткой изменения его стилей
    if (modal) {
        modal.style.display = "none";
    }
}

// JavaScript для открытия изображений в модальном окне при клике на фото
uploadedPhotos.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        openModal(event.target.src);
    }
});
