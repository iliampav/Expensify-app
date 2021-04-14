import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
 
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    //lista dos itens
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            - 
            {moment(createdAt).format('Do MMMM, YYYY')}
         </p>    u
    </div>
)

export default ExpenseListItem