import "./styles.css";
import BasicExample from "./component/form";
import Basic from "./component/menu";
export default function App() {
  return (
    <div className="App">
      <Basic />
      <BasicExample />

      {/* <br />
      <form>
        <label>Escreva seu nome: </label>
        <input type="text" />
      </form> */}
    </div>
  );
}
