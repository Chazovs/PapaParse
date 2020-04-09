google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Time of Day');
	data.addColumn('number', 'США');
	/*data.addColumn('number', 'Россия');*/

	data.addRows(chartUSAConfirmed);



	var options = {
		title: 'Подтвержденные случаи в разных странах',
		width: 900,
		height: 500,
		hAxis: {
			format: 'M/d/yy',
			gridlines: {count: 15}
		},
		vAxis: {
			gridlines: {count: 15},
			minValue: 0
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

	chart.draw(data, options);

	var button = document.getElementById('change');

	button.onclick = function() {

		// If the format option matches, change it to the new option,
		// if not, reset it to the original format.
		options.hAxis.format === 'M/d/yy' ?
			options.hAxis.format = 'MMM dd, yyyy' :
			options.hAxis.format = 'M/d/yy';

		chart.draw(data, options);
	};
}
