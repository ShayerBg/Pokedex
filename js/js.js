
var content = document.querySelector('.content');
var offset = 1;
var limit = 11;
$('.back').click(function() {
    if (offset != 1) {
        offset -=12 
        removeChildNodes(content);
        all(offset, limit);
    }
});

$('.next').click(function() {
    if (offset != 890) {
        offset +=12 
        removeChildNodes(content)
        all(offset, limit);
    }
    
 });

function pokemones(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((call) => call.json())
    .then((data) => {print(data);
    console.log(data);})
}

function all(offset, limit) {
    for (let i = offset; i <= offset + limit; i++) {
        pokemones(i);
    }
}

function print(caract) {
    var contenedor = document.createElement('div');
    $(contenedor).addClass('contenedor');

    var name = document.createElement('p');
    $(name).addClass('name');
    $(name).html(caract.name);

    var contenedor_imagen = document.createElement('div');
    $(contenedor_imagen).addClass('contenedor_imagen');

    var imagen = document.createElement('img');
    $(imagen).attr('src', caract.sprites.front_default);

    var id = document.createElement('p');
    $(id).addClass('id');
    $(id).html(`#${caract.id.toString().padStart(3, 0)}`);

    $(contenedor_imagen).append(imagen);

    var stat_contenedor_padre = document.createElement('div');
    $(stat_contenedor_padre).addClass('stat_contenedor_padre');

    var cont_principal = document.createElement('div');
    $(cont_principal).addClass('cont_principal');

    var nombre_stats = document.createElement('div');
    $(nombre_stats).addClass('nombre_stats');
    
    $(nombre_stats).append(caract.name);
    $(nombre_stats).append(' stats');



    $(stat_contenedor_padre).append(nombre_stats);

    for (let i = 0; i < 6; i++) {
             
        var stat_number = document.createElement('div');
        $(stat_number).html(caract.stats[i].base_stat);

        var stat_contenedor = document.createElement('div');
        $(stat_contenedor).addClass('stat_contenedor');


        var stat_name = document.createElement('div');
        $(stat_name).html(caract.stats[i].stat.name);

        
        $(stat_contenedor).append(stat_name);
        $(stat_contenedor).append('<p>: </p>');
        $(stat_contenedor).append(stat_number);

        $(stat_contenedor_padre).append(stat_contenedor);

        $(contenedor).append(stat_contenedor_padre);

    }
    

    var nombre_abilities = document.createElement('div');
    $(nombre_abilities).addClass('nombre_abilities');

    $(nombre_abilities).append(caract.name);
    $(nombre_abilities).append(' abilities');

    $(stat_contenedor_padre).append(nombre_abilities);

// ---------------habilidades-------------

    var abil = caract.abilities.length;
        
            for (let indice = 0; indice < abil; indice++) {

                var abilities_cont = document.createElement('div');
                $(abilities_cont).addClass('abilities_cont');


                var abilities_name = document.createElement('div');
                var check = $(abilities_name).html(caract.abilities[indice].ability.name);


                $(abilities_cont).append(abilities_name);
                $(stat_contenedor_padre).append(abilities_cont);
                $(contenedor).append(stat_contenedor_padre);
            
           }
        
        
        
    
    

    $(contenedor).click(function() {

        $(stat_contenedor_padre).toggleClass('active');
        $(cont_principal).toggleClass('disable');
    });

// -------------types---------------

            $(cont_principal).append(name);
            $(cont_principal).append(contenedor_imagen);
            $(cont_principal).append(id);

        var tp = caract.types.length;
        
            for (let ind = 0; ind < tp; ind++) {

                console.log(ind);

                var tp_cont = document.createElement('div');
                $(tp_cont).addClass('tp_cont');

                var type = document.createElement('div');
                $(type).addClass('type');
                var check2 = $(type).html(caract.types[ind].type.name);

                $(tp_cont).append(type);
                $(cont_principal).append(tp_cont);

                $(contenedor).append(cont_principal);

                if ($(type).html() == 'steel') {
                    $(type).css('color', '#CCCCCC' );
                }
                if ($(type).html() == 'water') {
                    $(type).css('color', '#B0E2FF' );
                }
                if ($(type).html() == 'bug') {
                    $(type).css('color', '#99cc33' );
                }
                if ($(type).html() == 'dragon') {
                    $(type).css('color', '#AB82FF' );
                }
                if ($(type).html() == 'electric') {
                    $(type).css('color', '#FFD700' );
                }
                if ($(type).html() == 'ghost') {
                    $(type).css('color', 'rgb(96,96,176)' );
                }
                if ($(type).html() == 'fire') {
                    $(type).css('color', '#FF7F00' );
                }
                if ($(type).html() == 'fairy') {
                    $(type).css('color', '#FFB0FF' );
                }
                if ($(type).html() == 'ice') {
                    $(type).css('color', '#ADD8E6' );
                }
                if ($(type).html() == 'fighting') {
                    $(type).css('color', '#FF6A6A' );
                }
                if ($(type).html() == 'normal') {
                    $(type).css('color', '#DDCCAA' );
                }
                if ($(type).html() == 'grass') {
                    $(type).css('color', 'rgb(120,200,80)' );
                }
                if ($(type).html() == 'psychic') {
                    $(type).css('color', '#FFB5C5' );
                }
                if ($(type).html() == 'rock') {
                    $(type).css('color', '#CD853F' );
                }
                if ($(type).html() == 'dark') {
                    $(type).css('color', '#A9A9A9' );
                }
                if ($(type).html() == 'ground') {
                    $(type).css('color', '#DEB887' );
                }
                if ($(type).html() == 'poison') {
                    $(type).css('color', '#CC88BB' );
                }
                if ($(type).html() == 'flying') {
                    $(type).css('color', '#BAAAFF' );
                }
                
            
           }

           $('.content').append(contenedor);
}
function removeChildNodes(parent)
{
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

all(offset, limit);



