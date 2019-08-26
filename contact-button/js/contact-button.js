$('.wh-messenger-bg-activator').on('click', function() {
    $(this).parent().parent().toggleClass('wh-widget-show-get-button wh-widget-activator-as-close wh-widget-activate');
    var call_to_action = $(this).parent().parent().parent().find('#wh-call-to-action');
    var widget_button = $(this).parent().parent().find('.wh-widget-button');
    if ($(call_to_action).hasClass('wh-animation-in')) {
        $(call_to_action).removeClass('wh-animation-in').addClass('wh-animation-out wh-hide')
    } else {
        $(call_to_action).addClass('wh-animation-in').removeClass('wh-animation-out wh-hide')
    }
    if ($(widget_button).not('.wh-widget-button-activator').hasClass('button-slide-out')) {
        $(widget_button).not('.wh-widget-button-activator').removeClass('button-slide-out').addClass('button-slide')
    } else {
        $(widget_button).not('.wh-widget-button-activator').addClass('button-slide-out').removeClass('button-slide')
    }
});