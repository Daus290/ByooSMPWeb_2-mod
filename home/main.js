// navbar berubah warna jadi putih polos ketika di scroll ke bawah
$(document).ready(function() {
    let lastScrollTop = 0;

    $(window).scroll(function() {
        let scrollTop = $(this).scrollTop();

        if (scrollTop > 50) {
            $("#header").addClass("scrolled").removeClass("scrolled-remove");
        } else if (scrollTop < lastScrollTop) {
            $("#header").addClass("scrolled-remove").removeClass("scrolled");
        }

        lastScrollTop = scrollTop;
    });
});


// tahun copyright otomatis
$(document).ready(function() {
    $("#year").text(new Date().getFullYear());
});


//observer viewport scroll
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible')
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.2
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h1, p, .player-list-item, .btn');
    elements.forEach(element => {
        element.classList.add('fade-element'); 
        observer.observe(element);
    });
});