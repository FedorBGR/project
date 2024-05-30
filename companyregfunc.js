function showForm(type) {
    // Скрыть все секции форм
    var sections = document.querySelectorAll('.form-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Показать только выбранную секцию формы
    var selectedSection = document.getElementById(type);
    selectedSection.classList.add('active');
}

// При загрузке страницы отображаем форму для ИП
document.addEventListener('DOMContentLoaded', function() {
    showForm('ip');
});