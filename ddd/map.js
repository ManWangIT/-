(function(w){
    w.aroundMap1 = function(a,b){
        this.init(a,b);
        return this;
    };

    aroundMap1.prototype = {
        init: function(centerPoint,roundPoints){
            this.map = new BMap.Map("container");
            this.map.centerAndZoom(new BMap.Point(centerPoint.longitude,centerPoint.latitude), 15);
            //创建中心点标记
            var pt = new BMap.Point(centerPoint.longitude, centerPoint.latitude);
            var marker2 = new BMap.Marker(pt);
            this.map.addOverlay(marker2);
            marker2.setAnimation(BMAP_ANIMATION_BOUNCE);
            var local = new BMap.LocalSearch(this.map, {
                renderOptions: {map: this.map,autoViewport: false, panel: "r-result"}
            });
            local.searchNearby(roundPoints,pt,1500);
            this.map.enableScrollWheelZoom(true);
        }
    };

}(window));