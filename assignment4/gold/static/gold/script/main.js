var data, value, time, unit;
function goldApi(){
    var p, current_date, url, dates;
    p = document.getElementById("result");
    current_date = new Date();
    current_date = current_date.getFullYear() + "-" + current_date.getMonth() + "-" + current_date.getDate();
    url = `https://www.quandl.com/api/v3/datasets/LBMA/GOLD?start_date=${current_date}&end_date=${current_date}&api_key=GVCsU5Xe_eu_zLUxUwML`;
    p1 = fetch(url);
    p2 = p1.then((response) => {return response.json();});
    p3 = p2.then((json) => {data = json;value = data.dataset.data[0][1]; unitconvApi();
    time = data.dataset.data[0][0]; p.innerText = "The Price Of Gold As Of " + time + " is $" + value + " Per Troy Oz.";});
    if (value === undefined){
        p.innerText = "Loading Data"
    }
}

function unitconvApi(){
    var from = document.getElementById("select").value;
    var weight = document.getElementById("weight").value;
    var url = `http://127.0.0.1:8000/unitconv/convert?from=${from}&to=t_oz&value=${weight}`;
    p1 = fetch(url);
    p2 = p1.then((response) => {return response.json();});
    p3 = p2.then((json) => {data=json;createDiv();});
}

function createDiv(){
    var div, p, mainDiv;
    if (data.error === "Invalid unit conversion request"){
        div = document.createElement("div");
        p = document.createElement("p");
        p.innerText = "Error! That is not valid input!";
        div.appendChild(p);
        div.setAttribute("onclick", "this.remove()");
        div.setAttribute("style", "cursor: pointer;");
        mainDiv = document.getElementById("mainDiv");
        mainDiv.insertAdjacentElement("afterend", div);
        return 1
    }
    div = document.createElement("div");
    p = document.createElement("p");
    var date = new Date();
    p.innerText = "At " + date.toString() + " " + document.getElementById("select").value + "(s) Of Gold Is Worth $" + (data.value*value);
    div.appendChild(p);
    div.setAttribute("onclick", "this.remove()");
    div.setAttribute("style", "cursor: pointer;");
    mainDiv = document.getElementById("mainDiv");
    mainDiv.insertAdjacentElement("afterend", div);
    return 0
}