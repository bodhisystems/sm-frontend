<template>
  <section id="works" class="s-works target-section">

    <div class="row narrow section-intro has-bottom-sep">
        <div class="col-full">
            <h3>Portfolio</h3>
            <h1>See My Latest Projects.</h1>

            <p class="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
        </div>
    </div>

    <div v-masonry transition-duration="0.3s" item-selector=".item">
        <div v-masonry-tile class="item" v-for="(item, index) in works" :key="index">
          <div class="masonry__brick">
              <div class="item-folio">

                  <div class="item-folio__thumb">
                      <a :href="'/static/images/portfolio/gallery/g-' + item.image[0] + '.jpg'" class="thumb-link" :title="item.image[1]" data-size="1050x700">
                          <img :src="'./static/images/portfolio/' + item.image[0] + '.jpg'"
                               :srcset="'/static/images/portfolio/' + item.image[0] + '.jpg 1x, /static/images/portfolio/' + item.image[0] + '@2x.jpg 2x'" :alt="item.image[2]">
                          <span class="shadow-overlay"></span>
                      </a>

                  </div>

                  <div class="item-folio__text">
                      <h3 class="item-folio__title">
                          {{ item.title }}
                      </h3>
                      <p class="item-folio__cat">
                          {{ item.category }}
                      </p>
                  </div>

                  <a :href="item.link[0]" class="item-folio__project-link" :title="item.link[1]">
                      <i class="im im-link"></i>
                  </a>

                  <div class="item-folio__caption">
                      <p>{{ item.caption }}</p>
                  </div>

              </div> <!-- end item-folio -->
          </div> <!-- end masonry__brick -->
        </div>
      </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        works : [
          {
            title: 'The Beetle',
            category: 'Web Development',
            image: ["beetle", "The Beetle Car", "alt-text"],
            link: ["https://www.behance.net", "Project Link"],
            caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          },
          {
            title: 'The Lighthouse',
            category: 'Web Design',
            image: ["lighthouse", "Lighthouse", "alt-text"],
            link: ["https://www.behance.net", "Project Link"],
            caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          },
          {
            title: 'The Salad',
            category: 'Branding',
            image: ["salad", "The Salad", "alt-text"],
            link: ["https://www.behance.net", "Project Link"],
            caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          },
          {
            title: 'The Woodcraft',
            category: 'Branding',
            image: ["woodcraft", "The Woodcraft", "alt-text"],
            link: ["https://www.behance.net", "Project Link"],
            caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          },
          {
            title: 'The Skaterboy',
            category: 'Web Development',
            image: ["skaterboy", "The Skaterboy", "alt-text"],
            link: ["https://www.behance.net", "Project Link"],
            caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          },
          {
            title: 'The Liberty',
            category: 'Branding',
            image: ["liberty", "The Liberty", "alt-text"],
            link: ["https://www.behance.net", "Project Link"],
            caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          },
          {
            title: 'The Minimalismo',
            category: 'Web Design',
            image: ["minimalismo", "The Minimalismo", "alt-text"],
            link: ["https://www.behance.net", "Project Link"],
            caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          },
          {
            title: 'Lady Shutterbug',
            category: 'Web Development',
            image: ["shutterbug", "Lady Shutterbug", "alt-text"],
            link: ["https://www.behance.net", "Project Link"],
            caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          },
        ],
      }
    },
  }
</script>
