function redirectToProductPage() {
    window.location.pathname="./html/project/ui-design-product.html"
}

function backToUIDesign() {
    window.location.pathname="./html/project/ui-design.html"
}

function changeTab(element) {
    document.querySelectorAll(".header-item").forEach((e)=> {
        if (e.classList.contains("active")) {
            e.classList.remove("active")
        }
    })
    element.classList.toggle("active");
}