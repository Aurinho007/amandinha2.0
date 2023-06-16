const nextPageButton = document.getElementById("next-page-button-container")
const warningScreen = document.getElementById("pc-case-container")

if (/Mobi|Android/i.test(navigator.userAgent)) {
} else {
  nextPageButton.style.display = 'none'
  warningScreen.style.display = 'flex'
}