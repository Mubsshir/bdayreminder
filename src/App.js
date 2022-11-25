import './App.css';
import Card from './Components/Card';
import List from './List';
import data from './data.js';
import { useState } from 'react';

const App = () => {
  const [info, setIfno] = useState(data);
  return (
    <div className="App">
      <Card>
        {info.length !== 0 ? <h3 style={{ "color": "grey", "fontSize": "20px" }}> {data.length} Birthday Today</h3> : <h3 style={{ "color": "grey", "fontSize": "20px" }}> No Birthdays Today</h3>}
        {info.map(info => {
          return <List key={info.id} img={info.img} name={info.name} age={info.age} />
        })}
        <button className='btn' onClick={() => { setIfno([]) }}>Clear all</button>
      </Card>
    </div >
  );
}

export default App;
