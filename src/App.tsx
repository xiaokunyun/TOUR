import { useState } from 'react'
import './App.css'
import {CONTENT_INFO} from './content';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Menu from './components/Menu';
function App() {
  const [open, setOpen] = useState<boolean>(false)
  const [menuName, setMenuName] = useState<string>('Island')
  return (
    <div className="App">
      <section className={open?"main-structure active":"main-structure"}>
        <Header open={open} setOpen={setOpen}></Header>
        <Content menuName={menuName}></Content>
        <Footer></Footer>
      </section>
      <Menu setMenuName={setMenuName}></Menu>
    </div>
  )
}

export default App
