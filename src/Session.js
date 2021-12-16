import { Link } from "react-router-dom";

export default function Session({id,weekday,date,showtimes}){
return(
<div className="session" key={id}>
<div className="time">
    <h2>{weekday} - {date}</h2>
</div>
<Link to={`/assentos/${id}`}>
    <h3>{showtimes[0]}</h3>
</Link>
<Link to={`/assentos/${id}`}>
    <h3>{showtimes[1]}</h3>
</Link>
</div>
)
}