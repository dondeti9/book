const bookingsData = [
    { Id: '1',    Customer: 'Ronald Richards',    projectName: 'Green Valley',    plotNo: 'Lot 42',   bookingDate: 'February 11 2014', status: 'Approved' },
     
    { Id: '2',    Customer: 'Devon Lane',     projectName: 'Green Valley',    plotNo: 'Lot 42',    bookingDate: 'August 2 2013', status: 'Approved' },

    { Id: '3',    Customer: 'Courtney Henry',    projectName: 'Green Valley',    plotNo: 'Lot 42',    bookingDate: 'October 30 2017', status: 'Approved' },
    
    { Id: '4',    Customer: 'Ralph Edwards',    projectName: 'Green Valley',    plotNo: 'Lot 42',    bookingDate: 'September 24 2017', status: 'Cancelled' },

    { Id: '5',    Customer: 'RObert Fox',    projectName: 'Green Valley',    plotNo: 'Lot 42',    bookingDate: 'May 31 2015', status: 'Approved' },

    { Id: '6',    Customer: 'Eleanor pena',    projectName: 'Green Valley',    plotNo: 'Lot 42',    bookingDate: 'November 28 2015', status: 'Approved' },

  ];


function createHorizontalLine() {
  const hr = document.createElement('hr');
  hr.classList.add('horizontal-line');
  return hr;
}



function populateTable() {
  const tableBody = document.getElementById('tableBody');

  
function createActionsCell() {
  const cell = document.createElement('td');
  cell.innerHTML = '⋮';
  cell.classList.add('actions-cell');
  return cell;
}

  for (const booking of bookingsData) {
    const row = tableBody.insertRow();

    const IdCell = row.insertCell(0);
    IdCell.innerHTML = booking.Id;

    const CustomerCell = row.insertCell(1);
    CustomerCell.innerHTML = booking.Customer;

    const projectCell = row.insertCell(2);
    projectCell.innerHTML = booking.projectName;

    const plotCell = row.insertCell(3);
    plotCell.innerHTML = booking.plotNo;

    const dateCell = row.insertCell(4);
    dateCell.innerHTML = booking.bookingDate;

    const statusCell = row.insertCell(5);
    statusCell.innerHTML = booking.status;

    row.appendChild(createActionsCell()); 


    tableBody.appendChild(createHorizontalLine());
  }
}

window.onload = populateTable;
 
 
  