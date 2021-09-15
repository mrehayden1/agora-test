const LAUNCH_DATA_URL = 'https://api.spacexdata.com/v3/launches?limit=50&sort_by=launch_date_utc&order=desc';

export function fetchLaunchData () {
  return (
    fetch(LAUNCH_DATA_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          // Let's assume the API never throws an error for now.
          throw new Error('API request error.');
        }
      })
  );
}
