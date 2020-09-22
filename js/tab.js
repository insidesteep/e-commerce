$(function() {
    $('.search__tabs-item').on('click', function(e) {
        e.preventDefault()
        $('.search__tabs-item').removeClass('search__tabs-item--active')
        $(this).addClass('search__tabs-item--active')

        $('.search__content-item').removeClass('search__content-item--active')

        const tabId = $(this).attr('href')

        $(tabId).addClass('search__content-item--active')

    })
})