var Validation = function (fieldId) {
    this.fieldId = fieldId;
}

Validation.prototype.init = function () {
    var val = document.getElementById(this.fieldId).value;
    console.log(val);
}

Validation.prototype.min = function (mincharacters) {
    var val = document.getElementById(this.fieldId).value;
    if (val.length < mincharacters) {
        this.msg("Ops, you must insert minimum " + mincharacters + " characters");
    } else {
        console.log("min", "Ok, validate");
    }
}

Validation.prototype.empty = function () {
    var val = document.getElementById(this.fieldId).value;
    if (val === "") {
        this.msg("The Field cannot be empty");
    } else {
        console.log("empty", "Ok, validate");
    }
}

Validation.prototype.max = function (maxcharacters) {
    var val = document.getElementById(this.fieldId).value;
    if (val.length > maxcharacters) {
        this.msg("You must insert the maximun " + maxcharacters + " of characters ");
    } else {
        console.log("max", "Ok, validate");
    }

}

Validation.prototype.msg = function (message) {
    var span = document.createElement("span");
    span.innerText= message;
    var div = document.getElementById(this.fieldId).parentElement;
    div.appendChild(span);
    console.log(div);
    //alert(this.fieldId + " : " + message);

}

Validation.prototype.isEqual = function (field) {
    var val = document.getElementById(this.fieldId).value;
    var val2 = document.getElementById(field).value;
    if (val !== val2) {
        this.msg(this.fieldId + " is not matching " + field + " with field2 ");
    } else {
        console.log(" It is Equal "," ok Validated ");
    }
}