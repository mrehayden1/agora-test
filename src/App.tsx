import { useEffect, useState } from 'react';

import Filters, { Sort, DEFAULT_SORT } from './App/Filters';
import Launches, { LaunchData } from './App/Launches';

import { fetchLaunchData } from './api';

import './App.css';

function App() {

  const [ launches, updateLaunches ] = useState<null | LaunchData[]>(null);

  const [ sort, updateSort ] = useState<Sort>(DEFAULT_SORT);
  const [ search, updateSearch ] = useState<string>('');

  useEffect(() => {
    fetchLaunchData()
      // Let's also assume the response is always in the correct format
      // because handing errors properly is time consuming.
      .then((launches) => updateLaunches(launches as LaunchData[]));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>🚀 Launches</h1>
        {launches === null ? (
          <p>Loading launches...</p>
        ) : (
          <p>Loaded {launches.length} {launches.length === 1 ? 'launch' : 'launches'}</p>
        )}
        <Filters
          onSearch={updateSearch}
          onSortChange={updateSort} />
      </header>
      <main>
        <Launches launches={launches} sort={sort} search={search} />
      </main>
    </div>
  );
}

export default App;
