/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from "@emotion/react";
import {styled} from "@emotion/styled"

export const Emotion = () => {
  const containerStyle = css`
    border: solid 1px black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: "0",
    color: "#3d84a8"
  })
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <Button>button</Button>
    </div>
  )
}

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