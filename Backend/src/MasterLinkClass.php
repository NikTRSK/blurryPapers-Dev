<?php
require_once 'DataStoreClass.php';
require_once 'WebCrawler.php';
class MasterLink 
{ 
	public $mdataStore;
	public $mWordMap;
	public $query;
	public $ACMCrawler;
	public $IEEECrawler;

    public function  __construct()
    {

    }

    public function searchQuery($query, $library)
    {


    }
    public function getDataStore()
    {
    	return $this->mdataStore;
    }

    public function getWordMap()
    {
    	return $this->mWordMap;
    }




} 

?>