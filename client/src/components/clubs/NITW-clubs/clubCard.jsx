import "./clubs.css"

const ClubCard = ({imageLink, clubName, clubDescription}) => {
    return (
    <div className="club_card">
        <div className="logo">
            <img src={imageLink} alt="logo" className="logo-img"/>
        </div>
        <span className="club_name"><p>{clubName}</p></span>
        <div className="info">
            {clubDescription}
        </div>
        <button className="subscribe_button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>            Subscribe
        </button>
    </div>
    );
}

export default ClubCard;