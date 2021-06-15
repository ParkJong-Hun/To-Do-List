//Add, List를 가져옴
import Add from './Add';
import List from './List';
import Footer from './Footer';
import AppCSS from './App.css';

//root component
function App() {
  return (
    //추가와 리스트표시 컴포넌트를 가져옴
    <div>
      <h1>To do List</h1>
      <Add />
      <List />
      <Footer />
    </div>
  );
}

export default App;
