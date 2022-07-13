# 様々なcssの使い方

1. Inline Style
    - 変数としてstyleを登録できる。 例：`const containerStyle`
    - 変数をクラス名で指定する。
    - キャメルケースに変更する。例：`backgroundColor`
    - 文末は`;`(セミコロン)ではなく、`,`で閉じる。
2. CSS Modules
    - node-sassをインストールする
    - ファイル名のあとに`.module`をつける。例：`CssModules.module.scss`
    - `import classes from "./cssModules.module.scss";`でインポートする
    - `className={classes.〇〇}`でクラス名を指定して、適用される。
    - cssファイルは普通と同様の記述ができる。
3. Styled JSX
    - styled-jsxをインストールする。
    - styleタグの中で記述する。
    - テンプレートリテラルで記述する。
    - cssのまま記述できる。
    - クラス名もそのまま使用できる。
    - デフォルトでは疑似要素が使用できない。
    - reactフレームワークのnext.jsに標準装備されている。
4. Styled Components
    - styled-componentsをインストールする。
    - `import styled from "styled-components"`でインポートする。
    - 変数を作成して、そのなかに`styled.div`、その直後にテンプレートリテラルでcssを記述できる。
     ```
     const Container = styled.div`
     border: solid 1px black;
     border-radius: 10px;
     padding: 10px;
     margin: 10px;
     display: flex;
     justify-content: space-around;
     align-items: center;
     `;
     ```
   - 作成した変数を`styled`で指定したタグと入れ替える。
   - `<div>` → `<Container>` 
   - cssはsassの記法が使える。

5. Emotion
   - `@emotion/react`, `@emotion/styled`をインストールする。
   - `import {jsx} from "@emotion/react`をインポート。
   - コメントで`/** @jsx jsx*/`を記述するのがルール。
   - エラーがでる場合は`/** @jsxRuntime classic */`を追加。
   - cssをインポートする。
   - テンプレートリテラルでcssの記述。
   - タグに`css={変数名}`で適用される。
   - インポートするものにより、
     1. styledJSXの記述方法
     2. inline styleの記述方法
     3. styled componentsの記述方法 
     が使用できる。