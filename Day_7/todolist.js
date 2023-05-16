function addNewElement(p1){
let parentTag = p1.parentElement.children.children.nextElement;
let exsitingValue = parentTag.innerHTML;

let newValue = document.querySelector("#parent").value;
let message = ` <div id="parent">
<div
  style="
    font-size: 28px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  "
>
  <div>${message}</div>
  <input type="button" value="Delete" onclick="deleteTheMessage(this)" />
</div>`;

parentTag.innerHTML = newValue + exsitingValue;

}
