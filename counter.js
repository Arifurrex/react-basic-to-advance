const domContainer = document.querySelector('#root');
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