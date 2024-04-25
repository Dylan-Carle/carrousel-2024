(function(){
    console.log("debut carrousel");
    let carrousel = document.querySelector('.carrousel');
    let boutton = document.querySelector('.bouton__ouvrir');
    let carrousel__x = document.querySelector('.carrousel__x');

    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');

    let carrousel__figure = document.querySelector('.carrousel__figure');
    let carrousel_form = document.querySelector('.carrousel__form');
    let compteur = 0;

    for(const elm of galerie__img){

        creer_img_carrousel(compteur, elm);
        creer_radio_carrousel(compteur);
        elm.dataset.id = compteur;
        elm.addEventListener("mousedown", function(){
            carrousel.classList.add('carrousel--ouvrir');
            for(const elm of carrousel__figure.querySelectorAll('.carrousel__img')){
                if(elm.dataset.id == this.dataset.id){
                    elm.style.opacity = 1;
                }
                else{
                    elm.style.opacity = 0;
                }
                compteur = this.dataset.id;
            }
            for(const elm of carrousel_form.querySelectorAll('.carrousel__radio')){
                if(elm.value == this.dataset.id){
                    elm.checked = true;
                }
                else{
                    elm.checked = false;
                }
            }
        });
        compteur++;
    }
    /**
     * Creer une image pour le carrousel
     * @param {*} compteur numero de l'image
     * @param {*} elm l'element img de la galerie
     */
    function creer_img_carrousel(compteur, elm){
        let carrousel__img = document.createElement('img');
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;
        //carrousel__img.dataset.id = compteur;
        carrousel__img.dataset.id = compteur;
        carrousel__figure.appendChild(carrousel__img);
        //galerie__img[compteur].classList.add('carrousel__img');
        //galerie__img[compteur].dataset.id = compteur;
    }
    /**
     * Crer un radio pour le carrousel
     * @param {*} compteur numero de l'image
     */
    function creer_radio_carrousel(compteur){
        let carrousel__radio = document.createElement('input');
        carrousel__radio.classList.add('carrousel__radio');
        carrousel__radio.type = 'radio';
        carrousel__radio.name = 'carrousel__radio';
        carrousel__radio.value = compteur;
        carrousel_form.appendChild(carrousel__radio);
        carrousel__radio.addEventListener("change", function(){
            for(const elm of carrousel__figure.querySelectorAll('.carrousel__img')){
                if(elm.dataset.id == this.value){
                    elm.style.opacity = 1;
                }
                else{
                    elm.style.opacity = 0;
                }
            }
        });
    }
    boutton.addEventListener("mousedown", function(){
        carrousel.classList.add('carrousel--ouvrir');
    });

    carrousel__x.addEventListener("mousedown", function(){
        carrousel.classList.remove('carrousel--ouvrir');
    });
})()