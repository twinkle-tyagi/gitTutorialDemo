const button = document.getElementById('button');

function addIt(event)
{
    event.preventDefault();
    let amo = document.getElementById('amount').value;
    let des = document.getElementById('description').value;
    let cat = document.getElementById('category').value;

    let obj = {
        amo,
        des,
        cat
    }

    localStorage.setItem(obj.des, JSON.stringify(obj));
    showObj(obj);
}

function showObj(obj)
{
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';

    if(localStorage.getItem(obj.des) !== null)
    {
        removeObj(obj.des);
    }

    const parentNode = document.getElementById('userlist');
    const childNode = `<li id = ${obj.des}> Amount = ${obj.amo} Description = ${obj.des} Category = ${obj.cat} <button onclick = deleteObj('${obj.des}')> delete </button> <button onclick = editObj('${obj.des}')> Edit </button> </li>`
    parentNode.innerHTML = parentNode.innerHTML + childNode;

}

function deleteObj(des) 
{
    console.log(des);
    localStorage.removeItem(des); // remove from storage
    removeObj(des); // remove from li
}

function removeObj(des)
{
    const pare = document.getElementById('userlist'); // get parent
    const child = document.getElementById(des); // child
    
    if(child)
    {
        pare.removeChild(child); // remove child list from parent
    }
}

function editObj(des)
{
    const nodee = JSON.parse(localStorage.getItem(des));

    document.getElementById('amount').value = nodee.amo;
    document.getElementById('description').value = nodee.des;
    document.getElementById('category').value = nodee.cat;

    deleteObj(des);
}

window.addEventListener('DOMContentLoaded', () => {
    Object.keys(localStorage).forEach((key) => {
        detail = localStorage.getItem(key);
        stringdetail = JSON.parse(detail);
        showObj(stringdetail);
    });
});