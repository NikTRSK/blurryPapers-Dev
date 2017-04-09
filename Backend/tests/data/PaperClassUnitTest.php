<?php

use PHPUnit\Framework\TestCase;

class PaperClassUnitTest extends TestCase
{
	// test constructor
	public function testPaperClassConstructor()
	{
		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$this->assertNotNull($paper);

	}

	// test mPaperName ecapsulation
	public function testGetPaperNameReturnsValidPaperName()
	{
		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$this->assertEquals($mPaperName, $paper->getPaperName());

	}

	public function testGetPaperNameReturnsInvalidPaperName()
	{
		$mPaperName = null;
		$mAuthorNames = array();
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$this->assertEquals($mPaperName, $paper->getPaperName());
	}

	public function testSetPaperName()
	{
		$mPaperName = null;
		$mAuthorNames = array();
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$newName = "new name";
		$paper->setPaperName($newName);

		$this->assertEquals($newName, $paper->getPaperName());
	}

	// test mAuthorNames encapsulation
	public function testGetAuthorNamesReturnsAuthorNames()
	{
		$mPaperName = null;
		$mAuthorNames = array("Halfond", "Cucumber");
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		//This paper should be authored by Halfond and Cucumber testing tool
		$this->assertEquals($paper->getAuthorNames()[0], "Halfond");
		$this->assertEquals($paper->getAuthorNames()[1], "Cucumber");
	}

	public function testAddAuthorNameSingleAddReturnsSingleAuthor()
	{
		$mPaperName = null;
		$mAuthorNames = array("Halfond", "Cucumber");
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$paper->addAuthorName("author");

		$this->assertEquals(3, sizeof($paper->getAuthorNames()));
	}

	public function testAddAuthorNameSingleToNullAddReturnsSingleAuthor()
	{
		$mPaperName = "Name";
		$mAuthorNames = null;
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$paper->addAuthorName("author");

		$this->assertEquals(1, sizeof($paper->getAuthorNames()));
	}


	public function testAddAuthorNameMultipleAddReturnsMultipleAuthor()
	{
		$mPaperName = "Name";
		$mAuthorNames = null;
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);


		for ($i = 0; $i < 5; ++$i)
		{
			$paper->addAuthorName("author");
		}

		$this->assertEquals(5, sizeof($paper->getAuthorNames()));
	}

	public function testAddAuthorNameNothingAddedReturnsEmpty()
	{
		$mPaperName = "Name";
		$mAuthorNames = null;
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$this->assertEmpty($paper->getAuthorNames());
	}

	// test mPDFURLLink encapsulation
	public function testGetPDFURLLinkReturnsValidPDFURLLink()
	{
		$mPaperName = "Name";
		$mAuthorNames = null;
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$this->assertEquals($mPDFURLLink, $paper->getPDFURLLink());
	}

	public function testGetPDFURLLinkReturnsInvalidPDFURLink()
	{
		$mPaperName = "Name";
		$mAuthorNames = null;
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$this->assertEquals($mPDFURLLink, $paper->getPDFURLLink());
	}

	public function testSetPDPURLLink()
	{
		$mPaperName = "Name";
		$mAuthorNames = null;
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$newURL = "new url";
		$paper->setPDFURLLink($newURL);

		$this->assertEquals($newURL, $paper->getPDFURLLink());
	}

	public function testGetAbstract()
	{
		$mPaperName = "Name";
		$mAuthorNames = null;
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$this->assertEquals($mAbstract, $paper->getAbstract());
	}

	public function testSetAbstract()
	{
		$mPaperName = "Name";
		$mAuthorNames = null;
		$mPDFURLLink = "http://www.pdf995.com/samples/pdf.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$newAbstract = "new abstract";
		$paper->setAbstract($newAbstract);

		$this->assertEquals($newAbstract, $paper->getAbstract());
	}
}

?>