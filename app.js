var Validation = function(fieldId){
    this.fieldId = fieldId;
}

Validation.prototype.init = function(){
  var val = document.getElementById(this.fieldId).value;
  console.log(val);
}

Validation.prototype.min = function(mincaracters){
    var val = document.getElementById(this.fieldId).value;
    if(val.length < mincaracters){
        console.log("Ops, you must insert minimum " + mincaracters + " caracters");
    } else {
        console.log("Ok, validate");
    }   
}

Validation.prototype.empty = function(){
    
}