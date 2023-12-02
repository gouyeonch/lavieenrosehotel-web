import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import ButtonImage from "../../assets/buttons/button.png";

type RoomData = {
  roomNumber: number;
  floor: number;
  roomSize: number;
  category: string;
  roomCondition: string;
  counter_Room:number;
  counter_Bathroom:number;
  counter_Livingroom:number;
  counter_Kitchen:number;
  counter_Terrace:number;
  bed_type:string;
  counter_bed:number;
  noSmoking:boolean;
  smokingAllowed:boolean;
  cookingAllowed:boolean;
  kitchenAvailable: boolean;
  microwaveAvailable: boolean;
  refrigeratorAvailable: boolean;
  electricKettleAvailable: boolean;
  tvAvailable: boolean;
  projectorAvailable: boolean;
  waterPurifierAvailable: boolean;
  coffeeMachineAvailable: boolean;
  firstAidKitAvailable: boolean;
  airConditionerAvailable: boolean;
  bathtubAvailable: boolean;
  bidetAvailable: boolean;
  indoorPoolAvailable: boolean;
  hairDryerAvailable: boolean;
  whirlpoolSpaAvailable: boolean;
};

const AdminModifyRoom: React.FC = () => {

  const [roomSize, setRoomSize] = useState(""); // 객실 크기 상태

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

  const initialRoomData =
    {
      roomNumber: 203,
      floor: 2,
      roomSize: 32,
      category: "1",
      roomCondition: "1",
      counter_Room:2,
      counter_Bathroom:1,
      counter_Livingroom:1,
      counter_Kitchen:1,
      counter_Terrace:1,
      bed_type:"2",
      counter_bed:2,
      noSmoking:true,
      smokingAllowed:false,
      cookingAllowed:true,
      kitchenAvailable: true,
      microwaveAvailable: true,
      refrigeratorAvailable: true,
      electricKettleAvailable: true,
      tvAvailable: true,
      projectorAvailable: false,
      waterPurifierAvailable: false,
      coffeeMachineAvailable: false,
      firstAidKitAvailable: true,
      airConditionerAvailable: true,
      bathtubAvailable: true,
      bidetAvailable: true,
      indoorPoolAvailable: false,
      hairDryerAvailable: true,
      whirlpoolSpaAvailable: false
    }
    
  const [roomData, setRoomData] = useState(initialRoomData);

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
                    객실 호수 <S.TextInput value={roomData.roomNumber}/>
                    층{" "}<S.TextInput value={roomData.floor}/> 
                    객실크기{" "}
                    <S.TextInput
                      value={roomData.roomSize}
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
                    카테고리 <S.SelectInput value={roomData.category}>
                    <option></option> //아무 것도 선택되지 않은 게 디폴트이기 때문에
                    <option value="1">스위트</option> //실제 들어갈 값
                    <option value="2">옵션2</option>
                    <option value="3">옵션3</option>
                    </S.SelectInput>
                    
                    객실 상태 <S.SelectInput value={roomData.roomCondition}>
                    <option></option>//아무 것도 선택되지 않은 게 디폴트이기 때문에
                    <option value="1">좋음</option> //실제 들어갈 값
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
                  <S.NumberInput type="number" value={roomData.counter_Room}/>
                  <S.NumberInput type="number" value={roomData.counter_Bathroom}/>
                  <S.NumberInput type="number" value={roomData.counter_Livingroom}/>
                  <S.NumberInput type="number" value={roomData.counter_Kitchen}/>
                  <S.NumberInput type="number" value={roomData.counter_Terrace}/>
                  </h4>

                <h4>
                  침대종류
                  <br/>
                  <select style={{ width: '400px', height: "30px",margin: '0 80px 0 0'}} value={roomData.bed_type}>
                    <option value="1">더블</option>
                    <option value="2">옵션2</option>
                    <option value="3">옵션3</option>
                  </select>
                  <S.NumberInput type="number" value={roomData.counter_bed}/>
                </h4>

                <h2>객실 기본 정보</h2>
                <h4>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.noSmoking}/>
                  <span>금연</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.smokingAllowed}/>
                    <span>흡연가능</span>
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.cookingAllowed}/>
                    <span>취사가능</span>
                  </div>

                  <div style={{ flex: 7}}/>
                </div>
                </h4>


                <h4 style={{ color:'gray' }}>객실 서비스</h4>
                <h4>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.kitchenAvailable}/>
                  <span>주방/식기</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.microwaveAvailable}/>
                    <span>전자레인지</span>
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.refrigeratorAvailable}/>
                    <span>냉장고</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.electricKettleAvailable}/>
                  <span>전기포트</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.tvAvailable}/>
                    <span>TV</span>
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.projectorAvailable}/>
                    <span>빔프로젝트</span>
                  </div>

                  <div style={{ flex: 4}}/>

                </div>
                </h4>

                <h4>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.waterPurifierAvailable}/>
                  <span>정수기</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.coffeeMachineAvailable}/>
                    <span>커피머신</span>
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.firstAidKitAvailable}/>
                    <span>상비약</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.airConditionerAvailable}/>
                  <span>에어컨</span>
                  </div>
                  <div style={{ flex: 6}}/>
                </div>
                </h4>


                <h4>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.bathtubAvailable}/>
                  <span>욕조</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.bidetAvailable}/>
                    <span>비데</span>
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.indoorPoolAvailable}/>
                    <span>실내수영장</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.hairDryerAvailable}/>
                  <span>헤어드라이기</span>
                  </div>

                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '4px' }} checked={roomData.whirlpoolSpaAvailable}/>
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