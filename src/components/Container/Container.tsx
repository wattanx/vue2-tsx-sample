import { defineComponent } from "@vue/composition-api";
import styles from "./Container.module.css";

export const Container = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class={styles.container}>{slots.default && slots.default()}</div>
    );
  },
});
