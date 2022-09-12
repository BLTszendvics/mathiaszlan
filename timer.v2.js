
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



function kiir() {

    const d = new Date();
    let time = d.getTime();


    let monthV = 10;
    let dayV = 13;
    let hourV = 20;
    let minV = 0;
    let secV = 0;
    
    dayV += days[monthV-1];
    
    let allV = dayV * 24 * 60 * 60 + hourV * 60 * 60 + minV * 60 + secV;

    let monthS = d.getMonth()+1;
    let dayS = d.getDate();
    let hourS = d.getHours();
    let minS = d.getMinutes();
    let secS = d.getSeconds();
    
    dayS += parseInt(days[monthS-1]);
    
    let allS = dayS * 24 * 60 * 60 + hourS * 60 * 60 + minS * 60 + secS;
    
    let allF = allV-allS;
    
    let secF = allF%60;
    allF = (allF-(allF%60))/60;
    let minF = allF%60;
    allF = (allF-(allF%60))/60;
    let hourF = allF%24
    allF = (allF-(allF%24))/24;
    let dayF = allF%31;
    allF = (allF-(allF%31))/31;
    let monthF = allF;
    
    if (secF < 10) {

        secF = secF + "0";

    }
    if (minF < 10) {

        minF = minF + "0";

    }
    if (hourF < 10) {

        hourF = hourF + "0";

    }
    if (monthF < 10) {

        monthF = monthF + "0";

    }
    if (dayF < 10) {

        dayF = dayF + "0";

    }

    document.getElementById("timeOutP").innerHTML = (monthF + ":" + dayF + ":" + hourF + ":" + minF + ":" + secF);
}
kiir();
setInterval(() => {

    kiir();

}, 1000);