# কেন react useful ? কেন react lagbe ?

```sh
<div class="container">
      <div>
        <h1 id="display">0</h1>
        <div>
          <button id="button">Increment +</button>
        </div>
      </div>
    </div>

    <script>
      const display = document.getElementById("display");
      const button = document.getElementById("button");
      let counter = 0;

      button.addEventListener("click", function () {
        counter++;
        display.textContent = counter;
      });
      </script>

```

একটা মাত্র counter এর জন্যে এভাবে টিক আছে । কিন্ত
এটা লার্জার application এর জন্যে applicable না ।

যদি আমাদের aro একটা কাউন্টার এর দরকার হয় । তাহলে আমাদের aro একটা কাউন্টার ক্রিয়েট করা লাগবে । তারপর id o class golo change করা লাগবে । তারপর js file এ id o class গলো ছাগয়ে করা লাগবে

```sh
 <!-- কেন react useful ? কেন react lagbe ? -->
    <div class="container">
      <div>
        <h1 id="display">0</h1>
        <div>
          <button id="button">Increment +</button>
        </div>
      </div>
    </div>

    <!-- another counter create(if i create with same name it will show error) -->
    <div class="container1">
      <div>
        <h1 id="display1">0</h1>
        <div>
          <button id="button1">Increment +</button>
        </div>
      </div>
    </div>
    <script>
      const display = document.getElementById("display");
      const button = document.getElementById("button");
      let counter = 0;

      button.addEventListener("click", function () {
        counter++;
        display.textContent = counter;
      });

      //   another counter create(if i create with same name it will show error)
      const display1 = document.getElementById("display1");
      const button1 = document.getElementById("button1");
      let counter1 = 0;

      button1.addEventListener("click", function () {
        counter1++;
        display1.textContent = counter1;
      });
    </script>
```

এটা লার্জার application এর জন্যে applicable না ।সে জন্যে react আসছে

# whyNeedReactandProblemSolve এই branch e amrar react js add korbo (uporer counter system ta amra vanilla js diye korecilam ta akon amra korbo react js diye)

## how to add react js

[add react to a website](https://legacy.reactjs.org/docs/add-react-to-a-website.html)

### with cdn

```sh
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="counter.js"></script>

</body>
  </body>
</html>

```

counter js file

```
console.log(React);
console.log(ReactDOM);

const domContainer = document.querySelector('#root');
// render: ƒ render(element, container, callback)
// render() method 2ta parameter recive kore 1.ki print korbe 2. kon jaigai print korbo
ReactDOM.render('hello world', domContainer);

```

![Screenshot 2023-04-24 203323](https://user-images.githubusercontent.com/48369328/234030878-285ac780-1f7f-41c3-bf9b-e1f146fb8062.png)

both are object

React হল htmlগলো generate করবে আর create করবে

![Screenshot 2023-04-24 204620](https://user-images.githubusercontent.com/48369328/234032377-ba905adc-cef0-45dc-b66a-119315f7721e.png)

ReactDOM হল আমাদের browser এর dom এ render করবে যেন আমরা ডেকতে পাই

![Screenshot 2023-04-24 204824](https://user-images.githubusercontent.com/48369328/234033089-54cc0e6a-c4ba-4a61-941e-103ef3e736c8.png)

তাহলে ২ টা আলাদা কেন ? কারণ react সুদমাত্র browser এর জন্যে বানান হয় নাই । react mobile এর জন্য ও বান্নান হয়েছে । তখন আমরা ReactDOM এর পরিবর্তে ReactNative use করব

আমরা always use করব react । ৯০% কাজ করবে react . এবং বাকি কাজ করবে ReactDOM display করার জন্যে

#note
ReactDOM.render is no longer supported in React 18

render: ƒ render(element, container, callback)

result

![Screenshot 2023-04-24 205214](https://user-images.githubusercontent.com/48369328/234034021-2d68204c-b905-4f37-8f64-227703e2fecd.png)

### ReactDOM diye amra sodomatro text render korechi . কিন্তু আমরা চাইলে যে কুন কিছ render করতে পরি । তার জন্যে আমরা use করব React library . react amader kicho useful function diyeche jegolo diye amra react element banate pari

# react.createElement()

lets create first react element with react.createElement

```sh
console.log(React);
console.log(ReactDOM);

const domContainer = document.querySelector('#root');
const myElemnt = React.createElement("div",null,"hello world3");

ReactDOM.render(myElemnt, domContainer);
```

React.createElement এর মদ্যমে আমরা আমদের এলিমেন্ট create করলাম. এখানে আমরা React.createElement() এর মদ্যে ৩ টা parameter পাঠাবো । । ১.কি এলিমেন্ট ক্রিয়েট করতে চাচী । আমরা div এলিমেন্ট create করতে চআছি ২.কি datatype পাস করতে হবে ৩.সেই এলিমেন্ট এর ভেতরে কি কন্টেন্ট থাকবে।

এখানে আমরা react এলিমেন্ট create করলাম । html এলিমেন্ট না

last এ আমরা ReactDOM কে বলে দিলাম myElement কে root div এ render কর  
ReactDOM.render(myElemnt, domContainer);
![Screenshot 2023-04-24 205414](https://user-images.githubusercontent.com/48369328/234034603-10d49f58-43e5-4b34-8863-fc590a498229.png)

## কিভাবে React.createElement() এর মদ্যমে div এর মদ্যে p add korbo

```sh
    <div id="root"></div>
    <div id="root2"></div>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="counter.js"></script>
```

counter.js

```sh
console.log(React);
console.log(ReactDOM);

const domContainer = document.querySelector('#root');
const myElemnt = React.createElement("div",null,"hello world3");
ReactDOM.render(myElemnt, domContainer);


// div এর মদ্যে p add করতে চাচী
const domContainer2 = document.querySelector('#root2');
const myElemnt2 = React.createElement("div", null, React.createElement("p",null,"hello world4"));
ReactDOM.render(myElemnt2, domContainer2);
```

![Screenshot 2023-04-24 205604](https://user-images.githubusercontent.com/48369328/234035199-e2b1c2e0-130e-4c48-b290-a8ff1e969448.png)

## যদি div এর মদ্যে ২ টা p দিতে চাই

```sh
 <body>
    <div id="root"></div>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="counter.js"></script>
  </body>
```

counter.js

```sh
const domContainer = document.querySelector('#root');
const myElemnt = React.createElement("div", null,[
    React.createElement("p", null, "hello world"),
    React.createElement("p", null, "hello world")
]);
ReactDOM.render(myElemnt, domContainer);
```

React library টা any react element create kore dei আর
ফাইনালি ReactDOM react element recive করে সেটা কে আমদের browser dom এর জন্যে html element বানিয়ে দেয় মানে browser e render kore dei

ReactDOM এর জায়গায় মোবাইল এর জন্যে আমরা ইউজ করতে পরি ReactNative

# এখন question হল react দিয়ে আমরা এভাবে এলিমেন্ট create করে আমাদের লাভ কি ?

```sh
const domContainer = document.querySelector('#root');
const myElemnt = React.createElement("div", null,[
    React.createElement("p", null, "hello world"),
    React.createElement("p", null, "hello world")
]);
ReactDOM.render(myElemnt, domContainer);
```

এভাবে করলে জিনিসটা আরো কোটিং হয়ে গেল । আমরা যখন html লিখি dom কিন্ত আমাদের এভাবে এইচটিএমএল এলিমেন্ট ক্রিয়েট করে

suppose:

```sh
const domContainer = document.querySelector('#root');
let p = document.createElement("p");
p.innerHTML = "hello vanilla js";
domContainer.appendChild(p);
```

result

![Screenshot 2023-04-24 205754](https://user-images.githubusercontent.com/48369328/234035696-412c60d2-e30c-4744-af0f-4ad72f24add6.png)

html এ আমরা এভাবে ই লিখী । কারণ এই সীনটেক্স টা মদের জন্যে সহজ

```sh

<div id="root">
   <p>hello vannilla js</p>
</div>

```

আমরা এভাবেই লিখী কিন্ত ব্রাউজার আমাদের এইচটিএমএল এলিমেন্ট parse kore createElement er madoome element create kore

```sh
const domContainer = document.querySelector('#root');
   let p = document.createElement("p");
   p.innerHTML = "hello vanilla js";
   domContainer.appendChild(p);

```

html সদমাত্র আমাদের এই কাজটা কে সহজ করে দেয়
একটা সহজ সীটেক্টটিক সুগার দেয় যাতে আমরা সহজে UI টা বানাতে পরি

react o same ভাবে তার createElement function diye নিজের জন্যে এলিমেন্ট বানিয়ে নেই এবং সব এলিমেন্ট জোড়া লাগিয়ে তার একটা seperate DOM create kore । এটাকে বলে VIRTUAL DOM

আমরা html element বানাই html markup syntex diye . টিক তেমনি react o amader তাদের একটা markup syntex দিয়েছে যেটা দিয়ে আমরা markup syntex element বানাতে পারি । এটাকে JSX - JAVASCRIPT XML বলে । যেটা ডেকতে ৯০% html এর মতো কিন্ত html না ।

JSX use করে আমরা react element banate pari

```sh
// ! create react element using jsx
const myElement = (
    <div>
        <h1 id="display">0</h1>
        <div>
            <button>Increment + </button>
        </div>
    </div>

)
```

first bracket এর ভেতরে রেখে একটা variable এর ভেতরে রাখলে এটা createElement call kore kore একটা react এর এলিমেন্ট ক্রিয়েট করে দিবে

jsx যদি না তাকত তবে আমাদের এভাবে React.createElement() লিকতে হয়তো

```sh

React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    {id : display,
    },
    "0"
  ),
  React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        id : "button",
      }
      "Increment +"
    )

  )
)


```

কিন্ত কথা হচ্ছে এই কোডেটা জাভাস্ক্রীপ্ট ফাইল এ লিকচি কিন্ত জাভাস্ক্রীপ্ট jxs কোড বুজে না

```sh
const myElement = (
    <div>
        <h1 id="display">0</h1>
        <div>
            <button>Increment + </button>
        </div>
    </div>

)
ReactDOM.render(myElement, domContainer);
```

সেই জন্যে আমাদের use করতে হবে transpiler যেমন-bable ।
babel এই jsx কে vanilla javascript এ transpile করবে

![Screenshot 2023-04-24 211737](https://user-images.githubusercontent.com/48369328/234041263-73d5c377-ffde-487a-a507-57d3865373e7.png)

transpile করার জন্যে আমরা babel ওয়েবসাইট এর সেটাপ এ গিয়ে লিংক টা কপি করে আমাদের index। html ফাইল rakbo

https://babeljs.io/setup/#installation

```
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel" src="counter.js"></script>
```

<script type="text/babel" src="counter.js"></script>

type="text/babel" টাইপ="টেক্সট/বাবেল" দিব

সদারণত থাকে type="text/js"

counter.js file ta babel diye gore asbe

```
const myElement = (
    <div class="container">
        <h1 id="display">0</h1>
        <div>
            <button>Increment + </button>
        </div>
    </div>

)
ReactDOM.render(myElement, domContainer);
```

### still why we use react ?

আমাদের এই কাউন্টার এর বাটন এ ক্লিক করলে increment হবে তা কিভাবে করব । এই ফাংশনালিটি গুলো কোথায়
অদ্য করব
