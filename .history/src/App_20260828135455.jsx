function App() {
  function handleClick() {
    alert("Welcome to React, Ronald!")
  }

  return (
    <div>
      <h1>Hello, Ronald!</h1>
      <p>I am learning React.</p>

      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App