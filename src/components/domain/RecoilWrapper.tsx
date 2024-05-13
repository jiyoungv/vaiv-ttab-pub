'use client'
import { RecoilRoot } from 'recoil';

export interface RecoilWrapperProps {
  children: React.ReactNode;
}

export default function RecoilWrapper({ children }: RecoilWrapperProps) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}