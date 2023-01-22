'use strict'




function ibg() {

    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

const cardRow = document.querySelector('.card__row');


cardRow.addEventListener('mouseout', function (e) {
    let target = e.relatedTarget.closest(".card__item")
    if (!target) {
        if (e.target.closest(".card__item") !== null) {

            if (e.target.closest(".card__items_red") && e.target.closest(".card__item_red")) {
                return
            } else if (e.target.closest(".card__items_blue") && e.target.closest(".card__item_red")) {
                addRemoveClass(e.target.closest(".card__item"));
            } else if (e.target.closest(".card__items_red")) {
                addRemoveClass(e.target.closest(".card__item"));
            }

        }
    }
})

cardRow.addEventListener('click', function (e) {


    let g = e.target.closest(".card__item")

    if (e.target.closest(".card__item")) {
        if (e.target.closest('.card__items_red') || e.target.closest('.card__items_blue')) {
            toggleClass(e.target.closest(".card__items"))
        }
    }
    else if (e.target.closest(".card__text-link")) {

        // toggleClass(e.target.closest(".card__items"))


        // addRemoveClass(e.target)
        toggleClass(e.target.closest(".card__items"))

        addRemoveClass(e.target.closest(".card__items").querySelector(".card__item"));

    }

})




function addRemoveClass(i) {

    i.classList.toggle("card__item_red");

}

function toggleClass(e) {

    e.classList.toggle("card__items_red");
    e.classList.toggle("card__items_blue");

}




