export default function BgSliders({ allBgs, current }: IBgSlidersProps) {
  return (
    <div>
      {allBgs.map((item, i) => (
        <img
          className={'main-background__slide' + (i === current ? ' active' : '')}
          src={`../img/${item}`}
          key={i}
          alt='bg'
        />
      ))}
    </div>
  );
}
