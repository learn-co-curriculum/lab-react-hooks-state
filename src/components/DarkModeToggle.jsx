import React from 'react'

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Toggle to Light Mode' : 'Toggle to Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
