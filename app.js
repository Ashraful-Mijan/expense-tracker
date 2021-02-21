const getData = () => {
    const name = document.getElementById('name');
    const subject = document.getElementById('subject');
    const date = document.getElementById('date');
    const amount = document.getElementById('amount');

    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${name.value}</td>
        <td>${subject.value}</td>
        <td>${date.value}</td>
        <td>${amount.value}</td>
        <td class="text-center" onclick="removeRow(event)">❌</td>
    `
    if (nama.value != '' && subject.value != '' && date.value != '' && amount.value != '') {
        tbody.appendChild(tr);
    }

    name.value = '';
    subject.value = '';
    date.value = '';
    amount.value = '';
}


const removeRow = (event) => {
   event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}



