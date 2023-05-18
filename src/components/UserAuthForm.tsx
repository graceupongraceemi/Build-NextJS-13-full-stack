'use client';

import { FC, useState } from 'react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

const UserAuthForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
    } catch (error) {}
  };

  return (
    <div className={cn('flex justify-center')}>
      <Button isLoading></Button>
    </div>
  );
};

export default UserAuthForm;
