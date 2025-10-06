<script setup>
import { ref } from 'vue'
import Button from '@/components/daisyui/Button.vue'
import Card from '@/components/daisyui/Card.vue'

const projects = ref([
    // Laravel first
    {
        id: 1,
        title: 'Projeto Laravel - Estágios São Leopoldo',
        description: 'Projeto institucional. Tecnologias: Laravel, Blade e Bootstrap.',
        link: 'https://estagios.saoleopoldo.rs.gov.br'
    },
    {
        id: 2,
        title: 'Projeto Laravel - Foco Radical',
        description: 'E-commerce e plataforma. Tecnologias: Laravel, Vue, Tailwind, Pinia, AWS e PagBank.',
        link: 'https://www.focoradical.com.br'
    },
    {
        id: 3,
        title: 'Projeto Laravel - Agendart',
        description: 'Sistema web. Tecnologias: Laravel, Vue, Tailwind, Pinia, AWS e Iugu.',
        link: 'https://agendart.tech/register'
    },
    {
        id: 4,
        title: 'Projeto Laravel - LEP',
        description: 'Aplicação web. Tecnologias: Laravel, Vue, Tailwind e Pinia.',
        link: 'https://lep.gw2d.com.br'
    },
    {
        id: 5,
        title: 'Projeto Laravel - Planetball',
        description: 'Sistema e site. Tecnologias: Laravel, React e Bootstrap. Ambiente alternativo disponível.',
        link: 'https://www.planetball.com.br/'
    },
    {
        id: 6,
        title: 'Projeto Laravel - Sigma Civil (Vistoria)',
        description: 'Aplicação de vistoria. Tecnologias: Laravel, Vue, Tailwind e APIs do Google.',
        link: 'https://sigmacivil.com.br/dev2/vistoria/public/'
    },

    // WordPress last
    {
        id: 7,
        title: 'Projeto WordPress - Fabio Felix',
        description: 'Site institucional. Tecnologias: WordPress.',
        link: 'https://fabiofelix.com.br/'
    },
    {
        id: 8,
        title: 'Projeto WordPress - Colégio Santa Teresa (Porto Alegre)',
        description: 'Site institucional. Tecnologias: WordPress e Tailwind.',
        link: 'https://www.somossantateresa.com.br/colegio-porto-alegre/'
    },
    {
        id: 9,
        title: 'Projeto WordPress - Nosso Café Yara',
        description: 'Site institucional. Tecnologias: WordPress e Tailwind.',
        link: 'https://nossocafeyara.com.br/'
    },
    {
        id: 10,
        title: 'Projeto WordPress - Loja Grendene',
        description: 'Loja e institucional. Tecnologias: WordPress e Bootstrap.',
        link: 'https://www.lojagrendene.com.br/'
    },
    {
        id: 11,
        title: 'Projeto WordPress - Carraro (Case)',
        description: 'Case institucional. Tecnologias: WordPress e Bootstrap. URL de produção não localizada.',
        link: 'https://hmldev.com.br/santins/cases/Carraro/'
    },
    {
        id: 12,
        title: 'Projeto WordPress - Tanac (Case)',
        description: 'Case institucional. Tecnologias: WordPress e Bootstrap. URL de produção não localizada.',
        link: 'https://hmldev.com.br/santins/cases/Tanac/'
    },
    {
        id: 13,
        title: 'Projeto WordPress - Jurerê In (Case)',
        description: 'Case institucional. Tecnologias: WordPress e Bootstrap. URL de produção não localizada.',
        link: 'https://hmldev.com.br/santins/cases/Jurere-In/'
    },
    {
        id: 14,
        title: 'Projeto WordPress - Perto (Case)',
        description: 'Case institucional. Tecnologias: WordPress e Bootstrap. URL de produção não localizada.',
        link: 'https://hmldev.com.br/santins/cases/perto/'
    },
    {
        id: 15,
        title: 'Projeto WordPress - Ecosul Energia Solar',
        description: 'Site institucional. Tecnologias: WordPress e Bootstrap. Produção fora do ar, homolog disponível.',
        link: 'https://hmldev.com.br/ecosul/'
    },
    {
        id: 16,
        title: 'Projeto WordPress - Ecosul Distribuidora',
        description: 'Site institucional. Tecnologias: WordPress e Bootstrap. URL de produção não localizada.',
        link: 'https://hmldev.com.br/ecosul-distribuidora/'
    }
])
</script>

<template>
    <!-- Projects Section -->
    <div class="container mx-auto p-8 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32" id="projects">
        <h2 class="text-3xl font-bold text-center mb-8 text-base-content">{{ $t('nav.projects') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card v-for="project in projects" :key="project.id" :title="project.title" bordered glass>
                <p class="text-base-content">{{ project.description }}</p>
                <div class="card-actions justify-end">
                    <a :href="project.link" target="_blank">
                        <Button variant="primary" size="sm">
                            {{ $t('projects.view') }}
                        </Button>
                    </a>
                </div>
            </Card>
        </div>
        <div class="mt-8 text-center">
            <p class="text-base-content">
                {{ $t('projects.more_prefix') }}
                <a href="https://github.com/CyberAPOKA" target="_blank" class="link link-hover">{{ $t('projects.github')
                    }}</a>.
            </p>
            <p>{{ $t('projects.note') }}</p>
        </div>
    </div>
</template>
