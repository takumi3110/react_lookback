import styled from 'styled-components';

export const StyledComponents = () => {
  return (
    <>
      <Container>
        <Title>styled components</Title>
        <Button>button</Button>
      </Container>
    </>
  )
}

const Container = styled.div`
  border: solid 1px black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`

const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`