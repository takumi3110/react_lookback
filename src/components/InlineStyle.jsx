export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 1px black",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0",
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>inline style</p>
      <button style={buttonStyle}>button</button>
    </div>
  );
};
