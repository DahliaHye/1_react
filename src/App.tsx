import React from "react";
import Hello from "./Hello.tsx";
import Hi from "./Hi.tsx";
import Counter from "./Counter.tsx";
import "./App.css";

function App() {
  const style = {
    backgroundColor: "black",
    color: "deeppink",
    fontSize: 30,
    padding: "1rem",
  };

  // 로직
  const name = "김사과";
  const students = ["김사과", "반하나", "오렌지", "이메론"];

  // UI
  return (
    // 리턴 안까지는 이 주석 가능
    <>
      {/* js에서 주석을 다는 방법. <> 안에서는 일케일케 */}
      <Hello />
      <div style={style}>{name}</div>
      <div className="box"></div>
      <ul>
        {students.map((student) => (
          <li>{student}</li>
        ))}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://img.insight.co.kr/static/2023/03/01/700/img_20230301102134_a9m09hzm.webp"
        alt="AI 미소녀"
      />
      <Hi />
      <Hi name="김사과" />
      <Hi name="김사과" color="deeppink" />
      <Counter />
      <p>오호라</p>
    </>
  );
}

export default App;
