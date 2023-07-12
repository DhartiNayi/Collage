<?php
class car{
    public $color;
    public $model;
    public function __construct($color,$model){
        $this->color = $color;
        $this->model = $model;
    }
    public function message(){
        return "My Car Is A ".$this->color." ".$this->model."!";
    }
}
$mycar = new car("Black","Range Rover");
echo $mycar -> message();
echo "<br>";
$mycar = new car("Red","Mercedes");
echo $mycar -> message();
?>