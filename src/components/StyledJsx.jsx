export const StyledJsx = () => {
  return (
      <>
        <div className="container">
          <p className="title">styled JSX</p>
          <button className={"button"}>button</button>
        </div>
        <style jsx="true">{
          `
            .container {
              border: solid 1px black;
              border-radius: 10px;
              padding: 10px;
              margin: 10px;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

            .title {
              margin: 0;
              color: #3d84a8;
            }

            .button {
              background-color: #abedd8;
              border: none;
              padding: 8px;
              border-radius: 8px;
            }
          `
        }</style>
      </>
  )
}