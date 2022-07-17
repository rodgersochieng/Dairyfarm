function produceReport(){

    event.preventDefault();
    let data =[];

    data[0] = data["Shed A"] = perseInt(document.getElementById("Shed A").value);
    data[1] = data["Shed B"] = perseInt(document.getElementById("Shed B").value);
    data[2] = data["Shed C"] = parseInt(document.getElementById("Shed C").value);
    data[3] = data["Shed D"] = perseInt(document.getElementById("Shed D").value);

    let sumData = data.Shed A + data.Shed B + data.Shed C + data.Shed D;

    document.getElementById("dataOutput").innerHTML += "<Br>"
    document.getElementById("dataOutput").innerHTML += "<P> Youy production in Shed A is" + data.Shed A + "Litres Per Day <P>"
    document.getElementById("dataOutput").innerHTML += "<P> Youy production in Shed B is" + data.Shed B + "Litres Per Day <P>"
    document.getElementById("dataOutput").innerHTML += "<P> Youy production in Shed C is" + data.Shed C + "Litres Per Day <P>"
    document.getElementById("dataOutput").innerHTML += "<P> Youy production in Shed D is" + data.Shed D + "Litres Per Day <P>"

}