import { useEffect, useState } from "react"
import Button from "./Button"

function Hello() {
  useEffect(() => {
    console.log("hi1 :)")
    return () => console.log("bye1 :(")
  }, [])
  useEffect(() => {
    console.log("hi2 :)")
    return () => console.log("bye2 :(")
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <Button onClick={onClick} text={showing ? "Hide" : "Show"} />
    </div>
  )
}

export default App
