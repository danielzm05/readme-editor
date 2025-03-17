import MarkdownPreview from "@uiw/react-markdown-preview";
import { useState } from "react";

function App() {
  const [source, setSource] = useState("");

  const changeText = () => {
    const codeTextarea = document.getElementById("code-textarea") as HTMLTextAreaElement;
    setSource(codeTextarea.value);
    console.log(source);
  };

  return (
    <main className="flex min-h-screen bg-bg">
      <aside>
        <nav>
          <ul>
            <li>TEXT</li>
          </ul>
        </nav>
      </aside>
      <textarea className="m-4 flex-1 bg-bg2" name="code" id="code-textarea" onChange={() => changeText()}></textarea>
      <MarkdownPreview source={source} style={{ flex: 1, padding: 16 }} />
    </main>
  );
}

export default App;
