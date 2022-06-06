import {DayAsInt, Year, MonthAsString} from '../../helpers/DateTimeHelpers'
import './ExpenseDate.css'

function ExpenseDate(props) {
    return  (<div className="expense-date">
        <div className="expense-date__month">{MonthAsString(props.date)} </div>
        <div className="expense-date__year">{Year(props.date)} </div>
        <div className="expense-date__day">{DayAsInt(props.date)}</div>


    </div>);
}
export default ExpenseDate