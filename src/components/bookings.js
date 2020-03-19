import React from 'react';

const Bookings = ({bookings}) => {
  return (
    <div>
    <center><h1>Bookings</h1></center>
    {
      bookings.map( (booking) => {
        return(<div class="card">
                   <div class="card-body">
                       <h5 class="card-title">{booking.name}</h5>
                       <h6 class="card-subtitle mb-2 text-muted">{booking.description}</h6>
                       <p class="card-text">{booking.owner || 'No owner'}</p>
                       <p class="card-text">{booking.persons}</p>
                   </div>
        </div>);
      }
    )
  }
    </div>
  );
};

export default Bookings;
