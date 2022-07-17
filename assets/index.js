function produceReport(){

    event.preventDefault();
    let data =[];

    data[0] = data["Shed A"] = perseInt(document.getElementById("Shed A").value);
    data[1] = data["Shed B"] = perseInt(document.getElementById("Shed B").value);
    data[2] = data["Shed C"] = parseInt(document.getElementById("Shed C").value);
    data[3] = data["Shed D"] = perseInt(document.getElementById("Shed D").value);

    let sumData = data.Shed_A + data.Shed_B + data.Shed_C + data.Shed_D;

    document.getElementById("dataOutput").innerHTML += "<Br>"
    document.getElementById("dataOutput").innerHTML += "<p> Your production in Shed A is" + data.Shed_A + "Litres Per Day </p>";
    document.getElementById("dataOutput").innerHTML += "<p> Your production in Shed B is" + data.Shed_B + "Litres Per Day </p>";
    document.getElementById("dataOutput").innerHTML += "<p> Your production in Shed C is" + data.Shed_C + "Litres Per Day </p>";
    document.getElementById("dataOutput").innerHTML += "<p> Your production in Shed D is" + data.Shed_D + "Litres Per Day </p>";
     

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


    
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for January is Ksh. " + incomeJanuary + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for February is Ksh. " + incomeFebruary + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for March is Ksh. " + incomeMarch + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for April is Ksh. " + incomeApril + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for May is Ksh. " + incomeMay + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for June is Ksh. " + incomeJune + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for July is Ksh. " + incomeJuly + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for August is Ksh. " + incomeAugust + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for September is Ksh. " + incomeSeptember + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for October is Ksh. " + incomeOctober + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for November is Ksh. " + incomeNovember + " </p>"
    document.getElementById("dataOutput").innerHTML += "<p> Your total income for December is Ksh. " + incomeDecember + " </p>"




    document.getElementById("dataOutput").innerHTML += "<Br>"

    document.getElementById("dataOutput").innerHTML += "<hr>"

    incomeInLeapYear = dailyIncome * 366;

    document.getElementById("dataOutput").innerHTML += "<p>Your total income in a leap year is Ksh. " + incomeInLeapYear + " </p>";

    document.getElementById("dataOutput").innerHTML += "<hr>"

    document.getElementById("dataOutput").innerHTML += "<Br>"









} 