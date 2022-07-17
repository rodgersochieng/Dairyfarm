function produceReport(){
    event.preventDefault();
    let data =[];
    data[0] = data["Shed A"] = parseInt(document.getElementById("Shed A").value);
    data[1] = data["Shed B"] = parseInt(document.getElementById("Shed B").value);
    data[2] = data["Shed C"] = parseInt(document.getElementById("Shed C").value);
    data[3] = data["Shed D"] = parseInt(document.getElementById("Shed D").value);

    let sumData = data.Shed A + data.Shed B + data.Shed C + data.Shed D;
}