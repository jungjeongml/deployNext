import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0px 20px;
  border-bottom: 1px solid #e7e3eb;
`

export const Logo = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`

export const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 100%;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    &:nth-child(2) {
      visibility: visible;
    }
  }
`

export const Item = styled.div`
  padding: 15px;
  border-radius: 10px;
  font-weight: 500;
  color: #7a6eaa;
  &:hover {
    background: #b4c3ff;
  }
`
