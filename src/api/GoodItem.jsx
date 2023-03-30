export const GoodItem = ({ good }) => {

    return (
        <div>
            <img src={good.pictures} className="good_img" alt={good.name}></img>
            <div className="good_card">
                <p className="good_price">{good.price} ₽</p>
                <p className="good_wight">{good.wight}</p>
                <p className="good_name">{good.name}</p>
                <button className="add_to_basket">В корзину</button>
            </div>
        </div>
    )
}