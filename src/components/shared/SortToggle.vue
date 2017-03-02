<template>
  <label class="custom-control custom-checkbox">
    <span class="custom-control-description">D</span>
    <input type="checkbox" class="custom-control-input" @change="action(data)">
    <span class="custom-control-indicator"></span>
  </label>
</template>

<script>
export default {
  props: {
    data: Object,
    action: Function
  }
}
</script>
