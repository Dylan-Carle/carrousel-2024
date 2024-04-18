(function(){
    console.log("debut carrousel");
    let carrousel = document.querySelector('.carrousel');
    let boutton = document.querySelector('.bouton__ouvrir');
    let carrousel__x = document.querySelector('.carrousel__x');

    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');

    let carrousel__figure = document.querySelector('.carrousel__figure');
    let compteur = 0;

    for(const elm of galerie__img){
        let carrousel__img = document.createElement('img');
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;
        carrousel__figure.appendChild(elm);
        galerie__img[compteur].classList.add('carrousel__img');

        let carrousel__radio = document.createElement('input');
        carrousel__radio.classList.add('carrousel__radio');
        carrousel__radio.type = 'radio';
        carrousel__radio.name = 'carrousel__radio';
        carrousel__radio.value = compteur;
        carrousel__radio.addEventListener("change", function(){
            if(this.checked){
                galerie__img[this.value].classList.add('carrousel__img--visible');
            }
            else{
                galerie__img[this.value].classList.remove('carrousel__img--visible');
            }
        })

        carrousel_form = document.querySelector('.carrousel__form');
        carrousel_form.appendChild(carrousel__radio);
        

        compteur++;
    }
    boutton.addEventListener("mousedown", function(){
        carrousel.classList.add('carrousel--ouvrir');
    });

    carrousel__x.addEventListener("mousedown", function(){
        carrousel.classList.remove('carrousel--ouvrir');
    });
})()