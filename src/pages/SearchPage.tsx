import { useEffect, useState } from 'react';

import { useFetching } from '../hooks/useFetching';
import FilmService from '../api/FilmService';
import Slider from '../components/Slider';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SortFilms from '../components/SortFilms';
import BgSliders from '../components/UI/BgSliders';

export default function SearchPage() {
  const [films, setFilms] = useState<TFilms[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isSearchng, setIsSearching] = useState(false);

  const [allBgs, setAllbgs] = useState<string[]>([]);
  const [currentBg, setCurrentBg] = useState<number>(0);

  const [fetchFilms, isFilmsLoading, filmError] = useFetching(async (query?: string) => {
    let response: IServerResp;
    if (query) {
      response = await FilmService.getBySearchQuery(query);
    } else {
      response = await FilmService.getAll();
    }

    setAllbgs([...response.backgrounds.map((bg: IBg) => bg.url)]);
    setFilms([...response.items]);
  });

  useEffect(() => {
    fetchFilms();
  }, []);

  useEffect(() => {
    const idInterval = setInterval(() => setCurrentBg(state => (state + 1) % allBgs.length), 5000);

    return () => {
      clearTimeout(idInterval);
    };
  }, [allBgs]);

  return (
    <div className='main-background'>
      {!isFilmsLoading && <BgSliders allBgs={allBgs} current={currentBg} />}
      <div className='wrapper'>
        <Header />
        <main className='main'>
          <SearchBar
            search={fetchFilms}
            isSearch={isSearchng}
            setSearch={setIsSearching}
            showFilters={setShowFilters}
          />
          {filmError && <div className='notification error'>Произошла ошибка ${filmError}</div>}
          {isFilmsLoading ? (
            <div className='notification'>Загрузка...</div>
          ) : (
            <div>
              {showFilters && <SortFilms films={films} />}
              {!isSearchng && <Slider films={films} />}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
