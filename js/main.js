


(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 400);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


})();