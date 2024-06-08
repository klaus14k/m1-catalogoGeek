function handleModal() {
    const button = document.getElementById("contactButton")
    const modalController = document.getElementById("modal_controller")
    button.addEventListener("click", () => {
        modalController.showModal()
    })

    function closeModal() {
        const closeButton = document.getElementById("modal_close")
        closeButton.addEventListener("click", () => {
            modalController.close()
        })
    }
    closeModal()
}
handleModal()

export default handleModal