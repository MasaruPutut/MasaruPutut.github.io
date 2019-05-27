// This is code for modal pop up
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

// exit pop-up
document.querySelector('.exit').addEventListener('click',
function(){
    modal.style.display = 'none';
    modalItem1.style.display = 'none';
    modalItem2.style.display = 'none';
    modalItem3.style.display = 'none';
    modalItem4.style.display = 'none';
});


// Skill Description

const html = document.getElementById('s1-item-1');
const css = document.getElementById('s1-item-2');
const js = document.getElementById('s1-item-3');
const python = document.getElementById('s1-item-4');
const ps = document.getElementById('s1-item-5');
const is = document.getElementById('s1-item-6');
const c = document.getElementById('s2-item-1');
const arduino = document.getElementById('s2-item-2');
const lts = document.getElementById('s2-item-3');
const kicad = document.getElementById('s2-item-4');
const vhdl = document.getElementById('s2-item-5');
const matlab = document.getElementById('s2-item-6');

const htmlDes = document.getElementById('html-des');
const cssDes = document.getElementById('css-des');
const jsDes = document.getElementById('js-des');
const pythonDes = document.getElementById('python-des');
const psDes = document.getElementById('ps-des');
const isDes = document.getElementById('is-des');
const cDes = document.getElementById('c-des');
const arduinoDes = document.getElementById('arduino-des');
const ltsDes = document.getElementById('lts-des');
const kicadDes = document.getElementById('kicad-des');
const vhdlDes = document.getElementById('vhdl-des');
const matlabDes = document.getElementById('matlab-des');
// const defaultText = document.querySelector('#default')

//show HTML description
html.addEventListener('mouseenter', function(){ htmlDes.style.display = 'block';})
html.addEventListener('mouseleave', function(){ htmlDes.style.display = 'none';})

//show CSS description
css.addEventListener('mouseenter', function(){ cssDes.style.display = 'block';})
css.addEventListener('mouseleave', function(){ cssDes.style.display = 'none';})

js.addEventListener('mouseenter', function(){ jsDes.style.display = 'block';})
js.addEventListener('mouseleave', function(){ jsDes.style.display = 'none';})

python.addEventListener('mouseenter', function(){ pythonDes.style.display = 'block';})
python.addEventListener('mouseleave', function(){ pythonDes.style.display = 'none';})

ps.addEventListener('mouseenter', function(){ psDes.style.display = 'block';})
ps.addEventListener('mouseleave', function(){ psDes.style.display = 'none';})

is.addEventListener('mouseenter', function(){ isDes.style.display = 'block';})
is.addEventListener('mouseleave', function(){ isDes.style.display = 'none';})

c.addEventListener('mouseenter', function(){ cDes.style.display = 'block';})
c.addEventListener('mouseleave', function(){ cDes.style.display = 'none';})

arduino.addEventListener('mouseenter', function(){ arduinoDes.style.display = 'block';})
arduino.addEventListener('mouseleave', function(){ arduinoDes.style.display = 'none';})

lts.addEventListener('mouseenter', function(){ ltsDes.style.display = 'block';})
lts.addEventListener('mouseleave', function(){ ltsDes.style.display = 'none';})

kicad.addEventListener('mouseenter', function(){ kicadDes.style.display = 'block';})
kicad.addEventListener('mouseleave', function(){ kicadDes.style.display = 'none';})

vhdl.addEventListener('mouseenter', function(){ vhdlDes.style.display = 'block';})
vhdl.addEventListener('mouseleave', function(){ vhdlDes.style.display = 'none';})

matlab.addEventListener('mouseenter', function(){ matlabDes.style.display = 'block';})
matlab.addEventListener('mouseleave', function(){ matlabDes.style.display = 'none';})

