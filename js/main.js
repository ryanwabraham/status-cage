function main() {
  renderStatusGrid();
  printCopyrightDate();
}

function printCopyrightDate() {
  const year = new Date().getFullYear();
  const copyright = document.getElementById("copyright-date");
  copyright.innerHTML = year;
}

function renderStatus(code) {
  return `
  <li>
    <a href="/${code}" title="${code} ${statuses[code].message}">
      <img
        class="lazyload"
        src="./img/placeholder.png"
        data-src="./img/${code}.jpg"
        alt="${code} ${statuses[code].message}"
      >
      <div class="status-info">
        <h2>${code}</h2>
        <p>${statuses[code].message}</p>
      </div>
    </a>
  </li>`;
}

function renderStatusGrid() {
  const statusGrid = document.getElementById('status-grid');
  Object.keys(statuses).forEach(code => {
    if (statuses[code].img) {
      statusGrid.insertAdjacentHTML('beforeend', renderStatus(code));
    }
  });
}
