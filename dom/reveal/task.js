const reveal = Array.from(document.querySelectorAll('.reveal'));

function revealBlock(block) {
 const { top, bottom } = block.getBoundingClientRect();
 if (bottom <= window.innerHeight && top > 0) {
  return true;
 }
 return false;
}

reveal.forEach(block => {
 window.addEventListener('scroll', () => {
  if (revealBlock(block)) {
   block.classList.add('reveal_active');
  } else {
   block.classList.remove('reveal_active');
  }
 });
});