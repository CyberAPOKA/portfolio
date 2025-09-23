<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '@/components/daisyui/Button.vue'
import Card from '@/components/daisyui/Card.vue'
import Alert from '@/components/daisyui/Alert.vue'

const audioRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(50)
const currentTrackIndex = ref(0)

const playlist = ref([
    {
        title: 'She Doesn\'t Mind',
        artist: 'Unknown Artist',
        src: '/src/music/she_doesnt_mind.mp3'
    },
    {
        title: 'Drown',
        artist: 'Unknown Artist',
        src: '/src/music/drown.mp3'
    },
    {
        title: 'Grounded Grasslands Theme',
        artist: 'Unknown Artist',
        src: '/src/music/grounded_grasslands_theme.mp3'
    },
    {
        title: 'Fake A Smile',
        artist: 'Unknown Artist',
        src: '/src/music/fake_a_smile.mp3'
    }
])

const currentTrack = ref(playlist.value[0])

const togglePlayPause = () => {
    if (isPlaying.value) {
        audioRef.value.pause()
    } else {
        audioRef.value.play()
    }
    isPlaying.value = !isPlaying.value
}

const selectTrack = (index) => {
    currentTrackIndex.value = index
    currentTrack.value = playlist.value[index]
    audioRef.value.src = currentTrack.value.src
    audioRef.value.load()
    if (isPlaying.value) {
        audioRef.value.play()
    }
}

const nextTrack = () => {
    const nextIndex = (currentTrackIndex.value + 1) % playlist.value.length
    selectTrack(nextIndex)
}

const previousTrack = () => {
    const prevIndex = currentTrackIndex.value === 0
        ? playlist.value.length - 1
        : currentTrackIndex.value - 1
    selectTrack(prevIndex)
}

const seekTo = () => {
    audioRef.value.currentTime = currentTime.value
}

const setVolume = () => {
    audioRef.value.volume = volume.value / 100
}

const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const onLoadedMetadata = () => {
    duration.value = audioRef.value.duration
}

const onTimeUpdate = () => {
    currentTime.value = audioRef.value.currentTime
}

const onTrackEnded = () => {
    nextTrack()
}

const onError = (error) => {
    console.error('Audio error:', error)
}

onMounted(() => {
    audioRef.value.volume = volume.value / 100
    audioRef.value.src = currentTrack.value.src
})

onUnmounted(() => {
    if (audioRef.value) {
        audioRef.value.pause()
    }
})
</script>

<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3">
                </path>
            </svg>
            Music
        </div>
        <div tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80">
            <!-- Current Track Info -->
            <Card glass>
                <h3 class="font-semibold text-base-content">{{ currentTrack.title }}</h3>
                <p class="text-sm text-base-content opacity-70">{{ currentTrack.artist }}</p>
            </Card>

            <!-- Player Controls -->
            <div class="p-4 space-y-4">
                <!-- Progress Bar -->
                <div class="w-full">
                    <div class="flex justify-between text-xs text-base-content opacity-70 mb-1">
                        <span>{{ formatTime(currentTime) }}</span>
                        <span>{{ formatTime(duration) }}</span>
                    </div>
                    <input type="range" min="0" :max="duration" v-model="currentTime" @input="seekTo"
                        class="range range-primary range-xs w-full" />
                </div>

                <!-- Control Buttons -->
                <div class="flex items-center justify-center space-x-4">
                    <Button variant="ghost" size="sm" shape="circle" @click="previousTrack">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                        </svg>
                    </Button>

                    <Button variant="primary" size="lg" shape="circle" @click="togglePlayPause">
                        <svg v-if="!isPlaying" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                    </Button>

                    <Button variant="ghost" size="sm" shape="circle" @click="nextTrack">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                        </svg>
                    </Button>
                </div>

                <!-- Volume Control -->
                <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z">
                        </path>
                    </svg>
                    <input type="range" min="0" max="100" v-model="volume" @input="setVolume"
                        class="range range-primary range-xs flex-1" />
                    <span class="text-xs w-8">{{ volume }}%</span>
                </div>
            </div>

            <!-- Playlist -->
            <div class="border-t border-base-300">
                <div class="p-2">
                    <h4 class="font-semibold text-sm text-base-content mb-2">Playlist</h4>
                    <div class="max-h-32 overflow-y-auto space-y-1">
                        <Button v-for="(track, index) in playlist" :key="index" @click="selectTrack(index)"
                            variant="ghost" size="sm" :class="[
                                'w-full justify-start text-left py-5',
                                currentTrackIndex === index ? 'btn-active' : ''
                            ]">
                            <div class="flex items-center space-x-2 w-full">
                                <svg v-if="currentTrackIndex === index && isPlaying" class="w-3 h-3 text-primary"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                <svg v-else class="w-3 h-3 opacity-50" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3">
                                    </path>
                                </svg>
                                <div class="flex-1 min-w-0">
                                    <div class="truncate text-sm">{{ track.title }}</div>
                                    <div class="truncate text-xs opacity-70">{{ track.artist }}</div>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Hidden Audio Element -->
        <audio ref="audioRef" @loadedmetadata="onLoadedMetadata" @timeupdate="onTimeUpdate" @ended="onTrackEnded"
            @error="onError" />
    </div>
</template>