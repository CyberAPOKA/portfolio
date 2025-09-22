<script setup>
import { ref, onMounted } from 'vue'

const currentTheme = ref('light')

const themes = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
  'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
  'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
  'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte',
  'abyss', 'silk'
]

const changeTheme = (theme) => {
  currentTheme.value = theme
  // Remove any existing theme classes
  document.documentElement.removeAttribute('data-theme')
  // Add the new theme
  document.documentElement.setAttribute('data-theme', theme)
  // Also try setting it on the body as fallback
  document.body.setAttribute('data-theme', theme)
}

// Initialize theme on mount
onMounted(() => {
  changeTheme('light')
})
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <!-- Navbar -->
    <div class="navbar bg-base-200 shadow-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">Portfolio</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a class="text-base-content hover:text-primary">Home</a></li>
          <li><a class="text-base-content hover:text-primary">About</a></li>
          <li><a class="text-base-content hover:text-primary">Contact</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z">
              </path>
            </svg>
            Theme
          </div>
          <ul tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto">
            <li v-for="theme in themes" :key="theme">
              <a @click="changeTheme(theme)" :class="{ 'active': currentTheme === theme }">
                {{ theme }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold text-primary">Portfolio</h1>
          <p class="py-6 text-base-content">
            Bem-vindo ao meu portfólio! Aqui você pode ver exemplos dos temas do DaisyUI em ação.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

    <!-- Cards Section -->
    <div class="container mx-auto p-8">
      <h2 class="text-3xl font-bold text-center mb-8 text-base-content">Componentes com Temas</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-primary">Card Title</h2>
            <p class="text-base-content">Este é um exemplo de card usando as cores do tema atual.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Action</button>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-secondary">Card Title</h2>
            <p class="text-base-content">As cores se adaptam automaticamente ao tema selecionado.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-secondary">Action</button>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-accent">Card Title</h2>
            <p class="text-base-content">Experimente mudar o tema para ver as diferenças!</p>
            <div class="card-actions justify-end">
              <button class="btn btn-accent">Action</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Buttons Section -->
      <div class="mt-12">
        <h3 class="text-2xl font-bold mb-6 text-base-content">Botões com Diferentes Cores</h3>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-accent">Accent</button>
          <button class="btn btn-neutral">Neutral</button>
          <button class="btn btn-info">Info</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-error">Error</button>
        </div>
      </div>

      <!-- Alerts Section -->
      <div class="mt-12">
        <h3 class="text-2xl font-bold mb-6 text-base-content">Alertas</h3>
        <div class="space-y-4">
          <div class="alert alert-info">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Informação importante!</span>
          </div>
          <div class="alert alert-success">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Operação realizada com sucesso!</span>
          </div>
          <div class="alert alert-warning">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z">
              </path>
            </svg>
            <span>Atenção! Verifique os dados.</span>
          </div>
          <div class="alert alert-error">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Erro! Algo deu errado.</span>
          </div>
        </div>
      </div>

      <!-- Progress Section -->
      <div class="mt-12">
        <h3 class="text-2xl font-bold mb-6 text-base-content">Barras de Progresso</h3>
        <div class="space-y-4">
          <progress class="progress progress-primary w-full" value="32" max="100"></progress>
          <progress class="progress progress-secondary w-full" value="70" max="100"></progress>
          <progress class="progress progress-accent w-full" value="100" max="100"></progress>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <p class="font-bold">
          Portfolio com DaisyUI
          <br>
          Demonstrando todos os temas disponíveis
        </p>
        <p>Copyright © 2024 - Todos os direitos reservados</p>
      </div>
    </footer>
  </div>
</template>
