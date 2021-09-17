const root = document.documentElement

const toggle_theme = document.getElementById('toggle_theme')

let isModeDark = false

toggleDarkMode = e => {
    if (!isModeDark) {
        root.style.setProperty('--bg-color', '#000')
        root.style.setProperty('--text-color', '#FAEBD7')
        root.style.setProperty('--hover-color', '#7FFFD4')
        isModeDark = true
    } else {
        root.style.setProperty('--bg-color', '#7FFFD4')
        root.style.setProperty('--text-color', '#2f4f4f')
        root.style.setProperty('--hover-color', '#Ffff')
        isModeDark = false
    }
}

toggle_theme.addEventListener('click', toggleDarkMode)