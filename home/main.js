// navbar berubah warna jadi putih polos ketika di scroll ke bawah
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");
        }
    });
});

// tahun copyright otomatis
$(document).ready(function() {
    $("#year").text(new Date().getFullYear());
});