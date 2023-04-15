import { FC } from 'react';
import { type Language } from 'prism-react-renderer';

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animationDelay?: number;
  animated?: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  language,
  show,
  animated,
  animationDelay
}) => {
  return <div>Code</div>;
};

export default Code;
