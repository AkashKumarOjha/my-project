import CreateContextProvider from "./counterContext";
import Cource from "./Cource";
import Department from "./Department";
import Stdname from "./Stdname";
import Teachname from "./Teachname";
import './App.css'
import './index.css' ;

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="st">My School</h1>
      </div>
      <CreateContextProvider>
          <Stdname/>
          <Teachname/>
          <Cource/>
          <Department/>
      </CreateContextProvider>
    </div>
  );
}

export default App;
