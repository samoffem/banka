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
 let active = false
document.querySelector('.bars').addEventListener('click',()=>{
    active = !active;
    if(active){
        console.log('i clicked')
        document.querySelector('.side-bar').style.left = '0'
    }else {
        document.querySelector('.side-bar').style.left = '-240px'
    }

})