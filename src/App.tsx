import MarkdownPreview from "@uiw/react-markdown-preview";
import { useState, ChangeEvent } from "react";
import { formatOptions } from "./utils/formatOptions";
import CopyToClipboard  from "./components/CopyToClipboard.tsx"

function App() {
  const [text, setText] = useState<string>("");
  const [selection, setSelection] = useState({
    selected: "",
    start: 0,
    end: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      setText((prev) => prev + "</br>");
    }
  };

  const handleSelection = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    const start = e.currentTarget.selectionStart;
    const end = e.currentTarget.selectionEnd;
    const selectedText = text.substring(start, end);

    setSelection((prev) => ({
      ...prev,
      start,
      end,
      selected: selectedText,
    }));
  };

  function addElement(format: string | ((selected: string) => string)) {
    if (typeof format === "function") {
      setText(text.substring(0, selection.start) + format(selection.selected) + text.substring(selection.end));
    } else {
      setText((prev) => prev + format);
    }
  }

  return (
    <main className="flex min-h-screen">
      <aside className="p-2 w-12 border-r-2 border-primary">
        <nav>
          <ul className="flex flex-col gap-3 ">
            {formatOptions.map((option, index) => (
              <li key={index} onClick={() => addElement(option.format)} className="hover:cursor-pointer grid place-content-center text-xl text-text1">
                {option.icon}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <section className="w-full max-h-screen flex flex-col sm:flex-row">
        <label className="relative min-h-1/2 flex-1 bg-bg2" htmlFor="code-textarea">
          <textarea
            className=" h-full p-4 w-full outline-none"
            name="code-textarea"
            placeholder=""
            id="code-textarea"
            onMouseUp={(e) => handleSelection(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => handleChange(e)}
            value={text}
          ></textarea>
          <CopyToClipboard
            text={text}
            style={"z-10 absolute top-3 right-3 text-text3 w-8 cursor-pointer h-8 grid place-content-center text-xl focus:outline-1 rounded-sm"}
          />
        </label>
        <MarkdownPreview source={text} style={{ flex: 1, padding: 16, overflowY: "scroll" }} />
      </section>
    </main>
  );
}

export default App;
