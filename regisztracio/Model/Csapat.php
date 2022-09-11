<?php

class Csapat
{
    public $Nev;
    public $CskNev;
    public $CskEmail;
    public $Csapattagok;
    public $Jatek;

    public function __construct($nev, $csk_nev, $csk_email, $csapattagok, $jatek)
    {
        $this -> Nev = $nev;
        $this -> CskNev = $csk_nev;
        $this -> CskEmail = $csk_email;
        $this -> Csapattagok = $csapattagok;
        $this -> Jatek = $jatek;
    }

    public function getBase64Data()
    {
        return base64_encode(serialize($this));
    }
}

?>