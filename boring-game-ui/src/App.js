import './App.css';
import { TextField } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <form autoComplete="off">
        <TextField id="user-name" label="User Name" required />
      </form>
    </div>
  );
}

export default App;
