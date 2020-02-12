enBtn = document.getElementById('en')
roBtn = document.getElementById('ro')
ruBtn = document.getElementById('ru')

function selectFunc(type) {
    enBtn.style.display= 'none'
    roBtn.style.display= 'none'
    ruBtn.style.display= 'none'
    document.getElementById('en-btn').classList.remove('selected')
    document.getElementById('ro-btn').classList.remove('selected')
    document.getElementById('ru-btn').classList.remove('selected')

    if(type==='en'){
        enBtn.style.display= 'block'
        document.getElementById('en-btn').classList.add('selected')
    }
    if(type==='ro'){
        roBtn.style.display= 'block'
        document.getElementById('ro-btn').classList.add('selected')
    }
    if(type==='ru'){
        ruBtn.style.display= 'block'
        document.getElementById('ru-btn').classList.add('selected')
        document.getElementById('wr-card').style.fontSize = '18px'
    }
}
