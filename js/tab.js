$(function() {
    $('.tab').on('click', function(e) {
        e.preventDefault()
        $('.tab').removeClass('tab--active')
        $(this).addClass('tab--active')

        $('.tab-content').removeClass('tab-content--active')

        const tabId = $(this).attr('href')

        $(tabId).addClass('tab-content--active')

    })
})