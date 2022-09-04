import { defineComponent } from "@vue/composition-api";
import styles from "./Center.module.css";

export const Center = defineComponent({
  setup(_, { slots }) {
    return () => (
      <div class={styles.center}>{slots.default && slots.default()}</div>
    );
  },
});
