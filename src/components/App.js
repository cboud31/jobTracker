import React, { useState } from 'react';

import { NavBar, AppsList } from './index';

const initData = [
  {
    job_app_id: 1,
    applyDate: '2021-03-19',
    company: 'Tesla',
    title: 'CEO',
    salary: '> $1 bil',
    response: false,
    interview: false,
    offer: false,
  },
  {
    job_app_id: 2,
    applyDate: '2021-03-19',
    company: 'Google',
    title: 'President',
    salary: '> $1 bil',
    response: false,
    interview: false,
    offer: false,
  },
  {
    job_app_id: 3,
    applyDate: '2021-03-19',
    company: 'Spotify',
    title: 'Software Engineer',
    salary: '$75k - $99k',
    response: false,
    interview: false,
    offer: false,
  },
];

const App = () => {
  const [jobsList, setJobsList] = useState(initData);
  return (
    <div className="App">
      <NavBar />
      <AppsList jobsList={jobsList} />
    </div>
  );
};

export default App;
