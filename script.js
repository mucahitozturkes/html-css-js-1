const accordions = document.querySelectorAll(".content-stack");

accordions.forEach(function (accordion) {

    const btn = accordion.querySelector(".cs-selection");

    btn.addEventListener("click", function () {

        accordions.forEach(function (item) {

            if (item !== accordion) {
                item.classList.remove("show");
            }

        });

        accordion.classList.toggle("show");

    });
});
