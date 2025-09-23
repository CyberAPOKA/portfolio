# Particles.js Background - Implementação Oficial

## Configuração Atual

O componente `ParticlesBackground.vue` está configurado seguindo a documentação oficial do particles.js:

### Arquivos

- **Componente**: `src/components/ParticlesBackground.vue`
- **Configuração**: `public/particles.json`
- **Estilos**: `src/assets/particles.css`

### Partículas

- **Quantidade**: 80 partículas
- **Cor**: Azul primário (#3b82f6)
- **Tamanho**: 3px (aleatório)
- **Forma**: Círculos
- **Opacidade**: 0.5

### Interatividade

- **Hover**: Modo repulsão (partículas se afastam do mouse)
- **Click**: Modo push (adiciona partículas)
- **Linhas**: Conectam partículas próximas (distância 150px)

### Movimento

- **Velocidade**: 2
- **Direção**: Aleatória
- **Modo**: Out (partículas saem da tela e reaparecem)

## Implementação Oficial

### 1. Instalação

```bash
npm install particles.js
```

### 2. HTML (Template)

```html
<div id="particles-js"></div>
```

### 3. JavaScript (Componente)

```javascript
import particlesJS from "particles.js";

particlesJS.load("particles-js", "/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
```

### 4. Configuração JSON

```json
{
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#3b82f6" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3b82f6",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    }
  },
  "retina_detect": true
}
```

## Como Personalizar

### 1. Alterar Cores das Partículas

Edite o arquivo `public/particles.json`:

```json
"color": {
  "value": "#ff6b6b"
}
```

### 2. Alterar Quantidade de Partículas

```json
"number": {
  "value": 120,
  "density": {
    "enable": true,
    "value_area": 600
  }
}
```

### 3. Alterar Tamanho das Partículas

```json
"size": {
  "value": 5,
  "random": true,
  "anim": {
    "enable": true,
    "speed": 40,
    "size_min": 0.1,
    "sync": false
  }
}
```

### 4. Alterar Velocidade de Movimento

```json
"move": {
  "enable": true,
  "speed": 4,
  "direction": "top",
  "random": true,
  "straight": false,
  "out_mode": "bounce"
}
```

### 5. Alterar Interatividade

```json
"interactivity": {
  "events": {
    "onhover": {
      "enable": true,
      "mode": "grab"
    },
    "onclick": {
      "enable": true,
      "mode": "bubble"
    }
  }
}
```

### 6. Alterar Linhas de Conexão

```json
"line_linked": {
  "enable": true,
  "distance": 200,
  "color": "#ff6b6b",
  "opacity": 0.6,
  "width": 2
}
```

## Temas Disponíveis

### Tema Neon

```json
"color": { "value": "#00ff00" },
"line_linked": { "color": "#00ff00", "opacity": 0.8 }
```

### Tema Rosa

```json
"color": { "value": "#ff69b4" },
"line_linked": { "color": "#ff69b4", "opacity": 0.6 }
```

### Tema Dourado

```json
"color": { "value": "#ffd700" },
"line_linked": { "color": "#ffd700", "opacity": 0.7 }
```

## Performance

- **Mobile**: Partículas desabilitadas automaticamente
- **Desktop**: Otimizado para 60fps
- **Retina**: Detecta automaticamente telas de alta resolução
- **Z-index**: Partículas ficam no fundo (-1)

## Localização

- **Componente**: `src/components/ParticlesBackground.vue`
- **Configuração**: `public/particles.json`
- **Estilos**: `src/assets/particles.css`
- **Uso**: `src/layouts/AppLayout.vue`

## Vantagens da Implementação Oficial

1. **Estabilidade**: Segue a documentação oficial
2. **Performance**: Otimizado pela biblioteca original
3. **Flexibilidade**: Configuração via JSON
4. **Manutenção**: Fácil de atualizar e personalizar
5. **Compatibilidade**: Funciona em todos os navegadores modernos
