var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_heat_stress_points_1 = new ol.format.GeoJSON();
var features_heat_stress_points_1 = format_heat_stress_points_1.readFeatures(json_heat_stress_points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heat_stress_points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heat_stress_points_1.addFeatures(features_heat_stress_points_1);
var lyr_heat_stress_points_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heat_stress_points_1, 
                style: style_heat_stress_points_1,
                popuplayertitle: "heat_stress_points",
                interactive: true,
                title: '<img src="styles/legend/heat_stress_points_1.png" /> heat_stress_points'
            });
var format_IL_1_2 = new ol.format.GeoJSON();
var features_IL_1_2 = format_IL_1_2.readFeatures(json_IL_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IL_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IL_1_2.addFeatures(features_IL_1_2);
var lyr_IL_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IL_1_2, 
                style: style_IL_1_2,
                popuplayertitle: "IL_1",
                interactive: false,
                title: '<img src="styles/legend/IL_1_2.png" /> IL_1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_heat_stress_points_1.setVisible(true);lyr_IL_1_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_heat_stress_points_1,lyr_IL_1_2];
lyr_heat_stress_points_1.set('fieldAliases', {'ObjectID_1': 'ObjectID_1', 'GlobalID': 'GlobalID', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'How_Old_ar': 'How_Old_ar', 'Where_are_': 'Where_are_', 'How_Hot_it': 'How_Hot_it', 'What_is_th': 'What_is_th', 'Rate_How_h': 'Rate_How_h', 'Rate_how_1': 'Rate_how_1', 'How_are_yo': 'How_are_yo', 'Add_the_da': 'Add_the_da', 'Enter_your': 'Enter_your', 'What_is_Ge': 'What_is_Ge', 'Other___Wh': 'Other___Wh', 'x': 'x', 'y': 'y', });
lyr_IL_1_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'source': 'source', });
lyr_heat_stress_points_1.set('fieldImages', {'ObjectID_1': 'TextEdit', 'GlobalID': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'How_Old_ar': 'TextEdit', 'Where_are_': 'TextEdit', 'How_Hot_it': 'TextEdit', 'What_is_th': 'TextEdit', 'Rate_How_h': 'TextEdit', 'Rate_how_1': 'TextEdit', 'How_are_yo': 'TextEdit', 'Add_the_da': 'DateTime', 'Enter_your': 'TextEdit', 'What_is_Ge': 'TextEdit', 'Other___Wh': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_IL_1_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'source': 'TextEdit', });
lyr_heat_stress_points_1.set('fieldLabels', {'ObjectID_1': 'no label', 'GlobalID': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'How_Old_ar': 'no label', 'Where_are_': 'no label', 'How_Hot_it': 'no label', 'What_is_th': 'no label', 'Rate_How_h': 'no label', 'Rate_how_1': 'no label', 'How_are_yo': 'no label', 'Add_the_da': 'no label', 'Enter_your': 'no label', 'What_is_Ge': 'no label', 'Other___Wh': 'no label', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_IL_1_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'source': 'no label', });
lyr_IL_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});