import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayok = ['anwar','jasim','manna','bappi','rubel']
  const products = [
    {name:'photoshop', price:'$90.99'},
    {name:'PDF Reader', price:'$6.66'},
    {name:'PDF Maker', price:'$6.66'}
  ]
  // const nayokName = nayok.map(nayok=>nayok);
  // console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">
        <p>my react</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayok.map(nay=><li>{nay}</li>)
          }
          {
            products.map(pd=><li>{pd.name}</li>)
          }
        </ul>
        <ul>
            {
              products.map(pd=><Product pro={pd}></Product>)
            }
        
        </ul>
        {/* 
          <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
        */}
        
        {/* 
          <Person name="mofiz" cl="six"></Person>
          <Person name="romun" cl="nine"></Person>
        */}
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handelIncrease = () => {
    const newCount = count+1;
    setCount(newCount);
  }
  return(
    <div>
        <h1>count:{count} </h1>
        <button onClick={handelIncrease}>increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Refresh</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    
    <div>
      <h3>Dynamic Users:{users.length} </h3>  
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      
      </ul>
    </div>
  )
}

function Product(props){
  var style={
    border:'2px solid green',
    width: '300px',
    height: '300px',
    backgroundColor: 'gray',
    margin: '5px'
  }
  console.log(props);
  return(
    <div style={style}>
      <h2>{props.pro.name}</h2>
      <h1>{props.pro.price}</h1>
      <button>buy now</button>
    </div>
  );
}

function Person(props) {
  var style = {
    border : '2px solid green',
    margin: '2px'
  }
  return (
    <div style={style}>
      <h1>name:{props.name}</h1>
      <h2>class:{props.cl}</h2>
    </div>
  );
}

export default App;
