var App = window.App || {};

App.cache = {};

App.box_onclick = function(e){
	e.preventDefault();
	var element = $(e.currentTarget),
		option = element.attr('data-option');
	this.processEvent[option](element);
}

App.bind = function(){
	this.cache.boxesControls.on('click', $.proxy(this.box_onclick, this));
}

App.processEvent = {
	color : function(element){
		var box = element.parents('.box');
		box.css('background', 'rgba(0,255,255,8)');
	},
	remove : function (element) {
		var box = element.parents('.box');
		box.remove();
	},
	size : function (element) {
		var box = element.parents('.box');
		box.css({
			width: '100px',
			height: '100px'
		});
		
	}
}

App.init = (function(){
	App.cache.boxes = $('.box');
	App.cache.boxesControls = App.cache.boxes.find('a');

	App.bind();
})();