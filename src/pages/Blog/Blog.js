import React from 'react';

const Blog = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div >
          <h2 className='p-4 text-white font-bold bg-secondary rounded'> How will you improve the performance of a React Application</h2>
          <h5>there are some wey to  improve the performance of a React Application</h5>
          <ul>
            <li> 1. Splitting the large bundle data using ( lazy, suspense component) is one of the solution  to improve the performance of a React Application</li>
            <li>2.
              Large rendering is an issue for low performance.
              visible rendering or viewport rendering can be a solution, I can use react window to solved performance issue.
            </li>
            <li>3.
              Avoiding Scaffolding is a wey to improve the performance of a React Application
            </li>
            <li>4.
              unnecessary rendering is an issue for low performance.
              by using reference, dom, react hook i can reduce unnecessary rendering and improve the performance of react app.
            </li>
            <li> 5. download  on demand is a solution to  improve the performance of react app</li>
          </ul>
        </div>
        <div>
          <h2 className='p-4 text-white font-bold bg-secondary rounded'>
            How does prototypical inheritance work
          </h2>
          <p>
            Everything in Javascript is an object. In JavaScript, objects have a special hidden property [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
          </p>
        </div>
        <div>
          <h2 className='p-4 text-white font-bold bg-secondary rounded'>
            Why you do not set the state directly in React
          </h2>
          <p>
            suppose i have a state, const [products, setProducts] = useState([]).
            if i set products = [...] instead, use the setProducts, it wil store nothing or null or empty etc.
          </p>
        </div>
        <div>
          <p>
            Unit testing is a component of test-driven development (TDD). A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested
          </p>
          <h2 className='p-4 text-white font-bold bg-secondary rounded'>Why should write unit tests</h2>
          <p>
         we should write unit tests because it reduces or prevents production bugs, increases developer productivity, encourages modular programming.
            Unit testing ensures that all code meets quality standards before it's deployed
          </p>
        </div>

      </div>

    </section>
  );
};

export default Blog;