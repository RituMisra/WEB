/**
 * get div tag 
 * get existing value 
 * add new value 
 * set div tag 
 */
function addNewMessage(p1) {
    let parentTag = document.querySelector("#divid1");
    let existingValue = parentTag.innerHTML;

    let msgTag = document.querySelector("#messid");
    let message = msgTag.value;

    let position = p1 ? "end" : "start";
    let newValue = `<h1 style= "display: flex; justify-content: ${position}"> ${message} </h1>`;
    parentTag.innerHTML = newValue + existingValue;

    //clear the input 
    msgTag.value = "";
}