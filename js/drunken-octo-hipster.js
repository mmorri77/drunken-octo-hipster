/*
   README!
   I'm writing this as a quick and dirty way to get us going.  Often, when learning a new language or technique, 
   it can be helpful to play around with something working.  Making changes, seeing what happens, breaking things and 
   then fixing them, and otherwise tinkering can be an effective way to understand new material.  
   
   Toward that end, I decided it might be useful to set up a simple project base for us to hack on while we're finding 
   our legs for this project.  
   
   I chose Paper.js because it is relatively easy to get started with, it is the JS graphics library I personally have 
   the most experience with (so I can be of more help), and because it seems to meet our needs pretty well.  This does 
   not mean we have to stick with Paper as the framework of choice for this project, but it should provide us with a 
   good way to get our feet wet.  
   
   INSTRUCTIONS!
   To get started, simply load the accompanying index.html file into a modern (read: standards compliant) browser, and you 
   should see a colored circle in the center of the screen.  The html file itself is merely the container that provides us 
   with a structure to use when building our program.  The logic of the program is contained within this file, while the 
   functionality of Paper is contained within the paper.js file.  The index.html file creates the DOM (Document Object Model) 
   that will be manipulated by our code (this file) and links to the appropriate js files (this and paper.js).  
   
   Clear as mud?  
 */

/*
   Declarations:  
   
 */
 var circle; 

/*
   init()
   This function acts as an initialization routine for our game.  
 */
function init() {

    //Let's begin with a couple of simple shapes to play with.  
    /*
        First, we'll make a simple red circle.  In Paper.js, we have an object prototype 
        called 'Path' to use to draw with.  Paths in Paper are just like paths you might've 
        seen in drawing programs, such as Illustrator.  A path is a collection of points connected 
        by curves.  (Note:  a 'curve' might have a curvature of zero--i.e. a straight line.)
        
        The path object comes with some handy built-in constructors for common shapes.  Here, we're 
        going to use the Path.Circle(c,r) function, where c is the center and r is the radius.  
    */
    circle = new Path.Circle(view.center, 33);
    circle.fillColor = 'red';  // fill is the area encapsulated by a closed path
    circle.strokeColor = 'black';  // stroke is the border area of the path
    circle.strokeWidth = 3;  // thickness of stroke
}

/*
    onFrame(event)
    This function is a Paper.js built-in to assist with animation.  onFrame() is  
    a continuous loop that will update up to sixty times/frames per second.  
 */
function onFrame(event) {
    circle.fillColor.hue += 3;   // cycle the hue of the circle's fillColor
    pseudoGravity(project.activeLayer);  // a cheap, fake, gravity generator
}

/*
    onKeyUp(event)
    Respond to KeyUp events--i.e. releasing a pressed key
 */
function onKeyUp(event) {
    /*
        We'll just make a simple reset button to show how key events work.  
    */
    if (event.key == 'r') {
        circle.remove();
        init();
    }
}

/*
    pseudoGravity(layer)
    Make everything go down.  Note:  this does not take into account any sort of inertia, 
    acceleration, or other physics--just something to get us started...
 */
function pseudoGravity(layer) {
    for (var i = 0;i < layer.children.length;i++) {
        layer.children[i].position.y += 1;
    }
}

/*
 *  Calling init() will kick off the execution of our primary logic.  
 *  (Compare to main() in a C/Java program...)
 */
init();  // begin