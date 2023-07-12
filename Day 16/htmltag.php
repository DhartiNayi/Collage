<?php
   $single_quote = '<b><a href="http://www.google.co.in">Google</a></b>';
   echo $single_quote;
   echo '<br>';

   $single_quote = '<b><a href="http://www.php.net">Click Here</a></b>';
   echo $single_quote;
   echo '<br>'.'<br>'.'<br>';

   echo <<<abc
   <div class='a'></div>
   <h2>Hello...Hiii</h2>
   <h4>How R U??</h4>
   abc;
?>