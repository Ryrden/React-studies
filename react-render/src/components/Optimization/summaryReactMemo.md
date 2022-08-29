# React Memo

- In React, when a parent component renders, a child component might un-necessarily render.
- To optimize this behaviour, you can use React.memo and pass in the child component.
- React.memo will perform a shallow comparison of the previous and new props and re-render the child component only if the props have changed.
