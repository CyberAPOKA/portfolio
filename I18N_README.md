# Sistema de Internacionalização (i18n)

Este projeto agora inclui suporte a múltiplas linguagens usando o Vue I18n.

## 📁 Estrutura dos Arquivos

```
src/
├── locales/
│   ├── pt-BR.js        # Traduções em português brasileiro
│   └── en-US.js         # Traduções em inglês americano
├── i18n.js             # Configuração principal do i18n
├── stores/
│   └── language.js     # Store para gerenciar idioma selecionado
└── components/
    └── LanguageSelector.vue  # Componente de seleção de idioma
```

## 🚀 Como Usar

### 1. Adicionar Traduções

Para adicionar novas traduções, edite os arquivos em `src/locales/`:

**src/locales/pt-BR.js**

```javascript
export default {
  novaChave: "Texto em português",
};
```

**src/locales/en-US.js**

```javascript
export default {
  novaChave: "Text in English",
};
```

### 2. Usar Traduções nos Componentes

Em qualquer componente Vue, use a função `$t()`:

```vue
<template>
  <h1>{{ $t("chave.da.traducao") }}</h1>
</template>
```

### 3. Selecionar Idioma

O componente `LanguageSelector` está disponível no header da aplicação e permite:

- Intercambiar entre português e inglês
- Salvar preferência no localStorage
- Mostrar bandeira do país selecionado

### 4. Adicionar Novo Idioma

Para adicionar um novo idioma:

1. Crie um arquivo em `src/locales/` (ex: `fr-FR.js`)
2. Adicione as traduções para o novo idioma
3. Atualize `src/i18n.js` para incluir o novo idioma
4. Adicione a opção no `language.js` store:

```javascript
const availableLocales = [
  { code: "pt-BR", name: "Português", flag: "🇧🇷" },
  { code: "en-US", name: "English", flag: "🇺🇸" },
  { code: "fr-FR", name: "Français", flag: "🇫🇷" }, // Novo idioma
];
```

## 🎯 Funcionalidades

- ✅ Troca de idioma dinâmica
- ✅ Persistência da preferência do usuário
- ✅ Fallback para inglês quando tradução não existir
- ✅ Interface visual com bandeiras dos países
- ✅ Suporte para textos estáticos e dinâmicos

## 🔧 Configuração Técnica

### Idiomas Disponíveis

- **pt-BR**: Português (Brasil) - idioma padrão
- **en-US**: Inglês (EUA) - idioma de fallback

### Store de Idioma

O store Pinia (`useLanguageStore`) gerencia:

- Lista de idiomas disponíveis
- Idioma atual selecionado
- Funções para alterar/trocar idioma
- Inicialização a partir do localStorage

### Componente LanguageSelector

- Dropdown com todos os idiomas disponíveis
- Indicador visual do idioma atual
- Responsivo (bandeira sempre visível, texto apenas em telas maiores)
