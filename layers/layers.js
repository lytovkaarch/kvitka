var wms_layers = [];


        var lyr_EsriGraylight_0 = new ol.layer.Tile({
            'title': 'Esri Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: 'межа дослідження<br />\
    <img src="styles/legend/_1_0.png" /> Межа загального дослідження <br />\
    <img src="styles/legend/_1_1.png" /> Межа детального дослідження<br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Будівлі'
            });

lyr_EsriGraylight_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_EsriGraylight_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'fid': 'fid', 'номер': 'номер', 'Назва дослідження ': 'Назва дослідження ', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'Номер будинку': 'Номер будинку', 'Назва вулиці': 'Назва вулиці', 'Дата будівництва': 'Дата будівництва', 'Призначення': 'Призначення', 'Назва будинку': 'Назва будинку', 'Історична справка': 'Історична справка', 'Корисні посилання': 'Корисні посилання', });
lyr__1.set('fieldImages', {'fid': '', 'номер': '', 'Назва дослідження ': '', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'Номер будинку': 'TextEdit', 'Назва вулиці': 'TextEdit', 'Дата будівництва': 'TextEdit', 'Призначення': 'TextEdit', 'Назва будинку': 'TextEdit', 'Історична справка': 'TextEdit', 'Корисні посилання': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'номер': 'no label', 'Назва дослідження ': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'Номер будинку': 'inline label', 'Назва вулиці': 'inline label', 'Дата будівництва': 'inline label', 'Призначення': 'header label', 'Назва будинку': 'inline label', 'Історична справка': 'inline label', 'Корисні посилання': 'inline label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});