// App.js - The root app component; everything you see on the webpage is coming from here.

// Import CSS
import './App.css';

// Import components
import Header from './components/Header';
import Tasks from './components/Tasks';

// "State is similar to props, but it is private and fully controlled by the component." - https://reactjs.org/docs/state-and-lifecycle.html
// Import the useState function from the react library.
import {useState} from 'react'

// Components can be functions or classes
// Components are written in JavaScript syntac eXtension (JSX) which looks like HTML

// App - The root component; it wraps all the components and send it to index.html
// @param - 'props' stands for 'properties'; it pass the properties from the App root components to other components (e.g., Heaser.js)
function App(props) {

  // Global state for the Task component
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'afwefewf',
            day: 'Feb 15th at 7:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Ddfsfdageg Appointment',
            day: 'Feb 1th at 3:30pm',
            reminder: false,
        },
    ]
  )

  // In JSX, you should return a single parent element and wrap everything inside the parent element
  return (
    <div className="container">
      <Header title='Resume Parser' />
      {/* Assigning values other than string gives you an error in the console (use {} for number/boolean values) */}
      {/* <Header title={1}></Header> */}
      <Tasks tasks={tasks}/>
    </div>
  );
}

//// The default template code:
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
