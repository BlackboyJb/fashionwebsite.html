const hidebutton = document.getElementById('hide')
const cancel = document.getElementById('cancel')
const navinfo = document.getElementById('navbar')

if (hidebutton) {
    hidebutton.addEventListener('click', () => {
        navinfo.classList.add('active')
    })
}


if (cancel) {
    cancel.addEventListener('click', () => {
        navinfo.classList.remove('active')
    })
}






