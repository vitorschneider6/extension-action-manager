import { reactive } from "vue";

export const auth = reactive({
  token: null,
  isAuthenticated: false,
  role: null,
  id: null,
});
