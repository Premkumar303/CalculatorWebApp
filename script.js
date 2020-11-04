function printStored(values){
    if(values==''){
        document.querySelector('.calc-ipt').innerText =' ';
    }else{
        document.querySelector('.calc-ipt').innerText += values;
    }

}


function getformattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function setResult(num){
    if(num == ''){
        document.querySelector('.calc-opt').innerText="";
    }else{
        document.querySelector('.calc-opt').innerText=getformattedNumber(num);
    }
}
//setResult("3453453554");

var operators = document.getElementsByClassName('operator');
for(let i=0;i<operators.length;i++){
    operators[i].addEventListener('click',function(){
        if(this.id=='clear'){
            setResult('');
            printStored('');
        }else if(this.id=='delete'){
            setResult(Math.trunc(getNumbers()/10));
        }else if(this.id=='='){
            var fin = getStored()+getNumbers();
            var ev = eval(fin);

            setResult(ev);
            addHistory(fin,ev);
            printStored('');
        }else{
            printStored(getNumbers()+this.id);
            setResult('');
        }

        console.log(this.id);
    });
}

var numbers = document.getElementsByClassName('number');
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click',function(){
        var op = getNumbers();
        if(op!=NaN){
            op+=this.id;
            setResult(op);
        }
    });
}

function getNumbers(){
    var num =  document.querySelector('.calc-opt').innerText;
    return Number(num.replace(/,/g,''));
}
function getStored(){
    return document.querySelector('.calc-ipt').innerText;
}
var his = document.getElementById('history');
his.addEventListener('click',function(){
    document.getElementById('calc-page').classList.toggle('hide');
    document.getElementById('history-page').classList.toggle('hide');
});
var back = document.getElementById('back');
back.addEventListener('click',function(){
    document.getElementById('calc-page').classList.toggle('hide');
    document.getElementById('history-page').classList.toggle('hide');
});

function addHistory(exp , result){
    document.querySelector('.results').innerHTML +=  '<p>'+exp+' = '+result+'</p>';
}

document.querySelector('.btn').addEventListener('click',function(){
    document.querySelector('.results').innerHTML ="";
});