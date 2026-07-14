<template>
  <header class="navbar">
    <Container>
      <div class="navbar-content">

        <!-- Logo -->
        <RouterLink to="/" class="brand">
          <div class="brand-icon">
            M
          </div>

          <span class="brand-name">
            MCNSL
          </span>
        </RouterLink>

        <!-- Navigation -->
        <nav class="navigation">

          <RouterLink to="/">
            Home
          </RouterLink>

          <RouterLink to="/download">
            Download
          </RouterLink>

          <RouterLink to="/docs">
            Docs
          </RouterLink>

          <RouterLink to="/changelog">
            Changelog
          </RouterLink>

          <RouterLink to="/about">
            About
          </RouterLink>

        </nav>

        <!-- Action -->
        <Button
            tag="RouterLink"
            to="/download"
            size="sm"
        >
          Download
        </Button>

      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
import Container from "../ui/Container.vue"
import Button from "../ui/Button.vue"
</script>

<style scoped>

.navbar {

  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  height: 72px;

  z-index: 1000;

  backdrop-filter: blur(24px);

  background: rgba(5, 8, 22, .65);

  border-bottom: 1px solid rgba(255,255,255,.06);

}

.navbar-content {

  height: 72px;

  display: flex;

  align-items: center;

  justify-content: space-between;

}

.brand {

  display: flex;

  align-items: center;

  gap: 14px;

  text-decoration: none;

}

.brand-icon {

  width: 42px;
  height: 42px;

  border-radius: 14px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-weight: 700;

  color: white;

  background: linear-gradient(
      135deg,
      #3b82f6,
      #22d3ee
  );

  box-shadow:
      0 10px 24px rgba(59,130,246,.35);

}

.brand-name {

  font-size: 20px;

  font-weight: 700;

  color: white;

}

.navigation {

  display: flex;

  gap: 34px;

}

.navigation a {

  color: var(--text-secondary);

  transition: .25s;

  text-decoration: none;

}

.navigation a:hover {

  color: white;

}

.navigation .router-link-active {

  color: white;

}

@media (max-width:960px){

  .navigation{

    display:none;

  }

}

</style>