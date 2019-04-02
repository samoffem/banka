let table= document.getElementById('table-id')
let rows = table.getElementsByTagName('tr')
rows = Array.from(rows)
rows.forEach((row)=>{
    row.addEventListener('click', (e)=>{
        let children = e.target.parentElement.children
        document.querySelector('.customer-details').style.display = 'block'
        document.getElementById('name').innerText =children[1].innerText
        document.getElementById('account-number').innerText ="Acct Number: "+ children[2].innerText
        document.getElementById('account-type').innerText ="Account Type:" + children[3].innerText
        document.getElementById('phone-number').innerText = "Contact: Phone number"
        document.getElementById('address').innerText = "Address: Lorem Ipsum Address"
    })
})
