let post1 = {
    author: "John Doe",
    emotion: "Découvrez la merceille caché des Maldives, où le sable blanc rencontre les eaux cristallines. Chaque jour est une nouvelle aventure sous le soleil éclatant, plongez dans les récifs colorés ou détendez-vous simplement sur une plage isolée. Les Maldives vous attendent pour des vacances inoubliables !",
    url: "./assset/img/variante-de-fleur.png",
img: "./assset/img/maldives2.webp"
}
let post2 = {
    author: "Jane Doe",
    emotion: "Entre les palmiers qui dansent au rythme du vent et les lagons d'un bleu éclatant, les Maldives offrent un refuge de tranquillité au cœur de l'océan Indien. Laissez-vous envoûter par la beauté naturelle de cet archipel et vivez des moments magiques sous le soleil tropical.",
    url: "./assset/img/variante-de-fleur.png",
    img: "./assset/img/maldives1.webp"

}
let post3 = {
    author: "Jack Doe",
    emotion: "Imaginez-vous flotter sur des eaux turquoise, entouré par une myriade de poissons tropicaux aux couleurs vives. Les Maldives sont bien plus qu'une destination de rêve, c'est une expérience sensorielle où chaque instant éveille vos sens et vous laisse des souvenirs impérissables.",
    url: "./assset/img/variante-de-fleur.png",
    img: "./assset/img/maldives3.webp"

}
articles.push(post1, post2, post3);
let SelectPostPremier = document.querySelector('.janeDoe');

for (let post of articles) {
    let template = `
        <article class="janeDoe">
             <div class="profil">
                <div class="tete"></div>
                <div class="corps">
                    </div>
                    </div>
                    <h2>Posté par: ${post.author ? post.author : 'Anonyme'}</h2>
                    <p>${post.emotion}</p>
                    <img class="imgPost" src="${post.img}" alt="">
                <img class="flowerLike" src="./assset/img/variante-de-fleur.png">
        </article>
    `;

    // 2eme) ca convertis ici la chaîne de caractères en éléments HTML reels que le navigateur peux lire
    let articleElement = document.createElement('div'); //3eme) div qui sert de container pour l'html
    articleElement.innerHTML = template.trim(); //4eme) la propriété innerHTML sert à convertir en html reel 
    let article = articleElement.firstChild; //5eme) je recupere le premier élément enfant (article) de la div conteneur 


    

    // ca récupère le premier article qui existe dans le conteneur des articles
    let firstArticle = postContainer.firstChild;

    // ca ajoute un nouvel article à chaque fois, postContainer est le parent et article est l'enfant qui existe déjkà
    // ca insère le nouvel article avant le premier article 
    postContainer.insertBefore( article, firstArticle );
}
  // bouton like--------------------------------------------------------------------
            //  variable qui stocke l'état actuel de l'image si elle est true alors la'autre sera false
            let isFlowerImage = true;

            // Sélection de l'image qui sera modifier
            let imageLike = document.querySelector('.flowerLike');
// boucle sur chaque article
for (let article of document.querySelectorAll('.janeDoe')) {
    // boucle sur chaque image like à l'intérieur de l'article
    for (let imageLike of article.querySelectorAll('.flowerLike')) {
            // écouteur d'événements au clic sur l'image
            imageLike.addEventListener("click", function () {
                //  ca inverse l'état de l'image avec l'opérateur de négation logique "!"
                isFlowerImage = !isFlowerImage;

                // Mise à jour de l'image en fonction de l'état actuel
                if (isFlowerImage) {
                    imageLike.src = "./assset/img/variante-de-fleur.png";
                } else {
                    imageLike.src = "./assset/img/petales-de-fleur.png";
                }
            });
          }
}
// stop la boucle à la fin
articles = [];


