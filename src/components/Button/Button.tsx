import React, { useState } from "react";
import { S } from "./style";

interface ButtonProps {
    buttonName: string;
    buttonColor?: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName, buttonColor="#E5DFDF" }) => {
    return (
        <S.Button color={buttonColor}>
            <S.Text>{buttonName}</S.Text>
        </S.Button>
    );
}

export default Button;