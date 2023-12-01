// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import React, { useState } from 'react';
// import { S } from './style';
// import { ko } from 'date-fns/esm/locale'; //한국어 설정
// import { addMonths } from 'date-fns'; 

// const Calendar = () => {
//     const [startDate, setStartDate] = useState<Date | null>();
//     const [endDate, setEndDate] = useState<Date | null>();
//     const threeMonthsFromNow: Date = addMonths(new Date(), 3); // 오늘로부터 3개월 뒤의 날짜 계산

//     return (
//         <S.CalendarContainer>
//             <DatePicker
//                 showIcon
//                 locale={ko} //한글
//                 dateFormat='yyyy.MM.dd' // 날짜 형태
//                 shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
//                 minDate={new Date()} // minDate 이전 날짜 선택 불가
//                 maxDate={threeMonthsFromNow} // maxDate 이후 날짜 선택 불가
//                 placeholderText="체크인 날짜 선택"
//                 selected={startDate}
//                 onChange={(date: Date) => setStartDate(date)}
//             />
//             ~
//             <DatePicker
//                 showIcon
//                 locale={ko} //한글
//                 dateFormat='yyyy.MM.dd' // 날짜 형태
//                 shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
//                 minDate={new Date()} // minDate 이전 날짜 선택 불가
//                 maxDate={threeMonthsFromNow} // maxDate 이후 날짜 선택 불가
//                 placeholderText="체크아웃 날짜 선택"
//                 selected={endDate}
//                 onChange={(date: Date) => setEndDate(date)}
//             />
//         </S.CalendarContainer>
        
//     );
// };

// export default Calendar;