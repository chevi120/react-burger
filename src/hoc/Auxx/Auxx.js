const aux =(props) => props.children;


// Usually, each component's 
// children is actually an array
// . but when there is only a single child,
//  props.children will be the single child 
//  component having no array wrapper.

// So in this case : const aux = (props) => props.children; 
// this will return a component.

export default aux;

// // Higher-order components (HOCs) in React were 
// inspired by higher-order functions in JavaScript.
//  A HOC is an advanced technique for reusing logic 
//  in React components. It is a pattern created out 
//  of React’s compositional nature.

// // HOCs basically incorporate the don’t-repeat-yourself (DRY)
//  principle of programming, which you’ve most likely come 
//  across at some point in your career as a software developer.
//   It is one of the best-known principles of software development,
//    and observing it is very important when building 
//    an application or writing code in general.

// What Is A Higher-Order Component?

// A higher-order component (HOC) is an advanced element
//  for reusing logic in React components. Components
//   take one or more components as arguments, and return
//   a new upgraded component. Sounds familiar, right?
//    They are similar to higher-order functions,
//     which take some functions as an argument and produce
//      a new function.

// HOCs are commonly used to design
//  components with certain shared behavior
//   in a way that makes them connected
//    differently than normal state-to-props pattern