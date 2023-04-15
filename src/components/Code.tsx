'use client';

import { FC, useEffect, useState } from 'react';
import { type Language } from 'prism-react-renderer';
import { useTheme } from 'next-themes';

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
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState(animated ? '' : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {}, 15);
      }, animationDelay || 150);
    }
  }, []);

  return <div>Code</div>;
};

export default Code;
