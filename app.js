const field = document.querySelector('#field')
const field1 = document.querySelector('#field1')
const field2 = document.querySelector('#field2')
const lastWrapper = document.querySelector('#lastwrapper')
const button = document.getElementById('button')
const wrapper = document.querySelector('#todo-wrapper')

function createItem(value){
return `
          <div class="item">
                    <div class="left">
                         name :
                         <p>${value}</p>
                    </div>
               </div>
     `;
}
function createItem1(value){
     return `
               <div class="item">
                         <div class="left">
                              surname :
                              <p>${value}</p>
                         </div>
                    </div>
          `;
}
function createItem2(value){
          return `
                    <div class="item">
                              <div class="left">
                                   age :
                                   <p>${value}</p>
                              </div>
                         </div>
               `;
}

function validate(){
    const todo = field.value ;
if(todo.length < 3){
alert("eng kamida 6 ta belgidan iborat bo'lishi shart")
field.focus();
field.style.outlineColor = 'red';
return false ;
}
return true ;
}

button && button.addEventListener('click',function(event){
event.preventDefault();
const todo = field.value.toUpperCase() ;
const todo1 = field1.value.toUpperCase() ;
const todo2 = field2.value ;
const isValid = validate();
if(!isValid){
return;
}
const item = createItem(todo);
const item1 = createItem1(todo1);
const item2 = createItem2(todo2);
wrapper.innerHTML += item;
wrapper.innerHTML += item1;
wrapper.innerHTML += item2
field.value = '';
field1.value = '';
field2.value = '';
field.focus();
})


const local = document.querySelector('#local')
local && local.addEventListener('click',function(event){
     event.preventDefault();
let name = field.value ;
let surname = field1.value ;
let age = field2.value ;
localStorage.setItem('name',name)
localStorage.setItem('surname',surname)
localStorage.setItem('age',age)
})