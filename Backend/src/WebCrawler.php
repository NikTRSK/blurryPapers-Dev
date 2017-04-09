<?php 
	require_once 'data/PaperClass.php';
	require_once 'PDFDownloaderClass.php';
	class WebCrawler
	{
		private $mURL;
		private $mDom; 
		private $mConfig;

		public function __construct($config)
		{
			$this->mConfig = $config;
		}

		function getContent($url)
		{
			if ($this->mConfig == "IEEE")
			{
				$url = "http://ieeexplore.ieee.org:80/search/searchresult.jsp?reload=true&amp;newsearch=true&amp;queryText=Halfond";
				$this->mURL = $url;

				$ch = curl_init();
				$timeout = 20;
				curl_setopt($ch, CURLOPT_URL, $url);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
				$html = curl_exec($ch);
				curl_close($ch);

				# Create a DOM parser object
				$this->mDom = new DOMDocument();


				# Parse the HTML from html.
				# The @ before the method call suppresses any warnings that
				# loadHTML might throw because of invalid HTML in the page.
				// @JavaScript
				@$this->mDom->loadHTML($html);

				// echo $this->mDom->saveHTML();
			}
			if ($this->mConfig == "ACM")
			{
				$url = "http://dl.acm.org/results.cfm?query=Halfond";

				$this->mURL = $url;

				$ch = curl_init();
				$timeout = 5;
				curl_setopt($ch, CURLOPT_URL, $url);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
				$html = curl_exec($ch);
				curl_close($ch);

				// echo $html;

				# Create a DOM parser object
				$this->mDom = new DOMDocument();

				# Parse the HTML from html.
				# The @ before the method call suppresses any warnings that
				# loadHTML might throw because of invalid HTML in the page.
				@$this->mDom->loadHTML($html);
			}
			
		}



		function getPaperContent()
		{
			// echo $mConfig;
			if ($this->mConfig == "IEEE")
			{
				// echo "HI THERE\n";
				$finder = new DomXPath($this->mDom);
				$classname="ng-binding";
				$nodes = $finder->query("//*[contains(@class, '$classname')]");
				foreach ($nodes as $key) {
					// echo "IMHERE\n";
					$text .= $this->mDom->saveHTML($key);
					// echo $text . "\n";
				}
			}
			if ($this->mConfig == "ACM")
			{
				$finder = new DomXPath($this->mDom);
				$classname="details";
				$nodes = $finder->query("//*[contains(@class, '$classname')]");
				// $nodes = $finder->query("//*[@class='details']");

				foreach ($nodes as $key) {

					//CRAWL TITLE
					$titleQuery = $finder->query("./*[contains(@class, 'title')]", $key)->item(0);
					$titleQuery1 = $finder->query("./a", $titleQuery)->item(0);
					// $titleText = $finder->query("//a", $title)->item(0);
					$titleText = $titleQuery1->textContent;
					// $tempDom = 

					// echo $titleText."\n";


					// ABSTRACT
					$abstractQuery = $finder->query("./*[contains(@class, 'abstract')]", $key)->item(0);
					$abstractText = $abstractQuery->textContent;
					// echo $abstractText. "\n";

					//URL
					$urlQuery = $finder->query("./*[contains(@class, 'ft')]", $key)->item(0);
					$urlQuery1 = $finder->query("./a", $urlQuery)->item(0)->getAttribute('href');
					$href = "http://dl.acm.org/" . $urlQuery1;
					// echo $href . "\n";

					//Get Redirect URL
					// $service_url = 'http://dl.acm.org/ft_gateway.cfm?id=1496657&ftid=615922&dwn=1&#URLTOKEN#';
	
				   $curl = curl_init($href);
				   // $curl_post_data = array(
				   //      "id" => 1101935,
				   //      "ftid" => 338180,
				   //      );
				   curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
				   // curl_setopt($curl, CURLOPT_POST, true);
				   // curl_setopt($curl, CURLOPT_POSTFIELDS, $curl_post_data);
				   
				   $curl_response = curl_exec($curl);
				   if (curl_errno($curl))
				   {
				   	echo "ERROR";
				   }
				   $redirect_url = curl_getinfo($curl);
				   echo $redirect_url["redirect_url"];
				   curl_close($curl);

				   $paper = new Paper($titleText, array(), $redirect_url["redirect_url"], $abstractText);


					

					// echo "..............................\n";
				}
			}
			
		}


	}

	

 ?>