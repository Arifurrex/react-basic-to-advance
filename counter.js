const domContainer = document.querySelector('#root');
// ! create react element using jsx
const Increment = () => {
    // const reactState = React.useState(0);
    const [counter,setCounter] = React.useState(0);
    return(<div className="container">
        <h1 id="display">{counter}</h1>
        <div>
            <button id="button" onClick={()=>setCounter(counter + 1) }> Increment + </button>
        </div>
    </div>)
};
ReactDOM.render(
    <div>
    <Increment />
    <Increment />
    <Increment /> 
    </div>
   ,
    domContainer
   );


