# Same element reference

- In React, when a parent component renders, React will recursively render all of its child components.
- "Unnecessary renders" where the child component goes through the render phase but not the commit phase
- You can extract the expensive child component and instead pass it down as props to the parent component
- Whenever there is a re-render caused by a change in the state of the parent component, React will optimize the re-render for you knowing that the props has to be referencing the same element before and after the render
