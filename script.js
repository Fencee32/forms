const urlap = document.querySelector("#urlap")

function bekuld(event) {
  console.log("Beküldve")
  const nev = document.querySelector("#nev").value
  console.log("nev:" + nev)
  const email = document.querySelector("#email").value
  console.log("email:" + email)
  const suly = document.querySelector("#suly").value
  console.log("suly:" + suly)
  if (suly > 100) {
    console.log("Súlyos")
  }
  const a1 = document.querySelector("#a1").value
  console.log("a1:" + a1)
  event.preventDefault()
}

urlap.addEventListener("submit", bekuld)

console.log(urlap)
