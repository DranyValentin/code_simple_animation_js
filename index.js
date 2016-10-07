(function()
{
  "use strict"
  
  var $el = document.querySelector('div') // Animated element
  var currentPosition = 0
  var step = 1 //Speed of motion element (Скорость перемещаемого объекта)
  var requestAnimationFrameID = requestAnimationFrame(doAnim)
  
  function doAnim()
	{
		$el.setAttribute('style', 'transform: ' + currentPosition)

		if ( step >= 200 ) // Statement, when need stop
		{
		  cancelAnimationFrame(requestAnimationFrameID);
	    return;
		}
    
		currentPosition += step

		requestAnimationFrameID = requestAnimationFrame(doAnim) // Next iteration
	}
  
  
})()
