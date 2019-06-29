1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1a. Map, Filter, and Concat. Object.assign
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
2a  The store is the main state machine in a Redux application. Actions are called to perform a function on the page. Reducers are called by actions to make changes to the state(Store).
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
3a  Application state is used through out the entire application across multiple components. Component state is should be limited in scope to the immediate component and child components.
4a. What is middleware?
4a. Middleware is a function that executes after an action is called and before that action is passed to the reducer.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
5a. redux-thunk allows for actions to be called asyncronously by a action-creator function that handles multiple dispatches 
6.  Which `react-redux` method links up our `components` with our `redux store`?
6a. Connect, connect is used to pass actions/action-creators as well as state variables to the component being connected to.