const dayInfo = document.querySelector(".wrapper--day")
const sevenInfo = document.querySelector(".wrapper--sevenday")
const btnSearch = document.querySelector(".btn-search")
const searchBar = document.querySelector(".search--bar")

const API_key = "7e13ff91ec96bd3d194ac210ae14e3b3"

const displayHandler = function (e) {
  if (searchBar.value === "") return
  //Make visible the dashboard
  if (!dayInfo.classList.contains("hidden")) return
  dayInfo.classList.remove("hidden")
  sevenInfo.classList.remove("hidden")
}

btnSearch.addEventListener("click", function (e) {
  if (searchBar.value === "") return

  //Strore the value of the city
  let cityName = searchBar.value.trim()
  console.log(cityName)

  const WEATHER_API = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_key}`

  //fetching data from the api
  fetch(WEATHER_API)
    .then((respons) => respons.json())
    .then((data) => {
      if (!data.length) {
        //some error handling ui
        console.log("Invlaid city name")
        return
      }
      displayHandler()
      console.log(data)
    })
    .catch((err) => {
      console.log("Error getting the weather data")
    })
})
