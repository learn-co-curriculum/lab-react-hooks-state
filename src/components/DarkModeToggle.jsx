import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Toggle to Light Mode' : 'Toggle to Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
