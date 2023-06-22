<h1>PHP Scratch Pad</h1>
<h2>For Loops</h2>
<hr>
<?php  
	echo "<h3>List Cars from Array. Only List first 5</h3>";
    $cars = [
        "vw golf", 
        "mazda cx5", 
        "bmw x5", 
        "porsche targa", 
        "volvo xc70", 
        "honda crv",
        "acura integra",
        "chevy blazer", 
        "lexus is300",
        "bmw 325 is",
        "toyota siena",
        "toyota highlander",
        "toyota camry"
    ];

	$limit = 5;
	$counter = 0;

	echo "<ol>";

	foreach ($cars as $car) {
	    if ($counter < $limit) {
	        echo "<li>$car</li>";
	        $counter++;
	    } else {
	        break; // Exit the loop once the limit is reached
	    }
	}
	echo "</ol>";

	echo "<hr>";
	echo "<h3>List Numbers 1 - 34, except for 12, 17 & 23</h3>";

	$max = 34;

	for ($number = 1; $number <= $max; $number++) {
		if ($number != 12 && $number != 17 && $number != 23) {
			echo "<li>$number</li>"; 
		}
		
	}

	echo "<hr>";
	echo "<h3>List Favorite Numbers under 20</h3>";
	$favNumbers = [4, 23, 24, 32, 86, 9, 27, 11];

	forEach ($favNumbers as $favNumber) {
		if ($favNumber < 20) {
			echo "<li>$favNumber</li>";  
		}
	}

?>