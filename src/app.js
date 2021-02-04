import 'alpinejs'

const namespace = window.__gendra = {}

namespace.apiUrl = process.env.API_URL
namespace.recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY

namespace.contactFormData = function () {
  return {
    // Indicators
    processing: false,
    error: null,
    success: false,

    // Form Data
    name: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    body: '',
    recaptchaValue: null,

    // Functions
    submitForm() {
      this.processing = true
      this.success = false

      fetch(`${__gendra.apiUrl}/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.name,
          lastName: this.lastName,
          email: this.email,
          company: this.company,
          body: this.body,
          phone: this.phone,
          'g-recaptcha-response': this.recaptchaValue
        })
      }).then(() => {
        this.processing = false;
        this.success = true;
        this.error = null;

        this.name = '';
        this.lastName = '';
        this.email = '';
        this.company = '';
        this.body = '';
        this.phone = '';
        this.recaptchaValue = null;

        window.grecaptcha.reset();
      }).catch(err => {
        this.error = err
        this.success = false
      })
    },
    isValid() {
      return (this.name && this.lastName && this.email && this.company && this.body) &&
        !this.processing &&
        this.recaptchaValue
    }
  }
}