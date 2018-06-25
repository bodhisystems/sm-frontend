<template>
  <div class="row blog-content">
      <div class="col-full">

          <div class="blog-list block-1-2 block-tab-full">
              <article class="col-block" v-for="(post,index) in posts" :key="post.slug + '_' + index">
                <div class="blog-date">
                    <a href="blog-single.html">{{ post.published | formatDate }}</a>
                </div>
                <h2 class="h01"><router-link :to="'blog/' + post.slug">{{ post.title }}</router-link></h2>
                <p>{{ post.summary }}</p>
                <div class="blog-cat">
                    <router-link
                      v-for="(category, index) in post.categories"
                      :key="category.slug + '_' + index"
                      :to="'/blog/' + category.slug">
                      {{ category.name }}
                    </router-link>
                </div>
              </article>
            </div>

      </div> <!-- end col-full -->
  </div> <!-- end blog-content -->
</template>


<script>
  /* eslint-disable no-console */
  import { butter } from '@/buttercms';
  import moment from 'moment';

  export default {
    data() {
      return {
        posts: [],
        meta: [],
        categories: [],
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 4
        }).then((res) => {
          //console.log(res.data)
          this.posts = res.data.data
          this.meta = res.data.meta
        })
      },
    },
    created() {
      this.getPosts()
    },
    filters: {
        formatDate: function(value) {
          if (value) {
            return moment(String(value)).format('LL')
          }
        }
    }
  }
</script>
