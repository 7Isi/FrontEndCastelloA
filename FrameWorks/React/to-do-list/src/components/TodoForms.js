import "./TodoForms.css";
import { useState } from "react";

//React DOM
//Lõgica do componente
const TodoForm = ({addTask}) => {

    //controller de estado
    //vetor para armazenamento de dados do formulário
    const [task, setTask] = useState("");
    //useState => usa a memória local do navegador
    //para armazenar as mudanças de estado da tela

    //task => armazena as tarefas

    //seTask => armazena as mudanças de estado

    //Função para adicionar tarefa
    //quando apertar o botão de enviar
    const handleSubmit = (e) => {

        //prevenir o comportamento padrão do formulario
        e.preventDefault(); //previne que a página não recarregue

        //verificar se não está vazio
        if(task.trim() !== ""){
            addTask(task); //adiciona tarega no vetor
            setTask(""); //limpa o campo 
        }
    };

    //Renderização da tarefa
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite uma tarefa" value={task} onChange={(e) => setTask(e.target.value)}/>        
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TodoForm;
//componente para criar um formulário para inserir uma nova tarefa
//ou seja, pode ser reutilizado --> (export { "nome do component" })