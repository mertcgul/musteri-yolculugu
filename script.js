// Local Storage'dan verileri yükle
document.querySelectorAll('.step textarea').forEach((textarea, index) => {
    const savedData = localStorage.getItem(`step${index}`);
    if (savedData) textarea.value = savedData;

    // Veriyi Local Storage'a kaydet
    textarea.addEventListener('input', () => {
        localStorage.setItem(`step${index}`, textarea.value);
    });
});
