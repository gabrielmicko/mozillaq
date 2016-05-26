<?php
class Mymysqli extends mysqli{

    public $version = '0.84';
    public function __construct(){
//        /*
//         * Az SQL szerver címe:
//         * pl. localhost vagy IP cím
//         */
        define('SQL_HOST','');
//        /*
//         * Az SQL belépési felhasználóneve:
//         */
        define('SQL_USER', '');
//
//        /*
//         * Az SQL belépési jelszava:
//         */
        define('SQL_PASSWORD', '');
//        /*
//         * Az SQL adatbázis, ahova importáltál:
//         */
        define('SQL_DATABASE', 'mozq');


        define('SQL_CONNECT_ERROR','Connection error.');
        define('SQL_QUERY_ERROR', 'There was an error while query.');
        define('SQL_QUERY_IS_EMPTY', 'MySQL returned an empty result set.');
        define('SQL_QUERY_SUCCESS', 'Query was successful.');

        parent::__construct(SQL_HOST, SQL_USER, SQL_PASSWORD, SQL_DATABASE);

        if(mysqli_connect_error()){
            die(SQL_CONNECT_ERROR.'('.mysqli_connect_errno().')'.mysqli_connect_error());
        }else{
        }
    }
    public function isConnection(){
        return mysqli_stat($this);
    }
    public function query($query){
        $result = parent::query($query);
        if(mysqli_error($this)){
            throw new Exception($this->errno);
        }else{
        }
        return $result;
    }
    public function putToBeginningOfAnArray($arr, $k, $v){
            $array = array();
            $array[$k] = $v;
            foreach($arr as $key=>$value){
               $array[$key] = $value;
            }
            return $array;
   }
    public function insert($array, $table){
        foreach($array as $key=>$value){
            $array['`'.$key.'`'] = '"'.$value.'"';
            unset($array[$key]);
        }

        $columns = implode(',',array_keys($array));
        $values = implode(',',array_values($array));


        if(!$this->query('INSERT INTO `'.$table.'` ('.$columns.') VALUES('.$values.')')){
            throw new Exception($this->errno());
            return false;
        }else{
            return true;
        }
    }

    public function update($array, $table){
        $where_1;
        $where_2;
        $i=0;
        foreach($array as $key=>$value){
            if($i != 0){
                $upd_array[] = '`'.$key.'`="'.$value.'"';
                unset($array[$key]);
            }else{
                $where_1 = $key;
                $where_2 = $value;
            }
            $i++;
        }

        $update = implode(',',array_values($upd_array));
        if(!$this->query('UPDATE `'.$table.'` SET '.$update.' WHERE `'.$where_1.'`="'.$where_2.'"')){
            return false;
            throw new Exception($this->errno());
        }else{
            return true;
        }
    }

    public function select($query){
        $result = parent::query($query);
        if(mysqli_error($this)){
            echo SQL_QUERY_ERROR.' ('.mysqli_error($this).' , '.mysqli_errno($this).')';
        }else{
        }
        $arr = array();
        if($result->num_rows > 1){
            while($row = $result->fetch_assoc()){
            array_push($arr,$row);
            }
        }elseif($result->num_rows == 1){
            while($row = $result->fetch_assoc()){
            array_push($arr,$row);
            }
        }elseif($result->num_rows == 0){
            $arr['empty'] = 1;
            $arr['notice'] = SQL_QUERY_IS_EMPTY;
        }
        $result->free();
        return $arr;
    }

    public function real_escape_array($array) {
        $escArray = array();
        if(is_array($array)) {
            foreach($array as $key => $value) {
            if(is_array($value)) {
                $escValue = $this->real_escape_array($value);
            }
            else {
                $escValue = $this->real_escape_string($value);
            }
            $escKey = $this->real_escape_string($key);
            $escArray[$escKey] = $escValue;
            }
            return $escArray;
        }
        return false;
     }

    function version(){
        echo 'The '.get_class($this). '\'s version is '. $this->version. '!';
    }
    function utf8(){
        $this->query('SET NAMES utf8');
    }
    function __destruct(){
        $this->close();
    }
}
?>
