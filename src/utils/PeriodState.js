// let votePeriod; //voteEnd - voteStart 투표기간
//     let voteStart; // 관리자 지정 투표 시작일
//     let voteEnd;    // 관리자 지정 투표 마감일

// let itemPeriod; //itemEnd - itemStart 아이템등록기간
//     let itemStart;  //관리자 지정 아이템 등록 시작일
//     let itemEnd;    // 관리자 지정 아이템 등록 마감일

// let resultPeriod; //resultEnd - resultStart 결과산정기간, 표시안함 or 자동계산
//     let resultStart;    
//     let resultEnd; 

// let periodCycle = votePeriod + itemPeriod + resultPeriod; //싸이클 주기
// // 단 날짜가 겹치면 안됨 votePeriod 6월 9일 3시까지인데, itemPeriod 6월 9일 2시부터 같은거

// let today = new Date(); //오늘 날짜


//아이템 등록 기간이 끝나자마자 투표 기간을 띄울 것


export default function PeriodState(startDate, endDate){
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();

    const isInRange = today >= start && today <= end;

    return({start, end, today, isInRange});

}

PeriodState()
//이거를 3가지 상태로 도출 해야함. 배열로 빼서 순서대로 대입시킬까?