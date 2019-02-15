$(document).ready(function() {
    const time = 1000;
    const imageRange = $('.slider__container img').length;
    const imageWidth = $('.wrapper').width();

    const $sliderContainer = $('.slider__container');
    let isAnimated = false;

    $('.arrow__right').click(() => {
        if (isAnimated) {
            return;
        }
        const currentMargin = parseInt($sliderContainer.css('margin-left'));
        $sliderContainer.animate({
            marginLeft: -imageWidth
        }, time, () => {
            const $shownImage = $('.slider__container img:first');
            $sliderContainer.append($shownImage);
            $sliderContainer.css('margin-left', 0);

            isAnimated = false;
        });
        isAnimated = true;
    })
    $('.arrow__left').click(() => {
        if (isAnimated) {
            return;
        }
        const $lastImage = $('.slider__container img:last');
        $sliderContainer.prepend($lastImage);
        $sliderContainer.css('margin-left', -imageWidth);

        $sliderContainer.animate({
            marginLeft: 0
        }, time, () => {
            isAnimated = false;
        })
        isAnimated = true;
    })
});