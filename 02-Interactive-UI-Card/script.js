const card = document.getElementById('card')

const rule = CSSRulePlugin.getRule('.card::before')
const rule2 = CSSRulePlugin.getRule('.card::after')

const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

tl.to(rule, {
  width: '100%',
})
tl.to(
  rule2,
  {
    width: '100%',
  },
  '-=.3'
)
tl.to(
  'h1',
  {
    color: '#fff',
  },
  '-=0.3'
)
tl.to(
  'p',
  {
    clipPath: 'circle(150% at 0% 100%',
    transform: 'translateX(0)',
    ease: Back.easeOut.config(4),
  },
  '-=.3'
)
tl.pause()

card.addEventListener('mouseenter', () => {
  tl.play()
})
card.addEventListener('mouseleave', () => {
  tl.reverse()
})
