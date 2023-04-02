import Home from './pages/Home'
import styles from './App.module.css'
import Header from "./components/Header/Header"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  )
}

export default App
