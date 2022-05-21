// document.querySelector('form').addEventListener('submit',myFunction());

// function myFunction(event){
//     event.preventDefault();
//     console.log('hii')
// }

let data = JSON.parse(localStorage.getItem('Student-data')) || [];

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

const myform = document.getElementById('myForm');

myform.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log('hii');

    let myObj = {
        name:document.getElementById('name').value,
        course:document.getElementById('course').value,
        unit:document.getElementById('unit').value,
        url:document.getElementById('url').value,
        batch:document.getElementById('batch').value
    }

    data.push(myObj);

    localStorage.setItem('Student-data',JSON.stringify(data));
    
})