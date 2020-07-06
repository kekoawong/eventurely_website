var feed = new Instafeed({
    accessToken: "IGQVJYSTBZAUVk3MzRUM3VnVGswa2FkS2dnTi1DWDBVRGI1MzlPeTRva2hPd3FoUTByd285d2dzbGsyRTFad1VmMGRBZAm9rbWpEVnNpeTNtQUNvVmIwdzZAvWmQ2TE02dkUtZAjVZAbDhR",
    transform: function(item) {
      var d = new Date(item.timestamp);
      item.date = [d.getDate(), d.getMonth(), d.getYear()].join('/');
      return item;
    },
    template: `<a title="Visit Post" class="insta-links" href="{{link}}"><div><img class="insta-image" title="Visit Post" src="{{image}}"/></div><div class="insta-caption"><p><span class="insta-profile">{{model.username}}</span>{{model.caption}}</p><hr class="insta-post-divider"></div></a>`
  });
  
feed.run();
