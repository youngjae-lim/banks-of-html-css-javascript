const closeBtn = document.querySelector('.banner-close')
const banner = document.querySelector('.banner')

closeBtn.addEventListener('click', () => {
  banner.remove()
})
