import React, { useState, useEffect } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";
import Room1 from "../../assets/images/room1.png";
import Room2 from "../../assets/images/room2.png";
import Room3 from "../../assets/images/room3.png";
import Room4 from "../../assets/images/room4.png";

// 슬라이드 이미지 URL 배열
const imageUrls = [
  Room1,
  Room2,
  Room3,
  Room4,
  // 추가 이미지 URL
];

const Homepage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // 3초 간격으로 이미지 인덱스 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트시 인터벌 정리
  }, []);
  return (
    <>
        <S.Container>
            <TopBar isAdmin={false} pageName="Lavieenrose"/>
            <UserTopBar />
            <S.ImageArea backgroundImage={imageUrls[currentImageIndex]} />
        </S.Container>
    </>
  );
};

export default Homepage;