# useReducer and Render

- The dispatch function from a useReducer hook will cause the component to re-render
- The exception is when you update a state to the **same value** as the current state
- Same value after the initial render? The component **will not re-render**
- same value after re-renders? React will **render the specific component** one more time and then **bails out** from any subsequent renders
