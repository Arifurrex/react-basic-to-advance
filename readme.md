React JS এর ক্ষেত্রে আমরা বারবারই একটা fancy word শুনে থাকি, সেটা হলো Virtual DOM! যে myth টা মানুষের মধ্যে ঢুকে আছে সেটা হলো - Virtual DOM, আমাদের চির পরিচিত browser DOM এর থেকে অনেক fast এবং একারণে vanilla DOM এর থেকে React অনেক fast User Interface Render করে! আসলেই কি তাই? React কি শুধুই Performance achieve করার জন্যই Virtual DOM use করে?

আমরা শুনে থাকি DOM(document object model) টা slow and inefficient । কিন্তু এটা টিক না ।

react এর dom এর ক্ষেত্রে বলা হয় এটা dom(document object model ) এর চেয়ে বেশি efficient and fast way তে view render করতে পারে ।

_*we will discuss here why reactDOM faster and efficent.
what is vartual dom
why we will choose react *_

## DOM কি আসলেই slow ?

React JS এর ক্ষেত্রে আমরা বারবারই একটা fancy word শুনে থাকি, সেটা হলো Virtual DOM! যে myth টা মানুষের মধ্যে ঢুকে আছে সেটা হলো - Virtual DOM, আমাদের চির পরিচিত browser DOM এর থেকে অনেক fast। কথাটা সম্পর্ন ভুল ।

truth is DOM আসলে যতয়েষ্ট fast । dom theke কোন element add or রিমুভ করা simple একটা জাভাস্ক্রীপ্ট object এ property set করার মতো ।

যে process টা slow তা হল dom change হওয়ার পরে আমাদের চোখের সামনে সেটাকে দেখানোর জন্যে browser কে যে কাজটা করতে হয় সেই
process টা slow

সেটা বুজতে হলে আমাদের ব্রাউজার এর workflow টা বুজতে হবে

## browser workflow

1. browser যখন html file receive করে ব্রাউজার এর render enginee সেটাকে parse করে (html parse ) এবং একটা dom tree বানাই । dom tree তে সব html এলিমেন্ট এক এক টা node হিসাবে থাকে
   ![Screenshot 2023-04-28 210526](https://user-images.githubusercontent.com/48369328/235184188-3e5e9477-dfcc-49e1-bb1c-2f01df0075ee.png)

2. একই সাথে html এর সাথে যে css style গুলো এসেছিল সেগুলো আবার css parser এর কাছে যায় এবং সেটাকে parse করে document object (dom) এর মতো আর একটা model বানাই তাকে cssom বলে ![Screenshot 2023-04-28 211549](https://user-images.githubusercontent.com/48369328/235186814-acd7d2b2-4500-4526-bb65-fbb5ba4c58e5.png)

তাহলে dom হল html এর object model আর ccsom হল style এর অবজেক্ট মডেল ![Screenshot 2023-04-28 212147](https://user-images.githubusercontent.com/48369328/235188821-46dde417-d383-4a92-8f75-3f5707c80545.png)

3. এই parse css আর parse html মিলে আর একটা render tree নামে tree বানাই ![Screenshot 2023-04-28 213135](https://user-images.githubusercontent.com/48369328/235190632-c583ee42-d63c-4e51-b2c0-9fda1165d37a.png)
4. এই render tree কে layout নামের একটা prase এর মদ্যে দিয়ে যেতে হয় ![Screenshot 2023-04-28 214107](https://user-images.githubusercontent.com/48369328/235192812-14fa0acb-0671-4211-b740-2678588c9b80.png) এই layout prase এ প্রতিটা render tree র element এর coordinate হিসেব করে element গুলোর সাথে attatch হয়ে যায় যেন screen এর কোন জায়গায় actually সেটা print হবে সেটা সে বুজতে পারে ।
5. যেহেতু এখন render tree এর কাছে element আছে সেগুলোর style আছে এবং কোন জায়গায় print করতে হবে সেগুলোর coordinate আছে তাই এবার last prase painting এ paint বা print করে দেয় যাতে আমরা দেখতে পরি বা display করতে পরি!

![Screenshot 2023-04-28 215429](https://user-images.githubusercontent.com/48369328/235195723-6a5042dd-f1bf-4254-87f4-29926551a828.png)

এটা হল ব্রাউজার এ কোন কিছু render হওয়ার process ।

- যখন আমরা dom এর কোন কিছু change অথবা update করি browser কে এই render tree আবার create করতে হয় । সমস্ত style information মানে css আবার recalculate করতে হয় এবং ফাইনালি paint করতে হয় । এই কাজগুলো মূলত slow

![Screenshot 2023-04-29 103151](https://user-images.githubusercontent.com/48369328/235283504-1ba186c4-a4fd-4f5a-9ac7-515a9f4ef628.png)

# optimize

currently single page is very popular rather than uwsing multiple page. user exprience এর জন্যে page reload করা এখন কেও
like করে না । এক্ষেত্রে একটা page এ আমাদের অনেক অনেক dom operation আমাদের handle করতে হয়.

facebook and gmail are like single page website. user হিসাবে ফেসবুক এর একটা বাটন এ ক্লিক করলে screen অনেকগুলো জায়গায় change হয় মানে অনেকগুলো জায়গায় dom operation হয়ে থাকে । এক পেইজ এ অনেকগুলো dom এলিমেন্ট থাকাতে সেগুলোকে continously and freequently change করতে থাকলে একসময় definatly
সেগুলো performance কে impact করবে ।

তাহলে dom ই যদি আমরা ইউজ করি । তবে maximum আমাদের কি করতে হবে। আমরা dom কে 2 ভাবে optimize করতে পরি

1. batch update
2. যত কম dom operation করা যায়

## _batch update:_

_fast process_

```sh
let array = [];
increment = 0;
let container = document.querySelector('.container');

while (increment < 10000) {
    array.push(increment++);
};

container.innerHTML = array.join(' ');

```

এখানে container.innerHTML = array.join(' '); এই dom operationটা একবার হচ্ছে। সেই কারণে এই codeটা fast। এটাকে batch আপডেট বলা হয়

_slow process_

```sh
let array = [];
increment = 0;
let container = document.querySelector('.container');

while (increment < 10000) {
    increment++;
    container.innerHTML +=' ' + increment;
};

```

১০০০০ বার ই container.innerHTML +=' ' + increment; এই কোডেটা বা dom operation টা চালানো হচ্ছে.১০০০০ বার dom অপারেশন টা চালানোর জন্যে এই code টা slow

actually time javascript করতে লাগে নাই । time লেগেছে dom operation টা করতে ।

infact dom কে update করতে তার সময় লাগে নাই । সময় লেগেছে কারণ তাকে browser এর repaint process এর মধ্যে দিয়ে ১০০০০ বার যাওয়া লাগছে

so, virtual dom ছাড়াও batch update করা যায়। batch আপডেট টা আমরা খেয়াল করে করলে আমরা achive করতে পরি। infact সেটা আমরা dom ডিরেক্ট manipulate করে করতে পরি ।

কিন্তু exectly যে element টা change হয়েছে সেটাকে update করার এই beauty টা achive করার জন্যে reactকে কি করতে হবে update করার আগের অবস্তা আর update করার পরের অবস্তা দুইটা separate snapshot রাখতে হবে যেন সে দুইটার মধ্যে compare করতে পারে । react সেই কাজটাই করে । কিন্ত dom এর মধ্যে থেকে সেটা করা problematic । সেজন্যে react যে কাজটা করেছে তা হল সে নিজের মতো তার আলাদা dom বানিয়ে নিয়েছে । যেখানে তার এসব repaint করার জামেলা নাই সে সেখানে javascript object নিয়ে কাজ করতে পারবে । যেখানে তার ব্রাউজার এর নিয়ম মানতে হবে না । just simple raw javascript object বানিয়ে সে browser এর dom এর একটা replica তোয়রি করে নিয়েছে যেটার নাম হল virtual dom
এই virtual dom এ কাজ করা অনেক cheap । browser এর dom এর মতো expensive না । এটা react developer দের সম্পর্ন control এ থাকছে । এখানে browser এর dom এর মতো repaint করার কোন জামেল থাকছে না।
