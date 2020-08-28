// View
function show() {
    let html = `
                    <tr>
                        <th>Oppgave</th>
                        <th>Navn</th>
                        <th>Frist</th>
                        <th>Gjort</th>
                        <th>Date Finnished<th/>
                        <th></th>
                    </tr>`;
    for (let i = 0; i < model.tasks.length; i++) {
        html += createHtmlRow(i);
    }
    document.getElementById('tasksTable').innerHTML = html;
}

function createHtmlRow(i) {
    const task = model.tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    if (!task.editMode)
        return `<tr>
                        <td>${task.description}</td>
                        <td>${task.name}</td>
                        <td>${task.date}</td>
                        <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                        <td>${task.finnished}</td>
                        <td>
                            <button onclick="deleteTask(${i})">Slett</button>
                            <button onclick="editTask(${i})">Rediger</button>
                        </td>
                    </tr>
                    `;
    return `<tr>
                        <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                        <td><input id="editName${i}" type="text" value="${task.name}"/></td>
                        <td><input id="editDate${i}" type="date" value="${task.date}"/></td>
                        <td>
                            <button onclick="updateTask(${i})">Lagre</button>
                        </td>
                    </tr>
                    `;
}
