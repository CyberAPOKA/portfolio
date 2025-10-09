<script setup>
import { ref } from 'vue'
import Button from '@/components/daisyui/Button.vue'
import Card from '@/components/daisyui/Card.vue'

const experiences = ref([
    {
        id: 1,
        title: 'Desenvolvedor FullStack Senior',
        company: 'Quero Passagem',
        period: '2025',
        description: 'Trabalhei no projeto principal do "Viajo Mucho", é um sistema de venda de passagens de ônibus no méxico.',
        languages: 'PHP, Python, Laravel, Angular, Docker, Redis, Tailwind, MySQL, PostgreSQL '
    },
    {
        id: 2,
        title: 'Desenvolvedor FullStack Senior',
        company: 'Mad',
        period: '2024',
        description: 'Trabalhei reescrevendo diversos sistemas internos legados para Laravel, React e Next.js.',
        languages: 'PHP, Laravel, React, Next.js, Node.js, Nest.js, Tailwind, MySQL, PostgreSQL, SQLite, Docker, Redis'
    },
    {
        id: 3,
        title: 'Desenvolvedor FullStack Senior',
        company: 'Agendart',
        period: '2023',
        description: 'Trabalhei em um projeto apenas que é o sistema do "Agendart", um sistema web de gerenciamento de profissionais da área da saúde.',
        languages: 'PHP, Python, Laravel, Vue, Pinia, PrimeVue, Tailwind, MySQL'
    },
    {
        id: 4,
        title: 'Desenvolvedor FullStack Pleno',
        company: 'GW',
        period: '2020 - 2022',
        description: 'Trabalhei em projetos grandes como o "Foco Radical" e "Lep", além de aplicativos mobile e outros sistemas menores.',
        languages: 'PHP, Python, Laravel, Vue, React, Angular, Next.js, Node.js, Nest.js, Tailwind, MySQL, PostgreSQL, SQLite, MongoDB, NoSQL, Redis'
    },
    {
        id: 5,
        title: 'Desenvolvedor FullStack Júnior',
        company: 'Santins',
        period: '2017 - 2019',
        description: 'Trabalhei em projetos de e-commerce, wordpress, aplicativos mobile e sistemas web variados.',
        languages: 'PHP, Python, Laravel, Vue, React, Next.js, Node.js, Nest.js, Tailwind, MySQL, PostgreSQL, SQLite, MongoDB, NoSQL, Redis'
    },
    {
        id: 6,
        title: 'Estagiário de Desenvolvimento',
        company: 'Prefeitura Municipal de São Leopoldo',
        period: '2015 - 2016',
        description: 'Desenvolvimento de sistemas web e para a Prefeitura Municipal de São Leopoldo. Projetos internos e públicos do cotidiano dos moradores da região.',
        languages: 'PHP, Laravel, Vue, React, Tailwind, MySQL, PostgreSQL'
    }
])

const certifications = ref([
    {
        id: 1,
        name: 'Teste CSS',
        issuer: 'Programathor',
        image: '/src/assets/images/css.png'
    },
    {
        id: 2,
        name: 'Teste PHP',
        issuer: 'Programathor',
        image: '/src/assets/images/php.png'
    },
    {
        id: 3,
        name: 'Teste JavaScript',
        issuer: 'Programathor',
        image: '/src/assets/images/javascript.png'
    }
])
const showModal = ref(false)
const selectedCert = ref(null)
const showCertPdf = ref(false)

const openCert = (cert) => {
    selectedCert.value = cert
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
}
</script>

<template>
    <div class="max-w-4xl mx-auto">
        <!-- About Hero -->
        <div class="hero bg-base-200 rounded-lg mb-8">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-4xl font-bold text-primary">{{ $t('about.heroTitle') }}</h1>
                    <p class="py-6 text-base-content">
                        {{ $t('about.heroSubtitle') }}
                    </p>
                </div>
            </div>
        </div>

        <!-- About Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
                <div class="flex flex-col items-center mb-4">
                    <img src="/src/assets/images/profile.png" alt="profile"
                        class="w-fit h-fit object-fit mb-2 rounded-2xl" />
                </div>
                <h2 class="text-2xl font-bold mb-4 text-base-content">{{ $t('about.myStoryTitle') }}</h2>
                <p class="text-base-content mb-4">
                    {{ $t('about.myStoryP1') }}
                </p>
                <p class="text-base-content mb-4">
                    {{ $t('about.myStoryP2') }}
                </p>
                <p class="text-base-content mb-4">
                    {{ $t('about.myStoryP3') }}
                </p>
                <p class="text-base-content mb-4">
                    {{ $t('about.myStoryP4') }}
                </p>
                <p class="text-base-content">
                    {{ $t('about.myStoryP5') }}
                </p>
            </div>

            <div>
                <h2 class="text-2xl font-bold mb-4 text-base-content">{{ $t('about.experience') }}</h2>
                <div class="space-y-4">
                    <div v-for="experience in experiences" :key="experience.id"
                        class="p-4 bg-base-100 rounded-lg shadow">
                        <h3 class="font-semibold text-primary">{{ experience.title }}</h3>
                        <p class="text-sm text-base-content opacity-70">
                            {{ experience.company }} • {{ experience.period }}
                        </p>
                        <p class="text-base-content mt-2">{{ experience.description }}</p>
                        <p>{{ $t('about.languages') }}: {{ experience.languages }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Education -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4 text-base-content">{{ $t('about.education') }}</h2>
            <Card :title="$t('about.degreeTitle')" bordered>
                <p class="text-base-content">
                    {{ $t('about.degreeDesc') }}
                </p>
                <div class="card-actions justify-end">
                    <a href="/src/assets/pdfs/certificate.pdf" target="_blank" rel="noopener">
                        <Button variant="outline" size="sm">{{ $t('about.viewCertificate') }}</Button>
                    </a>
                </div>
            </Card>
        </div>

        <!-- Certifications -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4 text-base-content">{{ $t('about.certifications') }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card v-for="cert in certifications" :key="cert.id" :title="cert.name" compact>
                    <p class="text-sm text-base-content">{{ cert.issuer }}</p>
                    <div class="card-actions justify-end">
                        <Button variant="ghost" size="sm" @click="openCert(cert)">{{ $t('about.view') }}</Button>
                    </div>
                </Card>
            </div>
        </div>

        <!-- Fun Facts -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4 text-base-content">{{ $t('about.funFacts') }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="text-center p-4 bg-base-100 rounded-lg shadow">
                    <div class="text-3xl mb-2">☕</div>
                    <h3 class="font-semibold">{{ $t('about.funCoffee.title') }}</h3>
                    <p class="text-sm text-base-content opacity-70">{{ $t('about.funCoffee.desc') }}</p>
                </div>
                <div class="text-center p-4 bg-base-100 rounded-lg shadow">
                    <div class="text-3xl mb-2">🎮</div>
                    <h3 class="font-semibold">{{ $t('about.funGamer.title') }}</h3>
                    <p class="text-sm text-base-content opacity-70">{{ $t('about.funGamer.desc') }}</p>
                </div>
                <div class="text-center p-4 bg-base-100 rounded-lg shadow">
                    <div class="text-3xl mb-2">📚</div>
                    <h3 class="font-semibold">{{ $t('about.funBook.title') }}</h3>
                    <p class="text-sm text-base-content opacity-70">{{ $t('about.funBook.desc') }}</p>
                </div>
                <div class="text-center p-4 bg-base-100 rounded-lg shadow">
                    <div class="text-3xl mb-2">🏋️</div>
                    <h3 class="font-semibold">{{ $t('about.funGym.title') }}</h3>
                    <p class="text-sm text-base-content opacity-70">{{ $t('about.funGym.desc') }}</p>
                </div>
                <div class="text-center p-4 bg-base-100 rounded-lg shadow">
                    <div class="text-3xl mb-2">⚽</div>
                    <h3 class="font-semibold">{{ $t('about.funSoccer.title') }}</h3>
                    <p class="text-sm text-base-content opacity-70">{{ $t('about.funSoccer.desc') }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <dialog v-if="showModal" class="modal modal-open ">
        <div class="modal-box max-w-4xl w-11/12">
            <h3 class="font-bold text-lg">{{ selectedCert?.name }}</h3>
            <div class="py-4">
                <img :src="selectedCert?.image" alt="certificate" class="w-full rounded" />
            </div>
            <div class="modal-action">
                <form method="dialog">
                    <Button variant="primary" @click="closeModal">{{ $t('common.close') }}</Button>
                </form>
            </div>
        </div>
    </dialog>

    <!-- PDF Certificate Modal -->
    <dialog v-if="showCertPdf" class="modal modal-open">
        <div class="modal-box max-w-4xl w-11/12">
            <h3 class="font-bold text-lg">{{ $t('about.viewCertificate') }}</h3>
            <div class="py-4">
                <object data="/src/assets/pdfs/certificate.pdf" type="application/pdf" class="w-full"
                    style="height: 70vh">
                    <p class="text-base-content">PDF not supported. <a href="/src/assets/pdfs/certificate.pdf"
                            target="_blank" class="link link-hover">Open in new tab</a></p>
                </object>
            </div>
            <div class="modal-action">
                <form method="dialog">
                    <Button variant="primary" @click="showCertPdf = false">{{ $t('common.close') }}</Button>
                </form>
            </div>
        </div>
    </dialog>
</template>