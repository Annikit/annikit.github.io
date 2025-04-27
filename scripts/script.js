function openPopup(project) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    // Очищаем старую кнопку при открытии
    const oldBtn = document.getElementById('mobile-open-app');
    if (oldBtn) {
        oldBtn.remove();
    }

    if (project === 'videohosting') {
        popupText.innerHTML = "Это очень простой и одновременно с этим гениальный проект от Анникит. На этом видеохостинге нет никакой рекламы и авторских прав.";

        // Если пользователь с мобильного устройства, добавить кнопку
        if (isMobile()) {
            const mobileBtn = document.createElement('a');
            mobileBtn.href = "https://www.appcreator24.com/app3539764-54jv6s";
            mobileBtn.target = "_blank"; // открыть в новой вкладке
            mobileBtn.className = "btn";
            mobileBtn.id = "mobile-open-app";
            mobileBtn.style.display = "inline-block";
            mobileBtn.style.marginTop = "20px";
            mobileBtn.style.padding = "10px 20px";
            mobileBtn.style.backgroundColor = "red";
            mobileBtn.style.color = "white";
            mobileBtn.style.borderRadius = "8px";
            mobileBtn.style.textDecoration = "none";
            mobileBtn.style.fontSize = "16px";
            mobileBtn.innerText = "Открыть приложение";
            popupText.appendChild(mobileBtn);
        }

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

    // Удаляем кнопку при закрытии попапа
    const oldBtn = document.getElementById('mobile-open-app');
    if (oldBtn) {
        oldBtn.remove();
    }
}

// Проверка мобильного устройства
function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}
