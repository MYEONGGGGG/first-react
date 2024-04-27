import './App.css';
import Box from './component/box';
import Counter from "./component/counter";

function App() {

    return (
      <div>
          <Counter/>

          <Box name="리사" num={1}/>
          <Box name="제니" num={2}/>
          <Box name="지수" num={3}/>
      </div>
  );
}

export default App;
