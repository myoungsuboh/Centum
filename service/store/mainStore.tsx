import {create} from 'zustand';

// 상태 관리 스토어 생성
interface MainState {
  device: string;
  setDevice: (device: string) => void;
}

export const mainStore = create<MainState>(set => ({
  device: 'windows',
  setDevice: device => set({device}),
}));
