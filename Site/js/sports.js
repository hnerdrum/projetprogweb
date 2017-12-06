window.onload = gen_elems_sports;

window.addEventListener('resize', resize_sports, true);

function resize_sports () {
    elems = document.getElementsByClassName("sport-tiles");
    menu_sports = document.getElementById("sport-list");

    if (elems.length !== 0) {
        j = 0;
        console.log("elems length"+elems.length);

        while (elems.item(j) !== null) {
            console.log(j);
            menu_sports.removeChild(elems.item(j));
        }
    }

    gen_elems_sports();
}

function gen_elems_sports () {
    if (window.innerWidth < 720) { // 2 x 2 si mobile
        nb_elems = 4;
    } else if (window.innerWidth < 1000) { // 4 x 4 si tablette
        nb_elems = 16;
    } else { // 5 x 5 si ordinateur    
        nb_elems = 25;   
    }

    console.log("nb elems"+nb_elems);


    menu_sports = document.getElementById("sport-list");

    for (i = 0; i < nb_elems; i++) {
        elem = document.createElement("div");
        elem.setAttribute("class", "sport-tiles");
        menu_sports.appendChild(elem);
    }
};
