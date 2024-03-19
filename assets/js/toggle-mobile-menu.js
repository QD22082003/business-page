function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
  
    // Kiểm tra xem mobileMenu có đang hiển thị không
    const isMenuVisible = getComputedStyle(mobileMenu).display !== 'none';
  
    // Chuyển đổi giữa 'none' và 'block'
    mobileMenu.style.display = isMenuVisible ? 'none' : 'block';
    var btn = document.querySelector('.header-mobile--circle-btn-bar');
    var spans = document.querySelectorAll('.header-mobile--circle-btn-bar span');

    // Xác định trạng thái hiện tại của menu mobile và thay đổi dấu gạch thành dấu X và ngược lại
    var isOpen = btn.classList.contains('open');
    if (isOpen) {
        spans[0].style.transform = 'rotate(0deg)';
        spans[1].style.display = 'block';
        spans[2].style.transform = 'rotate(0deg)';
    } else {
        spans[0].style.transform = 'rotate(40deg)';
        spans[1].style.display = 'none';
        spans[2].style.transform = 'rotate(-40deg)';
    }

    // Chuyển đổi trạng thái của menu
    btn.classList.toggle('open');
  
  }