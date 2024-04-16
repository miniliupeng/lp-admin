import { defineStore } from 'pinia';
import piniaPersistConfig from '@/stores/helper/persist';

export const useUserStore = defineStore({
  id: 'geeker-user',
  state: () => ({
    token: '',
    userInfo: { name: 'Geeker' }
  }),
  getters: {},
  actions: {
    setToken(token) {
      this.token = token;
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    }
  },
  persist: piniaPersistConfig('geeker-user')
});
