var reponses_possibles = [
    "Heu... Ouais je crois.",
    "Vous trouverez la réponse sur notre compte instagram.",
    "Vous trouverez la réponse sur notre compte instagram.",
    "Choisissez l'option la plus difficile.",
    "C'est le mauvais moment pour poser cette question.",
    "C'est n'est pas le moment de décider.",
    "Attendez et la réponse va venir.",
    "Posez-vous la bonne question ?",
    "La réponse est celle dont vous avez peur.",
    "La réponse est non.",
    "Suivez votre instinct.",
    "La réponse est oui.",
    "Choisissez l'option la plus facile.",
    "Vous connaissez déjà la réponse.",
    "La réponse est inconnue.",
    "Mmm, à votre avis ?"
];

getRandomInt(5)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function toutSupp(){
    document.getElementById("question_place").value = "";
}


function dire_avenir(){
    num_question = getRandomInt(reponses_possibles.length);
    document.getElementById("question_place").value = reponses_possibles[num_question];
    //alert(reponses_possibles[num_question]);
}