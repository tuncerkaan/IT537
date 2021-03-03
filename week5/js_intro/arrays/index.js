var groups = ["Queen", "Iron Maiden", "Metallica", "Ayna"];

groups.sort();
groups.reverse();

document.getElementById("groups").innerHTML = groups;


//filter sample
var numbers = [45,4,9,16,25];
var over17 = numbers.filter(myFunction)

function myFunction(value){
    return value > 17;
}


document.getElementById("groups").innerHTML = over17;


