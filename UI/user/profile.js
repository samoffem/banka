let table = document.querySelector('.table')
let onclick = false;
document.querySelector('button').addEventListener('click', (e)=>{
    onclick = !onclick;
    if(onclick){
        e.target.textContent = 'Collapse'
        table.style.display = 'block'
    }else{
        e.target.textContent = 'View Transactions'
        table.style.display = 'none'

    }
})