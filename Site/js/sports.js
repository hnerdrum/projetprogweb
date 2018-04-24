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

// stocker les informations pour la section sports

var sport_content = [];

sport_content.push({Nom: "Athlétisme", Jour: ["Lundi"], Horaire:["18 h 30 - 20 h 00"], Lieu:["Synthétique"], Commentaires: ""});
sport_content.push({Nom: "Aviron", Jour: ["Jeudi"], Horaire:["14 h 00 - 16 h 00"], Lieu:["TUC (inter U)"], Commentaires: ""});
sport_content.push({Nom: "Badminton", Jour: ["Mercredi", "Dimanche"], Horaire:["21 h 30 - 23 h 00", "16 h 00 - 18 h 00"], Lieu:["Gymnase"], Commentaires: ""});

var basket = [];
basket.push({Nom: "Basket Féminin", Jour: ["Jeudi"], Horaire:["13 h 30 - 15 h 30"], Lieu:["Gymnase"], Commentaires: ""});
basket.push({Nom: "Basket Masculin", Jour: ["Mardi", "Mercredi"], Horaire:["18 h 30 - 20 h 00", "20 h 00 - 21 h 30"], Lieu:["Gymnase"], Commentaires: ""});
sport_content.push(basket);

sport_content.push({Nom: "Multi-Box", Jour: ["Mercredi", "Dimanche"], Horaire:["20 h 30 - 22 h 30", "18 h 00 - 20 h 00"], Lieu:["Dojo - Gymnase"], Commentaires: ""});
sport_content.push({Nom: "Équitation", Jour: ["Jeudi"], Horaire:["13 h 30 - 15 h 30"], Lieu:["À déterminer"], Commentaires: "plateau d'équitation organisé par l'Université du Mirail"});
sport_content.push({Nom: "Escalade", Jour: ["Lundi", "Jeudi"], Horaire:["18 h 00 - 20 h 00", "15 h 00 - 17 h 00"], Lieu:["SCUAPS"], Commentaires: ""});
sport_content.push({Nom: "Step", Jour: ["Mercredi"], Horaire:["18 h 45 - 19 h 30"], Lieu:["Salle de danse"], Commentaires: ""});
sport_content.push({Nom: "Zumba", Jour: ["Jeudi"], Horaire:["14 h 30 - 15 h 30"], Lieu:["Salle de danse"], Commentaires: ""});
sport_content.push({Nom: "Pilate", Jour: ["Jeudi", "Jeudi"], Horaire:["13 h 00 - 14 h 30", "14 h 30 - 15 h 30"], Lieu:["Salle de danse"], Commentaires: ""});

var foot = [];
foot.push({Nom: "Football Masculin", Jour: ["Mardi", "Jeudi"], Horaire:["18 h 30 - 20 h 00", "13 h 30 - 15 h 30"], Lieu:["Synthétique"], Commentaires: ""});
foot.push({Nom: "Football Féminin", Jour: ["Mercredi"], Horaire:["18 h 30 - 20 h 00"], Lieu:["Synthétique"], Commentaires: ""});
sport_content.push(foot);

sport_content.push({Nom: "Golf", Jour: ["Jeudi"], Horaire:["13 h 30 - 16 h 30"], Lieu:["La Ramée"], Commentaires: ""});
sport_content.push({Nom: "Gymnastique", Jour: ["Jeudi"], Horaire:["14 h 00 - 15 h 45"], Lieu:["COSEC + Inter U"], Commentaires: "Sans intervenant"});

var hand = [];
hand.push({Nom: "Handball Masculin", Jour: ["Lundi"], Horaire:["20 h 15 - 22 h 30"], Lieu:["Gymnase"], Commentaires: ""});
hand.push({Nom: "Handball Féminin", Jour: ["Mardi"], Horaire:["20 h 00 - 21 h 30"], Lieu:["Gymnase"], Commentaires: ""});
hand.push({Nom: "Handball Mixte", Jour: ["Jeudi"], Horaire:["17 h 30 - 19 h 00"], Lieu:["Gymnase"], Commentaires: ""});
sport_content.push(hand);

sport_content.push({Nom: "Hockey", Jour: ["Mardi"], Horaire:["20 h 00 - 21 h 30", "21 h 30 - 23 h 00"], Lieu:["Synthétique", "Gymnase"], Commentaires: ""});
sport_content.push({Nom: "Jazz (moderne)", Jour: ["Lundi"], Horaire:["18 h 30 - 20 h 00", "20 h 00 - 21 h 30"], Lieu:["Salle de danse"], Commentaires: "Débutants et intermédiaires (Séance 1), Intermédiaires et Confirmés (Séance 2)"});
sport_content.push({Nom: "Judo", Jour: ["Mardi", "Jeudi"], Horaire:["18 h 30 - 20 h 00", "18 h 00 - 20 h 00"], Lieu:["Combat"], Commentaires: ""});
sport_content.push({Nom: "Karaté", Jour: ["Mardi", "Jeudi"], Horaire:["20 h 00 - 22 h 00", "14 h 30 - 16 h 00"], Lieu:["Combat"], Commentaires: ""});
sport_content.push({Nom: "Lutte", Jour: ["Lundi"], Horaire:["20 h 00 - 22 h 00"], Lieu:["Combat"], Commentaires: ""});
sport_content.push({Nom: "Musculation", Jour: ["Mardi"], Horaire:["18 h 30 - 20 h 30"], Lieu:["Gardiennage du gymnase"], Commentaires: "Exclusivité aux licenciés AS"});
sport_content.push({Nom: "Natation", Jour: ["Mardi", "Jeudi"], Horaire:["19 h 00 - 20 h 00", "19 h 00 - 20 h 00"], Lieu:["Sup Aéro"], Commentaires: ""});
sport_content.push({Nom: "Raid", Jour: ["Mardi", "Jeudi"], Horaire:["18 h 00 - 20 h 00", "14 h 00 - 16 h 00"], Lieu:["Gymnase"], Commentaires: ""});

var rugby = [];
rugby.push({Nom: "Rugby Féminin", Jour: ["Jeudi"], Horaire:["15 h 30 - 17 h 30"], Lieu:["Synthétique"], Commentaires: ""});
rugby.push({Nom: "Rugby Féminin (repli)", Jour: ["Lundi"], Horaire:["18 h 00 - 20 h 00"], Lieu:["Salle de combat"], Commentaires: ""});
rugby.push({Nom: "Rugby Masculin Équipe 1", Jour: ["Jeudi"], Horaire:["12 h 00 - 13 h 30"], Lieu:["Synthétique"], Commentaires: ""});
rugby.push({Nom: "Rugby Masculin Équipe 2, 3, 4", Jour: ["Jeudi"], Horaire:["15 h 30 - 17 h 30"], Lieu:["Synthétique"], Commentaires: ""});
sport_content.push(rugby);

sport_content.push({Nom: "Tennis", Jour: ["Jeudi"], Horaire:["13 h 00 - 15 h 30"], Lieu:["Lasbordes"], Commentaires: ""});
sport_content.push({Nom: "Tennis de table", Jour: ["Mercredi", "Vendredi"], Horaire:["12 h 30 - 13 h 30", "18 h 00 - 19 h 30"], Lieu:["Gymnase"], Commentaires: "Créneau partagé avec le badminton du personnel"});

var volley = [];
volley.push({Nom: "Volley Féminin Équipe 1", Jour: ["Jeudi"], Horaire:["15 h 30 - 17 h 30"], Lieu:["Gymnase"], Commentaires: ""});
volley.push({Nom: "Volley Féminin Équipe 2 + 4x4 Mixte", Jour: ["Lundi"], Horaire:["18 h 30 - 20 h 15"], Lieu:["Gymnase"], Commentaires: ""});
volley.push({Nom: "Volley Masculin Équipe 1", Jour: ["Jeudi"], Horaire:["15 h 30 - 17 h 30"], Lieu:["Gymnase"], Commentaires: ""});
volley.push({Nom: "Volley Masculin Équipe 2, 3", Jour: ["Mercredi"], Horaire:["18 h 30 - 20 h 00"], Lieu:["Gymnase"], Commentaires: ""});
sport_content.push(volley);

sport_content.push({Nom: "Tir à l'arc", Jour: [""], Horaire:[""], Lieu:["Stand UPS"], Commentaires: ""});

var sports = ["Athlétisme", "Aviron", "Badminton", "Basket", "Multi-Box",
              "Équitation", "Escalade", "Step", "Zumba", "Pilate", "Football", "Golf",
              "Gymnastique", "Handball", "Hockey", "Jazz (moderne)", "Judo", "Karaté",
              "Lutte", "Musculation", "Natation", "Raid", "Rugby", "Tennis", "Tennis de table",
              "Volley", "Tir à l'arc"];


// on garde tous les sports et on ne modifie pas cette variable
var all_sports = ["Athlétisme", "Aviron", "Badminton", "Basket", "Multi-Box",
              "Équitation", "Escalade", "Step", "Zumba", "Pilate", "Football", "Golf",
              "Gymnastique", "Handball", "Hockey", "Jazz (moderne)", "Judo", "Karaté",
              "Lutte", "Musculation", "Natation", "Raid", "Rugby", "Tennis", "Tennis de table",
              "Volley", "Tir à l'arc"];

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
function add_click_action(j, tile, numero) {
    elems = document.getElementsByClassName("sport-tiles");
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

            // on ajoute une table avec les informations
            gen_sport_table(tile, numero);
            
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
        add_click_action(j, elems.item(j), scroll_sports*nb_elems_sports+j);
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
    for (i = 0; i < all_sports.length; i++) {
        if (all_sports[i].toLowerCase().match(r) == null) {
            index_sport = sports.indexOf(all_sports[i]);
            sports.splice(index_sport, 1);
        }
    }

    if (sports.length == 0)
        alert("Pas de résultats");

    remove_sports();
    scroll_sports = 0;
    gen_elems_sports();
    control_sport_buttons();
}

/* fonction qui génére un tableau rempli d'informations concernant le sport à l'ouverture 
   et l'affiche sur la case qui a été ouverte (param)

*/

function gen_sport_table(opened, numero) {
    s_table = document.createElement("table");
    s_table.setAttribute("class", "s_table");

    // creation du header de la table
    
    s_theader = document.createElement("th");
    s_theader.appendChild(document.createTextNode("Jour"));
    s_table.appendChild(s_theader);

    s_theader = document.createElement("th");
    s_theader.appendChild(document.createTextNode("Horaire"));
    s_table.appendChild(s_theader);

    s_theader = document.createElement("th");
    s_theader.appendChild(document.createTextNode("Lieu"));
    s_table.appendChild(s_theader);
    

    s_theader = document.createElement("th");
    s_theader.appendChild(document.createTextNode("Commentaires"));
    s_table.appendChild(s_theader);

    // on recupere les informations du sport et on remplit la table

    // on recupere l'objet qui contient les infos

    content = sport_content[numero];
    
    // si le contenu est un tableau
    if (Array.isArray(content) === true) {

        for (entry of content) {

            for (v = 0; v < Math.max(entry.Jour.length, entry.Horaire.length, entry.Lieu.length); v++) {
                s_trow = document.createElement("tr");

                s_tdata = document.createElement("td");

                if (v < entry.Jour.length)
                    s_tdata.appendChild(document.createTextNode(entry.Jour[v]));
                else
                    s_tdata.appendChild(document.createTextNode(entry.Jour[0]));
                s_trow.appendChild(s_tdata);

                
                s_tdata = document.createElement("td");
                if (v < entry.Horaire.length)
                    s_tdata.appendChild(document.createTextNode(entry.Horaire[v]));
                else
                    s_tdata.appendChild(document.createTextNode(entry.Horaire[0]));
                s_trow.appendChild(s_tdata);

                s_tdata = document.createElement("td");
                if (v < entry.Lieu.length)
                    s_tdata.appendChild(document.createTextNode(entry.Lieu[v]));
                else
                    s_tdata.appendChild(document.createTextNode(entry.Lieu[0]));
                s_trow.appendChild(s_tdata);

                s_tdata = document.createElement("td");
                if (entry.Commentaires != undefined)
                    s_tdata.appendChild(document.createTextNode(entry.Nom+"| "+entry.Commentaires));
                else
                    s_tdata.appendChild(document.createTextNode(entry.Nom));

                s_trow.appendChild(s_tdata);

                s_table.appendChild(s_trow);
            }
        }
        
    } else { // si le contenu est une seule entrée

        s_trow = document.createElement("tr");
        
        s_tdata = document.createElement("td");
        s_tdata.appendChild(document.createTextNode(content.Jour[0]));
        s_trow.appendChild(s_tdata);
        
        s_tdata = document.createElement("td");
        s_tdata.appendChild(document.createTextNode(content.Horaire[0]));
        s_trow.appendChild(s_tdata);

        s_tdata = document.createElement("td");
        s_tdata.appendChild(document.createTextNode(content.Lieu[0]));
        s_trow.appendChild(s_tdata);

        s_tdata = document.createElement("td");
        if (content.Commentaires != undefined) 
            s_tdata.appendChild(document.createTextNode(content.Commentaires));
        s_trow.appendChild(s_tdata);

        s_table.appendChild(s_trow);
    }

 

    // on insere la table dans le tile

    opened.appendChild(s_table);
    
    
}
