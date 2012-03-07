# `helpers.js`

A helper javascript library for extJS.

Please send a pull request or open an issue if you have any problems

## Usage

The main helper functionality is provided by the
`Ext.ux.util` namespace. 

`Ext.ux.util.CompareObject` provides a tail call optimized recursive object equality check.

```javascript
var obj1 = {foo: 'bar'}
   ,obj2 = {foo: 'bar'}
   ,equality = Ext.ux.util.Object.compareObject(obj1,obj2);
console.log(equality);	
```

## Coming Soon
`Ext.aop.Aspect` will provide AOP for extJS libraries. 

The above will weave the code into functions starting with set and get within the Ext.aop namespace.

## Get Started
```shell
git clone git@github.com:nmishra/helpers.js.git
```
run test.html in a browser and check the console.

## License

Released under the MIT License:
<http://www.opensource.org/licenses/mit-license.php>
