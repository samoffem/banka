
let input = document.querySelectorAll('input')
let label = document.querySelectorAll('label')
inputArray =  Array.from(input)
labelArray = Array.from(label)

inputArray.forEach((el)=>{
    el.addEventListener('keyup',()=>{
        if (el.value ===""){
            el.previousElementSibling.classList.remove('active')
        }else {
            el.previousElementSibling.classList.add('active')
        }

    })
})

document.querySelector('#next').addEventListener('click',()=>{
    document.querySelector('.personal-details').style.display = 'none';
    document.querySelector('.next-of-kin').style.display = 'block'
    document.getElementById('prev').style.display = 'block';
})

document.querySelector('#prev').addEventListener('click', (e)=>{
    document.querySelector('.next-of-kin').style.display = 'none'
    document.querySelector('.personal-details').style.display = 'block';
    e.target.style.display = 'none'
})