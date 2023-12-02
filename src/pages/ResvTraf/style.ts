import styled from "styled-components";
import Location from "../../assets/icons/Location.svg";

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
    padding: 5px 981px 5px 107px;
    align-items: flex-start;
    gap: 26px;
    border-bottom: 1px solid #C6BCBC;
    background-color: #FFF;
`;

const Contents = styled.button<{ isActive: boolean }>`
    width: 260px;
    height: 90px;
    border: none;
    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: #FFFFFF;
    }
    border: ${({isActive}) => isActive ? '1px solid red': 'none'};
    border-radius: ${({ isActive }) => isActive ? '10px' : '0'};
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
`;

const BlueLine = styled.div`
    border: 1px solid #1745EB;
    background: #1745EB;
    width: 100px;
    height: 1px;
    margin-left: 490px;
    margin-top: -2px;
`;

const ConfirmButton = styled.button`
    width: 260px;
    height: 90px;
    border: none;
    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: #FFFFFF;
    }
`;

const SpotBox = styled.div`
    width: 500px;
    height: 210px;
    border-radius: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.44);
    background: #FFF;
    margin-left: 600px;
`;

const SpotTitleText = styled.div`
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

const SpotText = styled.span`
    color: var(--kakao-logo, #000);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.44px;
    margin-left: 15px;
    margin-top: 10px;
`;

const SpotLayer = styled.div`
    display: flex;
    width: 420px;
    height: 50px;
    margin-left: 40px;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 0.5px solid var(--kakao-logo, #000);
    background: #FFF;
`;

const SpotIcon = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${Location});
`;

const OptionBox = styled.div`
    width: 500px;
    height: 210px;
    border-radius: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.44);
    background: #FFF;
    margin-left: 900px;
`;

const OptionTitleText = styled.div`
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

const OptionLayer = styled.div`
    display: flex;
    width: 420px;
    height: 50px;
    margin-left: 40px;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 0.5px solid var(--kakao-logo, #000);
    background: #FFF;
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
    CalendarContainer,
    SpotBox,
    SpotTitleText,
    SpotLayer,
    SpotIcon,
    SpotText,
    OptionBox,
    OptionTitleText,
    OptionLayer,
    ImageArea,
}

