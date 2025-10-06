<script setup>
import { ref } from 'vue'
import Icon from '@/components/Icon.vue'

const skills = ref({
    languages: [
        { name: 'PHP', icon: '/src/assets/svgs/php.svg', years: '10+', favorite: true },
        { name: 'JavaScript', icon: '/src/assets/svgs/javascript.svg', years: '10+', favorite: true },
        { name: 'TypeScript', icon: '/src/assets/svgs/typescript.svg', years: '7+', favorite: true },
        { name: 'HTML', icon: '/src/assets/svgs/html.svg', years: '10+', favorite: true },
        { name: 'CSS', icon: '/src/assets/svgs/css.svg', years: '10+', favorite: true },
        { name: 'SCSS', icon: '/src/assets/svgs/scss.svg', years: '9+' },
        { name: 'SQL', icon: '/src/assets/svgs/sql.svg', years: '10+' },
        { name: 'C#', icon: '/src/assets/svgs/csharp.svg', years: '5+' },
        { name: 'Java', icon: '/src/assets/svgs/java.svg', years: '5+' },
        { name: 'Python', icon: '/src/assets/svgs/python.svg', years: '8+' },
        { name: 'Go', icon: '/src/assets/svgs/go.svg', years: '4+' },
        { name: 'Rust', icon: '/src/assets/svgs/rust.svg', years: '4+' },
        { name: 'Ruby', icon: '/src/assets/svgs/ruby.svg', years: '4+' },
        { name: 'Elixir', icon: '/src/assets/svgs/elixir.svg', years: '4+' }
    ],

    frameworks: [
        { name: 'Laravel', icon: '/src/assets/svgs/laravel.svg', years: '10+', favorite: true },
        { name: 'Symfony', icon: '/src/assets/svgs/symfony.svg', years: '5+' },
        { name: 'AgilePHP', icon: '/src/assets/svgs/php.svg', years: '10+' },
        { name: 'Blade', icon: '/src/assets/svgs/blade.svg', years: '10+' },
        { name: 'Node.js', icon: '/src/assets/svgs/node.svg', years: '8+', favorite: true },
        { name: 'Express', icon: '/src/assets/svgs/express.svg', years: '7+' },
        { name: 'AdonisJS', icon: '/src/assets/svgs/adonis.svg', years: '7+', favorite: true },
        { name: 'NestJS', icon: '/src/assets/svgs/nest.svg', years: '8+', favorite: true },
        { name: 'NextJS', icon: '/src/assets/svgs/next.svg', years: '8+', favorite: true },
        { name: 'ReactJS', icon: '/src/assets/svgs/react.svg', years: '9+', favorite: true },
        { name: 'Vue.js', icon: '/src/assets/svgs/vue.svg', years: '10+', favorite: true },
        { name: 'Quasar', icon: '/src/assets/svgs/quasar.svg', years: '5+' },
        { name: 'Angular', icon: '/src/assets/svgs/angular.svg', years: '5+' },
        { name: 'Svelte', icon: '/src/assets/svgs/svelte.svg', years: '4+' },
        { name: 'SolidJS', icon: '/src/assets/svgs/solid.svg', years: '4+' },
        { name: 'Alpine.js', icon: '/src/assets/svgs/alpine.svg', years: '5+' },
        { name: 'Django', icon: '/src/assets/svgs/django.svg', years: '4+' },
        { name: 'Flask', icon: '/src/assets/svgs/flask.svg', years: '4+' },
        { name: 'Ruby on Rails', icon: '/src/assets/svgs/rubyonrails.svg', years: '4+' },
        { name: 'Phoenix', icon: '/src/assets/svgs/phoenix.svg', years: '4+' },
        { name: 'Bootstrap', icon: '/src/assets/svgs/bootstrap.svg', years: '5+' },
        { name: 'TailwindCSS', icon: '/src/assets/svgs/tailwind.svg', years: '5+', favorite: true },
        { name: 'Material UI', icon: '/src/assets/svgs/materialui.svg', years: '5+' },
        { name: 'Ant Design', icon: '/src/assets/svgs/antdesign.svg', years: '5+' }
    ],

    libraries: [
        { name: 'jQuery', icon: '/src/assets/svgs/jquery.svg', years: '10+' },
        { name: 'Axios', icon: '/src/assets/svgs/axios.svg', years: '5+', favorite: true },
        { name: 'Redux', icon: '/src/assets/svgs/redux.svg', years: '4-5' },
        { name: 'Pinia', icon: '/src/assets/svgs/pinia.svg', years: '5+', favorite: true },
        { name: 'Zustand', icon: '/src/assets/svgs/zustand.svg', years: '4+', favorite: true },
        { name: 'Chart.js', icon: '/src/assets/svgs/chart.svg', years: '5+' },
        { name: 'D3.js', icon: '/src/assets/svgs/d3.svg', years: '4+' },
        { name: 'Three.js', icon: '/src/assets/svgs/three.svg', years: '4+' },
        { name: 'Socket.IO', icon: '/src/assets/svgs/socketio.svg', years: '4-5' },
        { name: 'Prisma ORM', icon: '/src/assets/svgs/prisma.svg', years: '5+' },
        { name: 'Sequelize', icon: '/src/assets/svgs/sequelize.svg', years: '5+' },
        { name: 'TypeORM', icon: '/src/assets/svgs/typeorm.svg', years: '4+' }
    ],

    databases: [
        { name: 'MySQL', icon: '/src/assets/svgs/mysql.svg', years: '10+', favorite: true },
        { name: 'PostgreSQL', icon: '/src/assets/svgs/postgresql.svg', years: '7+' },
        { name: 'SQLite', icon: '/src/assets/svgs/sqlite.svg', years: '8+' },
        { name: 'MongoDB', icon: '/src/assets/svgs/mongodb.svg', years: '8+' },
        { name: 'NoSQL', icon: '/src/assets/svgs/nosql.svg', years: '6+' },
        { name: 'Redis', icon: '/src/assets/svgs/redis.svg', years: '8+', favorite: true },
        { name: 'ElasticSearch', icon: '/src/assets/svgs/elasticsearch.svg', years: '8+', favorite: true }
    ],

    devops: [
        { name: 'Docker', icon: '/src/assets/svgs/docker.svg', years: '8+', favorite: true },
        { name: 'Kubernetes', icon: '/src/assets/svgs/kubernetes.svg', years: '5+' },
        { name: 'Terraform', icon: '/src/assets/svgs/terraform.svg', years: '4+' },
        { name: 'Git', icon: '/src/assets/svgs/git.svg', years: '5+' },
        { name: 'CI/CD', icon: '/src/assets/svgs/cicd.svg', years: '5+' },
        { name: 'Jenkins', icon: '/src/assets/svgs/jenkins.svg', years: '5+' },
        { name: 'GitHub Actions', icon: '/src/assets/svgs/github.svg', years: '6+' },
        { name: 'GitLab CI', icon: '/src/assets/svgs/gitlab.svg', years: '4-5' },
        { name: 'Linux', icon: '/src/assets/svgs/linux.svg', years: '5+' },
        { name: 'DevOps', icon: '/src/assets/svgs/devops.svg', years: '5+' }
    ],

    cloud: [
        { name: 'AWS EC2', icon: '/src/assets/svgs/aws.svg', years: '5+' },
        { name: 'AWS S3', icon: '/src/assets/svgs/aws.svg', years: '5+', favorite: true },
        { name: 'Cloudflare Workers', icon: '/src/assets/svgs/cloudflare.svg', years: '4+' },
        { name: 'Firebase', icon: '/src/assets/svgs/firebase.svg', years: '4-5' },
        { name: 'Heroku', icon: '/src/assets/svgs/heroku.svg', years: '5+' }
    ],

    tests: [
        { name: 'PHPUnit', icon: '/src/assets/svgs/phpunit.svg', years: '8+', favorite: true },
        { name: 'Jest', icon: '/src/assets/svgs/jest.svg', years: '4-5' },
        { name: 'Vitest', icon: '/src/assets/svgs/vitest.svg', years: '6+', favorite: true },
        { name: 'Cypress', icon: '/src/assets/svgs/cypress.svg', years: '4-5' },
        { name: 'Playwright', icon: '/src/assets/svgs/playwright.svg', years: '4+' },
        { name: 'Mocha', icon: '/src/assets/svgs/mocha.svg', years: '5+' },
        { name: 'Chai', icon: '/src/assets/svgs/chai.svg', years: '5+' },
        { name: 'Pest', icon: '/src/assets/svgs/pest.svg', years: '7+', favorite: true }
    ],

    architecture: [
        { name: 'Clean Code', icon: '/src/assets/svgs/cleancode.svg', years: '8+', favorite: true },
        { name: 'Design Pattern', icon: '/src/assets/svgs/designpattern.svg', years: '9+', favorite: true },
        { name: 'RESTful', icon: '/src/assets/svgs/rest.svg', years: '5+' },
        { name: 'GraphQL', icon: '/src/assets/svgs/graphql.svg', years: '5+' },
        { name: 'Web API', icon: '/src/assets/svgs/webapi.svg', years: '10+', favorite: true },
        { name: 'Microservices', icon: '/src/assets/svgs/microservices.svg', years: '4-5' }
    ],

    extras: [
        { name: 'SEO', icon: '/src/assets/svgs/seo.svg', years: '4+' },
        { name: 'SCRUM', icon: '/src/assets/svgs/scrum.svg', years: '9+', favorite: true },
        { name: 'HTTP', icon: '/src/assets/svgs/http.svg', years: '5+' },
        { name: 'Web Services', icon: '/src/assets/svgs/webservices.svg', years: '10+', favorite: true },
        { name: 'WordPress', icon: '/src/assets/svgs/wordpress.svg', years: '6+' }
    ]
})
</script>

<template>
    <!-- Skills Section -->
    <div class="container mx-auto p-8 text-center">
        <h2 class="text-3xl font-bold mb-8">
            {{ $t('skills.title') }}
        </h2>

        <div v-for="(group, category) in skills" :key="category" class="mb-10">
            <h3 class="text-2xl font-bold mb-4 capitalize">{{ category }}</h3>

            <div class="flex flex-wrap items-center justify-center gap-4">
                <div v-for="skill in group" :key="skill.name"
                    class="text-center p-4 bg-base-100 rounded-lg shadow glass"
                    :class="{ '!border-2 !border-primary': skill.favorite }">
                    <div class="text-2xl mb-2">
                        <Icon :src="skill.icon" :alt="skill.name + ' icon'" />
                    </div>
                    <h3 class="font-semibold">{{ skill.name }}</h3>
                    <p class="text-sm opacity-70">{{ skill.years }} {{ $t('about.years') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
