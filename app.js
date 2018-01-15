var Validation = function (fieldId) {
    this.fieldId = fieldId;
}

Validation.prototype.init = function () {
    var val = document.getElementById(this.fieldId).value;
    console.log(val);
}

Validation.prototype.min = function (mincaracters) {
    var val = document.getElementById(this.fieldId).value;
    if (val.length < mincaracters) {
        console.log("Ops, you must insert minimum " + mincaracters + " caracters");
    } else {
        console.log("min","Ok, validate");
    }
}

Validation.prototype.empty = function () {
    var val = document.getElementById(this.fieldId).value;
    if (val === "") {
        console.log("Por favor preencha os campos");
    } else {
        console.log("empty","Ok, validate");
    }
}

Validation.prototype.max = function (maxcaracters) {
    var val = document.getElementById(this.fieldId).value;
    if (val.length > maxcaracters) {
        console.log("por favor preencha menos de " +maxcaracters+ " caracters ");
    } else {
        console.log("max","Ok, validate");
    }
}