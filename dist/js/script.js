document.getElementById('w-item1').addEventListener('click', 
function(){
    document.querySelector('#modal-item-1').style.display = 'flex';
})

document.getElementById('w-item2').addEventListener('click', 
function(){
    document.querySelector('#modal-item-2').style.display = 'flex';
})

document.getElementById('w-item3').addEventListener('click', 
function(){
    document.querySelector('#modal-item-3').style.display = 'flex';
})

document.getElementById('w-item4').addEventListener('click', 
function(){
    document.querySelector('#modal-item-4').style.display = 'flex';
})

document.querySelector('.exit').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'none';
})