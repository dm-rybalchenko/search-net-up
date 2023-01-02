import { getBgString, getFilmsLength } from '../../utils/searchUtils';

export default function Show({ show }: { show: IShow }) {
  return (
    <div className='shows__item'>
      <div className='shows__item-body' style={{ background: getBgString(show.poster) }}>
        <div className='shows__item-body-upper'>
          {show.is_new && <div className='shows__item-newmark'>New on NetUP TV</div>}
          <div className='shows__item-rating'>
            IMDB <span>{show.imdb_rate}/10</span>
          </div>
        </div>
        <div className='shows__item-mask mask' style={{ background: getBgString(show.keyframe) }}>
          <div className='filter'>
            <div className='inner'>
              <button className='shows__item-btn'>More details</button>
            </div>
          </div>
        </div>
      </div>
      <div className='shows__item-descr'>
        <p className='shows__item-title'>{show.title}</p>
        <p className='shows__item-info'>
          {show.country} | {show.year} | {getFilmsLength(show.length)} min | {show.num_seasons} seasons | {show.min_age}
          +
        </p>
        <p className='shows__item-tags'>{show.genres.join(', ')}</p>
      </div>
    </div>
  );
}
