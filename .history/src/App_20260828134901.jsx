function App() {
  function handleClick() {
    alert("Button clicked!")
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