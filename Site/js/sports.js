window.addEventListener('load', init_sports, true);
window.addEventListener('resize', resize_sports, true);

var nb_elems_sports;

//le nombre de fois qu'on a parcouru la liste de sports à droite
var scroll_sports = 0;


var sports = ["Aviron", "Basket", "Football", "Handball",
              "Hockey", "Rugby", "Volley", "Aérobic",
              "Musculation", "Judo", "Karaté", "Badminton",
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
        if (scroll_sports == 0) {
            s_button_l.style["cursor"] = "default";
        } else {
            s_button_l.style["cursor"] = "pointer";
        };
    };

    s_button_r.onmouseover = function () {
        if (!can_scroll_sports()) {
            s_button_r.style["cursor"] = "default";
        } else {
            s_button_r.style["cursor"] = "pointer";
        };
    };
    
    s_button_l.onclick = function () {
        // si on n'a jamais parcouru à droite, on ne peut pas parcourir à gauche
        if (scroll_sports > 0) {
            // on decremente scroll_sports pour des mouvements à gauche
            scroll_sports = scroll_sports - 1;
            resize_sports();
        } 
    };
    
    s_button_r.onclick = function () {
        // si on n'est pas sur le dernier liste de sports 
        if (can_scroll_sports()) {
            // on incrémente scroll_sports pour des mouvements à drotie
            scroll_sports = scroll_sports + 1;
            resize_sports();
        }
    };
    
};


function init_sports () {
    gen_elems_sports();
    control_sport_buttons();

};

function resize_sports () {
    control_sport_buttons();
    elems = document.getElementsByClassName("sport-tiles");
    menu_sports = document.getElementById("sport-list");

    if (elems.length !== 0) {
        j = 0;

        while (elems.item(j) !== null) {
            menu_sports.removeChild(elems.item(j));
        }
    }

    gen_elems_sports();
}

function gen_elems_sports () {    
    if (window.innerWidth < 720) { // 2 x 2 si mobile
        nb_elems_sports = 4;
    } else if (window.innerWidth < 1000) { // 4 x 4 si tablette
        nb_elems_sports = 16;
    } else { // 5 x 5 si ordinateur    
        nb_elems_sports = 25;   
    }



    menu_sports = document.getElementById("sport-list");

    for (i = 0; i < nb_elems_sports; i++) {
        elem = document.createElement("div");
        elem.setAttribute("class", "sport-tiles");
        if (scroll_sports*nb_elems_sports+i < sports.length) {
            content = document.createElement("p");
            content.setAttribute("class", "sport-title");
            content.appendChild(document.createTextNode(sports[scroll_sports*nb_elems_sports+i]));
            elem.appendChild(content);
        }
        menu_sports.appendChild(elem);
    }
};

