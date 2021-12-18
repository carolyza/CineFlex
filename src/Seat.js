
export default function Seat({id,name,isAvailable}){
    return(
        <div className={`seatMovie ${!isAvailable && "yellow"}` } >
            <h2>{name}</h2>
        </div>
    )

}