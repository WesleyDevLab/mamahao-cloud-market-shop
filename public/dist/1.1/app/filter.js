define(function(require,exports,module){var a={elements:{},config:{hashParams:function(){return M.url.getParams((location.hash.match(/(\w+=)([^\&]*)/gi)||[]).join("&"))},searchParams:function(){return JSON.parse(localStorage.getItem(CONST.local_search_params))||{}}},init:function(){var t=a.config,s=(t.hashParams(),t.searchParams());s.ages&&$.each(s.ages.split(","),function(a,t){$('.ages .content li[data-id="'+t+'"]').addClass("active")}),s.categoryId&&$.each(s.categoryId.split(","),function(a,t){$('.types .content li[data-id="'+t+'"]').addClass("active")}),s.brandIds&&$.each(s.brandIds.split(","),function(a,t){$('.brands .content li[data-id="'+t+'"]').addClass("active")}),$(".js-collapse").on("click",function(){var a=$(this),t=a.closest(".item").find(".content li:eq(5)~li");a.hasClass("bottom")?(a.text("全部收起").removeClass("bottom").addClass("top"),t.removeClass("hide")):(a.text("全部展开").removeClass("top").addClass("bottom"),t.addClass("hide"))}),$(".m-filter").on("click",".content li",function(){var a=$(this),t=a.closest(".item");a.toggleClass("active"),t.hasClass("ages")||a.siblings().removeClass("active")}),$(".js-filter").on("click",a.filterGoods)},filterGoods:function(){var t=a.config,s=t.hashParams(),e=t.searchParams(),i=$(".item"),n={};$.each(i,function(){var a=$(this),t=a.find("li.active"),s=a.data("field");n[s]=function(){var a=[];return $.each(t,function(){a.push($(this).data("id"))}),a.join(",")}()}),localStorage.setItem(CONST.local_search_params,JSON.stringify($.extend(e,s,n))),s=$.extend({},t.hashParams()),window.location.href="#/list/"+$.param(s)}};module.exports=a});