-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2018 at 12:32 PM
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
-- Table structure for table `call_log`
--

CREATE TABLE `call_log` (
  `id` int(11) NOT NULL,
  `callType` varchar(50) NOT NULL,
  `agent` varchar(50) NOT NULL,
  `callerID` varchar(50) NOT NULL,
  `callTime` varchar(50) NOT NULL,
  `event` varchar(50) NOT NULL,
  `holdTime` varchar(50) NOT NULL,
  `queueName` varchar(50) NOT NULL,
  `time` varchar(50) NOT NULL,
  `totalTime` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `mainCategory` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `call_log`
--

INSERT INTO `call_log` (`id`, `callType`, `agent`, `callerID`, `callTime`, `event`, `holdTime`, `queueName`, `time`, `totalTime`, `date`, `category`, `mainCategory`) VALUES
(0, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(1, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'undefined'),
(2, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(3, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(4, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(31, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(32, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(33, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(34, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(35, 'incoming', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(38, 'outgoing', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(39, 'outgoing', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(40, 'outgoing', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(41, 'outgoing', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(42, 'outgoing', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(43, 'outgoing', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(44, 'outgoing', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda'),
(45, 'outgoing', 'ssaasa', 'sdff', 'wzyhr', 'wfsf', 'weegf', 'wegf', 'gfsj', 'jfwe', 'sdas', 'sdsdc', 'sdfda');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `call_log`
--
ALTER TABLE `call_log`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
