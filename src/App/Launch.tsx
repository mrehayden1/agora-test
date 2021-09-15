import { useState } from 'react';

export type LaunchData = {
  details: string;
  launch_date_unix: number;
  mission_name: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
};

export default function Launch(props: LaunchData) {

  const [ open, setOpen ] = useState(false);

  return (
    <div>
      <h2>{props.mission_name}</h2>
      <dl>
        <dt>Date</dt>
        <dd>{(new Date(props.launch_date_unix * 1000)).toLocaleString()}</dd>
        <dt>Launch details</dt>
        <dd>{props.details || '(no details)'}</dd>
      </dl>
      {!open ? (
        <button onClick={() => setOpen(true)}>view rocket details</button>
      ) : (
        <>
          <h3 className="sr-only">Rocket details</h3>
          <dl>
            <dt>Rocket name</dt>
            <dd>{props.rocket.rocket_name}</dd>
            <dt>Rocket type</dt>
            <dd>{props.rocket.rocket_type}</dd>
          </dl>
          <button onClick={() => setOpen(false)}>hide rocket details</button>
        </>
      )}
    </div>
  );

}
