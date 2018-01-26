//  publico objeto calculadora
var Calculadora = (function () {
    "use strict";
    
    //construtor do objeto calc
    var calc = function (field1Id, field2Id, fieldResultId) {
        this.field1Id = field1Id;
        this.field2Id = field2Id;
        this.fieldResultId = fieldResultId;
    }

    calc.prototype.setField = function () {
        this.number1 = parseFloat(document.getElementById(this.field1Id).value);
        this.number2 = parseFloat(document.getElementById(this.field2Id).value);
    }

    calc.prototype.result = function (res) {
        var input = document.getElementById(this.fieldResultId);
        input.value = res;
    }

    calc.prototype.sum = function () {
        this.setField();
        var res = this.number1 + this.number2;
        this.result(res);
    }
    
    calc.prototype.substraction = function () {
        this.setField();
        var res = this.number1 - this.number2;
        this.result(res);
    }

    calc.prototype.multiply = function () {
        this.setField();
        var res = this.number1 * this.number2;
        this.result(res);
    }

    calc.prototype.division = function () {
        this.setField();
        var res = this.number1 / this.number2;
        this.result(res);
    }

    return calc;
})();