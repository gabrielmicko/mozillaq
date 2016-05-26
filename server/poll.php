<?php

include 'mymysqli.php';
$mysqli = new Mymysqli();
$mysqli->utf8();


if (!empty($_POST)) {

    $result = array();
    $result['type'] = (!empty($_POST['type'])) ? $_POST['type'] : null;
    $result['name'] = (!empty($_POST['name'])) ? $_POST['name'] : null;
    $result['email'] = (!empty($_POST['email'])) ? $_POST['email'] : null;

    if ($result['type'] == "wantdev") {
	$result['app_name'] = (!empty($_POST['app_name'])) ? $_POST['app_name'] : null;
    }

    try {
	if (is_null($result['name']) || !preg_match("/^[a-zA-Z ]*$/", $result['name'])) {
	    throw new Exception('A név helyetelen.');
	}

	if (strlen($result['name']) <= 5) {
	    throw new Exception('Kérlek valós nevet adj meg!');
	}

	if (is_null($result['email']) || !preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $result['email'])) {
	    throw new Exception('Az e-mail helyetelen.');
	}
	$json = array(
	    'result' => 'true',
	    'msg' => 'Sikeresen kitöltötted a kérdőívet, köszönjük!'
	);
	$result = $mysqli->real_escape_array($result);
	$mysqli->insert($result, 'mozq_poll');
    } catch (Exception $ex) {

	$json = array(
	    'result' => 'false',
	    'msg' => $ex->getMessage()
	);
    }
    echo json_encode($json);
}
?>