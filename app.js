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
        this.msg("Ops, you must insert minimum " + mincaracters + " caracters");
    } else {
        console.log("min","Ok, validate");
    }
}

Validation.prototype.empty = function () {
    var val = document.getElementById(this.fieldId).value;
    if (val === "") {
        this.msg("Por favor preencha os campos");
    } else {
        console.log("empty","Ok, validate");
    }
}

Validation.prototype.max = function (maxcaracters) {
    var val = document.getElementById(this.fieldId).value;
    if (val.length > maxcaracters) {
       this.msg("por favor preencha menos de " +maxcaracters+ " caracters ");
    } else {
        console.log("max","Ok, validate");
    }
}

Validation.prototype.msg = function (menssage) {
    alert(this.fieldId +" : "+ menssage); 
}
