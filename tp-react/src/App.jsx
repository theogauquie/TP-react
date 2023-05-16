import './App.css';
import Router from './components/router';
import Header from './components/Header'
import AppBar from './components/app-bar/AppBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar />
        <Header/>
        <Router/>
      </header>
    </div>
  );
}

export default App;
