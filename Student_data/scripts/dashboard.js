let data = JSON.parse(localStorage.getItem('Student-data'));

window.addEventListener('load',function(){
    displayData(data);
})

let batch1 = 0;
let batch2 = 0;
for(let i=0; i<data.length; i++){
    if(data[i].batch === '1'){
        batch1++;
    }else{
        batch2++;
    }
}

document.getElementById('batch-1').innerText = batch1;
document.getElementById('batch-2').innerText = batch2;

function displayData(data){
    document.querySelector('#container1').innerHTML = "";
    data.map(function(ele,index){
        let box = document.createElement('div');

        let img = document.createElement('img');
        img.src = ele.url;

        let box1 = document.createElement('div');
        box1.setAttribute('id','box1');

        let names = document.createElement('div');
        names.innerText = ele.name;
        
        let batch = document.createElement('div');
        batch.innerText = `Batch:- ${ele.batch}`;

        let crs = document.createElement('div');
        crs.innerText = `Course:- ${ele.course}`;

        let units = document.createElement('div');
        units.innerText =  `Unit:- ${ele.unit}`; 

        let btn = document.createElement('button');
        btn.innerText = 'Remove';
        btn.addEventListener('click',function(){
            removeFun(ele,index);
        })
        
        box1.append(names,batch,crs,units);
        box.append(img,box1,btn);
     
        document.querySelector('#container1').append(box);
    })

}

let trashs = JSON.parse(localStorage.getItem('trash')) || [];

function removeFun(ele,index){
    data.splice(index,1);
    trashs.push(ele);
    localStorage.setItem('trash',JSON.stringify(trashs));
    localStorage.setItem('Student-data',JSON.stringify(data));
    window.location.reload();
}