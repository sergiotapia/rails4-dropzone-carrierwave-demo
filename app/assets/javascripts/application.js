// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require dropzone
//= require_tree .

Dropzone.options.photoDropzone = {
  paramName: "image",
  maxFilesize: 2,
  addRemoveLinks: true,
  init: function() {
    return this.on('removedfile', function(file) {
      if (file.xhr) {
        return $.ajax({
          url: "" + ($("#picture-dropzone").attr("action")) + "/" + (JSON.parse(file.xhr.response).id),
          type: 'DELETE'
        });
      }
    });
  }
};