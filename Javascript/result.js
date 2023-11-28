function search() {
    let a = document.getElementById("search").value;
    let b = document.getElementById("none1");
    let c = document.getElementById("none2");
    let d = document.getElementById("none3");
    let e = document.getElementById("footer");
    if (a == '') {
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.marginTop = "277px";
    }
    else if (a == 513) {
        display();
        rollno513();
    }
    else if (a == 514) {
        display();
        rollno514();
    }
    else if (a == 520) {
        display();
        rollno520();
    }
    else if (a == 525) {
        display();
        rollno525();
    }
    else if (a == 531) {
        display();
        rollno531();
    }
    else if (a == 547) {
        display();
        rollno547();
    }
    else if (a == 549) {
        display();
        rollno549();

    }
    else if (a == 558) {
        display();
        rollno558();
    }
    else if (a == 564) {

        rollno564();
    }
    else {
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
        e.style.marginTop = "197px";
        document.getElementById("message").innerHTML = "Error Message";
        document.getElementById("else").innerHTML = "The Given Data Is Not Available.";
    }
}
function display() {
    let b = document.getElementById("none1");
    let c = document.getElementById("none2");
    let d = document.getElementById("none3");
    let e = document.getElementById("footer");
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "block";
    e.style.display = "block";
    e.style.marginTop = "40px";
}
function rollno513() {
    document.getElementById("name").innerHTML = "Mirza Sufyan Ahmad";
    document.getElementById("fathername").innerHTML = "Mirza Maqbool Ahmad ";
    document.getElementById("rollno").innerHTML = "2022-CS-513";
    document.getElementById("section").innerHTML = "A";

    document.getElementById("tr2td4").innerHTML = "70";
    document.getElementById("tr2td5").innerHTML = "70%";

    document.getElementById("tr3td4").innerHTML = "75";
    document.getElementById("tr3td5").innerHTML = "75%";

    document.getElementById("tr4td4").innerHTML = "75";
    document.getElementById("tr4td5").innerHTML = "75%";

    document.getElementById("tr5td4").innerHTML = "72";
    document.getElementById("tr5td5").innerHTML = "72%";

    document.getElementById("tr6td4").innerHTML = "60";
    document.getElementById("tr6td5").innerHTML = "60%";

    document.getElementById("tr7td4").innerHTML = "90";
    document.getElementById("tr7td5").innerHTML = "90%";

    document.getElementById("tr8td4").innerHTML = "85";
    document.getElementById("tr8td5").innerHTML = "85%";

    document.getElementById("tr9td4").innerHTML = "78";
    document.getElementById("tr9td5").innerHTML = "78%";

    document.getElementById("tr10td4").innerHTML = "65";
    document.getElementById("tr10td5").innerHTML = "65%";
}
function rollno514() {
    document.getElementById("name").innerHTML = "Abdul Rehman";
    document.getElementById("fathername").innerHTML = "Zahid Nadeem";
    document.getElementById("rollno").innerHTML = "2022-CS-514";
    document.getElementById("section").innerHTML = "B";

}
function rollno520() {
    document.getElementById("name").innerHTML = "Syed Huzaifa Ali";
    document.getElementById("fathername").innerHTML = "Syed Imran Ali ";
    document.getElementById("rollno").innerHTML = "2022-CS-520";
    document.getElementById("section").innerHTML = "B";

    document.getElementById("tr2td4").innerHTML = "9.9";
    document.getElementById("tr2td5").innerHTML = "B+";

    document.getElementById("tr3td4").innerHTML = "3.3";
    document.getElementById("tr3td5").innerHTML = "B+";

    document.getElementById("tr4td4").innerHTML = "9.0";
    document.getElementById("tr4td5").innerHTML = "B";

    document.getElementById("tr5td4").innerHTML = "4.0";
    document.getElementById("tr5td5").innerHTML = "A";

    document.getElementById("tr6td4").innerHTML = "6.0";
    document.getElementById("tr6td5").innerHTML = "C";

    document.getElementById("tr7td4").innerHTML = "8.1";
    document.getElementById("tr7td5").innerHTML = "B-";

    document.getElementById("tr8td4").innerHTML = "4.6";
    document.getElementById("tr8td5").innerHTML = "C+";

    document.getElementById("tr9td4").innerHTML = "3.0";
    document.getElementById("tr9td5").innerHTML = "B";

    document.getElementById("tr10td4").innerHTML = "2.4";
    document.getElementById("tr10td5").innerHTML = "B+";
}
function rollno525() {
    document.getElementById("name").innerHTML = "Professor Abdullah";
    document.getElementById("fathername").innerHTML = "Muhammad Zahid ";
    document.getElementById("rollno").innerHTML = "2022-CS-525";
    document.getElementById("section").innerHTML = "A";
}
function rollno531() {
    document.getElementById("name").innerHTML = "Zoha Afzal";
    document.getElementById("fathername").innerHTML = "Muhammad Afzal";
    document.getElementById("rollno").innerHTML = "2022-CS-531";
    document.getElementById("section").innerHTML = "A";

    document.getElementById("tr2td4").innerHTML = "6.9";
    document.getElementById("tr2td5").innerHTML = "C+";

    document.getElementById("tr3td4").innerHTML = "2.0";
    document.getElementById("tr3td5").innerHTML = "C";

    document.getElementById("tr4td4").innerHTML = "8.1";
    document.getElementById("tr4td5").innerHTML = "B-";

    document.getElementById("tr5td4").innerHTML = "3.0";
    document.getElementById("tr5td5").innerHTML = "B";
}
function rollno547() {
    document.getElementById("name").innerHTML = "Muhammad Asim Shahzad";
    document.getElementById("fathername").innerHTML = "Muhammad Shahzad ";
    document.getElementById("rollno").innerHTML = "2022-CS-547";
    document.getElementById("section").innerHTML = "A";
}
function rollno549() {
    document.getElementById("name").innerHTML = "Abdulahad Hussain";
    document.getElementById("fathername").innerHTML = "Ghulam Hussain ";
    document.getElementById("rollno").innerHTML = "2022-CS-549";
    document.getElementById("section").innerHTML = "A";

    document.getElementById("tr2td4").innerHTML = "6.9";
    document.getElementById("tr2td5").innerHTML = "C+";

    document.getElementById("tr3td4").innerHTML = "2.7";
    document.getElementById("tr3td5").innerHTML = "B-";

    document.getElementById("tr4td4").innerHTML = "5.1";
    document.getElementById("tr4td5").innerHTML = "C-";

    document.getElementById("tr5td4").innerHTML = "4.0";
    document.getElementById("tr5td5").innerHTML = "A";

    document.getElementById("tr6td4").innerHTML = "8.1";
    document.getElementById("tr6td5").innerHTML = "B-";

    document.getElementById("tr7td4").innerHTML = "6.9";
    document.getElementById("tr7td5").innerHTML = "C+";

    document.getElementById("tr8td4").innerHTML = "2.6";
    document.getElementById("tr8td5").innerHTML = "D+";

    document.getElementById("tr9td4").innerHTML = "3.0";
    document.getElementById("tr9td5").innerHTML = "B";

    document.getElementById("tr10td4").innerHTML = "2.7";
    document.getElementById("tr10td5").innerHTML = "B-";
}
function rollno558() {
    document.getElementById("name").innerHTML = "Muhammad Ahmad";
    document.getElementById("fathername").innerHTML = "Muhammad Jamil ";
    document.getElementById("rollno").innerHTML = "2022-CS-558";
    document.getElementById("section").innerHTML = "B";

    document.getElementById("tr2td4").innerHTML = "6.9";
    document.getElementById("tr2td5").innerHTML = "C+";

    document.getElementById("tr3td4").innerHTML = "1.7";
    document.getElementById("tr3td5").innerHTML = "C-";

    document.getElementById("tr4td4").innerHTML = "9.0";
    document.getElementById("tr4td5").innerHTML = "B";

    document.getElementById("tr5td4").innerHTML = "3.3";
    document.getElementById("tr5td5").innerHTML = "B+";

    document.getElementById("tr6td4").innerHTML = "5.1";
    document.getElementById("tr6td5").innerHTML = "C-";

    document.getElementById("tr7td4").innerHTML = "9.9";
    document.getElementById("tr7td5").innerHTML = "B+";

    document.getElementById("tr8td4").innerHTML = "5.4";
    document.getElementById("tr8td5").innerHTML = "B-";

    document.getElementById("tr9td4").innerHTML = "3.0";
    document.getElementById("tr9td5").innerHTML = "B";

    document.getElementById("tr10td4").innerHTML = "3.7";
    document.getElementById("tr10td5").innerHTML = "A-";
}
function rollno564() {
    document.getElementById("name").innerHTML = "Noman";
    document.getElementById("fathername").innerHTML = " ";
    document.getElementById("rollno").innerHTML = "2022-CS-564";
    document.getElementById("section").innerHTML = "B";
}