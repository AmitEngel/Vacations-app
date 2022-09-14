-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2022 at 11:28 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacations_managment`
--

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `user_id` int(11) NOT NULL,
  `vacation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`user_id`, `vacation_id`) VALUES
(2, 34),
(2, 35),
(2, 36),
(2, 41),
(5, 34),
(5, 35),
(5, 36),
(5, 37),
(5, 38),
(27, 34);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `username` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `is_admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `password`, `is_admin`) VALUES
(1, 'AMIT', 'ENGEL', 'admin', '$2b$10$qu1.HEiLUCIDQ19aQl1fQ.GdoQnVOAOY5X665ToMDbhk5e/yo2j5S', 1),
(2, 'SHLOMO', 'RUSSELL', 'handsome', '$2b$10$Nr8YaIL4uScIquIOwVLtL.kU2N.ubxqTxXPpI051XU9Nt6TxgZXuG', 0),
(3, 'MOSHE', 'RUSSELL', 'serious', '$2b$10$ZWsBoQpMtJ5BO63Odca1runoL93v37mVWN2XYQbHjqrcSb9F46c3e', 0),
(5, 'DAVID', 'MAGIC', 'fool', '$2b$10$xXPnZ5gK1Az89AzQ.dY.U.jzxnaq2LHQmwM7xW2h9Aq.MsDwuIwqG', 0),
(6, 'YOSEF', 'RUSSELL', 'baby', '$2b$10$DlibZyUPP5heZ7XYD2rcIOM//pa4JOiYQisHWstJdmteYu0sAYXWK', 0),
(7, 'SHAI', 'MEIRI', 'shoyy', '$2b$10$uYzj9N8/9WVwNBEr8Tfhz.c3nDiT5Nrsz8abZ6VATK72SVSSO/70G', 0),
(8, 'DROR', 'FRUCHTER', 'dori', '$2b$10$BC5Or1IkMeB/vvcPJf9dj.np.k1BW0HQqtSc3PBFyT05SKOIZ8yJ2', 0),
(9, 'DUDU', 'COHEN', 'dudi', '$2b$10$Xq.OOiHjE0JHERDJi9qhOuVYg8TbGy3WTSpy02ucc8pCa.HJUCX66', 0),
(15, 'AVI', 'LEVI', 'baba', '$2b$10$frx.EYABZ0NCVeu1jkBnRuv1BA2SWVxAokxuK0j6kE18SyOAC/Dia', 0),
(16, 'AVI', 'LEVI', 'bobo', '$2b$10$8r/kjPx4fIpQ7Yq9lluMX.QlKrPFGjXDyMcFTsc2TMiKvRhZbPLoC', 0),
(17, 'MICHAEL', 'JORDAN', 'goat', '$2b$10$ftCnnFdSevC3igdqC3ibNuF.NK4wtgAEC66gWo7rsWQGfnIr17/7S', 0),
(18, 'TZACHI', 'GREENVALD', 'center', '$2b$10$tm00u2TCv.W/qKN7dM6n1.EySUQThg/EtCylBeGBuM3LeQ7txCvRe', 0),
(19, 'MOSHE', 'HABER', 'the man', '$2b$10$R9lMuS.WKqh3MRBbqWXZQu6twatb9GIp8cgbfq471sQEGK6ltd0uC', 0),
(20, 'TZUK', 'ARBELL', 'the good man', '$2b$10$40CTInrKeFZztMqMlOJmnuZlTC6zWpQGbDQua4Xxp3X2ecDV4MLuO', 0),
(21, 'HAKSJH', 'HWEJS', 'jskds98', '$2b$10$sjk9ibJ/xzTIwGm7bHvesOw3OLAaNEBpJOGLtuNbMHXf5sqfcNWm.', 0),
(22, 'KAKAKAK', 'YEYEY', 'yeyw87', '$2b$10$WPXYGg6f.y0gIfsdU2IemO4Z96hKW6h/pf.1thbzKm4DVcopPIp6y', 0),
(23, 'YOSI', 'MOSHE', 'jaskja', '$2b$10$Py7zooRC680yQ7bOyk63YeOwxtQsMXpytEaFOjwc1ocvSvRKBZv.W', 0),
(24, 'DAVID', 'AHRAON', 'hjajshg', '$2b$10$IuybyiE2WD29feYUQ6eCCuAse06uyIRog6v9zBgsnrsJZ5Gco5nGq', 0),
(25, 'SDFSD', 'XCDFFD', 'wwerwe', '$2b$10$cwMeuA4S0ixprwJ2EaIiHOdWLHSyROu7kzoSGTo41.rmHALpZgikG', 0),
(26, 'ASDA', 'ASDAS', 'asda', '$2b$10$0TP2eg1v1X4jzIT8IJSsGugBVitEYJzUVM6H48VZogQpRx1g2YDKe', 0),
(27, 'ITZIK', 'LEVI', 'dude', '$2b$10$RzYvY2aJk1tEW6wc32Tkf.sEB6M3cEPoLV5EJH3RlKnMkmHblUs6m', 0);

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` int(11) NOT NULL,
  `description` varchar(2000) COLLATE utf8_bin NOT NULL,
  `destination` varchar(30) COLLATE utf8_bin NOT NULL,
  `picture` varchar(255) COLLATE utf8_bin NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `price` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`id`, `description`, `destination`, `picture`, `from_date`, `to_date`, `price`) VALUES
(34, 'Israel\'s second largest city is an ever-growing metropolis. Today skyscrapers paint the once Palestine sky. The air is free spirited here, without the political strains felt in Jerusalem, rightfully nicknamed the \'Bubble\' by its locals. A mix of a business centre, an art hub and a beach town, Tel Aviv is the strange combination of hip and homely.  Cosmopolitan and exuberant Tel Aviv, is Israel\'s pride. The city is now known for its International Style or Bahaus architecture, the renowned White City, a UNESCO World Heritage Site. The old Jaffa Port, the Meditarranean coastline, the Carmel Market all add to the fervour of this charming city. The locals are politically and socially liberal, there even exists a thriving gay scene. The high end restaurants complement the old school eating joints, some days are for the beach others are for chic cafes, some evenings are for art galleries, others are for outdoor bike paths - Tel Aviv is that strange medley, a heterogenous mix, yet very homogenously absorbed. With theatres, concert halls and a live jazz scene, the city is a lot about culture and aesthetics. New comer or returning visitor, Tel Aviv never fails to charm!', 'Tel-Aviv', '3e974b52-1618-473c-907b-261a66e07462.jfif', '2022-08-08', '2022-08-22', 6000),
(35, 'The capital city of Spain, Madrid is most popular for its cultural and artistic heritage. It also has the liveliest nightlife in the world. It is a cosmopolitan city which is the main centre of business as well as the seat of the government. It is also the political centre of Spain.  Located in the centre of the Iberian Peninsula, Madrid is the largest city in Spain. With a population of over 3.3 million, the city is best known for its cosmopolitan nature. The city provides too a wide range of things to do, places to eat and it has all the facilities that a tourist needs. The city provides many conference resorts, leisure facilities and some of the best restaurants in Spain. It is also a great place for shopping, theatre, opera, museums, parks and more. The international airport of Madrid has three terminals and is the busiest airport in Spain. It is an amazing place for the children as well as there are numerous theme parks, excursions and zoos to keep them occupied. It is also a place to spend some romantic evenings in the stunning gardens and parks that provides tranquillity.', 'Madrid', 'e0de8e9b-31b8-4441-b9dd-3c97c2bd0ff2.jpg', '2022-08-22', '2022-09-06', 4800),
(36, 'The capital of Italy, Rome is a multifaceted metropolis steeped in a rich history of culture. Located on the central western side of the Italian peninsula, the city was founded on the shores of the river Tiber and has an independent country, the Vatican City, within it\'s borders. The city occupies a central position in Western history, as is populated with nearly as many historical and cultural attractions as it has people.¾\r\n\r\nHistorically, Rome could arguably be called the cradle of Western civilization. Capital of the Roman Kingdom, the Roman Republic and the Roman empire, the city has since become the 14th-most visited country in the world, and a UNESCO Heritage site. You can see the power and might of the erstwhile Roman empire in the ruins of the Colosseum, or revel in the architectural finery at Palatine Hill. The beauty of the artefacts at the Vatican museums are unparalleled and no one can leave Rome without seeing the Sistine Chapel! A visit to the Vatican itself would lay bare the deep Christian roots of the city, while the more adventurous sort have whatever is in the catacombs of San Calisto waiting for discovery! Italian is the most spoken language in the city. However, mass tourism has ensured that most tour guides and people in the service sectors are familiar with English.', 'Rome', 'db030a04-36c6-49c6-95ec-abd98cbaef23.jfif', '2022-08-14', '2022-08-25', 2500),
(37, 'Reykjavik is the northernmost capital city of the world and serves as the gateway and focal point of tourism in Iceland. Known for its hip music, indigenous art, rich history, funky culinary choices and breath-taking beauty, Reykjavik offers the best of modern taste and natural beauty to its tourists.\r\n\r\nReykjavik is the perfect blend of modern and medieval times with its rich viking history and centres of modern culture. It is a great place to go for groups of all size and composition whether families, friends or couples since the tourism industry in Iceland is thoroughly modernized thereby allowing an immense amount of customization. Iceland is known as the land of ice and fire with its location in the northern hemisphere close to the north pole, the land is riddled with volcanic and geothermal activity. Reykjavik has natural views of breath-taking beauty and the cityscape is a sight to behold. The northern lights are a spectacle that all travellers come to watch. National parks, geothermal pools, museums, shopping centres and a happening nightlife make Reykjavik a city with a unique vibe.', 'Reykjavik', 'f257bcb5-45a5-4105-b686-e8e92005a48a.jfif', '2022-08-28', '2022-09-25', 8000),
(38, 'Las Vegas - a place that brings neon signboards, iconic hotels and the legendary casinos to our minds. For the ultimate, no-limits entertainment trip, there is hardly any place in the world that comes close to Vegas. The city\'s bright skyline, the super luxury hotels and resorts, the world-famous casino and the even-more-world-famous nightclubs coupled with the supremely extravagant atmosphere of the Las Vegas Strip make a visit to Las Vegas unlike no other.\r\n\r\nSome of the world\'s greatest hotels - the Bellagio, the Venetian, the MGM Grand, the Wynn Las Vegas - are all located on a single stretch of road called the Strip - the Las Vegas you see in movies and TV shows. The other super famous area of Vegas is Downtown, which quite like the Strip is beautifully lit up the entire time, except for the light and sound show in the Fremont Street Experience on a curved LED roof stretching over the entire promenade! From Titanic Artifact Exhibition, Mob museum to the stunning views of Keystone Thrust and Red Rock Canyon National Conservation Area, Las Vegas has everything from historical places to modern businesses. ', 'Las Vegas', 'b16e952b-1bdb-4377-849a-7582465cae47.jfif', '2022-12-04', '2023-01-18', 12000),
(39, 'Sprawled over its namesake valley surrounded by Himalayan mountains, Kathmandu is Nepal’s capital and most-visited destination, full of ancient temples, golden pagodas, natural beauty and fascinating villages. At an elevation of 4,344 feet, Kathmandu marks the confluence of the Bagmati and Vishnumati rivers. One can find excellent trekking options of the world’s tallest peaks, stunning Indo-Tibetan and Newari craftsmanship, UNESCO-listed heritage landmarks and delicious food here.\r\n\r\nKathmandu is the gateway to exploring Nepal’s essence. Amidst the old city’s maze-like alleyways is the 1627-built Durbar Square, where locals frolic during Indra Jatra masked dance festival. Swayambhunath Stupa, Pashupatinath Temple, Monkey Temple and Boudha Stupa are some more eminent religious establishments. Outdoor enthusiasts flock to Nagarkot, Rani Pokhari Lake and Champadevi Hill for hiking, bungee jumping, rafting and mountain climbing. Learning about Buddhism at Kopan Monastery, buying pashmina shawls and trinkets at Indra Chowk and Thamel’s markets and digging into steaming momos are great ways to enhance the experience.\r\n\r\nFrom courtyards of drying chillies and rice, incense wafting out of shrines, national museums, and contemporary Nepali art galleries to hobbit-sized workshops, bustling bazaars, rickshaws, Thukpa and Everest beer, Kathmandu offers something unique for every tourist, devotee, backpacker, history buff, foodie and shopaholic.\r\n', 'Kathmandu', '2a4eb88c-ec58-4e03-bc08-d8652a4ade4a.jfif', '2022-10-06', '2022-11-16', 5600),
(40, 'Koh Pha Ngan is an island that is part of the Chumphon Archipelago, located between the islands of Koh Samui and Koh Tao. It being world famous for its full moon parties on Haad Rin, usually the rest of the time the island remains half empty. But Koh Pha Ngan is so much more than just parties. This vast inland jungle is very peaceful and it\'s serene bays can be just as beautiful for families and backpackers.\r\n\r\nMost part of Koh Pha Ngan island is a mountainous jungle, and the rest of it is coconut trees and white sand beaches. Earlier, tourists usually preferred the more developed Koh Samui to their comfort. But since the mid eighties, due to the popularity of the full moon parties, Koh Pha Ngan has been a destination that\'s driving around twenty thousand people to itself. The coconut and fishing industries being the major source of income has now been taken over by the tourism of this island. Koh Pha Ngan has a lot of other things to offer including fishing trips, diving, kite-boarding, waterfalls and is also sometimes renowned as the a meditation centre.', 'Koh Pha Ngan', '25584bd6-449e-4cca-bbf9-24152110da40.jfif', '2022-11-10', '2022-12-06', 9400),
(41, 'Formerly known as the Euro Disney Resort, Disneyland Paris is one of the primary reasons why one visits Paris. Spread across 4800 acres, Disneyland Paris is a combination of excitement and thrill due to a variety of domains of entertainment, ranging from exciting rides, shopping, dining and resorts, to a vast golf course. Disneyland Paris was opened in 1992 and saw around 15 million visitors annually. It is mainly composed of two theme parks - The Disneyland Park and Walt Disney Studios Park. Disneyland Paris is the most visited theme park in all of Europe, and the largest resort to be opened outside the United States.\r\n\r\nDisneyland Paris, the continent’s most popular theme park, undoubtedly dominates most family’s holiday destinations list. There’s an enormous collection of attractions within the park, but the most memorable ones are Buzz Lightyear’s Laser Blast, Big Thunder Mountain and the Mad Hatter’s Tea Cups. However, these attractions are mainly preferred by younger children. Older children love the daring loops of Indiana Jones and the Temple of Peril. There’s also a small boat ride offered at the park.\r\n\r\nA sight that you won’t forget throughout your whole experience is the giant iconic Sleeping Beauty Castle, which is a replica of the one seen in the movie. Apart from being an unforgettable marvel, this castle acts as a compass for visitors who tend to get lost, as it is situated at the centre of the theme park. It also has a surprise in store for you, a dragon that lurks underneath it. The complete and undivided ownership of the park lies with The Walt Disney Company, unlike its US counterpart.', 'Disneyland-Paris ', '4345aa43-19f3-417a-86e3-a769c03fb3da.jfif', '2022-09-30', '2022-12-16', 6750);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`user_id`,`vacation_id`),
  ADD KEY `vacation_id` (`vacation_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `vacation_id` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
