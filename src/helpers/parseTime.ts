const parseTime = (time: string) => {
  const timeArray: string[] = time.split(':');
  // Convert into total # of minutes
  return Number(timeArray[0]) * 60 + Number(timeArray[1]);
};

export default parseTime;
