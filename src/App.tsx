import { defineComponent } from "@vue/composition-api";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";
import { Center } from "./components/Center";
import { Container } from "./components/Container";

export default defineComponent({
  setup() {
    return () => (
      <Container>
        <Center>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="src/assets/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
        </Center>
        <HelloWorld msg="Vite + Vue" />
      </Container>
    );
  },
});
