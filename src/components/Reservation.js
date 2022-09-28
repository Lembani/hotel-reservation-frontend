import React from 'react';

const Reservation = (props) => {
  const {
    reason, duration, startDay, endDay,
  } = props;

  return (
    <div className="reservation">
      <p>
        Reason for staying:
        {reason}
      </p>
      <p>
        Duration:
        {duration}
        <small>days</small>
      </p>
      <p>
        Start Day:
        {startDay}
      </p>
      <p>
        End Day:
        {endDay}
      </p>
    </div>
  );
};

export default Reservation;