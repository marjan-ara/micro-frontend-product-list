import faker from 'faker'

const mount=(el)=>{
    let products=''
    for (let i=0;i<6;i++){
        const name=faker.commerce.productName()
        products+=`<div>${name}</div>`
    }
    el.innerHTML=products
}


// Situation 1: we are running this app in development in isolation
if(process.env.NODE_ENV==='development'){
    const el=document.querySelector('#products-dev-only-dev')
    if(el)
    mount(el)
}


// situation 2: we are running this file in develoment or production mode through the container app
export {mount}
