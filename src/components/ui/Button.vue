<template>
  <button
      class="mc-button"
      :class="[
      `mc-button--${variant}`,
      `mc-button--${size}`
    ]"
      v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  tag?: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

withDefaults(defineProps<Props>(), {
  tag: "button",
  variant: "primary",
  size: "md"
})
</script>

<style scoped>

.mc-button {

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  border-radius: 999px;

  transition: .25s;

  font-weight: 600;

  cursor: pointer;

  user-select: none;

}

.mc-button:hover {

  transform: translateY(-2px);

}

.mc-button:active {

  transform: translateY(0);

}

.mc-button--sm {

  padding: 10px 18px;

  font-size: 14px;

}

.mc-button--md {

  padding: 14px 28px;

  font-size: 15px;

}

.mc-button--lg {

  padding: 18px 36px;

  font-size: 17px;

}

.mc-button--primary {

  color: white;

  background: linear-gradient(
      135deg,
      #3b82f6,
      #2563eb
  );

  box-shadow:
      0 12px 30px rgba(59,130,246,.35);

}

.mc-button--primary:hover {

  box-shadow:
      0 18px 40px rgba(59,130,246,.5);

}

.mc-button--secondary {

  color: white;

  border: 1px solid rgba(255,255,255,.12);

  background: rgba(255,255,255,.05);

  backdrop-filter: blur(20px);

}

.mc-button--secondary:hover {

  background: rgba(255,255,255,.08);

}

</style>