
import './App.css';
import React from 'react';

//import ClassCounter from './components/ClassicReact.js';
//import HookCounter from './components/HookCounter.js'
//import HookPrevValue from './components/HookPrevValue.js'
//import HookWithObjects from './components/HookWithObjects.js'
//import HookWithArrays from './components/HookWithArrays.js'
//import ClassicComponentDidMount from './components/ClassicComponentDidMount.js'
//import HookWiithUseEffect from './components/HookWiithUseEffect.js'
//import ClassMouse from './components/ClassMouse.js'
//import HookMouse from './components/HookMouse.js'
//import HookMouseContainer from './components/HookMouseContainer.js'
// import ClassicCounter from './components/ClassicCounter.js'
// import HookIntervalCounter from './components/HookIntervalCounter.js'
//import HooFetching from './components/HooFetching.js'
//import HookContext from './components/HookContext.js'
//import HookUseMemo from './components/HookUseMemo.js'
//import HookUseRef from './components/HookUseRef.js'
import UseRefCounter from './components/UseRefCounter.js'

//import HookUseReducer from './components/HookUseReducer.js'
//import HookUseReducer2 from './components/2HookUseReducer.js'
//import HookUseReducer3 from './components/3HookUseReducer.js'
//export const NameContext=React.createContext()
//export const DateContext=React.createContext()

// import HookReducerWithContextA from './components/HookReducerWithContextA.js'
// import HookReducerWithContextB from './components/HookReducerWithContextB.js'
// import HookReducerWithContextC from './components/HookReducerWithContextC.js'
// export const CountContext=React.createContext()

// import DataFetching1 from './components/1DataFetching.js'
//import ParentComponent from './components/ParentComponent.js'

// const initialState=0;
// const reducer=(state,action)=>{
//    switch(action){
//        case 'increment':
//            return state+1
//         case 'dicrement':
//            return state-1
//         case 'reset':
//            return initialState;
//         default:
//             return state
//    }
// }
function App() {
  //const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
       {/* <ParentComponent/> */}
     {/* <NameContext.Provider value={"Dmitry"}>
       <DateContext.Provider value={"september 22"}>
      <HookContext />
      </DateContext.Provider>
      </NameContext.Provider> */}



{/*       
   <CountContext.Provider  value ={{countState:count,countDispatch:dispatch}}>
    <div>Count -- {count}</div>
      <HookReducerWithContextA/>
      <HookReducerWithContextB/>
      <HookReducerWithContextC/>
      </CountContext.Provider> */}

      <UseRefCounter/>
      {/* <HookUseRef/> */}
      {/* <HookUseMemo/> */}
      {/* <DataFetching2/> */}
      {/* <DataFetching1/> */}
      {/* <HookUseReducer3/> */}
      {/* <HookUseReducer2/> */}
     {/* <HookUseReducer/> */}
      {/* <HooFetching/> */}
      {/* <HookIntervalCounter/>
      <ClassicCounter/> */}
      {/* <HookMouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}
      {/* <HookWiithUseEffect/> */}
      {/* <ClassicComponentDidMount/> */}
      {/* <HookWithArrays/> */}
      {/* <HookWithObjects/> */}
      {/* <HookPrevValue/> */}
     {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
