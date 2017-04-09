<?php 
	require_once("WebCrawler.php");
	// echo "Hello World\n";

	$url = "http://www.google.com";
	

	# Create a DOM parser object
	$crawler = new WebCrawler("ACM");


	$crawler->getContent($url);
	$crawler->getPaperContent();
 ?>