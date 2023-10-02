//image URLs
const unsplashImages = [
    'https://source.unsplash.com/1600x900/?landscape',
    'https://source.unsplash.com/1600x900/?landscape',
    'https://source.unsplash.com/1600x900/?landscape'
];

// Function to set a random background image from Unsplash
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * unsplashImages.length);
    const randomImageUrl = unsplashImages[randomIndex];
    document.body.style.background = `url('${randomImageUrl}') no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
}

// Call the function to set a random background
setRandomBackground();
