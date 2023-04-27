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