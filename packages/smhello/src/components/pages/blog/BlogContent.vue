<template>
  <section id="blog" class="s-blog target-section">

      <div class="row narrow section-intro has-bottom-sep">
          <div class="col-full">
              <h3>Journal</h3>
              <h1>Latest From The {{ page_title | titleCase }}.</h1>
              <!-- <p class="lead"></p> -->
          </div>
      </div>

      <div class="row blog-content">
          <div class="col-full">

              <div class="blog-list block-1-2 block-tab-full">
                  <article class="col-block" v-for="(post,index) in posts" :key="post.slug + '_' + index">
                    <div class="blog-date">
                        <a href="blog-single.html">{{ post.published | formatDate }}</a>
                    </div>
                    <h2 class="h01"><router-link :to="'/blog/' + post.slug">{{ post.title }}</router-link></h2>
                    <p>{{ post.summary }}</p>
                    <div class="blog-cat">
                      <!-- <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link> -->
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

  </section>
</template>


<script>
  /* eslint-disable no-console */
  import { butter } from '@/buttercms';
  import moment from 'moment';

  export default {
    data() {
      return {
        page_title: 'Blog',
        posts: [],
        categories: [],
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then((res) => {
          // console.log(res.data)
          this.posts = res.data.data
        })
      },
      getCategories() {
        butter.category.list()
          .then((res) => {
            console.log('List of Categories:')
            console.log(res.data.data)
            this.categories = res.data.data
          })
      },
      getPostsByCategory(category) {
        butter.category.retrieve(category, {
            include: 'recent_posts'
          })
          .then((res) => {
            console.log('Posts with specific category:')
            console.log(res)
            this.posts = res.data.data
          })
      },
    },
    created() {

      this.getPosts()
      //this.getCategories()
      //this.getPostsByCategory()
    },
    mounted() {
      console.log(this.$route.params);
    },
    filters: {
        titleCase: function(value) {
            if (!value) return ''
            //ref: https://gist.github.com/kkiernan/91298079d34f0f832054
            return value.split('_').map(function(item) {
                return item.charAt(0).toUpperCase() + item.substring(1);
            }).join(' ');
        },
        formatDate: function(value) {
          if (value) {
            return moment(String(value)).format('LL')
          }
        }
    }
  }
</script>
