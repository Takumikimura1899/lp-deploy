document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.faq-accordion-header');
  const activeIndex = 0;

  accordionHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;

      // クリックされたヘッダーに active クラスをトグル
      header.classList.toggle('active');

      // 他のアコーディオンを閉じる処理 (オプション)
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.classList.remove('active');
          otherHeader.nextElementSibling.style.maxHeight = null;
        }
      });

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });

    if (index === activeIndex) {
      header.classList.add('active');
      header.nextElementSibling.style.maxHeight = header.nextElementSibling.scrollHeight + 'px';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const studioButtons = document.querySelectorAll('.studio-button');
  const studioInfoContainers = document.querySelectorAll('.studio-info-container');
  const closeButtons = document.querySelectorAll('.close-button');

  const initiallyActiveStudio = 'jiyugaoka';

  studioButtons.forEach((button) => {
    button.addEventListener('click', () => {
      studioButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      studioInfoContainers.forEach((container) => (container.style.display = 'none'));

      const targetContainerId = `studio-info-container-${button.dataset.studio}`;
      const targetContainer = document.getElementById(targetContainerId);
      if (targetContainer) {
        targetContainer.style.display = 'block';
      }
    });

    if (button.dataset.studio === initiallyActiveStudio) {
      button.classList.add('active');
    }
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetContainerId = button.dataset.target;
      const targetContainer = document.getElementById(targetContainerId);

      if (targetContainer) {
        targetContainer.style.display = 'none';
      }

      studioButtons.forEach((btn) => btn.classList.remove('active'));
    });
  });

  const initiallyActiveContainer = document.getElementById(
    `studio-info-container-${initiallyActiveStudio}`,
  );
  if (initiallyActiveContainer) {
    initiallyActiveContainer.style.display = 'block';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.doctor-column-title');
  console.log(accordionHeaders);

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const isAccordion = window.matchMedia('(max-width: 767px)').matches;

      if (!isAccordion) {
        return;
      }

      const content = header.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});
