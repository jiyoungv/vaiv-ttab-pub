import { atom } from 'recoil';

export const searchTypeState = atom({
  key: 'searchTypeState',
  default: 'default', // 'default' | 'rag'
});