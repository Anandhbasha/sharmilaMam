import Button from "./Button"
import Input from "./Input"

const App = ()=>{
  return (
    <div className="app">
      <Button x="edit"/>
      <Button x="delete"/>
      <Button x="submit"/>
      <Button x="login"/>
      <Input type="text" placeholder="Enter your name"/>
    </div>
  )
}

export default App