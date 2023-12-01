import styled from "styled-components";
import lockIconImg from "../../assets/Button/lock.svg"
import unlockIconImg from "../../assets/Button/unlock.svg"

const ContainerSignup = styled.div`
    width: 152px;
    height: 26px;
    padding-left: 140px;
    padding-right: 48px;
    padding-top: 1px;
    padding-bottom: 30px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: inline-flex;
`;

const TextSignUp = styled.textarea`
    color: black;
    font-size: 20px;
    font-family: 'Inter';
    font-weight: 900;
    word-wrap: break-word;
`;

const MainContainer = styled.div`
    background: white;
    width: 834px;
    height: 1419px;
    padding-top: 64px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
`;

const SubContainer = styled.div`
  width: 456px;
  height: 156px;
  position: relative;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  border: 1px rgba(0, 0, 0, 0.66) solid;
`;

const InputBox = styled.div`
  width: 440px;
  height: 44px;
  left: 8px;
  position: absolute;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const InputText = styled.div`
  left: 13px;
  top: 7px;
  position: absolute;
  color: rgba(0, 0, 0, 0.44);
  font-size: 20px;
  font-family: 'Inter';
  font-weight: 300;
  line-height: 30px;
  word-wrap: break-word;
`;

const lockIcon = styled.div`
  width: 20px;
  height: 24px;
  left: 80;
  top: 0.60px;
  position: absolute;
  background-image: url(${lockIconImg});
`;

const unlockIcon = styled.div`
  width: 25px;
  height: 25px;
  left: 0;
  top: 0.60px;
  position: absolute;
  background-image: url(${unlockIconImg});
`;

//

const nameContainer = styled.div`
  width: 456px;
  height: 56px;
  position: relative;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  border: 1px rgba(0, 0, 0, 0.66) solid;
`;

const nameInputBox = styled.div`
  width: 440px;
  height: 44px;
  left: 8px;
  top: 6px;
  position: absolute;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const nameInputText = styled.div`
  left: 13px;
  top: 7px;
  position: absolute;
  color: rgba(0, 0, 0, 0.44);
  font-size: 20px;
  font-family: 'Inter';
  font-weight: 300;
  line-height: 30px;
  word-wrap: break-word;
`;

//
const ContainerPhone = styled.div`
    width: 456px;
    height: 156px;
    position: relative;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    border: 1px rgba(0, 0, 0, 0.66) solid;
`;

const Container82 = styled.div`
    width: 82px;
    height: 44px;
    left: 8px;
    top: 6px;
    position: absolute;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const TextContainer82 = styled.div`
    left: 7px;
    top: 7px;
    position: absolute;
    background: white;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
`;

const Text82 = styled.div`
    color: rgba(0, 0, 0, 0.44);
    font-size: 20px;
    font-family: 'Inter';
    font-weight: 300;
    line-height: 30px;
    word-wrap: break-word;
`;

const InputContainer = styled.div`
    width: 440px;
    height: 44px;
    left: 8px;
    top: 56px;
    position: absolute;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const InputTextContainer = styled.div`
    left: 9px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
`;

const InputText2 = styled.div`
    color: rgba(0, 0, 0, 0.44);
    font-size: 20px;
    font-family: 'Inter';
    font-weight: 300;
    line-height: 30px;
    word-wrap: break-word;
`;

const ContainerPhoneInput = styled.div`
    width: 265px;
    height: 44px;
    left: 95px;
    top: 6px;
    position: absolute;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const TextContainerPhoneInput = styled.div`
    left: 9px;
    top: 7px;
    position: absolute;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
`;

const TextPhoneInput = styled.div`
    color: rgba(0, 0, 0, 0.44);
    font-size: 20px;
    font-family: 'Inter';
    font-weight: 300;
    line-height: 30px;
    word-wrap: break-word;
`;

const AuthContainer = styled.div`
    width: 82px;
    height: 44px;
    left: 366px;
    top: 6px;
    position: absolute;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const AuthTextContainer = styled.div`
    left: 27px;
    top: 11px;
    position: absolute;
    color: rgba(0, 0, 0, 0.44);
    font-size: 15px;
    font-family: 'Inter';
    font-weight: 400;
    line-height: 22.5px;
    word-wrap: break-word;
`;

const AuthText = styled.div`
    color: rgba(0, 0, 0, 0.44);
    font-size: 15px;
    font-family: 'Inter';
    font-weight: 400;
    line-height: 22.5px;
    word-wrap: break-word;
`;

const CompleteContainer = styled.div`
    width: 112px;
    padding-top: 10px;
    padding-bottom: 10px;
    left: 336px;
    top: 106px;
    position: absolute;
    background: #FAFAFA;
    border-radius: 5px;
    overflow: hidden;
    border: 1px rgba(0, 0, 0, 0.44) solid;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
`;

const CompleteText = styled.div`
    color: black;
    font-size: 15px;
    font-family: 'Inter';
    font-weight: 400;
    line-height: 22.5px;
    word-wrap: break-word;
`;

export const S = {
    ContainerSignup,
    TextSignUp,
    MainContainer,
    
    SubContainer,
    InputBox,
    InputText,
    lockIcon,
    unlockIcon,
    
    nameContainer,
    nameInputBox,
    nameInputText,

    ContainerPhone,
    Container82,
    TextContainer82,
    Text82,
    InputContainer,
    InputTextContainer,
    InputText2,
    ContainerPhoneInput,
    TextContainerPhoneInput,
    TextPhoneInput,
    AuthContainer,
    AuthTextContainer,
    AuthText,
    CompleteContainer,
    CompleteText,
  };