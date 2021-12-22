var loanamount = document.getElementById('loan_amount');
var interestchart = document.getElementById('interest_rate');
var timechart = document.getElementById('number_of_years');

function periodic_monthly_payments() {

    pmt = ((interestchart.value / 100 / 12 )* loanamount.value) / (1 - ((1 + (interestchart.value / 100 /12)) ** (-timechart.value * 12)));
    document.getElementById('pmt_result').innerHTML = pmt;
}
function pmt_reset() {
    $("input[type=number]").val('');
}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Loan Amount (%)', 'Interest (%)', 'Years (%)', ' Loan Amount (%)', ' Interest (%)', ' Years (%)'],
        datasets: [{
            data: [loanamount.value, interestchart.value, timechart.value,60,20,20],
            backgroundColor: [
                'rgba(48, 252, 246)',
                'rgba(252, 125, 116)',
                'rgba(20,20,20)',
                'rgba(20,20,20)',
            ],
            borderWidth: 5,
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});
function updatechart() {
    var total = parseInt(loanamount.value) + parseInt(interestchart.value) + parseInt(timechart.value)
  var updatechartvalues = [((parseInt(loanamount.value) / total) * 100), (parseInt(interestchart.value) / total) * 100, (parseInt(timechart.value) / total) * 100];
  myChart.data.datasets[0].data = updatechartvalues;
  myChart.update();
}