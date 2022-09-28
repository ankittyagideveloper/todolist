import React, { Component, useEffect } from 'react'

// class Counter extends Component {
// componentDidUpdate(prevProps,prevState){
//     if(prevProps.number !==this.props.number){
//         console.log('Helllo componentdid Update')
//     }
// }
//   render() {
//     return (
//       <div>Counter---{this.props.number} </div>
//     )
//   }
// }


const Counter =({number}) =>{
    useEffect(() => {
  console.log(
    'Hello component did update'
  )
    }, [number])
    
  return (
    <div>Counter ---{number}</div>
  )
}

export default  Counter;