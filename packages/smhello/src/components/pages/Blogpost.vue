<template>
  <section class="layout">
    <Header />

    <article class="blog-single">
      <div class="page-header page-header--single page-hero" style="background-image:url(../../../static/images/blog/blog-bg-02.jpg)">

            <div class="row page-header__content narrow">
                <article class="col-full">
                    <div class="page-header__info">
                        <div class="page-header__cat">
                          <router-link
                            v-for="(category, index) in post.categories"
                            :key="category.slug + '_' + index"
                            :to="'/blog/' + category.slug">
                            {{ category.name }}
                          </router-link>
                        </div>
                    </div>
                    <h1 class="page-header__title">
                        <a title=""> {{ post.title }} </a>
                    </h1>
                    <ul class="page-header__meta">
                        <li class="date">{{ post.published | formatDate }}</li>
                        <li class="author">
                            By <span>{{ author.first_name }} {{ author.last_name }}</span>
                        </li>
                    </ul>

                </article>
            </div>

        </div> <!-- end page-header -->
        <div class="row blog-content">
            <div class="col-full blog-content__main">
              <div v-html="post.body"></div>

              <p class="blog-content__tags" v-if="post.tags">
                  <span>Post Tags</span>

                  <span class="blog-content__tag-list">
                      <router-link
                        v-for="(tag, index) in post.tags"
                        :key="tag.slug + '_' + index"
                        :to="'/blog/' + tag.slug">
                        {{ tag.name }}
                      </router-link>
                  </span>

              </p>

              <div class="blog-content__pagenav">
                  <div class="blog-content__nav">
                      <div class="blog-content__prev">
                          <router-link rel="prev" v-if="meta.previous_post" :to="/blog/ + meta.previous_post.slug" class="button">
                            <span>Previous Post</span> {{ meta.previous_post.title }}
                          </router-link>
                      </div>
                      <div class="blog-content__next">
                          <router-link rel="next" v-if="meta.next_post" :to="/blog/ + meta.next_post.slug" class="button">
                            <span>Next Post</span> {{ meta.next_post.title }}
                          </router-link>
                      </div>
                  </div>

                  <div class="blog-content__all">
                      <router-link to="/blog" class="btn btn--primary">View All Post</router-link>
                  </div>
              </div>
            </div>
        </div>
    </article>

    <Footer />

  </section>

</template>

<script>
  import { butter } from '@/buttercms'
  import moment from 'moment';
  import Header from '@/components/shared/Header'
  import Footer from '@/components/shared/Footer'

  export default {
    name: 'blog-post',
    data() {
      return {
        post: {},
        meta: {},
        author: {},
        error: []
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            //console.log(res.data)
            this.post = res.data.data
            this.meta = res.data.meta
            this.author = res.data.data.author
          }).catch((res) => {
            // eslint-disable-next-line no-console
            //console.log(res)
            this.error.push(res);
          })
      }
    },
    watch: {
      $route() {
        this.getPost()
      }
    },
    created() {
      this.getPost()
    },
    filters: {
        formatDate: function(value) {
          if (value) {
            return moment(String(value)).format('LL')
          }
        }
    },
    components: {
      Header,
      Footer
    }
  }
</script>
