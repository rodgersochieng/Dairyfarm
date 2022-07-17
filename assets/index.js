function produceReport(){

    event.preventDefault();
    let data =[];

    data[0] = data["Shed A"] = perseInt(document.getElementById("Shed A").value);
    data[1] = data["Shed B"] = perseInt(document.getElementById("Shed B").value);
    data[2] = data["Shed C"] = parseInt(document.getElementById("Shed C").value);
    data[3] = data["Shed D"] = perseInt(document.getElementById("Shed D").value);

    let sumData = data.Shed A + data.Shed B + data.Shed C + data.Shed D;

    document.getElementById("dataOutput").innerHTML += "<Br>"
    document.getElementById("dataOutput").innerHTML += "<p> Your production in Shed A is" + data.Shed A + "Litres Per Day </p>";
    document.getElementById("dataOutput").innerHTML += "<p> Your production in Shed B is" + data.Shed B + "Litres Per Day </p>";
    document.getElementById("dataOutput").innerHTML += "<p> Your production in Shed C is" + data.Shed C + "Litres Per Day </p>";
    document.getElementById("dataOutput").innerHTML += "<p> Your production in Shed D is" + data.Shed D + "Litres Per Day </p>";
     

    document.getElementById("dataOutput").innerHTML += "<p> Your total production per day is" + sumData + "Litres per day </p>";

    dailyIncome = sumData * 45;
    document.getElementById("dataOutput").innerHTML += "<Br>"

    document.getElementById("dataOutput").innerHTML += "<hr>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total Daily income is Ksh. "+ dailyIncome + " </p>"
    document.getElementById("dataOutput").innerHTML += "<hr>"

    weeklyIncome = dailyIncome * 7;

    document.getElementById("dataOutput").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";

    document.getElementById("dataOutput").innerHTML += "<hr>"

    document.getElementById("dataOutput").innerHTML += "<Br>"

    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = dailyIncome * 30;
    incomeDecember = dailyIncome * 31;



















} 