document.querySelector(".TU").classList.add("show")

const nShow = setTimeout(()=> {
   document.querySelector(".N").classList.add("show")
}, 500)

const gShow = setTimeout(()=> {
    document.querySelector(".G").classList.add("show")
}, 1000)

function openSideBar() {
    document.querySelector(".sidebar").classList.toggle("active")
}