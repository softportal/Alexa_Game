'use strict';

function Happ (opts) {
    this.data = require('../../bd/ahorcado.json');

}

Happ.prototype.test = function () {
    var res = this.search_by_category_level("ciudades", 0);

    console.log(res);
};

Happ.prototype.search_by_category_level = function (category, level) {
    console.log(category);
    return this.data["category"][category]["words"][level];
};


/*********************************************************
 * Private function                                      *
 *********************************************************/
function private_test(chain) {
    console.log(chain);
}

var p = new Happ({});

p.test();

module.exports = Happ
