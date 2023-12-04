import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { S } from "./style";
import apiClient from "../../api/Axios";
import TopBar from "../../components/TopBar/TopBar";
import ViewBox from "../../components/ViewBox/ViewBox";
import ViewBoxUnit from "../../components/ViewBox/ViewBoxUnit";
import Button from "../../components/Button/Button";

type ResvData = {
    category_name?: string;
    room_type?: string;
    view_type?: string;
    bedroom_cnt?: number;
    bathroom_cnt?: number;
    living_room_cnt?: number;
    kitchen_cnt?: number;
    terrace_cnt?: number;
    bed_type?: string;
    bed_cnt?: number;
    options?: boolean[];
    breakfast_orders?: boolean[];
    reservation_name?: string;
    reservation_phone_number?: string;
    reservation_date?: string;
    using_between?: string;
    payment_method?: string;
    payment_price?: string;
};

const CheckResvRoomDetail: React.FC = () => {
    const [ResvData, setResvData] = useState<ResvData>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // 데이터를 불러옵니다.
        const fetchData = async () => {
            try {
              const response = await apiClient.get(`/admin/reservation-rooms/${id}`);

              console.log(response.data.data);

              setResvData(response.data.data);
            } catch (error) {
            }
          };

        fetchData();
      }, []);

    return (
        <>
            <S.Container>
                <TopBar isAdmin={false} pageName="마이페이지"/>

                <S.MainBody>
                    <S.RightBody>

                        <S.SubTitle>객실 기본정보</S.SubTitle>
                        <S.ColumnBox>
                            <S.RowBox>
                                <ViewBox label={"객실명"} value={ResvData?.category_name + " " + ResvData?.room_type + " " + ResvData?.view_type} width={"950px"}/>
                            </S.RowBox>
                        </S.ColumnBox>

                        <S.SubTitle>객실 구성</S.SubTitle>
                        <S.ColumnBox>
                            <S.RowBox>
                                <ViewBoxUnit label={"방"} value={ResvData?.bathroom_cnt} unit={"개"} width={"150px"}/> 
                                <ViewBoxUnit label={"화장실/욕실"} value={ResvData?.bathroom_cnt} unit={"개"} width={"150px"}/> 
                                <ViewBoxUnit label={"거실"} value={ResvData?.living_room_cnt} unit={"개"} width={"150px"}/> 
                                <ViewBoxUnit label={"주방"} value={ResvData?.kitchen_cnt} unit={"개"} width={"150px"}/> 
                                <ViewBoxUnit label={"테라스"} value={ResvData?.terrace_cnt} unit={"개"} width={"150px"}/> 

                            </S.RowBox>

                            <S.RowBox>
                                <ViewBox label={"침대종류"} value={ResvData?.bed_type} width={"210px"}/>
                                <ViewBoxUnit label={"침대 개수"} value={ResvData?.bed_cnt} unit={"개"} width={"210px"}/> 
                            </S.RowBox>
                        </S.ColumnBox>

                        <S.SubTitle>객실 상세정보</S.SubTitle>
                        <S.ColumnBox>
                            <S.RowBox>
                                <S.Text>객실 서비스</S.Text>
                            </S.RowBox> 
                            {ResvData?.options !== undefined &&
                            <S.RowBox>
                                <S.Checkbox checked={ResvData?.options[0]}/>
                                <S.CheckBoxAnswer>금연</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[1]}/>   
                                <S.CheckBoxAnswer>취사가능</S.CheckBoxAnswer>
                            </S.RowBox> 
                            }

                            <S.RowBox>
                                <S.Text>객실 구비품목 및 시설</S.Text>
                            </S.RowBox> 
                            {ResvData?.options !== undefined &&
                            <S.RowBox>
                                <S.Checkbox checked={ResvData?.options[2]}/>
                                <S.CheckBoxAnswer>주방/식기</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[3]}/>   
                                <S.CheckBoxAnswer>전자레인지</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[4]}/>   
                                <S.CheckBoxAnswer>냉장고</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[5]}/>   
                                <S.CheckBoxAnswer>전기포트</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[6]}/>   
                                <S.CheckBoxAnswer>TV</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[7]}/>   
                                <S.CheckBoxAnswer>빔프로젝트</S.CheckBoxAnswer>
                            </S.RowBox> 
                            }
                            {ResvData?.options !== undefined &&
                            <S.RowBox>
                                <S.Checkbox checked={ResvData?.options[8]}/>
                                <S.CheckBoxAnswer>정수기</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[9]}/>   
                                <S.CheckBoxAnswer>커피머신</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[10]}/>   
                                <S.CheckBoxAnswer>에어컨</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[11]}/>   
                                <S.CheckBoxAnswer>헤어드라이기</S.CheckBoxAnswer>
                            </S.RowBox> 
                            }
                            {ResvData?.options !== undefined &&
                            <S.RowBox>
                                <S.Checkbox checked={ResvData?.options[12]}/>
                                <S.CheckBoxAnswer>실내수영장</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[13]}/>   
                                <S.CheckBoxAnswer>욕조</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[14]}/>   
                                <S.CheckBoxAnswer>비데</S.CheckBoxAnswer>

                                <S.Checkbox checked={ResvData?.options[15]}/>   
                                <S.CheckBoxAnswer>월풀스파</S.CheckBoxAnswer>
                            </S.RowBox> 
                            }
                            
                            
                        </S.ColumnBox>

                        <S.SubTitle>예약 정보</S.SubTitle>
                        <S.ColumnBox>
                            <ViewBox label={"예약자"} value={ResvData?.reservation_name} width={"810px"}/>
                            <ViewBox label={"예약자 번호"} value={ResvData?.reservation_phone_number} width={"810px"}/>
                            <ViewBox label={"예약 날짜"} value={ResvData?.reservation_date} width={"810px"}/>
                            <ViewBox label={"이용 날짜"} value={ResvData?.using_between} width={"810px"}/>
                            <ViewBox label={"결재 수단"} value={ResvData?.payment_method} width={"810px"}/>
                            <ViewBox label={"결재 금액"} value={ResvData?.payment_price} width={"810px"}/>   
                        </S.ColumnBox>

                        <S.ButtonBox onClick={() => navigate(`/checkResvRoom`)}>
                            <Button buttonName="    확인 완료   " buttonColor="#BFDEFA"/>
                        </S.ButtonBox>
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default CheckResvRoomDetail;