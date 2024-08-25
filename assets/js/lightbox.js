(function (mod) {
  let buttons;
  let lightbox = document.querySelector(".lightbox");
  let player;

  const showLightbox = () => {
    buttons = document.querySelectorAll("a.btn-player");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        lightbox.style.display = "block";
        document.querySelector("#player iframe").src =
          "https://player.vimeo.com/video/" + button.dataset.link;
        window.localStorage.removeItem("plyr");
        player = new Plyr("#player");
        player.volume = button.dataset.volume;
        console.log(button.dataset.volume);
        player.play();
      });
    });
  };

  const closeLightbox = () => {
    lightbox.addEventListener("click", function (e) {
      if (e.target !== this) return;
      document.querySelector(".lightbox").style.display = "none";
      player.destroy();
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    window.player = player;
    function on(selector, type, callback) {
      document.querySelector(selector).addEventListener(type, callback, false);
    }
    showLightbox();
    closeLightbox();
  });
})();
