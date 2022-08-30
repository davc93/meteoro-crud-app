
function Profile(props:any){

    return(
        <div className="profile--container">
            <img src={props.img} alt="Foto perfil" className="profile__picture" />
            <span>Account</span>
            <div className="profile__user-info">
                <span className="profile__img">{props.img}</span>
                <span className="profile__name">{props.name}</span>
                <span className="profile__email">{props.email}</span>
            </div>
            {props.children}
        </div>
    )
}

export default Profile