<template>
    <div class="article-by-id">
        <PageTitle icon="fa fa-file-o" :main="article.name" :sub="article.description" />  <!-- sempre que quiser que o valor seja interpretado colocar o ":" -->
        <div class="article-content" v-html="article.content"></div>  <!-- content = conteudo, v-html(diretiva) = para que de fato o conteudo do artigo seja renderizado de forma correta -->
       
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'


export default {
    name: 'ArticleById',
    components: { PageTitle },
    data: function() {
        return {
            article: {}
        }
    },
    mounted() {
        const url = `${baseApiUrl}/articles/${this.$route.params.id}`
        axios.get(url).then(res => this.article = res.data)
    }

}
</script>

<style>
    .article-content {
        background-color: #fff;
        border-radius: 8px;
        padding: 25px;
    }

    .article-content pre {
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        
    }

    .article-content img {
        max-width: 100%;
    }
    
    .article-content :last-child {
        margin-bottom: 0px;
    }
</style>
