import { defineStore } from "pinia";
import type { IAccount, ICart } from "~/shared/types/common.type";

export const useMainStore = defineStore("websiteStore", {
  state: () => ({
    cart: [] as ICart[],
    account: {} as IAccount,
  }),
  actions: {
    addCart(item: ICart) {
      if (
        this.cart.find((cartItem) => cartItem.product.id === item.product.id)
      ) {
        this.cart = this.cart.map((cartItem) => {
          if (cartItem.product.id === item.product.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            };
          }
          return cartItem;
        });
        return;
      }
      this.cart.push(item);
    },
    addAccount(account: IAccount) {
      this.account = account;
      localStorage.setItem("account", JSON.stringify(account));
    },
    persistFromLocalStorage() {
      const account = localStorage.getItem("account");
      if (account) {
        this.account = JSON.parse(account);
      }
    },
  },
});
