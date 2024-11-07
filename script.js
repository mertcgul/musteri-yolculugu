document.querySelectorAll('.step textarea').forEach((textarea, index) => {
    const savedData = localStorage.getItem(`step${index}`);
    if (savedData) textarea.value = savedData;

    textarea.addEventListener('input', () => {
        localStorage.setItem(`step${index}`, textarea.value);
    });
});

// Submit butonu işlevi
document.getElementById('submit-button').addEventListener('click', () => {
    const restaurantName = document.getElementById('restaurant-name').value;
    const observerName = document.getElementById('observer-name').value;
    localStorage.setItem('restaurantName', restaurantName);
    localStorage.setItem('observerName', observerName);
    alert("Form data saved successfully!");
});
