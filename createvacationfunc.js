function addrequirements() {
    var requirementsInput = document.getElementById('requirements');
    var requirements = requirementsInput.value;
    var requirementsList = document.getElementById('requirements-list');
    var listItem = document.createElement('li');
    listItem.textContent = requirements;
    requirementsList.appendChild(listItem);
    requirementsInput.value = ''; // Очистить поле ввода
}

function addSkill() {
    var skillInput = document.getElementById('skill');
    var skill = skillInput.value;
    var skillsList = document.getElementById('skills-list');
    var listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
    skillInput.value = ''; // Очистить поле ввода
}