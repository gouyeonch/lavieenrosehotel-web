import React, { useState } from "react";
import { S } from "./style";

interface ButtonProps {
    buttonName: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName }) => {
    return (
        <S.Button>
            <S.Text>{buttonName}</S.Text>
        </S.Button>
    )
}

export default Button;