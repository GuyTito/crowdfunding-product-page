const selection_modal = document.getElementById("selection_modal")
const success_modal = document.getElementById("success_modal")
const back_project_btn = document.getElementById("back_project")
const close_modal_btn = document.getElementById("close_modal")

back_project_btn.onclick = function() {
  selection_modal.style.display = "block"
}

close_modal_btn.onclick = function(e) {
  e.preventDefault()
  selection_modal.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == selection_modal) {
    selection_modal.style.display = "none"
  }
  if (event.target == success_modal) {
    success_modal.style.display = "none"
  }
}


const radio_btns = document.querySelectorAll('input[type="radio"]')
radio_btns.forEach((radio) => {
  radio.addEventListener('change', () => {
    // hide all pledges
    radio_btns.forEach((radio) => {
      let pledge = document.querySelector(`#${radio.value}`)
      if (pledge.classList.contains("hidden")) return
      else pledge.classList.add('hidden')
    })
    // show selected pledge
    let pledge = document.querySelector(`#${radio.value}`)
    pledge.classList.remove('hidden')
  })
})


const reward_btns = document.querySelectorAll('.reward')
reward_btns.forEach((reward) => {
  reward.addEventListener('click', (e) => {
    // open selection modal
    selection_modal.style.display = "block"
    // scroll to product
    document.getElementById(`${reward.dataset.reward}_product`).scrollIntoView({behavior: "smooth", block: "start", inline: "center"})
    // check product
    document.querySelector(`input[value=${reward.dataset.reward}]`).checked = true
    // hide all pledges
    radio_btns.forEach((radio) => {
      let pledge = document.querySelector(`#${radio.value}`)
      if (pledge.classList.contains("hidden")) return
      else pledge.classList.add('hidden')
    })
    // show selected pledge
    let pledge = document.querySelector(`#${reward.dataset.reward}`)
    pledge.classList.remove('hidden')
  })
})