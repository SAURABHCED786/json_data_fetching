// Api Urls 
const allApi_urls = [
    "https://jsonplaceholder.typicode.com/posts",    //0
    "https://jsonplaceholder.typicode.com/users",    //1
    "https://jsonplaceholder.typicode.com/comments"  //2
];

function Select() {
    let ele = document.getElementById('sel');
    for (let i = 0; i < allApi_urls.length; i++) {
        // populate select element with json.
        if (i == 0) {
            ele.innerHTML = ele.innerHTML + '<option id="opt_val" value="' + allApi_urls[0] + '">' + 'Post' + '</option>';
            show(ele);
        }
        if (i == 1) {
            ele.innerHTML = ele.innerHTML + '<option id="opt_val" value="' + allApi_urls[1] + '">' + 'User' + '</option>';
        }
        if (i == 2) {
            ele.innerHTML = ele.innerHTML + '<option id="opt_val" value="' + allApi_urls[2] + '">' + 'Comments' + '</option>';
        }
    }
}
function show(ele) {
    // get the selected value from <select> element and show it.
    let opt_val = ele.options[ele.selectedIndex].value;
    let api_url = opt_val;
    // selected index is my api url
    getapi(api_url);
    let msg = document.getElementById('msg');
    msg.innerHTML = 'Selected URL: <b>' + ele.options[ele.selectedIndex].value + '</b>';
}

async function getapi(url) {
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        showing(data);
    }
}

function showing(data) {
    tab = `<tr>
                <th style='text-align: center;'>Id</th>
                <th>Title</th>
                <th>Body</th>    
            </tr> `;

    data.forEach(e => {
        if (e.title) { // find in post
            tab += `<tr>
                    <td style='text-align: center;'>${e.id}</td>
                    <td>${e.title}</td>
                    <td>${e.body}</td>
                </tr>`;
        }
        if (e.username) { // find in users
            tab += `<tr>
                    <td style='text-align: center;'>${e.id}</td>
                    <td>${e.name}</td>
                    <td>${e.email}</td>
                </tr>`;
        }
        if (e.postId) { // find in 
            tab += `<tr>
                    <td style='text-align: center;'>${e.id}</td>
                    <td>${e.name}</td>
                    <td>${e.body}</td>
                </tr>`;
        }
    });
    document.getElementById('dataTable').innerHTML = tab;
}

function myFilter() {
    var input, filter, table, tr, td, i, txtValue;
    const selAtt = document.getElementById("selAtt");
    const sinp = selAtt.options[selAtt.selectedIndex].value
    if (sinp == 'id') { // Filter with Id
        input = document.getElementById("searchInp");
        filter = input.value.toUpperCase();
        table = document.getElementById("dataTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0]; //Find td of zero index
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (sinp == 'title') { // Filter with Title
        input = document.getElementById("searchInp");
        filter = input.value.toUpperCase();
        table = document.getElementById("dataTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1]; //Find td of one index
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }

    }
    if (sinp == 'body') { // Filter with Body
        input = document.getElementById("searchInp");
        filter = input.value.toUpperCase();
        table = document.getElementById("dataTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2]; //Find id of two index
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }

    }

}