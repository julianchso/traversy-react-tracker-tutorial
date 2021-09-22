import Header from "./components/Header";

function App() {
  return (
    // must return only one component.
    <div className="container">
      {/* <Header title="Hello"/> */}
      <Header title={1}/>
    </div>
  );
}

export default App;
