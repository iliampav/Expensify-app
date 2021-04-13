import React from 'react';
import { Link } from 'react-router-dom';
 
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    //lista dos itens
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>    
    </div>
)

export default ExpenseListItem