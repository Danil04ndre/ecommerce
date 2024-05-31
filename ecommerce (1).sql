-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2024 a las 20:54:08
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommerce`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `id_admin` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `sub_category` text NOT NULL,
  `image` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id_product`, `id_admin`, `name`, `category`, `sub_category`, `image`, `description`, `price`, `stock`) VALUES
(1, 1, 'Laptop Hp', 'Tecnologia', 'Laptops', 'http://localhost:3000/public/1712820919178-x1504za-nj278w_1_1.webp', 'Core I3 12va Gen 8gb+512gb 15.6 Hp 250 G9 Color Gris', 1699.00, 199),
(2, 1, 'Macbook Air 13', 'Tecnologia', 'Laptops', 'http://localhost:3000/public/1712637825090-mlxy3ea_1_ztkpz9bnqijnt2la.webp', 'Procesador Apple M1 (8 Gb Ram, 256 Gb Ssd) Color Gris espacial - Distribuidor autorizado', 4899.00, 371),
(3, 1, 'Laptop Lenovo', 'Tecnologia', 'Laptops', 'http://localhost:3000/public/1712637887945-82xb0032lm-1000x1000px.webp', 'V14 G2 Itl 14 Hd I5-1135g7 16gb, Ssd 500gb+1tb', 1829.00, 214),
(4, 1, 'Teclado gamer Redragon Kumara', 'Tecnologia', 'Teclados', 'http://localhost:3000/public/1712637912536-efegc02331.webp', 'K552 QWERTY Outemu Red español España color negro con luz rainbow', 188.00, 299),
(5, 1, 'Teclado gamer Logitech Pro Series', 'Tecnologia', 'Teclados', 'http://localhost:3000/public/1712637927850-rz03-04702800_1.webp', 'G Pro QWERTY GX Blue Clicky inglés US color negro con luz RGB', 371.00, 124),
(6, 1, 'Kit de teclado y mouse gamer', 'Tecnologia', 'Teclados', 'http://localhost:3000/public/1712638080475-efegc02586.webp', 'Redragon K551RGB-BA Español Latinoamérica de color negro', 288.00, 452),
(7, 1, 'Teclado gamer HyperX Alloy Origins 60', 'Tecnologia', 'Teclados', 'http://localhost:3000/public/1712638131648-efegc02815.webp', 'Origins 60 QWERTY HyperX Lineal Red inglés US color negro con luz RGB', 341.00, 351),
(8, 1, 'Ryzen5 Ultimo', 'Tecnologia', 'Computadoras', 'http://localhost:3000/public/1712638254208-sgmp44.webp', 'Gamer Combos Completos Aproveche', 2680.00, 124),
(9, 1, 'Pc Completa', 'Tecnologia', 'Computadoras', 'http://localhost:3000/public/1712638471685-a3402wbakba088w_1_1.webp', 'I3 4ta Monitor 22 8/ssd120/hdd500 Hp', 889.00, 67),
(11, 1, 'Mouse Gamer', 'Tecnologia', 'Mouses', 'http://localhost:3000/public/1712638650408-rz01-04650100_1.webp', 'Inalámbrico recargable HyperX Pulsefire Dart negro', 398.00, 78),
(12, 1, 'Mouse Inalambrico Bluetooth', 'Tecnologia', 'Mouses', 'http://localhost:3000/public/1712638664271-efegc02370.webp', 'Microsoft Sculpt Ergonomic negro', 150.00, 89),
(13, 1, 'Mouse gamer de juego comodo', 'Tecnologia', 'Mouses', 'http://localhost:3000/public/1712638684186-efegc02372.webp', 'Redragon Cobra Chroma M711 negro', 101.00, 76),
(14, 1, 'Apple Macbook', 'Tecnologia', 'Laptops', 'http://localhost:3000/public/1712638754708-mgn93laa_principal.webp', 'Air 13,6 Chip M2 256gb', 4839.00, 49),
(15, 1, 'Portatil Hp', 'Tecnologia', 'Laptops', 'http://localhost:3000/public/1712638807335-15-dy2059la-1000x1000px.webp', 'Corei5 11ava 15-eg0500la 8gb 256ssd 15p Win 11', 1709.00, 89),
(16, 1, 'Laptop Dell 5570', 'Tecnologia', 'Laptops', 'http://localhost:3000/public/1712638866589-15-ef2505la-1.webp', 'Corei5 6ta 15.6 PuLG 8/32gb Ssd240gb Vid8gb (Reacondicionado)', 1181.00, 67),
(17, 1, 'Laptop Hp 250 G9 15.6', 'Tecnologia', 'Laptops', 'http://localhost:3000/public/1712638906620-14-dy2002la_1_1.webp', 'Core I7-1255u, Ram 16gb, 512gb Ssd', 2699.00, 76),
(18, 1, 'Computadoras', 'Tecnologia', 'Computadoras', 'http://localhost:3000/public/1712639075942-sgmp81_1.webp', 'Core I7 Intel Calidad Nuevas Completas Full', 1760.00, 64),
(19, 1, 'Pc Gamer Ryzen 5 5600g', 'Tecnologia', 'Computadoras', 'http://localhost:3000/public/1712639149848-D_NQ_NP_913368-MPE73003822273_112023-O.webp', 'Completa Monitor Gamer 24 Ips Full Hd', 4000.00, 43),
(20, 1, 'Computadoras A10', 'Tecnologia', 'Computadoras', 'http://localhost:3000/public/1712639204214-D_NQ_NP_609281-MLU74392299876_022024-O.webp', 'Vega Gamer Version Nueva Completas', 1680.00, 76),
(21, 1, 'Mouse Recargable', 'Tecnologia', 'Mouses', 'http://localhost:3000/public/1712639332858-efegc02254.webp', 'Genius ECO-8015', 79.00, 76),
(23, 1, 'Kit Gamer 4 En 1', 'Tecnologia', 'Teclados', 'http://localhost:3000/public/1712639419868-cm409s_1_ubtzmvqxv4oyroqa.webp', 'Ramko Rm01 Teclado + Mouse + Audífono +pad.', 94.00, 61),
(24, 1, 'Teclado Mecánico', 'Tecnologia', 'Teclados', 'http://localhost:3000/public/1712639508382-10020768ss_1.webp', 'Gamer T-dagger Bora Rainbow White', 159.00, 45),
(25, 1, 'Mouse gamer de juego', 'Tecnologia', 'Mouses', 'http://localhost:3000/public/1712639588369-efegc02371.webp', 'VSG Aurora azul polar', 103.00, 54),
(26, 1, 'Mouse inalámbrico', 'Tecnologia', 'Mouses', 'http://localhost:3000/public/1712639640892-fd-mo304_1_ezo5ksjvom7uua3u.webp', 'Logitech Mouse Inalambrico M280 M280 rojo', 79.00, 62),
(82, 1, 'TV Samsung 50 UHD 4K  Smart UN50AU7090GXPE', 'Tecnologia', 'Televisores', 'http://localhost:3000/public/1713225127210-un50au7090g_1_1.webp', 'Es momento de empezar a disfrutar más tus películas o programas favoritos en el Smart UHD UN50AU7090GXPE de 50 pulgadas de Samsung.', 2300.00, 182),
(83, 1, 'TV Aiwa 32 HD Smart Android AW32B4SMG', 'Tecnologia', 'Televisores', 'http://localhost:3000/public/1713225201873-aw32b4smg_1.webp', 'Ten una calidad de imagen deslumbrante gracias al nuevo televisor modelo AW32B4SMG con sistema Smart que Aiwa tiene para ti.', 599.00, 132),
(84, 1, 'TV LG 55 4K UHD ThinQ AI Smart 55UR7300PSA', 'Tecnologia', 'Televisores', 'http://localhost:3000/public/1713225310280-55ur7300psa_01.webp', 'Ten una calidad de imagen deslumbrante gracias al nuevo televisor modelo AW50B4KFG con sistema Smart que LG', 1832.00, 123),
(85, 1, 'TV Xiaomi 55 LED 4K UHD Smart TVAPRO55', 'Tecnologia', 'Televisores', 'http://localhost:3000/public/1713225393296-tvapro55_1_1.webp', 'Los mejores televisores con tecnología Smart los encuentras en aqui gracias a Xiaomi.', 1670.00, 34),
(86, 1, 'TV LG 50 4K UHD Smart 50NANO77SRA ', 'Tecnologia', 'Televisores', 'http://localhost:3000/public/1713225455457-50nano77sra_01.webp', 'Adquiere este Televisor LG 50\" 4K UHD Smart 50NANO77SRA', 1649.00, 124),
(88, 1, 'Celular Motorola G34 8GB 256GB', 'Tecnologia', 'Celulares', 'http://localhost:3000/public/1713225602337-g34_black_beaut_1.webp', 'Disfruta de este increíble celular con solo un clic. Disfruta del Celular Motorola G34 8GB 256GB 5G Negro', 549.00, 213),
(89, 1, 'Celular Honor Magic 5 Lite 5G 8GB', 'Tecnologia', 'Celulares', 'http://localhost:3000/public/1713225650870-5109asbq_1.webp', 'Disfruta de este increíble celular con solo un clic. Disfruta del Celular Honor Magic 5 Lite 5G 8GB 256GB 6.67\" Gris', 899.00, 54),
(90, 1, 'Celular Samsung Galaxy A15 4G 256GB 8GB', 'Tecnologia', 'Celulares', 'http://localhost:3000/public/1713225708607-sm-a155mzkfltp_1_2.webp', 'Disfruta de este increíble celular con solo un clic. Disfruta del Celular Samsung Galaxy A15 4G 256GB 8GB 6.5\" Negro.', 788.00, 234),
(91, 1, 'Apple iPhone 15 Pro Max 256GB', 'Tecnologia', 'Celulares', 'http://localhost:3000/public/1713225752133-mu773bea_1.webp', 'Disfruta de este increíble celular con solo un clic. Disfruta del Apple iPhone 15 Pro Max 256GB Titanio Negro', 5699.00, 31),
(92, 1, 'Apple iPhone 13 128GB Blanco', 'Tecnologia', 'Celulares', 'http://localhost:3000/public/1713225821710-mlpg3lza_1.webp', 'Disfruta de este increíble celular con solo un clic. Disfruta del Apple iPhone 13 128GB Blanco Estelar', 2599.00, 123),
(93, 1, 'Sillon reclinable Forli Fe', 'Hogar', 'Muebles', 'http://localhost:3000/public/1713225928704-fr154027_1_1.webp', 'Los mejores productos de Forli llegaron para ti.', 599.00, 21),
(94, 1, 'Mueble seccional lados intercambiables', 'Hogar', 'Muebles', 'http://localhost:3000/public/1713226003606-seconq74_1.webp', '¡Lo mejor de Casabella!', 999.00, 19),
(95, 1, 'Aspiradora vertical Eletrolux 1000W Power Speed Negro', 'Hogar', 'Electrodomesticos', 'http://localhost:3000/public/1713226156075-stk12.webp', 'Adquiere Aspiradora Electrolux', 99.00, 23),
(96, 1, 'Secadora electrica Agasho 8KG', 'Hogar', 'Electrodomesticos', 'http://localhost:3000/public/1713226231478-sec-agh02e_1_zpef8xzh2gboqneg.webp', 'Mantén tus prendes correctamente secas y listas para utilizar gracias a Agasho y su nueva secadora SEC-AGH02E', 999.00, 22),
(97, 1, 'Lampara Colgante Navarra Blanco', 'Hogar', 'Decoracion', 'http://localhost:3000/public/1713226351358-lc24n-1.webp', 'Lo mejor en iluminación lo encuentras acá.', 125.00, 33),
(98, 1, 'Lampara Colgante Galicia Gris', 'Hogar', 'Decoracion', 'http://localhost:3000/public/1713226411127-lcgagr-1.webp', 'Lo mejor en iluminación lo encuentras acá.', 155.00, 66);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping`
--

CREATE TABLE `shopping` (
  `id_shopping` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `shopping`
--

INSERT INTO `shopping` (`id_shopping`, `id_product`, `id_user`, `date`, `unit_price`, `quantity`, `total`) VALUES
(1, 2, 2, '2024-05-05 14:26:23', 4899.00, 1, 4899.00),
(2, 3, 2, '2024-05-05 14:26:23', 1829.00, 1, 1829.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `name`, `email`, `password`, `admin`) VALUES
(1, 'danilo andre', 'daniloadmin@gmail.com', '$2b$10$OrgBCC7yepHMkg1.AxJvzOniC0xrj6pW0Z8aKJw5mAMkhDb2.7TOe', 1),
(2, 'danilo andre', 'danilo@gmail.com', '$2b$10$k0Ukqk73GwDvKcWBwt5DWO9NgWlY6Y8iamDFGFpcVFUUMF8N5iAqi', 0),
(3, 'prueba', 'prueba@gmail.com', '$2b$10$jxXy/O9/nEG43FSC.Ryuj.7aEVNCZ95oYxSCz2LNxC/o9uqJnVCam', 1),
(4, 'prueba', 'prueba2@gmail.com', '$2b$10$/z51wIYD4YrwM1oa6F/J3eAGih8b90CIa0iyykZFV62zd8LcjuMi.', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indices de la tabla `shopping`
--
ALTER TABLE `shopping`
  ADD PRIMARY KEY (`id_shopping`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT de la tabla `shopping`
--
ALTER TABLE `shopping`
  MODIFY `id_shopping` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
