-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2018 at 06:23 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guliwedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `ArticleId` int(11) NOT NULL,
  `ISSN` varchar(11) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  `Title` varchar(225) NOT NULL,
  `PublisherID` int(11) NOT NULL,
  `PlublishDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ImageUrl` text NOT NULL,
  `Abstract` text NOT NULL,
  `FileUrl` text NOT NULL,
  `Downloads` int(11) NOT NULL,
  `Status` varchar(50) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`ArticleId`, `ISSN`, `Price`, `Title`, `PublisherID`, `PlublishDate`, `ImageUrl`, `Abstract`, `FileUrl`, `Downloads`, `Status`) VALUES
(1, '77', '40', 'United Nations Convention on the Law of the Sea', 1, '2018-05-05 17:10:37', 'http://localhost:8080/guliwe/api/Article/uploads/1525533037.jpg', 'The criminal jurisdiction of the coastal State should not be exercised\non board a foreign ship passing through the territorial sea to arrest any person\nor to conduct any investigation in connection with any crime committed on\nboard the ship during its passage, save only in the following cases:', 'http://localhost:8080/git.goliwe/api/uploads/1525533037.pdf', 0, 'Active'),
(2, '0', '40', 'Eloquent JavaScript', 1, '2018-05-05 17:23:45', 'http://localhost:8080/guliwe/api/Article/uploads/1525533825.png', 'This work is licensed under a Creative Commons attribution-noncommercial\nlicense (http://creativecommons.org/licenses/by-nc/3.0/). All code in the\nbook may also be consi', 'http://localhost:8080/git.goliwe/api/uploads/1525533825.pdf', 0, 'Active'),
(3, 'saw15', '40', 'Eloquent JavaScript', 1, '2018-05-05 17:30:25', 'http://localhost:8080/guliwe/api/Article/uploads/1525534225.png', 'This work is licensed under a Creative Commons attribution-noncommercial\nlicense (http://creativecommons.org/licenses/by-nc/3.0/). All code in the\nbook may also be consi', 'http://localhost:8080/git.goliwe/api/uploads/1525534225.pdf', 0, 'Active'),
(4, 'r54', '40', 'Angular', 1, '2018-05-05 17:48:01', 'http://localhost:8080/guliwe/api/Article/uploads/1525535281.png', 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop. Speed & Performance. Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side', 'http://localhost:8080/git.goliwe/api/uploads/1525535281.pdf', 1, 'Active'),
(5, 'W11223432', '40', 'Avengers', 1, '2018-05-05 20:50:02', 'http://localhost:8080/guliwe/api/Article/uploads/1525546202.jpeg', 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself', 'http://localhost:8080/git.goliwe/api/uploads/1525546202.pdf', 2, 'Active'),
(6, 'IB345', '40', 'Ndu Testing', 3, '2018-07-04 00:56:16', 'http://localhost:8080/guliwe/api/Article/uploads/1530658576.PNG', 'This is an ABSTRACT nje', 'http://localhost:8080/guliwe/api/Article/uploads/1530658576.png', 0, 'Disabled');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `FirstName` varchar(225) NOT NULL,
  `Surname` varchar(225) NOT NULL,
  `Email` varchar(225) NOT NULL,
  `Password` varchar(225) NOT NULL,
  `Role` varchar(225) NOT NULL,
  `Status` varchar(225) DEFAULT 'Active',
  `BankName` varchar(225) DEFAULT NULL,
  `AccountNo` varchar(225) DEFAULT NULL,
  `BankBranchCode` varchar(225) DEFAULT NULL,
  `AccountType` varchar(225) DEFAULT NULL,
  `CVV` int(3) DEFAULT NULL,
  `token` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserId`, `FirstName`, `Surname`, `Email`, `Password`, `Role`, `Status`, `BankName`, `AccountNo`, `BankBranchCode`, `AccountType`, `CVV`, `token`) VALUES
(1, 'Nduduzo', 'Khanyile', 'nduduzo@mail.com', '$2y$10$Jvizz1XKNWmHbRRhUH9OO.OAU/kOLxWlNMcmBtM6fjE66jRK7uM7i', 'Admin', 'Active', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Ndumiso', 'Mthembu', 'freedom.khanyile1@gmail.com', '$2y$10$i3r6mrklCJLSQZAFO1hFQuIgo1oZodRWJHOmcZIyHJ1YKRcuqTslC', 'Customer', 'Active', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'King', 'Khanyile', 'admin@mail.com', '$2y$10$5KVFasIY.eaOYo1qrBIFJuuzO4WL4RxZtZPmDCnrPrA2tSQdlWkIO', 'Admin', 'Active', NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Ndumiso', 'Ngwane', 'user@mail.com', '$2y$10$XzsdvVD5dyi3jvM2BrstVue89RJAkJ084iqVShJZfWA68CFX0Lwgm', 'Customer', 'Active', NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'test', 'test', 'test@mail.com', '$2y$10$HWW.xFrRI7uVrk5OsDN5c.4Mzxhi3kX.j.IMOqAF166n9cHMf/lCu', 'Customer', 'Active', NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Freedom', 'Khanyile', 'testapp@mail.com', '$2y$10$ve/.AYObOPlB5.l0np348.d8Bgxblh56YeZjrovy/5c4vy/rdpnRO', 'Customer', 'Active', NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'Freedom', 'Khanyile', 'test2@mail.com', '$2y$10$mmriqXmqvcW/s9cVS/udVOsZpmufIWuQpffOAGg7KpsdN4wdG0raS', 'Customer', 'Active', NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'Freedom', 'Khanyile', 'test3@mail.com', '$2y$10$GTA4b8LbUnQ00WALYkf4Y.C5IwvZFGqGyTVhEm.Ta9kXO1mpfWUhO', 'Customer', 'Active', NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'Freedom', 'Khanyile', 'freedom.khanyile@ndu-systems.net', '$2y$10$DVaOR99dP9jRhd114PFkKOfWYoSufkeOdmk9GWdrO0HQF.HOKxqgq', 'Customer', 'Active', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_article`
--

CREATE TABLE `user_article` (
  `Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `ArticleId` int(11) NOT NULL,
  `State` varchar(25) NOT NULL DEFAULT 'Pending',
  `Status` varchar(25) NOT NULL DEFAULT 'Active',
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_article`
--

INSERT INTO `user_article` (`Id`, `UserId`, `ArticleId`, `State`, `Status`, `Date`) VALUES
(1, 5, 4, 'Pending', 'Active', '2018-07-06 13:18:32'),
(2, 5, 4, 'Pending', 'Active', '2018-07-06 13:18:53'),
(3, 4, 4, 'Pending', 'Active', '2018-07-07 16:37:45'),
(4, 4, 4, 'Pending', 'Active', '2018-07-07 16:47:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`ArticleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `user_article`
--
ALTER TABLE `user_article`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `ArticleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_article`
--
ALTER TABLE `user_article`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
