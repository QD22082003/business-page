function handleScroll() {
    const nav = document.getElementById('js-nav');
    const logoImage = document.getElementById('logoImage');
    
    // Kiểm tra xem logoImage có tồn tại không
    if (logoImage) {
      const secondarySrc = logoImage.dataset.secondarySrc;
      const firstSrc = logoImage.dataset.firstSrc;  
      
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
        if (secondarySrc) {
          logoImage.src = secondarySrc;
        }
      } else {
        nav.classList.remove('scrolled');
        logoImage.src = firstSrc;
      }
    }
  }
  
  // Thêm sự kiện scroll vào trang
  window.addEventListener('scroll', handleScroll);
  
  // Gọi hàm khi trang được tải để kiểm tra trạng thái ban đầu
  handleScroll();