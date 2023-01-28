$( document ).ready(function () {
    const amenityObj = {};
    if ($(this).is(':checked')) {
        amenityObj[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
        delete amenityObj[$(this).attr('data-name')];
    }
    const names = object.keys(amenityObj);
    $('.amenity h4').text(names.sort().join(', '));
});