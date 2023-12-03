import React, { useEffect, useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarUser from "../../components/Sidebar/SidebarUser";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import ResvBox from "./ResvBox";
import ResvNotFound from "./ResvNotFound";
import api from "../../api/Axios";

type RoomData = {
    id: number,
    start_date: string,
    end_date: string,
    category_name: string,
    payment_date: string,
    total_price: number,
};

            // "id": Int,
		    // "status": String(RESERVATION, DEPOSIT_CONFIRMATION, CHECK_IN, CHECK_OUT, CANCEL)
			// 	"start_date": String(yyyy-MM-dd),
		    // "end_date": String(yyyy-MM-dd),
			// 	"category_name": String
		    // "max_capacity": Int,
		    // "payment_date": String(yyyy-MM-dd),
		    // "total_price": Int
			
			// 	"adult_cnt": Int,
			// 	"teenager_cnt":Int,
			// 	"child_cnt": Int,

const CheckResvRoom: React.FC = () => {
    const [resvData, setResvData] = useState<RoomData[]>([
        //dummy 데이터
        // {
        //     paymentDate: "2023.09.05",
        //     resvDate: "2023.09.09 ~ 09.21",
        //     room: "패밀리 - 일반객실 - 정원전망 - 성인1 청소년2 아동1",
        //     payment: "250000원"
        // },
        // {
        //     paymentDate: "1999.09.05",
        //     resvDate: "1999.09.09 ~ 09.21",
        //     room: "패밀리 - 일반객실 - 정원전망 - 성인3 청소년2",
        //     payment: "100000원"
        // },
    ]);
    
    const getReservationRoomList = async () => {
        try {
            const resp = await api.get(`/reservation-rooms?&page=1&size=10`);
            if (resp && resp.data) {
                const RoomData = resp.data.reservations.map((room:any) => ({
                    id: room.id,
                    status: room.status,
                    startDate: room.start_date,
                    endDate: room.end_date,
                    categoryName: room.category_name,
                    maxCapacity: room.max_capacity,
                    paymentDate: room.payment_date,
                    totalPrice: room.total_price,
                    adultCnt: room.adult_cnt,
                    teenagerCnt: room.teenager_cnt,
                    childCnt: room.child_cnt,
                }));
                setResvData(RoomData);
            }
            else {
                console.error("No data received");
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        getReservationRoomList();
    }, []);

    return (
        <>
            <S.Container>
                <TopBar isAdmin={false} pageName="마이페이지"/>

                <S.MainBody>
                    <SidebarUser />

                    <S.RightBody>
                        <BodyTitle bodyName="객실예약 현황 확인"/>
                        
                        {resvData.length === 0 ? (
                                <ResvNotFound /> // 예약이 없으면 없다는 메세지와 예약 바로가기 랜더링
                            ) : (
                                // 예약이 있으면 예약 리스트 랜더링
                                <S.ResvList> 
                                    {resvData.map((resv, index) => (
                                        <ResvBox key={index} RoomData={resv} />
                                    ))}
                                </S.ResvList>
                            )}
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default CheckResvRoom;