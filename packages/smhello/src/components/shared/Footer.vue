<template>
  <footer>
      <div class="row">
          <div class="col-full">

              <div class="footer-logo">
                  <a class="footer-site-logo" href="/"><img src="../../../static/images/logo.png" alt="Homepage"></a>
              </div>

              <ul class="footer-social">
                  <li><a href="https://www.facebook.com/subash.maharjan.33">
                      <i class="im im-facebook" aria-hidden="true"></i>
                      <span>Facebook</span>
                  </a></li>
                  <li><a href="https://twitter.com/submjn">
                      <i class="im im-twitter" aria-hidden="true"></i>
                      <span>Twitter</span>
                  </a></li>
                  <li><a href="https://www.instagram.com/hudeomah/">
                      <i class="im im-instagram" aria-hidden="true"></i>
                      <span>Instagram</span>
                  </a></li>
                  <li><a href="https://www.behance.net/mr_submjn58b7">
                      <i class="im im-behance" aria-hidden="true"></i>
                      <span>Behance</span>
                  </a></li>
                  <li><a href="https://www.linkedin.com/in/subashmaharjan/">
                      <i class="im im-linkedin" aria-hidden="true"></i>
                      <span>LinkedIn</span>
                  </a></li>
              </ul>

          </div>
      </div>

      <div class="row footer-bottom">

          <div class="col-twelve">
              <div class="copyright">
                  <span>© Copyright subash {{ new Date().getFullYear() }}</span>
                  <span>Design by <a href="https://www.subashmaharjan.com/">Subash Maharjan</a></span>
              </div>

              <back-to-top bottom="0px" right="0px">
                <scrollactive class="go-top" :duration="2000">
                    <a title="Back to Top" href="#top" class="scroll-link scrollactive-item">
                        <i class="im im-arrow-up" aria-hidden="true"></i>
                    </a>
                </scrollactive>
              </back-to-top>
          </div>

      </div> <!-- end footer-bottom -->

  </footer>
</template>
