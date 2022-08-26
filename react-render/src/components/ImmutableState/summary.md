# State Immutability and Render

- Mutating an object or an array as state **will not cause a re-render** when used with the useState or useReducer hook
- To re-render, **make a copy of the existing state**, modify as necessary and then pass the new state to the setter function or while returning from a reducer function.
- **Directly mutating the state is an easy way to create bugs** in your application. Make sure you don't do that.
