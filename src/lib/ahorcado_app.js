'use strict';

const NULL = '-';
var pry = require('pryjs');

function Happ (opts) {
    this.data = require('../../bd/ahorcado.json');
}

//use only testing purposes
Happ.prototype.test = function () {
    var word = this.search_by_category_level("ciudades", 0);

    console.log(word);

    var res = this.solve(word, [NULL, NULL, NULL, NULL, NULL, NULL], "a");
    console.log(res);
};

Happ.prototype.search_by_category_level = function (category, level) {
    console.log(category);
    return this.data["category"][category]["words"][level];
};

Happ.prototype.solve = function (word, state, letter) {
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


/*********************************************************
 * Private function                                      *
 *********************************************************/
function private_test(chain) {
    console.log(chain);
}

function response(state, count){
    var render = function(){
        return state.join('  ');
    }

    return {
        "render": render(),
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

module.exports = Happ
