"use client"; 

import Button from "./components/Button"; 

export default function Home() {
  const handleClick = () => {
    alert("ボタンがクリックされました！");
  };

  return (
    <div>
      <h1>ボタンコンポーネント開発スタート！</h1>
      <Button variant="filled" onClick={handleClick}>黒ボタン</Button>
      <Button variant="outline" onClick={handleClick}>枠線ボタン</Button>
      <Button variant="ghost" onClick={handleClick}>白ボタン</Button>
    </div>
  );
}


