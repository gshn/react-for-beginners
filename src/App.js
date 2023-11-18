import { useEffect, useState } from "react"
import styles from "./App.module.css"
import Button from "./Button"

function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)
  useEffect(() => {
    console.log("I run only once.")
  }, [])
  useEffect(() => {
    console.log("I run when 'keyword' changes", keyword)
  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes.", counter)
  }, [counter])
  useEffect(() => {
    console.log("I run when 'keyword' or 'counter' changes.", keyword, counter)
  }, [keyword, counter])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" name="search" id="search" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"click me"} onClick={onClick} />
    </div>
  )
}

export default App
