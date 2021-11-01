const timeConverter = (unixTimestamp, country) => {
  const baseTimestamp = new Date(unixTimestamp * 1000);
  const date = baseTimestamp.toLocaleDateString(country);
  const time = baseTimestamp.toLocaleTimeString(country);
  return { date, time };
};

export default timeConverter;
