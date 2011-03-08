/*
 * TypeHelpers version 1.0
 * Zoltan Hawryluk, Nov 24 2009.
 * @see http://www.useragentman.com/blog/2009/11/29/how-to-detect-font-smoothing-using-javascript/
 * 
 * Released under the MIT License. http://www.opensource.org/licenses/mit-license.php
 * 
 * Works for 
 *   - IE6+ (Windows), 
 *   - Firefox 3.5+ (Windows, Mac, Linux), 
 *   - Safari 4+ (Windows, Mac OS X), 
 *   - Chrome 3.0+ (Windows).
 * Opera 10.10 and under reports unknown support for font-smoothing.
 *
 * Modified by Christian Beier (www.beier-christian.eu) to detect the ClearType technology.
 * 
 * Required: jQuery 1.3.x
 * 
 * 
 * METHODS
 * -------
 * 
 * hasSmoothing() returns:
 *     true if font smoothing is enabled
 *     false if font smoothing isn't enabled
 *     null if it cannot detect if it's on or not.
 *     
 * addClasses() adds the following classes to the html tag:
 *     "hasFontSmoothing-true" if font smoothing is enabled
 *     "hasFontSmoothing-false" if it isn't
 *     "hasFontSmoothing-unknown" if it cannot detect it.
 *       
 */

var TypeHelpers = new function(){
  var me = this;
  
  me.hasSmoothing = function(){
    // IE has screen.fontSmoothingEnabled - sweet!      
    if (typeof(screen.fontSmoothingEnabled) != "undefined") {
      return screen.fontSmoothingEnabled;  
    } else {
	    try {
      // Create a 35x35 Canvas block.
        var canvasNode = document.createElement("canvas");
        canvasNode.width = "35";
        canvasNode.height = "35"
        
        // We must put this node into the body, otherwise 
        // Safari Windows does not report correctly.
        canvasNode.style.display = "none";
        document.body.appendChild(canvasNode);
        var ctx = canvasNode.getContext("2d");
        
        // draw a black letter "O", 32px Arial.
        ctx.textBaseline = "top";
        ctx.font = "32px Arial";
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        
        ctx.fillText("O", 0, 0);
        
        // start at (8,1) and search the canvas from left to right,
        // top to bottom to see if we can find a non-black pixel.  If
        // so we return true.
        for (var j = 8; j <= 32; j++) {
          for (var i = 1; i <= 32; i++) {
            var imageData = ctx.getImageData(i, j, 1, 1).data
            var alpha = imageData[3];
                                    
            if (alpha != 255 && alpha != 0 && alpha > 180) {
              return true; // font-smoothing must be on.
              }
            }
 
          }
         
          // didn't find any non-black pixels - return false.
          return false;
        } 
        catch (ex) {
          // Something went wrong (for example, Opera cannot use the
          // canvas fillText() method.  Return null (unknown).
          return null;
        }
      }
    }
   
  $(document).ready(function() {
    var result = me.hasSmoothing();
    if (result == true) {
      $('html').addClass('hasFontSmoothing-true');
    } else if (result == false) {
      $('html').addClass('hasFontSmoothing-false');
    } else { // result == null
      $('html').addClass('hasFontSmoothing-unknown'); 
    }
  });
}
