'use client';

import { FC, useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger } from '@/ui/DropdownMenu';
import { Button } from './ui/Button';

interface ApiKeyOptionsProps {}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({}) => {
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setIsRevoking] = useState<boolean>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button variant='ghost' className='flex gap-2 items-center'>
          <p>
            {isCreatingNew
              ? 'Creating new key'
              : isRevoking
              ? 'Revoking key'
              : 'Options'}
          </p>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ApiKeyOptions;
