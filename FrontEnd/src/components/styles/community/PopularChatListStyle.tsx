import styled from 'styled-components'

export const Container = styled.div``
export const Context = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LeftGrid = styled.div`
  display: grid;
  height: 14vh;
`
export const Title = styled.div`
  font-weight: 600;
  font-size: 1.7rem;
`
export const Sub = styled.div`
  font-weight: 500;
`
export const CreateButton = styled.div`
  background-color: #94a3b8;
  color: #f1f5f9;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
`

export const ArrowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
`
export const ArrowButton = styled.img`
  cursor: pointer;
`

export const ChatCard = styled.div`
  border: 2px solid #d9d9d9;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  //-3px -3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 400px;
  height: 200px;
  padding: 20px 30px;
`

export const CategoryBadge = styled.div`
  background-color: #f1f5f9;
  color: #94a3b8;
  border-radius: 5px;
  font-weight: 600;
  font-size: 13px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
`

export const CardContent = styled.div`
  font-weight: 500;
  font-size: 16px;
`

export const CardCategory = styled.div`
  font-weight: 600;
  color: #696d6e;
  display: flex;
`

export const Icon = styled.img`
  scale: 80%;
`

export const CardSubContent = styled.div`
  color: #696d6e;
`
