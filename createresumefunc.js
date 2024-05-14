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

var departmentsByFaculty = {
    faculty1: ["Кафедра иностранных языков и технологии перевода", "Кафедра русского языка и межкультурной коммуникации", "Кафедра связи с общественностью", "Кафедра физического воспитания и спорта", "Кафедра философии, социологии и истории"],
    faculty2: ["Кафедра кадастра недвижимости, землеустройства и геодезии", "Кафедра проектирования автомобильных дорог и мостов", "Кафедра строительной техники и инженерной механики", "Кафедра строительства и эксплуатации автомобильных дорог"],
    faculty3: ["Базовая кафедра ПГС проект", "Кафедра металлических и деревянных конструкций", "Кафедра проектирования зданий и сооружений", "Кафедра строительной механики", "Кафедра строительных конструкций, оснований и фундаментов", "Кафедра технологии строительных материалов, изделий и конструкций", "Кафедра технологии, организации строительства, экспертизы и управления недвижимостью"],
    faculty4: ["Кафедра градостроительства", "Кафедра дизайна", "Кафедра композиции и сохранения архитектурно-градостроительного наследия", "Кафедра основ проектирования и архитектурной графики", "Кафедра теории и практики архитектурного проектирования"],
    faculty5: ["Кафедра гидравлики, водоснабжения и водоотведения", "Кафедра жилищно-коммунального хозяйства", "Кафедра теплогазоснабжения и нефтегазового дела", "Кафедра техносферной и пожарной безопасности"],
    faculty6: ["Базовая кафедра кибернетики в системах организационного управления", "Кафедра автоматизированных и вычислительных систем", "Кафедра высшей математики и физико-математического моделирования", "Кафедра графики, конструирования и информационных технологий в промышленном дизайне", "Кафедра инженерной и компьютерной графики", "Кафедра компьютерных интеллектуальных технологий проектирования", "Кафедра систем автоматизированного проектирования и информационных систем", "Кафедра систем информационной безопасности", "Кафедра систем управления и информационных технологий в строительстве"],
    faculty7: ["Кафедра нефтегазового оборудования и транспортировки", "Кафедра прикладной математики и механики", "Кафедра ракетных двигателей", "Кафедра самолетостроения", "Кафедра технологии машиностроения", "Кафедра технологии сварочного производства и диагностики"],
    faculty8: ["Кафедра конструирования и производства радиоаппаратуры", "Кафедра радиотехники", "Кафедра радиоэлектронных устройств и систем", "Кафедра системного анализа и управления в медицинских системах", "Кафедра твердотельной электроники", "Кафедра физики", "Кафедра фотоники", "Кафедра химии и химической технологии материалов"],
    faculty9: ["Кафедра инноватики и строительной физики имени профессора И.С. Суровцева", "Кафедра управления", "Кафедра цифровой и отраслевой экономики", "Кафедра экономической безопасности"],
    faculty10: ["Кафедра теоретической и промышленной теплоэнергетики", "Кафедра электромеханических систем и электроснабжения", "Кафедра электропривода, автоматики и управления в технических системах"],
    faculty11: ["Военный учебный центр при ВГТУ"],
    faculty12: ["Институт международного образования"],
    faculty13: ["Подготовка научно-педагогических кадров в аспирантуре"],
    faculty14: ["Строительно-политехнический колледж"],
    faculty15: ["Институт профориентационной работы и трудоустройства"],
    faculty16: ["Центр дополнительного профессионального образования"]
    // Добавьте кафедры для других факультетов здесь
  };
  
  function updateDepartments() {
    var faculty = document.getElementById("faculty").value;
    var departmentSelect = document.getElementById("department");
    departmentSelect.innerHTML = ""; // Очищаем список кафедр перед обновлением
    
    // Если выбран факультет "Выберите факультет", скрываем список кафедр
    if (faculty === "0") {
      departmentSelect.style.display = "none";
      return; // Выходим из функции
    }
    
    // Иначе, показываем список кафедр
    departmentSelect.style.display = "block";
  
    // Получаем кафедры для выбранного факультета
    var departments = departmentsByFaculty[faculty];
  
    // Добавляем опции в список кафедр
    departments.forEach(function(department) {
      var option = document.createElement("option");
      option.text = department;
      departmentSelect.add(option);
    });
  }
  
  // Вызываем функцию при изменении выбора факультета
  document.getElementById("faculty").addEventListener("change", updateDepartments);
  