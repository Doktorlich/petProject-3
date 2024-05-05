import "./main-cars.scss";

// .tabs__btn-item
// .tabs__content-item
//tabs__btn-item--active
const tabParentItems = document.querySelector(".tabs__btn");
const tabItems = document.querySelectorAll(".tabs__btn-item");
const tabContents = document.querySelectorAll(".tabs__content-item");

const hiddenContent = function () {
    tabItems.forEach(item => {
        item.classList.remove("tabs__btn-item--active");
    });
    tabContents.forEach(item => {
        item.classList.add("hidden");
    });
};
hiddenContent()

//контент который должен быть виден по умолчанию
tabItems[0].classList.add("tabs__btn-item--active");
tabContents[0].classList.remove("hidden");

const showContent = function (currentItem) {
    const itemData = currentItem.dataset.button;
    document.getElementById(itemData).classList.remove("hidden");
};

tabParentItems.addEventListener("click", e => {
    const currentItem = e.target;

    if (currentItem.classList.contains("tabs__btn-item")) {
        hiddenContent();
        currentItem.classList.add("tabs__btn-item--active");
        showContent(currentItem);
    } else {
        return;
    }
});
