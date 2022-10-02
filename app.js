const form=document.getElementById('expressForm');
form.addEventListener('submit',data);
function data(e)
{
    e.preventDefault();
    const descrption=document.getElementById('descrptionId').value;
    const type=document.getElementById('type').value;
   const amount=document.getElementById('amount').value;
   const object={
    descrption,
    amount,
    type
   }
   localStorage.setItem(object.descrption,JSON.stringify(object))
   showList(object); //show the detail in screen
}
function showList(user)
{
const parentNode=document.getElementById('ListOfUser');
const childHTML=`<li id=${user.descrption}> ${user.descrption}  ${user.type}  ${user.amount}
<button onclick=deleteUser('${user.descrption}')>Delete User</button>
</li>`
parentNode.innerHTML=parentNode.innerHTML + childHTML;
}
//delete onscreen and localstorage


function deleteUser(descrptionId){
    console.log(descrptionId);
    localStorage.removeItem(descrptionId);
      remove(descrptionId);
}
// remove on screen
function remove(descrptionId){
    const parentNode = document.getElementById('listOfUsers');
    const childNode = document.getElementById(descrptionId);
console.log(childNode);
parentNode.removeChild(childNode)
}