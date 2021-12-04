random_number = math.floor((math.random_number()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById('sketch_name').innerHTML = 'Sketch to be drawn:'+sketch;


timer_counter=0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;


function updateCanvas(){
    background("white");
    random__number= math.floor((math.random()* quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random__number];
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
    }

    function check_sketch(){
        timer_counter++;
        document.getElementById('time').innerHTML = "timer:"+ timer_counter;
        console.log(timer_counter)
        if(timer_counter=="complrted" answer_holder=="set")
        {
            timer_check="";
            answer_holder="";
            updateCanvas();
        }
    }

