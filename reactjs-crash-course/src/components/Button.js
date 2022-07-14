// Button.js - Button export component

// PropTypes - A React built-in typechecking library to help you check your prop's data type
import PropTypes from 'prop-types'

import React from 'react'

const Button = ({color, text, onClick}) => {

  return (
    <div>
      <button onClick={onClick} className='btn'>{text}</button>
    </div>
  )
}

Button.defaultProps={
    color:'white'
}

Button.propTypes={
    text: PropTypes.string,
    color:PropTypes.string,
    onClicl: PropTypes.func,
}


export default Button


