function openPopup(project) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    if (project === 'videohosting') {
        popupText.innerHTML = `
            <h3>Видеохостинг Анникит</h3>
            <p>Это очень простой и одновременно с этим гениальный проект от Анникит. На этом видеохостинге нет никакой рекламы и нарушений авторских прав. Мы создали удобную платформу, где авторы могут свободно размещать свои видео, а зрители — смотреть их без отвлекающей рекламы. Поддержка HD, встроенные инструменты модерации и адаптация под мобильные устройства делают его полноценной альтернативой коммерческим сервисам.</p>
        `;
    } else if (project === 'telekanal') {
        popupText.innerHTML = `
            <h3>Телеканал Анникит</h3>
            <p>Телеканал Анникит — сложный и трудоёмкий проект, остающийся одним из самых грандиозных в нашей истории. Мы построили полноценную систему вещания: с прямыми эфирами и авторскими программами. Работа продолжается только в субботу и воскресенье, наша команда постоянно развивает формат вещания.</p>
        `;
    } else if (project === 'multibootusb') {
        popupText.innerHTML = `
            <h3>MultiBootUSB</h3>
            <p>MultiBootUSB — универсальная флешка для устранения системных неполадок. Это мощный инструмент, включающий в себя десятки полезных утилит: от антивирусных сканеров до средств восстановления данных и тестирования оборудования. Продукт идеально подходит для IT-специалистов, которые часто работают с большим количеством компьютеров. Простота в использовании сочетается с высокой надёжностью и гибкостью.</p>
        `;
    } else if (project === 'github') {
        popupText.innerHTML = `
            <h3>Проекты на GitHub</h3>
            <p>Огромное количество других очень интересных наших проектов размещены на GitHub в разделе Repositories. Здесь вы найдёте как экспериментальные наработки, так и готовые инструменты для автоматизации, аналитики и разработки. Мы активно делимся своими решениями с сообществом, принимаем участие в open-source и постоянно публикуем новые идеи. 
            <a style="color: red;" href="http://github.com/Annikit" target="_blank">Посмотреть здесь</a>.</p>
        `;
    }

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}





document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchInput');
    const sortBtn = document.getElementById('sortToggle');
    const container = document.getElementById('recordsContainer');

    if (!container) return;

    let ascending = false;

    const getCards = () => Array.from(container.querySelectorAll('.project'));

    function filterAndSort() {
        const search = input.value.toLowerCase();

        const sorted = getCards().sort((a, b) => {
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);
            return ascending ? dateA - dateB : dateB - dateA;
        });

        container.innerHTML = '';

        sorted.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(search) ? 'block' : 'none';
            container.appendChild(card);
        });
    }

    input?.addEventListener('input', filterAndSort);

    sortBtn?.addEventListener('click', () => {
        ascending = !ascending;
        sortBtn.textContent = `Сортировка: ${ascending ? '↑' : '↓'}`;
        filterAndSort();
    });

    // Первичная сортировка при загрузке
    filterAndSort();
});
