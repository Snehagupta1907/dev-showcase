"use client"
import React, { ReactNode } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import Loader from '@repo/ui/components/ui/loader';
import { useRouter } from 'next/navigation';

interface SignedOutProps {
  children: ReactNode;
}

const SignedOut: React.FC<SignedOutProps> = ({ children }) => {
  const { ready, authenticated } = usePrivy();
  const router=useRouter();

  if (!ready) {
    return <Loader />;
  }

  if (!authenticated) {
    return <>{children}</>;
  }
 
  return null;
};

export default SignedOut;
