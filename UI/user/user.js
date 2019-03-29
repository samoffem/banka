
const getSiblings = (elem)=>{
    const siblings = []
    let sibling = elem.parentElement.firstChild
    while(sibling) {
        if(sibling.nodeType===1 && sibling !==elem){
            siblings.push(sibling)
        }
        sibling = sibling.nextSibling
    }
    return siblings;
}

let element = document.querySelectorAll('.tab a');
elementArray = [].slice.call(element)
for(let i=0; i<elementArray.length; i++) {
    elementArray[i].addEventListener('click', (e)=>{
        e.target.parentElement.classList.add('active')
        getSiblings(e.target.parentElement).forEach((el)=>{
            el.classList.remove('active')
        })
        let href = e.target.getAttribute('href')
        getSiblings(document.querySelector(href)).forEach((el)=>{
            if(el.tagName !=='UL'){
                el.style.display = 'none'
            }
        })
        document.querySelector(href).style.display = 'block'
    })
}