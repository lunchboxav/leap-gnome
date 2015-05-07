$(document).ready(function(){
   /* Second console */
   var console2 = $('#terminal-emulation');
   //$('body').append(console2);
   var controller2 = console2.console({
     promptLabel: 'JavaScript> ',
     commandValidate:function(line){
       if (line == "") return false;
       else return true;
     },
     commandHandle:function(line){
         try { var ret = eval(line);
               if (typeof ret != 'undefined') return ret.toString();
               else return true; }
         catch (e) { return e.toString(); }
     },
     animateScroll:true,
     promptHistory:true,
     welcomeMessage:'Enter some JavaScript expressions to evaluate.'
   });
   controller2.promptText('5 * 4');
 });