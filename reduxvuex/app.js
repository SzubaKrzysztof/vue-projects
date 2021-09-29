import store from './index.js'

const form = document.querySelector('form')
const fName = document.querySelector('#first-name')
const lName = document.querySelector('#las-name')
const details = document.querySelector('#user-details')

fName.value = store.state.fName
lName.value = store.state.lName

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    store.dispatch('storeUser', {
        firstName: fName.value,
        lastName: lName.value,
    })


    store.getters.user(newUser =>{
        fName.value = '',
        lName.value =  '',
        details.textContent = newUser
    })

    store.getters.user(newUser =>{
        console.log(newUser)
    })

    // store.subscribe((handler) =>
    // {
    //     if (handler.type === 'user'){
    //         details.textContent = `${handler.payload.firstName}
    //         ${handler.payload.lastName}`
    //     }
    // })
})