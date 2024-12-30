import { defineStore } from "pinia";
import type { IAccount, ICart } from "~/shared/types/common.type";

export const useMainStore = defineStore("websiteStore", {
  state: () => ({
    cart: [] as ICart[],
    account: {} as IAccount,
  }),
  actions: {
    addCart(item: ICart) {
      this.cart.push(item);
    },
    addAccount(account: IAccount) {
      this.account = account;
    },
  },
});
