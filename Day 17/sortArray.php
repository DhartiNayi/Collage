<?php
echo "The original array is :<br>";
$a = array("name1"=>"Dharti","name3"=>"Arav","name2"=>"Bhavya","name5"=>"Rutvik","name4"=>"Dipak","name6"=>"Kanvi");
echo"<pre>";
print_r($a);
echo "After sorting Arary..<br>";
ksort($a);
echo "<pre>";
print_r($a);
?>