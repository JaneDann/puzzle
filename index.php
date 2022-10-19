<?php

//If the HTTPS is not found to be "on"
if(!isset($_SERVER["HTTPS"]) || $_SERVER["HTTPS"] != "on")
{
    //Tell the browser to redirect to the HTTPS URL.
    header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"], true, 301);
    //Prevent the rest of the script from executing.
    exit;
}


if (substr($_SERVER['HTTP_HOST'], 0, 4) === 'www.') {
    header('Location: http'.(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']=='on' ? 's':'').'://' . substr($_SERVER['HTTP_HOST'], 4).$_SERVER['REQUEST_URI']);
    exit;
}

    $URL_LIST = [
        '/',
        '/uz',
        '/en',
    ];

    $url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (in_array($url, $URL_LIST)) {
        include_once('index.html');
    }
    else {
        header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
        include_once('index.html');
    }
?>