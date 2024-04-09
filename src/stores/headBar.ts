import { defineStore } from 'pinia'

export const useHeadBarStore = defineStore('headBarStore', {
  state: (): HeadBarState => ({
    currentHead: [],
    headers: new Map<string, HeaderContent[]>([
      ['project', [{ id: 'overview', title: '概述', path: 'overview' },
        { id: 'plan', title: '规划', path: 'plan' },
        { id: 'transaction', title: '事务', path: 'transaction' },
        { id: 'version', title: '版本', path: 'version' }]],
    ]),
  }),

  getters: {},
  actions: {
    setCurrentHeader(firstPath: string) {
      this.currentHead = this.headers.get(firstPath) || []
    },
  },
})

export interface HeadBarState {
  currentHead: HeaderContent[],
  headers: Map<string, HeaderContent[]>
}

export interface HeaderContent {
  id: string,
  title: string,
  path: string
}
