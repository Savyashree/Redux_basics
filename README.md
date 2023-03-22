/\*

    ------------------------** REDUX **--------------------

    Redux is  a predictable state container for js application.
     - Redux stores and manages application states.
     - can track the states

    Redux toolKit - It and abstraction over redux

    why redux tootlKit???/
        - Configuring redux was complicated
        - More packages were required to work with redux
        - Too much coding

    React ->( React-Redux library) -> Redux (toolkit)

    Three core concepts:
    STORE: Holds the states of the application
    ACTION: Describes what happend in the application
    REDUCER: Handles the action and decides whow to update the state

    Three fundamental principles:
        1. Global state of the application is stored as a single object
        2. States can be changed by dispatching actions, and object describes what happends (action.type)
        3. Reducers needs to written to update the state

\*/

/\*

    ------* ACTIONS *-------

    Actions ae way to interact with the store
        - it is a plain js object
        - had type property describes what happend in the application

const CAKE_ORDERED = "CAKE_ORDERED";

//action creator
function orderCake() {
return {
type: CAKE_ORDERED, // must
quantity: 1 // othe info
}
}

    ------* REDUCERS *-------
    Tells how the apps state should change in response to the actions
    Reducers are the functions which accespts state and the action ad the param, and returns the next state of the application
    (prev state, action) =>  new state

const initial_state = {
numOfCakes: 10,
anotherProperty: 0
}

const reducer = (state = initial_state, action) => {
switch (action.type) {
case CAKE_ORDERED:
return {
...state, //to create a copy of the object and update only required property
numOfCakes: state.numOfCakes - 1
}
default:
return state
}
}

-----_ STORE _-----
we have only 1 store for entire application

getState() -> to acess the state of the application
dispatch(action) -> how the state to be updated
subscribe(listener) -> any time state in the redux store changes
unsubscribe -> calling a method returned by subscribe()

const redux = require("redux")
const createStore = redux.createStore;
const store = createStore(reducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() => {
console.log("updated state ", store.getState())
})
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

//calling a method returned by subscribe()
unsubscribe();

\*/
