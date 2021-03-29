<template>
    <div class="article-item">
        <router-link :to="{ name: 'articleById', params: { id: article.id } }">
            <div class="article-item-image d-none d-sm-block"> <!-- d-none = dispositivo movel vai sumir, d-sm-block = exibir de sm pra cima, classes do bootstrap4 -->
                <img v-if="article.imageUrl" 
                    :src="article.imageUrl"
                    height="150" width="150" alt="Article"> <!-- v-if = img sera exibida se o article.img estiver setado -->
                <img v-else
                    src="@/assets/article.png"
                    height="150" width="150" alt="Article"> <!-- v-else = caso a img de cima não seja setado, exibe a img padrão -->                    
            </div>
            <div class="article-item-info">
                <h2>{{ article.name }}</h2>
                <p>{{ article.description }}</p>
                <span class="article-item-author">
                    <strong>Autor: </strong>{{ article.author }}
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: ['article']  // componente recebe como parametro um artigo, ja passo o artigo pra ele e n preciso fazer requisição, não vai usar axios pra acessar backend
}
</script>

<style>
    .article-item {
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: #fff;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }
</style>
