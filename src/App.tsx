import MarkdownPreview from "@uiw/react-markdown-preview";
import { useState, ChangeEvent } from "react";
import { BsTypeBold, BsTypeItalic, BsTypeH1, BsTypeH2, BsTypeH3, BsQuote, BsCode, BsLink, BsImage, BsTable } from "react-icons/bs";

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
      setText((prev) => prev + "<br />");
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

  function addElement(format: string) {
    if (selection.selected.length > 0) {
      setText(text.substring(0, selection.start) + format + text.substring(selection.end));
    } else {
      setText((prev) => prev + format);
    }
  }

  return (
    <main className="flex min-h-screen bg-bg">
      <aside className="p-2 w-12 border-r-2 border-primary">
        <nav className="flex flex-col gap-2 text-text2">
          <ul className="flex flex-col gap-2 *:rounded *:hover:cursor-pointer *:grid *:place-content-center *:text-xl ">
            <li onClick={() => addElement(`**${selection.selected}**`)}>
              <BsTypeBold />
            </li>
            <li onClick={() => addElement(`*${selection.selected}*`)}>
              <BsTypeItalic />
            </li>
            <li onClick={() => addElement(`# ${selection.selected}`)}>
              <BsTypeH1 />
            </li>
            <li onClick={() => addElement(`## ${selection.selected}`)}>
              <BsTypeH2 />
            </li>
            <li onClick={() => addElement(`### ${selection.selected}`)}>
              <BsTypeH3 />
            </li>
          </ul>
          <ul className="border-t border-text2 pt-2 flex flex-col gap-2 *:rounded *:hover:cursor-pointer *:grid *:place-content-center *:text-xl">
            <li onClick={() => addElement(`> ${selection.selected}`)}>
              <BsQuote />
            </li>
            <li onClick={() => addElement("`" + selection.selected + "`")}>
              <BsCode />
            </li>
            <li onClick={() => addElement(`[${selection.selected}](https://www.example.com)`)}>
              <BsLink />
            </li>
            <li onClick={() => addElement(`![${selection.selected}](image.jpg)`)}>
              <BsImage />
            </li>
            <li
              onClick={() =>
                addElement(`| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |`)
              }
            >
              <BsTable />
            </li>
          </ul>
        </nav>
      </aside>
      <label className=" flex-1 bg-bg2" htmlFor="code-textarea">
        <textarea
          className="p-2 w-full h-full outline-none"
          name="code-textarea"
          placeholder=""
          id="code-textarea"
          onMouseUp={(e) => handleSelection(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleChange(e)}
          value={text}
        ></textarea>
      </label>
      <MarkdownPreview source={text} style={{ flex: 1, padding: 16 }} />
    </main>
  );
}

export default App;
