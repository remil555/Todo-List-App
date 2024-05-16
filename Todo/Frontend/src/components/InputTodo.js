import React, { Fragment, useState } from "react";


const InputTodo = () => {

    const [description, setDescription] = useState("");
    const [error,setError] =useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
             
            if(!description.trim()){
                setError("Enter text here");
                return;
            }




            const body = { description };
             await fetch("http://localhost:8000/todos", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";

        } catch (err) {
            console.error(err.message)
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className="btn btn-success">Add Todo</button>

            </form>
            {error && <p className="text text-danger">{error}</p>}
        </Fragment>
    )
};

export default InputTodo;
