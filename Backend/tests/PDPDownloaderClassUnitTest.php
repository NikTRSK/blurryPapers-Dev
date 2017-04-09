<?php

use PHPUnit\Framework\TestCase;

class PDFDownloaderCLassUnitTest extends TestCase
{
	public function testDownloadPDF()
	{
        $url  = "url";
        $path = "data/". $paperName. ".pdf";

        $this->mPDFLocalURL = $path;

        $mDownloader = new PDFDownloader();
        $mDownloader->downloadPDF( $url, $path);

        // check if contents of path are not null somehow
	}
}

?>