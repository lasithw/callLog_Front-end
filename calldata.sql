-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2018 at 12:33 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `calllog`
--

-- --------------------------------------------------------

--
-- Table structure for table `calldata`
--

CREATE TABLE `calldata` (
  `ID` int(11) NOT NULL,
  `CallType` varchar(50) NOT NULL,
  `Agent` varchar(50) NOT NULL,
  `CallerID` varchar(50) NOT NULL,
  `CallTime` varchar(50) NOT NULL,
  `Event` varchar(50) NOT NULL,
  `HoldTime` varchar(50) NOT NULL,
  `QueueName` varchar(50) NOT NULL,
  `Time` varchar(50) NOT NULL,
  `TotalTime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `calldata`
--

INSERT INTO `calldata` (`ID`, `CallType`, `Agent`, `CallerID`, `CallTime`, `Event`, `HoldTime`, `QueueName`, `Time`, `TotalTime`) VALUES
(30, 'incoming', 'WSAaasa', 'dff', 'zzgyhr', 'zzjhfsf', 'eeeegf', 'nhhegf', 'gfsj', 'frrrjfweh'),
(31, 'outgoing', 'WSAaasa', 'dff', 'zzgyhr', 'zzjhfsf', 'eeeegf', 'nhhegf', 'gfsj', 'frrrjfweh'),
(32, 'outgoing', 'WSAdddaasa', 'dff', 'sssazzgyhr', 'zzjhfsf', 'eeeegf', 'nhhegf', 'gfsj', 'frrrjfweh'),
(33, 'incoming', 'WSAdddaasa', 'dff', 'sssazzgyhr', 'zzjhfsf', 'eeeegf', 'nhhegf', 'gfsj', 'frrrjfweh'),
(34, 'incoming', 'daasa', 'dff', 'zyhr', 'fsf', 'eegf', 'egf', 'gfsj', 'jfweh'),
(35, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(36, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(37, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(38, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(39, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(40, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(41, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(42, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(43, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(44, 'outgoing', 'asssaasa', 'asdff', 'aawzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(45, 'outgoing', 'asa', 'ff', 'yhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfweh'),
(46, 'outgoing', 'qqasa', 'qff', 'qqyhr', 'qwfsf', 'weegf', 'wegf', 'gfsj', 'qjfweh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calldata`
--
ALTER TABLE `calldata`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calldata`
--
ALTER TABLE `calldata`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
