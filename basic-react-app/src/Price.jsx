import "./Price.css"

export default function Price({oldPrice, newPrice}){
    return (
        <div className="prices">
            <span className="oldPrice">{oldPrice}</span> &nbsp; &nbsp;
            <span className="newPrice">{newPrice}</span>
        </div>
    );
}