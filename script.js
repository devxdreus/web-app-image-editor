function editImage() {
  var blur = $('#blur').val();
  var brightness = $('#brightness').val();
  var contrast = $('#contrast').val();
  var grayscale = $('#grayscale').val();
  var hue = $('#hue').val();
  var invert = $('#invert').val();
  var opacity = $('#opacity').val();
  var saturate = $('#saturate').val();
  var sepia = $('#sepia').val();

  $('.canvas img').css({
    'filter': 'blur(' + blur + 'px) brightness(' + brightness + '%) contrast(' + contrast + '%) grayscale(' + grayscale + '%) hue-rotate(' + hue + 'deg) invert(' + invert + '%) opacity(' + opacity + '%) saturate(' + saturate + '%) sepia(' + sepia + '%)'
  })
}

$('.editor input[type=range]').change(editImage).mousemove(editImage);