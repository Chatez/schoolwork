CREATE TABLE IF NOT EXISTS `task` (`Id` INT NOT NULL AUTO_INCREMENT, 
`Title` varchar(500) DEFAULT NULL,
`Status` varchar(100) DEFAULT NULL, PRIMARY KEY(`Id`)) ENGINE = InnoDB ; 
INSERT INTO `task` (`Id`, `Title`, `Status`) VALUES('', 'Go to Market tomorrow', 'done'), ('', 'Email to manager', 'pending'), ('', 'Push code to GitHub', 'done'), ('', 'Go For Running', 'done'), ('', 'Go to Movie', 'pending');