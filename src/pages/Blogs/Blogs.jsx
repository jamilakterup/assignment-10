import React from 'react';
import ReactToPdf from 'react-to-pdf';
import './Blogs.css';

const Blogs = () => {
    const ref = React.createRef();
    return (
        <section ref={ref} className='container mx-auto'>
            <div>
                <h1 className='text-3xl m-8'>Q1: Difference between controlled and uncontrolled component</h1>
                <table className="table w-75 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Controlled</th>
                            <th>Uncontrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>It does not maintain its internal state.</td>
                            <td>It maintains its internal states.</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Here, data is controlled by the parent component.</td>
                            <td>Here, data is controlled by the DOM itself.</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>It has better control over the form elements and data.</td>
                            <td>It has limited control over the form elements and data.</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>4</th>
                            <td>It accepts its current value as a prop.</td>
                            <td>It uses a ref for their current values.</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th>5</th>
                            <td>It allows validation control.</td>
                            <td>It does not allow validation control.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h1 className='text-3xl m-8'>Q2: How to validate React props using PropTypes</h1>
                <p>React provides a library called PropTypes that allows you to validate the props of a component. PropTypes helps ensure that the props passed to a component have the expected data type and format, and can be very useful in catching bugs early in development. Here's how to use PropTypes to validate React props:

                    <ol className='list-decimal my-3'>
                        <li>Import the PropTypes library at the top of your file:</li>
                    </ol>
                    <span className="text-red-600 font-bold">import PropTypes from 'prop-types';</span>
                </p>
            </div>
            <div>
                <h1 className='text-3xl m-8'>Q3: Difference between nodejs and express js.</h1>
                <p>Node.js and Express.js are two popular technologies used in web development, but they serve different purposes.</p>
                <p className='my-4 font-bold'>Here are some key differences between Node.js and Express.js:</p>
                <ol className='list-decimal'>
                    <li>Node.js is a runtime environment, where Express.js is a web framework.</li>
                    <li>Node.js provides a core set of features for creating server-side applications, while Express.js provides additional features and tools for developing web applications.</li>
                    <li>Node.js can be used without a web framework, but Express.js is built specifically for web development.</li>
                    <li>Node.js provides a low-level API for handling HTTP requests and responses, while Express.js provides a higher-level API that simplifies common web development tasks.</li>
                </ol>
            </div>
            <div>
                <h1 className='text-3xl m-8'>Q4: What is a custom hook, and why will you create a custom hook?</h1>
                <p>In React, a custom hook is a function that allows you to reuse stateful logic across multiple components. Custom hooks let you extract complex logic from components and reuse it in a more concise and reusable form.

                    A custom hook is simply a JavaScript function that uses built-in hooks like useState and useEffect to create and manage stateful logic. Custom hooks follow the naming convention of starting with the word use and can be used just like any other React hook.
                </p>
                <p className='my-4 font-bold'>There are many reasons why we might want to create a custom hook in React:</p>
                <ol className='list-decimal'>
                    <li>Reuse logic: Custom hooks allow you to reuse stateful logic across multiple components without duplicating code.</li>
                    <li>Keep components simple: Extracting complex logic into a custom hook can make components simpler and more focused.</li>
                    <li>Abstract away implementation details: Custom hooks can abstract away implementation details and provide a clean API for components to use.</li>
                    <li>Share logic across projects: Custom hooks can be easily shared across projects or even published to a library for others to use.</li>
                </ol>
            </div>

            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({toPdf}) => (
                    <button className="inline-flex items-center px-4 py-2 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest bg-gray-500 hover:bg-gray-600 active:bg-gray-700 outline-none focus:border-gray-600 focus:ring ring-gray-300 disabled:opacity-25 disabled:cursor-not-allowed transition ease-in-out duration-150 mt-8" onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
        </section>
    );
};

export default Blogs;