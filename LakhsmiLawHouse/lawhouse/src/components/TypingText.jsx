import { useEffect, useState } from "react";

const TypingText = () => {
  const text = "Welcome to our online Bookstore";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => { 
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 100);
    

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
  style={{
    fontSize: "45px",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    padding: "10px",
    overflow: "visible",
    whiteSpace: "normal",
    wordBreak: "break-word",
    background:
      "linear-gradient(to right, red, orange, white, blue, violet)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop:"100px"

  }}
>
  {displayText}
</h1>
    
  );
};

export default TypingText;