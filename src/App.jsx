import { useState } from "react"
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
function App() {
    const [listElements, setListElements] = useState([]);
    
    const addElement = (description, number, category) => {
        const id = crypto.randomUUID()
        const newElement = { description, number, category, id }
        setListElements([...listElements, newElement])
    }
    
    const removeElement = (id) => {
        const elementFilter = listElements.filter((element) => {
            return element.id !== id
        })
        setListElements(elementFilter)
    }

  return (
    <div>
      <HomePage listElements={listElements} addElement={addElement} removeElement={removeElement} />
    </div>
  )
}

export default App
