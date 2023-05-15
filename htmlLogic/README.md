# How Logical Html works:
## data 
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
it will render 
```html 
  <div name="myTag" data="{name:'foo',color:'red'}">
    <p style="color:red;"> foo </p>
  </div>
```
