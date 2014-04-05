/*
==============================================
Fashion Moodboard
==============================================

Made by Amechi Egbe

http://amechi101.github.io/moodboard

Questions, comments, concerns, love letters:
amechiegbe@gmail.com
==============================================
*/

uni_width = 120;
var stage = new Kinetic.Stage({
	container: 'container',
	width: 450,
	height: 450,
});
var layer = new Kinetic.Layer();


function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev)
{
	ev.preventDefault();
	data = ev.dataTransfer.getData("Text");
	img_received = document.getElementById(data);
	ratio = img_received.height / img_received.width;
	
	var c=document.getElementById("container");
	drop_x=event.pageX-c.offsetLeft;
	drop_y=event.pageY-c.offsetTop;
	
	var imageObj = new Image();
	imageObj.src = img_received.src;
	imageObj.onload = function() {
		var new_image = new Kinetic.Image({
		x: drop_x - uni_width / 2,
		y: drop_y - uni_width * ratio / 2,
		image: imageObj,
		width: uni_width,
		height: uni_width * ratio,
		draggable: true
		});

    // add the shape to the layer
    layer.add(new_image);

    // add the layer to the stage
    stage.add(layer);
  };
}
//saving to data base via Json
document.getElementById('save').addEventListener('click', function() {
        var json = stage.toJSON();
        var alertJson = alert('Saved!')
		console.log(json, alertJson);	
    }, false);
});