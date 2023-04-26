const Questions = [
  {
    question: "What is React.js?",
    options: [
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A back-end programming language",
      "A database management system",
    ],
    answer: "A JavaScript library for building user interfaces",
  },
  {
    question: "Which company developed React.js?",
    options: ["Google", "Apple", "Facebook", "Microsoft"],
    answer: "Facebook",
  },
  {
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A JavaScript framework",
      "A CSS preprocessor",
      "A database query language",
    ],
    answer: "A syntax extension for JavaScript",
  },
  {
    question:
      "What is the purpose of the `render` method in a React component?",
    options: [
      "To update the state",
      "To handle user input",
      "To fetch data from an API",
      "To describe the UI structure",
    ],
    answer: "To describe the UI structure",
  },
  {
    question: "What is a React component's state?",
    options: [
      "A way to store and manage data within a component",
      "A method for handling user interactions",
      "A property for styling the component",
      "A set of lifecycle methods",
    ],
    answer: "A way to store and manage data within a component",
  },
  {
    question: "How do you create a new React component?",
    options: [
      "Using the `createClass` method",
      "Extending the `Component` class",
      "By importing a component from a library",
      "By using an HTML tag",
    ],
    answer: "Extending the `Component` class",
  },
  {
    question: "What are React hooks?",
    options: [
      "A way to add state and lifecycle features to function components",
      "A set of CSS rules for styling components",
      "A library for handling API requests",
      "A type of event listener",
    ],
    answer: "A way to add state and lifecycle features to function components",
  },
  {
    question: "What is the purpose of the `useState` hook?",
    options: [
      "To add state to a functional component",
      "To perform side effects in a component",
      "To manage component lifecycle",
      "To handle user input",
    ],
    answer: "To add state to a functional component",
  },
  {
    question:
      "Which hook should you use to perform side effects, such as fetching data or updating the DOM, in a functional component?",
    options: ["useEffect", "useState", "useReducer", "useMemo"],
    answer: "useEffect",
  },
  {
    question: "What is the purpose of the `key` prop in React lists?",
    options: [
      "To improve performance by allowing React to identify which items have changed",
      "To uniquely identify each list item",
      "To specify the order of the list items",
      "To define the type of data in the list",
    ],
    answer:
      "To improve performance by allowing React to identify which items have changed",
  },
  {
    question: "What is a higher-order component (HOC)?",
    options: [
      "A component that renders another component",
      "A component that takes a component as an argument and returns a new component",
      "A component with a higher z-index",
      "A component that has more than one child component",
    ],
    answer:
      "A component that takes a component as an argument and returns a new component",
  },
  {
    question: "What is a controlled component in React?",
    options: [
      "A component whose state is managed by React",
      "A component that can only receive props from a parent component",
      "A component that manages its own state",
      "A component that controls the behavior of child components",
    ],
    answer: "A component whose state is managed by React",
  },
  {
    question:
      "How do you pass data from a parent component to a child component?",
    options: ["Using state", "Using props", "Using context", "Using the DOM"],
    answer: "Using props",
  },
  {
    question:
      "What is the purpose of the shouldComponentUpdate lifecycle method?",
    options: [
      "To determine if a component should re-render when its state or props change",
      "To update the state of a component",
      "To fetch data from an API when the component mounts",
      "To clean up resources when a component is unmounted",
    ],
    answer:
      "To determine if a component should re-render when its state or props change",
  },
  {
    question: "What is React's virtual DOM?",
    options: [
      "A lightweight in-memory representation of the actual DOM",
      "An alternative to the browser's DOM",
      "A virtual reality version of the DOM",
      "A data structure for storing DOM elements",
    ],
    answer: "A lightweight in-memory representation of the actual DOM",
  },
  {
    question:
      "Which method is used to update a component's state in a class component?",
    options: ["setState", "state.update", "changeState", "modifyState"],
    answer: "setState",
  },
  {
    question:
      "How do you pass a callback function from a parent component to a child component?",
    options: [
      "Through the callback prop",
      "Through the function prop",
      "Through the method prop",
      "Through the event prop",
    ],
    answer: "Through the callback prop",
  },
  {
    question: "What does the React.memo function do?",
    options: [
      "It memoizes the result of a function",
      "It optimizes the rendering of a functional component by preventing unnecessary re-renders",
      "It creates a new state variable",
      "It schedules a function to run after a component renders",
    ],
    answer:
      "It optimizes the rendering of a functional component by preventing unnecessary re-renders",
  },
  {
    question: "What is the purpose of the useReducer hook?",
    options: [
      "To manage state and actions in a more structured way",
      "To fetch data from an API",
      "To define the style of a component",
      "To handle user input",
    ],
    answer: "To manage state and actions in a more structured way",
  },
  {
    question: "How can you access a DOM element directly in a React component?",
    options: [
      "By using document.getElementById",
      "By using a ref",
      "By using the data-id attribute",
      "By using the querySelector method",
    ],
    answer: "By using a ref",
  },
];

export default Questions;