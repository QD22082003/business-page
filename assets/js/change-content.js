function changeContentAndBackgroundPeriodically() {
    const header = document.querySelector('.header');
    const dynamicContent = document.getElementById('js-dynamic-content');
    const changeContentButton = document.getElementById('changeContentButton');
    const leftButton = document.getElementById('js-leftButton');
    const rightButton = document.getElementById('js-rightButton');
    let currentIndex = 1;
  
    function changeContentAndBackground() {
        const nextIndex = currentIndex % 3 + 1;
        const nextBgSrc = header.dataset[`bgSrc${nextIndex}`];
        const nextContent = dynamicContent.dataset[`content${nextIndex}`];
        const nextButtonText = changeContentButton.dataset[`btn${nextIndex}`];
  
        if (nextBgSrc && nextContent && nextButtonText) {
            header.style.backgroundImage = `url(${nextBgSrc})`;
            dynamicContent.textContent = nextContent;
            changeContentButton.textContent = nextButtonText;
            currentIndex = nextIndex;
        }
    }
    function goToNext() {
      currentIndex = currentIndex % 3 + 1;
      console.log(currentIndex); // Kiểm tra giá trị currentIndex
      changeContentAndBackground();
    }
  
    function goToPrevious() {
      currentIndex = (currentIndex - 1 + 3) % 3 + 1;
      console.log(currentIndex); // Kiểm tra giá trị currentIndex
      changeContentAndBackground();
    }
    
    setInterval(changeContentAndBackground, 3000);
    leftButton.addEventListener('click', goToPrevious);
    rightButton.addEventListener('click', goToNext)
  }
  
  document.addEventListener("DOMContentLoaded", changeContentAndBackgroundPeriodically);