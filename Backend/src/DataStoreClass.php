<?php

require_once ("PDFParserClass.php");

function cmp($a, $b) {
    if ($a == $b) {
        return 0;
    }
    return ($a > $b) ? -1 : 1;
}

class DataStoreClass
{
	public $mWordStringToFrequencyMap;
	public $mWordStringToPapersListMap; // word to map of name to paper object

	// constructor
	public function __construct()
	{
		$this->mWordStringToFrequencyMap = array();
		$this->mWordStringToPapersListMap = array();
	}

	public function addPaper($paper)
	{
		// might use the PDFDownloader class in here
		// convert paper to text and calculate frequency account
		$pdfParser = new PDFParser();
		$words = $pdfParser->convertPDFToText($paper->mPDFLocalURL);

		foreach($words as $word)
		{
			$this->addWordStringToFrequencyMap(strtolower($word));
			$this->addWordStringToPapersListmap(strtolower($word),$paper);
			// echo $word."\n";
		}
	}

	// encapsulation methods, get and set maps
	public function getWordStringToFrequencyMap()
	{
		return $this->mWordStringToFrequencyMap;
	}

	public function addWordStringToFrequencyMap($word)
	{

		{
			if (array_key_exists($word, $this->mWordStringToFrequencyMap)) 
			{

				$this->mWordStringToFrequencyMap[$word]+= 1;
			}
			else
			{
				$this->mWordStringToFrequencyMap[$word] = 1;
			}
		} 
		// catch (Exception $e) 
		// {
		// 	//Do nothing
		// 	$this->mWordStringToFrequencyMap[$word]=1;

		// }
		
	}

	public function getWordStringToPapersListMap()
	{
		return $this->mWordStringToPapersListMap;
	}

	public function addWordStringToPapersListmap($word, $paper)
	{
		if (array_key_exists($word, $this->mWordStringToPapersListMap)) 
		{
			$this->mWordStringToPapersListMap[$word][$paper->mPaperName] = $paper;
		}
		else
		{
			$this->mWordStringToPapersListMap[$word] = array();
			$this->mWordStringToPapersListMap[$word][$paper->mPaperName] = $paper;
		}
	}

	// return 200 words
	public function returnMostFrequentWords()
	{
		uasort($this->mWordStringToFrequencyMap, 'cmp');

		$mostFrequentWords = array();

		$counter = 200;
		$counter = min(sizeof($this->mWordStringToFrequencyMap), $counter);
		$i = 0;
		// var_dump($this->mWordStringToFrequencyMap);

		foreach ($this->mWordStringToFrequencyMap as $key => $value) 
		{
			if ($i < $counter)
			{
    			// array_push($mostFrequentWords, $key => $word);
    			$mostFrequentWords[$key] = $value;
    			$i++;
    		}
    		else
    		{
    			break;
    		}
		}

		// var_dump($mostFrequentWords);
		return $mostFrequentWords;
	}


	// return paper results of word search
	public function returnPapersListForWord($word)
	{
		return $this->mWordStringToPapersListMap[$word];
	}

	// return paper url when we have word and paper name
	public function returnPDFURL($word, $paperName)
	{
		try 
		{
			return $this->mWordStringToPapersListMap[$word][$paperName]->mPDFLocalURL;
		} 
		catch (Exception $e) 
		{
			return null;
		}
	}

	// return paper url when we have word and paper name
	public function returnAbstract($word, $paperName)
	{
		try 
		{
			return $this->mWordStringToPapersListMap[$word][$paperName]->mAbstract;
		} 
		catch (Exception $e) 
		{
			return null;
		}
	}
}

?>