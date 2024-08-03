const dayInfo = document.querySelector(".wrapper--day")
const sevenInfo = document.querySelector(".wrapper--sevenday")
const btns = document.querySelectorAll(".btn")
const searchBar = document.querySelector(".search--bar")

btns.forEach((btn) => {
  btn.onclick = function (e) {
    if (searchBar.value === "") return
    if (!dayInfo.classList.contains("hidden")) return
    dayInfo.classList.remove("hidden")
    sevenInfo.classList.remove("hidden")
  }
})
