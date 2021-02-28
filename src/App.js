import './App.css';
import  Login from "./components/Login/Login";
function App() {

  const styles = [
    "App", "flex", "justify-center","items-center","p-5"
  ]

  return (
    <div className={styles.join(" ")}>
      
      <Login>

      </Login>
    </div>
  );

  

}

export default App;
