$(document).ready(function () {

    $("input[input-color]").change(function() {
        $('.selected-color').empty();
        var productCategory = $('.product-section').attr("id").split('-')[0];
        var productModel = $('.product-section').attr("id").split('-')[1];
        var colorName = $('input[input-color]:checked').val();

        var colorNameId = $('input[input-color]:checked').attr("id");

        $('.selected-color').append(colorName);

        var newSrc = './img/products-img/' + productCategory + '/' + productModel + '/' + productModel + '_' + colorNameId + '.png';
        var newSrc_b = './img/products-img/' + productCategory + '/' + productModel + '/' + productModel + '_' + colorNameId + '_b.png';
        $($('.slider-product-page li img')[0]).attr("src", newSrc);
        $($('.slider-product-page li img')[1]).attr("src", newSrc_b);
    });

    $("input[input-condition]").change(function() {
        $('.selected-condition').empty();
        var conditionName = $('input[input-condition]:checked').val();
        $('.selected-condition').append(conditionName);
    });

    $("input[input-number-product]").change(function() {
        $('.selected-number-product').empty();
        var numberProduct = $('input[input-number-product]:checked').val();
        $('.selected-number-product').append(numberProduct);
    });

    $("input[input-wifi-cell]").change(function() {
        $('.selected-wificell').empty();
        var wifiCell = $('input[input-wifi-cell]:checked').val();
        $('.selected-wificell').append(wifiCell);
    });

    $("input[input-size-watch]").change(function() {
        $('.selected-size-watch').empty();
        var sizeWatch = $('input[input-size-watch]:checked').val();
        $('.selected-size-watch').append(sizeWatch);
    });

    /******menu-double-click********/

    $('.menu-home-products').click(function(event) {
        $('.menu-home-products[aria-expanded="true"]').addClass("disabled");
    });

    /****************************valid and open block card02.html**********************/
    /*****block02*****/

    $('#next-new-user').click(function(){
        $('#headingTwo').addClass('open');
        $("#collapseTwo").collapse('show');
    });

    $('#next-fb-user').click(function(){
        $('#headingTwo').addClass('open');
        $("#collapseTwo").collapse('show');
    });

    $('#next-login-user').click(function(){
        $('#headingTwo').addClass('open');
        $("#collapseTwo").collapse('show');
    });


    $('input[name="address-client"]').change(function() {
        if ( $('#address-available').prop("checked") ) {
            $('a[aria-controls="collapseThree"]').attr('data-toggle', 'collapse');
            $('#headingThree').addClass('open');
            $("#collapseThree").collapse('show');
        }
        else {

        }
    });

    $('#inputs-payment-information input').keyup(function() {
        var numberInput = $('#inputs-payment-information').find('input').length;
        var numberValid = 0;

        $('#address-new').prop('checked', true);
        $(this).addClass("valid");
        console.log("change input");

        $('#inputs-payment-information').find('input').each(function(){
            if ( $(this).hasClass('valid')) {
                numberValid = numberValid +1;
            }
            else {

            }
        });

        if ( numberInput == numberValid ) {
            $('a[aria-controls="collapseThree"]').attr('data-toggle', 'collapse');
            $('#headingThree').addClass('open');
            $("#collapseThree").collapse('show');
        }
        else {

        }
    });

    /*****block03*****/

    $('input[name="delivery-address-client"]').change(function() {
        if ( $('#delivery-address-available').prop("checked") ) {
            $('a[aria-controls="collapseFour"]').attr('data-toggle', 'collapse');
            $('#headingFour').addClass('open');
            $("#collapseFour").collapse('show');
        }
        else {

        }
    });


    $('#inputs-delivery-information input').keyup(function() {
        var numberInput = $('#inputs-delivery-information').find('input').length;
        var numberValid = 0;

        $('#delivery-address-new').prop('checked', true);
        $(this).addClass("valid");

        $('#inputs-delivery-information').find('input').each(function(){
            if ( $(this).hasClass('valid')) {
                numberValid = numberValid +1;
            }
            else {

            }
        });

        if ( numberInput == numberValid ) {
            $('a[aria-controls="collapseFour"]').attr('data-toggle', 'collapse');
            $('#headingFour').addClass('open');
            $("#collapseFour").collapse('show');
        }
        else {

        }
    });

    /*****block04*****/

    $('#collapseFour input[name="payment-method"]').change(function() {
        $('a[aria-controls="collapseFive"]').attr('data-toggle', 'collapse');
        $('#headingFive').addClass('open');
        $("#collapseFive").collapse('show');
    });

    /*****validate_product_page_form*********/

    $('.product-section form input').change(function() {
        var selectorMain = $(this).closest('*[group-radio-inputs]').next('*[group-radio-inputs]');

        selectorMain.removeAttr('disabled').next('*[group-radio-inputs]').attr("disabled", "");
        selectorMain.find('input:checked').removeAttr('checked');

        $(this).closest('*[group-radio-inputs]').nextUntil('wrap-buy', 'div').find('*[value-input]').text('Not selected');

        var numberInput = $('.product-section form').find('input:radio:checked').length;
        var numberGroupRadio = $('.product-section form').find('*[group-radio-inputs]').length;

        if (numberInput >= numberGroupRadio) {
            $('.buy-btn').removeAttr('disabled');
        }
        else {
            $('.buy-btn').attr("disabled", "");

        }
    });


    $('#accept-terms').change(function() {
        if($('#accept-terms').prop("checked")) {
            $('#conferma-btn').removeClass('disable');
        }
        else {
            $('#conferma-btn').addClass('disable');
        }
    });

    /*************UP**************/
    $('#buttonUp').click(function() {
        $('html, body').animate({scrollTop: 0},500);
        return false;
    });

    /*******slider product-page*********/
    $('.slider-product-page').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: false
    });



});