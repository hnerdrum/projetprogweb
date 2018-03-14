window.addEventListener('load', init_sports, true);
window.addEventListener('resize', resize_sports, true);

var nb_elems_sports;

//le nombre de fois qu'on a parcouru la liste de sports à droite
var scroll_sports = 0;

//pour voir si un element a ete clique
var sport_clicked = 0;

//pour se rappeler de la taille des cases
var sport_height;
var sport_width;

var sports = ["Aviron", "Basket", "Football", "Handball",
              "Hockey", "Rugby", "Volley", "Aérobic",
              "Musculation", "Judo", "Karaté", 
              "Badminton", "Tennis", "Tennis de table",
              "Pelote Basque", "Danse", "Gym", "Équitation",
              "Escalade", "Golf", "Natation"];

// on garde tous les sports et on ne modifie pas cette variable
var all_sports = ["Aviron", "Basket", "Football", "Handball",
                  "Hockey", "Rugby", "Volley", "Aérobic",
                  "Musculation", "Judo", "Karaté", 
                  "Badminton", "Tennis", "Tennis de table",
                  "Pelote Basque", "Danse", "Gym", "Équitation",
                  "Escalade", "Golf", "Natation"];

function can_scroll_sports () {
    return (scroll_sports+1)*nb_elems_sports <= sports.length;
}

function control_sport_buttons () {
    s_button_l = document.getElementById("sport-button-l");
    s_button_r = document.getElementById("sport-button-r");
    
    // si on ne peut pas montrer assez de sports, on fait apparaitre les boutons de parcourt
    if (sports.length > nb_elems_sports && can_scroll_sports() || scroll_sports > 0) {
        s_button_l.style["display"] = "block";
        s_button_r.style["display"] = "block";
    } else {
        s_button_l.style["display"] = "none";
        s_button_r.style["display"] = "none";
    };

    // si le bouton ne marche pas on change l'apparence du cursor
    s_button_l.onmouseover = function () {
        if (scroll_sports == 0 || sport_clicked == 1) {
            s_button_l.style["cursor"] = "default";
        } else {
            s_button_l.style["cursor"] = "pointer";
        };
    };

    s_button_r.onmouseover = function () {
        if (!can_scroll_sports() || sport_clicked == 1) {
            s_button_r.style["cursor"] = "default";
        } else {
            s_button_r.style["cursor"] = "pointer";
        };
    };
    
    s_button_l.onclick = function () {
        // si on n'a jamais parcouru à droite, on ne peut pas parcourir à gauche
        if (scroll_sports > 0 && sport_clicked == 0) {
            // on decremente scroll_sports pour des mouvements à gauche
            scroll_sports = scroll_sports - 1;
            remove_sports();
            gen_elems_sports();
        } 
    };
    
    s_button_r.onclick = function () {
        // si on n'est pas sur le dernier liste de sports 
        if (can_scroll_sports() && sport_clicked == 0) {
            // on incrémente scroll_sports pour des mouvements à drotie
            scroll_sports = scroll_sports + 1;
            remove_sports();
            gen_elems_sports();
        }
    };
    
};


function init_sports () {
    gen_elems_sports();
    control_sport_buttons();

};

// efface tous les sports de la section
function remove_sports () {
    elems = document.getElementsByClassName("sport-tiles");
    menu_sports = document.getElementById("sport-list");

    if (elems.length !== 0) {
        while (elems.item(0) !== null) {
            menu_sports.removeChild(elems.item(0));
        }
    }
}

function resize_sports () {
    scroll_sports = 0;

    if (sport_clicked == 0) {
        remove_sports();
        gen_elems_sports();
        control_sport_buttons();
    };
}

function gen_elems_sports () {    
    if (window.innerWidth < 720) { // 2 x 2 si mobile
        nb_elems_sports = 4;
        sport_height = "25vw";
        sport_width = "50%";
    } else if (window.innerWidth < 1000) { // 4 x 4 si tablette
        nb_elems_sports = 16;
        sport_height = "12.5vw";
        sport_width = "25%";
    } else { // 5 x 5 si ordinateur    
        nb_elems_sports = 25;
        sport_height = "5vw";
        sport_width = "20%";
    }



    menu_sports = document.getElementById("sport-list");
    for (i = 0; i < nb_elems_sports; i++) {
        elem = document.createElement("div");
        elem.setAttribute("class", "sport-tiles");
        if (scroll_sports*nb_elems_sports+i < sports.length) {
            elem.setAttribute("class", "sport-tiles not-empty-sport not-clicked-sport");
            content = document.createElement("p");
            content.setAttribute("class", "sport-title");
            content.appendChild(document.createTextNode(sports[scroll_sports*nb_elems_sports+i]));
            elem.appendChild(content);
        }
        menu_sports.appendChild(elem);
    }
    add_sport_actions();
};

// definir evenement de clique pour chaque sport
function add_click_action(j, tile) {
    elems = document.getElementsByClassName("not-empty-sport");
    tile.addEventListener('click', opensport, true);

    function opensport() {
        if (sport_clicked == 0) {
            sport_clicked = 1;
            i = 0;
            // on cache tous les elements sauf celui sur lequel on a cliqué
            while (i < elems.length) {
                if (i !== j) {
                    elems.item(i).style["display"] = "none";
                }
                i++;
            };
            // on enleve les actions de hover de la case clique
            elems.item(j).style["cursor"] = "default";
            elems.item(j).setAttribute("class", "sport-tiles not-empty-sport"); 
            // on remplit toute la section avec cet élément
            tile.style["width"]="100%";
            tile.style["padding-bottom"]="30vw";
            // on ajoute un bouton pour revenir en arrière
            ferme = document.createElement("div");
            ferme.setAttribute("id", "close-sport");
            ferme.appendChild(document.createTextNode("X"));
            tile.appendChild(ferme);
            // on definit le comportement du bouton

            ferme.addEventListener('click', function () {
                closesport(ferme, tile);
            }, true);
        }
    };
};

function closesport(ferme, tile) {
    /* on fait apparaitre de nouveau les fenetres et
       remet la taille de la case clique */
    tile.style["width"] = sport_width;
    tile.style["padding-bottom"] = sport_height;
    elems = document.getElementsByClassName("sport-tiles");
    i = 0;
    while (i < elems.length) {
        elems.item(i).style["display"] = "block";
        i++;
    }
    // on enleve le button pour fermer de la case
    tile.removeChild(ferme);
    // on remet le booleen "si une case est clique" a zero
    sport_clicked = 0;
    // on recalcule l'ordre et taille des elements
    remove_sports();
    gen_elems_sports();
    control_sport_buttons();
}


// ajouter les actions des sports quand on les clique
function add_sport_actions() {
    elems = document.getElementsByClassName("not-empty-sport");
    j = 0;
    while (j < elems.length) {
        add_click_action(j, elems.item(j));
        j++;
    };
};


function sport_search() {
    // on remet sports à tous les sports
    sports = all_sports.slice();
    
    var input, filter,list, listtiles, ad, index;
    input = document.getElementById("sport-search");
    filter = input.value.toLowerCase();

    r = new RegExp("^"+filter);
    console.log(r);
    for (i = 0; i < all_sports.length; i++) {
        if (all_sports[i].toLowerCase().match(r) !== null) {
            console.log(all_sports[i]);
        } else {
            console.log("non"+all_sports.length);
            index_sport = sports.indexOf(all_sports[i]);
            sports.splice(index_sport, 1);
        }
    }

    if (sports.length == 0)
        alert("Pas de résultats");

    remove_sports();
    gen_elems_sports();
    control_sport_buttons();
}

