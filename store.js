import { reactive } from "vue";

export const store = reactive({
    projects: [],
    baseURL: 'http://127.0.0.1:8000/api'
})