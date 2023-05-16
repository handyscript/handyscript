# handy logical html

## Data injection/binding

you can use this `data` attribut inside any html element to pass data to every element inside the tag

```html
  <div name='myTag' data='{name:foo}'> any elements </div>
```

as u can see there is a name tag , u can use it for grabbing data like the following example

```html
  <div name="myTag" data="{name:'foo',color:'red'}">
    <p style="color:_( myTag.color )_;"> _name_ </p>
  </div>
```

result:

```html
<div>
  <p style="font-size:30px;"> foo </p>
</div>
```

## loop & in & of & item

you can use this `data` attribut inside any html element as name for the loop , the `in` attribut need to contain an array so the loop will go thro each item in the array , see the eximple .

```html
    <ul loop="color" in="['red','blue','green']">
      <li of="color" item></li>
    </ul>
```

**RESULT CODE**:

```html
<ul loop="color" in="['red','blue','green']">
  <li>red</li>
  <li>blue</li>
  <li>green</li>
</ul>
```

**RESULT RENDERED**:

- red
- blue
- green

you can see that there is `of` attribut as well as `item` , the `of` attribut is telling the element to refrnce the loop name u can understand more in this example

```html
    <div loop="y" in="['a','b']">
         <div loop="x" in="[0,1]">
              <span item of="x" ></span>
              <span item of="y" ></span>
         </div>
    </div>
```

**RESULT CODE**:

```html
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
```

**RESULT RENDERED**:

0a\
1a\
0b\
1b

as u sow `of` is really handy when u r trying to put loop inside another loop , each element contain an `item` attribut will set the text of it to the value of each item in the array , but what if the array is array of objects , look the following example to learn how to dial with that.

```html
<ul loop="persons" in="[{name:'zobair',age:20},{name:'whybe',age:20}]">
  <li of='persons' item="name"></li>
  <li of='persons' item="age"></li>
</ul>
```

**RESULT CODE**:

```html
<ul>
  <li>zobair</li>
  <li>20</li>
  <li>whybe</li>
  <li>20</li>
</ul>
```

**RESULT RENDERED**:

- zobair
- 20
- whybe
- 20

> what if you want to use the value inside an event element then use the `_(  )_` like:

```html
    <ul loop="color" in="['red','blue','green']">
      <li onclick="alert('_v-color_')" of="color" item></li>
    </ul>
```

**RESULT CODE**:

```html
    <ul>
      <li onclick="alert('red')">red</li>
      <li onclick="alert('blue')">blue</li>
      <li onclick="alert('green')">green</li>
    </ul>
```

**RESULT RENDERED**:

- red
- blue
- green

now will create a list of li each one if u click on it , it will alert the value of the item loop `_v-name_` , if u want the index u can get it by `_i-name_`
