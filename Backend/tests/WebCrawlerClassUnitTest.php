<?php

use PHPUnit\Framework\TestCase;

class WebCrawelrClassUnitTest extends TestCase
{
	// test constructor
	public function testWebCrawlerClassConstructor()
	{
		$webCrawler = new WebCrawler("ACM");

		$this->assertNotNull($webCrawler);
	}

	// test GetSearchQueryContent function
	public function testGetContentACM()
	{
		$webCrawler = new WebCrawler("ACM");

		$this->assertNotNull($webCrawler);

		$webCrawler->getContent("http://ieeexplore.ieee.org:80/search/searchresult.jsp?reload=true&amp;newsearch=true&amp;queryText=Halfond");

		$this->assertNotNull($webCrawler->mDom);
	}

	public function testGetContentIEEE()
	{
		$webCrawler = new WebCrawler("IEEE");
		$this->assertNotNull($webCrawler);

		$webCrawler->getContent("http://ieeexplore.ieee.org:80/search/searchresult.jsp?reload=true&amp;newsearch=true&amp;queryText=Halfond");

		$this->assertNotNull($webCrawler->mDom);
	}

	public function testGetPaperContentACM()
	{
		$webCrawler = new WebCrawler("ACM");

		$this->assertNotNull($webCrawler);

		$webCrawler->getContent("http://ieeexplore.ieee.org:80/search/searchresult.jsp?reload=true&amp;newsearch=true&amp;queryText=Halfond");

		$this->assertNotNull($webCrawler->mDom);

		$paperList = $webCrawler->getPaperContent();

		$this->assertNotNull($paperList);
	}

	public function testGetPaperContentIEEE()
	{
		$webCrawler = new WebCrawler("IEEE");

		$this->assertNotNull($webCrawler);

		$webCrawler->getContent("http://ieeexplore.ieee.org:80/search/searchresult.jsp?reload=true&amp;newsearch=true&amp;queryText=Halfond");

		$this->assertNotNull($webCrawler->mDom);

		$paperList = $webCrawler->getPaperContent();

		$this->assertNotNull($paperList);
	}


}

?>