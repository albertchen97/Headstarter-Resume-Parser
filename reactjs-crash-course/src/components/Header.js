// Header.js - Header export component

// Use the extention 'ES7 React/Redux/React-Native/JS snippets' and type 'rafce' to create a boilerplate for React arrow function

import React from 'react'

// PropTypes - A React built-in typechecking library to help you check your prop's data type
import PropTypes from 'prop-types'

import Button from './Button'

// Take in the 'props' parameter passed from App.js
const Header = ({title}) => {
    const onClick=()=>{
        console.log('Clicked')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Upload' className='btn' onClick={onClick}></Button>
        </header>
    )
  }

// // 'props' can also been passed as a struct
// const Header = ({title}) => {
//   return (
//     <div>
//       <h1>Resume Parser</h1>
//       <h3>(Headstarter Google Company Case)</h3>
//       <h4>{title}</h4>
//     </div>
//   )
// }

// Create an object for default props values
// If nothing is passed from App.js the default values will be used
Header.defaultProps = {
    title: 'This is a default props from Header.js'
}

// Check if the prop 'title' is a string.
// Prompt error message in the console if 'title' is not a string.
Header.propTypes={
    title: PropTypes.string.isRequired,
}

export default Header
