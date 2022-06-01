import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Div = styled.div`
  display: flex;
  flex: 1 1 50%;
  height: 100vh;
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center left;
`;

export const NFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
  justify-content: center;
  width: 100%;
  padding: 30px;
  height:100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 3vw;
  margin-bottom: 5px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  column-gap: 15px;
  margin-right: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  margin-top:5px;
`;

export const NFormContent = styled.form``;

export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.09);
  width: inherit;
  height: inherit;
`;
export const FormWrapper = styled.div`
  width: 100%;
  height: 630px;
  border-radius: 3px;
  background-color: #fff;
  max-width: 442px;
  border-radius: 0px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.08),
    0px 24px 38px 3px rgba(0, 0, 0, 0.07), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
`;

export const FormContent = styled.div`
  flex: 1 1 auto;
  padding: 24px;
  height: 100%;
  overflow-y: auto;
`;
export const FormIndication = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    font-size: 1.3rem;
    font-family: "GT Walsheim Pro", Roboto, sans-serif;
    font-weight: 400;
    line-height: 2rem;
  }
`;

export const BtnWrapper = styled.div`
  margin: 15px 0 15px 0;
`;
export const Input = styled.input`
  padding: 0.5em;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  outline: none;
  width: 100%;
  height: 40px;
  margin-bottom: .5em;
  transition: 0.5s ease-in;

  &:focus {
    border: 1px solid orange;
  }

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputBlock = styled.div`
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 13px;
  line-height: 1.8;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: ${({ primary }) =>
    primary ? "rgba(253,81,7,1);" : "transparent"};
  border: ${({ primary }) => (primary ? "none" : "1px solid #000")};
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  white-space: nowrap;
  min-width: 100px;
  width: 100%;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "10px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

export const CaptionWrap = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #241815;
    font-size: 0.75rem;
    font-family: "GT Walsheim Pro", Roboto, sans-serif;
    font-weight: 400;
    line-height: 1rem;
  }
`;
export const SignupLink = styled(LinkR)``;

export const PolicyWrap = styled.div`
  margin-top: 3em;
  p {
    font-size: 0.75rem;
    font-family: "GT Walsheim Pro", Roboto, sans-serif;
    font-weight: 400;
    line-height: 1rem;
  }
`;
