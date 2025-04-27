function openPopup(project) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    if (project === 'videohosting') {
        popupText.innerHTML = "Это очень простой и одновременно с этим гениальный проект от Анникит. На этом видеохостинге нет никакой рекламы и авторских прав.";
    } else if (project === 'telekanal') {
        popupText.innerHTML = "Телеканал Анникит — сложный и трудоёмкий проект, остающийся одним из самых грандиозных в нашей истории.";
    } else if (project === 'multibootusb') {
        popupText.innerHTML = "MultiBootUSB — универсальная флешка для устранения системных неполадок.";
    } else if (project === 'github') {
        popupText.innerHTML = "Огромное количество других очень интересных наших проектов на Github: <a style='color: red' href='http://github.com/Annikit' target='_blank'>Посмотреть здесь</a>.";
    }

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
