const Happ = require('./lib/ahorcado_app');

var prueba = new Happ.App();

prueba.test();
Happ.prototype.new_state = function(word){
    var n     = word['split'].length
    var state = new Array(n);

    return state.fill(NULL);
};

