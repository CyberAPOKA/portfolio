# Custom Cursor Component

## Funcionalidades

### 🎯 **Cursor Dot (Ponto Pequeno)**

- **Tamanho**: 4px x 4px
- **Cor**: Azul primário (#3b82f6)
- **Movimento**: Segue o mouse instantaneamente
- **Posição**: Centro exato do cursor
- **Adicional**: Não substitui o cursor padrão

### ⭕ **Cursor Outline (Círculo Maior)**

- **Tamanho**: 40px x 40px
- **Borda**: 2px sólida com opacidade
- **Movimento**: Segue o mouse com delay suave
- **Animação**: Interpolação suave usando `requestAnimationFrame`
- **Adicional**: Não substitui o cursor padrão

### 🎨 **Temas Dinâmicos**

- **Light**: Azul (#3b82f6)
- **Dark**: Azul claro (#60a5fa)
- **Cupcake**: Rosa (#ff9ff3)
- **Bumblebee**: Amarelo (#fbbf24)
- **Emerald**: Verde (#10b981)
- **E todos os outros temas** com cores específicas

## Implementação

### 1. **Estrutura HTML**

```html
<div class="custom-cursor">
  <!-- Cursor dot (ponto pequeno) -->
  <div class="cursor-dot"></div>

  <!-- Cursor outline (círculo maior) -->
  <div class="cursor-outline"></div>
</div>
```

### 2. **JavaScript (Vue 3)**

```javascript
// Event listeners
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("click", handleMouseClick);

// Animação suave
const animateOutline = () => {
  outlineX += (mouseX - outlineX) * 0.1;
  outlineY += (mouseY - outlineY) * 0.1;
  requestAnimationFrame(animateOutline);
};
```

### 3. **CSS**

```css
.cursor-dot {
  width: 4px;
  height: 4px;
  background: #3b82f6;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.cursor-outline {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
```

## Características Técnicas

### ⚡ **Performance**

- **requestAnimationFrame**: Animação suave a 60fps
- **Transform**: Usa transform para melhor performance
- **Pointer Events**: `pointer-events: none` para não interferir
- **Mix Blend Mode**: `difference` para melhor contraste

### 🎯 **Interatividade**

- **Click Animation**: Círculo se contrai no click
- **Hover Effects**: Escala ligeiramente no hover
- **Smooth Following**: Delay suave no círculo maior

### 📱 **Responsivo**

- **Desktop**: Cursor customizado ativo
- **Mobile**: Desabilitado automaticamente
- **Z-index**: 9998-9999 para ficar atrás do cursor padrão

## Personalização

### 1. **Alterar Tamanhos**

```css
.cursor-dot {
  width: 6px; /* Maior */
  height: 6px;
}

.cursor-outline {
  width: 50px; /* Maior */
  height: 50px;
}
```

### 2. **Alterar Velocidade**

```javascript
// Mais rápido (menor delay)
outlineX += (mouseX - outlineX) * 0.2;

// Mais lento (maior delay)
outlineX += (mouseX - outlineX) * 0.05;
```

### 3. **Alterar Cores**

```css
.cursor-dot {
  background: #ff6b6b; /* Vermelho */
}

.cursor-outline {
  border-color: rgba(255, 107, 107, 0.3);
}
```

### 4. **Adicionar Efeitos**

```css
.cursor-outline {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  backdrop-filter: blur(10px);
}
```

## Localização

- **Componente**: `src/components/Cursor.vue`
- **Uso**: `src/layouts/AppLayout.vue`
- **Estilos**: Incluídos no componente

## Vantagens

1. **Suave**: Animação fluida com requestAnimationFrame
2. **Temático**: Cores se adaptam ao tema selecionado
3. **Performático**: Otimizado para 60fps
4. **Responsivo**: Desabilitado em mobile
5. **Customizável**: Fácil de personalizar tamanhos e cores
6. **Acessível**: Não interfere com funcionalidade do site
7. **Compatível**: Mantém o cursor padrão do navegador
8. **Visual**: Adiciona elementos visuais sem substituir funcionalidade
