import React, { useState, useEffect } from 'react';
import './Tracking.css';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update the current date in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleInputChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      setError('Please enter a valid tracking number.');
      setTrackingData(null);
      return;
    }

    setError('');
    setTrackingData(null);

    // Simulate fetching tracking data
    setTimeout(() => {
      const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

      // Example response
      const mockData = {
        trackingNumber,
        status: 'In Transit',
        estimatedDelivery: '2025-01-15',
        checkpoints: [
          { date: formattedDate, location: 'Warehouse, New York', status: 'Package Received' },
          { date: '2025-01-11', location: 'Sorting Facility, New Jersey', status: 'Sorted for Transit' },
          { date: '2025-01-12', location: 'In Transit', status: 'On the way to destination' },
        ],
      };

      setTrackingData(mockData);
    }, 1000);
  };

  return (
    <div className='banner'>
      <div className="tracking-container">
      <h1 className="tracking-title">Track Your Delivery</h1>
      <p className="tracking-description">
        Current Date & Time: {currentDate.toLocaleString()}
      </p>
      <p className="tracking-description">Enter your tracking number to see the current status of your package.</p>
      <div className="tracking-input-container">
        <input
          type="text"
          className="tracking-input"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={handleInputChange}
        />
        <button className="tracking-button" onClick={handleTrack}>
          Track
        </button>
      </div>
      {error && <p className="tracking-error">{error}</p>}
      {trackingData && (
        <div className="tracking-info">
          <h2>Tracking Number: {trackingData.trackingNumber}</h2>
          <p>
            <strong>Status:</strong> {trackingData.status}
          </p>
          <p>
            <strong>Estimated Delivery:</strong> {trackingData.estimatedDelivery}
          </p>
          <div className="tracking-timeline">
            {trackingData.checkpoints.map((checkpoint, index) => (
              <div key={index} className="checkpoint">
                <div className="checkpoint-date">{checkpoint.date}</div>
                <div className="checkpoint-details">
                  <p className="checkpoint-location">{checkpoint.location}</p>
                  <p className="checkpoint-status">{checkpoint.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default Tracking;
