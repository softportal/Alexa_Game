'use strict';

const NULL = '-';
const level_map = {
        "facil": 0,
        "medio": 1,
        "dificil": 2
};

function Happ (opts) {
    this.data = require('bd/ahorcado.json');
}

//use only testing purposes
Happ.prototype.test = function() {
    var word = this.search_by_category_level("ciudades", 0);

    console.log(word);

    var res = this.solve(word, [NULL, NULL, NULL, NULL, NULL, NULL], "a");
    console.log(res);
};

Happ.prototype.search_by_category_level = function (category, level) {
    console.log(category);
    return this.data["category"][category]["words"][level];
};

Happ.prototype.new_state = function(word){
    var n     = word['split'].length
    var state = new Array(n);
    state.fill(NULL);
    return {
        "render": render(state),
        "state": state
    };
};

Happ.prototype.solve = function(word, state, letter) {
    var count = 0;
    var split = word["split"]
    if (state.length != split.length){
        return response_error("state not matching word!");
    }


    split.forEach(function (v, i) {
        if (state[i] == NULL){
            if (letter == split[i]){
                count++;
                state[i] = letter
            }
        }
    });

    return response(state, count);
};

Happ.prototype.validate = function(state){
    var res = true;
    state.forEach(function (v, i) {
        if (v == NULL){
            res = false;
        }
    });
    
    return res;
}

Happ.prototype.prueba = function(){
    console.log("prueba");
}

Happ.prototype.parse_level = function(level) {
    return level_map[level];
};


/*********************************************************
 * Private function                                      *
 *********************************************************/
function private_test(chain) {
    console.log(chain);
}

function render(state){
    return state.join('  ');
}

function response(state, count){

    return {
        "render": render(state),
        "state": state,
        "count": count
    };
}

function response_error(error_msg) {
    return {
        "error": error_msg
    };
}

//var p = new Happ({});
//
//p.test();

module.exports = {
    App: Happ
};
