import MarkdownPreview from "@uiw/react-markdown-preview";
import { useState, ChangeEvent } from "react";

function App() {
  const [source, setSource] = useState("--hit");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSource(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(e.key);
    if (e.key === "Enter") {
      setSource((prev) => prev + "<br />");
    }
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
      <label className="m-4 flex-1 bg-bg2" htmlFor="code-textarea">
        <textarea
          className="w-full h-full"
          name="code-textarea"
          placeholder="#Title"
          id="code-textarea"
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleChange(e)}
          value={source}
        ></textarea>
      </label>
      <MarkdownPreview source={source} style={{ flex: 1, padding: 16 }} />
    </main>
  );
}

export default App;
