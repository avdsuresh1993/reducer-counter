import { useReducer } from 'react';

function App() {
const initialState={
  count:0
}

const reducer=(state,action)=>{
const {type} = action;

switch(type){
  case "incr":return {count:state.count+1}
  case "decr":return {count:state.count>0?state.count-1:0}
  default : return state;
}
}

const [ state,dispatch] = useReducer(reducer,initialState)
const {count} = state
  return (
    <>
     <h1>Count:{count}</h1>
     <button onClick={()=>{dispatch({type:"incr"})}}>+</button>
     <button onClick={()=>{dispatch({type:"decr"})}}>-</button>
    </>
  )
}

export default App
