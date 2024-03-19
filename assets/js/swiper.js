function rotateIcon(btn) {

}


var swiper;

        // Function to create or update Swiper based on window width
function updateSwiper() {
    swiper = new Swiper('.swiper-container', {
        slidesPerView: window.innerWidth >= 768 ? (window.innerWidth >= 1024 ? 3 : 2) : 1,
        spaceBetween: 30,
    });
    // setActiveButton(0);
}
        
updateSwiper();

window.addEventListener('resize', function () {
    if (swiper) {
        swiper.destroy();
    }
    updateSwiper();
});
        
var buttonIcons = document.querySelectorAll('.button-slider__btn');
var currentIndex = 0;
        
        // Function to handle button visibility based on screen width
function handleButtonVisibility() {
    if (window.innerWidth < 768) {
                // Show all buttons
        buttonIcons.forEach(function (btn) {
        btn.style.display = 'inline-block';
    });
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // Hide buttons from 3 to 5
        for (var i = 3; i < buttonIcons.length; i++) {
            buttonIcons[i].style.display = 'none';
        }
    } else {
        // Hide buttons from 3 to 5
        for (var i = 2; i < buttonIcons.length; i++) {
            buttonIcons[i].style.display = 'none';
        }
    }
}
        
handleButtonVisibility();
        
        // Attach the function to the window resize event
window.addEventListener('resize', handleButtonVisibility);
        
 // Tự động chuyển trang sau mỗi 3s
if(window.innerWidth > 1024){
    setInterval(function () {
        currentIndex = (currentIndex + 1) % 4; // Chuyển đổi giữa 0 và 1
        switchSlides(currentIndex);
        
        if (currentIndex === 1) {
            setActiveButton(0);
        }else if(currentIndex === 3){
            setActiveButton(1);
        }else{
            setActiveButton(0);
        }
    }, 1000);
    
            
    buttonIcons[0].addEventListener('click', function () {
        swiper.slideTo(0);
        setActiveButton(0);
        rotateIcon(this);
        currentIndex = 0;
        switchSlides(currentIndex);
    });
            
    buttonIcons[1].addEventListener('click', function () {
        swiper.slideTo(4);
        setActiveButton(1);
        rotateIcon(this);
        currentIndex = 1;
        switchSlides(currentIndex);
    });
}else if(window.innerWidth >= 768 && window.innerWidth < 1024){
    setInterval(function () {
        currentIndex = (currentIndex + 1) % 5; // Chuyển đổi giữa 0, 1, 2
        switchSlides(currentIndex);
        if (currentIndex === 1) {
            setActiveButton(0);
        }else if(currentIndex === 2 || currentIndex ===3){
            setActiveButton(1);
        }else if(currentIndex === 4){
            setActiveButton(2);
        }else{
            setActiveButton(0);
        }
    }, 1000);
            
    buttonIcons[0].addEventListener('click', function () {
        swiper.slideTo(0);
        setActiveButton(0);
        rotateIcon(this);
        currentIndex = 0;
        switchSlides(currentIndex);
    });
            
    buttonIcons[1].addEventListener('click', function () {
        swiper.slideTo(2); 
        setActiveButton(1);
        rotateIcon(this);
        currentIndex = 1;
        switchSlides(currentIndex);
    });
        
    buttonIcons[2].addEventListener('click', function () {
        swiper.slideTo(4); 
        setActiveButton(2);
        rotateIcon(this);
        currentIndex = 2;
        switchSlides(currentIndex);
    });
}else{
    setInterval(function () {
        currentIndex = (currentIndex + 1) % 6; // Chuyển đổi giữa 0 và 1
        switchSlides(currentIndex);
        if (currentIndex === 0) {
            setActiveButton(0);
        }else if(currentIndex === 1){
            setActiveButton(1);
        }else if(currentIndex === 2){
            setActiveButton(2);
        }
        else if(currentIndex === 3){
            setActiveButton(3);
        }
        else if(currentIndex === 4){
            setActiveButton(4);
        }
        else if(currentIndex === 5){
            setActiveButton(5);
        }
        else{
            setActiveButton(0);
        }
    }, 1000);

    buttonIcons[0].addEventListener('click', function () {
        swiper.slideTo(0);
        setActiveButton(0);
        rotateIcon(this);
        currentIndex = 0;
        switchSlides(currentIndex);
    });
            
    buttonIcons[1].addEventListener('click', function () {
        swiper.slideTo(1);
        setActiveButton(1);
        rotateIcon(this);
        currentIndex = 1;
        switchSlides(currentIndex);
    });    
    buttonIcons[2].addEventListener('click', function () {
        swiper.slideTo(2);
        setActiveButton(2);
        rotateIcon(this);
        currentIndex = 2;
        switchSlides(currentIndex);
    });
            
    buttonIcons[3].addEventListener('click', function () {
        swiper.slideTo(3);
        setActiveButton(3);
        rotateIcon(this);
        currentIndex = 3;
        switchSlides(currentIndex);
    });    
    buttonIcons[4].addEventListener('click', function () {
        swiper.slideTo(4);
        setActiveButton(4);
        rotateIcon(this);
        currentIndex = 4;
        switchSlides(currentIndex);
    });
            
    buttonIcons[5].addEventListener('click', function () {
        swiper.slideTo(5);
        setActiveButton(5);
        rotateIcon(this);
        currentIndex = 5;
        switchSlides(currentIndex);
    });    
}
        
function switchSlides(index) {
    // Chuyển đổi giữa 3 trang đầu và 3 trang sau
    if (window.innerWidth >= 1024) {
        var targetSlideIndex = index * 1;
        
    } else if (window.innerWidth >= 768) {
        var targetSlideIndex = index * 1;

    } else {
        var targetSlideIndex = index * 1;
    }

    // Chuyển đến slide target
    swiper.slideTo(targetSlideIndex);

    // Chuyển màu icon tương ứng
    // setActiveButton(index);
}

function switchIcons(index) {
    setActiveButton(index); // Sử dụng index để cập nhật màu sắc của nút
}
        
function setActiveButton(index) {
    buttonIcons.forEach(function (btn, b) {
    if (b === index) {
        btn.classList.add('rotate');
        btn.style.backgroundColor = '#4F46E5';
    } else {
        btn.classList.remove('rotate');
        btn.style.backgroundColor = '#4F46E54D';
        }
    });
}
setActiveButton(0);

