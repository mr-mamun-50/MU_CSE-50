var now = new Date();
var day = now.getDay();

var todaysCR = document.getElementById("tRoutineHeading").innerHTML;

if (day == 0) {
    document.getElementById("tRoutineHeading").innerHTML = todaysCR + "(Sunday)";

    document.getElementById("BsecMCF").innerHTML = "10:30 AM";
    document.getElementById("BsecDM").innerHTML = "2:00 PM";

    document.getElementById("CsecDM").innerHTML = "2:00 PM";

    document.getElementById("DsecDM").innerHTML = "12:30 PM";
} else if (day == 1) {
    document.getElementById("tRoutineHeading").innerHTML = todaysCR + "(Monday)";

    document.getElementById("AsecBEE").innerHTML = "10:00 AM";

    document.getElementById("BsecBEE").innerHTML = "10:00 AM";

    document.getElementById("CsecBEE").innerHTML = "2:00 PM";

    document.getElementById("DsecBEE").innerHTML = "2:00 PM";
} else if (day == 2) {
    document.getElementById("tRoutineHeading").innerHTML = todaysCR + "(Tuesday)";

    document.getElementById("AsecMCF").innerHTML = "2:00 PM";

    document.getElementById("BsecMCF").innerHTML = "10:30 AM";

    document.getElementById("CsecMCF").innerHTML = "10:30 AM";

    document.getElementById("DsecMCF").innerHTML = "10:30 AM";
} else if (day == 3) {
    document.getElementById("tRoutineHeading").innerHTML = todaysCR + "(Wednesday)";

    document.getElementById("AsecBEE").innerHTML = "10:30 AM";
    document.getElementById("AsecDM").innerHTML = "6:30 PM";

    document.getElementById("BsecBEE").innerHTML = "10:30 AM";

    document.getElementById("CsecBEE").innerHTML = "2:00 PM";

    document.getElementById("DsecBEE").innerHTML = "2:00 PM";
    document.getElementById("DsecDM").innerHTML = "10:30 AM";

} else if (day == 4) {
    document.getElementById("tRoutineHeading").innerHTML = todaysCR + "(Thursday)";

    document.getElementById("AsecMCF").innerHTML = "2:00 PM";

    document.getElementById("BsecDM").innerHTML = "2:00 PM";

    document.getElementById("CsecMCF").innerHTML = "10:30 AM";
    document.getElementById("CsecDM").innerHTML = "2:00 PM";

    document.getElementById("DsecMCF").innerHTML = "10:30 AM";

} else if (day == 5) {
    document.getElementById("tRoutineHeading").innerHTML = todaysCR + "(Friday)";
} else if (day == 6) {
    document.getElementById("tRoutineHeading").innerHTML = todaysCR + "(Saturday)";

    document.getElementById("AsecP200").innerHTML = "3:30 PM";
    document.getElementById("AsecDM").innerHTML = "6:30 PM";

    document.getElementById("BsecP200").innerHTML = "3:30 PM";

    document.getElementById("CsecP200").innerHTML = "6:30 PM";

    document.getElementById("DsecP200").innerHTML = "6:30 PM";
}



function formLoad() {

    var myForm = document.getElementById("myform");
    var msgSccs = document.getElementById("subMsg");
    var msgErr = document.getElementById("errMsg");

    if (submitted == true) {
        myForm.reset();
        msgSccs.innerHTML = "🗸 Thanks For Your Feedback";
        msgSccs.classList.add("msgSccs");
    } else {
        myForm.reset();
        msgErr.innerHTML = "✖ Error! Please Try Again";
        msgErr.classList.add("msgErr");
    }

    setTimeout(function() {

        document.getElementById("subMsg", "errMsg").innerHTML = "";
        msgSccs.classList.remove("msgSccs");
        msgErr.classList.remove("msgErr");
    }, 5000);
}

function contFormLoad() {

    var myContForm = document.getElementById("contform");
    var msgSccs = document.getElementById("contSubMsg");
    var msgErr = document.getElementById("contErrMsg");

    if (submitted == true) {
        myContForm.reset();
        msgSccs.innerHTML = "🗸 Your message has been sent successfully";
        msgSccs.classList.add("msgSccs");
    } else {
        myContForm.reset();
        msgErr.innerHTML = "✖ Error! Please Try Again";
        msgErr.classList.add("msgErr");
    }

    setTimeout(function() {

        document.getElementById("contSubMsg", "contErrMsg").innerHTML = "";
        msgSccs.classList.remove("msgSccs");
        msgErr.classList.remove("msgErr");
    }, 5000);
}

function oneStopFormLoad() {

    var myOneForm = document.getElementById("myOneForm");
    var msgSccs = document.getElementById("oneSubMsg");
    var msgErr = document.getElementById("oneErrMsg");

    if (submitted == true) {
        myOneForm.reset();
        msgSccs.innerHTML = "🗸 Your mail has been successfully sent to 1-Stop service";
        msgSccs.classList.add("msgSccs");
    } else {
        myOneForm.reset();
        msgErr.innerHTML = "✖ Error! Please Try Again";
        msgErr.classList.add("msgErr");
    }

    setTimeout(function() {

        document.getElementById("oneSubMsg", "oneErrMsg").innerHTML = "";
        msgSccs.classList.remove("msgSccs");
        msgErr.classList.remove("msgErr");
    }, 5000);
}


var h1 = [
    "Materials of 50 batch is now together",
    "Best learning place for juniors",
    "Best tutorial collection on various topics",
    "Get all your results in one click",
    "Welcome to <br>MU CSE 50"
];
var cnt = 0;
var headerH1 = document.getElementById("headerH1");

setInterval(function() {
    headerH1.innerHTML = h1[cnt];
    cnt++;

    if (cnt >= h1.length) {
        cnt = 0;
    }
}, 4000);




google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Skils', 'Percentage of total students'],
        ['Competitive Programmer', 25],
        ['Web Developer', 35],
        ['Android Developer', 10],
        ['Graphic Designer', 25],
        ['Others', 5]
    ]);

    var options = {
        title: 'Statistics at a glance',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}