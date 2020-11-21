import { Box, List, Text } from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss';

interface Props {}

const Carousel = (props: Props) => {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    variableWidth: true,
  };

  return (
    <Box
      as="section"
      w="90vw"
      padding="20px 0"
      className="user-carousel"
    >
      <Box as="h2">
        <Text d="inline-block" mr="1rem">
          아티스트 소개
        </Text>
        <Link to="/artists" style={{ fontSize: '.5rem' }}>
          전체 보기
        </Link>
      </Box>
      <List as={Slider} p="12px" {...settings}>
        {Array(20)
          .fill(null)
          .map((v, i) => (
            <Box d="flex" align="center" pr="12px" key={i}>
              {/* <Box
                className="wow"
                border="2px solid blue"
                color="white"
                bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_qq1-gkEykIOOSTYPhCszPuM4UbvWwggGFgSzMiEfiwoLFZyTSLFmlTbAkF566jIbQ4PF_ttg4WGN5lwVinFm4yF4N4Eo7QETn3DDllg&usqp=CAU&ec=45725304)"
                w="120px"
                maxH="120px"
                pt="98%"
                bgSize="cover"
                _hover={{
                  width: '200px',
                }}
              /> */}
              <div
                className="carousel-item"
                style={{
                  border: '1px solid blue',
                  color: 'white',
                  background:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTATsQ5Hr_2CJV2TKSo-Py7vjwJ-FGbDncW7A&usqp=CAU)',
                  width: 90,
                  height: 90,
                  backgroundSize: 'cover',
                  transition: '.2s .6s',
                }}
              ></div>
              <h1>{`${i}`.repeat(2)}</h1>
            </Box>
          ))}
      </List>
    </Box>
  );
};

export default Carousel;
