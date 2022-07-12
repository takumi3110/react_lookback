import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules"
import { InlineStyle } from "./components/InlineStyle";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (ev) => setText(ev.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <InlineStyle/>
      <CssModules />
    </div>
  );
}
