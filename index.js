(function()
{
	"use strict"

	console.log("File 'index.js' work")

	var $el = document.querySelector('div') // Animated element
	var currentPosition = 0
	var step = 1 //Speed of motion element (Скорость перемещаемого объекта)
	var requestAnimationFrameID = requestAnimationFrame(doAnim)

	function doAnim()
	{
		$el.setAttribute('style', 'transform: translate(' + currentPosition + 'px, 0)')

		if ( currentPosition >= 200 ) // Statement, when need stop
		{
		  cancelAnimationFrame(requestAnimationFrameID);
	    return;
		}

		currentPosition += step

		requestAnimationFrameID = requestAnimationFrame(doAnim) // Next iteration
	}
  
  
})()
