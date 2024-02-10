CREATE DATABASE IF NOT EXISTS lostAndFound;

USE lostAndFound;

CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `what` varchar(255) NOT NULL,
  `who` varchar(255) DEFAULT NULL,
  `where_location` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
)
