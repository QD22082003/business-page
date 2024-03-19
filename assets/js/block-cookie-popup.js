function toggleCookiepopup() {
    const cookiePopup = document.querySelector('.cookie-popup');
    const cookiePopupBtn = document.querySelector('.cookie-popup__btn');
    // // Kiểm tra xem mobileMenu có đang hiển thị không
    // const isMenuVisible = getComputedStyle(cookiePopup).display !== 'none';
  
    // // Chuyển đổi giữa 'none' và 'block'
    cookiePopup.style.display = 'none';
    // cookiePopupBtn.onclick = toggleCookiepopup();
}