function produceReport(){

    event.preventDefault();
    let data =[];

    data[0] = data["Shed A"] = perseInt(document.getElementById("Shed A").value);
    data[1] = data["Shed B"] = perseInt(document.getElementById("Shed B").value);
    data[2] = data["Shed C"] =parseInt(document.getElementById("Shed C").value);
    data[3] = data["Shed D"] =perseInt(document.getElementById("Shed D").value);
}