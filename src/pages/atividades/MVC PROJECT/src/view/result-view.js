const resultView = {
    build:()=>{
        const root = document.getElementById('root');
        const tableResult = document.createElement("table");
        tableResult.setAttribute("id","resulttable");
        tableResult.className = "table  table-borderless";
        tableResult.innerHTML = `
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">nome</th>
                <th scope="col">idade</th>
                <th scope="col">login</th>
                <th scope="col">senha</th>
                
                </tr>
                </thead>
                <tboduy id="users-result"></tbody>
        
        `
       
        root.appendChild(tableResult);

    }
}

export {resultView}
