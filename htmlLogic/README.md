# handy logical html:
## data / name
you can use this <kbd>data</kbd> attribut inside any html element to pass data to every element inside the tag
```html
  <div name='myTag' data='{name:'foo'}'> any elements </div>
```
as u can see there is a name tag , u can use it for grabbing data like the following example

```html
  <div name="myTag" data="{name:'foo',color:'red'}">
    <p style="color:_( myTag.color )_;"> _name_ </p>
  </div>
```
### result
<div>
  <p style="font-size:30px;"> foo </p>
</div>


## loop / in / -for / item

you can use this <kbd>data</kbd> attribut inside any html element as name for the loop , the <kbd>in</kbd> attribut need to contain an array so the loop will go thro each item in the array , see the eximple .
```html
    <ul loop="color" in="['red','blue','green']">
      <li -for="color" item></li>
    </ul>
```
### result 

<ul loop="color" in="['red','blue','green']">
  <li>red</li>
  <li>blue</li>
  <li>green</li>
</ul>

you can see that there is <kbd>-for</kbd> attribut as well as <kbd>item</kbd> , the <kbd>-for</kbd> attribut is telling the element to refrnce the loop name u can understand more in this example
```html
    <div loop="y" in="['a','b']">
         <div loop="x" in="[0,1]">
              <span -for="x" item></span>
              <span -for="y" item></span>
         </div>
    </div>
```
### result
<div >
     <div >
          <span>0</span>
          <span>a</span>
     </div>        
     <div >
          <span>1</span>
          <span>a</span>
     </div>
     <div >
          <span>0</span>
          <span>b</span>
     </div>
     <div >
          <span>1</span>
          <span>b</span>
     </div>
</div>
as u sow <kbd>-for</kbd> is really handy when u r trying to put loop inside another loop , each element contain an <kbd>item</kbd> attribut will set the text of it to the value of each item in the array , but what if the array is array of objects , look the following example to learn how to dial with that.

```html
<ul loop="persons" in="[{name:'zobair',age:20},{name:'yassin',age:20}]">
  <li item="name"></li>
  <li item="age"></li>
</ul>
```
### result
<ul>
  <li>zobair</li>
  <li>20</li>
  <li>yassin</li>
  <li>20</li>
</ul>

what if u want to use a value inside an event element then use the <kbd>\_(  )\_</kbd>

```html
    <ul loop="color" in="['red','blue','green']">
      <li onclick="alert('_v-color_')" -for="color" item></li>
    </ul>
```
### result
now will create a list of li each one if u click on it , it will alert the value of the item loop <kbd>\_v-name\_</kbd> , if u want the index u can get it by <kbd>\_i-name\_</kbd>



