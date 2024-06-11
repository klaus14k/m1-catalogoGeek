const sliders = document.querySelectorAll(".itemList")
let isDown = false
let startX
let scrollLeft

sliders.forEach(slider => {
    slider.addEventListener("mousedown", (e) => {
        isDown = true
        slider.classList.add("active")
        startX = e.pageX
        scrollLeft = slider.scrollLeft
    })
    slider.addEventListener("mouseleave", () => {
        isDown = false
        slider.classList.remove("active")
    })
    slider.addEventListener("mouseup", () => {
        isDown = false
        slider.classList.remove("active")
    })
    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX
        const walk = (x - startX) * 2
        slider.scrollLeft = scrollLeft - walk
    })
})

export default sliders