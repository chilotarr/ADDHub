
window.onscroll = function() {
    var stickyTop = document.querySelector('.sticky-top');

    if (window.pageYOffset > 50) {
        stickyTop.style.backgroundColor = 'rgba(53, 104, 89, 0.7)';
    } else {
        stickyTop.style.backgroundColor = 'rgba(53, 104, 89, 1)'
    }
}
