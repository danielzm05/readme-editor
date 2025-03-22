import { BsCopy } from "react-icons/bs";

interface ButtonProps {
  text: string,
  style: string
}

const CopyToClipboard: React.FC<ButtonProps> = ({text, style}) => {

  return(
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
      className={style}
    >
      <BsCopy />
    </button>
  )
}

export default CopyToClipboard;