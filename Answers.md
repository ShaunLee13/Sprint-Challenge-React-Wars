# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React works by manipulating a Virtual DOM which it places on top of the DOM, "react"ing to information it recieves from the JS files. It's purpose is to help by incorporating multiple file types (html,CSS,JS) into fewer files, keeping code more clear as to what it provides for each component.

1. Describe component state.

A state is the information (or lack of) that React is currently working with. When that information is changed React will compile components with the new information in the event that the information would change the output.

1. Describe props.

Props are parameters that are passed into components. In terms of the HTML they relate to, they are custom attributes which contain information we pass down into the component.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is something that makes changes and operates beyond just the scope it's in, such as requesting data, making updates to data, etc. To make changes to states and properties, we combine the useState and useEffect hooks. In requesting data, we would use the useEffect hook to request the data, and then we would use the second part of our useState, our "set" declaration to assign the data we recieve to our state. 