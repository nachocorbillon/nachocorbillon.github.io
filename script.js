function toggleLanguage() {
    const userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage.startsWith('en')){
        console.log("English Translation - Original Document in Spanish");
    const elementsToTranslate = document.querySelectorAll('[data-english]');

    elementsToTranslate.forEach(element => {
        
    
        let englishText = element.getAttribute('data-english');
        const currentLanguage = element.textContent;

        if (englishText!="")
    {
        console.log(currentLanguage + " = " + englishText);
        element.textContent = englishText;
    }
    });


    }
   else console.log("English version available");
}

toggleLanguage();

