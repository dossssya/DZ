const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        return alert('Нельзя вводить пустоту или пробелы')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')
    const divButtons = document.createElement('div')
    divButtons.setAttribute('class', 'div_button')
    const text = document.createElement('h3')
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')

    function deleteTask() {
        let deleteModal = document.querySelector('.delete')
        let deleteBtnOk = document.querySelector('#delete_but')
        let deleteBtnCancel = document.querySelector('#but_delete')
        deleteModal.style.display = 'flex' // Показываем блок .delete

        deleteBtnOk.addEventListener('click', () => {
            div.remove()
            deleteModal.style.display = 'none'
        })

        deleteBtnCancel.addEventListener('click', () => {
            deleteModal.style.display = 'none'
        })
    }

    deleteButton.addEventListener('click', () => deleteTask())
    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')

    function editTask() {
        let editModal = document.querySelector('.edit')
        let editInput = document.querySelector('#edit_input')
        let editBtnOk = document.querySelector('#edit_but')
        let editBtnCancel = document.querySelector('#but_edit')
        editModal.style.display = 'block'
        editBtnOk.addEventListener('click', () => {
            if (editInput.value.trim() === '') {

            } else {
                text.textContent = editInput.value
                editModal.style.display = 'none'
            }
            editInput.value = ''
        })

        editBtnCancel.addEventListener('click', () => editModal.style.display = 'none')
    }

    editButton.onclick = () => editTask()
    deleteButton.innerHTML = 'DELETE'
    editButton.innerHTML = 'EDIT'

    text.innerHTML = input.value
    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)
    todoList.prepend(div)
    input.value = ''

    text.addEventListener('click', () => text.classList.toggle('toggle'))
}

createButton.onclick = () => createTodo()

window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
}

document.querySelector('.delete').style.display = 'none'