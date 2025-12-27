import { create } from 'zustand'
import { dummyData } from '../data/DummyData'

export const useStore = create((set) => ({
  signatures: 14205, // Mock starting number
  loading: false,
  
  // Map Data
  mapData: dummyData,
  isLoadingMap: false,
  fetchMapData: () => {}, // No-op for now unless we need real fetch
  
  incrementSignatures: () => set((state) => ({ signatures: state.signatures + 1 })),
  
  // Future state for form submission
  objectionForm: {
      name: '',
      email: '',
      objection: ''
  },
  setObjectionForm: (data) => set((state) => ({ 
      objectionForm: { ...state.objectionForm, ...data } 
  }))
}))
