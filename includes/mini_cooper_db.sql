-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 03, 2020 at 04:02 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_cooper_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cars`
--

DROP TABLE IF EXISTS `tbl_cars`;
CREATE TABLE IF NOT EXISTS `tbl_cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `about` text NOT NULL,
  `picture` varchar(20) NOT NULL,
  `youtubeid` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_cars`
--

INSERT INTO `tbl_cars` (`id`, `name`, `about`, `picture`, `youtubeid`) VALUES
(1, 'COOPER S', 'It’s the original icon, reborn and reimagined for modern motoring. The MINI 3 door builds on 60+ years of timeless MINI design, but comes equipped with a whole host of 21st century tech features and practical touches to cater to your every need. Distinct by design and urban by nature, it’s made to stand out as you explore new corners of your city. And with its ultra-nimble go-kart feel, you’re sure to find something exciting around every turn.', 'cooper_red.png', 'https://www.youtube.com/embed/ajO9OuBt8go?autoplay=1&mute=1'),
(2, 'JOHN COOPER WORKS', 'Get in, strap up, and prepare to hold on tight. A MINI John Cooper Works is unlike anything you have ever experienced. Even before you’ve touched the accelerator, the throaty growl beneath the bonnet is enough to set your pulse racing. And when you do put your foot down and harness all the power at your disposal – up to 301 hp of it – you will instantly realize that this is MINI on a whole new level. This is MINI, dialled up to the maximum. This is pure driving passion, in its most powerful form.', 'black_cooper.jpg', 'https://www.youtube.com/embed/JpK6mRdy_1w?autoplay=1&mute=1'),
(3, 'COOPER S COUNTRYMAN', 'The new MINI Countryman ALL4 is as daring and adventure minded as you are. Whether you prefer playing in the city or escaping it at the first opportunity, you’ll have the freedom and flexibility to go wherever your wandering mind takes you. Time to discover the new MINI Countryman and start writing your next adventure.', 'green_cooper.jpg', 'https://www.youtube.com/embed/gy4FaQ0USU8?autoplay=1&mute=1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
