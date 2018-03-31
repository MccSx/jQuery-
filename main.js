let allButtons = $('#buttons>span')
let n = 0
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (e) {
    let index = $(e.currentTarget).index()
    let changeLength = -index * 300
    $('#images').css({
      transform: 'translate(' + changeLength + 'px)'
    })
    n = index
    allButtons.eq(index).addClass('change').siblings('.change').removeClass('change')
  })
}

let size = allButtons.length
allButtons.eq(n%size).trigger('click')
let timer = setTimer()

$('.window').on('mouseenter', function () {
  window.clearInterval(timer)
})
$('.window').on('mouseleave', function () {
  timer = setTimer() 
})

function setTimer() {
  return setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
  }, 2000)
}