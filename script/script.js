const header = document.getElementById('coming-soon')

setInterval(() => {
    if (header.innerText === 'Coming soon...') {
        header.innerText = 'Coming soon'
    } else {
        const updatedHeaderText = header.innerText + '.'
        header.innerText = updatedHeaderText
    }
}, 888)