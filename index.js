// --------------Homepage header text slider Started--------------------

var h1 = [
    "Materials of 50 batch is now together",
    "Best learning place for juniors",
    "Best tutorial collection on various topics",
    "Get all your results in one place",
    "Welcome to <br>MU CSE 50"
];
var hp = [
    "All of the class materials and reference books are available in the website from first semester to ongoing semester, which is easily available here for junior student or any other person.",
    "Junior students of 50 batches can find study techniques, lectures of different teachers, previous question papers, reference books and tutorials for their advancement on this website.",
    "Here is a collection of quality tutorials on various topics in computer science. Anyone can develop their skills by following these tutorials.",
    "Here is a great feature to know the results of the students of Metropolitan University. Also the records of previous results of all the students of 50th batch are kept here.",
    "It's a website of 50th batch. Here students of 50th batch will get facilities such as course materials, tutorials, routine, google classroom code and other academic facilities. Moreover, anyone can know about the curricular activities and study materials of 50th batch."
];
var cnt = 0;
var headerH1 = document.getElementById("headerH1");
var headerP = document.getElementById("headerP");

setInterval(function() {
    headerH1.innerHTML = h1[cnt];
    headerP.innerHTML = hp[cnt];
    cnt++;

    if (cnt >= h1.length) {
        cnt = 0;
    }
}, 4000);

// --------------Homepage header text slider ended--------------------


// --------------Todays routine view started--------------------

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

// --------------Todays routine view ended--------------------


// -----------------Form handler Started-----------------------

// Feedback form

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


// Contact us form

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


// OneStop form

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

// ---------------------Form handler ended----------------------




// ---------------Students statistics started---------------------

google.charts.load("current", {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Skills', 'Percentage: ', {
            role: 'style'
        }],
        ['Competitive Programmer ', 25, 'color: #3366CC'],
        ['Web Developer ', 35, 'color: #109618'],
        ['Android Developer ', 10, 'color: #DC3912'],
        ['Graphic Designer ', 25, 'color: #FF9900'],
        ['Others ', 5, 'color: #990099']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        // title: "Statistics at a glance",
        // width: 700,
        // height: 400,
        bar: {
            groupWidth: "50%"
        },
        legend: {
            position: "none"
        },
        hAxis: {
            textStyle: {
                fontSize: 9.5
            }

        },
        chartArea: {
            left: 18,
            top: 30,
            right: 0,
            bottom: 50
        },
        backgroundColor: {
            'fill': '#f9f9f9',
            'opacity': 100
        }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}

// -----------------Students statistics ended-------------------