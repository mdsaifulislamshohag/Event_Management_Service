-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2022 at 11:36 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `event_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `start_at` datetime NOT NULL,
  `end_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `start_at`, `end_at`) VALUES
(1, 'Demo Event1', '2022-10-25 09:26:16', '2022-12-25 09:26:16'),
(2, 'Demo Event2', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(3, 'Demo Event3', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(4, 'Demo Event4', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(5, 'Demo Event5', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(6, 'Demo Event6', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(7, 'Demo Event7', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(8, 'Demo Event8', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(9, 'Demo Event9', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(10, 'Demo Event10', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(11, 'Demo Event11', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(12, 'Demo Event12', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(13, 'Demo Event13', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(14, 'Demo Event14', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(15, 'Demo Event15', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(16, 'Demo Event16', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(17, 'Demo Event17', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(18, 'Demo Event18', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(19, 'Demo Event19', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(20, 'Demo Event20', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(21, 'Demo Event21', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(22, 'Demo Event22', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(23, 'Demo Event23', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(24, 'Demo Event24', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(25, 'Demo Event25', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(26, 'Demo Event26', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(27, 'Demo Event27', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(28, 'Demo Event28', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(29, 'Demo Event29', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(30, 'Demo Event30', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(31, 'Demo Event31', '2022-12-25 09:26:16', '2022-12-25 09:26:16'),
(32, 'Demo Event32', '2022-12-25 09:26:16', '2022-12-25 09:26:16');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `workshop_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `name`, `email`, `workshop_id`) VALUES
(1, 'User Name 1', 'username1@gmail.com', 12),
(2, 'User Name 2', 'username2@gmail.com', 13),
(3, 'User Name 3', 'username3@gmail.com', 14),
(4, 'User Name 4', 'username4@gmail.com', 15),
(5, 'User Name 5', 'username5@gmail.com', 16),
(6, 'User Name 6', 'username6@gmail.com', 1),
(7, 'User Name 7', 'username7@gmail.com', 17),
(8, 'User Name 8', 'username8@gmail.com', 2),
(9, 'User Name 9', 'username9@gmail.com', 2),
(10, 'User Name 10', 'username10@gmail.com', 3),
(11, 'User Name 11', 'username11@gmail.com', 3),
(12, 'User Name 12', 'username12@gmail.com', 3),
(13, 'User Name 14', 'username14@gmail.com', 3),
(14, 'User Name 15', 'username15@gmail.com', 3),
(15, 'User Name 16', 'username16@gmail.com', 3),
(16, 'User Name 17', 'username17@gmail.com', 4),
(17, 'User Name 18', 'username18@gmail.com', 4),
(18, 'User Name 19', 'username19@gmail.com', 5),
(19, 'User Name 20', 'username20@gmail.com', 6),
(20, 'User Name 21', 'username21@gmail.com', 7),
(21, 'User Name 22', 'username22@gmail.com', 8),
(22, 'User Name 23', 'username23@gmail.com', 9),
(23, 'User Name 24', 'username24@gmail.com', 10),
(24, 'User Name 25', 'username25@gmail.com', 11);

-- --------------------------------------------------------

--
-- Table structure for table `workshops`
--

CREATE TABLE `workshops` (
  `id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `start_at` datetime NOT NULL,
  `end_at` datetime NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workshops`
--

INSERT INTO `workshops` (`id`, `event_id`, `start_at`, `end_at`, `title`, `description`) VALUES
(1, 1, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 1', 'Demo Workshop Description 1'),
(2, 1, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 2', 'Demo Workshop Description 2'),
(3, 1, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 3', 'Demo Workshop Description 3'),
(4, 1, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 4', 'Demo Workshop Description 4'),
(5, 1, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 5', 'Demo Workshop Description 5'),
(6, 2, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 6', 'Demo Workshop Description 6'),
(7, 2, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 7', 'Demo Workshop Description 7'),
(8, 2, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 8', 'Demo Workshop Description 8'),
(9, 2, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 9', 'Demo Workshop Description 9'),
(10, 3, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 10', 'Demo Workshop Description 10'),
(11, 3, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 11', 'Demo Workshop Description 11'),
(12, 4, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 12', 'Demo Workshop Description 12'),
(13, 4, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 13', 'Demo Workshop Description 13'),
(14, 5, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 14', 'Demo Workshop Description 14'),
(15, 5, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 15', 'Demo Workshop Description 15'),
(16, 6, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 16', 'Demo Workshop Description 16'),
(17, 6, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 17', 'Demo Workshop Description 17'),
(18, 7, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 18', 'Demo Workshop Description 18'),
(19, 8, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 19', 'Demo Workshop Description 19'),
(20, 8, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 20', 'Demo Workshop Description 20'),
(21, 9, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 21', 'Demo Workshop Description 21'),
(22, 10, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 22', 'Demo Workshop Description 22'),
(23, 10, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 23', 'Demo Workshop Description 23'),
(24, 10, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 24', 'Demo Workshop Description 24'),
(25, 10, '2022-12-25 09:26:16', '2022-12-25 09:26:16', 'Demo Workshop 25', 'Demo Workshop Description 25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workshops`
--
ALTER TABLE `workshops`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `workshops`
--
ALTER TABLE `workshops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
