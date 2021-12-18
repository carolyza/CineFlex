import { Link } from "react-router-dom";

export default function Session({id,weekday,date,showtimes}){
return(
<div className="session">
<div className="time">
    <h2>{weekday} - {date}</h2>
</div>
<div className="seatsMovie">
<Link to={`/assentos/${showtimes[0].id}`}>
    <h3>{showtimes[0].name}</h3>
</Link>
<Link to={`/assentos/${showtimes[1].id}`}>
    <h3>{showtimes[1].name}</h3>
</Link>
</div>
</div>
)
}