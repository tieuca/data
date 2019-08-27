function auto() {
    document.body.classList.add('auto');
    if (new Date().getHours() > 22 || new Date().getHours() < 7) {
        document.body.classList.add('dark');
        localStorage.setItem('620217dark', 'true')
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('620217dark', 'false')
    }
}

function dark() {
    localStorage.getItem('620217dark') == 'true' ? document.body.classList.add('dark') : document.body.classList.remove('dark')
}
if (localStorage.getItem('620217auto') == 'true') {
    auto()
} else {
    localStorage.getItem('620217dark') == null ? auto() : dark()
}

function toggle() {
    localStorage.setItem('620217auto', localStorage.getItem('620217auto') == 'true' ? 'false' : 'true');
    localStorage.getItem('620217auto') == 'true' ? auto() : document.body.classList.remove('auto')
}

function mode() {
    document.body.classList.remove('auto');
    localStorage.removeItem('620217auto');
    localStorage.setItem('620217dark', localStorage.getItem('620217dark') == 'true' ? 'false' : 'true');
    dark()
}