import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { createUniqKey } from '../utils/searchUtils';
import Channel from './UI/Channel';
import Show from './UI/Show';

export default memo(function Slider({ films, title }: ISliderProps) {
  return (
    <div className='slider'>
      {title ? (
        <div className='slider__title'>
          {title} ({films.length})
        </div>
      ) : (
        <div className='slider__title slider__title_spotlight'>in the spotlight</div>
      )}
      <Swiper slidesPerView='auto' spaceBetween={16}>
        {films.map(film =>
          film.type === 'tvchannel' ? (
            <SwiperSlide key={createUniqKey()} style={{ maxWidth: 384 }}>
              <Channel channel={film as IChannel} />
            </SwiperSlide>
          ) : (
            <SwiperSlide key={createUniqKey()} style={{ maxWidth: 368 }}>
              <Show show={film as IShow} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
});
