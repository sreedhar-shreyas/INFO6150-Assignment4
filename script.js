

window.onload = () => {
    const form = document.getElementById('form');
    const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExEmail = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(northeastern)\.edu$/;
    const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    const regExAptNo = /^\d+$/;


    const display = (elementName, isInValid) => {
        if (isInValid) {
            // You cant access non form element like below error field using name
            // Hence use the rudimentary way - getElementById or other
            document.getElementById(`error_${elementName}`).style.display = "block";
            document.myForm[elementName].style.border = "2px solid red";
        } else {
            document.getElementById(`error_${elementName}`).style.display = "none";
            document.myForm[elementName].style.border = "";
        }
    }

    let isSalInvalid = true, isNameInValid = true, isEmailInValid = true, isPhoneNumberInValid = true; isAddressInValid = true; isAddress2InValid = true; isAptnoInValid = true; isZipCodeInValid = true; isFeedbackClassInValid = true; isRefInValid = true; iscommentsInValid = true; 
    const validate = event => {
        console.log('input');
        const { id, value, name, } = event.target;

        switch (id) {
            case "title":
                if(!value){
                display(name, true);
                isSalInvalid = true
            } else {
                display(name, false);
                isSalInvalid = false;
            }
            case "fname":
                if (!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isNameInValid = true;
                } else {
                    display(name, false);
                    isNameInValid = false;
                }
                break;
            case "lname":
                if (!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isNameInValid = true;
                } else {
                    display(name, false);
                    isNameInValid = false;
                }
                break;
            case "email":
                if (!value.trim().toLowerCase().match(regExEmail)) {
                    display(name, true);
                    isEmailInValid = true;
                } else {
                    display(name, false);
                    isEmailInValid = false;
                }
                break;
            case "phoneNumber":
                if (!value.trim().match(regExPhone)) {
                    display(name, true);
                    isPhoneNumberInValid = true;
                } else {
                    display(name, false);
                    isPhoneNumberInValid = false;
                }
                break;
            case "streetAddrs1":
                if (!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isAddressInValid = true;
                } else {
                    display(name, false);
                    isAddressInValid = false;
                }
                break;
            case "streetAddrs2":
                if (!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isAddress2InValid = true;
                } else {
                    display(name, false);
                    isAddress2InValid = false;
                }
                break;
            case "aptNum":
                if (!value.trim().match(regExAptNo)) {
                    display(name, true);
                    isAptnoInValid = true;
                } else {
                    display(name, false);
                    isAptnoInValid = false;
                }
                break;
            case "zipcode":
                if (!value.trim().match(regExAptNo)) {
                    display(name, true);
                    isZipCodeInValid = true;
                } else {
                    display(name, false);
                    isZipCodeInValid = false;
                }
                break;
            case "classFeedback":
                console.log("hahaah");
                var e = document.getElementById("classFeedback");
                var strUser = e.options[e.selectedIndex].value;

                var strUser1 = e.options[e.selectedIndex].text;
                if (!strUser) {
                    display(name, true);
                    isFeedbackClassInValid = true;

                }
                else {
                    display(name, false);
                    isFeedbackClassInValid = false;

                    if (strUser1 == "INFO 5100") {
                        alert("INFO 5100 SELECTED")
                        callinfo();


                    }
                    if (strUser1 == "INF0 6150") {
                        alert("INFO 6150 SELECTED");
                        callinfo();
                    }
                    if (strUser1 == "INFO 7210") {
                        alert("info 7210 SELECTED");
                        callinfo();
                    }
                    if (strUser1 == "INFO 9999") {
                        alert("INFO 9999 SELECTED");
                        callinfo();
                    }
                    if (strUser1 == "ENCP 6666") {
                        alert("ENCP 6666 SELECTED");
                        callinfo();
                    }

                }
                break;
                case "source":
                    if (!value) {
                        display(name, true);
                        isRefInValid = true;
                    } else {
                        display(name, false);
                        isRefInValid = false;
                    }
                    break;
                    case "comments":
                        if (!value.trim().toLowerCase().match(regExName)) {
                            display(name, true);
                            iscommentsInValid = true;
                        } else {
                            display(name, false);
                            iscommentsInValid = false;
                        }
                        break;

        }


    }
    console.log(document.getElementById("checkprof1"));
    function callinfo() {

        alert("info 5100 inside brooo");
        var txtdisplay = document.getElementById("classes");
        
        txtdisplay.style.display = "block";

        var checkbox = document.querySelectorAll(":checked");
        var checkboxval = checkbox.length;
        alert("The no of checkbox clicked " + checkboxval);
        if (checkboxval>1) {
        onPresscheckbox();
    }
    else {
        alert("No checkbox checked");
    }
    }



    //     var checkbox = document.querySelectorAll(":checked");

    //     if (checkbox.checked == true) {

    //     alert("info 5100 inside checkbox");
    //     var chxdisplay = document.getElementById("thetextfield");
    //     chxdisplay.style.display = "block";
    // }



    // write a function submitted
    function submitted(e) {
        console.log('submit');
        // To avoid page refresh
        e.preventDefault();
        // && !isEmailInValid && !isPhoneNumberInValid
        if (!isNameInValid) {
            alert("Data entered successfully");
            createTable();
            document.getElementById("myForm").reset();
        }
        else {
            alert("Please enter valid details")
        }
    
    }
    function resetted(e){
        document.getElementById("myForm").reset();
    }
    // Event Delegation
    // https://javascript.info/event-delegation
    document.myForm.addEventListener('input', validate);
    document.myForm.addEventListener('submit', submitted);
    document.myForm.addEventListener('reset', resetted);
    



function createTable() {
    alert("tablebro");
//  var fname = document.getElementById("fname").value;
// var table = `<tr>
// <td> ${fname}</td> 
// </tr>`;
// document.getElementById("tbl").innerHTML += table;

var trx = document.getElementById("checkprof1").value;
var sar = document.querySelector('input[name="title"]:checked').value;
var sources = document.querySelector('input[name="source"]:checked').value;
var tblfname = document.getElementById("fname").value;
var tbllname = document.getElementById("lname").value;
var tblfullname = tblfname + " " + tbllname;
var list1 = [];
var list2 = []
var list3= [];
var list4 = [];
var list4 = []; var list5 = []; 
var list6 = [];
var list7 = [];
var list8 = [];  
var list9 = [];
var list10 = [];
var list11 = [];
var list12 = [];
var list13 = [];

		var n = 1;
		var x = 0;
        const elemsbro = ["fname", "lname", "email", "phoneNumber", "streetAddrs1", "streetAddrs2", "aptNum", "zipcode", "classFeedback",]

			var AddRown = document.getElementById('tbss');
			var NewRow = AddRown.insertRow(n);

			list1[x] = sar
			list2[x] = tblfullname;
			list3[x] = document.getElementById("email").value;
			list4[x] = document.getElementById("phoneNumber").value;
            list5[x] = document.getElementById("streetAddrs1").value;
            list6[x] = document.getElementById("streetAddrs2").value;
            list7[x] = document.getElementById("aptNum").value;
            list8[x] = document.getElementById("zipcode").value;
            list9[x] = document.getElementById("classFeedback").value;
            list10[x] = document.getElementById("proftext").value;
            list11[x] = trx;
           list13[x] = sources;
            list12[x] = document.getElementById("comments").value;
            




			var cel0 = NewRow.insertCell(0);
			var cel1 = NewRow.insertCell(1);
			var cel2 = NewRow.insertCell(2);
			var cel3 = NewRow.insertCell(3);
            var cel4 = NewRow.insertCell(4);
            var cel5 = NewRow.insertCell(5);
			var cel6 = NewRow.insertCell(6);
			var cel7 = NewRow.insertCell(7);
			var cel8 = NewRow.insertCell(8);
            var cel9 = NewRow.insertCell(9);
            var cel10 = NewRow.insertCell(10);
            var cel11 = NewRow.insertCell(11);
            var cel12 = NewRow.insertCell(12);



            

			cel0.innerHTML = list1[x];
			cel1.innerHTML = list2[x];
			cel2.innerHTML = list3[x];
			cel3.innerHTML = list4[x];
            cel4.innerHTML = list5[x];
			cel5.innerHTML = list6[x];
			cel6.innerHTML = list7[x];
			cel7.innerHTML = list8[x];
            cel8.innerHTML = list9[x];
			cel9.innerHTML = list11[x];
			cel10.innerHTML = list10[x];
			cel11.innerHTML = list12[x];
            cel12.innerHTML = list13[x];

    

            

			n++;
			x++;
		
    // const newtable = document.getElementById('container');
    // const tbl = document.createElement("table");
    // const tblBody = document.createElement("tbody");

    // // creating all cells
    // for (let i = 0; i < 2; i++) {
    //     // creates a table row
    //     const row = document.createElement("tr");

    //     for (let j = 0; j < 2; j++) {
    //         // Create a <td> element and a text node, make the text
    //         // node the contents of the <td>, and put the <td> at
    //         // the end of the table row
    //         const cell = document.createElement("td");
    //         const cellText = document.createTextNode(`cell in row ${elementName}, column ${j}`);
    //         cell.appendChild(cellText);
    //         row.appendChild(cell);
    //     }

    //     // add the row to the end of the table body
    //     tblBody.appendChild(row);
    // }

    // // put the <tbody> in the <table>
    // tbl.appendChild(tblBody);
    // // appends <table> into <body>
    // newtable.appendChild(tbl);
    // // sets the border attribute of tbl to '2'
    // tbl.setAttribute("border", "2");


}
}

function onPresscheckbox(){
    alert("insite checkbox")
   element = document.getElementById("checkprof1");
    var text = document.getElementById("thetextfield");
     if (element.checked == true){
text.style.display = "block";
} else {
text.style.display = "none";
}
}
