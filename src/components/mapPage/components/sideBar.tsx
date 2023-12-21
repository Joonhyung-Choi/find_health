import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();
  return (
    <Wrapper>
      <Header>
        <Logo
          onClick={() => {
            router.push("/");
          }}
        >
          Find
          <br />
          Health
        </Logo>
        <CloseButton onClick={() => {}}>닫기</CloseButton>
      </Header>
      <SelectDiv>
        <SelectItem>
          <SelectInfo>도</SelectInfo>
          <Select>
            <option>경기도</option>
            <option>강원도</option>
          </Select>
        </SelectItem>
        <SelectItem>
          <SelectInfo>시</SelectInfo>
          <Select></Select>
        </SelectItem>
        <SelectItem>
          <SelectInfo>군, 구</SelectInfo>
          <Select></Select>
        </SelectItem>
      </SelectDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 900px;
  z-index: 10;
  position: absolute;
  border-left: 1px solid #9dc08b;
  background-color: #40513b;
  padding: 25px 25px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 125px;
  height: 100px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
`;

const CloseButton = styled.button`
  width: 50px;
  height: 100px;
  background-color: #609966;
  border: none;
  cursor: pointer;
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 155px;
  height: 295px;
  width: 100%;
`;

const SelectItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 65px;
`;

const SelectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 123px;
  height: 100%;
  font-size: 20px;
  color: #ffffff;
`;

const Select = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 123px;
  height: 100%;
  background-color: #609966;
  font-size: 20px;
  color: #ffffff;
`;

const Modal = styled.div`
    
`