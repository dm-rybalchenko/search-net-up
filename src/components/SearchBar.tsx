import { useState } from 'react';

export default function SearchBar({ search, showFilters, isSearch, setSearch }: ISearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = () => {
    if (isSearch) {
      showFilters(true);
      search(searchQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isSearch) {
      showFilters(true);
      search(searchQuery);
    }
  };

  return (
    <div className={isSearch ? 'search active' : 'search'}>
      <input
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onFocus={() => setSearch(true)}
        onKeyDown={handleKeyDown}
        type='search'
        className='search__input'
        placeholder='Search'
      />
      <button onClick={handleClick} className='search__btn'>
        search
      </button>
    </div>
  );
}
