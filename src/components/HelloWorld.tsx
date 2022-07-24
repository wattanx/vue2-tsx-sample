import { defineComponent, ref } from "@vue/composition-api";

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
        <h1>{props.msg}</h1>

        <div class="card">
          <button type="button" onClick={() => count.value++}>
            count is {count.value}
          </button>
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>

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
        <p>
          Install
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">
            Volar
          </a>
          in your IDE for a better DX
        </p>
        <p class="read-the-docs">
          Click on the Vite and Vue logos to learn more
        </p>
      </div>
    );
  },
});
