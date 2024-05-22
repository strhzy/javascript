var count = 10;
const container = document.getElementById('kurwa');
container.style.display = 'flex';
container.style.flexWrap = 'nowrap';
for (var i = 0; i < count; i++) {
  const img = document.createElement('img');
  img.src = '/image/forest.png';
  img.alt = 'Placeholder Image';
  img.style.width='15%';
  img.style.position='relative';
  img.style.right=2.5*i+'%';
  container.appendChild(img);
}