# Music Player - Como adicionar músicas

## Localização dos arquivos de música

Coloque seus arquivos MP3 na pasta:

```
src/assets/music/
```

## Como adicionar novas músicas

1. **Copie seus arquivos MP3** para `src/assets/music/`

2. **Atualize o playlist** no arquivo `src/components/daisyui/MusicPlayer.vue`:

```javascript
const playlist = ref([
  {
    title: "Nome da Música",
    artist: "Nome do Artista",
    src: "/src/music/nome_do_arquivo.mp3",
  },
  // Adicione mais músicas aqui...
]);
```

## Exemplo de estrutura:

```
src/assets/music/
├── musica1.mp3
├── musica2.mp3
├── musica3.mp3
└── musica4.mp3
```

## Funcionalidades do Player

- ✅ **Play/Pause**: Controle de reprodução
- ✅ **Próxima/Anterior**: Navegação entre músicas
- ✅ **Barra de progresso**: Controle de posição
- ✅ **Controle de volume**: Ajuste de volume
- ✅ **Playlist**: Lista de músicas disponíveis
- ✅ **Auto-play**: Próxima música automática
- ✅ **Tempo**: Exibição de tempo atual/total

## Formatos suportados

- MP3 (recomendado)
- WAV
- OGG
- M4A

## Dicas

- Use nomes de arquivo sem espaços (use underscore \_ ou hífen -)
- Mantenha os arquivos organizados na pasta `src/assets/music/`
- Atualize sempre o título e artista no código para melhor experiência
