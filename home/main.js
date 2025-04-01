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
