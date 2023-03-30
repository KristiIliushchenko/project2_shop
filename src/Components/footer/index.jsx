import "./footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="first_part">
                <img className="bone_img" src="https://cdn-icons-png.flaticon.com/512/64/64524.png?w=826&t=st=1680094224~exp=1680094824~hmac=b83402d691d6625e13d88d43fcd635a2dbbcbff7b91b2442b0a154726ed828dd" />
                <h1>DogFood</h1>
            </div>

            <div className="second_part">
                <p>Каталог</p>
                <p>Акции</p>
                <p>Новости</p>
                <p>Отзывы</p>
            </div>

            <div className="third_part">
                <p>Оплата и доставка</p>
                <p>Часто спрашивают</p>
                <p>Обратная связь</p>
                <p>Контакты</p>
            </div>

            <div className="last_part">
                <h3>Mы на связи</h3>
                <h3>8 (999) 00-00-00</h3>
                <p>dogfood.ru@gmail.com</p>
            </div>


        </div>
    )
}