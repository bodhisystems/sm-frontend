<template>
  <section class="layout">
    <Header />

    <section class="page-header page-hero" style="background-image:url(../../../static/images/blog/blog-bg-01.jpg)">

        <div class="row page-header__content">
            <article class="col-full">

                <div class="page-header__info">
                    <div class="page-header__cat">
                      <router-link
                        v-for="(category, index) in posts[0].categories"
                        :key="category.slug + '_' + index"
                        :to="'/blog/' + category.slug">
                        {{ category.name }}
                      </router-link>
                    </div>
                    <div class="page-header__date">
                        {{ posts[0].published | formatDate }}
                    </div>
                </div>

                <h1 class="page-header__title">
                    <h2 class="h01"><router-link :to="'/blog/' + posts[0].slug">{{ posts[0].title }}</router-link></h2>
                </h1>
                <p>{{ posts[0].summary }}</p>
                <p>
                    <router-link :to="'/blog/' + posts[0].slug" class="btn btn--stroke page-header__btn">Read more</router-link>
                </p>
            </article>
        </div>

    </section> <!-- end page-header -->

    <section class="blog-content-wrap">

      <div class="row blog-content">
        <div class="blog-post__cat  col-full">

          <h6>Categories</h6>
          <a v-for="(category, index) in categories"
            :key="category.slug + '_' + index"
            @click="getPostsByCategory(category.slug)">
            {{ category.name }}
          </a>
          <!-- <div class="row">
            <div :class="'col-' + numberString[((categories.length > 4) ? 4 : 12/categories.length) - 1]"
              v-for="(category, index) in categories"
              :key="category.slug + '_' + index">
              <a class="btn btn--stroke full-width" @click="getPostsByCategory(category.slug)">{{ category.name }}</a>
            </div>
          </div> -->
        </div>
          <div class="col-full">
              <div class="blog-list block-1-2 block-tab-full">
                  <article class="col-block" v-for="(post,index) in posts" :key="post.slug + '_' + index">
                    <div class="blog-date">
                        <a href="blog-single.html">{{ post.published | formatDate }}</a>
                    </div>
                    <h2 class="h01"><router-link :to="'/blog/' + post.slug">{{ post.title }}</router-link></h2>
                    <p>{{ post.summary }}</p>
                    <div class="blog-cat">
                        <!-- <router-link
                          v-for="(category, index) in post.categories"
                          :key="category.slug + '_' + index"
                          :to="'/blog/' + category.slug">
                          {{ category.name }}
                        </router-link> -->
                        <a v-for="(category, index) in post.categories"
                          :key="category.slug + '_' + index"
                          @click="getPostsByCategory(category.slug)">
                          {{ category.name }}
                        </a>
                    </div>
                  </article>
                </div>

          </div> <!-- end col-full -->

      </div> <!-- end blog-content -->

        <div v-if="posts.length > 10" class="row blog-entries-nav">
            <div class="col-full">
                <a @click="getPosts(meta.previous_page)" class="btn btn--stroke">
                    <i class="im im-arrow-left"></i>
                    Prev
                </a>

                <a @click="getPosts(meta.next_page)" class="btn btn--stroke">
                    Next
                    <i class="im im-arrow-right"></i>
                </a>
            </div>
        </div>

    </section> <!-- end blog-content-wrap -->

    <Footer />
  </section>
</template>


<script>
import { butter } from '@/buttercms'
import moment from 'moment';
// Shared Components
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// Pages
import BlogContent from '@/components/pages/home/BlogContent'

export default {
  data () {
    return {
      numberString: ['one', 'two', 'three', 'four'],
      posts: [{
        categories: []
      }],
      meta: [],
      categories: [],
    }
  },
  methods: {
    getPosts($page) {
      butter.post.list({
        page: $page,
        page_size: 10
      }).then((res) => {
        //console.log(res.data.meta)
        this.posts = res.data.data
        this.meta = res.data.meta
      })
    },
    getCategories() {
      butter.category.list()
        .then((res) => {
          //console.log('List of Categories:')
          //console.log(res.data.data)
          this.categories = res.data.data
        })
    },
    getPostsByCategory(category) {
      butter.category.retrieve(category, {
          include: 'recent_posts'
        })
        .then((res) => {
          //console.log('Posts with specific category:')
          //console.log(res.data)
          this.posts = res.data.data.recent_posts
        })
    },
  },
  watch: {
    $route() {
      this.getPosts(1)
    }
  },
  created() {
    this.getPosts(1)
    this.getCategories()
  },
  components: {
    Footer,
    Header,
    BlogContent
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

<style lang="scss">
  .blog-post__cat {
    display: inline-block;
    margin-right: 2rem;
    margin-bottom: .3rem;
    font-size: 1.4rem;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: .16rem;
    color: rgba(255, 255, 255, 0.8);
    font-family: "montserrat-bold", sans-serif;

    a {
      //color: white;
      cursor: pointer;
      &:hover, &:focus, &:active {
        color: rgba(134, 33, 33, 0.5);
      }
      &::after {
        content: ", ";
      }
      &:last-child::after {
          display: none;
      }
    }
  }
  .blog-list article:nth-child(2n+1) { padding-left: 0; }
  .blog-list article:nth-child(2n+2) { padding-right: 0; }
</style>
