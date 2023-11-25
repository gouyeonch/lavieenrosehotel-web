import React, {useState} from "react";

const CalendarComponent: React.FC = () => {
    const [startDate, setStartDate] = useState(""); // 시작 날짜
    const [endDate, setEndDate] = useState(""); // 종료 상태

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    };

    return (
        <div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;
            시작날짜: <input
                type="date" 
                value={startDate} 
                onChange={handleStartDateChange}
            /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            종료날짜: <input
                type="date" 
                value={endDate} 
                onChange={handleEndDateChange}
            /> 
        </div>
    );
}

export default CalendarComponent;