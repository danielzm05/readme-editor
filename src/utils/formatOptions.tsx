import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsQuote,
  BsCode,
  BsLink,
  BsImage,
  BsTable,
  BsDash,
  BsTypeStrikethrough,
  BsCodeSlash,
  BsInfoCircle,
  BsEmojiLaughing,
  BsLightbulb,
  BsExclamationSquare,
  BsExclamationTriangle,
  BsExclamationOctagon
} from "react-icons/bs";

export const formatOptions = [
  { icon: <BsTypeBold />, format: (selected: string) => `**${selected}**` }, 
  { icon: <BsTypeItalic />, format: (selected: string) => `*${selected}*` },
  { icon: <BsTypeStrikethrough />, format: (selected: string) => `~~${selected}~~` }, 
  { icon: <BsTypeH1 />, format: (selected: string) => `# ${selected}` }, 
  { icon: <BsTypeH2 />, format: (selected: string) => `## ${selected}` }, 
  { icon: <BsTypeH3 />, format: (selected: string) => `### ${selected}` }, 
  { icon: <BsQuote />, format: (selected: string) => `> ${selected}` }, 
  { icon: <BsCode />, format: (selected: string) => `\`${selected}\`` }, 
  { icon: <BsEmojiLaughing />, format: (selected: string) => `> [!NOTE] \n> ${selected}` }, 
  { icon: <BsInfoCircle />, format: (selected: string) => `> [!NOTE] \n> ${selected}` }, 
  { icon: <BsLightbulb />, format: (selected: string) => `> [!TIP] \n> ${selected}` }, 
  { icon: <BsExclamationSquare />, format: (selected: string) => `> [!IMPORTANT] \n> ${selected}` }, 
  { icon: <BsExclamationTriangle />, format: (selected: string) => `> [!WARNING] \n> ${selected}` }, 
  { icon: <BsExclamationOctagon />, format: (selected: string) => `> [!CAUTION] \n> ${selected}` }, 
  { icon: <BsDash />, format: (selected: string) => `${selected}\n --- \n` }, 
  {
    icon: <BsCodeSlash />,
    format: (selected: string) => `\`\`\`\n${selected}\n\`\`\``, 
  },
  {
    icon: <BsLink />,
    format: (selected: string) => `[Texto del enlace](${selected})`, 
  },
  {
    icon: <BsImage/>,
    format: (selected: string) => `![Texto alternativo](${selected})`, 
  },{
    icon: <BsTable />,
    format: () => `| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |`, 
  }];