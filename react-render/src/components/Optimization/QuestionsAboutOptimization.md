# Questions on Optimization

**1. When do I use the same element refence technique and when do i use React.Memo**

|                                  Same Element Reference                                   |                                                                    React.Memo                                                                     |
| :---------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
|   When your parten component re-renders because of state change in the parent component   | When your child component is being asked to re-render due to changes in the parent's state which do not affect the child component prps in anyway |
| This techinique does not work if the parent component re-reders because of changes in its |
props state change? Yes
props change? No

**2. If React.memo provides the optmization by comparing the props, why not wrap every single component with React.memo? Why doesn't React just internally memoize every component and not expose React.memo to the developers?**

"Shallow comparisons aren't free. They're **O(prop count)**. And they only buy something if it bails out."

"All comparisons where we end up re-rendering are wasted. Why would you expect always comparing to be faster? Considering many components always get different props."

~ Dan abramov

# React.memo and hypothetical time

Component render time - 10ms

React.memo time - 2ms

------------------------------

First re-render - No props change - 2ms

Second re-render - props change - 2ms + 10ms = 12ms

# Component render history

initial render - 10ms

Optimized render - 2ms

re-render - 12ms

re-render - 12ms

re-render - 12ms

re-render - 12ms

...

# Render Optimization

When you optimize the rendering of one component, React will also skip rendering that component's entire subtree because it's effectively stopping the default "render children recursively" behavior of React.
