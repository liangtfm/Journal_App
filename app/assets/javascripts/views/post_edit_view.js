JournalApp.Views.PostEditView = Backbone.View.extend({

  initialize: function() {
    var that = this;
  },

  template: JST["posts/edit"],

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  events: {
    "click .edit": "editPost"
  },

  editPost: function(event) {
    event.preventDefault();
    var that = this;

    var $form = $("#edit_form");
    var formData = $form.serializeJSON();

    that.model.save(formData, {
      success: function() {
        Backbone.history.navigate("#/");
      },
      error: function(data, xhr) {
        console.log(xhr.responseText);
      }
    });
  }

});