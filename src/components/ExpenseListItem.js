import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
 
const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    //lista dos itens
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list0item__sub-title">{moment(createdAt).format('Do MMMM, YYYY')}</span>
            </div>
            <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
        </Link>
)

export default ExpenseListItem