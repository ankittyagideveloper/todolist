import axios from 'axios';
import React,{Component, useEffect, useState}from 'react';


// class App extends Component{

//     state={
//         data:[]
//     }
// componentDidMount(){
//    axios.get('https://type.fit/api/quotes')
//    .then((res)=>{  this.setState({
//     data:res.data
//    })})
//    .catch((error)=>console.log(error));
   
// }
 
//     render(){

//         return(
//             <div>
//   {this.state.data.map((label)=><h1>{label.text}</h1>)}
//             </div>
          
//         )
//     }
// }

// export default App;


const App = () =>{
    const [data, setdata] = useState([])
    useEffect(()=>{
           axios.get('https://type.fit/api/quotes')
   .then((res)=>{ setdata(res.data)})
   .catch((error)=>console.log(error));
   
    },[])

    return <div>      <div>
   {data.map((label)=><h1>{label.text}</h1>)}
             </div></div>
}
export default App;