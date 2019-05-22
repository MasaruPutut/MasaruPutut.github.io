// variable

const workItem1 = document.getElementById('w-item1');
const workItem2 = document.getElementById('w-item2');
const workItem3 = document.getElementById('w-item3');
const workItem4 = document.getElementById('w-item4');

const modalItem1 = document.getElementById('modal-item-1');
const modalItem2 = document.getElementById('modal-item-2');
const modalItem3 = document.getElementById('modal-item-3');
const modalItem4 = document.getElementById('modal-item-4');

const modal = document.querySelector('.modal');
const bgModal = document.querySelector('.bg-modal');


function popUp(modal, item){
    modal.style.display = 'flex';
    modalItem1.style.display = 'flex';
}
// modal pop up
workItem1.addEventListener('click', 
function(){
    modal.style.display = 'flex';
    modalItem1.style.display = 'flex';
});

workItem2.addEventListener('click', 
function(){
    modal.style.display = 'flex';
    modalItem2.style.display = 'flex';
});

workItem3.addEventListener('click', 
function(){
    modal.style.display = 'flex';
    modalItem3.style.display = 'flex';
});

workItem4.addEventListener('click', 
function(){
    modal.style.display = 'flex';
    modalItem4.style.display = 'flex';
});

document.querySelector('.exit').addEventListener('click',
function(){
    modal.style.display = 'none';
    modalItem1.style.display = 'none';
    modalItem2.style.display = 'none';
    modalItem3.style.display = 'none';
    modalItem4.style.display = 'none';
});

