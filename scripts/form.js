// populate products

const products = [
    {
      id: fc-1888,
      pname: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: fc-2050,
      pname: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      pname: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      pname: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
        pname: "warp equalizer",
      averagerating: 5.0
    }
  ];


function selectProducts(prod) {
    document.querySelector('#productOp').innerHTML = '';
    prod.forEach(pro => {
        const opt = document.createElement('option');
        opt.value = pro[pname];
        opt.textContent = pro[pname];

        document.querySelector('#productOp').appendChild(opt);
    })
}

selectProducts(products);




//local storage
const revNum = document.querySelector('#revNum');

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    let report = document.createElement('p');
    report.textContent = `This is your ${numVisits} review.`;
    revNum.appendChild(report);
}

numVisits++;

localStorage.setItem('numVisits-ls',numVisits);