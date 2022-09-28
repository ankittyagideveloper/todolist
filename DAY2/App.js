import React, { Component, useState } from 'react'
import Counter from './Counter';

// class App extends Component{
//     state={
//         number:0
//     }
//     componentDidMount(){
//         console.log('Hello component did mount')
//     }
//     render(){
//         return(<>
//         <button onClick={()=>this.setState((state)=>({number:state.number+1}))}> Increment</button>
//         <Counter number={this.state.number}/>
//         </>)
//     }
// }


const  App =()=>{
    const [number, setNumber] = useState(0)
  return (
<>
        <button onClick={()=>setNumber((number)=>number+1)}> Increment</button>
        <Counter number={number}/>
        </>
  )
}



export default App;