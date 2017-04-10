<?php
require_once 'DataStoreClass.php';
require_once 'WebCrawler.php';
class MasterLinkClass 
{ 
	public $mDataStore;
	public $mWordMap;
	public $query;
	public $ACMCrawler;
	public $IEEECrawler;

    public function  __construct()
    {
        $this->mDataStore = new DataStoreClass();
        $this->ACMCrawler = new WebCrawler("ACM");
        $this->IEEECrawler = new WebCrawler("IEEE");
    }

    public function searchQuery($query)
    {
        {   
            $url = "http://dl.acm.org/results.cfm?query=".$query;
            // $url = 
            $this->ACMCrawler->getContent($url);
            $paperList = $this->ACMCrawler->getPaperContent();
            foreach ($paperList as $paper)
            {
                $this->mDataStore->addPaper($paper);            
            }
        }

    }
    public function getDataStore()
    {
    	return $this->mDataStore;

    }

    public function getWordMap()
    {
    	return $this->mDataStore->returnMostFrequentWords();
    }




} 

?>