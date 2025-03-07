/* eslint-disable prettier/prettier */
export const useMenu = () => {
  const linkToDropMenu = document.querySelector('.nav__services-link');
  const dropMenu = document.querySelector('.nav__dropdown-menu');

  if (linkToDropMenu && dropMenu) {
    // Открытие дропдауна
    linkToDropMenu.addEventListener('click', (event) => {
      event.stopPropagation();
      dropMenu.classList.toggle('active');
    });

    // Закрытие при клике вне дропдауна
    document.addEventListener('click', (event) => {
      if (
        !dropMenu.contains(event.target) &&
        !linkToDropMenu.contains(event.target)
      ) {
        dropMenu.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.header__navigation-open');
    const closeBtn = document.querySelector('#nav-close-btn');
    const body = document.body;

    if (navToggle && closeBtn) {
      // Функция для проверки ширины экрана
      const isSmallScreen = window.innerWidth < 1200;

      // Только если экран меньше 1200px, разрешаем открывать меню
      if (isSmallScreen) {
        navToggle.addEventListener('click', () => {
          body.classList.add('nav-opened'); // Добавляем класс для отображения меню
        });

        closeBtn.addEventListener('click', () => {
          body.classList.remove('nav-opened'); // Убираем класс, чтобы скрыть меню
        });
      }

      // Закрытие по клику на фон
      document.addEventListener('click', (e) => {
        if (
          body.classList.contains('nav-opened') &&
          !document.querySelector('.nav').contains(e.target) &&
          !navToggle.contains(e.target)
        ) {
          body.classList.remove('nav-opened'); // Скрываем меню
        }
      });
    }

    // Обработчик для изменения размера экрана (на случай изменения размеров)
    window.addEventListener('resize', () => {
      const isSmallScreen = window.innerWidth < 1200;

      if (isSmallScreen && !body.classList.contains('nav-opened')) {
        navToggle.addEventListener('click', () => {
          body.classList.add('nav-opened'); // Добавляем класс для отображения меню
        });
      } else if (!isSmallScreen) {
        body.classList.remove('nav-opened'); // Убираем меню, если экран стал больше 1200px
      }
    });
  });
};
