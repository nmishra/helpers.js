/**
 * Compares two objects recursively to return their equality based on the values contained by the object.
 */

Ext.namespace('Ext.ux.util');

/**
 * Custom routines for working with objects.
 */
(function(){
     /**
       * Compares two objects to determine if they are identical.
       * @param {Object} o1
       * @param {Object} o2
       * @return Boolean
       */
    isEqual = function (o1,o2){
	if (!(Ext.isObject(o1) && Ext.isObject(o2))) return false;
	//pass true to isEqualTCO as the first default value for accumulator
        // is tail call optimized. it returns immediately with the next functional call to be made
        return isEqualTCO(o1,o2, true)
    }

    //private function
    /**
     * This function adds Keys methods to ES-5 non-compliant browsers
     */

    addKeysMethodToObject = function(){
	Object.keys = Object.keys || (
	    function(){
		return function(o){
		    if (typeof o !== 'object' && typeof o !== 'function' || o === null)
			throw new TypeError("Object.keys called on a non-object");
		    var result = [];
		    for (var name in o){
			if(Object.hasOwnProperty.call(o, name)) {
			    result.push(name);
			}
		    }
		    return result;
		}		
	    });
    }


    /*  private function
	This is a Tail Call Optimized function. 
	This function doesn't take care of prototype equality or cyclic references.
	This function will not have a stackoverflow and can handle any amount of nested objects comparison
	
	Internal Working Description:
		There is no recursion here. Each caller is passed another function call if there 
		is an object found at the key.
    */	
    isEqualTCO = function (obj1,obj2, accumulator){
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        	return false;
        } 
    	for(var key in obj1){
            var   obj1Value = obj1[key]
            	, obj2Value = obj2[key];
            
            
            if(!Ext.isObject(obj1Value) 
            	&& !Ext.isObject(obj2Value)){
            		if(obj1Value !== obj2Value){
                    	accumulator = false & accumulator ;
                    	return accumulator;
            		}
            }else{
               	return isEqualTCO(obj1Value,obj2Value, accumulator);
            }
        }
        return true;
    }

    var util = Ext.extend(Object, 
	{
	    constructor : function(options){
		util.superclass.constructor.call(this, options || {});
		addKeysMethodToObject();
	    }

	    , compareObject : function(o1,o2) {
		return isEqual(o1,o2);
	    }
	    
	});  

    Ext.ux.util.Object = new util();
})()
