export function createStore({ state, actions, mutations, getters})


const gettersSubscrbers = Object.keys(getters).reduce((all, getter)=> {
    return {
        ...all ,
        [getter]: []
    }
},{})

const clientGetters = Object.keys(getters).reduce((all, getter)=> {
    return {
        ...all ,
        [getter]: (subscriber) => {
            gettersSubscrbers[getter].push(subscriber)
        }
    }
},{})


const actionOpts = {
    commit(mutationName, payload)  {
        mutations[mutationName](state, payload)

        Object.keys(gettersSubscrbers).forEach(getter =>{
            gettersSubscrbers[getter].forEach(sub =>{
                const getterResutl = getters[getter](state)
                sub(getterResutl)
            })
        })
    }
}


return {
    dispatch (actionName, payload) {
        actions[actionName](actionOpts, payload)
    },
    getters: { clientGetters

    }
}