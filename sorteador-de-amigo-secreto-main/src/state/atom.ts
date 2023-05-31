import { atom } from 'recoil'

export const listaParticipanteState = atom<String[]>({
    key: 'listaParticipanteState',
    default: []
})

export const erroState = atom<string>({
    key:'erroState',
    default:''
})
