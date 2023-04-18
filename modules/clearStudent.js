export function clearStudent() {
    document.querySelectorAll('.tr__rows').forEach(item => {
        item.remove()
    })
}
