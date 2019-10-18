var parseLateSwitch = value => {
    if(value){
        return "tarde";
    }
    return "A tiempo";
}

function addStudent(carnet, schedule, late, tbody) {
    let rewNow = document.createElement("tr");
    let date = new Date();

    rewNow.innerHTML = `<td><b>${carnet}</b></td>
    <td><b>${schedule}</b></td>
    <td><b>${date.toLocaleString()}</b></td>
    <td><b>${late}</b></td>`;
    let cellcontainer = document.createElement("td");
    let newBtn = document.createElement("button");
    newBtn.classList.add("btn");
    newBtn.classList.add("btn-danger");
    newBtn.innerText ="Drop";
    newBtn.value = idCounter;

    cellcontainer.appendChild(newBtn);
    newRow.appendChild(cellcontainer);

    newBt.addEventListener("click", event => {
        let idElement = event.srcElement.value;

        let elementNode = document.querySelector(`tr>td>button[value = '{$idElement}']`).parentElement.parentElement;
         tbody.removeChild(ElementNode);
    })


    tbody.appendChild(rewNow);
}

window.onload = () =>{
    let submit_btn = document.querySelector("#submit_btn");
    let carnet_field = document.querySelector("#carnet_field");
    let schedulefield_field = document.querySelector("#schedule_field");
    let late_switch = document.querySelector("#late_switch");
    let tbody = document.querySelector("#table_body");

    var carnetRegex = new RegExp("^[0-9]{8}$");

    submit_btn.addEventListener("click", function(){
        let carnet = carnet_field.value;
        let schedule = schedulefield_field.options[schedulefield_field.selectedIndex].text;
        let late = parseLateSwitch(late_switch.checked);
        if(carnetRegex.test(carnet)){
            addStudent(carnet, schedule, late, tbody);
        }
    });
    carnet_field.addEventListener("keyup", function(){
        let carnet = carnet_field.value;
        if(carnetRegex.test(carnet)){
            submit_btn.disabled = false;
        }else{
            submit_btn.disabled = true;
        }
    });
}