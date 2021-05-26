const NR1 = document.getElementById("new-rate1");
const NR2 = document.getElementById("new-rate2");

const qty1 = document.getElementById("qty1");
const qty2 = document.getElementById("qty2");

const minus1 = document.getElementById("minus1");
const minus2 = document.getElementById("minus2");

const Plus1 = document.getElementById("plus1");
const Plus2 = document.getElementById("plus2");

const totalNo = document.getElementById("total-no");

let NR1V = 55;
let NR2V = 75;

let qty1V = 1;
let qty2V = 1;

NR1.innerHTML = (NR1V*qty1V - 0.01);
NR2.innerHTML = (NR2V*qty2V - 0.01 );

qty1.innerHTML = qty1V;
qty2.innerHTML = qty2V;

let total = (NR1V * qty1V - 0.01) + (NR2V * qty2V - 0.01) + 19;

Plus1.addEventListener('click',()=>{
    ++qty1V;
    NR1.innerHTML = (NR1V * qty1V - 0.01);
    qty1.innerHTML = qty1V;
    totalNo.innerHTML = (NR1V * qty1V - 0.01) + (NR2V * qty2V - 0.01) + 19;
});

Plus2.addEventListener('click',()=>{
    ++qty2V;
    NR2.innerHTML = (NR2V * qty2V - 0.01);
    qty2.innerHTML = qty2V;
    totalNo.innerHTML = (NR1V * qty1V) + (NR2V * qty2V) + 18.98;
});

minus1.addEventListener('click',()=>{
    --qty1V;
    NR1.innerHTML = (NR1V * qty1V - 0.01);
    qty1.innerHTML = qty1V;
    totalNo.innerHTML = (NR1V * qty1V - 0.01) + (NR2V * qty2V - 0.01) + 19;
});

minus2.addEventListener('click',()=>{
    --qty2V;
    NR2.innerHTML = (NR2V * qty2V - 0.01);
    qty2.innerHTML = qty2V;
    totalNo.innerHTML = (NR1V * qty1V - 0.01) + (NR2V * qty2V - 0.01) + 19;
});

