import Launch from './Launch';
import * as L from './Launch';
import { Sort } from './Filters';

export type LaunchData = L.LaunchData;

type Props = {
  launches: null | LaunchData[];
  search: string;
  sort: Sort;
}

export default function Launches(props: Props) {

  const filteredAndSortedLaunches = props.launches && props.launches
    .filter((launch) => (
      launch
        .mission_name
        .toLowerCase()
        .indexOf(props.search.toLowerCase()) >= 0
    ))
    .sort((a, b) => {
      switch (props.sort) {
        case 'newest':
          return b.launch_date_unix - a.launch_date_unix;
        case 'oldest':
          return a.launch_date_unix - b.launch_date_unix;
        case 'name':
          return a.mission_name.localeCompare(b.mission_name);
        case 'name-desc':
          return b.mission_name.localeCompare(a.mission_name);
        default:
          throw Error('Unreachable code.');
      }
    });

  return (
    filteredAndSortedLaunches && (
      <>
        {filteredAndSortedLaunches.map((launch, i) => (
          <Launch key={i} {...launch} />
        ))}
      </>
    )
  );
}
