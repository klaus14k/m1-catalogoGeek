const sliders = document.querySelectorAll(".itemList")
let isDown = false
let startX
let scrollLeft

sliders.forEach(slider => {
    slider.addEventListener("mousedown", (e) => {
        isDown = true
        slider.classList.add("active")
        // console.log(e.pageX)
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
        // console.count(isDown)
        e.preventDefault()
        const x = e.pageX
        // console.log({x, startX})
        const walk = (x - startX) * 2
        // console.log(walk)
        slider.scrollLeft = scrollLeft - walk
    })
})

export default undefined