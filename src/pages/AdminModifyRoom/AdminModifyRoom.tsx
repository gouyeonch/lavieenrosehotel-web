import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../../api/Axios";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import ButtonImage from "../../assets/buttons/button.png";

type roomData = {
  number: number;
  floor: number;
  size: number;
  category: string;
  status: string;
  bedroom_cnt:number;
  bathroom_cnt:number;
  living_room_cnt:number;
  kitchen_cnt:number;
  terrace_cnt:number;
  bed_type?:string;
  bed_cnt:number;
  options:boolean[];
};

const AdminModifyRoom: React.FC = () => {

  const [roomData, setRoomData] = useState<roomData>(); // 객실 크기 상태
  const [roomSize, setRoomSize] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 데이터를 불러옵니다.
    const fetchData = async () => {
        try {
          const response = await apiClient.get(`/admin/rooms/${id}`);

          console.log(response.data.data);

          setRoomData(response.data.data);
        } catch (error) {
        }
      };

    fetchData();
  }, []);

  // 객실 크기가 변경될 때 실행되는 함수-평수 구하기 위해
  const handleRoomSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = event.target.value;
    setRoomSize(newSize);
  };

  // 평 수 계산 함수
  const calculatePyung = (squareMeter: string) => {
    
    const squareMeterValue = parseFloat(squareMeter);
    if (!isNaN(squareMeterValue)) {
      const pyungValue = squareMeterValue / 3.305785;
      return pyungValue.toFixed(2); // 소수점 2자리까지 표시
    }

  };

  

  return (
    <>
      <S.Container>
        <TopBar isAdmin={true} pageName="관리자" />
        <S.MainBody>
          <SidebarAdmin />
          <S.RightBody>
            <BodyTitle bodyName="객실 개별 정보수정"/>
            <hr color="#C6BCBC"/>
            <S.InfoForm>
              <div>
                <h2>객실 기본정보</h2>
                <div>
                  <h4>
                    객실 호수 <S.TextInput value={roomData?.number} onChange={setRoomData}/>
                    층{" "}<S.TextInput value={roomData?.floor}/>  
                    객실크기{" "}
                    <S.TextInput
                      value={roomData?.size}
                      placeholder="m²"
                      onChange={handleRoomSizeChange}
                    />
                    <span style={{ width: '90px', border: '1px solid #ccc', padding: '5px', marginLeft: '10px', borderRadius: '5px' }}>
                      {roomSize ? `${calculatePyung(roomSize)}평` : "평"} 
                    </span>
                  </h4>
                </div>


                <div>
                  <h2>객실 호수</h2>
                  <div>
                  <h4>
                    카테고리 <S.SelectInput value={roomData?.bed_type}>
                    <option></option> //아무 것도 선택되지 않은 게 디폴트이기 때문에
                    <option value="1">스위트</option> //실제 들어갈 값
                    <option value="2">옵션2</option>
                    <option value="3">옵션3</option>
                    </S.SelectInput>
                    

                  </h4>
                </div>


                <h2>객실 구성</h2>
                
                  <h4>
                  <div style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>방</div>
                    <div style={{ flex: 1 }}>화장실/욕실</div>
                    <div style={{ flex: 1 }}>거실</div>
                    <div style={{ flex: 1 }}>주방</div>
                    <div style={{ flex: 1 }}>테라스</div>
                    <div style={{ flex: 5.8 }}/>
                  </div>
                  <S.NumberInput type="number" value={roomData?.bedroom_cnt}/>
                  <S.NumberInput type="number" value={roomData?.bathroom_cnt}/>
                  <S.NumberInput type="number" value={roomData?.living_room_cnt}/>
                  <S.NumberInput type="number" value={roomData?.kitchen_cnt}/>
                  <S.NumberInput type="number" value={roomData?.terrace_cnt}/>
                  </h4>

                <h4>
                  침대종류
                  <br/>
                  <select style={{ width: '400px', height: "30px",margin: '0 80px 0 0'}} value={roomData?.bed_type}>
                    <option value="1">더블</option>
                    <option value="2">옵션2</option>
                    <option value="3">옵션3</option>
                  </select>
                  <S.NumberInput type="number" value={roomData?.bed_cnt}/>
                </h4>

                <h2>객실 기본 정보</h2>
                <h4>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[0]}/>
                  <span>금연</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[1]}/>
                    <span>흡연가능</span>
                  </div>

                  <div style={{ flex: 7}}/>
                </div>
                </h4>


                <h4 style={{ color:'gray' }}>객실 서비스</h4>
                <h4>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[2]}/>
                  <span>주방/식기</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[3]}/>
                    <span>전자레인지</span>
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[4]}/>
                    <span>냉장고</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[5]}/>
                  <span>전기포트</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[6]}/>
                    <span>TV</span>
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[7]}/>
                    <span>빔프로젝트</span>
                  </div>

                  <div style={{ flex: 4}}/>

                </div>
                </h4>

                <h4>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[8]}/>
                  <span>정수기</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[9]}/>
                    <span>커피머신</span>
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[10]}/>
                    <span>상비약</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[11]}/>
                  <span>에어컨</span>
                  </div>
                  <div style={{ flex: 6}}/>
                </div>
                </h4>


                <h4>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[12]}/>
                  <span>욕조</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[13]}/>
                    <span>비데</span>
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[14]}/>
                    <span>실내수영장</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[15]}/>
                  <span>헤어드라이기</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData?.options[16]}/>
                  <span>월풀스파</span>
                  </div>

                  <div style={{ flex: 5}}/>
                </div>

                </h4>
                </div>
              </div>
            </S.InfoForm>
            <S.ButtonDiv>
            <S.FloatingButton>
              <img src={ButtonImage}/>
            </S.FloatingButton>
            </S.ButtonDiv>
          </S.RightBody>
        </S.MainBody>
      </S.Container>
    </>
  );
};

export default AdminModifyRoom;