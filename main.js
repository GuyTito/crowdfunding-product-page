const selection_modal = document.getElementById("selection_modal")
const success_modal = document.getElementById("success_modal")
const back_project_btn = document.getElementById("back_project")
const close_modal_btn = document.getElementById("close_modal")

back_project_btn.onclick = function() {
  selection_modal.style.display = "block"
}

close_modal_btn.onclick = function() {
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