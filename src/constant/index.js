import orderImage from "../assets/p1.jpg";
import shipImage from "../assets/p2.jpg";
import deliveryImage from "../assets/p3.jpg";

export const featureOptions = [
    {
        id: 1,
        name: "Easy to order",
        image: orderImage,
    },

    {
        id: 2,
        name: "Fastest delivery",
        image: shipImage,
    },
    {
        id: 3,
        name: "Best Quality",
        image: deliveryImage,
    },
];

export const Blogs = [
    {
        id: 1,
        question:
            "What are the differences between uncontrolled and controlled components in web development?",
        answer:
            "The main difference between controlled and uncontrolled components in React is how they manage their state. Controlled components receive their state and behavior as props from their parent component, while uncontrolled components manage their own state internally using the DOM. Controlled components are generally more flexible and easier to manage, while uncontrolled components may be simpler to work with in some cases but may be more difficult to manage when working with complex state or user interfaces.",
    },
    {
        id: 2,
        question: "How can you validate React component props using PropTypes?",
        answer:
            "To validate React component props using PropTypes, you can import the PropTypes library from the 'prop-types' package and define the expected data types for each prop in the component's propTypes object. The propTypes object should have a property for each prop that the component expects, and the value of each property should be a function that defines the data type and any additional validation rules for that prop. When the component is rendered, React will check that the values of the props passed to it match the expected data types defined in the propTypes object. If a prop's value is not of the expected type, React will throw a warning in the console.",
    },
    {
        id: 3,
        question: "What are the differences between Node.js and Express.js?",
        answer:
            "Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework that runs on top of Node.js. Node.js is low-level and provides more control, while Express.js is a higher-level, more opinionated framework. Node.js can be used to build any type of server-side application, while Express.js is specifically designed for building web applications.",
    },
    {
        id: 4,
        question: "What is a custom hook in React, and why would you create one?",
        answer:
            "A custom hook in React is a reusable function that encapsulates stateful logic using built-in hooks. It allows you to share this logic across multiple components, improving code organization, reusability, and maintainability. By moving complex stateful logic into a separate function, you can keep your component code focused and improve overall scalability.",
    },
];