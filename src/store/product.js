import { defineStore } from "pinia";

import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: null,
  }),
  actions: {
    async getAllProducts() {
      fetch("https://sistemtoko.com/public/demo/product")
        .then((res) => res.json())
        .then((json) => {
          this.products = json.aaData;
          console.log(this.products);
        });
    },
  },
});
