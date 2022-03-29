function createEle (element,values,id) {
 var ele = document.createElement(element)
 ele.setAttribute("type", values);
 ele.setAttribute("id", id);
 return ele;
}
function createLab(name){
    var elementLabel = document.createElement("label");
    elementLabel.innerHTML=name;
    return elementLabel; 
}

var fn = createEle("input","text","fn");
var fnlabel = createLab("Enter Firstname");

var ln = createEle("input","text","ln");
var lnlabel = createLab("Enter Lastname");

var em = createEle("input","email","em");
var emlabel = createLab("Enter Email");

var psd = createEle("input","password","psd");
var psdlabel = createLab("Enter Password");

document.body.append(fnlabel,fn,lnlabel,ln,emlabel,em,psdlabel,psd);

var button = document.createElement("button");
button.setAttribute("type","button");
button.className="btn btn-primary";
button.innerHTML="Submit";
button.addEventListener("click", foo);

document.body.append(button);

function foo () {
    let fn = document.getElementById("fn").value;

    let mn = document.getElementById("ln").value;

    let ln = document.getElementById("em").value;

    let pswd = document.getElementById("psd").value;
    
    console.log(fn,mn,ln,pswd);
}