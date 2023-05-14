import { defineStore } from 'pinia';
 import {Matrix} from "../assets/Matrix";
import {MatrixRow} from "../assets/types";

export const useMatrix = defineStore({
    id: 'matrix',
    state: () => ({
        matrix: [] as MatrixRow[],
        loading: false,
        error: null as string | null
    }),
    actions: {
        async fetchTodos() {
            this.loading = true;
            try {
                this.matrix = Matrix;
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
});