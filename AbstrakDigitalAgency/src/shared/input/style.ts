import styled from "styled-components";
import { gapSizes } from "../../styles/theme";

export const InputWrapper = styled.div`
margin-bottom: 16px;
`;

export const InputBox = styled.div`
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: #27272e;
`;

export const Input = styled.input`
    border: 1px solid #ecf2f6;
    border-radius: 16px;
    background-color: transparent;
    color: #292930;
    padding: 15px 20px;
    width: 100%;
    margin-top: ${gapSizes.S};
`;