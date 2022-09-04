import { defineComponent, ref } from "@vue/composition-api";
import { Center } from "../Center";
import styles from "./HelloWorld.module.css";

export const HelloWorld = defineComponent({
  props: {
    msg: {
      type: String,
    },
  },
  setup(props) {
    const count = ref(0);
    return () => (
      <div>
        <Center>
          <h1>{props.msg}</h1>
        </Center>

        <Center>
          <div class={styles.card}>
            <button type="button" onClick={() => count.value++}>
              count is {count.value}
            </button>
            <p>
              Edit
              <code>components/HelloWorld.vue</code> to test HMR
            </p>
          </div>
        </Center>

        <Center>
          <p>
            Check out
            <a
              href="https://vuejs.org/guide/quick-start.html#local"
              target="_blank"
            >
              create-vue
            </a>
            , the official Vue + Vite starter
          </p>
        </Center>
        <Center>
          <p>
            Install
            <a href="https://github.com/johnsoncodehk/volar" target="_blank">
              Volar
            </a>
            in your IDE for a better DX
          </p>
        </Center>
        <Center>
          <p class={styles.read_the_docs}>
            Click on the Vite and Vue logos to learn more
          </p>
        </Center>
      </div>
    );
  },
});
