random_number = math.floor((math.random_number()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById('sketch_name').innerHTML = 'Sketch to be drawn:'+sketch;


timer_counter=0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function updateCanvas(){
    background("white");
    random__number= math.floor((math.random()* quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random__number]);
    document.getElementById('sketch_name').innerHTML = 'sketch to be drawn:'+ sketch;}

    function draw(){
        check_sketch()
        if(drawn_sketch==sketch)
        {
        answer_holder = "set" 
        score++;
        document.getElementById('score').innerHTML='score:'+ score;
        }
    }
    function setup(){
        canvas = createCanvas(280,280);
        canvas.center();
        background("white");
        canvas.mouseReleased(classifyCanvas);
    }

    function draw(){
        strokeWeight(8);
        stroke('pink');
        if (mouseIsPressed){
            line(pmouseX,pmouseY,mouseX,mouseY);
        }
    }

    function classifyCanvas(){
        classifier.classify(canvas, gotResult);
    
    }

    function gotResult(error, results){
        if (error) {
            console.error(error);
    
        }
        console.log(results);
        document.getElementById('label').innerHTML = 'label:' + results[0].label;
    
        document.getElementById('confidence').innerHTML = 'confidence:' + Math.round(results[0].confidence*100) + '%';
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
    

    function check_sketch(){
        timer_counter++;
        document.getElementById('time').innerHTML = "timer:"+ timer_counter;
        console.log(timer_counter)
        if(timer_counter=="complrted" (answer_holder=="set"))
        {
            timer_check="";
            answer_holder="";
            updateCanvas();
        }
    }