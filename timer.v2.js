
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



function kiir() {

    const d = new Date();
    let time = d.getTime();


    let monthV = 10;
    let dayV = 13;
    let hourV = 20;
    let minV = 0;
    let secV = 0;


    for (let i = 0; i < monthV; i++) {

        dayV += days[i];

    }

    
    
    let allV = dayV * 24 * 60 * 60 + hourV * 60 * 60 + minV * 60 + secV;

    let monthS = d.getMonth()+1;
    let dayS = d.getDate();
    let hourS = d.getHours();
    let minS = d.getMinutes();
    let secS = d.getSeconds();
/*
    let monthS = 9;
    let dayS = 29;
    let hourS = 20;
    let minS = 0;
    let secS = 0;
*/
    for (let i = 0; i < monthS; i++) {

        dayS += days[i];

    }


    

    let allS = dayS * 24 * 60 * 60 + hourS * 60 * 60 + minS * 60 + secS;
    
    let allF = allV-allS;
    
    let secF = allF%60;
    allF = (allF-(allF%60))/60;
    let minF = allF%60;
    allF = (allF-(allF%60))/60;
    let hourF = allF%24
    allF = (allF-(allF%24))/24;



    let dayF = allF;
    
    if (dayF <= 0 && hourF <= 0 && minF <= 0 && secF <= 0) {

        document.getElementById("timeOutP").style.display = "none";
        document.getElementById("kiii").style.display = "block";

    }
    else {

        if (secF < 10) {

            secF = "0" + secF;
    
        }
        if (minF < 10) {
    
            minF = "0" + minF;
    
        }
        if (hourF < 10) {
    
            hourF = "0" + hourF;
    
        }
        if (dayF < 10) {
    
            dayF = "0" + dayF;
    
        }
    
        document.getElementById("timeOutP").innerHTML = (dayF + ":" + hourF + ":" + minF + ":" + secF);

    }


}
kiir();
setInterval(() => {

    kiir();

}, 1000);