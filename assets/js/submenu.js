// document.addEventListener("DOMContentLoaded", function() {
//     var mobileMenuItems = document.querySelectorAll('.mobile-menu__item');

//     mobileMenuItems.forEach(function(item) {
//         item.addEventListener('click', function(event) {
//             var submenu = item.querySelector('.mobile-menu__submenu');
//             if (submenu) {
//                 event.preventDefault();
//                 submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
//             }
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    var mobileMenuItems = document.querySelectorAll('.mobile-menu__item');

    mobileMenuItems.forEach(function(item) {
        var link = item.querySelector('.mobile-menu__link');

        // Bắt sự kiện click cho link
        link.addEventListener('click', function(event) {
            // Ngăn chặn sự kiện kích hoạt cho phần tử cha (mobile-menu__item)
            event.stopPropagation();

            var submenu = item.querySelector('.mobile-menu__submenu');
            if (submenu) {
                event.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var submenuLinks = document.querySelectorAll('.mobile-submenu__link');

    submenuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var submenu = link.nextElementSibling;
            if (submenu) {
                event.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});

