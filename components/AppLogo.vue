<template>
  <div class="logo-wrapper">
    <img class="user-thumbnail" src="../assets/images/user-default.png" alt="default user">
    <p class="logo">Vue <span class="logo-contrast">Keep</span></p>
  </div>
</template>

<script>
export default {
  name: 'Applogo',
}
</script>

<style lang="scss" scoped>

  .user-thumbnail {
    width: 40px;
    height: 40px;
  }

  .logo-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo {
    vertical-align: sub;
    font-size: 1.7rem;
    font-weight: 400;
    margin: 0;

    span {
      font-weight: bold;
    }
  }

</style>