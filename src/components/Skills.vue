<script setup>
import { ref } from 'vue'
import Icon from '@/components/Icon.vue'

const skills = ref({
    languages: [
        { name: 'PHP', icon: '/portfolio/assets/svgs/php.svg', years: '10+', favorite: true },
        { name: 'JavaScript', icon: '/portfolio/assets/svgs/javascript.svg', years: '10+', favorite: true },
        { name: 'TypeScript', icon: '/portfolio/assets/svgs/typescript.svg', years: '7+', favorite: true },
        { name: 'HTML', icon: '/portfolio/assets/svgs/html.svg', years: '10+', favorite: true },
        { name: 'CSS', icon: '/portfolio/assets/svgs/css.svg', years: '10+', favorite: true },
        { name: 'SCSS', icon: '/portfolio/assets/svgs/scss.svg', years: '9+' },
        { name: 'SQL', icon: '/portfolio/assets/svgs/sql.svg', years: '10+' },
        { name: 'C#', icon: '/portfolio/assets/svgs/csharp.svg', years: '5+' },
        { name: 'Java', icon: '/portfolio/assets/svgs/java.svg', years: '5+' },
        { name: 'Python', icon: '/portfolio/assets/svgs/python.svg', years: '8+' },
        { name: 'Go', icon: '/portfolio/assets/svgs/go.svg', years: '4+' },
        { name: 'Rust', icon: '/portfolio/assets/svgs/rust.svg', years: '4+' },
        { name: 'Ruby', icon: '/portfolio/assets/svgs/ruby.svg', years: '4+' },
        { name: 'Elixir', icon: '/portfolio/assets/svgs/elixir.svg', years: '4+' }
    ],

    frameworks: [
        { name: 'Laravel', icon: '/portfolio/assets/svgs/laravel.svg', years: '10+', favorite: true },
        { name: 'Symfony', icon: '/portfolio/assets/svgs/symfony.svg', years: '5+' },
        { name: 'AgilePHP', icon: '/portfolio/assets/svgs/php.svg', years: '10+' },
        { name: 'Blade', icon: '/portfolio/assets/svgs/blade.svg', years: '10+' },
        { name: 'Node.js', icon: '/portfolio/assets/svgs/node.svg', years: '5+', favorite: true },
        { name: 'Express', icon: '/portfolio/assets/svgs/express.svg', years: '5+' },
        { name: 'AdonisJS', icon: '/portfolio/assets/svgs/adonis.svg', years: '5+', favorite: true },
        { name: 'NestJS', icon: '/portfolio/assets/svgs/nest.svg', years: '8+', favorite: true },
        { name: 'NextJS', icon: '/portfolio/assets/svgs/next.svg', years: '8+', favorite: true },
        { name: 'ReactJS', icon: '/portfolio/assets/svgs/react.svg', years: '9+', favorite: true },
        { name: 'Vue.js', icon: '/portfolio/assets/svgs/vue.svg', years: '10+', favorite: true },
        { name: 'Quasar', icon: '/portfolio/assets/svgs/quasar.svg', years: '5+' },
        { name: 'Angular', icon: '/portfolio/assets/svgs/angular.svg', years: '5+' },
        { name: 'Svelte', icon: '/portfolio/assets/svgs/svelte.svg', years: '4+' },
        { name: 'SolidJS', icon: '/portfolio/assets/svgs/solid.svg', years: '4+' },
        { name: 'Alpine.js', icon: '/portfolio/assets/svgs/alpine.svg', years: '5+' },
        { name: 'Django', icon: '/portfolio/assets/svgs/django.svg', years: '4+' },
        { name: 'Flask', icon: '/portfolio/assets/svgs/flask.svg', years: '4+' },
        { name: 'Ruby on Rails', icon: '/portfolio/assets/svgs/rubyonrails.svg', years: '4+' },
        { name: 'Phoenix', icon: '/portfolio/assets/svgs/phoenix.svg', years: '4+' },
        { name: 'Bootstrap', icon: '/portfolio/assets/svgs/bootstrap.svg', years: '5+' },
        { name: 'TailwindCSS', icon: '/portfolio/assets/svgs/tailwind.svg', years: '5+', favorite: true },
        { name: 'Material UI', icon: '/portfolio/assets/svgs/materialui.svg', years: '5+' },
        { name: 'Ant Design', icon: '/portfolio/assets/svgs/antdesign.svg', years: '5+' }
    ],

    libraries: [
        { name: 'jQuery', icon: '/portfolio/assets/svgs/jquery.svg', years: '10+' },
        { name: 'Axios', icon: '/portfolio/assets/svgs/axios.svg', years: '10+', favorite: true },
        { name: 'Redux', icon: '/portfolio/assets/svgs/redux.svg', years: '4-5' },
        { name: 'Pinia', icon: '/portfolio/assets/svgs/pinia.svg', years: '9+', favorite: true },
        { name: 'Zustand', icon: '/portfolio/assets/svgs/zustand.svg', years: '8+', favorite: true },
        { name: 'Chart.js', icon: '/portfolio/assets/svgs/chart.svg', years: '5+' },
        { name: 'D3.js', icon: '/portfolio/assets/svgs/d3.svg', years: '4+' },
        { name: 'Three.js', icon: '/portfolio/assets/svgs/three.svg', years: '4+' },
        { name: 'Socket.IO', icon: '/portfolio/assets/svgs/socketio.svg', years: '4-5' },
        { name: 'Prisma ORM', icon: '/portfolio/assets/svgs/prisma.svg', years: '5+' },
        { name: 'Sequelize', icon: '/portfolio/assets/svgs/sequelize.svg', years: '5+' },
        { name: 'TypeORM', icon: '/portfolio/assets/svgs/typeorm.svg', years: '4+' }
    ],

    databases: [
        { name: 'MySQL', icon: '/portfolio/assets/svgs/mysql.svg', years: '10+', favorite: true },
        { name: 'PostgreSQL', icon: '/portfolio/assets/svgs/postgresql.svg', years: '7+' },
        { name: 'SQLite', icon: '/portfolio/assets/svgs/sqlite.svg', years: '8+' },
        { name: 'MongoDB', icon: '/portfolio/assets/svgs/mongodb.svg', years: '8+' },
        { name: 'NoSQL', icon: '/portfolio/assets/svgs/nosql.svg', years: '6+' },
        { name: 'Redis', icon: '/portfolio/assets/svgs/redis.svg', years: '8+', favorite: true },
        { name: 'ElasticSearch', icon: '/portfolio/assets/svgs/elasticsearch.svg', years: '8+', favorite: true }
    ],

    devops: [
        { name: 'Docker', icon: '/portfolio/assets/svgs/docker.svg', years: '8+', favorite: true },
        { name: 'Kubernetes', icon: '/portfolio/assets/svgs/kubernetes.svg', years: '5+' },
        { name: 'Terraform', icon: '/portfolio/assets/svgs/terraform.svg', years: '4+' },
        { name: 'Git', icon: '/portfolio/assets/svgs/git.svg', years: '10+' },
        { name: 'CI/CD', icon: '/portfolio/assets/svgs/cicd.svg', years: '5+' },
        { name: 'Jenkins', icon: '/portfolio/assets/svgs/jenkins.svg', years: '5+' },
        { name: 'GitHub Actions', icon: '/portfolio/assets/svgs/github.svg', years: '6+' },
        { name: 'GitLab CI', icon: '/portfolio/assets/svgs/gitlab.svg', years: '4-5' },
        { name: 'Linux', icon: '/portfolio/assets/svgs/linux.svg', years: '5+' },
        { name: 'DevOps', icon: '/portfolio/assets/svgs/devops.svg', years: '5+' }
    ],

    cloud: [
        { name: 'AWS EC2', icon: '/portfolio/assets/svgs/aws.svg', years: '5+' },
        { name: 'AWS S3', icon: '/portfolio/assets/svgs/aws.svg', years: '5+', favorite: true },
        { name: 'Cloudflare Workers', icon: '/portfolio/assets/svgs/cloudflare.svg', years: '4+' },
        { name: 'Firebase', icon: '/portfolio/assets/svgs/firebase.svg', years: '4-5' },
        { name: 'Heroku', icon: '/portfolio/assets/svgs/heroku.svg', years: '5+' }
    ],

    tests: [
        { name: 'PHPUnit', icon: '/portfolio/assets/svgs/phpunit.svg', years: '8+', favorite: true },
        { name: 'Jest', icon: '/portfolio/assets/svgs/jest.svg', years: '4-5' },
        { name: 'Vitest', icon: '/portfolio/assets/svgs/vitest.svg', years: '6+', favorite: true },
        { name: 'Cypress', icon: '/portfolio/assets/svgs/cypress.svg', years: '4-5' },
        { name: 'Playwright', icon: '/portfolio/assets/svgs/playwright.svg', years: '4+' },
        { name: 'Mocha', icon: '/portfolio/assets/svgs/mocha.svg', years: '5+' },
        { name: 'Chai', icon: '/portfolio/assets/svgs/chai.svg', years: '5+' },
        { name: 'Pest', icon: '/portfolio/assets/svgs/pest.svg', years: '7+', favorite: true }
    ],

    architecture: [
        { name: 'Clean Code', icon: '/portfolio/assets/svgs/cleancode.svg', years: '8+', favorite: true },
        { name: 'Design Pattern', icon: '/portfolio/assets/svgs/designpattern.svg', years: '9+', favorite: true },
        { name: 'RESTful', icon: '/portfolio/assets/svgs/rest.svg', years: '5+' },
        { name: 'GraphQL', icon: '/portfolio/assets/svgs/graphql.svg', years: '5+' },
        { name: 'Web API', icon: '/portfolio/assets/svgs/webapi.svg', years: '10+', favorite: true },
        { name: 'Microservices', icon: '/portfolio/assets/svgs/microservices.svg', years: '4-5' }
    ],

    extras: [
        { name: 'SEO', icon: '/portfolio/assets/svgs/seo.svg', years: '4+' },
        { name: 'SCRUM', icon: '/portfolio/assets/svgs/scrum.svg', years: '9+', favorite: true },
        { name: 'HTTP', icon: '/portfolio/assets/svgs/http.svg', years: '5+' },
        { name: 'Web Services', icon: '/portfolio/assets/svgs/webservices.svg', years: '10+', favorite: true },
        { name: 'WordPress', icon: '/portfolio/assets/svgs/wordpress.svg', years: '6+' }
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
