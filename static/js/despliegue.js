document.addEventListener("DOMContentLoaded", function() {
    const subtitles = document.querySelectorAll(".subtitulo");
    const additionalInfos = document.querySelectorAll(".infoAdicional");

    subtitles.forEach((subtitle, index) => {
        subtitle.addEventListener("click", function() {
            if (additionalInfos[index].style.display === "none") {
                additionalInfos[index].style.display = "block";
            } else {
                additionalInfos[index].style.display = "none";
            }
        });
    });
});
