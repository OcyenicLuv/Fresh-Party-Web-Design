function showPopup(themeNumber) {
    // Get the respective popup based on the theme number
    var popup = document.getElementById('popup' + themeNumber);
    popup.style.display = 'flex';
}

function closePopup(themeNumber) {
    var popup = document.getElementById('popup' + themeNumber);
    popup.style.display = 'none';
}