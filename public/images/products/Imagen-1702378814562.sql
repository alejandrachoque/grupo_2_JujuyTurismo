-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2023 a las 23:56:33
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

DROP DATABASE IF EXISTS sequelize;
CREATE DATABASE sequelize;
USE sequelize;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sequelize`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Link` varchar(255) NOT NULL,
  `FirstDescription` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `Price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `FirstName`, `Image`, `Link`, `FirstDescription`, `Description`, `Price`) VALUES
(26, '¡Tilcara!', 'Imagen-1702332892324.jpg', 'https://www.youtube.com/embed/YX83hyBUHUs?si=9NxQPQEfsMGm6ieR', 'Descubri la cultura precolombina', 'Fechada en el siglo XII, el Pucará de Tilcara es una fortificación preincaica que domina la Quebrada de Humahuaca. Fue construida por la tribu omaguaca, formada por distinguidos guerreros, granjeros, tejedores y alfareros. Se extiende sobre 6 hectáreas y está formada por edificios de piedra sin ventanas, corrales de animales y enclaves funerarios. El arqueólogo Juan Bautista Ambrosetti comenzó a excavar el sitio en 1911 y descubrió tres mil artefactos antiguos. En la actualidad, continúan los trabajos arqueológicos.', 25000),
(27, 'Humahuaca', 'Imagen-1702333196312.jpg', 'https://www.youtube.com/embed/qW4eW2syrpU?si=4tYnyhr8Jp3L9RIY', '¡Un viaje inolvidable!', 'Durante los primeros tres meses del año, Humahuaca -corazón de la Quebrada de Humahuaca- ofrece múltiples festivales y expresiones que lucen el acervo cultural del norte de jujeño.  Se sucederán los agradecimientos a la pachamama; la presencia de cuadrillas de copleros, de grupos musicales y de ballets de danzas; la posibilidad de degustar platos y bebidas típicas como la chicha; y la puesta en valor de prácticas ancestrales y creencias.', 20000),
(28, 'Cerro de 7 colores', 'Imagen-1702333576289.jpg', 'https://www.youtube.com/embed/ozjbdqq7bGc?si=5lh6ONmVcM1NjT-O', 'siete colores diferentes en sus capas de roca', 'Este cerro es famoso por sus colores vibrantes que van desde el rojo al amarillo, verde, marrón y blanco. La Quebrada de Humahuaca es también Patrimonio de la Humanidad por la UNESCO debido a su rica historia y cultura. Descubre cómo llegar, qué hacer y dónde alojarte para disfrutar al máximo de tu visita a Cerro de los Siete Colores.  El Cerro de los Siete Colores fue originado alrededor de setenta y cinco millones de años atrás. Está conformado por sedimentos marinos, lacustres y fluviales que fueron depositándose en la zona durante siglos.', 29999),
(29, 'Salinas Grandes', 'Imagen-1702333800849.jpg', 'https://www.youtube.com/embed/FEKiFAvly4c?si=Fv88n4g1bC0cnFlW', 'un desierto maravilloso a más de 4000 metros de altura', 'Situada a unos 190 kilómetros de la capital de Jujuy, las Salinas Grandes es el tercer salar más grande de Sudamérica con una extensión mayor a las 12 mil hectáreas a cielo abierto. Una de las áreas más blancas que puedan encontrarse en la Argentina, con una textura de robusta dureza que se situa a más de 4000 metros de altura sobre el nivel del mar', 14999);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `FirstName`, `LastName`, `Email`, `Password`) VALUES
(7, 'Test1', 'Test1', 'Test@gmail.com', '$2a$10$O/A0jUzMjB9x.xpQFZaDq.vH1umThEmqtDN5CpiMhCU'),
(8, 'Test2', 'Test2', 'Test2@gmail.com', '$2a$10$FjpjD/xGdS3kKUkYI8m2X./uiZlf6MCIga3.Vdg8MkC'),
(9, 'Test3', 'Test3', 'Test3@Gmail.Com', '$2a$10$fUy.Qv1.Fa8eCKwNT7qRbulqj5F3MB9T0uG0nXCV04D'),
(10, 'Oscarr', 'Apazaa', 'oscar@gmail.com', '$2a$10$.f1HAE4DxwZ19egdp6ckfOfBqnTJUx/HndpAVFO1nqHwP3ltX.Hkq'),
(11, 'oscar', 'apaza', 'oscar@gmail.com', '$2a$10$PvXDiF6u1/Op/1lNB74o6uthLg2ncHmSXd3Agji2urpc1KHf6JuNS'),
(12, 'oscar', 'apaza', 'oscar@gmail.com', '$2a$10$nKieyGtPQuB8gq1aPcsLT.bu8chRqUmE5fUchwUOSbHT7gE5Vq8Ea'),
(13, 'oscar', 'apaza', 'oscar@gmail.com', '$2a$10$9kOJu3aWwn38z6pGWsApTe4GlJdqnFNv3w.GhDuJ9ElpilCnEz97G'),
(14, 'asdasdas', 'dasdasads', 'oscar1@gmail.com', '$2a$10$xEaGtaO2BHWM9vH8n2U//OEaXEV8U3AwFv6mybk5KmOBM9IdqSi9W'),
(15, 'ezea', 'asd', 'a@a.com', '$2a$10$.eMKmJIf.AoH.uS3rgoXdejwNhRCNyjsQ4BdQc.9qMvFD1eQ/KR1y'),
(16, 'Admin', 'Admin', 'admin@admin.com', '$2a$10$mG8Ua7K.QLmjSJVg2Lbu3OSr0b7IMd/Eqed/0NmTzX3qaF0k8o/yq'),
(17, 'asdasad', 'asdasdad', 'admin2@gmail.com', '$2a$10$o.1FtTuxmFc/pbjsmYhHOeqj94bGfZ5ahFePMIlIRySwKKZseauK6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_prod`
--

CREATE TABLE `user_prod` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_produc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_prod`
--
ALTER TABLE `user_prod`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`,`id_produc`),
  ADD KEY `id_produc` (`id_produc`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `user_prod`
--
ALTER TABLE `user_prod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `user_prod`
--
ALTER TABLE `user_prod`
  ADD CONSTRAINT `user_prod_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_prod_ibfk_2` FOREIGN KEY (`id_produc`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
