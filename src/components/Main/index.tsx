import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TagCloud } from 'react-tagcloud';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

import Container from '@mui/material/Container';

import { customTagRenderer } from '../../utils/customTagRender';

import { ITag } from '../../types/common';
import ItemCard from '../common/ItemCard';
import { collectionData, dataForTag, itemsData } from '../../constants/temporary';
import Title from '../common/Title';

import './styles.css';
import CollectionCard from '../common/CollectionCard';

function Main(): JSX.Element {
  return (
    <Container fixed sx={{ maxWidth: 'xl', paddingBottom: '70px' }}>
      <Title>
        <FormattedMessage id="main_last" />
      </Title>
      <Swiper
        navigation={true}
        spaceBetween={5}
        slidesPerView={3}
        modules={[Navigation]}
        className="mySwiper"
      >
        {itemsData.map(({ title, user, collection, tags }) => {
          return (
            <SwiperSlide key={title}>
              <ItemCard title={title} user={user} collection={collection} tags={tags} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <TagCloud
        minSize={1}
        maxSize={5}
        tags={dataForTag}
        className="simple-cloud"
        renderer={customTagRenderer}
        onClick={(tag: ITag) => alert(`'${tag.value}' was selected!`)}
      />
      <Title>
        <FormattedMessage id="main_collections" />
      </Title>
      <Swiper
        navigation={true}
        spaceBetween={5}
        slidesPerView={3}
        modules={[Navigation]}
        className="mySwiper"
      >
        {collectionData.map(({ title, user, topic, description }) => {
          return (
            <SwiperSlide key={title}>
              <CollectionCard
                title={title}
                user={user}
                topic={topic}
                description={description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

export default Main;
