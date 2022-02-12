x = 0;
y = 0;
draw_apple = "";
speak_data = "";
apple="";
n=0;
screen_high= 0;
screen_width=0;
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload()
{
     apple=loadImage('apple_image.jpg');
}
function start()
 {
      document.getElementById("status").innerHTML = "System is listening please speak"; 
      recognition.start();
     }
      recognition.onresult = function(event)
       {
     console.log(event);
      var content = event.results[0][0].transcript; 
     document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    n = Number(content);
     if(Number.isInteger(n))
     {
           document.getElementById("status").innerHTML = "Started drawing apple ";
           draw_apple = "set";
     }
      else
     {
           document.getElementById("status").innerHTML = "The speech has not recognized a number ";
 }

}
     
function speak()
{
     var synth = window.speechSynthesis;
     var utterThis = new SpeechSynthesisUtterance(speak_data); 
     synth.speak(utterThis); 
     speak_data = ""; 
}

     function setup()
     {
         canvas = createCanvas(900, 600);
         screen_width=window.innerWidth;

         screen_height = window.innerHeight;
         canvas = createCanvas(screen_width,
         screen_height-150); 
         canvas.position(0,150);
     }
     function draw()
{ 
     if(draw_apple == "set")
{ 
     for(i=1; i<=n; i++)
     {
          x = Math.floor(Math.random() * 700);
          y = Math.floor(Math.random() * 400); 
          image(apple, x, y, 50, 50);
     }
     document.getElementById("status").innerHTML = n + "Apples drawn successfully";
     speak_data = n + "Apples drawn"; speak(); draw_apple = "";

}
}