function Footer () {
    const date = new Date();

    
    const myDate = date.toString().slice(0, 15);
    return (
        <div className="footer">
            <p>Humphrey &copy; 2023 </p>
            <p>{myDate}</p>
        </div>
    )
}
export default Footer;