<?php

use PHPUnit\Framework\TestCase;

class MasterLinkClassUnitTest extends TestCase
{
	public function testMasterLinkConstruction()
	{
		$test = new MasterLink();
		$this->assertNotNull($test);
	}

	public function testSearchQueryACM()
	{
		$test = new MasterLink();
		$value = $test->searchQuery("Halfond", "ACM");
		$this->assertNotNull($value);
	}

	public function testSearchQueryIEEE()
	{
		$test = new MasterLink();
		$value = $test->searchQuery("Halfond", "IEEE");
		$this->assertNotNull($value);
	}

	public function testGetDataStore()
	{
		$test = new MasterLink();
		$value = $test->searchQuery("Halfond", "ACM");

		$this->assertNotNull($value);


		$this->assertNotNull($test->mDataStore);
	}

	public function testGetWordMap()
	{
		$test = new MasterLink();
		$value = $test->searchQuery("Halfond", "ACM");

		$this->assertNotNull($value);


		$this->assertNotNull($test->mDataStore);

		$this->assertNotNull($test->mWordMap);
	}

}

?>