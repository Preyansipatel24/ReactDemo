
import { useState } from 'react';
import Papa from 'papaparse';
import './App.css';

function App() {
  const [data,setData] = useState([]);


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file,{
      header:true,
      complete:(results) =>{
        setData(results.data);
      },
    });
  };
  return (
    <div className="App">
      <input type='file' accept='.csv' onChange={handleFileUpload}/>
      {data.length ? (
        <table className='table'>
          <thead>
            <tr>
              <th>ZIP</th>
             <th>LAT</th>
             <th>LNG</th>
             <th>City</th>
            </tr>
          </thead>
          <tbody>
          {data.map((row,index) =>(
            
          ))}
          </tbody>
        </table>
      ) : null}


       
    </div>
  );
}

export default App;

