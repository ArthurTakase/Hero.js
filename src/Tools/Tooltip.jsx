// when an element with the attribute data-tooltip is hovered over, a tooltip will appear

document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.querySelector('#tooltip')

    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (element.classList.contains('WIP')) return

            const dataTooltip = element.getAttribute('data-tooltip')
            tooltip.style.display = 'block'
            tooltip.innerText = dataTooltip

            let tooltipRect = tooltip.getBoundingClientRect()
            const elementRect = element.getBoundingClientRect()

            tooltip.style.top = `${elementRect.y + tooltipRect.height}px`
            tooltip.style.left = `${elementRect.x + elementRect.width / 2 - tooltipRect.width / 2}px`

            // if the tooltip is out of the screen, move it back in
            tooltipRect = tooltip.getBoundingClientRect()
            if (tooltipRect.bottom > window.innerHeight - tooltipRect.height - 5) tooltip.style.top = `${elementRect.y - tooltipRect.height - 5}px`
            if (tooltipRect.right > window.innerWidth) {
                tooltip.style.right = `0px`
                tooltip.style.left = 'unset'
            }
            if (tooltipRect.left < 0) tooltip.style.left = `0px`
            if (tooltipRect.top < 0) tooltip.style.top = '0px'
        })
        element.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none'
        })
    })
})
