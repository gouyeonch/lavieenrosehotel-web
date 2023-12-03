import styled from "styled-components";
import RoomType from  "../../assets/icons/RoomType.svg"

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: #fbfaf6;
`;

const Layout = styled.div`
    display: inline-flex;
    width: 100%;
    height: 90px;
    padding: 5px 5px 5px 100px;
    align-items: flex-start;
    gap: 26px;
    border-bottom: 1px solid #C6BCBC;
    background-color: #FFF;
`;

const Contents = styled.button`
    width: 260px;
    height: 90px;
    border: none;
    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: #FFFFFF;
    }
`;

const Title = styled.div`
    width: 120px;
    height: 33px;
    flex-shrink: 0;
    color: rgba(0, 0, 0, 0.44);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.44px;
`;

const SubTitle = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.44px;
    margin-top: 20px;
`;

const BodyArea = styled.div`
    position: absolute; // 절대 위치 설정
    margin: 0 auto;
    width: 100%;
    background: none;
    display: flex; // flexbox 레이아웃 적용
`;

const BlueLine = styled.div`
    border: 1px solid #1745EB;
    background: #1745EB;
    width: 141px;
    height: 1px;
    margin-left: 88px;
    margin-top: -2px;
`;

const ConfirmButton = styled.button`
    display: flex;
    width: 55px;
    height: 35px;
    padding: 0px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid var(--kakao-logo, #000);
    background: #EEE;
    backdrop-filter: blur(5px);
    cursor: pointer;
    &:hover {
        background-color: skyblue;
    }
    margin-top: 50px;
`;

const PeopleBox = styled.div`
    border-radius: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.44);
    background: #FFF;
    width: 300px;
    height: 200px;
    margin-left: 430px;
    position: absolute;
`;

const PeopleLayer = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    margin-left: 25px;
`;

const PeopleText = styled.div`
    color: var(--kakao-logo, #000);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.44px;
    margin-left: 30px;
    margin-right: 30px;
`;

const Button = styled.button`
    border-radius: 100%;
    border: 3px solid black;
    background: #FFF;
    font-weight: 700;
    width: 30px;
    height: 30px;
`;

const RoomBox = styled.div`
    position: absolute;
    width: 500px;
    height: 220px;
    border-radius: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.44);
    background: #FFF;
    margin-left: 760px;
`;

const RoomTitleText = styled.div`
    color: rgba(0, 0, 0, 0.44);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.44px;
    margin-top: 17px;
    margin-left: 22px;
`;

const RoomLayer = styled.button<{isSelected: boolean}>`
    display: flex;
    width: 80%;
    height: 50px;
    margin-left: 40px;
    align-items: center;
    flex-shrink: 0;
    border: none;
    margin-bottom: 5px;
    border-bottom: 0.5px solid var(--kakao-logo, #000);
    background: #FFF;
    &:hover {
        background-color: skyblue;
        border-radius:10px;
    }
    background: ${({ isSelected }) => isSelected ? 'skyblue' : '#FFF'}; // 선택 상태에 따른 배경색 변경
    ${({ isSelected }) => isSelected && `border-radius: 10px;`} // 선택 상태에서도 border-radius 적용
`;

const RoomTypeIcon = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${RoomType});
`;

const RoomInfo = styled.div`
    color: var(--kakao-logo, #000);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.44px;
`;


const CalendarContainer = styled.div<{ marginLeft: number}>`
    margin-left: ${({ marginLeft }) => marginLeft}px;
`;

const ImageArea = styled.div<{ backgroundImage: string }>`
    margin: 0 auto;
    width: 100%;
    height: 938px;
    background-color: #FFFFFF;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
    line-height: 900px;
    z-index: -1; // 이미지를 뒤로 보내기
`

export const S = {
    Container,
    Layout,
    Contents,
    Title,
    SubTitle,
    BodyArea,
    BlueLine,
    ConfirmButton,
    PeopleBox,
    PeopleLayer,
    PeopleText,
    Button,
    RoomBox,
    RoomTitleText,
    RoomLayer,
    RoomTypeIcon,
    CalendarContainer,
    ImageArea,
    RoomInfo,
}

