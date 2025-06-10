import {useState} from 'react';

function PeriodState() {
    const [currentPreiod, setPeriod] = useState(thisPeriod);
    const changePeriod = () => setPeriod('기간 도출 함수');

  return (     
    { currentPreiod, changePeriod}
  )
}

export default PeriodState