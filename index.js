//FIRST QUESTION
let isprime = document.getElementById("isprime");
let array1 = [];
let arraytoprime = document.getElementById("arraytoprime");
function primeornot() {
    array1 = arraytoprime.value.split` `;
    let num = Number(array1[0]);
    //var firstItem = array1.find(x=>x!==undefined);
    if (isPrime(num) == true) {
        isprime.innerHTML = "The First Element of the array, " + array1[0] + " is Prime";
    }
    else {
        isprime.innerHTML = "The First Element of the array, " + array1[0] + " is Not a Prime";
    }
}
function isPrime(num) {
    // console.log(num);
    if (num === 1) { return false; }
    if (num === 2) { return true; }
    else if (num > 2) {
        for (var i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}
//SECOND QUESTION
let arraytofreqitem = document.getElementById("arraytofreqitem");
let frequentitemdisplay = document.getElementById("frequentitemdisplay");
function frequentitem() {
    let array2 = arraytofreqitem.value.split` `;
    console.log(array2);
    let mostfrequent = 1;
    let repeatnum = 0;
    let frequentitem = [];
    console.log("freq" + frequentitem);

    for (let i = 0; i < array2.length; i++) {
        for (let j = i; j < array2.length; j++) {
            if (array2[i] == array2[j]) repeatnum++;
        }
        if (mostfrequent < repeatnum) {
            mostfrequent = repeatnum;
            frequentitem = [];
            frequentitem.push(array2[i]);
        }
        else if (mostfrequent == repeatnum) {
            frequentitem.push(array2[i]);
        }
        repeatnum = 0;
    }
    let opfreq = "Most frequent item(s): <strong>" + frequentitem + "</strong>. Which repeat <strong>" + mostfrequent + "</strong> times";
    frequentitemdisplay.innerHTML = opfreq;

    // //method2
    // let counts = array2.reduce((a, c) => {
    //     a[c] = (a[c] || 0) + 1;
    //     return a;
    //   }, {});
    //   let maxCount = Math.max(...Object.values(counts));
    //   let mostFrequent = Object.keys(counts).filter(k => counts[k] === maxCount);  
    //   console.log(mostFrequent);
}

//THIRD QUESTION

let stringtoswap = document.getElementById("stringtoswap");
let swapstringdisplay = document.getElementById("swapstringdisplay");
function swapstring() {
    let string = stringtoswap.value;
    // //Method1
    // var ans = string.split('').map(function(c){
    //     return c === c.toUpperCase()? c.toLowerCase(): c.toUpperCase()}).join('');
    //   console.log(ans);
    // Method2      
    let newstring = "";
    for (i = 0; i < string.length; i++) {
        newstring += (string[i] === string[i].toLowerCase()) ? string[i].toUpperCase() : string[i].toLowerCase();
    }
    swapstringdisplay.innerHTML = "The swapped string is <strong>" + newstring + "</strong>";
    // console.log(newstring);
    //Method3
    // var ans = string.replace(/\w{1}/g, function(val){
    //     return val === val.toLowerCase() ? val.toUpperCase() : val.toLowerCase();
    // });
    // console.log(ans);
}
//FOURTH QUESTION
let arraytosqare = document.getElementById("arraytosqare");
let sumofsqaresdisplay = document.getElementById("sumofsqaresdisplay");
function sumofsqares() {
    let arrsqr, opsum;
    arrsqr = arraytosqare.value.split` `;
    opsum = 0;
    for (var i = 0; i < arrsqr.length; i++) {
        opsum += (arrsqr[i] * arrsqr[i]);
    }
    sumofsqaresdisplay.innerHTML = "The sum of squares of array elemets is: <strong>" + opsum + "</strong";
    // let arrayvalue = arraytosqare.value;
    // let result = Math.hypot(...arrayvalue.split` `) ** 2;
    // //...arrayvalue.split`,` accept input and split to array using , as delimiter. 
    // // Then to math.hypot function which return squareroot of sum of sqares of its arguments.    
    // sumofsqaresdisplay.innerHTML = parseInt(result);    
}
//FIFTH QUESTION
let oddorevendisplay = document.getElementById("oddorevendisplay");
function oddoreven() {
    oddorevendisplay.innerHTML = "<br>Zero may come under both odd an even as some people argue but more preferably even.<br><ul>"
    for (i = 0; i <= 15; i++) {
        let ans = (i % 2 == 0) ? "Even" : "Odd";
        oddorevendisplay.innerHTML += "<li>" + i + " is " + ans + "</li>";
    }
    oddorevendisplay.innerHTML += "</ul>";
}
//SIXTH QUESTION
let stringtotruncate = document.getElementById("stringtotruncate");
let truncatenumber = document.getElementById("truncatenumber");
let truncatestringdisplay = document.getElementById("truncatestringdisplay");
function truncatestring() {
    let stringtrunc = stringtotruncate.value;
    let numtrunc = truncatenumber.value;
    truncatestringdisplay.innerHTML = "The truncated string is: <strong>" + stringtrunc.substring(0, numtrunc) + "</strong>";
}
//SEVENTH QUESTION
let firstnumber = document.getElementById("firstnumber");
let secondnumber = document.getElementById("secondnumber");
let largernumberdisplay = document.getElementById("largernumberdisplay");
function findLarge() {
    let fnum = Number(firstnumber.value);
    let snum = Number(secondnumber.value);
    //console.log(fnum,snum);
    let oplarge = "";
    if (fnum == snum) { oplarge += "Both Numbers are same"; }
    else {
        //console.log(fnum,snum,fnum<snum);
        let op = (fnum > snum) ? fnum : snum;
        oplarge += "The larger number is: <strong>" + op + "</strong";
    }
    largernumberdisplay.innerHTML = oplarge;
}
//EIGHTH QUESTION
let arraytosort = document.getElementById("arraytosort");
let sortarraydisplay = document.getElementById("sortarraydisplay");
function sortarray() {
    let arrsort = arraytosort.value.split` `;
    let newarr = arrsort;
    newarr.sort();
    let opsort = "Sorted Array is: ";
    for (let x in newarr) {
        opsort += newarr[x] + ",";
    }
    sortarraydisplay.innerHTML = opsort;
    //
}
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let classid = document.getElementById("classid");
let school = document.getElementById("school");
let sortproperty = document.querySelectorAll("#sortproperty");
let arrobjdisplay = document.querySelectorAll(".arrobjdisplay");
let sortarrobjdisplay = document.querySelectorAll(".sortarrobjdisplay");
let tbinput = document.getElementById("tbinput");
let tbsorted = document.getElementById("tbsorted");
let thfname = document.getElementById("thfname");
let thlname = document.getElementById("thlname");
let thclassid = document.getElementById("thclassid");
let thschool = document.getElementById("thschool");


let objarr = [];
let sortdirection = true;
function addobj() {
    let obj = {};
    obj.fname = fname.value;
    obj.lname = lname.value;
    obj.classid = Number(classid.value);
    obj.school = school.value;
    objarr.push(obj);
    console.log(objarr);
    arrobjdisplay[0].style.display = "block";
    arrobjdisplay[1].style.display = "block";
    tbinput.innerHTML = loaddata(objarr);
}
// objarr = [
//     { classid: 5, fname: "Asd", lname: "asd", school: "gfg" },
//     { classid: 8, fname: "Fsd", lname: "ere", school: "tyt" },
//     { classid: 8, fname: "Fsd", lname: "ere", school: "tyt" },
//     { classid: 9, fname: "Esd", lname: "sas", school: "dss" }
// ];
// tbinput.innerHTML = loaddata(objarr);
// thfname.addEventListener("onclick", sortarrobj());

function loaddata(objarr1) {

    let tabledata = "";
    // console.log(objarr1);
    for (var d of objarr1) {
        tabledata += `<tr><td>${d.fname}</td><td>${d.lname}</td><td>${d.classid}</td><td>${d.school}</td></tr>`;
    }
    return tabledata;
}
function sortarrobj() {
    sortobjarr = objarr;
    let sortitem = sortproperty.value;
    // console.log(sortitem);
    // console.log(typeof (sortobjarr[0].classid));
    switch (sortitem) {
        case "classid":
            sortobjarr.sort((a, b) => {
                return sortdirection ? a[sortitem] - b[sortitem] : b[sortitem] - a[sortitem];
            });
            break;
        case "fname":
        case "lname":
        case "school":
            sortobjarr.sort(function (a, b) {
                var textA = a[sortitem].toUpperCase();
                var textB = b[sortitem].toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            break;
    }
    sortarrobjdisplay[0].style.display = "block";
    sortarrobjdisplay[1].style.display = "block";
    tbsorted.innerHTML = loaddata(sortobjarr);
    //sortobjarr=sortobjarr.sort(dynamicSort(sortitem));
}
// function dynamicSort(property) {
// var sortOrder = 1;
// if(property[0] === "-") {
//     sortOrder = -1;
//     property = property.substr(1);
// }
// return function (a,b) {
/* next line works with strings and numbers, 
 * and you may want to customize it to your needs
 */
// var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
// console.log(result);
// return result;
// return result * sortOrder;
// }

// }

//NINTH QUESTION
let javascriptdisplay = document.getElementById("javascriptdisplay");
function javaarrange() {
    let strj = "Javascript";
    let opjava = "";
    let i = 0;
    for (i = 0; i < 11; i++) {
        opjava += strj.substring(0, i) + "<br>";
    }
    // let arrstr = strj.split(""); 
    // console.log(arrstr)  ;
    // 
    // for (let[ind,val] of arrstr){
    //     let countj = ind;
    //     for(var i=0;i<countj;i++){
    //         opjava+=arrstr[i];
    //         // opjava+=strj.substring(0,ind)+"<br>";
    //     }
    //     opjava+="<br>";
    //     // arrstr.findIndex(elas);
    // }
    javascriptdisplay.innerHTML = opjava;

}
//TENTH QUESTION
let stardisplay = document.getElementById("stardisplay");
function stararrange() {
    let opstar = "<br>";
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= i; j++) {
            opstar += "*  ";
        }
        opstar += "<br>";
    }
    stardisplay.innerHTML = opstar;
}