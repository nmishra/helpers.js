Ext.ns('Ext.aop');

(function(){
	 var pointCut = Ext.aop.PointCut = Ext.extend(Object, 
		 {
	 		constructor : 
	 			function(options){
		 			pointCut.superclass.constructor.call(this,options || {});
	 	 		}
 			joinPoints : 
 				/*
 				 * Takes a map object with the format of 
 				 * {
 				 * 	execution : ['set*', 'get*']
 				 * 
 				 * }
 				 * 
 				 * */
 				function(pcdMap){
 					//take the pcdMap and create joinPoints for each PCD
 				
 				}
 		 })
	 ,joinPoint = Ext.aop.JoinPoint = Ext.extend(Object, 
 		{
 			constructor : 
 				function(options){
 					joinPoint.superclass.constructor.call(this,options || {});
 				}
 			execution :
 				//execution primitive pointcut designator
 				//takes a function signature e.g. set* will take all function starting with set
 				function(signature){
 				
 				}
 			object :
 				//will create a PCD at the object level
 				function(obj){
 				
 				}
 			within :
 				//PCD for Namespace
 				function(ns){
 				
 				}
 			
 		})
	 ,advice = Ext.aop.Advice = Ext.extend(Object,
 		{
 			constructor : 
 				function(options){
 					advice.superclass.constructor.call(this,options || {});
 				}
 			,before : 
 				//A before advice executes fn at the join points defined by pointCut. It doesn't 
 				//stop the execution of the target function(s)
 				function(fn, pointCut){
 				
 				}
 			,after : 
 				//An after advice executes fn at the join points defined by pointCut. It doesn't 
 				//stop the execution of the target function(s)
 				function(fn,pointCut){
 				
 				}
			//An around advice executes fn at the join points defined by pointCut. It stops the execution
 			// of the target function(s) and bypasses the target function(s)
 			,around : 
 				function(fn, pointCut){
 				
 				}
 			
 			,afterError :
 				//An afterError advice executes fn at the join points defined by pointCut. 
 				//only if an error is thrown
 				function(fn, pointCut){
 				
 				}
 			
 		})
	 ,aspect = Ext.aop.Aspect = Ext.extend(Object,
		{
		 	constructor :
		 		function(options){
		 			aspect.superclass.constructor.call(this,options || {});
		 		}
	 		,PointCuts : []
	 		
	 		,weave : 
	 			//onDomReady weave, goes through all pointCuts and weaves the advice defined for those pointCuts
	 			function(fnToWeave, pointCut){
	 			
	 			}
	 
		})
	 
})()