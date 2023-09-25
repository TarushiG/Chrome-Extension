import React, {useState} from "react";
import './App.css';

const data = [
  {
    name: "Search Engines",
    url: ["https://www.google.com/?gws_rd=ssl", "https://www.bing.com/?toWww=1&redig=A33BA3145E3645F5B5D51E59D0EB8138"]
  }
]

function App() {

  const [lists, setLists] = useState(data);
  const openTabs = (url) => {
    for(const link of url){
      window.open(link, "_blank")
    }
  }

  return (
    <div className="App">
      <h3>Choose App List</h3>
      <div className='lists'>
        {lists && lists.map((item) => {
          return(
            <button className='button'onClick={() => {openTabs(item.url)}}>{item.name}</button>
          )
        })}
        <button className='button'>App A</button>
      </div>
    </div>
  );
}

export default App;
