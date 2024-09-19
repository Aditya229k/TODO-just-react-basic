import TodoHeading from "./todoHeading";
import List from "./listComponent";
import TodoItems from "./allItemComponent";
import './Apps.css'; // Importing the CSS file
function App() {
  return (
    <center>
      <TodoHeading></TodoHeading>
      <List></List>
      <TodoItems></TodoItems>
     
    </center>
  );
}

export default App;
