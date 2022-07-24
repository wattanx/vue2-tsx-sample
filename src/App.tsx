import { defineComponent } from "@vue/composition-api";
import { HelloWorld } from "./components/HelloWorld";

export default defineComponent({
  setup() {
    return () => (
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="src/assets/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
        </div>
        <HelloWorld msg="Vite + Vue" />
      </div>
    );
  },
});
