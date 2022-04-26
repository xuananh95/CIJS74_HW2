import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <>
      <div className="button-div">
        <h1>Task 1</h1>
        <Button text="Cancel" />
        <Button text="Sell" />
        <Button text="Set Auction" />
        <Button text="Delist" />
        <Button text="Approve" />
        <Button text="Ok" />
        <Button text="Create" />
      </div>
      <hr />
      <div className="input-div">
        <h1>Task 2</h1>
        <form>
          <Input name="username" text="Username" />
          <Input name="password" text="Password" />
          <Input name="address" text="Address" />
        </form>
      </div>
    </>
  );
}

export default App;
