<template>
  <section id="works" class="s-works target-section">

    <div class="row narrow section-intro has-bottom-sep">
        <div class="col-full">
            <h3>Portfolio</h3>
            <h1>Latest Projects</h1>

            <!-- <p class="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p> -->
        </div>
    </div>

    <div v-masonry transition-duration="0.3s" item-selector=".masonry__brick" class="row masonry-wrap">
        <div class="masonry">
          <div v-masonry-tile class="masonry__brick" v-for="(item, index) in works" :key="index">
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
            title: 'AMS MARS',
            category: 'Web Development',
            image: ["mars", "My Market News", "alt-text"],
            link: ["https://mymarketnews.ams.usda.gov", "Project Link"],
            caption: "Market News needs to improve transparency, speed, accuracy, and flexibility to remain relevant to agricultural market stakeholders. The Market Analysis & Reporting Services (MARS) is a standardized information management system which will assist Market News to collect and distribute information from remote locations by combining all reporting functions into a single, user-managed platform. MARS will facilitate the flow of data from the data provider to agency analysts and to the public, and allow users to create unique content."
          },
          {
            title: 'Aclands Anatomy',
            category: 'Web Development',
            image: ["aclands", "Aclands Anatomy", "alt-text"],
            link: ["http://aclandanatomy.com/", "Project Link"],
            caption: "Acland's Video Atlas of Human Anatomy contains nearly 330 videos of real human anatomic specimens in their natural colors, including 5 new, groundbreaking videos of the inner ear. Dr. Robert Acland presents moving structures—muscles, tendons, and joints—making the same movements that they make in life. The videos show complex structures step by step—from bone to surface anatomy—to provide a foundation for understanding anatomical structure and function. The entire series was digitally re-mastered producing clearer, brighter, and more detailed videos than seen in previous versions"
          },
          {
            title: 'Royal College of Pediatrics and Child Health',
            category: 'Web Development',
            image: ["rcpch", "Royal College of Pediatrics and Child Health", "alt-text"],
            link: ["https://www.rcpch.ac.uk/", "Project Link"],
            caption: "Founded in 1996 and now with over 18,000 members across the world, we play a major role in postgraduate medical education, professional standards, research and policy."
          },
          // {
          //   title: 'American Academy of Pediatrics',
          //   category: 'Web Development',
          //   image: ["aap", "American Academy of Pediatrics", "alt-text"],
          //   link: ["https://solutions.aap.org/Index.aspx", "Project Link"],
          //   caption: "American Academy of Pediatrics share an integrated platform, with quick and easy access to well-care guides, acute-care answers, patient education, and pediatric coding."
          // },
          // {
          //   title: 'American Society of Anesthesiologists',
          //   category: 'Web Development',
          //   image: ["asa", "American Society of Anesthesiologists", "alt-text"],
          //   link: ["http://anesthesiology.pubs.asahq.org/journal.aspx", "Project Link"],
          //   caption: "Anesthesiology founded in 1940, leads the world in publication of peer-reviewed novel research that transforms clinical practice and fundamental understanding in anesthesiology: the practice of perioperative, critical care, and pain medicine. Anesthesiology is the official journal of the American Society of Anesthesiologists but operates with complete editorial autonomy. With an independent and internationally recognized Editorial Board, the Journal leads the specialty in promotion of original research by providing immediate open access to highlighted articles and free access to all published articles 6 months after publication, supported by an active press release program. Anesthesiology is committed to publishing and disseminating the highest quality work to inform daily clinical practice and transform the practice of medicine in our specialty."
          // },
          // {
          //   title: 'The Liberty',
          //   category: 'Branding',
          //   image: ["liberty", "The Liberty", "alt-text"],
          //   link: ["https://www.behance.net", "Project Link"],
          //   caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          // },
          // {
          //   title: 'The Minimalismo',
          //   category: 'Web Design',
          //   image: ["minimalismo", "The Minimalismo", "alt-text"],
          //   link: ["https://www.behance.net", "Project Link"],
          //   caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          // },
          // {
          //   title: 'Lady Shutterbug',
          //   category: 'Web Development',
          //   image: ["shutterbug", "Lady Shutterbug", "alt-text"],
          //   link: ["https://www.behance.net", "Project Link"],
          //   caption: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
          // },
        ],
      }
    },
  }
</script>
