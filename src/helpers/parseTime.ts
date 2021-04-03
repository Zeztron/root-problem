/*
 * This function will take a time as input (ex: '05:00')
 * and convert it into total minutes
 *
 * @params: Time instance of string
 * @return: Total minutes instance of number
 */
const parseTime = (time: string): number => {
  const timeArray: string[] = time.split(':');
  return Number(timeArray[0]) * 60 + Number(timeArray[1]);
};

export default parseTime;
