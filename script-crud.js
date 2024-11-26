const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = documento.querySelector('.app__form-textarea');


const tarefas = [];


btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');

})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault(); //previne um evento padrão
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
})