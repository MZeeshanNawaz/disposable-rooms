// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer bg-[#071526] text-[#dfefff]">
      <div className="footer-top py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div>
              <img src="/Logo.png" alt="Disposable Rooms" className="footer-logo mb-3" />
              <p className="small footer-desc">Feel free to contact us</p>
              <div className="socials mt-3 flex space-x-3">
                <a href="#" className="social-btn"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="social-btn"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="social-btn"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <div>
              <h6 className="footer-heading font-semibold mb-3">Explore</h6>
              <ul className="list-unstyled footer-links small space-y-2">
                <li><a href="#"><i className="fa-solid fa-chevron-right me-2 fa-xs"></i>About</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right me-2 fa-xs"></i>Services</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right me-2 fa-xs"></i>Rooms</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right me-2 fa-xs"></i>Blog</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right me-2 fa-xs"></i>Contact</a></li>
              </ul>
            </div>

            <div>
              <h6 className="footer-heading font-semibold mb-3">Blog</h6>
              <div className="footer-blog-item">
                <a href="#" className="d-block blog-title">Tips for Booking Disposable Rooms Quickly</a>
                <div className="blog-meta small">Nov 5, 2025</div>
              </div>
              <div className="footer-blog-item mt-3">
                <a href="#" className="d-block blog-title">How Disposable Rooms Make Travel Easy</a>
                <div className="blog-meta small">Nov 7, 2025</div>
              </div>
            </div>

            <div>
              <h6 className="footer-heading font-semibold mb-3">Contact</h6>
              <div className="contact-list small space-y-2">
                <div><i className="fa-solid fa-phone me-2"></i> +968 98164264</div>
                <div><i className="fa-regular fa-envelope me-2"></i> saeedraja830@gmail.com</div>
                <div><i className="fa-solid fa-location-dot me-2"></i>Muscat, Oman</div>
                <div className="mt-3">
                  <div className="input-group subscribe-group flex">
                    <input
                      value={subscribeEmail}
                      onChange={(e) => setSubscribeEmail(e.target.value)}
                      type="email"
                      className="form-control form-control-sm rounded-l-md p-2"
                      placeholder="Your Email Address"
                    />
                    <button
                      className="btn subscribe-btn bg-[#0f3b6a] text-white rounded-r-md px-3"
                      type="button"
                      onClick={handleSubscribe}
                    >
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
                <div className="mt-3 small text-gray-400">Business hours: Mon - Sat, 9:00 AM - 6:00 PM</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom py-4 border-t border-gray-700">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>© All Copyright 2025 by Disposable Rooms</div>
          <div className="mt-2 md:mt-0">
            <a href="#" className="me-3">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
