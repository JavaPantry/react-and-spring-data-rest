The source code is available on the Manning website (www.manning.com/books/
react-quickly) and on GitHub (https://github.com/azat-co/react-quickly).
$ git clone https://github.com/azat-co/react-quickly.git

[Evernote MPS UI redesign](https://www.evernote.com/shard/s231/nl/30014402/f4bcb9d6-ebec-426b-9dbe-b3c0f8df0760)


####2.3 Working with properties (page 34)


```
properties 34–39, 460–461
    default in components 165–167
    in JSX 49–53 
    passing event handlers as 126–129
    passing in React Router
    268–269
    states and 80
    types of 167–174
props 69
propTypes property 82, 167–168, 460
```

    Properties can be used as follows:
        - To render standard HTML attributes of an element: href, title, style, class,
    and so on
        - In the JavaScript code of a React component class via this.props values; for
    example, this.props.PROPERTY_NAME (replacing PROPERTY_NAME with your
    arbitrary name)

#### 5.6.2 shouldComponentUpdate  (page 104)

For more reasons why React can’t perform smarter checks before calling componentWillReceiveProps-
(newProps), read the extensive article [(A => B) !=> (B => A)](https://reactjs.org/blog/2016/01/08/A-implies-B-does-not-imply-B-implies-A.html)
by Jim Sproch, React, January 8, 2016,


#### 12.1 What does Webpack do? (page 228)

Webpack knows how to deal with all three types of JavaScript module:
- [CommonJS](www.commonjs.org)
- [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)
- [ES6](http://mng.bz/VjyO)

## Redux

[Redux doc](https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/Actions.html) Russian translattion


#### JavaScript destructuring assignment syntax

The **_destructuring assignment_** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

**_Object destructuring_** - Basic assignment
```$xslt
var o = {p: 42, q: true};
var {p, q} = o;
console.log(p); // 42
console.log(q); // true
```

From book
```
const ReactRouter = require('react-router')
let { Router,
  Route,
  Link
} = ReactRouter
```
 