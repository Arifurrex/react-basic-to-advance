কেন react useful ? কেন react lagbe ?

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

এটা লার্জার প্রয়োগ এর জন্যে আপ্পলয়কবলে না ।সে জন্যে react আসছে
