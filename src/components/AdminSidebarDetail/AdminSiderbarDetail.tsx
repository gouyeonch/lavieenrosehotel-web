import React from "react";
import { S } from './style';

interface AdminSidebarDetailProps {
    adminSidebarName: string;
}

const AdminSidebarDetail: React.FC<AdminSidebarDetailProps> = ({adminSidebarName}) => {
    return (
        <S.SidebarArea>
            <S.SidebarWrapper>
                <S.Layout>
                    <S.CircleArea>
                        <S.Text>1</S.Text>
                    </S.CircleArea>
                    <S.Text>{adminSidebarName}</S.Text>
                </S.Layout>
            </S.SidebarWrapper>
            <S.SidebarWrapper>
                <S.Layout>
                    <S.CircleArea>
                        <S.Text>2</S.Text>
                    </S.CircleArea>
                    <S.Text>이미지</S.Text>
                </S.Layout>
            </S.SidebarWrapper>
            <S.SidebarWrapper>
                <S.Layout>
                    <S.CircleArea>
                        <S.Text>3</S.Text>
                    </S.CircleArea>
                    <S.Text>상세설정</S.Text>
                </S.Layout>
            </S.SidebarWrapper>
        </S.SidebarArea>
    );
};

export default AdminSidebarDetail;