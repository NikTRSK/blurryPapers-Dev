<?php

use PHPUnit\Framework\TestCase;

class DataStoreClassUnitTest extends TestCase
{

	public function testDataStoreClassConstructor()
	{
		$dataStore = new DataStoreClass();

		$this->assertNotNull($dataStore);
	}

	public function testAddPaperWithValidPDFWordStringToFrequencyMapNotEmpty()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$this->assertNotEmpty($dataStore->mWordStringToFrequencyMap);

		// var_dump($dataStore->mWordStringToFrequencyMap);
	}

	public function testAddPaperWithValidPDFmWordStringToPapersListMapNotEmpty()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$this->assertNotEmpty($dataStore->mWordStringToPapersListMap);
	}

	// public function testAddPaperWithInvalidPDF()
	// {
	// 	$dataStore = new DataStoreClass();

	// 	$mPaperName = "Name";
	// 	$mAuthorNames = array();
	// 	$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";

	// 	$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink);

	// 	$dataStore->addPaper($paper);

	// 	// what happens if you pass in a address?
	// }

	public function testGetWordStringToFrequencyMapReturnsStringToFrequencyMap()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$mWordStringToFrequencyMap = $dataStore->getWordStringToFrequencyMap();

		$this->assertNotNull($mWordStringToFrequencyMap);
	}

	// // adding stuff check frequency and stuff

	public function testGetWordStringToPapersListMapReturnsWordStringToPapersListMap()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$getWordStringToPapersListMap = $dataStore->getWordStringToPapersListMap();
		
		$this->assertNotNull($getWordStringToPapersListMap);
	}

	// // adding stuff check papers and stuff

	public function testReturnMostFrequentWordsWithEqualToOrMoreThan200WordsInStore()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$mostFrequentWords = $dataStore->returnMostFrequentWords();

		$this->assertEquals(200, sizeof($mostFrequentWords));
	}

	public function testReturnMostFrequentWordsWithLessThan200WordsInStore()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$mostFrequentWords = $dataStore->returnMostFrequentWords();

		$this->assertEquals(200, sizeof($mostFrequentWords));
	}

	public function testReturnPapersListForWordValidWordReturnsPapersList()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$papersList = $dataStore->returnPapersListForWord("the");

		$this->assertNotNull($papersList);
	}

	public function testReturnPapersListForWordInvalidWordReturnsNull()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$papersList = $dataStore->returnPapersListForWord("documents");

		$this->assertNotNull($papersList);
	}

	public function testReturnPDFURLValidWordAndValidPaperReturnsPDFURL()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$paperName = $dataStore->returnPDFURL("the", $mPaperName);

		$this->assertNotNull($paperName);
	}

	public function testReturnPDFURLInvalidWordAndValidPaperReturnsNull()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$paperName = $dataStore->returnPDFURL("asdfghjkl", $mPaperName);

		$this->assertNull($paperName);
	}
	public function testReturnAbstractValidWordAndValidPaperReturnsAbstract()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$abstract = $dataStore->returnAbstract("the", $mPaperName);

		$this->assertNotNull($abstract);
	}

	public function testReturnAbstractInvalidWordAndValidPaperReturnsAbstract()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$abstract = $dataStore->returnAbstract("dafkjdfads", $mPaperName);

		$this->assertNull($abstract);
	}

	public function testReturnAbstractValidWordAndInvalidPaperReturnsAbstract()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$abstract = $dataStore->returnAbstract("the", "kdjafdf");

		$this->assertNull($abstract);		
	}

	public function testReturnAbstractInvalidWordAndInvalidPaperReturnsAbstract()
	{
		$dataStore = new DataStoreClass();

		$mPaperName = "Name";
		$mAuthorNames = array();
		$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
		$mAbstract = "abstract";

		$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

		$dataStore->addPaper($paper);

		$abstract = $dataStore->returnAbstract("dakfjnds", "djkafdjf");

		$this->assertNull($abstract);		
	}


	// public function testReturnPDFURLValidWordAndInvalidPaperReturnsNull()
	// {
	// 	$dataStore = new DataStoreClass();

	// 	$mPaperName = "Name";
	// 	$mAuthorNames = array();
	// 	$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";
	// 	$mAbstract = "abstract";

	// 	$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink, $mAbstract);

	// 	$dataStore->addPaper($paper);

	// 	$abstract = $dataStore->returnPDFURL("the", "kdfjdsf");

	// 	$this->assertNull($paperName);
	// }

	// public function testReturnAbstractInvalidWordAndValidPaperReturnsAbstract()
	// {

	// }

	// public function testReturnAbstractValidWordAndInvalidPaperReturnsAbstract()
	// {
		
	// }

	// public function testReturnAbstractInvalidWordAndInvalidPaperReturnsAbstract()
	// {
		
	// }

	// public function testReturnPDFURLInvalidWordAndInvalidPaperReturnsNull()
	// {
	// 	$dataStore = new DataStoreClass();

	// 	$mPaperName = "Name";
	// 	$mAuthorNames = array();
	// 	$mPDFURLLink = "http://etd.lib.byu.edu/PDFCreation/EditingTextinPDFDocuments.pdf";

	// 	$paper = new Paper($mPaperName, $mAuthorNames, $mPDFURLLink);

	// 	$dataStore->addPaper($paper);

	// 	$paperName = returnPDFURL("dfdfd", "asfakhfadf");

	// 	$this->assertNull($paperName);
	// }
}

?>