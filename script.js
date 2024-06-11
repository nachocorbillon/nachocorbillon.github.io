document.addEventListener('DOMContentLoaded', function() {
    const elementsToTranslate = document.querySelectorAll('[data-english]');
    const bodyAfter = document.querySelector('body').style;

    const textOriginal = {};   
    elementsToTranslate.forEach((element, index) => {
        textOriginal[index] = element.textContent;
    });



    document.getElementById('es').addEventListener('click', function() {
      toggleLanguage('es');
    });

    document.getElementById('en').addEventListener('click', function() {
      toggleLanguage('en');
    });

    function toggleLanguage(language) {
      elementsToTranslate.forEach((element, index)=> {
        const englishText = element.getAttribute('data-english');
        const spanishText = textOriginal[index]; 

        if (language === 'es') {
          element.textContent = spanishText;
        } else if (language === 'en') {
            if(englishText!="")element.textContent = englishText;
        }
      });
    }
  });


  document.getElementById('extraMargen').addEventListener('click', function(e) {
    e.preventDefault();
    let texto = document.getElementById('textoActivo');
    let style = document.getElementById('printMarginStyle');
    if (style) {
      style.parentNode.removeChild(style);
      texto.textContent = 'X'; //Márgenes extra para Impresión: 
    } else {
      style = document.createElement('style');
      style.id = 'printMarginStyle';
      style.textContent = '@media print { html { padding: 1.27cm 2cm}  header{padding: 0 2cm; margin:0} }';
      document.head.appendChild(style);
      texto.textContent = '\u2713'; //Márgenes extra para Impresión: 
    }
  });