define(['../Excel/Workbook', '../Excel/Table'], function (Workbook, Table) {
	var Template = function (worksheetConstructorSettings) {

		this.workbook = new Workbook();
		this.stylesheet = this.workbook.getStyleSheet();

		this.columns = {};

		this.predefinedStyles = {};

		this.predefinedFormatters = {
			date: this.stylesheet.createSimpleFormatter('date'),
			currencyheader: this.stylesheet.createFormat({
				format: "$ #,##0.00;$ #,##0.00;-",
				font: {
					bold: true,
					color: {theme:3}
				},
				fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: 'FFFFF8C0'
        }
			}),
			currency: this.stylesheet.createFormat({
				format: "$ #,##0.00;$ #,##0.00;-",
				color: {theme:3}
			}),
			header: this.stylesheet.createFormat({
				font: { bold: true, underline: true, color: {theme: 3}},
				alignment: {horizontal: 'center'},
				fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: 'FFF1F3F8'
        }
			}),
			subheader: this.stylesheet.createFormat({
				font: { bold: true, color: {theme: 3}},
				fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: 'FFFFF8C0'
        }
			})
		};

	}
	$.extend(true, Template.prototype, {
		prepare: function () {
			return this.workbook;
		},
		//The first element of data should be the header
		addWorksheet: function(name, columns, data) {

			var worksheet = this.workbook.createWorksheet({name: name});

			worksheet.setPageOrientation('landscape');
			worksheet.setColumns(columns);
			worksheet.setData(data);

			this.workbook.addWorksheet(worksheet);

		}
	});
	return Template;
});
