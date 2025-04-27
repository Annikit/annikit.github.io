function openPopup(project) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    // Удаляем старую кнопку при каждом открытии попапа
    const oldBtn = document.getElementById('mobile-open-app');
    if (oldBtn) {
        oldBtn.remove();
    }

    if (project === 'videohosting') {
        popupText.innerHTML = "Это очень простой и одновременно с этим гениальный проект от Анникит. На этом видеохостинге нет никакой рекламы и авторских прав.";

        if (isMobile()) {
            const mobileBtn = document.createElement('button');
            mobileBtn.className = "btn";
            mobileBtn.id = "mobile-open-app";
            mobileBtn.style.display = "inline-block";
            mobileBtn.style.marginTop = "20px";
            mobileBtn.style.padding = "10px 20px";
            mobileBtn.style.backgroundColor = "red";
            mobileBtn.style.color = "white";
            mobileBtn.style.border = "none";
            mobileBtn.style.borderRadius = "8px";
            mobileBtn.style.fontSize = "16px";
            mobileBtn.style.cursor = "pointer";
            mobileBtn.innerText = "Открыть приложение";

            // При нажатии — вызываем openApp
            mobileBtn.onclick = function () {
                openApp();
            };

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

    const oldBtn = document.getElementById('mobile-open-app');
    if (oldBtn) {
        oldBtn.remove();
    }
}

// Проверка мобильного устройства
function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

// Открытие приложения или редирект на сайт
function openApp() {
    const now = Date.now();
    const timeout = 2000; // 2 секунды

    window.location = "ap3539764.ifn://"; // Попытка открыть приложение

    setTimeout(function () {
        if (Date.now() - now < timeout + 100) {
            // Если не удалось открыть приложение, переходим на сайт
            window.location = "https://www.appcreator24.com/app3539764-54jv6s";
        }
    }, timeout);
}
