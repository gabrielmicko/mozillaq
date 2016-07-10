#################
#> DB settings <#
#################

Database connection informations are stored in a file. The DB connection type is PDO.
The database connection is configured for MySQL. In case of other database (Oracle,MSSQL, PostgreSQL,MS Access) you have to change the PDO settings in the create_connection function.(This can be found in dbConnection.php)

The database file configuration information is in the dbConnection.php line 3.
Please note that you have to write the full path with the filename!
This allows you to keep your Database connection settings in a place which is not accessible from outside.

For example: 
$config_file = "/var/www/html/mozillaq-master/new/php/mysql.login";

Example content for the "mysql.login" configuration file:

servername=localhost
username=mozilla
password=123456
databasename=mozillaQuiz

#################################
#> DB create statements tables <#
#################################

CREATE TABLE `quizQuestions` (
  `idQuestion` int(11) NOT NULL AUTO_INCREMENT,
  `textQuestion` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `quizLanguage` varchar(4) NOT NULL,
  PRIMARY KEY (`idQuestion`,`quizLanguage`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

CREATE TABLE `quizQuestionChoices` (
  `idQuestion` int(11) NOT NULL,
  `idChoice` int(11) NOT NULL,
  `textChoice` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `quizLanguage` varchar(4) NOT NULL,
  PRIMARY KEY (`idQuestion`,`quizLanguage`,`idChoice`),
  CONSTRAINT `fk_quizQuestionChoices_1` FOREIGN KEY (`idQuestion`) REFERENCES `quizQuestions` (`idQuestion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `rightAnswers` (
  `idQuestion` int(11) NOT NULL,
  `idChoice` int(11) NOT NULL,
  `score` int(5) NOT NULL,
  PRIMARY KEY (`idQuestion`,`idChoice`),
  CONSTRAINT `fk_rightAnswers_1` FOREIGN KEY (`idQuestion`) REFERENCES `quizQuestions` (`idQuestion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;