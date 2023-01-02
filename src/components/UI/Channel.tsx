import { getBgString } from '../../utils/searchUtils';
import PlayIcon from './PlayIcon';

export default function Channel({ channel }: { channel: IChannel }) {
  return (
    <div className='channels__item'>
      <div className='channels__item-body' style={{ background: getBgString(channel.poster) }}>
        <div className='channels__item-mask mask' style={{ background: getBgString(channel.keyframe) }}>
          <div className='filter'>
            <div className='inner'>
              <button className='channels__item-btn'>
                <PlayIcon />
              </button>
              <div className='channels__item-title'>{channel.channel}</div>
              <div className='channels__item-title-sub'>
                {channel.on_air} ({channel.min_age}+)
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='channels__item-descr'>{channel.title}</p>
      <p className='channels__item-descr-sub'>
        Now on air: {channel.on_air} ({channel.min_age}+)
      </p>
    </div>
  );
}
