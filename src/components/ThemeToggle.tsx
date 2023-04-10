'use client';

import { DropdownMenu } from '@/components/ui/DropdownMenu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useTheme } from 'next-themes';
import { FC } from 'react';
import { Button } from './ui/Button';
import { Sun } from 'lucide-react';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Sun className='rotate-0 scale-100 transition-all' />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ThemeToggle;
