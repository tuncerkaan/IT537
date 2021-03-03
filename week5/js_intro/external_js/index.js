var car = {
    brand:"Alfa Romeo",
    model:"Giulia",
    series:"QV",
    detail: function(){
        return this.brand + " " + this.model  + " " + this.series;
    }
}

document.getElementById("carDescription").innerHTML = car.detail();