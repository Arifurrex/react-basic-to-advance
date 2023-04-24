const domContainer = document.querySelector('#root');
// const myElemnt = React.createElement("div", null,[
//     React.createElement("p", null, "hello world"),
//     React.createElement("p", null, "hello world")
// ]);
// ReactDOM.render(myElemnt, domContainer);


//! vanilla js
// let p = document.createElement("p");
// p.innerHTML = "hello vanilla js";
// domContainer.appendChild(p);



// ! create react element using jsx
const myElement = (
    <div class="container">
        <h1 id="display">0</h1>
        <div>
            <button>Increment + </button>
        </div>
    </div>
    
)
ReactDOM.render(myElement, domContainer);