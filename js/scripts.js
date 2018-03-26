$(document).ready(function () {
    $(".btn").click(function () {
        var email = $(".place").val();
        alert(email + " " + "has been succesfully subscribed.");
    });

});

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}