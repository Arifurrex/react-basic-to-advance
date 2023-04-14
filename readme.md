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

![Screenshot_1](https://user-images.githubusercontent.com/48369328/232146887-e6c96654-1496-4c63-94b2-f6f49824f153.png)

both are object

React হল htmlগলো generate করবে আর create করবে

![Screenshot_2](https://user-images.githubusercontent.com/48369328/232147805-30d5c220-c8a7-4464-a4c0-52fec3ddb430.png)

ReactDOM হল আমাদের browser এর dom এ render করবে যেন আমরা ডেকতে পাই

![Screenshot_3](https://user-images.githubusercontent.com/48369328/232148122-12460a38-0c89-4eec-9bec-cf8546d4c3bd.png)

তাহলে ২ টা আলাদা কেন ? কারণ react সুদমাত্র browser এর জন্যে বানান হয় নাই । react mobile এর জন্য ও বান্নান হয়েছে । তখন আমরা ReactDOM এর পরিবর্তে ReactNative use করব

আমরা always use করব react । ৯০% কাজ করবে react . এবং বাকি কাজ করবে ReactDOM display করার জন্যে

#note
ReactDOM.render is no longer supported in React 18

render: ƒ render(element, container, callback)

result

![Screenshot_4](https://user-images.githubusercontent.com/48369328/232157934-314dfb80-59f3-4915-8f13-534e88e01d52.png)
