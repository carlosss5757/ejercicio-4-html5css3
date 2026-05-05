window.addEventListener("load", function() {

    var chin1 = document.querySelector("#article1 .chincheta-base");
    var chin2 = document.querySelector("#article2 .chincheta-base");
    var chin3 = document.querySelector("#article3 .chincheta-base");
    var art1  = document.getElementById("article1");
    var art3  = document.getElementById("article3");

    // 1. Mover chincheta 1
    chin1.style.transition = "left 1s";
    chin1.style.position = "relative";
    chin1.style.left = "0px";
    setTimeout(function() {
        chin1.style.left = "199px";

        // 2. Inclinar article1
        setTimeout(function() {
            art1.style.transition = "transform 0.5s";
            art1.style.transform = "rotate(-2deg)";

            // 3. Mover chincheta 2
            setTimeout(function() {
                chin2.style.transition = "left 1s";
                chin2.style.position = "relative";
                chin2.style.left = "0px";
                setTimeout(function() {
                    chin2.style.left = "120px";

                    // 4. Mover chincheta 3
                    setTimeout(function() {
                        chin3.style.transition = "left 1s";
                        chin3.style.position = "relative";
                        chin3.style.left = "0px";
                        setTimeout(function() {
                            chin3.style.left = "30px";

                            // 5. Inclinar article3
                            setTimeout(function() {
                                art3.style.transition = "transform 0.5s";
                                art3.style.transform = "rotate(2deg)";
                            }, 1000);
                        }, 100);
                    }, 500);
                }, 1000);
            }, 500);
        }, 1000);
    }, 100);

}, false);