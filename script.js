// add New Elements
function addNewWEExperince() {
    //create New Elements
    let newElement = document.createElement("textarea");

    //add boostrap class
    newElement.classList.add("form-control");

    // add New Atribute
    newElement.setAttribute("placeholder", "Enter here");
    newElement.setAttribute("id", "remove")

    // add css style
    newElement.style.marginTop = "10px";

    // when you want to apend the new element
    let workExperince = document.getElementById("workExperince");

    // apent the new element
    workExperince.appendChild(newElement);
}

// remove elements

function removeElement() {
    let workExperince = document.getElementById("workExperince");
    workExperince.removeChild(document.getElementById("remove"));
}

//Create new Element for qualification
function addNewQualication() {
    //create New Elements
    let addNewQualication1 = document.createElement("textarea");

    //add boostrap class
    addNewQualication1.classList.add("form-control");

    // when you want to apend the new element
    let Academicqualification = document.getElementById("Academicqualification");

    // add New Atribute
    addNewQualication1.setAttribute("placeholder", "Enter here");
    addNewQualication1.setAttribute("id", "removequalification")

    // add css style
    addNewQualication1.style.marginTop = "10px";

    // apent the new element
    Academicqualification.appendChild(addNewQualication1);

    // main.InsertBefor("kunala" "Kote");

}

function removeExperince()
{
    let Academicqualification = document.getElementById("Academicqualification");
    Academicqualification.removeChild(document.getElementById("removequalification"));
}