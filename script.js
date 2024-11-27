window.onload = function() {
  // Simulate uptime and channels count data (in a real app, you can pull this data from an API or external source)
  const botStats = {
    uptime: "1 day, 2 hours, 30 minutes", // Example uptime
    channels: 5 // Example number of channels
  };

  // Update the DOM with the data
  document.getElementById('uptime-text').textContent = botStats.uptime;
  document.getElementById('channels-count').textContent = botStats.channels;
};
