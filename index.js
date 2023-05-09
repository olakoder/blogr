// document.querySelector(".mobile-btn").addEventListener("click", test)

// function test() {
//     document.querySelector(".header").classList.add("hide")
//     document.querySelector(".wire").classList.remove("hide")
// }


$(function() {
    // MOBILE BUTTON
    $('.mobile-btn').click (() => {
        $('.mobile-btn').hide()
        $('.mobile-cancel-btn').show()
        $('.hero-section').hide()
        $('.nav-box').fadeIn()
        $('.opaque').show()

        // $('.nav-box').css('transform', 'translateX(0px)')
        
    })

    // CANCEL BUTTON
    $('.mobile-cancel-btn').click (() => {
        $('.mobile-btn').show()
        $('.mobile-cancel-btn').hide()
        $('.hero-section').show()
        $('.nav-box').fadeOut()
        $('.opaque').hide()
         // $('.nav-box').css('transform', 'translateX(-2000px)')
    })


    $('.connect-me').click (() => {
        // $('.connect-info').toggle()
        $('.connect-me').hide()
        $('.connect-me-1').show()
        $('.image-rorate-1').show()
        $('.image-rorate').hide()
        
        $('.connect-info').slideDown()
    })

    $('.connect-me-1').click (() => {
        $('.connect-me-1').hide()
        $('.image-rorate-1').hide()
        $('.image-rorate').show()
        $('.connect-me').show()
        $('.connect-info').slideUp()
    })

})

// var myButton = document.querySelector(".mobile-btn")

// myButton.addEventListener('click', ()=> {

// })

// myButton.addEventListener('click', function() {

// })

// document.querySelector(".mobile-btn").addEventListener('click', ()=> {

// })

