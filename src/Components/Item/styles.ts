import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #00d0b3;
  border-radius: 10px;
  box-shadow: 1px 1px 0 grey;
  padding: 10px;
  width: 190px;
  height: 100px;
  cursor: pointer;
  margin: 10px;
`;

export const Name = styled.div`
  color: #00d0b3;
  font-weight: bold;
  font-size: 18px;
`;

export const Category = styled.div`
  font-size: 13px;
  text-align: left;
`;

export const Code = styled.div`
  font-size: 12px;
`;

export const Value = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: right;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
